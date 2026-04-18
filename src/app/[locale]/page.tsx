import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { Testimonials } from "@/sections/home/Testimonials";
import { FinalCta } from "@/sections/home/FinalCta";
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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  };
}

export default function HomePage() {
  return (
    <div className="pb-6">
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
    </div>
  );
}
