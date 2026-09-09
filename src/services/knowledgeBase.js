import {
  ALL_MODULES,
  BUSINESS_MODULES,
  COMPANY,
  FAQS,
  INDUSTRIES,
  LICENCES,
  MONEY_MODULES,
  PRICING,
  SECURITY,
  WHO_WE_ARE,
} from "@/content";

/**
 * Builds the chatbot's product knowledge from the same content layer the site
 * renders. Previously this was ~250 lines of module descriptions hardcoded
 * inside the prompt — a second, drifting copy of the catalogue. Now a module
 * added to src/content/modules.js is known to the bot automatically.
 */

const line = (label, value) => (value ? `${label}: ${value}` : null);

function describeModule(module) {
  return [
    `### ${module.name} — ${module.tagline}`,
    `Family: ${module.family === "money" ? "Money Stack (financial)" : "Business Stack (commercial)"}`,
    `Status: ${module.status}`,
    module.description,
    module.capabilities?.length
      ? `Capabilities: ${module.capabilities.join("; ")}.`
      : null,
    module.howItWorks?.length
      ? `How it works: ${module.howItWorks.map((s, i) => `(${i + 1}) ${s}`).join(" ")}`
      : null,
    module.audience?.length ? `Who it's for: ${module.audience.join(", ")}.` : null,
    line("Fee", module.fee),
    line("Settlement", module.settles),
    line("Android app", module.links?.android),
    line("Website", module.links?.web),
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildKnowledgeBase() {
  return [
    "## ABOUT eMalyami",
    `eMalyami (eMa) is the digital operating system for Africa's small and medium enterprises. ${WHO_WE_ARE.builders}`,
    `Mission: ${WHO_WE_ARE.mission}`,
    `Vision: ${WHO_WE_ARE.vision}`,
    `Registered address: ${COMPANY.address.en}. Legal entity: ${COMPANY.legalEntity}. Company registration number: ${COMPANY.registrationNumber}.`,
    `Licensing — South Africa: ${LICENCES.southAfrica.join("; ")}. eSwatini: ${LICENCES.eswatini.join("; ")}. eSwatini is a COMESA member, so that is a live licence inside the region. Payments operate via sponsor-bank arrangements.`,
    "eMa-CBC is the private-sector execution layer for the COMESA Business Council, under a signed cooperation MoU: 21 COMESA member states, 580 million people, over $900bn of combined GDP. Phase One markets are eSwatini, Kenya, Zambia, Zimbabwe, Uganda, Mauritius and Malawi; country activation follows local permissions.",
    "In final development: AI credit scoring using fuzzy logic and alternative data (under testing), eMaFriends social influence ratings (final testing), a multi-regulatory oversight dashboard (final testing), and eMaCoin token-wallet infrastructure (in development). Do not describe these as available today.",
    `Phone: ${COMPANY.phone}. Email: ${COMPANY.email.general} (general), ${COMPANY.email.support} (support), ${COMPANY.email.compliance} (compliance).`,
    `Main website: ${COMPANY.website}. Main Android app: ${COMPANY.apps.main}. Blog: ${COMPANY.blog}.`,
    "",
    "## THE PLATFORM ARCHITECTURE",
    "Every module settles into ONE eWallet balance, under ONE verified identity (one phone number, KYC + OTP + geo-tagging), producing ONE statement. That is what makes the 14 modules interoperable: a sale in eMaPOS, a payout from eMaServe and a contribution to SIBA all land in the same balance, so there is nothing to reconcile.",
    `The Money Stack (financial modules): ${MONEY_MODULES.map((m) => m.name).join(", ")}.`,
    `The Business Stack (commercial modules): ${BUSINESS_MODULES.map((m) => m.name).join(", ")}.`,
    "",
    "## THE 14 MODULES",
    ALL_MODULES.map(describeModule).join("\n\n"),
    "",
    "## PRICING",
    PRICING.subtitle,
    PRICING.fees.map((f) => `- ${f.module}: ${f.when}`).join("\n"),
    "",
    "## SECURITY",
    SECURITY.items.map((s) => `- ${s.title}: ${s.detail}`).join("\n"),
    SECURITY.footnote,
    "",
    "## WHO IT SERVES (industry recipes)",
    INDUSTRIES.map(
      (i) =>
        `- ${i.name}: problem — ${i.problem} Setup — ${i.modules.join(", ")}. Outcome — ${i.outcome}`
    ).join("\n"),
    "",
    "## FREQUENTLY ASKED QUESTIONS",
    "If the user asks one of these, or a close variation, answer with this text and do not add to it.",
    FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n"),
  ].join("\n");
}

export default buildKnowledgeBase;
