import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Adjusts wordmark colour for light or dark backgrounds. */
  tone?: "dark" | "light";
  /** Brand wordmark layout, header and footer. */
  variant?: "default" | "brand";
};

const toneTransition = "transition-colors duration-300 ease-smooth";

/**
 * Brand wordmark, stacked signboard composition:
 *
 *        ଶ୍ରୀ
 *     Jagannath
 *      TRADERS
 */
function BrandWordmark({ tone }: { tone: "dark" | "light" }) {
  const onDark = tone === "light";
  const gold = onDark ? "text-[#f5c518]" : "text-[#c9920a]";

  return (
    <span
      className="inline-flex flex-col items-center leading-none"
      aria-label="Sri Jagannath Traders"
    >
      <span
        lang="or"
        className={cn(
          "font-odia text-[0.7rem] font-normal leading-none",
          toneTransition,
          gold,
        )}
      >
        ଶ୍ରୀ
      </span>
      <span
        className={cn(
          "mt-0.5 font-signature text-[1.85rem] font-normal leading-none tracking-normal",
          toneTransition,
          onDark ? "text-white" : "text-charcoal",
        )}
      >
        Jagannath
      </span>
      <span
        className={cn(
          "mt-1 font-heading text-[0.58rem] font-semibold uppercase tracking-[0.28em] leading-none",
          toneTransition,
          gold,
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
