import type { MetadataRoute } from "next";
import { policies } from "@/content/policies";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/about/", "/services/", "/s-trader/", "/open-account/", "/account-update/",
    "/downloads/", "/ipo/", "/contact/", "/contact/dpo/",
    ...services.map((s) => `/services/${s.slug}/`),
    ...policies.map((p) => `/policies/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
