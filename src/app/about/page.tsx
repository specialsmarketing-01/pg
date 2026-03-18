import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about PermaGrowth’s Austria-led, globally distributed team and how we approach growth.",
};

export default function AboutPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            About
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Austria-based management, global execution
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            PermaGrowth is a performance marketing studio led from Austria, working with a
            distributed team across Pakistan and Dubai. We blend strategy, creative, and
            engineering to build growth systems that feel senior—but move fast.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">How we work</h2>
            <p className="text-sm text-muted">
              We keep teams lean and senior. You work directly with strategists,
              creatives, and builders—not layers of account managers. Communication is
              async-first with clear weekly rhythms.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">Global team</h2>
            <p className="text-sm text-muted">
              Our core management sits in Austria, with execution talent in Pakistan and
              Dubai. This lets us combine European strategy and client proximity with a
              high-output, cost-efficient delivery engine.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
            <h2 className="text-sm font-semibold text-white">What we care about</h2>
            <p className="text-sm text-muted">
              We care about clarity, speed, and compounding impact. Every engagement
              starts with a crisp hypothesis about where growth will come from—and a plan
              to test it quickly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

