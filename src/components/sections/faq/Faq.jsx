import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Accordion from "@/components/ui/accordion";
import { FAQ_HEADER, HOME_FAQS, IS_RTL } from "@/content";

const Arrow = IS_RTL ? ArrowLeft : ArrowRight;

/** Top questions on the home page; /faq carries the full set. */
function Faq() {
  return (
    <section className="overflow-x-hidden px-6 py-12 sm:px-16 lg:py-16 xl:px-32">
      <SectionHeader title={FAQ_HEADER.title} subtitle={FAQ_HEADER.subtitle} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto mt-8 max-w-3xl"
      >
        <Accordion items={HOME_FAQS} />

        <div className="mt-6 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-primary-strong hover:underline"
          >
            {FAQ_HEADER.seeAll}
            <Arrow size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Faq;
