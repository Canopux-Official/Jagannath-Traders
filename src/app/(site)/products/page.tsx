import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Steel Products in Bhadrak",
  description:
    "Browse steel products in Bhadrak, stainless steel, mild steel pipes, structural steel angles and channels, ACP sheets, GI pipes, GP sheets and roofing sheets from Sri Jagannath Traders.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Products headingAs="h1" />
    </div>
  );
}
