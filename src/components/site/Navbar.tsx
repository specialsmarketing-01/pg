"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { brandLogoSrc } from "@/lib/branding";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-0 backdrop-blur-xl ring-glow transition",
            scrolled ? "bg-black" : "glass"
          )}
        >
          <div className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3">
            <Link href="/" className="group flex items-center gap-2 shrink-0">
              <Image
                src={brandLogoSrc}
                alt="PermaGrowth"
                width={240}
                height={60}
                priority
                className="h-12 w-auto opacity-95 transition-opacity group-hover:opacity-100 md:h-12 lg:h-12"
              />
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition",
                      active
                        ? "text-accent"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2 pl-2 sm:pl-0 md:flex">
              <Button
                href="/contact"
                size="sm"
                className="hidden sm:inline-flex shadow-none"
              >
                Get Free Consultation
              </Button>
              <Button
                href="/contact"
                size="sm"
                variant="secondary"
                className="sm:hidden"
              >
                Consult
              </Button>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="border-t border-white/10 md:hidden">
            <div className="flex items-center justify-between px-4 py-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "px-3 py-2 text-xs font-semibold transition",
                      active
                        ? "text-accent"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

