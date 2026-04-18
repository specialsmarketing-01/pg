import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICE_SLUGS,
  isServiceSlug,
  type ServiceSlug,
} from "@/i18n/service-slugs";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";
import { localizePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isServiceSlug(slug)) {
    return { title: "Not found" };
  }
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  const meta = dict.meta.servicePages[slug as ServiceSlug];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }
  const locale = resolveLocale(raw) as Locale;
  const dict = getDictionary(locale);
  const page = dict.serviceDetail[slug];
  if (!page) {
    notFound();
  }

  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {page.kicker}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            {page.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {page.columns.map((col) => (
            <div
              key={col.heading}
              className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6"
            >
              <h2 className="text-sm font-semibold text-white">{col.heading}</h2>
              {col.kind === "list" ? (
                <ul className="space-y-2 text-sm text-muted">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted">{col.body}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={localizePath("/services", locale)}
            className="text-sm font-semibold text-accent hover:text-white transition"
          >
            ← {dict.servicesPage.kicker}
          </Link>
        </div>
      </section>
    </div>
  );
}
