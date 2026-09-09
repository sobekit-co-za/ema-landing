/**
 * WHICH BRAIN ANSWERS THE CHAT.
 *
 *   "local"  — offline retrieval over src/content (default).
 *              No API key, no quota, no network call, no cost. It can only ever
 *              return copy that exists in the content layer, so it cannot
 *              invent a fee, a licence or a module.
 *
 *   "gemini" — the original Google Gemini path, untouched. Needs
 *              VITE_GEMINI_KEY_* and is bound by the free tier's 20
 *              requests/day/project.
 *
 * ─── HOW TO SWITCH ───────────────────────────────────────────────────────────
 *
 *   Permanently: change DEFAULT_ENGINE below.
 *   Per environment: set VITE_CHATBOT_ENGINE=gemini in .env.local, or as a
 *   build secret in the Dockerfile / CI workflow.
 *   To try it once without editing anything: append ?chat=gemini to the URL.
 *
 * Both engines stay compiled in, so flipping this is a one-word change with no
 * other edits anywhere.
 */

const DEFAULT_ENGINE = "local";

const ENGINES = ["local", "gemini"];

/** ?chat=gemini — an escape hatch for support and QA, same idea as ?lang=. */
function fromUrl() {
  if (typeof window === "undefined") return null;
  try {
    const value = new URLSearchParams(window.location.search).get("chat");
    return ENGINES.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function resolveEngine() {
  const configured = import.meta.env.VITE_CHATBOT_ENGINE;
  return (
    fromUrl() ??
    (ENGINES.includes(configured) ? configured : null) ??
    DEFAULT_ENGINE
  );
}

export const CHAT_ENGINE = resolveEngine();

export const USING_GEMINI = CHAT_ENGINE === "gemini";

/**
 * Below this score the retriever does not believe its own best match and asks
 * a clarifying question instead of answering. Raising it makes the bot more
 * cautious (more "did you mean"), lowering it makes it more willing to guess.
 */
export const CONFIDENCE_FLOOR = 3.2;
