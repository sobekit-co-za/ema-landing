import { motion } from "framer-motion";
import Seo from "@/components/shared/Seo";

/**
 * /child-safety — the public Child Safety Standards URL that Google Play
 * requires before eMaSocial (Social category) can be published.
 *
 * The wording is the compliance text exactly as supplied and must not be
 * rewritten or translated, so it lives here in English rather than in
 * src/content. Only the presentation is ours: every mention of CSAE is set
 * with <Csae> so the keyword stands out without changing a word of the copy.
 */

function Csae() {
  return (
    <strong className="rounded-md bg-primary/15 px-1.5 py-0.5 font-bold text-accent box-decoration-clone">
      Child Sexual Abuse and Exploitation (CSAE)
    </strong>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-b border-border py-8 last:border-b-0">
      <h2 className="mb-4 text-xl font-bold text-accent sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 ps-6 marker:text-primary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ChildSafetyPage() {
  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo
        title="eMaSocial Child Safety Standards | Sobek IT (Pty) Ltd"
        description="Child safety standards for eMaSocial, published by Sobek IT (Pty) Ltd. Zero tolerance for Child Sexual Abuse and Exploitation (CSAE)."
      />

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-sm font-semibold tracking-wide text-primary-strong uppercase">
            eMaSocial <span className="font-normal">by Sobek IT (Pty) Ltd</span>
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            eMaSocial Child Safety Standards
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Published by Sobek IT (Pty) Ltd, developer of eMaSocial
            (com.sobekit.emasocial).
          </p>

          <div className="mt-8 rounded-2xl border-2 border-primary bg-primary/[0.06] p-6 sm:p-8">
            <p
              aria-hidden="true"
              className="text-5xl font-bold tracking-tight text-primary-strong sm:text-6xl"
            >
              CSAE
            </p>
            <p className="mt-3 text-lg leading-relaxed font-semibold text-accent sm:text-2xl">
              We have zero tolerance for <Csae /> on eMaSocial.
            </p>
          </div>
        </motion.div>

        <div className="mt-6">
          <Section id="commitment" title="1. Our Commitment">
            <p>
              Sobek IT (Pty) Ltd has zero tolerance for <Csae /> and Child
              Sexual Abuse Material (CSAM) on eMaSocial. Any content, behavior,
              or account that sexualizes, exploits, endangers, or abuses
              children is strictly prohibited.
            </p>
          </Section>

          <Section id="prohibited" title="2. Prohibited Conduct">
            <p>The following is not allowed on eMaSocial:</p>
            <List
              items={[
                "Creating, uploading, sharing, requesting, or linking to CSAM",
                "Sexualized content involving minors, including images, text, or conversations",
                "Grooming, solicitation, or sexual communication directed at minors",
                "Sextortion or coercion of minors",
                "Trafficking or exploitation of children",
              ]}
            />
          </Section>

          <Section id="reporting" title="3. In-App Reporting">
            <p>
              Users can report any content, profile, or message directly inside
              eMaSocial using the Report option. Reports involving child safety
              are prioritized for review.
            </p>
          </Section>

          <Section id="response" title="4. How We Respond">
            <List
              items={[
                "Violating content is removed and offending accounts are permanently banned.",
                "CSAM is reported to the relevant authorities and child protection bodies, including the National Center for Missing & Exploited Children (NCMEC) where applicable, and South African law enforcement.",
                "We cooperate with lawful investigations.",
              ]}
            />
          </Section>

          <Section id="legal" title="5. Legal Compliance">
            <p>
              We comply with applicable child safety laws and regulations,
              including South African legislation protecting children from
              sexual exploitation.
            </p>
          </Section>

          <Section id="contact" title="6. Child Safety Contact">
            <div className="rounded-2xl border border-border/70 bg-muted/40 p-5">
              <p>
                <strong className="text-accent">Child Safety Officer</strong>,
                Sobek IT (Pty) Ltd
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default ChildSafetyPage;
