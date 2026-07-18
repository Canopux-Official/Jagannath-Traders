import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { aboutImage } from "@/lib/content";
import { site } from "@/lib/site";

const commitments = [
  "Years of trust built on consistency",
  "Reliable, uninterrupted supply",
  "Certified, quality-assured steel",
  "Genuine commitment to every customer",
  "Timely delivery, every order",
];

export function About() {
  return (
    <section id="about" className="bg-white py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-mist">
              <SafeImage
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-charcoal px-8 py-7 text-white shadow-lift sm:block">
              <p className="font-heading text-4xl font-extrabold">6+</p>
              <p className="mt-1 text-sm text-white/60">Years serving Odisha</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-steel/60" />
                About Us
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2 font-bold text-balance">
                A steel partner builders and industries rely on
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink/70 text-pretty sm:text-lg">
                Sri Jagannath Traders has supplied premium steel to the
                construction and industrial sector across Bhadrak and Odisha since{" "}
                {site.founded}. We combine deep mill relationships with a
                disciplined approach to quality, stock and logistics — so your
                project never waits on material.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {commitments.map((item, i) => (
                <Reveal as="li" key={item} delay={0.12 + i * 0.05} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-steel/10 text-steel">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
