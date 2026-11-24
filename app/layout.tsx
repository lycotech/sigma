import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ToastProvider } from "@/components/ui/Toast";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.shortName}` },
  description: site.heroSub,
  openGraph: { siteName: site.name, locale: "en_NG", type: "website" },
};

export const viewport: Viewport = { themeColor: "#0a1450" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NG" className={manrope.variable}>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-brand-500 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ToastProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main" className="pt-20">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
