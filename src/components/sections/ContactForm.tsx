"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  Suspense,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-ink/40 transition-colors focus:border-steel focus-visible:ring-1 focus-visible:ring-steel";

const fieldLabel =
  "mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-ink/60";

const productOptions = [...products.map((p) => p.title), "Other"] as const;

function resolveProduct(value: string | null): string {
  if (!value) return "";
  return productOptions.includes(value as (typeof productOptions)[number])
    ? value
    : "";
}

function buildWhatsAppEnquiryUrl(fields: {
  name: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
}) {
  const lines = [
    `Hello ${site.shortName},`,
    "",
    "I would like to place an enquiry through your website.",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.email ? `Email: ${fields.email}` : null,
    `Product: ${fields.product}`,
    `Quantity: ${fields.quantity}`,
    "",
    "Requirement details:",
    fields.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return `https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(lines)}`;
}

function ContactFormFields() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const productFromUrl = resolveProduct(searchParams.get("product"));

  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formKey, setFormKey] = useState(0);

  const hydrated = useRef(false);
  const skipNextUrlSync = useRef(false);

  // On full page refresh: clear product from URL and reset the form.
  // On normal visits / in-app product clicks: keep auto-select from ?product=
  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = nav?.type === "reload";

    if (isReload) {
      skipNextUrlSync.current = true;
      setSelectedProduct("");
      setSubmitted(false);
      setFormKey((key) => key + 1);

      if (searchParams.has("product")) {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("product");
        const query = params.toString();
        router.replace(
          `${pathname}${query ? `?${query}` : ""}${window.location.hash}`,
          { scroll: false },
        );
      }
    } else {
      setSelectedProduct(productFromUrl);
    }

    hydrated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional one-time mount handling
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    if (skipNextUrlSync.current) {
      skipNextUrlSync.current = false;
      return;
    }
    setSelectedProduct(productFromUrl);
  }, [productFromUrl]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const enquiry = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      product: String(formData.get("product") ?? selectedProduct).trim(),
      quantity: String(formData.get("quantity") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const whatsappUrl = buildWhatsAppEnquiryUrl(enquiry);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm border border-black/10 bg-white p-10 text-center shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-steel/10 text-steel">
          <Check className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
          Opening WhatsApp
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
          Your enquiry has been prepared. Complete sending it in WhatsApp to
          reach our team directly.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setSelectedProduct("");
            setFormKey((key) => key + 1);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      key={formKey}
      onSubmit={handleSubmit}
      className="rounded-sm border border-black/10 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={fieldLabel}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className={fieldLabel}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            required
            placeholder="10-digit mobile number"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            className={inputBase}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={fieldLabel}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={inputBase}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="product" className={fieldLabel}>
            Product of interest
          </label>
          <select
            id="product"
            name="product"
            required
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className={cn(inputBase, "appearance-none")}
          >
            <option value="" disabled>
              Select a product
            </option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className={fieldLabel}>
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            required
            placeholder="e.g. 5 tonnes / 200 pcs"
            className={inputBase}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={fieldLabel}>
          Requirement details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about sizes, grades, delivery timeline and any other details."
          className={cn(inputBase, "resize-none")}
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send via WhatsApp
        <Send className="h-4 w-4" strokeWidth={2} />
      </Button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[420px] rounded-sm border border-black/10 bg-white p-7 shadow-card sm:p-9" />
      }
    >
      <ContactFormFields />
    </Suspense>
  );
}
