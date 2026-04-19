import type { Metadata } from "next";
import { getImpressumPage } from "@/i18n/legal-pages";
import { resolveLocale } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const page = getImpressumPage(locale);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const page = getImpressumPage(locale);

  return (
    <div className="pb-16">
      <article className="pt-12 sm:pt-16 lg:pt-20">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {page.kicker}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.title}
          </h1>
        </header>

        <div className="mt-12 max-w-3xl space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-base font-semibold text-white">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                {section.paragraphs.map((p, i) => (
                  <p key={`${section.heading}-${i}`}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
