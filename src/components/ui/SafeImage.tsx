"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image wrapper that degrades gracefully to a neutral steel placeholder
 * if the remote photograph fails to load, so the layout never breaks.
 */
export function SafeImage({ className, alt, ...props }: ImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-charcoal",
          className,
        )}
      >
        <span className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/30">
          Sri Jagannath Traders
        </span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
