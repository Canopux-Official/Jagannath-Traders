import type { Metadata } from "next";
import { Industries } from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sri Jagannath Traders supplies steel for residential, commercial, infrastructure, industrial, government and fabrication projects across Odisha.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Industries />
    </div>
  );
}
