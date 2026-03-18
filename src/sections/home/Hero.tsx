"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Sparkles, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20">
      <div className="relative overflow-hidden glass ring-glow shadow-premium bg-gradient-to-b from-black to-[#111111]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 noise-overlay opacity-30" />
          <motion.div
            className="absolute -inset-[40%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(15,23,42,0.65),rgba(148,163,184,0.3),rgba(0,0,0,0.7),rgba(255,255,255,0.08),rgba(15,23,42,0.65))] opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_50%_95%,rgba(0,0,0,0.75),transparent_55%)]" />
          <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-neutral-900/25 blur-3xl" />
          <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-neutral-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-black/30 blur-3xl" />

          {/* Floating abstract rings/blobs */}
          <motion.div
            className="absolute left-6 top-10 h-20 w-20 rounded-full border border-neutral-400/40"
            animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-8 top-20 h-28 w-28 rounded-full bg-neutral-800/15 ring-1 ring-neutral-500/30 blur-[0.5px]"
            animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15">
              <Sparkles className="h-4 w-4 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
              Premium, conversion-focused growth systems
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Scale Your Business with{" "}
            <span className="text-gradient-purple">Performance Marketing</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              SEO, Ads, and Design that generate real growth. We build compounding
              acquisition systems with ruthless focus on ROI.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Book a Call <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-xl sm:grid-cols-3">
              {[
                { k: "Avg. ROI", v: "3.4×" },
                { k: "Time to value", v: "14 days" },
                { k: "Delivery", v: "Global team" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-2xl bg-black/70 px-4 py-3 ring-1 ring-white/10"
                >
                  <div className="text-xs font-semibold text-white/60">{m.k}</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating social icons */}
            <div className="pointer-events-none absolute left-6 top-24 hidden lg:block">
              <motion.div
                className="grid h-10 w-10 place-items-center rounded-2xl bg-black/70 ring-1 ring-white/15 backdrop-blur"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-5 w-5 text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.7)]" />
              </motion.div>
            </div>
            <div className="pointer-events-none absolute left-24 top-44 hidden lg:block">
              <motion.div
                className="grid h-10 w-10 place-items-center rounded-2xl bg-black/70 ring-1 ring-white/15 backdrop-blur"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle className="h-5 w-5 text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.7)]" />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/12">
              <div className="absolute inset-0 bg-glow-mix opacity-80" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="Modern marketing dashboard"
                width={1200}
                height={900}
                priority
                className="relative aspect-[4/3] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.5),transparent_40%),linear-gradient(45deg,rgba(148,163,184,0.35),transparent_45%)]" />
              <div className="relative grid gap-3 p-4">
                <div className="flex items-center justify-between rounded-2xl bg-black/35 px-4 py-3 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-white/70">
                    Weekly pipeline
                  </div>
                  <div className="text-sm font-semibold text-white">+22%</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-black/35 px-4 py-3 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/70">
                      CAC
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      ↓ 18%
                    </div>
                  </div>
                  <div className="rounded-2xl bg-black/35 px-4 py-3 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/70">
                      Conversions
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      +31%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute right-8 top-16 hidden lg:block">
              <motion.div
                className="grid h-10 w-10 place-items-center rounded-2xl bg-black/70 ring-1 ring-white/15 backdrop-blur"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ThumbsUp className="h-5 w-5 text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.7)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

