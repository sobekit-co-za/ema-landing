import { useEffect } from "react";
import { LANG_TAG } from "@/content";

/**
 * Sets the document title, meta description, canonical URL, Open Graph tags
 * and (optionally) a JSON-LD block for the current route.
 *
 * Written as a small effect rather than a helmet library: the site is a plain
 * client-rendered SPA, and this avoids adding a dependency for four tags.
 */

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "ema-route-jsonld";

function Seo({ title, description, image, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;
    document.documentElement.lang = LANG_TAG;

    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      });
    }

    if (title) {
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: title,
      });
      upsertMeta('meta[name="twitter:title"]', {
        name: "twitter:title",
        content: title,
      });
    }

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: LANG_TAG,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    if (image) {
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: new URL(image, window.location.origin).href,
      });
    }

    const canonical = window.location.origin + window.location.pathname;
    upsertLink("canonical", canonical);
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
  }, [title, description, image]);

  // Callers build this object inline, so its identity changes on every render.
  // Depending on the serialised value keeps the effect stable and stops the
  // <script> tag being torn down and re-appended on each render.
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    document.getElementById(JSONLD_ID)?.remove();
    if (!jsonLdText) return;

    const script = document.createElement("script");
    script.id = JSONLD_ID;
    script.type = "application/ld+json";
    script.textContent = jsonLdText;
    document.head.appendChild(script);

    return () => script.remove();
  }, [jsonLdText]);

  return null;
}

export default Seo;
