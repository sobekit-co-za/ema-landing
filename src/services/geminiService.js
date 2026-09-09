import { GoogleGenerativeAI } from "@google/generative-ai";
import buildKnowledgeBase from "./knowledgeBase";
import { USAGE_GUIDELINES, POLICY_AND_TERMS } from "./legacyPolicyText";

const MODEL = "gemini-3.6-flash";

/**
 * Emitted verbatim by the model when a question has nothing to do with
 * eMalyami. It is a sentinel, not prose, so the UI can test for it exactly —
 * the previous code searched the answer for the substring "not relevant",
 * which silently threw away any real answer that happened to use the phrase.
 */
export const OFF_TOPIC = "<<OFF_TOPIC>>";

const apiKeys = [
  import.meta.env.VITE_GEMINI_KEY_1,
  import.meta.env.VITE_GEMINI_KEY_2,
  import.meta.env.VITE_GEMINI_KEY_3,
  import.meta.env.VITE_GEMINI_KEY_4,
].filter(Boolean);

/**
 * Thrown when the shared free-tier quota is exhausted, so the UI can say
 * "busy, one moment" instead of "something went wrong".
 */
export class RateLimitError extends Error {
  constructor(retryAfterSeconds) {
    super("Rate limited");
    this.name = "RateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

/**
 * Built once at module load. This is ~14k tokens; the previous implementation
 * rebuilt the knowledge base and re-concatenated the full legal text on every
 * single message.
 *
 * Structure matters as much as content: the product knowledge is marked as the
 * primary source and the ~12k tokens of legal boilerplate are demoted to
 * reference material, so the model stops answering ordinary product questions
 * in the register of a terms-and-conditions document.
 */
const SYSTEM_INSTRUCTION = [
  "# ROLE",
  "You are the assistant on eMalyami's website. eMalyami (eMa) is the digital operating system for Africa's small and medium enterprises. You help visitors — small business owners, prospective partners, and curious readers — understand what eMa is and which of its modules fit their situation.",
  "",
  "# HOW TO ANSWER",
  "- Answer the question that was actually asked. Lead with the answer, not with preamble.",
  "- Be concrete. Name the specific module, the specific fee, the specific step. Vague reassurance is worse than a short answer.",
  "- Keep it to 2-4 short sentences, or a tight bulleted list when comparing several modules. This is a chat window, not a brochure.",
  "- Write plainly, in the visitor's own register. No corporate filler, no 'Certainly!', no restating the question back.",
  "- When someone describes their business, recommend the specific modules that fit and say in one line why each one fits.",
  "- Reply in the language the visitor writes in.",
  "",
  "# GROUNDING — THIS IS THE IMPORTANT PART",
  "- Every factual claim you make must come from the KNOWLEDGE below. Never invent a module, a price, a fee, a partner, a date, a statistic or a URL.",
  "- If the knowledge does not cover something, say so plainly in one sentence and point to the relevant contact address. Do not fill the gap with plausible-sounding detail.",
  "- Some features are marked as in development or in testing. Never describe those as available today.",
  "- Quote a fee or a number only if it appears verbatim below.",
  "",
  "# SCOPE",
  `- If the question has nothing to do with eMalyami, its modules, its markets or running a small business with it, reply with exactly this and nothing else: ${OFF_TOPIC}`,
  "- Greetings, 'what do you do?', 'can you help me?' and small talk about the visitor's business are all IN scope. Answer them normally and warmly — do not use the off-topic reply for these.",
  "- General small-business questions are in scope when you can connect them to what eMa offers.",
  "",
  "# FORMATTING",
  "- Plain prose by default. Use `-` bullets only for genuine lists.",
  "- Use **bold** sparingly, for module names or a key figure.",
  "- Write links as markdown: [eMaPOS](https://…). Only ever link to URLs that appear in the knowledge below.",
  "",
  "# CONVERSATION",
  "- You can see the conversation so far. Resolve follow-ups like 'how much does it cost?' or 'and for a salon?' against what was already discussed instead of asking the visitor to repeat themselves.",
  "",
  "# ============ PRIMARY KNOWLEDGE: eMalyami ============",
  buildKnowledgeBase(),
  "",
  "# ============ REFERENCE ONLY: LEGAL AND POLICY ============",
  "The text below is eMalyami's usage guidelines, policy and terms. It is reference material for when a visitor asks specifically about terms, liability, privacy, data handling, refunds, disputes or account rules. Do NOT let its tone or subject matter leak into ordinary product answers, and do not volunteer it unprompted. When you do use it, summarise the relevant clause in plain language rather than pasting it.",
  "",
  USAGE_GUIDELINES,
  "",
  POLICY_AND_TERMS,
].join("\n");

const generationConfig = {
  // Low but not zero: factual and consistent, without being robotic.
  temperature: 0.3,
  topP: 0.9,
  // Gemini 3 counts its internal reasoning against maxOutputTokens. Even at the
  // low thinking level it spends ~500 tokens thinking, so a budget sized for
  // the visible answer alone truncates replies mid-sentence.
  maxOutputTokens: 2048,
  // This is a grounded FAQ bot, not a reasoning task. Low thinking roughly
  // halves latency and leaves the budget for the answer.
  thinkingConfig: { thinkingLevel: "low" },
};

/**
 * Map the UI's chat log into Gemini's history format.
 *
 * Gemini requires the history to start with a user turn and to alternate, so
 * any leading bot messages (the greeting bubble) are dropped.
 */
const toGeminiHistory = (chatHistory = []) => {
  const turns = chatHistory
    .filter((m) => typeof m.message === "string" && m.message.trim())
    .map((m) => ({
      role: m.from === "user" ? "user" : "model",
      parts: [{ text: m.message }],
    }));

  const firstUser = turns.findIndex((t) => t.role === "user");
  if (firstUser === -1) return [];

  // Collapse any accidental consecutive same-role turns; the API rejects them.
  return turns.slice(firstUser).reduce((acc, turn) => {
    const prev = acc[acc.length - 1];
    if (prev && prev.role === turn.role) {
      prev.parts[0].text += `\n${turn.parts[0].text}`;
      return acc;
    }
    acc.push(turn);
    return acc;
  }, []);
};

const isRateLimit = (error) =>
  /429|quota|rate limit|RESOURCE_EXHAUSTED/i.test(error?.message ?? "");

/**
 * Google returns how long to wait, e.g. "Please retry in 34.85s". Honour it
 * rather than guessing, falling back to exponential backoff.
 */
/** Google reports how long to wait, e.g. "Please retry in 34.85s". */
const suggestedDelayMs = (error) => {
  const m = /retry in (\d+(?:\.\d+)?)s/i.exec(error?.message ?? "");
  return m ? Math.ceil(parseFloat(m[1]) * 1000) + 250 : null;
};

// A visitor will wait a few seconds for a busy bot; they will not wait a
// minute. Past this budget we tell them to come back rather than hang.
const REQUEST_DEADLINE_MS = 30000;
// Beyond this many people waiting, the queue itself is the problem: reject
// immediately rather than promising an answer that arrives minutes later.
const MAX_QUEUE_DEPTH = 3;

/**
 * Free-tier quota is metered per Google Cloud *project*
 * (GenerateRequestsPerDayPerProjectPerModel-FreeTier, 20 requests/day), so keys
 * created in different projects have genuinely independent budgets. Rotating
 * across them multiplies the daily allowance.
 *
 * Each key therefore gets its own cooldown: when one is refused we park it and
 * move straight to the next rather than waiting, because a sibling key in
 * another project is very likely still good.
 */
const keyState = apiKeys.map(() => ({ cooldownUntil: 0, strikes: 0 }));

// Escalating per-key cooldown. A per-minute refusal clears quickly; a key that
// keeps refusing has probably burnt its daily allowance, so stop asking.
const COOLDOWN_LADDER = [60_000, 5 * 60_000, 30 * 60_000];

let keyCursor = 0;

const claimKey = () => {
  const now = Date.now();
  for (let i = 0; i < apiKeys.length; i++) {
    const idx = keyCursor++ % apiKeys.length;
    if (keyState[idx].cooldownUntil <= now) return idx;
  }
  return -1;
};

const parkKey = (idx, error) => {
  const state = keyState[idx];
  state.strikes += 1;
  const ladder = COOLDOWN_LADDER[Math.min(state.strikes - 1, COOLDOWN_LADDER.length - 1)];
  const suggested = suggestedDelayMs(error) ?? 0;
  state.cooldownUntil = Date.now() + Math.max(ladder, suggested);
};

const secondsUntilAnyKeyFree = () => {
  const soonest = Math.min(...keyState.map((k) => k.cooldownUntil));
  return Math.max(1, Math.ceil((soonest - Date.now()) / 1000));
};

/**
 * One in-flight request at a time, process-wide, so a burst of visitors does
 * not spend the whole allowance in one second.
 */
let queue = Promise.resolve();
let queueDepth = 0;

const callModel = async (userQuery, chatHistory, deadline) => {
  if (apiKeys.length === 0) {
    console.error("❌ No Gemini API keys found — check .env.local");
    throw new Error("No API key available");
  }

  let lastError;

  // At most one attempt per key: they are independent budgets, so once every
  // key has refused there is nothing left to try.
  for (let i = 0; i < apiKeys.length; i++) {
    if (Date.now() > deadline) break;

    const idx = claimKey();
    if (idx === -1) break;

    try {
      const genAI = new GoogleGenerativeAI(apiKeys[idx]);
      const model = genAI.getGenerativeModel({
        model: MODEL,
        systemInstruction: SYSTEM_INSTRUCTION,
        generationConfig,
      });

      const chat = model.startChat({ history: toGeminiHistory(chatHistory) });
      const result = await chat.sendMessage(userQuery);
      const text = result.response.text()?.trim();

      if (!text) throw new Error("Empty response from model");

      keyState[idx].strikes = 0;

      // Never show a sentence that stops mid-word.
      if (result.response.candidates?.[0]?.finishReason === "MAX_TOKENS") {
        console.warn("⚠️ Response hit the token ceiling and was trimmed.");
        return text.replace(/\s*\S*$/, "").replace(/[,;:]$/, "") + "…";
      }

      return text;
    } catch (error) {
      lastError = error;

      if (isRateLimit(error)) {
        parkKey(idx, error);
        console.warn(`⏳ Key ${idx + 1} out of quota — switching to the next.`);
        continue;
      }

      // A revoked or malformed key is key-specific; park it briefly and move on.
      parkKey(idx, error);
      console.error(`❌ Key ${idx + 1} failed (${error.message}) — trying next.`);
    }
  }

  if (!lastError || isRateLimit(lastError)) {
    throw new RateLimitError(secondsUntilAnyKeyFree());
  }
  throw new Error(
    `Failed to generate AI response: ${lastError?.message ?? "unknown error"}`
  );
};

const generateText = (userQuery, chatHistory = []) => {
  if (queueDepth >= MAX_QUEUE_DEPTH) {
    return Promise.reject(new RateLimitError(30));
  }

  queueDepth += 1;
  const deadline = Date.now() + REQUEST_DEADLINE_MS + queueDepth * 5000;

  const run = queue
    .then(() => callModel(userQuery, chatHistory, deadline))
    .finally(() => {
      queueDepth -= 1;
    });

  // Keep the chain alive even when this call rejects.
  queue = run.catch(() => {});
  return run;
};

export { renderMarkdown as formatLinks } from "./chatbot/markdown";

export { generateText };
