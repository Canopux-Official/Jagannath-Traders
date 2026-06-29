import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by contractors across Odisha"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-sm border border-black/10 bg-white p-8 shadow-card">
                <div aria-hidden className="flex gap-1 text-steel">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-sm">★</span>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink/80 text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-black/10 pt-5">
                  <p className="font-heading text-sm font-bold text-charcoal">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-sm text-ink/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
