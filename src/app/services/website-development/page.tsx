import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "High-performance, conversion-focused websites that express your brand and move visitors to action.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Website Development
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Your website is the control in your growth experiments. We design and build
            fast, opinionated sites that showcase your offer and make it effortless to
            take the next step.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Experience</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Information architecture built around how customers buy</li>
              <li>Clear messaging hierarchy and conversion-focused copy</li>
              <li>Responsive layouts that feel premium on every device</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Engineering</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>Modern Next.js stack with performance baked in</li>
              <li>Analytics, pixels, and event tracking wired correctly</li>
              <li>SEO-friendly structure and best practices by default</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Ongoing iteration</h2>
            <p className="text-sm text-muted">
              We don&apos;t treat launch as the finish line. We help you continuously test
              headlines, layouts, and offers so your site gets better with every cohort.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

