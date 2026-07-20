import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  /** Path beginning with `/`, e.g. `/about`. Use `/` for home. */
  path: string;
  /** When true, title is used as-is (no `| Brand` template). */
  absoluteTitle?: boolean;
};

/**
 * Builds per-route metadata with correct canonical + Open Graph URL
 * so child pages do not inherit the homepage canonical.
 */
export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const ogTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: site.name,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export const mapsUrl = `https://www.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}`;
