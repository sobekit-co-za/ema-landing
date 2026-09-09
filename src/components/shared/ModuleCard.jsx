import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IS_RTL, UI } from "@/content";
import { cn } from "@/lib/utils";

const Arrow = IS_RTL ? ArrowLeft : ArrowRight;

/**
 * One module, rendered as a card.
 * Used by the Money Stack, the Business Stack, the /modules index and the
 * "works well with" cross-links — so a module looks the same everywhere.
 */
function ModuleCard({ module, index = 0, showNumber = false, className }) {
  if (!module) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.08, 0.5),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("h-full", className)}
    >
      <Link
        to={`/modules/${module.id}`}
        className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:p-6"
      >
        <div className="mb-3 flex items-center gap-3">
          {showNumber && (
            <span className="grid size-8 shrink-0 place-items-center rounded-[16px] bg-accent text-sm text-white">
              {index + 1}
            </span>
          )}
          <div>
            <h3 className="text-xl font-bold leading-tight md:text-2xl">
              {module.name}
            </h3>
            <p className="text-sm leading-snug text-primary-strong md:text-base">
              {module.tagline}
            </p>
          </div>
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {module.summary}
        </p>

        <ul className="mb-4 space-y-1.5">
          {module.capabilities?.slice(0, 3).map((cap) => (
            <li
              key={cap}
              className="flex items-start gap-2 text-xs text-accent/90 md:text-sm"
            >
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
              {cap}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-primary-strong">
          {UI.learnMore}
          <Arrow
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
          />
        </span>
      </Link>
    </motion.div>
  );
}

export default ModuleCard;
