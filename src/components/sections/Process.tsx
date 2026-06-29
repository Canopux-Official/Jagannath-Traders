import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-mist py-section">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from enquiry to delivery"
          description="A straightforward, transparent process designed to keep your project on schedule."
        />

        <div className="relative mt-16">
          {/* Connecting line for desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-black/10 lg:block"
          />
          <ol className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-6">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.06} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-steel/30 bg-white font-heading text-sm font-bold text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-base font-bold text-charcoal lg:mt-5">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 pl-14 text-sm leading-relaxed text-ink/65 lg:pl-0">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
