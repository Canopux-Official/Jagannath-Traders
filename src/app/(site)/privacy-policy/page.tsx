import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-28 pb-section lg:pt-32">
      <Container className="max-w-3xl">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-steel/60" />
          Legal
        </p>
        <h1 className="text-h2 font-bold text-charcoal">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink/55">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/75">
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit an enquiry through our website, we may collect your
              name, phone number, email address, product interest, quantity and
              requirement details so we can respond to your request.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              How we use information
            </h2>
            <p className="mt-3">
              We use enquiry information only to communicate with you about
              quotations, product availability, delivery and related business
              correspondence for {site.name}.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Sharing of information
            </h2>
            <p className="mt-3">
              We do not sell personal information. Enquiry details may be shared
              through WhatsApp or email solely for the purpose of handling your
              request with our team.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Contact
            </h2>
            <p className="mt-3">
              For privacy-related questions, contact us at{" "}
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
