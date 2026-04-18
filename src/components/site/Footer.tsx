import Link from "next/link";
import Image from "next/image";
import { brandLogoSrc } from "@/lib/branding";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
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
            <p className="text-sm text-[#a1a1aa] max-w-sm">
              Premium, conversion-focused performance marketing. Strategy, execution,
              and scalable systems—built to compound.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">
                Pages
              </div>
              <div className="flex flex-col gap-2">
                {nav.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Contact
              </div>
              <div className="space-y-2 text-sm text-[#a1a1aa]">
                <div>hello@permagrowth.agency</div>
                <div>Austria (Management)</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Social
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
            © {new Date().getFullYear()} PermaGrowth. All rights reserved.
          </div>
          <div className="text-white/50">
            Built for speed, clarity, and conversions.
          </div>
        </div>
      </div>
    </footer>
  );
}

