import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-heading text-sm font-semibold transition-all duration-300 ease-smooth focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "h-11 px-6",
  lg: "h-[3.25rem] px-8",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-white hover:bg-steel active:translate-y-px",
  secondary:
    "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white active:translate-y-px",
  ghost:
    "bg-white/0 text-charcoal hover:text-steel",
  inverse:
    "border border-white/45 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal active:translate-y-px",
};

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonAsLink) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], "rounded-sm", className)}
      {...props}
    >
      {children}
    </Link>
  );
}

type ButtonAsButton = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  ...props
}: ButtonAsButton) {
  return (
    <button
      type={type}
      className={cn(base, sizes[size], variants[variant], "rounded-sm", className)}
      {...props}
    >
      {children}
    </button>
  );
}
