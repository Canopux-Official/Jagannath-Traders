import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Steel Business",
  description:
    "Learn about Sri Jagannath Traders — a trusted steel supplier and distributor serving builders and industries across Bhadrak and Odisha since 2019.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <About headingAs="h1" />
    </div>
  );
}
