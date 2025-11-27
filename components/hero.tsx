"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "./ui/moving-border";



export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Simplifying Modernization
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          Our tailored, experience-focused solutions span a diverse range of services. We enable organizations to achieve measurable transformation and accelerate success by nearly 80%.
        </p>
<div className="mt-6 flex justify-center">
  <div className="relative w-[180px] h-[60px]">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"      >
        Learn More
      </Button>
  </div>
</div>

      </div>
    </div>
  );
}
