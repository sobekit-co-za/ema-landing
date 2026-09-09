import { CORPUS, VOCABULARY } from "./corpus";
import { fold, tokenize, editDistance, hasPhrase } from "./normalize";
import { MODULE_SYNONYMS } from "@/content/chatbotVocabulary";
import { LOCALE } from "@/content";

/**
 * BM25 over the content corpus.
 *
 * BM25 rather than plain TF-IDF because it saturates term frequency: a module
 * description that says "payment" nine times should not outrank the FAQ that
 * actually answers the question about payments.
 */

// A hit in the title is worth far more than a hit buried in a description.
const FIELD_WEIGHTS = { title: 5, keywords: 3, body: 1 };

const K1 = 1.4;
const B = 0.72;

/** Per-document weighted term frequencies, computed once. */
const INDEX = CORPUS.map((doc) => {
  const tf = new Map();
  const addAll = (tokens, weight) => {
    for (const token of tokens) {
      tf.set(token, (tf.get(token) ?? 0) + weight);
    }
  };
  addAll(doc.titleTokens, FIELD_WEIGHTS.title);
  addAll(doc.keywordTokens, FIELD_WEIGHTS.keywords);
  addAll(doc.bodyTokens, FIELD_WEIGHTS.body);

  let length = 0;
  for (const v of tf.values()) length += v;

  return { doc, tf, length, foldedTitle: fold(doc.title) };
});

const AVG_LENGTH = INDEX.reduce((sum, e) => sum + e.length, 0) / (INDEX.length || 1);

/** Document frequency per term. */
const DF = (() => {
  const df = new Map();
  for (const entry of INDEX) {
    for (const term of entry.tf.keys()) df.set(term, (df.get(term) ?? 0) + 1);
  }
  return df;
})();

const idf = (term) => {
  const df = DF.get(term) ?? 0;
  if (df === 0) return 0;
  return Math.log(1 + (INDEX.length - df + 0.5) / (df + 0.5));
};

/**
 * Expand the query with domain vocabulary: "card machine" also searches for
 * "emapos". This is what lets someone who has never heard the product names
 * still find the right module.
 */
export function expandQuery(rawQuery) {
  const extra = [];

  for (const entry of MODULE_SYNONYMS) {
    const phrases = entry.phrases[LOCALE] ?? entry.phrases.en ?? [];
    if (phrases.some((phrase) => hasPhrase(rawQuery, phrase))) {
      extra.push(...entry.add);
    }
  }
  return extra;
}

/**
 * Rescue tokens that match nothing in the corpus — almost always a typo.
 *
 * Deliberately conservative. An earlier, looser version happily rewrote "joke"
 * to "job" and then confidently answered a request for a joke with the
 * eMaServe module. Short words are left alone, and two edits are only allowed
 * once a word is long enough that two edits still leave it recognisable.
 */
function repairTypos(tokens) {
  return tokens.map((token) => {
    if (DF.has(token) || token.length < 5) return token;

    const allowed = token.length >= 7 ? 2 : 1;
    let best = null;
    let bestDistance = allowed + 1;

    for (const candidate of VOCABULARY) {
      if (Math.abs(candidate.length - token.length) > allowed) continue;
      const distance = editDistance(token, candidate, allowed);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = candidate;
        if (distance === 1) break;
      }
    }
    return best ?? token;
  });
}

/**
 * Rank the corpus against a query.
 * Returns every document that scored above zero, best first.
 */
export function search(rawQuery, { limit = 6 } = {}) {
  const folded = fold(rawQuery);
  const base = repairTypos(tokenize(rawQuery));
  const terms = [...new Set([...base, ...expandQuery(rawQuery)])];

  if (terms.length === 0) return [];

  const results = [];

  for (const entry of INDEX) {
    let score = 0;

    for (const term of terms) {
      const tf = entry.tf.get(term);
      if (!tf) continue;
      const norm = 1 - B + (B * entry.length) / AVG_LENGTH;
      score += idf(term) * ((tf * (K1 + 1)) / (tf + K1 * norm));
    }

    if (score === 0) continue;

    // How much of what the visitor asked about does this document actually
    // cover? A high score earned by one incidental word is not an answer.
    let matched = 0;
    for (const term of terms) if (entry.tf.has(term)) matched += 1;

    // The visitor typed the document's title almost verbatim — that is a much
    // stronger signal than any amount of accumulated term overlap.
    if (entry.foldedTitle.length > 2 && folded.includes(entry.foldedTitle)) {
      score += 6;
    }

    results.push({ doc: entry.doc, score, coverage: matched / terms.length });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

/**
 * How much to trust the top hit.
 *
 * Absolute score alone is misleading — a long query scores high against
 * everything. What matters is whether the winner stands clear of the
 * runner-up, so a query that fits three documents equally well is treated as
 * ambiguous and sent to the clarifying path.
 */
export function confidenceOf(results) {
  if (results.length === 0) return 0;
  const top = results[0].score;
  const second = results[1]?.score ?? 0;
  const margin = second === 0 ? 1 : Math.min(1, (top - second) / top + 0.45);
  return top * margin;
}

/**
 * Is this question even about eMa?
 *
 * Raw score is a poor test — a long question scores something against almost
 * everything. Coverage is the honest one: "who won the world cup in 1998"
 * shares a word or two with the corpus by accident, and should be answered
 * with "I don't know that", not with the closest FAQ.
 */
export function looksRelevant(results) {
  if (results.length === 0) return false;
  return results[0].coverage >= 0.34;
}
