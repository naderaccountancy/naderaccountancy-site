/* Shared Calendly theme for contact + creator embeds.
   Calendly fills the available-date circle with primaryColor and draws
   the date number in textColor. They must contrast: a light circle with
   dark numbers reads best. Light gold circle + navy numbers stays
   on-brand and easy on the eyes (navy+navy gave dark-on-dark).
   Colors are applied via pageSettings (react-calendly) or URL params
   (vanilla embed) — never both on the same widget. */
export const CALENDLY_PRIMARY = "e8c879";
export const CALENDLY_TEXT = "0f172a";
export const CALENDLY_BACKGROUND = "ffffff";

export const CALENDLY_PAGE_SETTINGS = {
  backgroundColor: CALENDLY_BACKGROUND,
  primaryColor: CALENDLY_PRIMARY,
  textColor: CALENDLY_TEXT,
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
} as const;

export function withCalendlyTheme(url: string): string {
  const trimmed = url.trim();
  const [base, existingQuery = ""] = trimmed.split("?");
  const params = new URLSearchParams(existingQuery);

  params.set("background_color", CALENDLY_BACKGROUND);
  params.set("primary_color", CALENDLY_PRIMARY);
  params.set("text_color", CALENDLY_TEXT);

  return `${base}?${params.toString()}`;
}
