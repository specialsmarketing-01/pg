import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { brandFaviconSrc } from "@/lib/branding";
import { resolveLocale } from "@/i18n/get-dictionary";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://permagrowth.example"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: brandFaviconSrc,
    shortcut: brandFaviconSrc,
    apple: brandFaviconSrc,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = resolveLocale(headersList.get("x-locale") ?? "de");

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 gradient-accent opacity-70" />
        {children}
      </body>
    </html>
  );
}
