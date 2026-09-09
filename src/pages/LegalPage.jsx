import { motion } from "framer-motion";
import Seo from "@/components/shared/Seo";
import { LEGAL } from "@/content/legal";
import {
  POLICY_AND_TERMS,
  USAGE_GUIDELINES,
} from "@/services/legacyPolicyText";

/**
 * /terms-conditions, /privacy-policy and /fraud-awareness.
 *
 * All three were linked from the footer and all three rendered a completely
 * blank page — no header, no text, nothing — which for a licensed payments
 * platform is a launch blocker, not a cosmetic one.
 *
 * The clauses come from src/services/legacyPolicyText.js, the same verbatim
 * source the chatbot answers from, so there is exactly one copy of the legal
 * wording in the codebase and the page can never drift from what the bot says.
 *
 * The text is a plain string of numbered clauses. Rather than guess at
 * structure, it is rendered paragraph by paragraph: a short line that looks
 * like a heading is set as one, everything else stays body copy.
 */

const HEADING = /^(?:\*\s*)?(?:\d+\.\s*)?[^.]{3,70}$/;

function isHeading(block) {
  const line = block.trim();
  return (
    line.length < 72 &&
    !line.endsWith(".") &&
    !line.endsWith(":") &&
    HEADING.test(line)
  );
}

function Document({ text }) {
  const blocks = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="mt-8 space-y-3">
      {blocks.map((block, i) =>
        isHeading(block) ? (
          <h2
            key={i}
            className="pt-5 text-base font-bold text-accent sm:text-lg"
          >
            {block.replace(/^\*\s*/, "")}
          </h2>
        ) : (
          <p
            key={i}
            className="text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {block}
          </p>
        )
      )}
    </div>
  );
}

/**
 * `variant` picks which document this route publishes:
 *   terms   — the full user agreement
 *   privacy — the same agreement, framed on its privacy clauses
 *   fraud   — the usage guidelines, preceded by the practical rules
 */
function LegalPage({ variant }) {
  const page = LEGAL[variant];
  const isFraud = variant === "fraud";

  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo title={`${page.title} · eMa`} description={page.intro} />

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            {page.intro}
          </p>
        </motion.div>

        {isFraud && (
          <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
            <h2 className="mb-3 text-base font-bold text-accent sm:text-lg">
              {page.tipsLabel}
            </h2>
            <ul className="space-y-2.5">
              {page.tips.map((tip) => (
                <li
                  key={tip}
                  className="text-sm leading-relaxed text-accent sm:text-base"
                >
                  • {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-8 rounded-2xl border border-border/70 bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
          {LEGAL.sourceNote}
        </p>

        <Document text={isFraud ? USAGE_GUIDELINES : POLICY_AND_TERMS} />
      </div>
    </div>
  );
}

export default LegalPage;
