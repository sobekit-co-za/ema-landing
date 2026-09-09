import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PROBLEM } from "@/content";

/**
 * The problem eMa solves. Without this, fourteen modules read as feature bloat
 * rather than a solution — so it sits directly under the hero.
 */
function Problem() {
  const columns = [
    {
      label: PROBLEM.beforeLabel,
      items: PROBLEM.before,
      Icon: X,
      tone: {
        card: "border-destructive/20 bg-destructive/[0.04]",
        chip: "bg-destructive/10 text-destructive",
        title: "text-destructive",
      },
    },
    {
      label: PROBLEM.afterLabel,
      items: PROBLEM.after,
      Icon: Check,
      tone: {
        card: "border-primary/30 bg-primary/[0.06]",
        chip: "bg-primary/15 text-primary-strong",
        title: "text-primary-strong",
      },
    },
  ];

  return (
    <section className="overflow-x-hidden px-12 py-8 sm:px-24 xl:px-32">
      <SectionHeader title={PROBLEM.title} subtitle={PROBLEM.subtitle} />

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
        {columns.map(({ label, items, Icon, tone }, col) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: col * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={`rounded-2xl border p-6 sm:p-8 ${tone.card}`}
          >
            <h3 className={`mb-5 text-lg font-bold sm:text-xl ${tone.title}`}>
              {label}
            </h3>

            <ul className="space-y-3.5">
              {items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: col * 0.15 + i * 0.06,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${tone.chip}`}
                  >
                    <Icon size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-accent/90 sm:text-base">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Problem;
