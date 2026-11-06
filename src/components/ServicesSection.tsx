"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus, CheckCircle2, Sparkles, Layers, ArrowRight } from "lucide-react";
import { SERVICES, VerticalService } from "@/data/services";
import { sound } from "@/utils/sound";
import ScrambleText from "@/components/motion/ScrambleText";
import MagneticButton from "@/components/motion/MagneticButton";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  const currentService: VerticalService =
    SERVICES.find((s) => s.id === activeService) || SERVICES[0];

  const handleSelect = (id: string) => {
    sound.playClick();
    setActiveService(id);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 03</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                OUR FIVE SERVICE VERTICALS
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              INTEGRATED <span className="text-[#F20D18]">CAPABILITIES</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WE BRING BRAND STRATEGY, COMMERCIAL ADVERTISING, DIGITAL MARKETING,
              CUSTOM SOFTWARE & PR TOGETHER UNDER ONE ACCOUNTABLE ROOF.
            </p>
          </div>
        </div>

        {/* Split View: Interactive Vertical Accordion + Sticky Cinematic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Service Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;

              return (
                <div
                  key={service.id}
                  data-preview-img={service.bgImage}
                  className={`border transition-all duration-300 ${
                    isActive
                      ? "bg-[#121212] border-[#F20D18] shadow-[0_0_30px_rgba(242,13,24,0.18)]"
                      : "bg-[#0b0b0b] border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Service Header Row */}
                  <button
                    onClick={() => handleSelect(service.id)}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor={isActive ? "ACTIVE" : "EXPAND"}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left group gap-4"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold tracking-widest transition-colors ${
                          isActive
                            ? "text-[#F20D18]"
                            : "text-white/40 group-hover:text-white"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-white/70 group-hover:text-white"
                          }`}
                        >
                          <ScrambleText text={service.title} />
                        </h3>
                        <span className="font-mono text-[10px] sm:text-xs text-[#F20D18] tracking-widest uppercase block mt-1">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 flex items-center justify-center shrink-0 border transition-all ${
                        isActive
                          ? "bg-[#F20D18] border-[#F20D18] text-white"
                          : "border-white/20 text-white group-hover:border-white"
                      }`}
                    >
                      {isActive ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 space-y-6"
                      >
                        {/* Headline */}
                        <div className="bg-white/[0.02] border-l-2 border-[#F20D18] p-4">
                          <span className="font-mono text-[10px] text-[#F20D18] font-bold uppercase tracking-widest block mb-1">
                            OBJECTIVE & PROMISE
                          </span>
                          <h4 className="font-anton text-lg sm:text-xl md:text-2xl text-white uppercase tracking-wide">
                            {service.headline}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="font-space text-white/80 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>

                        {/* Full Detailed Services List (No omissions) */}
                        <div className="space-y-3 pt-2">
                          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            SPECIALIZED DISCIPLINES & DELIVERABLES ({service.services.length})
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.services.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 font-mono text-xs text-white/90 bg-white/[0.03] p-2.5 border border-white/10 hover:border-[#F20D18] transition-colors"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D18] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Row inside accordion for mobile / quick access */}
                        <div className="pt-4 flex items-center justify-between border-t border-white/10">
                          <span className="font-mono text-xs text-white/50">
                            READY TO DEPLOY THIS VERTICAL?
                          </span>
                          <a
                            href="#contact"
                            onClick={(e) => {
                              e.preventDefault();
                              sound.playClick();
                              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-1.5 font-anton text-xs uppercase tracking-wider text-[#F20D18] hover:text-white transition-colors"
                          >
                            <span>START PROJECT ENQUIRY</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Showcase Stage */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="bg-[#111111] border border-white/15 p-6 space-y-6 shadow-2xl">
              {/* Media Preview Window */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentService.bgImage}
                      alt={currentService.title}
                      fill
                      className="object-cover"
                      sizes="600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 font-mono text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                  <Layers className="w-3 h-3 text-[#F20D18]" />
                  <span>VERTICAL {currentService.number} // ACTIVE</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 font-mono">
                  <span className="text-[10px] text-[#F20D18] font-bold tracking-widest block uppercase">
                    CORE PROMISE
                  </span>
                  <span className="text-sm font-bold text-white uppercase block line-clamp-1">
                    {currentService.headline}
                  </span>
                </div>
              </div>

              {/* Service Directive Quote */}
              <div className="p-4 bg-black/60 border-l-2 border-[#F20D18] space-y-1">
                <p className="font-syne text-sm italic text-white/90">
                  “{currentService.tagline}”
                </p>
                <span className="font-mono text-[9px] text-[#888888] tracking-widest uppercase block pt-1">
                  AFTER THAT ENTERTAINMENT • CAPABILITY BLUEPRINT
                </span>
              </div>

              {/* Action Button */}
              <MagneticButton strength={0.25} className="w-full">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    sound.playClick();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="INQUIRE"
                  className="w-full flex items-center justify-between px-5 py-4 bg-[#F20D18] text-white font-anton text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(242,13,24,0.4)]"
                >
                  <span>COMMISSION THIS CAPABILITY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
