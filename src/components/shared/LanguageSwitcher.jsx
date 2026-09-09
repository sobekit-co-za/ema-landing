import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LOCALE,
  LOCALE_NAMES,
  SUPPORTED_LOCALES,
  UI,
  setLocale,
} from "@/content";

/**
 * Language picker for the header.
 *
 * One build serves all five languages, so this is how a visitor gets to
 * theirs. It sits in the header bar at every screen size rather than inside
 * the mobile menu: someone who cannot read the current language cannot be
 * expected to find a button labelled "Navigation" first.
 *
 * Each option is written in its own language — a Portuguese speaker looks for
 * "Português", not for "Portuguese".
 */
function LanguageSwitcher({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on an outside click or Escape, and hand focus back to the trigger so
  // keyboard users are not dropped at the top of the document.
  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={UI.language}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-accent lg:px-3"
      >
        <Globe size={18} className="shrink-0" />
        {/* The name is spelled out where there is room; the tag alone is
            enough on a phone, where the header is already tight. */}
        <span className="hidden lg:inline">{LOCALE_NAMES[LOCALE]}</span>
        <span className="text-sm uppercase lg:hidden">{LOCALE}</span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            aria-label={UI.language}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute end-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/95 py-1.5 shadow-xl backdrop-blur-md"
          >
            {SUPPORTED_LOCALES.map((locale) => {
              const isActive = locale === LOCALE;

              return (
                <li key={locale}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    // The name belongs to its own language, so it needs its
                    // own lang and direction. Without them the Arabic entry is
                    // laid out as part of an English LTR run and reads wrong.
                    lang={locale}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    onClick={() => {
                      setIsOpen(false);
                      setLocale(locale);
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-start transition-colors duration-150 hover:bg-gray-50 ${
                      isActive ? "font-semibold text-accent" : "text-gray-700"
                    }`}
                  >
                    <span>{LOCALE_NAMES[locale]}</span>
                    {isActive && <Check size={16} className="shrink-0" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;
