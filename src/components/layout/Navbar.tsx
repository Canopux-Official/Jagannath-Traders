"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        solid
          ? "border-b border-black/10 bg-white/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-grid flex h-16 items-center justify-between gap-6 lg:h-20"
      >
        <Link
          href="#top"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <Logo tone={solid ? "dark" : "light"} variant="brand" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-heading text-sm font-medium transition-colors",
                  solid
                    ? "text-charcoal/80 hover:text-steel"
                    : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center lg:flex">
          <ButtonLink href="#contact" variant={solid ? "primary" : "inverse"}>
            Request a Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-sm transition-colors lg:hidden",
            solid ? "text-charcoal" : "text-white",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white lg:hidden"
          >
            <ul className="container-grid flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 font-heading text-lg font-semibold text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 pb-2">
                <ButtonLink href="#contact" size="lg" onClick={() => setOpen(false)}>
                  Request a Quote
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
