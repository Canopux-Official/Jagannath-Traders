import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Steel Supplier in Bhadrak",
  description:
    "Contact Sri Jagannath Traders in Bhadrak for steel products, enquiries, quotations and bulk orders. Call +91 94384 58123 or message on WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Contact headingAs="h1" />
    </div>
  );
}
