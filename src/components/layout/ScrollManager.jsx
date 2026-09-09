import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";
import { scrollToOffset, scrollToSectionId } from "@/lib/scroll";

/**
 * Scroll behaviour across route changes.
 *
 * React Router keeps the window scroll position when the route changes, so
 * navigating from halfway down the long home page to a shorter page landed the
 * visitor below all of its content — the page looked empty or broken, and
 * returning home left the hero off-screen.
 *
 * `<ScrollRestoration>` only ships with the data routers; this app uses the
 * declarative <BrowserRouter>, so the behaviour is implemented here:
 *
 *   - new navigation (PUSH/REPLACE) → jump to the top
 *   - back / forward (POP)          → restore where the visitor had been
 *   - navigation carrying `state.scrollTo` → leave it alone, the header is
 *     scrolling to a section on the home page
 *   - a URL hash (/#pricing) → scroll to that section, so the section links
 *     in the header are shareable and survive a cold load
 */
function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  // Live scroll offset, so we can record it the moment we leave a route.
  const currentY = useRef(0);
  const positions = useRef(new Map());

  useEffect(() => {
    const onScroll = () => {
      currentY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const key = location.key;
    const saved = positions.current;
    const offset = currentY;

    // Cleanup runs just before the next location is applied: record where the
    // visitor was on the route being left.
    return () => {
      saved.set(key, offset.current);
    };
  }, [location.key]);

  useLayoutEffect(() => {
    // The header asked for a section on the home page — don't fight it.
    if (location.state?.scrollTo) return;

    // A shared link like https://ema.emalyami.com/#pricing.
    if (location.hash) {
      return scrollToSectionId(location.hash.slice(1), { smooth: false });
    }

    if (navigationType === "POP") {
      const saved = positions.current.get(location.key);
      if (saved !== undefined) {
        currentY.current = saved;
        // Re-applied across frames: the page is often still shorter than the
        // saved offset at this point, which would clamp the jump short.
        return scrollToOffset(saved);
      }
    }

    window.scrollTo(0, 0);
    currentY.current = 0;
  }, [
    location.key,
    location.pathname,
    location.hash,
    location.state,
    navigationType,
  ]);

  return null;
}

export default ScrollManager;
