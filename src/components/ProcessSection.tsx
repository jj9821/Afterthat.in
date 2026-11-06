"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import ScrambleText from "@/components/motion/ScrambleText";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stages = COMPANY_INFO.process.stages;

  return (
    <section
      id="process"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 09</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                EXECUTION FRAMEWORK · 5-STAGE PROCESS
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              {COMPANY_INFO.process.headline.split("TO")[0]} TO{" "}
              <span className="text-[#F20D18]">
                {COMPANY_INFO.process.headline.split("TO")[1]}
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              A DISCIPLINED 5-PHASE OPERATIONAL ROADMAP TURNING INITIAL IDEAS INTO
              PROVOKING CAMPAIGNS AND SCALABLE DIGITAL ARCHITECTURES.
            </p>
          </div>
        </div>

        {/* Process Horizontal Stepper Tabs on Desktop / Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 border-b border-white/10 pb-6">
          {stages.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => {
                sound.playClick();
                setActiveStep(idx);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`text-left p-4 border transition-all duration-300 font-mono ${
                activeStep === idx
                  ? "bg-[#141414] border-[#F20D18] shadow-[0_0_15px_rgba(242,13,24,0.3)]"
                  : "bg-black/50 border-white/10 hover:border-white/30 text-white/60"
              }`}
            >
              <span
                className={`text-xs font-bold block mb-1 ${
                  activeStep === idx ? "text-[#F20D18]" : "text-white/40"
                }`}
              >
                {stage.step} // PHASE
              </span>
              <span className="font-anton text-lg sm:text-xl uppercase text-white block">
                {stage.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="bg-[#101010] border-2 border-white/15 p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#F20D18]/5 pointer-events-none hidden md:block" />
          <div className="absolute -right-8 -bottom-12 font-anton text-[22vw] text-white/[0.015] pointer-events-none select-none">
            {stages[activeStep].step}
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
              <span>PHASE {stages[activeStep].step} OF 05</span>
              <span className="text-white/30">|</span>
              <span className="text-white/70">METHODOLOGY</span>
            </div>

            <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              <ScrambleText text={stages[activeStep].title} />
            </h3>

            <p className="font-space text-lg sm:text-xl text-white/90 leading-relaxed">
              {stages[activeStep].description}
            </p>

            {/* Stage Progress Navigation Bar */}
            <div className="pt-8 flex items-center justify-between border-t border-white/10 font-mono text-xs">
              <button
                disabled={activeStep === 0}
                onClick={() => {
                  sound.playClick();
                  setActiveStep((prev) => Math.max(0, prev - 1));
                }}
                className={`flex items-center gap-2 uppercase tracking-wider ${
                  activeStep === 0
                    ? "opacity-20 cursor-not-allowed"
                    : "text-white/70 hover:text-[#F20D18]"
                }`}
              >
                ← PREVIOUS PHASE
              </button>

              <div className="flex items-center gap-1.5">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-300 ${
                      activeStep === i
                        ? "w-8 bg-[#F20D18]"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={activeStep === stages.length - 1}
                onClick={() => {
                  sound.playClick();
                  setActiveStep((prev) => Math.min(stages.length - 1, prev + 1));
                }}
                className={`flex items-center gap-2 uppercase tracking-wider ${
                  activeStep === stages.length - 1
                    ? "opacity-20 cursor-not-allowed"
                    : "text-[#F20D18] font-bold hover:text-white"
                }`}
              >
                <span>NEXT PHASE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
