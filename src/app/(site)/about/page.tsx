import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sri Jagannath Traders — a trusted steel distributor serving builders and industries across Bhadrak and Odisha.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <About />
    </div>
  );
}
