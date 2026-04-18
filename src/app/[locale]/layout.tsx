import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const dict = getDictionary(locale);
  return {
    title: {
      default: dict.meta.siteTitle,
      template: dict.meta.siteTitleTemplate,
    },
    description: dict.meta.siteDescription,
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.ogDescription,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <DictionaryProvider locale={locale} dict={dict}>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
    </DictionaryProvider>
  );
}
