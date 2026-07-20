import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Truck,
  BadgeIndianRupee,
  Boxes,
  Clock,
  Headset,
  Building2,
  Factory,
  HardHat,
  Landmark,
  Hammer,
  Warehouse,
} from "lucide-react";

/**
 * Local imagery lives in /public/images so the site is fully self-contained
 * and fast. Swap a file (or this path) to update any photograph.
 */
const img = (file: string) => `/images/${file}`;

export const heroImage = {
  src: img("hero.jpg"),
  alt: "Wide view of an industrial warehouse stacked with steel sections",
};

export const aboutImage = {
  src: img("about.jpg"),
  alt: "Crane loading steel inventory inside a distribution warehouse",
};

export type Product = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    title: "Stainless Steel",
    description:
      "Pipes and sheets in Grade 202 and Grade 304 for durable fabrication, kitchen and industrial use.",
    image: img("stainless-steel-pipes.webp"),
    alt: "Stainless steel pipes in Grade 202 and Grade 304",
  },
  {
    title: "ACP Sheets",
    description:
      "Aluminium composite panels for cladding, signage and modern building façades.",
    image: img("acp-sheets.jpg"),
    alt: "ACP sheets for cladding and building façades",
  },
  {
    title: "GI Pipes",
    description:
      "Galvanised iron pipes for water lines, scaffolding and structural applications.",
    image: img("gallery/gallery-pipes-rack.jpg"),
    alt: "GI and steel pipes stacked on storage racks",
  },
  {
    title: "Structural Angles",
    description:
      "Equal and unequal angles for framing, fabrication and support structures.",
    image: img("gallery/gallery-angle-bars.jpg"),
    alt: "Structural steel angles bundled for dispatch",
  },
  {
    title: "Structural Channels",
    description:
      "Precision-rolled channels for durable industrial and building frameworks.",
    image: img("structural-channel.webp"),
    alt: "Structural steel channels ready for dispatch",
  },
  {
    title: "GP Sheets",
    description:
      "Galvanised plain sheets for roofing, ducting, fabrication and industrial use.",
    image: img("gp-sheet.jpg"),
    alt: "Galvanised plain sheets in stock",
  },
  {
    title: "Roofing Sheets",
    description:
      "Profiled roofing sheets for residential, commercial and industrial buildings.",
    image: img("roofing-sheet.jpg"),
    alt: "Profiled roofing sheets stacked at the yard",
  },
  {
    title: "MS Pipes",
    description:
      "Mild steel pipes for plumbing, scaffolding, fabrication and general construction.",
    image: img("ms-pipes.jpg"),
    alt: "Mild steel pipes stacked for plumbing and fabrication",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Genuine Products",
    description:
      "Certified steel sourced directly from reputed mills with verifiable quality.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Supply",
    description:
      "Consistent stock availability backed by strong mill relationships.",
    icon: Boxes,
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent, market-aligned rates with no hidden charges.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Bulk Orders",
    description:
      "Reliable fulfilment for project-scale requirements of any volume.",
    icon: Truck,
  },
  {
    title: "Fast Delivery",
    description:
      "Organised logistics ensuring on-time dispatch across Odisha.",
    icon: Clock,
  },
  {
    title: "Customer Support",
    description:
      "Responsive guidance from enquiry through to final delivery.",
    icon: Headset,
  },
];

export type Industry = {
  title: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { title: "Residential Construction", icon: Building2 },
  { title: "Commercial Buildings", icon: Landmark },
  { title: "Infrastructure", icon: HardHat },
  { title: "Industrial Projects", icon: Factory },
  { title: "Government Projects", icon: Warehouse },
  { title: "Fabrication", icon: Hammer },
];

export type Brand = {
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  { name: "JSW Steel", logo: "/images/gallery/JSW-logo.png" },
  { name: "JSPL", logo: "/images/gallery/JSPL-logo.png" },
  { name: "VIVA", logo: "/images/gallery/Viva-logo.png" },
  { name: "HMB", logo: "/images/gallery/HMB-logo.png" },
  { name: "JSL Stainless", logo: "/images/gallery/JSL-Stainless-logo.png" },
];

