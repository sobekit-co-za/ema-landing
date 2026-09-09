import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import TabSwitcher from "./TabSwitcher";
import { getDemos } from "@/content/demos";
import { UI } from "@/content";

/**
 * Tabbed demo gallery for a module, shown inside a phone frame.
 *
 * Nothing downloads until the visitor presses play: `preload="none"` plus a
 * poster image. That matters — these are screen recordings and the audience is
 * on mobile data.
 */
function ModuleDemo({ moduleId }) {
  const clips = getDemos(moduleId);
  const [active, setActive] = useState(clips[0]?.slug);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  if (!clips.length) return null;

  const clip = clips.find((c) => c.slug === active) ?? clips[0];

  const handlePlay = () => {
    setPlaying(true);
    // The poster overlay unmounts on click; start playback once it's gone.
    requestAnimationFrame(() => videoRef.current?.play());
  };

  const handleSelect = (slug) => {
    setActive(slug);
    setPlaying(false);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">{UI.seeItWork}</h2>

      {clips.length > 1 && (
        <TabSwitcher
          tabs={clips.map((c) => ({ id: c.slug, label: c.label }))}
          active={clip.slug}
          onChange={handleSelect}
          layoutId={`demo-${moduleId}`}
          className="max-w-full justify-center"
        />
      )}

      {/* Phone frame */}
      <div className="relative w-[240px] shrink-0 rounded-[2rem] border-[6px] border-accent bg-accent p-0 shadow-2xl sm:w-[280px]">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={clip.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <video
                ref={videoRef}
                src={clip.src}
                poster={clip.poster}
                preload="none"
                controls={playing}
                playsInline
                loop
                onEnded={() => setPlaying(false)}
                className="block h-auto w-full"
              />
            </motion.div>
          </AnimatePresence>

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label={`${UI.seeItWork} — ${clip.label}`}
              className="absolute inset-0 grid place-items-center bg-black/25 transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="grid size-14 place-items-center rounded-full bg-white/95 text-accent shadow-lg"
              >
                <Play size={22} className="ms-1 rtl:ms-0 rtl:me-1" fill="currentColor" />
              </motion.span>
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{clip.label}</p>
    </div>
  );
}

export default ModuleDemo;
