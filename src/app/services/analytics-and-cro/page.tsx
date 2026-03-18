import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & CRO",
  description:
    "Analytics and conversion rate optimization to turn existing traffic into predictable revenue.",
};

export default function AnalyticsAndCroPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Analytics & CRO
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            We turn your site and campaign data into a clear testing roadmap. Instead of
            guessing, you&apos;ll know exactly which changes move the needle on revenue.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Instrumentation</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Clean analytics setup across web, product, and campaigns</li>
              <li>Event tracking for key actions, not just pageviews</li>
              <li>Source-of-truth dashboards your team can rely on</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Experimentation</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Hypothesis-driven tests across copy, layout, and offer</li>
              <li>Prioritization frameworks to focus on high-leverage ideas</li>
              <li>Clear experiment readouts with next steps</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Business impact</h2>
            <p className="text-sm text-muted">
              Analytics and CRO are about more than dashboards. Our goal is simple:
              increase the revenue you get from every visitor, click, and impression you
              already pay for.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

