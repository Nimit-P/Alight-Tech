"use client";

import Hero from "@/components/herosection";
import Aboutus from "@/components/About-us";
import { Services } from "@/components/services";
import { Badge } from "@/components/ui/badge";
import TeamSection from "@/components/ui/team-section";
import CareerSection from "@/components/Career-section";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Aboutus />
      <TeamSection />
      <CareerSection />
    </>
  );
}
