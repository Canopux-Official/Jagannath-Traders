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
    title: "TMT Bars",
    description: "High-strength reinforcement bars in all standard grades and sizes.",
    image: img("rebar.jpg"),
    alt: "Bundled TMT reinforcement steel bars",
  },
  {
    title: "Structural Steel",
    description: "Heavy structural sections engineered for load-bearing frameworks.",
    image: img("warehouse-beams.jpg"),
    alt: "Structural steel sections stacked at a warehouse",
  },
  {
    title: "MS Pipes",
    description: "Mild steel pipes for plumbing, scaffolding and fabrication.",
    image: img("pipes.jpg"),
    alt: "Mild steel pipes arranged in a geometric pattern",
  },
  {
    title: "MS Channels",
    description: "Precision-rolled channels for durable industrial structures.",
    image: img("beams-aerial.jpg"),
    alt: "Steel channel and beam sections viewed from above",
  },
  {
    title: "Angles",
    description: "Equal and unequal angles for framing and support work.",
    image: img("steel-bars-yard.jpg"),
    alt: "Stacked steel angle and bar sections in a yard",
  },
  {
    title: "Beams",
    description: "I-beams and H-beams for large-span construction projects.",
    image: img("steel-frame.jpg"),
    alt: "Steel beams in a building framework",
  },
  {
    title: "Binding Wire",
    description: "Annealed binding wire for secure rebar tying on site.",
    image: img("wire-coil.jpg"),
    alt: "Coiled steel binding wire",
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

export const brands = [
  "TATA Steel",
  "JSW",
  "SAIL",
  "Jindal",
  "Vizag Steel",
  "Shyam Steel",
] as const;

export type GalleryItem = {
  image: string;
  alt: string;
  span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
  {
    image: img("steel-bars-yard.jpg"),
    alt: "Steel bars stacked in an industrial yard",
    span: "tall",
  },
  {
    image: img("warehouse-beams.jpg"),
    alt: "Steel sections stored in a warehouse interior",
  },
  {
    image: img("steel-frame.jpg"),
    alt: "Steel frame structure under construction",
  },
  {
    image: img("forklift-truck.jpg"),
    alt: "Forklift loading material onto a delivery truck",
    span: "wide",
  },
  {
    image: img("welder-sparks.jpg"),
    alt: "Industrial fabrication with welding sparks",
  },
  {
    image: img("beams-aerial.jpg"),
    alt: "Structural steel beams viewed from above",
    span: "tall",
  },
  {
    image: img("welding-bw.jpg"),
    alt: "Workers welding on a steel structure",
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
      "We supply TMT bars, structural steel, MS pipes, MS channels, angles, beams and binding wire in all standard grades and sizes. For specific specifications, please contact us.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is transparent and aligned with prevailing market rates. We provide an itemised quotation with no hidden charges so you can plan your budget with confidence.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We are open Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays. You can reach us by phone or email during business hours.",
  },
];
