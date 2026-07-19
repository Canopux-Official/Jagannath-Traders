import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the Sri Jagannath Traders yard, stock and operations in Bhadrak, Odisha.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Gallery />
    </div>
  );
}
