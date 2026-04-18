import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";

/** Path without locale prefix, always starting with `/` (e.g. `/`, `/services/seo-optimization`). */
export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "/";
  if (isLocale(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function swapLocaleInPathname(pathname: string, newLocale: Locale): string {
  const bare = stripLocalePrefix(pathname);
  return localizePath(bare === "/" ? "/" : bare, newLocale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : defaultLocale;
}
