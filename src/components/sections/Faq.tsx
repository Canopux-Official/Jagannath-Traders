"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-mist py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to common questions"
              description="Everything you need to know about ordering, delivery and working with us."
            />
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={faq.question} delay={i * 0.04}>
                    <div>
                      <dt>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        >
                          <span className="font-heading text-base font-semibold text-charcoal sm:text-lg">
                            {faq.question}
                          </span>
                          <span
                            className={cn(
                              "grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-black/15 text-charcoal transition-all duration-300 ease-smooth",
                              isOpen && "rotate-45 border-steel bg-steel text-white",
                            )}
                          >
                            <Plus className="h-4 w-4" strokeWidth={2} />
                          </span>
                        </button>
                      </dt>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.dd
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-xl pb-6 pr-12 text-sm leading-relaxed text-ink/70 text-pretty sm:text-base">
                              {faq.answer}
                            </p>
                          </motion.dd>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
