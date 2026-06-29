# Sri Jagannath Traders — Corporate Website

A premium, single-page corporate website for **Sri Jagannath Traders**, a steel
distributor based in Bhadrak, Odisha. Built with an editorial, industrial design
language inspired by global steel majors — clean, minimal and confident.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (subtle, accessible motion)
- **Lucide React** (line icons)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx        # Fonts, metadata, JSON-LD, skip link
│  ├─ page.tsx          # Section composition
│  ├─ globals.css       # Design tokens & base styles
│  ├─ icon.svg          # Favicon
│  ├─ robots.ts         # robots.txt
│  └─ sitemap.ts        # sitemap.xml
├─ components/
│  ├─ layout/           # Navbar, Footer
│  ├─ sections/         # Hero, About, Products, … Contact
│  ├─ seo/              # JSON-LD structured data
│  └─ ui/               # Reusable primitives (Button, Container, Reveal, …)
└─ lib/
   ├─ site.ts           # Business details & navigation
   ├─ content.ts        # Section content + image references
   └─ utils.ts          # cn() class helper
```

## Editing Content

- **Business details** (name, phone, address, hours, socials): `src/lib/site.ts`
- **Products, features, gallery, FAQs, testimonials**: `src/lib/content.ts`
- **Images**: drop replacements into `public/images/` (keep the same filenames)
  or update the paths in `src/lib/content.ts`.

## Design Tokens

| Token        | Value     | Usage             |
| ------------ | --------- | ----------------- |
| White        | `#FFFFFF` | Primary surface   |
| Charcoal     | `#202020` | Headings / dark   |
| Steel Blue   | `#355C7D` | Single accent     |
| Light Gray   | `#F5F5F5` | Neutral sections  |
| Dark Gray    | `#2C2C2C` | Body text         |

Headings use **Manrope**, body copy uses **Inter** (loaded via `next/font`).

## Notes

- The contact form is front-end only; wire it to an API route or email service
  (e.g. Resend, Formspree) when going live.
- The map uses an embedded Google Maps placeholder driven by the business
  address in `site.ts`.
- Photography is bundled locally for performance and reliability. All images are
  royalty-free stock; replace with authentic on-site photography before launch.
```
