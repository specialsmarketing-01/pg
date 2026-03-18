import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Optimization",
  description:
    "Technical SEO, content strategy, and on-page optimization to unlock compounding organic traffic.",
};

export default function SeoOptimizationPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            SEO Optimization
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            PermaGrowth builds SEO foundations that compound. We combine technical audits,
            search-intent driven content, and on-page optimization to turn organic search
            into a reliable acquisition channel.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">What we do</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Technical and crawl audits, site architecture, and index management</li>
              <li>Search-intent research and content roadmaps aligned to revenue</li>
              <li>On-page optimization, internal linking, and schema implementation</li>
              <li>Performance dashboards that surface the metrics that matter</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Who it&apos;s for</h2>
            <p className="text-sm text-muted">
              Brands with strong products and inconsistent inbound. If you&apos;re paying
              for traffic today or sitting on unused content opportunities, SEO lets you
              compound that effort instead of renting every click.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Outcomes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Clean, fast pages that search engines and customers trust</li>
              <li>Content that ranks for buying-intent queries, not just impressions</li>
              <li>Clear measurement of SEO&apos;s contribution to pipeline and revenue</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

