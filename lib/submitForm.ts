/**
 * Single submission point for every form on the site.
 * Currently a demo: resolves after a short delay and logs to the console.
 */
export type FormKind = "contact" | "newsletter" | "account-update" | "open-account";

export async function submitForm(kind: FormKind, data: Record<string, unknown>): Promise<void> {
  // TODO: replace with API call (POST to the real backend endpoint for `kind`).
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.info(`[demo] ${kind} form submitted`, data);
}
