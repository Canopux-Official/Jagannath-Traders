import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brands } from "@/lib/content";

export function Brands() {
  return (
    <section className="border-y border-black/10 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center font-heading text-xs font-semibold uppercase tracking-eyebrow text-ink/45">
            Brands we deal in
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <Reveal key={brand} delay={(i % 6) * 0.04}>
              {/* Placeholder logo — replace with a real <SafeImage> logo later. */}
              <div className="flex h-12 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                <span className="font-heading text-lg font-extrabold tracking-tight text-charcoal/35 transition-colors duration-300 hover:text-charcoal">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
