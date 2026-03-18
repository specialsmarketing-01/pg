import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://permagrowth.example"),
  title: {
    default: "PermaGrowth — Performance Marketing Agency",
    template: "%s — PermaGrowth",
  },
  description:
    "Premium performance marketing for modern brands: SEO, Ads, and Design that generate real growth.",
  openGraph: {
    title: "PermaGrowth — Performance Marketing Agency",
    description:
      "SEO, Ads, and Design that generate real growth. Conversion-focused systems built to scale.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/PermaGrowthfavicon.png",
    shortcut: "/PermaGrowthfavicon.png",
    apple: "/PermaGrowthfavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 gradient-accent opacity-70" />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
