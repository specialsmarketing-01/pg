import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description:
    "Paid and organic social media marketing that drives awareness, engagement, and revenue.",
};

export default function SocialMediaMarketingPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Social Media Marketing
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            We design social systems that do more than collect likes. From content
            pillars to paid funnels, every touchpoint is built to move people closer to a
            decision.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Content & creative</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Channel strategy across Instagram, LinkedIn, X, and TikTok</li>
              <li>Content pillars mapped to your brand narrative and offers</li>
              <li>Creative direction, templates, and motion guidelines</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Paid social</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Audience design, exclusions, and creative testing at scale</li>
              <li>Full-funnel campaign structures from cold to retention</li>
              <li>Landing experiences that feel native to the ad and platform</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Why it works</h2>
            <p className="text-sm text-muted">
              We treat social as a performance channel with brand-level craft. You get
              consistent creative output and a clear feedback loop between impressions,
              engagement, and downstream revenue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

