import {
  ALL_MODULES,
  ARCHITECTURE,
  CHATBOT,
  COMPANY,
  INDUSTRIES,
  LICENCES,
  PRICING,
  SECURITY,
  WHO_WE_ARE,
} from "@/content";
import { CONFIDENCE_FLOOR } from "../config";
import { search, confidenceOf, looksRelevant } from "./search";
import { detectIntent, detectModule } from "./intents";
import { moduleById } from "./corpus";

/**
 * THE LOCAL ASSISTANT.
 *
 * Retrieval decides *which* content answers the question; intent decides
 * *which part* of it to read out; confidence decides whether to answer at all.
 *
 * Everything it says is assembled from src/content, so it cannot state a fee,
 * a licence or a capability that is not already published on the site. When it
 * is unsure it says so and offers choices — a wrong answer about money is far
 * more expensive than an honest "did you mean".
 */

const L = () => CHATBOT.labels;
const C = () => CHATBOT.chips;

const link = (label, url) => (url ? `[${label}](${url})` : null);

const joinLines = (parts) => parts.filter(Boolean).join("\n\n");

/* ─────────────────────────────── chips ─────────────────────────────── */

const chip = (label, send) => ({ label, send });

/**
 * Chips are keyed by label in the UI, and a repeated option reads as a bug.
 * Documents can legitimately share a title (the eMaPOS module and the eMaPOS
 * fee row), so de-duplicate at the point of offer.
 */
const uniqueChips = (chips) => {
  const seen = new Set();
  return chips.filter((c) => {
    if (!c || seen.has(c.label)) return false;
    seen.add(c.label);
    return true;
  });
};

/** The guided front door, shown before the visitor has typed anything. */
export function openingChips() {
  return [
    chip(C().modules, "__modules"),
    chip(C().pricing, "__pricing"),
    chip(C().security, "__security"),
    chip(C().start, "__start"),
  ];
}

const moduleChips = () =>
  ALL_MODULES.map((m) => chip(m.name, m.name));

const tradeChips = () =>
  INDUSTRIES.map((i) => chip(i.name, i.name));

const contactChip = () => chip(C().contact, "__contact");

/** After answering about a module, offer the questions that usually follow. */
function followUpChips(module) {
  const related = (module.related ?? [])
    .map(moduleById)
    .filter(Boolean)
    .slice(0, 2)
    .map((m) => chip(m.name, m.name));

  return uniqueChips([
    chip(`${C().pricing} — ${module.name}`, `${module.name} ${C().pricing}`),
    ...related,
    contactChip(),
  ]);
}

/* ──────────────────────────── renderers ────────────────────────────── */

function renderModule(module, intent) {
  const links = [
    link(L().app, module.links?.android),
    link(L().site, module.links?.web),
  ].filter(Boolean);

  if (intent === "howItWorks" && module.howItWorks?.length) {
    return joinLines([
      `**${module.name}** — ${module.tagline}`,
      `**${L().steps}**`,
      module.howItWorks.map((step, i) => `- ${i + 1}. ${step}`).join("\n"),
      links.join(" · ") || null,
    ]);
  }

  if (intent === "pricing") {
    const row = (PRICING.fees ?? []).find((f) =>
      f.module.toLowerCase().includes(module.name.toLowerCase())
    );
    return joinLines([
      `**${module.name}** — ${L().fee}: ${module.fee ?? row?.when ?? "—"}`,
      row && !module.fee ? null : row ? `${row.module}: ${row.when}` : null,
      module.settles,
    ]);
  }

  return joinLines([
    `**${module.name}** — ${module.tagline}`,
    module.summary,
    module.capabilities?.length
      ? module.capabilities.slice(0, 4).map((c) => `- ${c}`).join("\n")
      : null,
    module.fee ? `**${L().fee}:** ${module.fee}` : null,
    links.join(" · ") || null,
  ]);
}