export type GalleryItem = {
  image: string;
  alt: string;
  span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
  {
    image: img("gallery/Steel-1.jpg"),
    alt: "Steel sections and profiles stocked on the workshop floor",
    span: "tall",
  },
  {
    image: img("gallery/Steel-2.jpg"),
    alt: "MS pipes and hollow sections organised on warehouse racks",
    span: "tall",
  },
  {
    image: img("gallery/Steel-3.jpg"),
    alt: "Colour range of corrugated roofing and cladding sheets on display",
  },
  {
    image: img("gallery/Steel-4.jpg"),
    alt: "Structural angles and rectangular hollow sections stacked for dispatch",
  },
  {
    image: img("steel-bars-yard.jpg"),
    alt: "Steel bars stacked in an industrial yard",
    span: "tall",
  },
  {
    image: img("gallery/gallery-hardware-shelves.jpg"),
    alt: "Metal hardware and decorative steel stocked on warehouse shelving",
  },
  {
    image: img("warehouse-beams.jpg"),
    alt: "Steel sections stored in a warehouse interior",
  },
  {
    image: img("gallery/gallery-corrugated-sheets.jpg"),
    alt: "Profiled metal roofing sheets stacked at the yard",
  },
  {
    image: img("gallery/gallery-angle-bars.jpg"),
    alt: "MS angles and square bars bundled for dispatch",
  },
  {
    image: img("forklift-truck.jpg"),
    alt: "Forklift loading material onto a delivery truck",
    span: "wide",
  },
  {
    image: img("gallery/gallery-pipes-rack.jpg"),
    alt: "Square and round MS pipes arranged on storage racks",
  },
  {
    image: img("welder-sparks.jpg"),
    alt: "Industrial fabrication with welding sparks",
  },
  {
    image: img("gallery/gallery-warehouse-stock.jpg"),
    alt: "Warehouse interior stocked with metal supplies and hardware",
  },
  {
    image: img("gallery/gallery-hpl-panels.jpg"),
    alt: "HPL cladding panels stored at the distribution yard",
  },
  {
    image: img("about.jpg"),
    alt: "Crane handling steel inventory in storage",
  },
];

export const processSteps = [
  {
    title: "Customer Enquiry",
    description: "Share your requirement by phone, email or our contact form.",
  },
  {
    title: "Requirement Discussion",
    description: "We review grades, sizes, quantities and delivery timelines.",
  },
  {
    title: "Quotation",
    description: "A clear, itemised quote with transparent pricing.",
  },
  {
    title: "Order Confirmation",
    description: "Confirm the order and finalise dispatch scheduling.",
  },
  {
    title: "Dispatch",
    description: "Material is checked, loaded and dispatched on time.",
  },
  {
    title: "Delivery",
    description: "Safe delivery to your site across Bhadrak and Odisha.",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dependable supply and fair pricing across every project we have run. Their delivery commitments are always met.",
    name: "Rakesh Mohanty",
    role: "Civil Contractor, Bhadrak",
  },
  {
    quote:
      "We rely on them for structural steel on tight schedules. The quality is consistent and the team is genuinely responsive.",
    name: "Sourav Patnaik",
    role: "Project Manager, Cuttack",
  },
  {
    quote:
      "From enquiry to delivery the process is smooth and professional. A trusted partner for our fabrication unit.",
    name: "Anil Behera",
    role: "Fabrication Owner, Balasore",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Do you deliver across Odisha?",
    answer:
      "Yes. We deliver to Bhadrak and surrounding districts across Odisha. Delivery timelines and freight are confirmed at the time of quotation based on location and order size.",
  },
  {
    question: "Can you handle bulk and project-scale orders?",
    answer:
      "Absolutely. We regularly supply project-scale volumes for construction, infrastructure and industrial clients, with scheduling tailored to your site requirements.",
  },
  {
    question: "Which steel products do you stock?",
    answer:
      "We supply stainless steel pipes and sheets (Grade 202 & 304), ACP sheets, GI pipes, structural angles, structural channels, GP sheets, roofing sheets and MS pipes. For specific sizes and grades, please contact us.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is transparent and aligned with prevailing market rates. We provide an itemised quotation with no hidden charges so you can plan your budget with confidence.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We are open every day from 9:00 AM to 8:00 PM. You can reach us by phone or email during business hours.",
  },
];
