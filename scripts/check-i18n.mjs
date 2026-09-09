#!/usr/bin/env node
/**
 * Guards the content layer.
 *
 * Two failure modes this catches, both of which shipped untranslated text to
 * the wrong language builds before:
 *
 *   1. Hardcoded non-Latin (Arabic) strings left inside components, which then
 *      appear verbatim in the English / French / Portuguese builds.
 *   2. A content bundle that is missing a locale, which silently falls back to
 *      English instead of erroring.
 *
 *   node scripts/check-i18n.mjs
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const CONTENT = path.join(SRC, "content");

const LOCALES = ["en", "ar", "fr", "pt", "es"];
const ARABIC = /[؀-ۿ]/;

// Files that legitimately contain non-Latin characters that are NOT copy:
//   legacyPolicyText.js — verbatim legal text, deliberately not translated.
//   normalize.js        — Arabic letterforms used as orthographic folding
//                         rules, plus a stopword list. Linguistic data for the
//                         search index; nothing here is ever shown to anyone.
const ALLOW_HARDCODED = new Set([
  path.join(SRC, "services", "legacyPolicyText.js"),
  path.join(SRC, "services", "chatbot", "local", "normalize.js"),
]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(jsx?|tsx?)$/.test(entry)) out.push(full);
  }
  return out;
}

let failures = 0;

// ── 1. No hardcoded Arabic outside the content layer ────────────────────────
const stray = [];
for (const file of walk(SRC)) {
  if (file.startsWith(CONTENT) || ALLOW_HARDCODED.has(file)) continue;

  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (ARABIC.test(line)) {
        stray.push(`${path.relative(ROOT, file)}:${i + 1}  ${line.trim().slice(0, 72)}`);
      }
    });
}

if (stray.length) {
  failures += stray.length;
  console.error(`\n✗ ${stray.length} hardcoded string(s) outside src/content:\n`);
  stray.forEach((s) => console.error("   " + s));
  console.error("\n   Move these into src/content and translate all five locales.");
} else {
  console.log("✓ no hardcoded translatable strings outside src/content");
}

// ── 2. Every content bundle carries every locale ────────────────────────────
const gaps = [];
for (const file of readdirSync(CONTENT).filter((f) => f.endsWith(".js"))) {
  if (file === "locale.js" || file === "index.js") continue;

  const src = readFileSync(path.join(CONTENT, file), "utf8")
    // strip comments so prose examples don't count as bundles
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");

  const count = (loc) =>
    (src.match(new RegExp(`(^|[\\s{,])${loc}:\\s*[{["'\`]`, "gm")) || []).length;

  const counts = Object.fromEntries(LOCALES.map((l) => [l, count(l)]));
  if (counts.en === 0) continue;

  const missing = LOCALES.filter((l) => counts[l] !== counts.en);
  if (missing.length) {
    gaps.push(
      `${file}: en=${counts.en} but ${missing.map((l) => `${l}=${counts[l]}`).join(", ")}`
    );
  }
}

if (gaps.length) {
  failures += gaps.length;
  console.error(`\n✗ ${gaps.length} content file(s) with locale gaps:\n`);
  gaps.forEach((g) => console.error("   " + g));
} else {
  console.log("✓ every content bundle covers en / ar / fr / pt / es");
}

if (failures) {
  console.error(`\n${failures} problem(s) found.\n`);
  process.exit(1);
}
console.log("\ni18n checks passed.\n");
