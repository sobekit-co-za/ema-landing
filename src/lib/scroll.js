/**
 * Scroll helpers that survive late layout.
 *
 * Pages here grow after first paint — fonts land, SVG illustrations decode,
 * and framer-motion reveals sections on scroll. A single scrollTo issued right
 * after navigation gets clamped to whatever the document height happens to be
 * at that instant, so the visitor ends up short of the target. Both helpers
 * re-apply across a few frames until the position sticks.
 */

/** Height of the fixed header, so anchored sections aren't hidden behind it. */
export const HEADER_OFFSET = 90;

const MAX_ATTEMPTS = 12;

function repeat(apply) {
  let attempts = 0;
  let frame;

  const tick = () => {
    apply();
    attempts += 1;
    if (attempts < MAX_ATTEMPTS) {
      frame = requestAnimationFrame(tick);
    }
  };

  tick();
  return () => cancelAnimationFrame(frame);
}

/** Jump to an absolute offset, re-applying until the document is tall enough. */
export function scrollToOffset(y) {
  return repeat(() => {
    if (Math.abs(window.scrollY - y) > 2) {
      window.scrollTo(0, y);
    }
  });
}

/**
 * Scroll a section into view under the fixed header.
 * Keeps re-measuring, so it stays correct if content above it grows.
 */
export function scrollToSectionId(id, { smooth = true } = {}) {
  let settled = 0;

  return repeat(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const target = Math.max(
      0,
      window.scrollY + el.getBoundingClientRect().top - HEADER_OFFSET
    );

    if (Math.abs(window.scrollY - target) < 3) {
      settled += 1;
      return;
    }

    // Smooth for the first attempt only; later corrections should be silent.
    window.scrollTo({
      top: target,
      behavior: smooth && settled === 0 ? "smooth" : "auto",
    });
  });
}
