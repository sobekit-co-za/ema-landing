import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Chip-style tab row with a sliding active pill.
 * Scrolls horizontally on narrow screens rather than wrapping into a block.
 */
function TabSwitcher({ tabs = [], active, onChange, layoutId = "tab-pill", className }) {
  if (!tabs.length) return null;

  return (
    <div
      role="tablist"
      className={cn(
        "flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(tab.id)}
            className={cn(
              "relative shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
              isActive
                ? "border-accent text-white"
                : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-accent"
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default TabSwitcher;
