import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { products } from "@/lib/content";
import { productSlug } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="bg-mist py-section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Product Range"
            title="Steel products for construction and industry"
            description="A ready-stock range of stainless steel, pipes, sheets and structural sections for builders, fabricators and contractors across Odisha."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={(i % 3) * 0.06}>
              <div
                id={productSlug(product.title)}
                className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-sm border border-black/10 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift lg:scroll-mt-32"
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
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-charcoal">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.title)}`}
                    className="mt-auto inline-flex h-10 w-fit items-center justify-center rounded-sm border border-charcoal/15 bg-transparent px-4 font-heading text-sm font-semibold text-charcoal transition-all duration-300 ease-smooth hover:border-steel hover:bg-steel hover:text-white"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
