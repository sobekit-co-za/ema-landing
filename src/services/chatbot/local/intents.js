import { fold, editDistance, hasPhrase, padded } from "./normalize";
import {
  INTENT_PHRASES,
  MODULE_SYNONYMS,
  HOW_PHRASES,
  WHAT_PHRASES,
} from "@/content/chatbotVocabulary";
import { ALL_MODULES } from "@/content";
import { LOCALE } from "@/content";

/**
 * What is the visitor actually trying to do?
 *
 * Retrieval finds the right *document*; intent decides which *part* of it to
 * read out. "What is eMaPOS", "how do I set up eMaPOS" and "what does eMaPOS
 * cost" all rank the same document top — they should not get the same answer.
 */

const phrasesFor = (intent) => {
  const bundle = INTENT_PHRASES[intent];
  return [...(bundle[LOCALE] ?? []), ...(bundle.en ?? [])];
};

const matches = (text, intent) =>
  phrasesFor(intent).some((phrase) => hasPhrase(text, phrase));

/**
 * Which module is the visitor talking about, if any?
 * Checks product names first, then the everyday vocabulary from synonyms.js.
 */
export function detectModule(rawQuery) {
  // Longest names first, so "eMaSave" is not swallowed by a match on "eMa".
  const byName = [...ALL_MODULES].sort((a, b) => b.name.length - a.name.length);
  for (const module of byName) {
    if (hasPhrase(rawQuery, module.name) || hasPhrase(rawQuery, module.id)) {
      return { id: module.id, via: "name" };
    }
  }

  for (const entry of MODULE_SYNONYMS) {
    const phrases = entry.phrases[LOCALE] ?? entry.phrases.en ?? [];
    if (phrases.some((phrase) => hasPhrase(rawQuery, phrase))) {
      // The first token in `add` is always the module id.
      const id = entry.add[0];
      if (ALL_MODULES.some((m) => m.id === id)) return { id, via: "synonym" };
    }
  }

  // Misspelled product names are the single most common typo — "emmapos",
  // "emasafe" — and people also split them ("ema pos", "ema tuma").
  //
  // Raw words, not tokens: the stemmer turns "emmapos" into "emmapo", which is
  // two edits from "emapos" and so slips past the threshold. Adjacent pairs are
  // joined so a split name is compared as one word.
  const words = padded(rawQuery).trim().split(/\s+/).filter(Boolean);
  const candidates = [
    ...words,
    ...words.slice(0, -1).map((w, i) => w + words[i + 1]),
  ];

  for (const candidate of candidates) {
    if (candidate.length < 5) continue;
    for (const module of ALL_MODULES) {
      const allowed = candidate.length >= 7 ? 2 : 1;
      if (editDistance(candidate, fold(module.name), allowed) <= allowed) {
        return { id: module.id, via: "fuzzy" };
      }
    }
  }
  return null;
}

const anyOf = (text, bundle) =>
  [...(bundle[LOCALE] ?? []), ...(bundle.en ?? [])].some((p) =>
    hasPhrase(text, p)
  );

/**
 * Order matters: the more specific reading wins. "How much does eMaPOS cost"
 * is a pricing question that happens to start with "how", not a how-it-works
 * question.
 */
export function detectIntent(rawQuery) {
  const query = String(rawQuery ?? "").trim();

  if (!query) return "greeting";
  if (matches(query, "pricing")) return "pricing";
  if (matches(query, "security")) return "security";
  if (matches(query, "contact")) return "contact";
  if (matches(query, "getStarted")) return "getStarted";
  if (anyOf(query, HOW_PHRASES)) return "howItWorks";
  if (matches(query, "recommend")) return "recommend";
  if (anyOf(query, WHAT_PHRASES)) return "whatIs";

  // A bare greeting only counts when it is the whole message — otherwise
  // "hi, how much is eMaPOS" would be answered with a wave.
  if (query.length <= 24 && matches(query, "greeting")) return "greeting";

  return "search";
}
