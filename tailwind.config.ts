import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#202020",
        steel: {
          DEFAULT: "#355C7D",
          dark: "#2A4A65",
          light: "#5A7F9E",
        },
        ink: "#2C2C2C",
        mist: "#F5F5F5",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h1": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(32,32,32,0.04), 0 12px 32px -12px rgba(32,32,32,0.12)",
        lift: "0 18px 50px -18px rgba(32,32,32,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
