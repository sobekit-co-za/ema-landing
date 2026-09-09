import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Banknote, Repeat, Store, Wallet } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { IS_RTL, PAYMATE_LOOP } from "@/content";

const ICONS = [Banknote, Repeat, Wallet, Store];
const Arrow = IS_RTL ? ArrowLeft : ArrowRight;

/**
 * The cash-in → transact → cash-out loop.
 * The Paymate network is eMa's real structural advantage over a bank app, and
 * the answer to "but my customers pay cash" — so it gets its own section.
 */
function PaymateLoop() {
  return (
    <section className="overflow-x-hidden bg-accent px-6 py-14 text-white sm:px-16 lg:py-20 xl:px-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold sm:text-2xl md:text-4xl">
          {PAYMATE_LOOP.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-lg">
          {PAYMATE_LOOP.subtitle}
        </p>
      </div>

      <ol className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-4">
        {PAYMATE_LOOP.steps.map((step, i) => {
          const Icon = ICONS[i] ?? Banknote;
          const isLast = i === PAYMATE_LOOP.steps.length - 1;

          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 26, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-accent">
                  <Icon size={18} />
                </span>
                <span className="text-xs font-medium text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {step.detail}
              </p>

              {step.cta && (
                <Link
                  to="/modules/paymate"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
                >
                  {step.cta}
                  <Arrow size={14} />
                </Link>
              )}

              {/* Flow arrow between steps — horizontal on wide, hidden on stack */}
              {!isLast && (
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="absolute top-1/2 -end-4 hidden -translate-y-1/2 text-primary/60 lg:block"
                >
                  <Arrow size={18} />
                </motion.span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}

export default PaymateLoop;
