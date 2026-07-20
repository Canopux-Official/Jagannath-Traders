type ClassValue = string | number | null | false | undefined;

/**
 * Minimal className combiner. Filters out falsy values and joins with a space.
 * Avoids pulling in clsx/tailwind-merge for a project of this size.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** URL-safe slug for product titles (e.g. "MS Pipes" → "ms-pipes"). */
export function productSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
