import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";
import { AlertCircle, Sparkles } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import TabSwitcher from "@/components/shared/TabSwitcher";
import { INDUSTRIES, INDUSTRIES_HEADER, getModules } from "@/content";

/**
 * Industry recipes. Turns the module catalogue into "here is *my* setup",
 * which is what actually converts an SME.
 */
function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0].id);
  const industry = INDUSTRIES.find((i) => i.id === active) ?? INDUSTRIES[0];
  const modules = getModules(industry.modules);

  return (
    <section
      id="industries"
      className="overflow-x-hidden px-6 py-12 sm:px-16 lg:py-16 xl:px-32"
    >
      <SectionHeader
        title={INDUSTRIES_HEADER.title}
        subtitle={INDUSTRIES_HEADER.subtitle}
      />

      <div className="mx-auto mt-8 max-w-5xl">
        <TabSwitcher
          tabs={INDUSTRIES.map((i) => ({ id: i.id, label: i.name }))}
          active={active}
          onChange={setActive}
          layoutId="industry-pill"
          className="justify-start sm:justify-center"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 flex items-center gap-2 text-[11px] font-medium tracking-wide text-destructive uppercase">
                  <AlertCircle size={13} />
                  {INDUSTRIES_HEADER.problemLabel}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.problem}
                </p>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-[11px] font-medium tracking-wide text-primary-strong uppercase">
                  <Sparkles size={13} />
                  {INDUSTRIES_HEADER.outcomeLabel}
                </p>
                <p className="text-sm leading-relaxed text-accent sm:text-base">
                  {industry.outcome}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border/70 pt-5">
              <p className="mb-3 text-[11px] font-medium tracking-wide text-primary-strong uppercase">
                {INDUSTRIES_HEADER.setupLabel}
              </p>

              <ul className="flex flex-wrap gap-2">
                {modules.map((module, i) => (
                  <motion.li
                    key={module.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <Link
                      to={`/modules/${module.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3.5 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      {module.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Industries;
