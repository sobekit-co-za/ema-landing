/**
 * Turning free text into comparable tokens.
 *
 * The site serves English, Arabic, French, Portuguese and Spanish, so folding
 * has to cope with accents AND with Arabic orthography, where the same word is
 * routinely written several ways (أ / إ / ا, ة / ه, ى / ي) and may carry
 * optional vowel marks the visitor will not type.
 */

/**
 * Arabic combining marks: harakat, the superscript alef, the tatweel
 * elongation character AND the hamza/maddah marks (U+0653-U+0655).
 *
 * The hamza range matters more than it looks. fold() runs NFD, which
 * decomposes أ into ا + U+0654; if that mark is not stripped here, the closing
 * NFC recomposes it and every أ/إ/آ normalisation below silently does nothing.
 * That made all five hamza spellings distinct and broke Arabic matching
 * wholesale.
 */
const ARABIC_MARKS = /[\u064B-\u065F\u0670\u0640]/g;

/**
 * Fold a string to its comparison form: lowercase, no accents, no Arabic
 * orthographic variation, no punctuation.
 */
export function fold(text = "") {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    // Strip Latin combining accents (café → cafe) but keep the base letters.
    .replace(/[̀-ͯ]/g, "")
    .replace(ARABIC_MARKS, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ىی]/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .normalize("NFC");
}

const ARABIC_CHAR = /[\u0600-\u06FF]/;
const AR_PROCLITICS = /^[\u0648\u0641\u0628\u0643\u0644]/; // و ف ب ك ل
const AR_SUFFIXES = ["\u0627\u062A", "\u064A\u0646", "\u0648\u0646", "\u0647\u0627", "\u0647\u0645", "\u0643\u0645", "\u0646\u0627", "\u0647", "\u064A"];

/**
 * Light Arabic stemming.
 *
 * Arabic glues the definite article and conjunctions onto the front of a word
 * and agreement markers onto the back, so "safe" reaches us as آمنة and "the
 * selling" as البيع. Whole-word matching then fails against a dictionary that
 * lists the bare stems. Stripping the common affixes from BOTH sides of the
 * comparison is what makes Arabic queries work at all — it does not need to be
 * linguistically perfect, only consistent.
 */
function lightStemArabic(word) {
  if (!ARABIC_CHAR.test(word)) return word;
  let w = word;

  if (w.length > 4 && w.startsWith("\u0627\u0644")) w = w.slice(2);
  else if (w.length > 4 && AR_PROCLITICS.test(w)) {
    w = w.slice(1);
    if (w.length > 4 && w.startsWith("\u0627\u0644")) w = w.slice(2);
  }

  for (const suffix of AR_SUFFIXES) {
    if (w.endsWith(suffix) && w.length - suffix.length >= 3) {
      w = w.slice(0, -suffix.length);
      break;
    }
  }
  return w;
}

/**
 * Very light English suffix stripping. Deliberately not a real stemmer: an
 * aggressive one mangles product names (eMaSave → emasav) and the corpus is
 * small enough that plural folding is all that pays for itself.
 */
function stem(token) {
  if (token.length <= 4) return token;
  if (token.endsWith("ies")) return token.slice(0, -3) + "y";
  if (token.endsWith("ses") || token.endsWith("xes") || token.endsWith("ches"))
    return token.slice(0, -2);
  if (token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  return token;
}

/** Words that carry no signal and would otherwise dominate short queries. */
const STOP = new Set([
  // en
  "the","a","an","is","are","was","were","do","does","did","i","you","we","my",
  "me","it","to","of","for","and","or","in","on","at","with","can","could",
  "how","what","which","that","this","there","have","has","get","got","be",
  "am","from","by","about","as","if","so","not","but","any","all","some",
  // fr
  "le","la","les","un","une","des","du","de","je","tu","il","elle","nous",
  "vous","est","sont","que","qui","quoi","comment","pour","avec","dans","sur",
  "et","ou","ne","pas","ce","cette","mon","ma","mes","au","aux",
  // pt / es
  "o","os","as","um","uma","uns","umas","eu","ele","ela","nos","voce","como",
  "que","qual","para","com","em","no","na","dos","das","e","ou","nao","meu",
  "minha","el","los","las","yo","usted","es","son","por","del","al","mi","tu",
  "se","lo","su","muy",
  // ar
  "من","الى","على","في","عن","مع","هل","ما","ماذا","كيف","هذا","هذه","هو",
  "هي","انا","انت","نحن","ال","او","و","لا","ان","التي","الذي","كم",
]);

/**
 * Arabic forms plurals by reshaping the word from the inside — مخبز (bakery)
 * becomes مخابز, which no suffix stripper can bridge. Dropping the long vowels
 * leaves a consonant skeleton that both forms share.
 *
 * Emitted as an EXTRA token rather than a replacement: skeletons collide
 * (several words reduce to the same three letters), so they earn a low IDF and
 * act as a weak fallback signal instead of overriding exact matches.
 */
function arabicSkeleton(word) {
  if (!ARABIC_CHAR.test(word) || word.length < 5) return null;
  const skeleton = word.replace(/[\u0627\u0648\u064A]/g, "");
  return skeleton.length >= 3 && skeleton !== word ? skeleton : null;
}

/** Split folded text into meaningful, stemmed tokens. */
export function tokenize(text = "") {
  const tokens = fold(text)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(lightStemArabic)
    .map(stem);

  const extra = tokens.map(arabicSkeleton).filter(Boolean);
  return extra.length ? [...tokens, ...extra] : tokens;
}

/**
 * A space-delimited, space-padded form of the text, for phrase matching that
 * respects word boundaries.
 *
 * Plain substring matching is a trap here: "machine" contains "hi", so a
 * question about a card machine was being answered with a greeting, and
 * "emasafe" contains "safe", so a misspelled module name was answered with the
 * security page. \b does not help — it is meaningless in Arabic script — so
 * both sides are reduced to padded word sequences instead.
 */
export function padded(text = "") {
  const words = fold(text)
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .map(lightStemArabic)
    .join(" ");
  return ` ${words} `;
}

/** Does `phrase` occur in `text` as whole words? */
export function hasPhrase(text, phrase) {
  const needle = padded(phrase).trim();
  return needle.length > 0 && padded(text).includes(` ${needle} `);
}

/**
 * Levenshtein distance, bailing out as soon as it exceeds `max`.
 * Used only to rescue typos on tokens that matched nothing, so it never runs
 * on the common path.
 */
export function editDistance(a, b, max = 2) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      if (curr[j] < best) best = curr[j];
    }
    if (best > max) return max + 1;
    prev = curr;
  }
  return prev[b.length];
}
