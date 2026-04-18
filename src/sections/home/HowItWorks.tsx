"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function HowItWorks() {
  const { dict } = useDictionary();
  const h = dict.howItWorks;

  return (
    <section className="pt-16 sm:pt-20 bg-black">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
            {h.kicker}
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {h.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
            {h.subtitle}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4">
            {h.steps.map((step, idx) => (
              <motion.div
                key={step.title}
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
                    <div className="text-sm font-semibold text-white">{step.title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted">{step.text}</div>
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
