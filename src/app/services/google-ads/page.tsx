import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "High-intent Google Ads campaigns, landing pages, and tracking designed for profitable acquisition.",
};

export default function GoogleAdsPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Google Ads
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            We rebuild Google Ads accounts around intent, not keywords alone. From
            structure to creative to landing pages, everything is tuned to cost-per
            opportunity—not just clicks.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Core levers</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Account restructuring by funnel stage and match type</li>
              <li>Search, Performance Max, remarketing, and brand protection</li>
              <li>Compelling ad copy, extensions, and testing frameworks</li>
              <li>Dedicated landing pages built for the query behind the click</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Measurement</h2>
            <p className="text-sm text-muted">
              We implement clean conversion tracking and standardize naming so your team
              can trust every report. You&apos;ll know exactly which campaigns are feeding
              pipeline—and which to turn off.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">What you get</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>A clear acquisition model across branded and non-branded terms</li>
              <li>Landing pages and experiments designed to lift conversion rate</li>
              <li>Weekly reporting with recommendations—not just numbers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

