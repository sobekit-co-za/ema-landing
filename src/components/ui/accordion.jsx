import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Minimal accordion built on framer-motion — no new dependency.
 * `items` is [{ id, q, a }]. One panel open at a time; `defaultOpen` takes an id.
 */
function Accordion({ items = [], defaultOpen, className }) {
  const [open, setOpen] = useState(defaultOpen ?? items[0]?.id ?? null);
  const uid = useId();

  if (!items.length) return null;

  return (
    <div className={cn("divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-card", className)}>
      {items.map((item) => {
        const isOpen = item.id === open;
        const panelId = `${uid}-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={`${panelId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/50 sm:px-6"
              >
                <span
                  className={cn(
                    "text-sm font-medium transition-colors sm:text-base",
                    isOpen ? "text-accent" : "text-foreground"
                  )}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full transition-colors",
                    isOpen ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                  )}
                >
                  <Plus size={15} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${panelId}-trigger`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };
export default Accordion;
