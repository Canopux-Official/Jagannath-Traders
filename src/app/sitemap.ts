import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
