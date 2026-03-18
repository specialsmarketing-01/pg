"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "We Understand Your Business",
    text: "We map your offer, customers, and constraints—then define the fastest path to growth.",
  },
  {
    title: "We Build Strategy",
    text: "Channel selection, messaging, creative direction, and measurement—built around ROI.",
  },
  {
    title: "We Execute & Scale",
    text: "Launch, optimize, and compound wins with structured experiments and tight feedback loops.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="pt-16 sm:pt-20 bg-black">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
            How it works
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A simple system that compounds
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
            We don’t “do marketing.” We engineer a measurable growth loop—then iterate
            until it scales.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -2 }}
                className="rounded-3xl glass ring-glow p-5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-black/80 ring-1 ring-white/20">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted">{s.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

