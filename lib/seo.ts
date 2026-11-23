import type { Metadata } from "next";
import { site } from "@/content/site";

/** Build per-page metadata with canonical, OpenGraph and Twitter tags. */
export function pageMeta(title: string, description: string, path = "/"): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "en_NG", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: ["+2348163343578", "+2349083606969"],
  foundingDate: "1995-05-30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18, St Gregory College Road, Ikoyi",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};
