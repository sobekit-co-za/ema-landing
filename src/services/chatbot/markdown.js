/**
 * Markdown → HTML for chat bubbles.
 *
 * Shared by both engines: the Gemini path renders whatever the model emits,
 * the local path renders the templates built from src/content. Everything is
 * HTML-escaped first and only the tags below are reintroduced, so neither
 * model output nor content copy can inject markup into the page.
 */

export const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const anchor = (href, label) =>
  `<a rel="noreferrer noopener" target="_blank" href="${href}">${label}</a>`;

export const renderMarkdown = (text) => {
  const lines = escapeHtml(text).split("\n");
  const html = [];
  let inList = false;

  const inline = (s) =>
    s
      // [label](url) — only http(s), so no javascript: URLs can slip through.
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        (_, label, href) => anchor(href, label)
      )
      // Bare URLs that were not already part of a markdown link.
      .replace(
        /(^|[\s(])(https?:\/\/[^\s<]+?)(?=[.,)]?(?:\s|$))/g,
        (_, lead, url) => `${lead}${anchor(url, url.replace(/^https?:\/\//, ""))}`
      )
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  for (const raw of lines) {
    const line = raw.trim();
    const bullet = line.match(/^[-*]\s+(.*)$/);

    if (bullet) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }
    if (line) html.push(`<p>${inline(line)}</p>`);
  }

  if (inList) html.push("</ul>");
  return html.join("");
};
