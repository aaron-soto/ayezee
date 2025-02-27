"use client";

import { Awards } from "@/components/sections/awards";
import { CallToAction } from "@/components/sections/call-to-action";
import { Hero } from "@/components/sections/hero";
import { Offers } from "@/components/sections/offers";
import { Testimonials } from "@/components/sections/testimonials";
import { TextAbout } from "@/components/sections/text-about";
import { Works } from "@/components/sections/works";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Video /> */}
      <TextAbout />
      <Awards />
      <Offers />
      <Works />
      <Testimonials />
      <CallToAction />
    </>
  );
}
