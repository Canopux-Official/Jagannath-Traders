import { MapPin, Phone, Mail, Clock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

type ContactProps = {
  headingAs?: "h1" | "h2";
};

export function Contact({ headingAs = "h2" }: ContactProps) {
  const mapsQuery = `${site.coordinates.lat},${site.coordinates.lng}`;

  return (
    <section id="contact" className="bg-white py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              as={headingAs}
              eyebrow="Contact"
              title="Request a quote"
              description="Share your requirement and our team will respond promptly with pricing and availability."
            />

            <dl className="mt-10 space-y-7">
              <Reveal as="div" className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-black/10 text-steel">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-heading text-sm font-bold text-charcoal">Address</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/65">
                    {site.address.street}, {site.address.locality},<br />
                    {site.address.region} {site.address.postalCode}, {site.address.country}
                  </dd>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.05} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-black/10 text-steel">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-heading text-sm font-bold text-charcoal">Phone</dt>
                  <dd className="mt-1 text-sm text-ink/65">
                    <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-steel">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.1} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-black/10 text-steel">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-heading text-sm font-bold text-charcoal">Email</dt>
                  <dd className="mt-1 text-sm text-ink/65">
                    <a href={`mailto:${site.email}`} className="transition-colors hover:text-steel">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.15} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-black/10 text-steel">
                  <FileText className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-heading text-sm font-bold text-charcoal">GSTIN</dt>
                  <dd className="mt-1 font-mono text-sm tracking-wide text-ink/65">
                    {site.gstin}
                  </dd>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.2} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-black/10 text-steel">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-heading text-sm font-bold text-charcoal">Business hours</dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-ink/65">
                    {site.hours.map((h) => (
                      <p key={h.days}>
                        <span className="text-charcoal/80">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </Reveal>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-black/10 bg-mist">
            <iframe
              title={`Map showing ${site.name}`}
              src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.3]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
