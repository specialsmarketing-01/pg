import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Brand and marketing design that gives every touchpoint a consistent, premium feel.",
};

export default function GraphicDesignPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Graphic Design
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Great design builds trust before a single sales call. We create visual systems
            that make your brand feel clear, credible, and memorable across every
            channel.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Brand foundations</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Logo refinements, typography, and color systems</li>
              <li>Usage guidelines that keep everything consistent</li>
              <li>Component libraries for marketing and product teams</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Performance creative</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Ad concepts and variations designed to be tested</li>
              <li>Social media templates that are easy to ship weekly</li>
              <li>Sales collateral, decks, and one-pagers that close deals</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Why it matters</h2>
            <p className="text-sm text-muted">
              Your visuals tell a story long before copy is read. We make sure that story
              matches the level of your product—and the prices you want to command.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

