import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Force a tone; defaults to currentColor for the mark text. */
  tone?: "dark" | "light";
};

/**
 * Wordmark for Sri Jagannath Traders. The monogram uses a single steel accent
 * so it reads as a considered brand mark rather than a generic icon.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-charcoal";
  const sub = tone === "light" ? "text-white/60" : "text-ink/55";

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-steel text-white"
      >
        <span className="font-heading text-base font-extrabold leading-none">
          SJ
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[0.95rem] font-extrabold tracking-tight", text)}>
          SRI JAGANNATH
        </span>
        <span className={cn("font-heading text-[0.7rem] font-semibold tracking-eyebrow", sub)}>
          TRADERS
        </span>
      </span>
    </span>
  );
}
