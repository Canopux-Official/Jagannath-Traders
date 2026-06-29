import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { gallery } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-section">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Inside our operations"
          description="Warehousing, inventory and logistics built to keep large orders moving."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((item, i) => (
            <Reveal key={item.image + i} delay={(i % 3) * 0.05}>
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-sm bg-mist break-inside-avoid",
                  item.span === "tall" && "aspect-[3/4]",
                  item.span === "wide" && "aspect-[4/3]",
                  !item.span && "aspect-square",
                )}
              >
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
