import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {contact.kicker}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {contact.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              {contact.intro}
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>
                {contact.emailLabel}: hello@permagrowth.agency
              </p>
              <p>
                {contact.managementLabel}: {contact.managementValue}
              </p>
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
