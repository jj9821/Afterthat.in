"use client";

import { useState } from "react";
import { Compass, ShieldCheck, Target, Users, Zap, Layers, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function WhyUsSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const reasons = COMPANY_INFO.whyUs.reasons;
  const matrix = COMPANY_INFO.communicationPhilosophy.matrix;
  const iconList = [Layers, Users, Compass, ShieldCheck, Zap, Target];

  return (
    <section
      id="why-us"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Red Grid */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 08</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                WHY AFTER THAT · STRATEGIC ADVANTAGES
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              MORE THAN CREATIVE.{" "}
              <span className="text-[#F20D18]">BUILT FOR YOU.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WE REJECT SANITIZED CORPORATE TEMPLATES AND FRAGMENTED VENDOR CHAINS.
              HERE IS WHY BUSINESS LEADERS CHOOSE AFTER THAT.
            </p>
          </div>
        </div>

        {/* 6 Visually Distinct Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <TiltCard key={reason.number} intensity={9} glare={true} className="h-full">
              <div
                className="h-full bg-[#111111] border border-white/10 hover:border-[#F20D18] p-8 sm:p-10 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-xl"
                onMouseEnter={() => sound.playHover()}
              >
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-2xl font-black text-[#F20D18]">
                    {reason.number} //
                  </span>
                  <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase">
                    ADVANTAGE 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors leading-tight">
                    <ScrambleText text={reason.title} />
                  </h3>
                  <p className="font-space text-sm sm:text-base text-[#aaaaaa] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Graphic Accent */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40">
                  <span>DISCIPLINE VERIFIED</span>
                  <div className="w-2 h-2 rounded-full bg-[#F20D18]/50 group-hover:bg-[#F20D18] transition-colors" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Strategic Operational Philosophy Banner */}
        <div className="bg-[#101010] border border-white/15 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 subtle-red-grid opacity-15 pointer-events-none" />

          <div className="space-y-4 max-w-4xl border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>OUR OPERATIONAL PHILOSOPHY // UNDERSTANDING BEFORE EXECUTION</span>
            </div>
            <h3 className="font-anton text-2xl sm:text-4xl uppercase text-white tracking-wide">
              {COMPANY_INFO.communicationPhilosophy.headline}
            </h3>
            <p className="font-space text-sm sm:text-base text-white/70 leading-relaxed">
              {COMPANY_INFO.communicationPhilosophy.description}
            </p>
          </div>

          {/* 6-Node Decision Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {matrix.map((item, idx) => {
              const Icon = iconList[idx % iconList.length];
              const isHovered = activeNode === idx;

              return (
                <div
                  key={item.element}
                  onMouseEnter={() => {
                    sound.playHover();
                    setActiveNode(idx);
                  }}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-6 bg-black/60 border transition-all duration-300 space-y-3 ${
                    isHovered
                      ? "border-[#F20D18] shadow-[0_0_20px_rgba(242,13,24,0.25)]"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[#F20D18]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] text-[#F20D18] font-bold tracking-widest uppercase">
                      NODE 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block">
                      {item.role}
                    </span>
                    <h4 className="font-anton text-lg uppercase text-white tracking-wide mt-0.5">
                      {item.element}
                    </h4>
                  </div>

                  <p className="font-mono text-xs text-[#888888] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
