/**
 * Active locale.
 *
 * One build serves every language. The visitor chooses from the header
 * switcher, the choice is stored in the browser, and every later visit comes
 * back in that language. Content files carry all five locales side by side, so
 * this is the ONLY place the language is chosen.
 *
 * Resolution order (first match wins):
 *   1. ?lang=fr in the URL — an escape hatch for support and QA. It is stored
 *      and then removed from the address bar, so URLs stay language-free.
 *   2. The visitor's stored choice.
 *   3. The browser's own language, if we speak it — so an Arabic-speaking
 *      first-time visitor lands in Arabic without touching anything.
 *   4. DEFAULT_LOCALE.
 *
 * index.html carries a small copy of steps 1-3 that runs before first paint,
 * so an RTL visitor never sees a flash of left-to-right layout. Change the
 * order here and change it there too.
 */

const DEFAULT_LOCALE = "en";

export const SUPPORTED_LOCALES = ["en", "ar", "fr", "pt", "es"];

/**
 * Endonyms — each language written in itself. A switcher that lists "Arabic"
 * in English is no use to the person who needs it.
 */
export const LOCALE_NAMES = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  pt: "Português",
  es: "Español",
};

const RTL_LOCALES = ["ar"];

const STORAGE_KEY = "ema:locale";

function isSupported(value) {
  return SUPPORTED_LOCALES.includes(value);
}

function readStored() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(stored) ? stored : null;
  } catch {
    // Private mode or storage blocked by policy — fall through to detection.
    return null;
  }
}

function writeStored(locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Nothing to do: the choice just won't survive this page.
  }
}

/** "fr-CA", "pt-BR" and "es-MX" should land on fr, pt and es. */
function fromBrowser() {
  const nav = window.navigator;
  const tags = nav?.languages?.length ? nav.languages : [nav?.language];

  for (const tag of tags) {
    if (!tag) continue;
    const base = String(tag).toLowerCase().split("-")[0];
    if (isSupported(base)) return base;
  }
  return null;
}

/** ?lang= has done its job once stored — keep it out of the address bar. */
function stripLangParam() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch {
    // History blocked — harmless, the param simply stays visible.
  }
}

function resolveLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  let fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get("lang");
  } catch {
    fromUrl = null;
  }

  if (isSupported(fromUrl)) {
    writeStored(fromUrl);
    stripLangParam();
    return fromUrl;
  }

  return readStored() ?? fromBrowser() ?? DEFAULT_LOCALE;
}

export const LOCALE = resolveLocale();

export const IS_RTL = RTL_LOCALES.includes(LOCALE);

export const LANG_TAG = LOCALE;

/** Reflect the active locale on <html> so direction and lang are correct. */
if (typeof document !== "undefined") {
  document.documentElement.lang = LOCALE;
  document.documentElement.dir = IS_RTL ? "rtl" : "ltr";
}

/**
 * Switch the site to another language.
 *
 * Every content module resolves its locale once, when it is first imported, so
 * the strings already on screen cannot be swapped in place. Storing the choice
 * and reloading is what makes the switch total — copy, text direction, <html
 * lang>, meta tags and the chatbot's own language all change together, and the
 * visitor stays on the page they were reading.
 */
export function setLocale(next) {
  if (!isSupported(next) || next === LOCALE) return;
  writeStored(next);
  window.location.reload();
}

/**
 * Pick the active locale's copy out of a { en, ar, ... } bundle.
 * Falls back to English so an untranslated string renders readable text
 * instead of `undefined`.
 */
export function pick(bundle) {
  if (!bundle) return undefined;
  return bundle[LOCALE] ?? bundle.en;
}

/**
 * Resolve a record that mixes shared keys with per-locale bundles.
 * `{ id: "x", en: { name }, ar: { name } }` → `{ id: "x", name }`
 */
export function localize(record) {
  if (!record) return record;
  const { en, ar, fr, pt, es, ...shared } = record;
  return { ...shared, ...(pick({ en, ar, fr, pt, es }) ?? {}) };
}
