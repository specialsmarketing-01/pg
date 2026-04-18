"use client";

import { motion } from "framer-motion";
import { Globe2, Zap, TrendingUp, Workflow } from "lucide-react";

const points = [
  {
    title: "Cost-efficient global team",
    text: "Austria-based leadership with a high-output remote team across Pakistan and Dubai.",
    icon: Globe2,
  },
  {
    title: "High ROI focus",
    text: "We measure what matters: pipeline, CAC, conversion rate, and profit—not vanity metrics.",
    icon: TrendingUp,
  },
  {
    title: "Fast delivery",
    text: "Tight execution cycles with clear scope, timelines, and weekly improvements.",
    icon: Zap,
  },
  {
    title: "Scalable operations",
    text: "Repeatable systems, documentation, and reporting designed for long-term growth.",
    icon: Workflow,
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="pt-16 sm:pt-20">
      <div className="relative overflow-hidden rounded-[28px] glass ring-glow p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-glow-mix" />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Why PermaGrowth
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Premium execution, minimal overhead
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              You get senior strategy and crisp delivery without the agency bloat.
              Built to move fast and scale responsibly.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="rounded-3xl bg-black/80 p-5 ring-1 ring-white/20 transition"
                >
                  <div className="flex items-start gap-4">
                    <p.icon className="mt-[2px] h-7 w-7 text-white transition-colors group-hover:text-accent" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-muted">
                        {p.text}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

