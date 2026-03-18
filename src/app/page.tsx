import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { Testimonials } from "@/sections/home/Testimonials";
import { FinalCta } from "@/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Scale your business with performance marketing—SEO, Ads, and Design that generate real growth.",
};

export default function Home() {
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
