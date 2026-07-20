import type { Metadata } from "next";
import { Industries } from "@/components/sections/Industries";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Steel for Every Industry",
  description:
    "Sri Jagannath Traders supplies steel products for residential, commercial, infrastructure, industrial, government and fabrication projects across Odisha.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Industries headingAs="h1" />
    </div>
  );
}
