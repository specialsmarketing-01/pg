import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PermaGrowth for performance marketing, design, and growth execution.",
};

export default function ContactPage() {
  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tell us about your next growth phase
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              Share a bit about your product, current channels, and what you&apos;d like
              to see in the next 6–12 months. We&apos;ll respond with a short,
              no-pressure plan.
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>Email: hello@permagrowth.agency</p>
              <p>Management: Austria</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

