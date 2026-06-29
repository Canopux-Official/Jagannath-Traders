"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-ink/40 transition-colors focus:border-steel focus-visible:ring-1 focus-visible:ring-steel";

const fieldLabel = "mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-ink/60";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired yet — surface a success state for the demo.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm border border-black/10 bg-white p-10 text-center shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-steel/10 text-steel">
          <Check className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
          We have received your enquiry and our team will get back to you during
          business hours.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-black/10 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={fieldLabel}>
            Full name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputBase} />
        </div>
        <div>
          <label htmlFor="phone" className={fieldLabel}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="+91" className={inputBase} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={fieldLabel}>
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={inputBase} />
        </div>
        <div>
          <label htmlFor="product" className={fieldLabel}>
            Product of interest
          </label>
          <select id="product" name="product" defaultValue="" className={cn(inputBase, "appearance-none")}>
            <option value="" disabled>
              Select a product
            </option>
            <option>TMT Bars</option>
            <option>Structural Steel</option>
            <option>MS Pipes</option>
            <option>MS Channels</option>
            <option>Angles</option>
            <option>Beams</option>
            <option>Binding Wire</option>
            <option>Other</option>
          </select>
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
          placeholder="Tell us about your requirement, quantity and timeline."
          className={cn(inputBase, "resize-none")}
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send Enquiry
        <Send className="h-4 w-4" strokeWidth={2} />
      </Button>
    </form>
  );
}
