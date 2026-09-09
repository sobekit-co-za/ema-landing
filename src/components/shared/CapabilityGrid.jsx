import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Full capability list for a module, as a checked grid. */
function CapabilityGrid({ items = [], className }) {
  if (!items.length) return null;

  return (
    <ul className={cn("grid gap-x-6 gap-y-3 sm:grid-cols-2", className)}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
          className="flex items-start gap-2.5"
        >
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-strong">
            <Check size={12} strokeWidth={3} />
          </span>
          <span className="text-sm leading-snug text-accent/90 md:text-base">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default CapabilityGrid;
