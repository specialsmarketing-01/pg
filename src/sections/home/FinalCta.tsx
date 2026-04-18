"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizePath } from "@/i18n/routing";

export function FinalCta() {
  const { locale, dict } = useDictionary();
  const f = dict.finalCta;

  return (
    <section className="pt-16 sm:pt-20">
      <div className="relative overflow-hidden rounded-[28px] glass ring-glow p-8 sm:p-12">
        <div className="absolute inset-0 -z-10 bg-glow-mix opacity-80" />
        <div className="absolute inset-0 -z-10 noise-overlay opacity-25" />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {f.kicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {f.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              {f.subtitle}
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
              <Button
                href={localizePath("/contact", locale)}
                size="lg"
                className="w-full sm:w-auto"
              >
                {f.button} <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
