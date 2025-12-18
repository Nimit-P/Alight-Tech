"use client";

import Hero from "@/components/herosection";
import { Navbar1 } from "@/components/navbar1";
import Aboutus from "@/components/About-us";
import Services from "@/components/services";
import { Badge } from "@/components/ui/badge";
import TeamSection from "@/components/ui/team-section";
import CareerSection from "@/components/Career-section";
import { Footer2 } from "@/components/footer2";


export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero />
      <Services />
      <Aboutus />
      <TeamSection />
      <CareerSection />
      <Footer2 />
    </>
  );
}
