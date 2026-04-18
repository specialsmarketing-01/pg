"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  Search,
  MousePointerClick,
  PenTool,
  Code2,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizePath } from "@/i18n/routing";
import { SERVICE_SLUGS, type ServiceSlug } from "@/i18n/service-slugs";

const ICONS: Record<ServiceSlug, LucideIcon> = {
  "seo-optimization": Search,
  "google-ads": MousePointerClick,
  "social-media-marketing": Megaphone,
  "website-development": Code2,
  "graphic-design": PenTool,
  "analytics-and-cro": BarChart3,
};

const IMAGES: Record<ServiceSlug, string> = {
  "seo-optimization":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  "google-ads": "/google-ads-service.png",
  "social-media-marketing": "/social-media-service.png",
  "website-development":
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80",
  "graphic-design":
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  "analytics-and-cro":
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
};

export function ServicesPreview() {
  const { locale, dict } = useDictionary();
  const s = dict.servicesPreview;

  return (
    <section className="pt-16 sm:pt-20 section-alt">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
            {s.kicker}
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {s.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            {s.subtitle}
          </p>
        </div>
        <div className="hidden sm:block">
          <Button href={localizePath("/services", locale)} variant="secondary">
            {s.explore}
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_SLUGS.map((slug, idx) => {
          const it = s.items[slug];
          const Icon = ICONS[slug];
          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-3xl glass ring-glow shadow-premium/40 transition"
            >
              <Link href={localizePath(`/services/${slug}`, locale)} className="block">
                <div className="relative">
                  <div className="absolute inset-0 bg-glow-mix opacity-80" />
                  <Image
                    src={IMAGES[slug]}
                    alt={it.title}
                    width={1200}
                    height={800}
                    className="relative aspect-[16/10] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(15,23,42,0.5),transparent_45%),linear-gradient(45deg,rgba(148,163,184,0.35),transparent_55%)]" />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <Icon className="mt-[3px] h-7 w-7 text-white transition-colors group-hover:text-accent" />
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-white">
                        {it.title}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-muted">
                        {it.description}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <div className="mt-4 text-sm font-semibold text-white/80">
                    {s.learnMore}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 sm:hidden">
        <Button
          href={localizePath("/services", locale)}
          variant="secondary"
          className="w-full"
        >
          {s.viewMobile}
        </Button>
      </div>
    </section>
  );
}
