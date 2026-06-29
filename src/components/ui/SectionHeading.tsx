import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            {align === "left" ? (
              <span aria-hidden className="h-px w-8 bg-steel/60" />
            ) : null}
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <Tag className="text-h2 font-bold text-balance">{title}</Tag>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-ink/70 text-pretty sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
