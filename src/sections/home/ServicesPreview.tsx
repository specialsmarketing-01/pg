"use client";

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
import { Button } from "@/components/ui/Button";

const items = [
  {
    title: "SEO Optimization",
    description: "Technical SEO, content strategy, and authority building.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Google Ads",
    description: "High-intent campaigns with landing page conversion lifts.",
    icon: MousePointerClick,
    image: "/google-ads-service.png",
  },
  {
    title: "Social Media Marketing",
    description: "Creative + paid social tuned for profitable acquisition.",
    icon: Megaphone,
    image: "/social-media-service.png",
  },
  {
    title: "Website Development",
    description: "Fast, modern websites built for conversion and clarity.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Graphic Design",
    description: "Premium visual systems for credibility and brand recall.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Analytics & CRO",
    description: "Funnel measurement, testing, and compounding improvements.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export function ServicesPreview() {
  return (
    <section className="pt-16 sm:pt-20 section-alt">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Services
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Everything you need to grow—without the bloat
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            A focused stack of performance channels designed to work together:
            acquire, convert, retain, and scale.
          </p>
        </div>
        <div className="hidden sm:block">
          <Button href="/services" variant="secondary">
            Explore all services
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-3xl glass ring-glow shadow-premium/40 transition"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-glow-mix opacity-80" />
              <Image
                src={it.image}
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
                <it.icon className="mt-[3px] h-7 w-7 text-white transition-colors group-hover:text-accent" />
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

              <div className="mt-4 text-sm font-semibold text-white/80">Learn more →</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Button href="/services" variant="secondary" className="w-full">
          View services
        </Button>
      </div>
    </section>
  );
}

