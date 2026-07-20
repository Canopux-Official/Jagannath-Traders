import type { Metadata, Viewport } from "next";
import { Great_Vibes, Inter, Manrope, Noto_Sans_Oriya } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteJsonLd } from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const notoOriya = Noto_Sans_Oriya({
  subsets: ["oriya"],
  display: "swap",
  variable: "--font-odia",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signature",
  weight: "400",
});

const homeTitle = `${site.name} | Premium Steel Distributor in Bhadrak`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "steel",
    "steel products Bhadrak",
    "steel distributor Bhadrak",
    "steel supplier Bhadrak",
    "steel supplier Odisha",
    "steel shop Bhadrak",
    "mild steel Bhadrak",
    "structural steel Odisha",
    "stainless steel Bhadrak",
    "stainless steel Odisha",
    "MS steel pipes Bhadrak",
    "ACP sheets Bhadrak",
    "GI pipes Bhadrak",
    "MS pipes Bhadrak",
    "GP sheets Bhadrak",
    "roofing sheets Bhadrak",
    "structural angles Odisha",
    "structural channels Bhadrak",
    "Sri Jagannath Traders",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: homeTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${notoOriya.variable} ${greatVibes.variable}`}
    >
      <body>
        <SiteJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
