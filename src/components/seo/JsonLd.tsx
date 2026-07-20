import { site } from "@/lib/site";
import { faqs } from "@/lib/content";
import { mapsUrl } from "@/lib/seo";

const logoUrl = `${site.url}/images/logo.png`;
const imageUrl = `${site.url}/images/hero.jpg`;

function socialProfiles(): string[] {
  return Object.values(site.social).filter((url) => Boolean(url));
}

/** Core business entity graph — safe to render on every page. */
export function SiteJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HardwareStore"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    image: [imageUrl, logoUrl],
    logo: logoUrl,
    priceRange: "₹₹",
    foundingDate: String(site.founded),
    taxID: site.gstin,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    knowsAbout: [
      "Steel",
      "Steel products",
      "Stainless steel",
      "Mild steel",
      "Structural steel",
      "GI pipes",
      "MS pipes",
      "Roofing sheets",
      "ACP sheets",
      "GP sheets",
    ],
    keywords:
      "steel, steel products, steel distributor, stainless steel, mild steel, structural steel, Bhadrak, Odisha",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    },
    hasMap: mapsUrl,
    areaServed: [
      {
        "@type": "City",
        name: "Bhadrak",
      },
      {
        "@type": "State",
        name: "Odisha",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    ...(socialProfiles().length > 0 ? { sameAs: socialProfiles() } : {}),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: imageUrl,
    email: site.email,
    telephone: site.phoneHref,
    ...(socialProfiles().length > 0 ? { sameAs: socialProfiles() } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "IN",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };

  const graph = [localBusiness, organization, website];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/** FAQ rich results — homepage only (where FAQ content is visible). */
export function FaqJsonLd() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  );
}

/** @deprecated Prefer SiteJsonLd — kept for compatibility during migrate. */
export function JsonLd() {
  return <SiteJsonLd />;
}
