import { motion } from "framer-motion";
import { Link } from "react-router";
import Accordion from "@/components/ui/accordion";
import { FAQS, FAQ_HEADER, HELP_PAGE } from "@/content";
import Seo from "@/components/shared/Seo";
import { SEO } from "@/content/seo";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** /faq — the full question set. */
function FaqPage() {
  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo
        title={SEO.faq.title}
        description={SEO.faq.description}
        jsonLd={FAQ_JSONLD}
      />
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {FAQ_HEADER.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-lg">
          {FAQ_HEADER.subtitle}
        </p>
      </motion.div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion items={FAQS} />

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/[0.06] p-6 text-center">
          <p className="text-sm text-accent sm:text-base">
            {HELP_PAGE.subtitle}
          </p>
          <Link
            to="/help"
            className="mt-3 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            {HELP_PAGE.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
