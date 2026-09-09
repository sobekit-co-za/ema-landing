/**
 * Help Request (support ticket) submission.
 *
 * Endpoint recovered from the legacy Angular build:
 *   POST {API}/unAuth/tickets/create/{moduleCode}   (multipart/form-data)
 *
 * NOTE ON MODULE CODES: two of them carry a LEADING SPACE — " EMY_SAVE" and
 * " EMY_TUMA". That is the backend's actual naming, confirmed by the eMa team.
 * The code is passed through verbatim and only URL-encoded; do not trim it.
 */

const API_BASE = "https://api1.emalyami.com/core/api/v1";

export async function submitTicket({
  fullName,
  email,
  phone,
  moduleCode,
  title,
  desc,
  documents = [],
}) {
  const body = new FormData();
  body.append("fullName", fullName);
  body.append("email", email);
  body.append("phone", phone);
  body.append("module", moduleCode);
  body.append("title", title);
  body.append("desc", desc);

  for (const file of documents) {
    body.append("documents", file);
  }

  const response = await fetch(
    `${API_BASE}/unAuth/tickets/create/${encodeURIComponent(moduleCode)}`,
    { method: "POST", body }
  );

  if (!response.ok) {
    throw new Error(`Ticket submission failed (${response.status})`);
  }

  // The endpoint returns JSON on success, but has been seen to return an empty
  // body; treat a 2xx with no parseable payload as success.
  try {
    return await response.json();
  } catch {
    return { ok: true };
  }
}
