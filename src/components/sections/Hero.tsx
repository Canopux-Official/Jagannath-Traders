"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";
import { heroImage } from "@/lib/content";
import { site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const featured = [
  { index: "01", name: "Stainless Steel", note: "Grade 202 · Grade 304" },
  { index: "02", name: "GI & MS Pipes", note: "Tubular sections" },
  { index: "03", name: "Roofing & Sheets", note: "GP · ACP · Roofing" },
  { index: "04", name: "Structural Angles & Channels", note: "Framing & fabrication" },
];

const expertise = [
  { title: "Steel Distribution", note: "A complete, ready-stock catalogue" },
  { title: "Bulk Supply", note: "Project-scale volumes, fulfilled" },
  { title: "Timely Delivery", note: "On-schedule dispatch across Odisha" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-charcoal"
    >
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <SafeImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" />
      </div>

      {/* Main editorial area */}
      <Container className="flex flex-1 flex-col justify-center pb-12 pt-28 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: headline + introduction */}
          <div className="lg:col-span-7">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="eyebrow flex items-center gap-3 text-steel-light"
            >
              <span aria-hidden className="h-px w-10 bg-steel-light/70" />
              Premium Steel Distributor · Bhadrak, Odisha
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-3xl text-display font-extrabold text-white text-balance"
            >
              {site.name}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-white/90 text-balance sm:text-3xl"
            >
              {site.tagline}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 text-pretty"
            >
              Since {site.founded}, Sri Jagannath Traders has supplied dependable,
              certified steel to the projects shaping Odisha, combining deep mill
              relationships with disciplined logistics and a standard of service
              that builders return to.
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-3 font-heading text-sm font-semibold tracking-wide text-white/85"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-steel-light" />
              Trusted by builders &amp; contractors across Odisha
            </motion.p>
          </div>

          {/* Right: featured product index */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 lg:pl-6"
          >
            <p className="font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/45">
              Featured Products
            </p>
            <ul className="mt-5 border-t border-white/15">
              {featured.map((item) => (
                <li key={item.name}>
                  <Link
                    href="/products"
                    className="group flex items-center justify-between gap-4 border-b border-white/15 py-4 transition-colors hover:border-white/40"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-heading text-xs font-semibold tabular-nums text-steel-light">
                        {item.index}
                      </span>
                      <span>
                        <span className="block font-heading text-lg font-bold text-white">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/55">
                          {item.note}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-steel-light"
                      strokeWidth={2}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>

      {/* Expertise band */}
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-white/12"
      >
        <Container>
          <div className="grid gap-6 py-7 sm:grid-cols-3 sm:gap-0">
            {expertise.map((item, i) => (
              <div
                key={item.title}
                className={
                  i > 0 ? "sm:border-l sm:border-white/12 sm:pl-8" : "sm:pr-8"
                }
              >
                <p className="font-heading text-[0.7rem] font-semibold uppercase tracking-eyebrow text-steel-light">
                  Our Expertise
                </p>
                <p className="mt-2 font-heading text-base font-bold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-white/55">{item.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* Utility band: contact strip + scroll cue */}
      <div className="border-t border-white/12">
        <Container>
          <div className="flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between">
            <dl className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-white">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                <dt className="sr-only">Location</dt>
                <dd>
                  {site.address.locality}, {site.address.region}
                </dd>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-steel-light" strokeWidth={1.75} />
                <dt className="sr-only">Business hours</dt>
                <dd>Everyday · {site.hours[0].time}</dd>
              </div>
            </dl>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 font-heading text-xs font-semibold uppercase tracking-eyebrow text-white/70 transition-colors hover:text-white"
            >
              Explore our products
              <motion.span
                aria-hidden
                animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-7 w-7 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-steel-light"
              >
                <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
              </motion.span>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
