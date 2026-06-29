import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on reliability, priced with integrity"
          description="The fundamentals that make us a long-term steel partner rather than a one-time supplier."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-mist">
                <span className="grid h-12 w-12 place-items-center rounded-sm border border-black/10 text-steel transition-colors duration-300 group-hover:border-steel/40">
                  <feature.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
