import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Products />
      <WhyChooseUs />
      <Industries />
      <Gallery />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
