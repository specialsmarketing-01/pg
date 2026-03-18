"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="pt-16 sm:pt-20">
      <div className="relative overflow-hidden rounded-[28px] glass ring-glow p-8 sm:p-12">
        <div className="absolute inset-0 -z-10 bg-glow-mix opacity-80" />
        <div className="absolute inset-0 -z-10 noise-overlay opacity-25" />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Ready to Grow?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build the next phase of your growth
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Get a free consultation with a clear action plan—channels, quick wins, and a
              roadmap to scale.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Start Now <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

