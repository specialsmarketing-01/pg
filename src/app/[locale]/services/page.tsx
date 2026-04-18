import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_SLUGS } from "@/i18n/service-slugs";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";
import { localizePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw) as Locale;
  const dict = getDictionary(locale);
  const { servicesPage } = dict;

  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {servicesPage.kicker}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {servicesPage.title}
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            {servicesPage.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => {
            const service = servicesPage.cards[slug];
            return (
              <Link
                key={slug}
                href={localizePath(`/services/${slug}`, locale)}
                className="group flex h-full flex-col rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent-mid)] hover:shadow-accent-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {service.name}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[10px] shrink-0 rounded-full bg-gradient-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center text-xs font-semibold text-accent">
                  {servicesPage.viewDetails}
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
