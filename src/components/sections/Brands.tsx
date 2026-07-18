import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { brands } from "@/lib/content";

export function Brands() {
  return (
    <section
      aria-label="Steel manufacturers we supply"
      className="border-y border-black/10 bg-white py-10 lg:py-12"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3">
              <span aria-hidden className="hidden h-px w-8 bg-steel/60 sm:block" />
              Authorised supply
              <span aria-hidden className="hidden h-px w-8 bg-steel/60 sm:block" />
            </p>
            <p className="mt-3 font-heading text-base font-semibold text-charcoal sm:text-lg">
              Steel from India&apos;s leading manufacturers
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              We deal in products from reputed mills trusted across construction
              and industry.
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={(i % 5) * 0.04}>
              <div className="group flex h-16 items-center justify-center rounded-sm border border-black/6 bg-mist/50 px-4 py-3 transition-all duration-300 hover:border-steel/25 hover:bg-white hover:shadow-card sm:h-[4.5rem]">
                <SafeImage
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={160}
                  height={64}
                  className="h-9 w-auto max-w-[8.5rem] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
