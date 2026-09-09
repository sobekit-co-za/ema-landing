import NewLogo from "../../assets/shared/new_logo_2.png";
import OldLogo from "../../assets/shared/old_logo.png";
import { motion } from "framer-motion";
import { SLOGAN } from "@/content";

function AnimatedLogo({
  className = "",
  showSlogan = true,
  containerClassName = "",
  logoSize = "w-18 h-18 lg:w-32 lg:h-32",
}) {
  return (
    <div
      className={
        containerClassName ||
        // Decorative watermark: pointer-events-none so it can never swallow
        // clicks on the content beneath it (module cards reach the corner).
        "pointer-events-none fixed z-40 bottom-2 right-2 flex flex-col items-center justify-center py-4 sm:py-6"
      }
      style={{ perspective: "800px" }}
    >
      <motion.div
        className={`relative ${logoSize} ${className}`}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Logo - EMALYAMI */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={NewLogo}
            alt="Logo"
            className="object-contain w-full h-full max-w-full max-h-full"
          />
        </motion.div>

        {/* Back Logo - EMA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={OldLogo}
            alt="Logo"
            className="object-contain w-full h-full max-w-full max-h-full"
          />
        </motion.div>
      </motion.div>

      {/* Dynamic Slogan - Only show if showSlogan is true */}
      {showSlogan && (
        <motion.div
          // The watermark drifts over light, dark and orange sections, so it
          // carries its own backdrop — no single text colour is legible on all.
          className="mt-4 hidden rounded-full bg-white/85 px-3 py-1 text-center shadow-sm backdrop-blur-sm sm:flex"
          key="slogan"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="flex flex-col gap-0 text-sm font-medium tracking-wide sm:text-base"
            style={{ color: "#583228" }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              className="inline-block font-bold"
              animate={{
                color: ["#AF6553", "#844b3d", "#AF6553"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              EMA • EMALYAMI
            </motion.span>
            <span className="text-xs italic" style={{ color: "#9C6553" }}>
              {SLOGAN}
            </span>
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

export default AnimatedLogo;
