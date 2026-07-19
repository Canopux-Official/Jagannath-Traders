import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sri Jagannath Traders in Bhadrak for steel enquiries, quotations and bulk orders.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Contact />
    </div>
  );
}
