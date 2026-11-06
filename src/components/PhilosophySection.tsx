"use client";

import { useEffect, useRef } from "react";
import { Zap, Target, Eye, ShieldAlert, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function PhilosophySection() {
  const iconMap = [Zap, Target, Eye, ShieldAlert];
  const spinRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 subtle-red-grid opacity-15 pointer-events-none" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 font-anton text-[30vw] text-white/[0.015] pointer-events-none select-none">
        ETHOS
      </div>

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 05</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">WHY AFTER THAT</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              THE <span className="text-[#F20D18]">MANIFESTO</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              FOUR UNNEGOTIABLE LAWS GOVERNING OUR DIRECTION, PRODUCTION, AND
              CULTURAL COLLABORATIONS.
            </p>
          </div>
        </div>

        {/* Giant Typographic Statement with Rotating Badge */}
        <div className="bg-[#101010] border-2 border-white/10 p-8 sm:p-12 md:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-36 h-36 brutalist-stripes opacity-20 pointer-events-none" />

          {/* Rotating Kinetic Circular Stamp Badge */}
          <div
            ref={spinRef}
            className="hidden lg:flex absolute top-10 right-12 w-28 h-28 rounded-full border border-white/20 items-center justify-center p-2 text-center pointer-events-none animate-[spin_18s_linear_infinite]"
          >
            <span className="font-mono text-[9px] text-[#F20D18] font-extrabold tracking-widest uppercase">
              • BEYOND THE ORDINARY • AFTER THAT • KERALA •
            </span>
          </div>

          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block mb-4">
            OUR SACRED CONVICTION
          </span>

          <p className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tight text-white max-w-5xl">
            IF YOUR AUDIENCE CAN FORGET YOUR CAMPAIGN IN THREE SECONDS,{" "}
            <span className="text-[#F20D18] hover:text-white transition-colors">
              YOU DIDN&apos;T MAKE ART.
            </span>{" "}
            YOU MADE NOISE.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#888888]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F20D18]" />
              ANAND BHAIRAV — CREATIVE DIRECTOR
            </span>
            <span className="text-white font-bold">AFTER THAT ENTERTAINMENT LLP</span>
          </div>
        </div>

        {/* 4 Pillars Quad Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COMPANY_INFO.manifesto.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <TiltCard
                key={item.index}
                intensity={10}
                glare={true}
                className="h-full"
              >
                <div
                  className="group relative bg-[#111111] border border-white/10 hover:border-[#F20D18] p-8 md:p-10 transition-all duration-300 space-y-6 h-full flex flex-col justify-between"
                  onMouseEnter={() => sound.playHover()}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold text-[#F20D18] bg-white/5 border border-white/10 px-2.5 py-1">
                        {item.index}
                      </span>
                      <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                        {item.subheading}
                      </span>
                    </div>
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-[#F20D18] group-hover:scale-120 transition-all" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                      <ScrambleText text={item.heading} />
                    </h3>
                    <p className="font-space text-white/80 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* High Voltage Reverse Marquee */}
        <div className="border-y border-white/10 py-4 bg-[#0a0a0a] overflow-hidden -mx-5 sm:-mx-8 md:-mx-12 px-5">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-10 font-anton text-2xl md:text-3xl tracking-wider uppercase text-white/30">
            <span className="text-[#F20D18]">WHAT HAPPENS NEXT</span>
            <span>•</span>
            <span className="text-white">CHANGES EVERYTHING</span>
            <span>•</span>
            <span className="text-[#F20D18]">NO TEMPLATES</span>
            <span>•</span>
            <span className="text-white">CINEMA SCALE</span>
            <span>•</span>
            <span className="text-[#F20D18]">STREET CULTURE</span>
            <span>•</span>
            <span className="text-white">WESTERN GHATS TO FORT KOCHI</span>
            <span>•</span>
            {/* Repeat */}
            <span className="text-[#F20D18]">WHAT HAPPENS NEXT</span>
            <span>•</span>
            <span className="text-white">CHANGES EVERYTHING</span>
            <span>•</span>
            <span className="text-[#F20D18]">NO TEMPLATES</span>
            <span>•</span>
            <span className="text-white">CINEMA SCALE</span>
            <span>•</span>
            <span className="text-[#F20D18]">STREET CULTURE</span>
            <span>•</span>
            <span className="text-white">WESTERN GHATS TO FORT KOCHI</span>
            <span>•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
