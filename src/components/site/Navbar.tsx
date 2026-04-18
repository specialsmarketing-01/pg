"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { brandLogoSrc } from "@/lib/branding";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizePath, stripLocalePrefix, swapLocaleInPathname } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

const NAV_PATHS = ["/", "/services", "/about", "/contact"] as const;

export function Navbar() {
  const pathname = usePathname();
  const { locale, dict } = useDictionary();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels: Record<(typeof NAV_PATHS)[number], string> = {
    "/": dict.nav.home,
    "/services": dict.nav.services,
    "/about": dict.nav.about,
    "/contact": dict.nav.contact,
  };

  const activePath = stripLocalePrefix(pathname);

  const isActive = (path: (typeof NAV_PATHS)[number]) =>
    path === "/"
      ? activePath === "/"
      : activePath === path || activePath.startsWith(`${path}/`);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-0 backdrop-blur-xl ring-glow transition",
            scrolled ? "bg-black" : "glass"
          )}
        >
          <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-5 sm:py-3">
            <Link
              href={localizePath("/", locale)}
              className="group flex min-w-0 items-center gap-2 shrink-0"
            >
              <Image
                src={brandLogoSrc}
                alt="PermaGrowth"
                width={240}
                height={60}
                priority
                className="h-10 w-auto opacity-95 transition-opacity group-hover:opacity-100 sm:h-12 md:h-12 lg:h-12"
              />
            </Link>

            <div className="hidden flex-1 items-center justify-end gap-1 md:flex">
              {NAV_PATHS.map((path) => {
                const active = isActive(path);
                return (
                  <Link
                    key={path}
                    href={localizePath(path, locale)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition",
                      active
                        ? "text-accent"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {labels[path]}
                  </Link>
                );
              })}
            </div>

            <div
              className="flex shrink-0 items-center gap-2 sm:gap-3"
              role="navigation"
              aria-label={dict.languageSwitcher.aria}
            >
              <div className="flex items-center rounded-full border border-white/15 bg-black/50 p-0.5">
                <Link
                  href={swapLocaleInPathname(pathname, "de")}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-semibold transition",
                    locale === "de"
                      ? "bg-white/15 text-white"
                      : "text-white/55 hover:text-white"
                  )}
                  hrefLang="de"
                  lang="de"
                >
                  {dict.languageSwitcher.de}
                </Link>
                <Link
                  href={swapLocaleInPathname(pathname, "en")}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-semibold transition",
                    locale === "en"
                      ? "bg-white/15 text-white"
                      : "text-white/55 hover:text-white"
                  )}
                  hrefLang="en"
                  lang="en"
                >
                  {dict.languageSwitcher.en}
                </Link>
              </div>

              <div className="hidden items-center gap-2 pl-1 md:flex">
                <Button
                  href={localizePath("/contact", locale)}
                  size="sm"
                  className="hidden sm:inline-flex shadow-none"
                >
                  {dict.nav.cta}
                </Button>
                <Button
                  href={localizePath("/contact", locale)}
                  size="sm"
                  variant="secondary"
                  className="sm:hidden"
                >
                  {dict.nav.ctaShort}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 md:hidden">
            <div className="flex flex-wrap items-center justify-between gap-1 px-3 py-2">
              {NAV_PATHS.map((path) => {
                const active = isActive(path);
                return (
                  <Link
                    key={path}
                    href={localizePath(path, locale)}
                    className={cn(
                      "px-2 py-2 text-xs font-semibold transition",
                      active
                        ? "text-accent"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {labels[path]}
                  </Link>
                );
              })}
              <Button
                href={localizePath("/contact", locale)}
                size="sm"
                variant="secondary"
                className="ml-auto h-9 px-3 text-xs"
              >
                {dict.nav.ctaShort}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
