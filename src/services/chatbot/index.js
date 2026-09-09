import { COMPANY } from "@/content";
import { CHAT_ENGINE, USING_GEMINI } from "./config";
import { renderMarkdown } from "./markdown";
import { answerLocally, openingChips } from "./local/engine";
import { generateText, OFF_TOPIC } from "../geminiService";

/**
 * ONE DOOR, TWO BRAINS.
 *
 * The UI asks this module a question and gets back a rendered bubble plus the
 * chips to offer next. Which engine produced it is not the UI's business, so
 * switching engines in config.js changes nothing else in the app.
 */

export { CHAT_ENGINE, USING_GEMINI, openingChips };

const offTopic = () =>
  `I can only help with questions about eMalyami. For anything else, please contact ${COMPANY.email.support}.`;

const bubble = (text, chips = [], moduleId = null, confident = true) => ({
  text,
  html: renderMarkdown(text),
  chips,
  moduleId,
  confident,
});

/**
 * Answer one message.
 *
 * `history` is only used by the Gemini engine (it needs the transcript for
 * follow-ups); the local engine carries context in `lastModuleId` instead,
 * which is all a retriever can meaningfully use.
 *
 * Throws on failure — the hook turns that into a friendly bubble, including
 * the RateLimitError case on the Gemini path.
 */
export async function ask(query, { history = [], lastModuleId = null } = {}) {
  if (USING_GEMINI) {
    const raw = await generateText(query, history);
    if (raw.trim() === OFF_TOPIC) return bubble(offTopic());
    return bubble(raw);
  }

  const answer = answerLocally(query, { lastModuleId });
  return bubble(answer.text, answer.chips, answer.moduleId, answer.confident);
}
