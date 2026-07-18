import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Adjusts wordmark colour for light or dark backgrounds. */
  tone?: "dark" | "light";
  /** Brand wordmark layout — header and footer. */
  variant?: "default" | "brand";
};

const toneTransition = "transition-colors duration-300 ease-smooth";

/**
 * Brand wordmark — same type system as the site (Manrope + Devanagari),
 * composed in the signboard layout pattern:
 *
 *   श्री  JAGANNATH
 *         TRADERS
 */
function BrandWordmark({ tone }: { tone: "dark" | "light" }) {
  const onDark = tone === "light";
  const gold = onDark ? "text-[#f5c518]" : "text-[#c9920a]";

  return (
    <span
      className="inline-grid grid-cols-[auto_1fr] items-end gap-x-2 gap-y-1 leading-none"
      aria-label="Sri Jagannath Traders"
    >
      <span
        lang="hi"
        className={cn(
          "col-start-1 row-start-1 self-end pb-px font-devanagari text-[0.8rem] font-semibold leading-none",
          toneTransition,
          gold,
        )}
      >
        श्री
      </span>
      <span
        className={cn(
          "col-start-2 row-start-1 font-heading text-[0.95rem] font-extrabold uppercase tracking-[0.03em] leading-none",
          toneTransition,
          onDark ? "text-white" : "text-charcoal",
        )}
      >
        JAGANNATH
      </span>
      <span
        className={cn(
          "col-start-2 row-start-2 font-heading text-[0.65rem] font-semibold uppercase tracking-eyebrow leading-none",
          toneTransition,
          onDark ? "text-white/55" : "text-ink/50",
        )}
      >
        TRADERS
      </span>
    </span>
  );
}

export function Logo({ className, tone = "dark", variant = "default" }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-charcoal";
  const sub = tone === "light" ? "text-white/60" : "text-ink/55";

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        priority
        aria-hidden
      />
      {variant === "brand" ? (
        <BrandWordmark tone={tone} />
      ) : (
        <span className="flex flex-col leading-none">
          <span className={cn("font-heading text-[0.95rem] font-extrabold tracking-tight", text)}>
            SRI JAGANNATH
          </span>
          <span className={cn("font-heading text-[0.7rem] font-semibold tracking-eyebrow", sub)}>
            TRADERS
          </span>
        </span>
      )}
    </span>
  );
}
