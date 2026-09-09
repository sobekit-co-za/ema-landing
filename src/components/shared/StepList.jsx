import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Numbered "how it works" steps with a connecting spine.
 * The spine sits on the inline-start edge so it mirrors correctly in RTL.
 */
function StepList({ steps = [], className }) {
  if (!steps.length) return null;

  return (
    <ol className={cn("relative space-y-6", className)}>
      <span
        aria-hidden
        className="absolute top-2 bottom-2 start-[15px] w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
      />
      {steps.map((step, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          className="relative flex gap-4"
        >
          <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-medium text-white">
            {i + 1}
          </span>
          <p className="pt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
            {step}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

export default StepList;
