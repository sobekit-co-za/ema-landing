import { motion } from "framer-motion";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { Banknote, Building2, Landmark, Store } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PARTNER } from "@/content";

const ICONS = [Store, Landmark, Building2, Banknote];

/**
 * Four partner tracks. The previous version addressed governments, banks,
 * resellers and shopkeepers with one generic pitch.
 */
function BeOurPartner() {
  return (
    <section
      id="partner"
      className="overflow-x-hidden px-6 py-12 sm:px-16 lg:py-16 xl:px-32"
    >
      <SectionHeader title={PARTNER.title} subtitle={PARTNER.subtitle} />

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2">
        {PARTNER.tracks.map((track, i) => {
          const Icon = ICONS[i] ?? Store;

          return (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 28, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-accent text-primary">
                <Icon size={20} />
              </span>

              <h3 className="mb-2 text-lg font-bold text-accent sm:text-xl">
                {track.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {track.detail}
              </p>

              {track.note && (
                <p className="mt-3 text-sm font-medium text-primary-strong">
                  {track.note}
                </p>
              )}

              {track.cta && (
                <ScrollLink
                  to="white-label"
                  smooth
                  duration={500}
                  offset={-80}
                  className="mt-3 w-fit cursor-pointer text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-primary-strong hover:underline"
                >
                  {track.cta}
                </ScrollLink>
              )}

              {i === 0 && (
                <Link
                  to="/modules/paymate"
                  className="mt-3 w-fit text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-primary-strong hover:underline"
                >
                  PAYMATE →
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default BeOurPartner;
