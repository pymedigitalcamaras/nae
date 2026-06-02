import { getRequestConfig } from "next-intl/server";

export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    messages,
    timeZone: "America/Mexico_City",
    now: new Date(),
  };
});
