import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { products } from "@/lib/content";

export function Products() {
  return (
    <section id="products" className="bg-mist py-section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Product Range"
            title="Steel for every stage of construction"
            description="A complete catalogue of structural and reinforcement steel, sourced from trusted mills and held in ready stock."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={(i % 3) * 0.06}>
              <Link
                href="#contact"
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-black/10 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-mist">
                  <SafeImage
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-charcoal">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {product.description}
                    </p>
                  </div>
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-black/10 text-charcoal transition-colors duration-300 group-hover:border-steel group-hover:bg-steel group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
