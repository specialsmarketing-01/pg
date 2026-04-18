import Link from "next/link";
import Image from "next/image";
import { brandLogoSrc } from "@/lib/branding";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localizePath } from "@/i18n/routing";

const NAV_PATHS = ["/", "/services", "/about", "/contact"] as const;

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const labels: Record<(typeof NAV_PATHS)[number], string> = {
    "/": dict.nav.home,
    "/services": dict.nav.services,
    "/about": dict.nav.about,
    "/contact": dict.nav.contact,
  };

  return (
    <footer className="mt-24 border-t border-[#1f1f1f] bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center sm:justify-start">
              <Image
                src={brandLogoSrc}
                alt="PermaGrowth"
                width={240}
                height={60}
                className="h-12 w-auto max-w-[70vw] opacity-95 sm:max-w-none"
              />
            </div>
            <p className="text-sm text-[#a1a1aa] max-w-sm">{dict.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">
                {dict.footer.pages}
              </div>
              <div className="flex flex-col gap-2">
                {NAV_PATHS.map((path) => (
                  <Link
                    key={path}
                    href={localizePath(path, locale)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {labels[path]}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                {dict.footer.contact}
              </div>
              <div className="space-y-2 text-sm text-[#a1a1aa]">
                <div>hello@permagrowth.agency</div>
                <div>{dict.footer.management}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                {dict.footer.social}
              </div>
              <div className="space-y-2 text-sm text-[#a1a1aa]">
                <a className="block transition hover:text-accent" href="#">
                  LinkedIn
                </a>
                <a className="block transition hover:text-accent" href="#">
                  X (Twitter)
                </a>
                <a className="block transition hover:text-accent" href="#">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} PermaGrowth. {dict.footer.rights}
          </div>
          <div className="text-white/50">{dict.footer.built}</div>
        </div>
      </div>
    </footer>
  );
}
