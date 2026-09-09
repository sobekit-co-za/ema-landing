import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Mobile1 from "../../../assets/our-services/our-services-mobile-1.svg";
import Mobile2Small from "../../../assets/our-services/our-services-mobile-2-small.svg";
import Mobile3 from "../../../assets/our-services/our-services-mobile-3.svg";
import { SERVICES } from "@/content";

const IMAGES = [Mobile1, Mobile2Small, Mobile3];

/** The SME lifecycle: get paid → grow → operate. */
function OurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="mx-auto flex flex-col items-center space-y-12 overflow-x-hidden px-12 py-12 sm:px-24 lg:py-16 xl:px-32"
    >
      <SectionHeader title={SERVICES.title} subtitle={SERVICES.subtitle} />

      <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-3">
        {SERVICES.items.map((service, index) => (
          <motion.div
            key={service.title}
            className="flex items-start justify-between gap-6 lg:flex-col lg:items-center lg:text-center"
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 30, filter: "blur(3px)" }
            }
            transition={{
              duration: 0.7,
              delay: 0.2 + index * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <motion.img
              src={IMAGES[index]}
              alt=""
              aria-hidden
              className="order-2 w-20 shrink-0 rotate-4 shadow-2xl lg:order-1 lg:w-32"
              animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />

            <div className="order-1 flex flex-col lg:order-2">
              <span className="mb-1 text-xs font-medium tracking-wide text-primary-strong uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-lg font-bold sm:text-2xl lg:text-3xl">
                {service.title}
              </h3>
              <ul className="space-y-1.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="text-xs text-muted-foreground sm:text-sm lg:text-base"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
