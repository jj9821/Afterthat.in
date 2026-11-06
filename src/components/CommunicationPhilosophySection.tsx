"use client";

import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, Target, Users, Zap, Layers } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function CommunicationPhilosophySection() {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const matrix = COMPANY_INFO.communicationPhilosophy.matrix;

  const iconList = [Layers, Users, Compass, ShieldCheck, Zap, Target];

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Red Accent */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 08</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                COMMUNICATION MATRIX
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              ADVERTISING BEGINS WITH{" "}
              <span className="text-[#F20D18]">UNDERSTANDING.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WE MAP THE ENTIRE PSYCHOGRAPHIC AND ECONOMIC CHAIN BEFORE CRAFTING
              COMMERCIALS, PACKAGING VISUALS, OR PERFORMANCE CAMPAIGNS.
            </p>
          </div>
        </div>

        {/* Strategic Manifesto Callout */}
        <div className="bg-[#121212] border-l-4 border-[#F20D18] p-6 sm:p-8 space-y-3 max-w-4xl">
          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
            {COMPANY_INFO.communicationPhilosophy.subheadline}
          </span>
          <p className="font-space text-base sm:text-lg text-white/90 leading-relaxed">
            {COMPANY_INFO.communicationPhilosophy.description}
          </p>
        </div>

        {/* 6-Element Relationship Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matrix.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];
            const isHovered = activeElement === idx;

            return (
              <TiltCard key={item.element} intensity={8} glare={true} className="h-full">
                <div
                  onMouseEnter={() => {
                    sound.playHover();
                    setActiveElement(idx);
                  }}
                  onMouseLeave={() => setActiveElement(null)}
                  className={`h-full bg-[#111111] border p-8 space-y-4 transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? "border-[#F20D18] shadow-[0_0_25px_rgba(242,13,24,0.3)]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-[#F20D18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase">
                        NODE 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-1">
                        {item.role}
                      </span>
                      <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                        <ScrambleText text={item.element} />
                      </h3>
                    </div>

                    <p className="font-space text-sm text-[#aaaaaa] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-white/40 flex items-center justify-between">
                    <span>STRATEGIC ALIGNMENT</span>
                    <span className="text-[#F20D18]">ACTIVE</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
