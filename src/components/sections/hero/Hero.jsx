import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoPlayStore } from "react-icons/bi";
import { Check } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { HERO, COMPANY } from "@/content";
import Underline from "../../../assets/who-are-we/needle-underline.svg";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const underlineVariants = {
    hidden: { scale: 0, rotate: -10, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 1.2, ease: "easeOut" },
    },
  };

  const handleDownload = () => window.open(COMPANY.apps.main, "_blank");

  return (
    <section
      ref={ref}
      className="relative mt-15 overflow-x-hidden pl-10 pt-[12%] pr-[40%] sm:mt-10 lg:mt-7 2xl:min-h-screen"
    >
      {/*
        hero_bg.svg is a single 1440x869 composition with the phone drawn on its
        right-hand side, so the artwork cannot be mirrored by re-anchoring it —
        and flipping it horizontally would reverse the UI text inside the phone.
        The illustration therefore stays on the right in every language, and the
        copy is kept clear of it with PHYSICAL padding (pl/pr) rather than
        logical padding, which would swap sides under RTL and collide with it.
      */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero_bg.svg')] bg-top-right bg-contain bg-no-repeat"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 0, filter: "blur(8px)" }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 space-y-4 sm:space-y-4 lg:space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-4">
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-wide text-primary-strong uppercase lg:text-sm"
          >
            {HERO.kicker}
          </motion.p>

          <motion.h1
            className="text-4xl font-bold md:text-6xl xl:text-7xl"
            variants={itemVariants}
          >
            {HERO.titleLead}
            <br className="hidden md:block" />{" "}
            <span className="relative inline-block text-accent">
              {HERO.titleAccent}
              <motion.img
                src={Underline}
                alt=""
                aria-hidden
                /*
                  The swoosh is 1418x125 (11.3:1), so `h-auto` made it 40px tall
                  and it cut straight through the Arabic glyphs. Height is now
                  tied to the font size and it sits clear of the line box.
                */
                className="pointer-events-none absolute inset-x-0 -bottom-3 h-[0.16em] w-full"
                variants={underlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-xs leading-relaxed text-muted-foreground lg:text-lg xl:text-xl"
            variants={itemVariants}
          >
            {HERO.subtitle}
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-4 lg:flex-row lg:items-start"
          variants={itemVariants}
        >
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button
              className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide shadow-lg transition-shadow duration-300 hover:bg-accent/90 hover:shadow-xl lg:px-10 lg:py-6 lg:text-xl"
              onClick={handleDownload}
            >
              <BiLogoPlayStore size={20} />
              {HERO.primaryCta}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="w-fit rounded-full border-2 border-accent bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg lg:px-10 lg:py-6 lg:text-xl"
            >
              <Link to="/modules">{HERO.secondaryCta}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul
          className="flex flex-wrap gap-x-5 gap-y-2 pt-2"
          variants={itemVariants}
        >
          {HERO.trustChips.map((chip) => (
            <li
              key={chip}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground lg:text-sm"
            >
              <span className="grid size-4 place-items-center rounded-full bg-primary/15 text-primary-strong">
                <Check size={10} strokeWidth={3} />
              </span>
              {chip}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Ambient float */}
      <motion.span
        aria-hidden
        className="absolute top-20 end-20 size-2 rounded-full bg-accent/30"
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute bottom-40 start-20 size-1 rounded-full bg-accent/20"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
}

export default Hero;
