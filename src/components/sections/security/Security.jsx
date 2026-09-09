import { motion } from "framer-motion";
import {
  BadgeCheck,
  DatabaseBackup,
  KeyRound,
  Lock,
  MapPin,
  ServerCog,
  ShieldAlert,
  Smartphone,
  Timer,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { SECURITY } from "@/content";

const ICONS = {
  id: BadgeCheck,
  key: KeyRound,
  phone: Smartphone,
  pin: MapPin,
  timer: Timer,
  lock: Lock,
  shield: ShieldAlert,
  server: ServerCog,
  recovery: DatabaseBackup,
};

/**
 * Security & trust. The site previously said nothing about security while
 * asking SMEs to move their revenue onto the platform.
 */
function Security() {
  return (
    <section className="overflow-x-hidden px-6 py-12 sm:px-16 lg:py-16 xl:px-32">
      <SectionHeader title={SECURITY.title} subtitle={SECURITY.subtitle} />

      <div className="mx-auto mt-10 max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Lock;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="rounded-2xl border border-border/70 bg-muted/40 p-5"
              >
                <span className="mb-3 grid size-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon size={19} />
                </span>
                <h3 className="mb-1.5 text-base font-bold text-accent sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-primary/25 bg-primary/[0.06] p-5 text-sm leading-relaxed text-accent sm:text-base"
        >
          {SECURITY.footnote}
        </motion.p>
      </div>
    </section>
  );
}

export default Security;
