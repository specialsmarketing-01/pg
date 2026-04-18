import type { Metadata } from "next";
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
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  const { about } = dict;

  return (
    <div className="pb-10">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {about.kicker}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {about.title}
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            {about.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {about.cards.map((card) => (
            <div
              key={card.title}
              className="space-y-3 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6"
            >
              <h2 className="text-sm font-semibold text-white">{card.title}</h2>
              <p className="text-sm text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
