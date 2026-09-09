import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Map from "../../../assets/who-are-we/map.svg";
import Person1 from "../../../assets/who-are-we/map-person-1.svg";
import Person2 from "../../../assets/who-are-we/map-person-2.svg";
import Person3 from "../../../assets/who-are-we/map-person-3.svg";
import TextCrown from "../../../assets/who-are-we/text-crown.svg";
import { Badge } from "@/components/ui/badge";
import { WHO_WE_ARE } from "@/content";

const PEOPLE = [Person1, Person2, Person3];

function WhoAreWe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const personVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 1.2 + i * 0.2, ease: "easeOut" },
    }),
    bounce: (i) => ({
      y: [0, -10, 0],
      transition: {
        duration: 1 + i * 0.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  const statements = [
    { label: WHO_WE_ARE.missionLabel, body: WHO_WE_ARE.mission },
    { label: WHO_WE_ARE.visionLabel, body: WHO_WE_ARE.vision },
  ];

  return (
    <section id="about" ref={ref} className="relative py-14 lg:py-20">
      <motion.div
        className="absolute inset-0 bg-[url('/who-bg.svg')] bg-top-right bg-contain bg-no-repeat xl:bg-center 2xl:bg-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.4 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-10 px-12 sm:px-24 xl:px-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <h2 className="relative mb-4 w-fit text-2xl font-bold sm:text-4xl">
            {WHO_WE_ARE.title}
            <motion.img
              src={TextCrown}
              alt=""
              aria-hidden
              className="absolute -top-5 -end-6 w-10"
              initial={{ opacity: 0, y: -20, rotate: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            />
          </h2>
          <p className="max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-lg sm:leading-normal">
            {WHO_WE_ARE.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center justify-center gap-12 sm:flex-row md:gap-8 xl:gap-32"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={Map} className="w-70 lg:w-max" alt="" aria-hidden />
            {PEOPLE.map((person, i) => (
              <motion.img
                key={i}
                src={person}
                className={`absolute w-10 ${
                  i === 0
                    ? "inset-10 lg:inset-20"
                    : i === 1
                      ? "inset-20 left-30 lg:inset-40"
                      : "inset-30 left-50 lg:inset-60"
                }`}
                alt=""
                aria-hidden
                custom={i}
                variants={personVariants}
                initial="hidden"
                animate={isInView ? ["visible", "bounce"] : "hidden"}
              />
            ))}
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <motion.p
              className="relative w-fit text-4xl leading-tight lg:text-6xl [@media(min-width:500px)_and_(max-width:640px)]:text-5xl"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              {WHO_WE_ARE.groupLine[0]}{" "}
              <span className="font-bold">{WHO_WE_ARE.groupLine[1]}</span>{" "}
              {WHO_WE_ARE.groupLine[2]}
            </motion.p>
            <motion.div
              className="absolute -top-2 -end-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 8 } : {}}
              transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            >
              <Badge variant="destructive" className="rotate-8 text-sm">
                {WHO_WE_ARE.badge}
              </Badge>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Vision & mission — restored from the legacy site, dropped in the rebuild */}
        <motion.div
          className="grid w-full max-w-5xl gap-5 sm:grid-cols-2"
          variants={itemVariants}
        >
          {statements.map((statement, i) => (
            <motion.div
              key={statement.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + i * 0.15 }}
              className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur-sm"
            >
              <p className="mb-2 text-[11px] font-medium tracking-wide text-primary-strong uppercase">
                {statement.label}
              </p>
              <p className="text-sm leading-relaxed text-accent sm:text-base">
                {statement.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="max-w-3xl text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <span className="font-medium text-accent">
            {WHO_WE_ARE.buildersLabel}:
          </span>{" "}
          {WHO_WE_ARE.builders}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default WhoAreWe;
