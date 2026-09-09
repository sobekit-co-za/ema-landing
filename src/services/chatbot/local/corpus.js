import {
  ALL_MODULES,
  COMPANY,
  FAQS,
  INDUSTRIES,
  LICENCES,
  PRICING,
  SECURITY,
  WHO_WE_ARE,
  ARCHITECTURE,
} from "@/content";
import { tokenize } from "./normalize";
import { MODULE_SYNONYMS } from "@/content/chatbotVocabulary";
import { LOCALE } from "@/content";

/**
 * THE SEARCHABLE CORPUS.
 *
 * Built once, from the same content the pages render — so an edit to
 * src/content changes what the bot knows, exactly like it changes the site.
 * There is no second copy of the catalogue to drift.
 *
 * Every document keeps its source object in `payload`, so the responder can
 * compose a different answer for "what is eMaPOS" than for "how does eMaPOS
 * work" without needing two documents.
 */

/** Reverse index: module id → the everyday words people use for it. */
const synonymsFor = (moduleId) =>
  MODULE_SYNONYMS.filter((entry) => entry.add.includes(moduleId))
    .flatMap((entry) => entry.phrases[LOCALE] ?? entry.phrases.en ?? [])
    .join(" ");

function moduleDocs() {
  return ALL_MODULES.map((module) => ({
    id: `module:${module.id}`,
    kind: "module",
    title: module.name,
    // Title and keywords are weighted above body text by the scorer.
    keywords: [module.id, module.name, module.tagline, synonymsFor(module.id)].join(" "),
    body: [
      module.tagline,
      module.summary,
      module.description,
      module.capabilities?.join(" "),
      module.howItWorks?.join(" "),
      module.audience?.join(" "),
      module.fee,
      module.settles,
    ]
      .filter(Boolean)
      .join(" "),
    payload: module,
  }));
}

function faqDocs() {
  return FAQS.map((faq, i) => ({
    id: `faq:${faq.id ?? i}`,
    kind: "faq",
    title: faq.q,
    keywords: faq.q,
    body: `${faq.q} ${faq.a}`,
    payload: faq,
  }));
}

function industryDocs() {
  return INDUSTRIES.map((industry) => ({
    id: `industry:${industry.id}`,
    kind: "industry",
    title: industry.name,
    keywords: `${industry.name} ${industry.id}`,
    body: [industry.name, industry.problem, industry.outcome].filter(Boolean).join(" "),
    payload: industry,
  }));
}

function pricingDocs() {
  const fees = PRICING.fees ?? [];
  return [
    {
      id: "pricing:all",
      kind: "pricing",
      title: PRICING.title ?? "Pricing",
      keywords: [PRICING.title, PRICING.subtitle].filter(Boolean).join(" "),
      body: [PRICING.subtitle, ...fees.map((f) => `${f.module} ${f.when}`)]
        .filter(Boolean)
        .join(" "),
      payload: { fees },
    },
    // One document per fee line, so "what does eMaTuma charge" lands on the
    // exact row rather than the whole table.
    ...fees.map((fee, i) => ({
      id: `pricing:${i}`,
      kind: "fee",
      title: fee.module,
      keywords: fee.module,
      body: `${fee.module} ${fee.when}`,
      payload: fee,
    })),
  ];
}

function securityDocs() {
  const items = SECURITY.items ?? [];
  return [
    {
      id: "security:all",
      kind: "security",
      title: SECURITY.title ?? "Security",
      keywords: [SECURITY.title, SECURITY.subtitle].filter(Boolean).join(" "),
      body: [
        SECURITY.subtitle,
        ...items.map((s) => `${s.title} ${s.detail}`),
        SECURITY.footnote,
        LICENCES?.southAfrica?.join(" "),
        LICENCES?.eswatini?.join(" "),
      ]
        .filter(Boolean)
        .join(" "),
      payload: { items, footnote: SECURITY.footnote, licences: LICENCES },
    },
  ];
}

function companyDocs() {
  return [
    {
      id: "company:about",
      kind: "company",
      title: WHO_WE_ARE?.title ?? "About eMalyami",
      keywords: "emalyami ema about company who mission vision",
      body: [WHO_WE_ARE?.builders, WHO_WE_ARE?.mission, WHO_WE_ARE?.vision]
        .filter(Boolean)
        .join(" "),
      payload: WHO_WE_ARE,
    },
    {
      id: "company:contact",
      kind: "contact",
      title: COMPANY.email?.support ?? "Contact",
      keywords: "contact support email phone address help human agent",
      body: [
        COMPANY.phone,
        COMPANY.email?.general,
        COMPANY.email?.support,
        COMPANY.email?.compliance,
        COMPANY.website,
      ]
        .filter(Boolean)
        .join(" "),
      payload: COMPANY,
    },
    {
      id: "company:architecture",
      kind: "architecture",
      title: ARCHITECTURE?.title ?? "One wallet, one identity",
      keywords: "wallet identity kyc otp statement reconcile interoperable how it fits together",
      body: [
        ARCHITECTURE?.subtitle,
        ...(ARCHITECTURE?.layers ?? []).map((l) => `${l.label} ${l.title} ${l.detail}`),
      ]
        .filter(Boolean)
        .join(" "),
      payload: ARCHITECTURE,
    },
  ];
}

/** Documents, each with its tokens precomputed. Built once at module load. */
function build() {
  const docs = [
    ...moduleDocs(),
    ...faqDocs(),
    ...industryDocs(),
    ...pricingDocs(),
    ...securityDocs(),
    ...companyDocs(),
  ];

  return docs.map((doc) => ({
    ...doc,
    titleTokens: tokenize(doc.title),
    keywordTokens: tokenize(doc.keywords ?? ""),
    bodyTokens: tokenize(doc.body ?? ""),
  }));
}

export const CORPUS = build();

/** Every distinct token in the corpus — the vocabulary typo-rescue searches. */
export const VOCABULARY = (() => {
  const seen = new Set();
  for (const doc of CORPUS) {
    for (const t of doc.titleTokens) seen.add(t);
    for (const t of doc.keywordTokens) seen.add(t);
    for (const t of doc.bodyTokens) seen.add(t);
  }
  return [...seen];
})();

export const moduleById = (id) =>
  ALL_MODULES.find((m) => m.id === id);
