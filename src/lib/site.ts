export const site = {
  name: "Sri Jagannath Traders",
  shortName: "Jagannath Traders",
  tagline: "Strength That Builds Tomorrow",
  description:
    "Sri Jagannath Traders supplies high-quality steel products including TMT bars, structural steel, MS pipes, channels, angles, beams and binding wire across Bhadrak and Odisha.",
  url: "https://srijagannathtraders.com",
  email: "sales@srijagannathtraders.com",
  phone: "+91 94384 58123",
  phoneHref: "+919438458123",
  whatsapp: "+91 94384 58123",
  address: {
    street: "Bonth Chhak, Near Ape Auto Showroom",
    locality: "Bhadrak",
    region: "Odisha",
    postalCode: "756100",
    country: "India",
  },
  coordinates: {
    lat: 21.0609941,
    lng: 86.4935639,
  },
  hours: [{ days: "Everyday", time: "9:00 AM – 8:00 PM" }],
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
