import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-white pt-28 pb-section lg:pt-32">
      <Container className="max-w-3xl">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-steel/60" />
          Legal
        </p>
        <h1 className="text-h2 font-bold text-charcoal">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink/55">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/75">
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Website use
            </h2>
            <p className="mt-3">
              This website is provided by {site.name} for informational and
              enquiry purposes. By using the site, you agree to use it lawfully
              and respectfully.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Product information
            </h2>
            <p className="mt-3">
              Product descriptions and stock information on this website are for
              general guidance. Final availability, grades, sizes, pricing and
              delivery terms are confirmed at the time of quotation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Enquiries and quotations
            </h2>
            <p className="mt-3">
              Submitting an enquiry does not create a binding order. Orders are
              confirmed only after mutual agreement on commercial terms between
              you and {site.name}.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Contact
            </h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-steel hover:underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
