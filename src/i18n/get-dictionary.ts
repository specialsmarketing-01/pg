import type { Locale } from "./config";
import { defaultLocale } from "./config";
import { dictionaries } from "./dictionaries";

export type Dictionary = (typeof dictionaries)["de"];

export function getDictionary(locale: string): Dictionary {
  return locale === "en" ? dictionaries.en : dictionaries.de;
}

export function resolveLocale(locale: string): Locale {
  return locale === "en" ? "en" : defaultLocale;
}
