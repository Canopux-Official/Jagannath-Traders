import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";

type IndustriesProps = {
  headingAs?: "h1" | "h2";
};

export function Industries({ headingAs = "h2" }: IndustriesProps) {
  return (
    <section id="industries" className="bg-charcoal py-section text-white">
      <Container>
        <SectionHeading
          as={headingAs}
          eyebrow="Industries We Serve"
          title="Supplying steel across every sector"
          description="From homes to highways, our material supports the projects that move Odisha forward."
          className="[&_.eyebrow]:text-steel-light [&_h1]:text-white [&_h2]:text-white [&_p]:text-white/65"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="group flex h-full items-center gap-5 bg-charcoal p-8 transition-colors duration-300 hover:bg-[#262626]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-sm border border-white/15 text-steel-light transition-colors duration-300 group-hover:border-steel-light/50">
                  <industry.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {industry.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
