import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ManWoman from "../../../assets/ema-difference/man-woman.svg";
import MoneyBag from "../../../assets/ema-difference/money_bag-emoji.svg";
import MoneyFlies from "../../../assets/ema-difference/money_flies-emoji.svg";
import PeopleHugging from "../../../assets/ema-difference/people_hugging_emoji.svg";
import TippingHand from "../../../assets/ema-difference/tipping_hand-emoji.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DIFFERENCE } from "@/content";

const EMOJIS = [MoneyBag, TippingHand, PeopleHugging, MoneyFlies];

function EmaDifference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="mx-auto flex flex-col space-y-8 overflow-x-hidden px-12 sm:px-24 xl:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl">{DIFFERENCE.title}</h2>
        <p className="text-lg leading-none text-muted-foreground">
          {DIFFERENCE.subtitle}
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-6 lg:flex lg:flex-row">
        <motion.div
          className="w-55 lg:w-max"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={ManWoman} alt="" aria-hidden />
        </motion.div>

        <motion.div
          className="grid w-full flex-1 grid-cols-1 gap-4 sm:w-fit sm:grid-cols-2 xl:p-16 [@media(min-width:2200px)]:grid-cols-4"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {DIFFERENCE.cards.map((card, index) => (
            <motion.div
              key={card.description}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 150,
              }}
            >
              <Card className="h-full gap-1 xl:gap-4">
                <CardHeader>
                  <CardTitle className="flex justify-center gap-2 sm:justify-start">
                    <motion.div
                      className="w-8 sm:w-14 md:w-max"
                      initial={{ scale: 0, rotate: 45 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <img src={EMOJIS[index]} alt="" aria-hidden />
                    </motion.div>
                    <motion.p
                      className="text-3xl text-accent sm:text-4xl md:text-5xl"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      {card.value}
                    </motion.p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-center text-md text-muted-foreground sm:text-start sm:text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    {card.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default EmaDifference;
