import { motion } from "framer-motion";
import { Link } from "react-router";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { ARCHITECTURE, MONEY_MODULES, BUSINESS_MODULES, UI } from "@/content";

/**
 * "One identity → one balance → two stacks → one ledger".
 *
 * Built from layout primitives rather than a hand-drawn SVG: the diagram has to
 * mirror for RTL and reflow to a single column on mobile, and CSS logical
 * properties do both for free where a fixed SVG viewBox would not.
 */

const layerAnim = (i) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.6,
    delay: i * 0.12,
    ease: [0.21, 0.47, 0.32, 0.98],
  },
});

function Connector({ delay = 0 }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="mx-auto block h-6 w-px origin-top bg-gradient-to-b from-primary/60 to-primary/20"
    />
  );
}

/**
 * One layer of the diagram.
 *
 * `inverted` paints the card in the dark accent colour. Each text colour is set
 * explicitly for the variant rather than overridden with descendant selectors:
 * the previous version passed `bg-accent` alongside the base `bg-card`, and
 * because the classes were string-concatenated (not merged) the white `bg-card`
 * won — leaving white text on a white card.
 */
function LayerCard({ layer, inverted = false, className = "", children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-5 py-4 text-center shadow-sm",
        inverted
          ? "border-accent bg-accent"
          : "border-border/70 bg-card",
        className
      )}
    >
      <p
        className={cn(
          "mb-1 text-[11px] font-medium tracking-wide uppercase",
          // The darker text shade is for light cards; on the dark accent the
          // lighter brand orange reads better.
          inverted ? "text-primary" : "text-primary-strong"
        )}
      >
        {layer.label}
      </p>
      <p
        className={cn(
          "text-base font-bold sm:text-lg",
          inverted ? "text-white" : "text-accent"
        )}
      >
        {layer.title}
      </p>
      <p
        className={cn(
          "mt-1 text-xs sm:text-sm",
          inverted ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {layer.detail}
      </p>
      {children}
    </div>
  );
}

function StackColumn({ layer, modules, index }) {
  return (
    <motion.div
      {...layerAnim(index)}
      className="flex-1 rounded-2xl border border-primary/25 bg-primary/[0.06] p-5"
    >
      <p className="mb-1 text-[11px] font-medium tracking-wide text-primary-strong uppercase">
        {layer.label}
      </p>
      <p className="mb-4 text-base font-bold text-accent sm:text-lg">
        {layer.title}
      </p>

      <ul className="flex flex-wrap justify-center gap-2">
        {modules.map((module) => (
          <li key={module.id}>
            <Link
              to={`/modules/${module.id}`}
              className="inline-block rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-accent transition-colors duration-200 hover:border-accent/50 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:text-sm"
            >
              {module.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Architecture() {
  const [identity, balance, money, business, ledger] = ARCHITECTURE.layers;

  return (
    <section className="overflow-x-hidden px-6 py-8 sm:px-16 xl:px-32">
      <SectionHeader
        title={ARCHITECTURE.title}
        subtitle={ARCHITECTURE.subtitle}
      />

      <div className="mx-auto mt-10 max-w-4xl">
        <motion.div {...layerAnim(0)}>
          <LayerCard layer={identity} className="mx-auto max-w-md" />
        </motion.div>

        <Connector delay={0.2} />

        <motion.div {...layerAnim(1)}>
          <LayerCard layer={balance} inverted className="mx-auto max-w-md" />
        </motion.div>

        <Connector delay={0.34} />

        <div className="flex flex-col gap-4 sm:flex-row">
          <StackColumn layer={money} modules={MONEY_MODULES} index={2} />
          <StackColumn layer={business} modules={BUSINESS_MODULES} index={3} />
        </div>

        <Connector delay={0.6} />

        <motion.div {...layerAnim(4)}>
          <LayerCard layer={ledger} className="mx-auto max-w-md" />
        </motion.div>

        <motion.div {...layerAnim(5)} className="mt-8 text-center">
          <Link
            to="/modules"
            className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-primary-strong hover:underline"
          >
            {UI.seeAllModules}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Architecture;
