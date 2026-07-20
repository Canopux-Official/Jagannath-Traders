import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Steel Yard Gallery",
  description:
    "See the Sri Jagannath Traders steel yard, stock and operations in Bhadrak, Odisha.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Gallery headingAs="h1" />
    </div>
  );
}
