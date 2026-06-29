export const site = {
  name: "Sri Jagannath Traders",
  shortName: "Jagannath Traders",
  tagline: "Strength That Builds Tomorrow",
  description:
    "Sri Jagannath Traders supplies high-quality steel products including TMT bars, structural steel, MS pipes, channels, angles, beams and binding wire across Bhadrak and Odisha.",
  url: "https://srijagannathtraders.com",
  email: "sales@srijagannathtraders.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "+91 98765 43210",
  address: {
    street: "Industrial Estate, NH-16",
    locality: "Bhadrak",
    region: "Odisha",
    postalCode: "756100",
    country: "India",
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  founded: 2009,
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;
