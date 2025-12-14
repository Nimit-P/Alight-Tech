"use client";

import Hero from "@/components/herosection";
import { Navbar1 } from "@/components/navbar1";
<<<<<<< HEAD
import Aboutus from "@/components/About-us";
import { Blog7 } from "@/components/blog7";
import { Badge } from "@/components/ui/badge";
import TeamSection from "@/components/ui/team-section";
import CareerSection from "@/components/Career-section";
import { Footer2 } from "@/components/footer2";
=======
import { HeroHighlight , Highlight } from "@/components/ui/about-us";
import { Blog7 } from "@/components/blog7";
import { Badge } from "@/components/ui/badge";
import { Team6 } from "@/components/ui/team6";
import { Cta11 } from "@/components/cta11";
import { Footer2 } from "@/components/footer2";
import { motion } from "motion/react";
>>>>>>> 79b2372bfb0972ee2ed013de97f9471e3de15c98


export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero />
<<<<<<< HEAD
      <Blog7 />
      <Aboutus />
      <TeamSection />
      <CareerSection />
      <Footer2 />
    </>
=======
        <HeroHighlight className="px-6 py-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <Highlight className="text-black dark:text-white">
            Why Choose Alight Technologies?
          </Highlight>

          <span className="block mt-4 text-lg md:text-xl font-normal text-neutral-700 dark:text-neutral-300">
            At Alight Technologies, we embrace people, process and technology, like no one else! 
            We believe in developing a community of bright minds who will break the barriers 
            of stagnancy in technology and provide new outcomes that will open new frontiers 
            of innovation! Our exceptional services will connect you with technology like never before!
          </span>
        </motion.h1>
      </HeroHighlight>
      <Blog7/>    
      <Team6/>
      <Cta11/>
      <Footer2/>
    </> 
>>>>>>> 79b2372bfb0972ee2ed013de97f9471e3de15c98
  );
}
