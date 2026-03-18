"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const quotes = [
  {
    name: "Amina K.",
    role: "Founder, DTC Brand",
    text: "PermaGrowth rebuilt our funnel and ad stack. We finally have predictable CAC and a clear weekly optimization cadence.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Lukas M.",
    role: "Head of Growth, SaaS",
    text: "Clean strategy, fast execution, and real reporting. The team shipped landing pages and campaigns that converted immediately.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Noor A.",
    role: "Marketing Lead, B2B",
    text: "We moved from scattered experiments to a disciplined growth system. ROI tracking is airtight and decisions are easier.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
  },
] as const;

export function Testimonials() {
  return (
    <section className="pt-16 sm:pt-20 section-alt">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Testimonials
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Loved by teams that care about outcomes
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            A few words from clients after we tightened their acquisition and conversion
            systems.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {quotes.map((q, idx) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -2 }}
            className="rounded-3xl glass ring-glow p-6 transition"
          >
            <blockquote className="text-sm leading-7 text-white/80">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={q.avatar}
                alt={q.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/25"
              />
              <div>
                <div className="text-sm font-semibold text-white">{q.name}</div>
                <div className="text-xs text-muted">{q.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

