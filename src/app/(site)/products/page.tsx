import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse stainless steel, ACP sheets, GI pipes, structural angles and channels, GP sheets, roofing sheets and MS pipes from Sri Jagannath Traders.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Products />
    </div>
  );
}
