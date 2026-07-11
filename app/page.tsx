"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { Hero, LogoBelt, SectionFive, SectionFour, SectionOne, SectionThree, SectionTwo } from "@/features";


export default function Page() {
   useEffect(() => {
    const lenis = new Lenis({ 
       duration: 1.2,
      smoothWheel: true,
      });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Hero/>
      <LogoBelt/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}

