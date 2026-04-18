import type { Metadata } from "next";
import Link from "next/link";

const services = [
  {
    slug: "seo-optimization",
    name: "SEO Optimization",
    summary: "Technical, on-page, and content SEO for compounding organic growth.",
    bullets: [
      "Technical audits, site architecture, and crawlability fixes",
      "Search-intent driven content strategy and editorial calendars",
      "On-page optimization, internal linking, and schema",
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    summary: "High-intent search, Performance Max, and remarketing built for ROI.",
    bullets: [
      "Account restructuring and keyword strategy",
      "High-converting ad copy and creative testing",
      "Landing page optimization and conversion tracking",
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    summary: "Paid and organic social that amplifies your brand and pipeline.",
    bullets: [
      "Channel selection and content pillars",
      "Creative concepts, hooks, and thumb-stopping visuals",
      "Paid social funnels and always-on campaigns",
    ],
  },
  {
    slug: "website-development",
    name: "Website Development",
    summary: "Fast, conversion-focused websites with a premium brand feel.",
    bullets: [
      "UX and information architecture built around clarity",
      "High-performance front-end with clean interactions",
      "Analytics, tracking, and experimentation baked in",
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    summary: "A cohesive visual system that makes every touchpoint feel intentional.",
    bullets: [
      "Brand kits, typography, and color systems",
      "Ad creative, social templates, and sales assets",
      "Web and product design aligned with your funnel",
    ],
  },
  {
    slug: "analytics-and-cro",
    name: "Analytics & CRO",
    summary: "Measurement and experimentation to turn traffic into revenue.",
    bullets: [
      "Analytics implementation and source-of-truth dashboards",
      "Funnel analysis and opportunity mapping",
      "Structured A/B testing roadmap and reporting",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PermaGrowth’s performance marketing services across SEO, ads, social, web, design, and analytics.",
};

export default function ServicesPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A focused stack built to ship growth
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Every service is designed to plug into a single performance system. No noise,
            no vanity—just channels that compound over time.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent-mid)] hover:shadow-accent-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                {service.name}
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-xs text-muted">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[10px] rounded-full bg-gradient-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center text-xs font-semibold text-accent">
                View details
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

