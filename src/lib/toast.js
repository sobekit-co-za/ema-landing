/**
 * Minimal transient notifications.
 *
 * `toast.success(...)` / `toast.error(...)` were already being called from
 * useNews.js and NewsPage.jsx, but nothing ever defined or imported `toast` —
 * every one of those code paths threw `ReferenceError: toast is not defined`.
 * This provides the missing implementation without pulling in a toast library.
 */

const CONTAINER_ID = "ema-toast-container";
const DURATION = 4000;

const TONES = {
  success: "background:#166534;",
  error: "background:#991b1b;",
  info: "background:#45241B;",
};

function container() {
  if (typeof document === "undefined") return null;

  let node = document.getElementById(CONTAINER_ID);
  if (node) return node;

  node = document.createElement("div");
  node.id = CONTAINER_ID;
  node.setAttribute("role", "status");
  node.setAttribute("aria-live", "polite");
  node.style.cssText = [
    "position:fixed",
    "z-index:100",
    "bottom:1.5rem",
    "inset-inline-start:50%",
    "transform:translateX(-50%)",
    "display:flex",
    "flex-direction:column",
    "gap:.5rem",
    "align-items:center",
    "pointer-events:none",
  ].join(";");

  document.body.appendChild(node);
  return node;
}

function show(message, tone = "info") {
  const parent = container();
  if (!parent) return;

  const el = document.createElement("div");
  el.textContent = message;
  el.style.cssText = [
    TONES[tone] ?? TONES.info,
    "color:#fff",
    "padding:.7rem 1.1rem",
    "border-radius:9999px",
    "font-size:.875rem",
    "max-width:min(90vw,28rem)",
    "box-shadow:0 8px 24px rgba(0,0,0,.18)",
    "opacity:0",
    "transform:translateY(8px)",
    "transition:opacity .2s ease,transform .2s ease",
  ].join(";");

  parent.appendChild(el);
  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => el.remove(), 220);
  }, DURATION);
}

export const toast = {
  success: (message) => show(message, "success"),
  error: (message) => show(message, "error"),
  info: (message) => show(message, "info"),
};

export default toast;