function renderIndustry(industry) {
  const modules = (industry.modules ?? []).map(moduleById).filter(Boolean);
  return joinLines([
    `**${industry.name}**`,
    `**${L().problem}:** ${industry.problem}`,
    `**${L().setup}:** ${modules.map((m) => m.name).join(", ")}`,
    modules.map((m) => `- **${m.name}** — ${m.tagline}`).join("\n"),
    `**${L().outcome}:** ${industry.outcome}`,
  ]);
}

const renderFaq = (faq) => joinLines([`**${faq.q}**`, faq.a]);

const renderPricing = () =>
  joinLines([
    PRICING.subtitle,
    (PRICING.fees ?? []).map((f) => `- **${f.module}** — ${f.when}`).join("\n"),
  ]);

const renderSecurity = () =>
  joinLines([
    SECURITY.subtitle,
    (SECURITY.items ?? []).map((s) => `- **${s.title}** — ${s.detail}`).join("\n"),
    LICENCES?.southAfrica?.length
      ? `- **South Africa:** ${LICENCES.southAfrica.join("; ")}`
      : null,
    LICENCES?.eswatini?.length
      ? `- **eSwatini:** ${LICENCES.eswatini.join("; ")}`
      : null,
    SECURITY.footnote,
  ]);

const renderContact = () =>
  joinLines([
    [
      COMPANY.email?.support ? `- ${COMPANY.email.support}` : null,
      COMPANY.email?.general ? `- ${COMPANY.email.general}` : null,
      COMPANY.phone ? `- ${COMPANY.phone}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  ]);

const renderArchitecture = () =>
  joinLines([
    `**${ARCHITECTURE.title}**`,
    ARCHITECTURE.subtitle,
    (ARCHITECTURE.layers ?? [])
      .map((l) => `- **${l.title}** — ${l.detail}`)
      .join("\n"),
  ]);

const renderAbout = () =>
  joinLines([WHO_WE_ARE.subtitle, WHO_WE_ARE.mission, WHO_WE_ARE.vision]);

/** Read a ranked document out, in the register the intent asked for. */
function renderDoc(doc, intent) {
  switch (doc.kind) {
    case "module":
      return renderModule(doc.payload, intent);
    case "faq":
      return renderFaq(doc.payload);
    case "industry":
      return renderIndustry(doc.payload);
    case "fee":
      return `**${doc.payload.module}** — ${doc.payload.when}`;
    case "pricing":
      return renderPricing();
    case "security":
      return renderSecurity();
    case "contact":
      return renderContact();
    case "architecture":
      return renderArchitecture();
    case "company":
      return renderAbout();
    default:
      return doc.body;
  }
}

function chipsForDoc(doc) {
  if (doc.kind === "module") return followUpChips(doc.payload);
  if (doc.kind === "industry") {
    const modules = (doc.payload.modules ?? []).map(moduleById).filter(Boolean);
    return uniqueChips([
      ...modules.slice(0, 3).map((m) => chip(m.name, m.name)),
      contactChip(),
    ]);
  }
  return [chip(C().pricing, "__pricing"), chip(C().start, "__start"), contactChip()];
}

/* ───────────────────────── guided-flow commands ─────────────────────── */

/**
 * Chips send a `__command` rather than prose, so a guided tap is never at the
 * mercy of the retriever. Free text always goes through search.
 */
function handleCommand(command) {
  switch (command) {
    case "__modules":
      return { text: `**${L().modules}**`, chips: moduleChips() };
    case "__trades":
      return { text: `**${L().trade}**`, chips: tradeChips() };
    case "__pricing":
      return { text: renderPricing(), chips: [chip(C().start, "__start"), contactChip()] };
    case "__security":
      return { text: renderSecurity(), chips: [chip(C().start, "__start"), contactChip()] };
    case "__start":
      return {
        text: joinLines([
          renderArchitecture(),
          COMPANY.apps?.main ? link(L().app, COMPANY.apps.main) : null,
        ]),
        chips: [chip(C().modules, "__modules"), contactChip()],
      };
    case "__contact":
      return { text: renderContact(), chips: openingChips() };
    default:
      return null;
  }
}

/* ──────────────────────────── the entry point ───────────────────────── */

/**
 * Answer a question entirely offline.
 *
 * `lastModuleId` carries the conversation: it is what lets "how much does it
 * cost?" resolve against the module discussed a moment ago, which is the one
 * thing a stateless retriever cannot do on its own.
 */
export function answerLocally(rawQuery, { lastModuleId = null } = {}) {
  const query = String(rawQuery ?? "").trim();

  if (query.startsWith("__")) {
    const handled = handleCommand(query);
    if (handled) return { ...handled, moduleId: null, confident: true };
  }

  const intent = detectIntent(query);
  const mentioned = detectModule(query);
  // Follow-ups ("and the fee?") inherit the module already under discussion.
  const moduleId = mentioned?.id ?? (intent !== "search" ? lastModuleId : null);

  if (intent === "greeting") {
    return {
      text: joinLines([CHATBOT.greeting, CHATBOT.askIntro]),
      chips: openingChips(),
      moduleId: null,
      confident: true,
    };
  }

  if (intent === "contact") {
    return { text: renderContact(), chips: openingChips(), moduleId, confident: true };
  }

  // A module in hand plus a specific intent needs no retrieval at all.
  //
  // A bare product name ("eMaPOS", or a misspelling of it) counts too — but
  // only when the NAME was recognised. A module matched through everyday
  // vocabulary ("card machine") is left to retrieval, because the FAQ that
  // answers "do I need a card machine?" is a better reply than the module
  // datasheet.
  const namedDirectly = mentioned?.via === "name" || mentioned?.via === "fuzzy";
  const directIntents = namedDirectly
    ? ["pricing", "howItWorks", "whatIs", "search"]
    : ["pricing", "howItWorks", "whatIs"];

  if (moduleId && directIntents.includes(intent)) {
    const module = moduleById(moduleId);
    if (module) {
      return {
        text: renderModule(module, intent),
        chips: followUpChips(module),
        moduleId,
        confident: true,
      };
    }
  }

  if (intent === "pricing" && !moduleId) {
    return {
      text: renderPricing(),
      chips: [chip(C().modules, "__modules"), contactChip()],
      moduleId: null,
      confident: true,
    };
  }

  if (intent === "security") {
    return { text: renderSecurity(), chips: openingChips(), moduleId, confident: true };
  }

  if (intent === "getStarted") {
    return { ...handleCommand("__start"), moduleId, confident: true };
  }

  const results = search(query);
  const confidence = confidenceOf(results);

  // Nothing found, or nothing that actually covers what was asked.
  if (results.length === 0 || !looksRelevant(results)) {
    return {
      text: CHATBOT.noMatch,
      chips: uniqueChips([...openingChips(), contactChip()]),
      moduleId: null,
      confident: false,
    };
  }

  // Not sure enough to answer: offer the candidates instead of guessing.
  if (confidence < CONFIDENCE_FLOOR) {
    return {
      text: CHATBOT.suggestions,
      chips: uniqueChips([
        ...results.slice(0, 3).map((r) => chip(r.doc.title, r.doc.title)),
        contactChip(),
      ]),
      moduleId: null,
      confident: false,
    };
  }

  const best = results[0].doc;
  // "I run a bakery" should land on the industry recipe even if a module
  // scored marginally higher on keyword overlap.
  const preferred =
    intent === "recommend"
      ? results.find((r) => r.doc.kind === "industry")?.doc ?? best
      : best;

  return {
    text: renderDoc(preferred, intent),
    chips: chipsForDoc(preferred),
    moduleId: preferred.kind === "module" ? preferred.payload.id : moduleId,
    confident: true,
  };
}
