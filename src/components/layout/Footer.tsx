import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks, legalLinks, site } from "@/lib/site";
import { products } from "@/lib/content";

const socials = [
  { label: "Facebook", href: site.social.facebook, icon: Facebook },
  { label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, icon: Instagram },
  { label: "YouTube", href: site.social.youtube, icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" variant="brand" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Trusted supplier of premium steel products serving builders,
              contractors and industries across Odisha since {site.founded}.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <s.icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <nav aria-label="Quick links">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/40">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Products">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/40">
                Products
              </h3>
              <ul className="mt-5 space-y-3">
                {products.slice(0, 6).map((p) => (
                  <li key={p.title}>
                    <Link
                      href={`/contact?product=${encodeURIComponent(p.title)}`}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/40">
                Contact
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                  <span>
                    {site.address.street}, {site.address.locality},{" "}
                    {site.address.region} {site.address.postalCode}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                  <span>
                    <span className="text-white/50">GSTIN:</span>{" "}
                    <span className="font-mono tracking-wide">{site.gstin}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/40">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
