type ClassValue = string | number | null | false | undefined;

/**
 * Minimal className combiner. Filters out falsy values and joins with a space.
 * Avoids pulling in clsx/tailwind-merge for a project of this size.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
