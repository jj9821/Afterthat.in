"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Cpu,
  Layers,
  Film,
  Zap,
  Share2,
  Eye,
  UserCheck,
  Camera,
  Lightbulb,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { AI_TECH_DATA } from "@/data/aiTech";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";
import MagneticButton from "@/components/motion/MagneticButton";

const iconMap: Record<string, React.ElementType> = {
  Film,
  Layers,
  Sparkles,
  Zap,
  Share2,
  Eye,
  UserCheck,
  Camera,
  Lightbulb,
  Globe,
};

export default function AiTechSection() {
  const [selectedConcept, setSelectedConcept] = useState(
    AI_TECH_DATA.conceptShowcases[0]
  );

  return (
    <section
      id="ai-tech"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Neural Grid Accent */}
      <div className="absolute inset-0 subtle-red-grid opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[#F20D18]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 04</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                CREATIVE TECHNOLOGY & AI
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              {AI_TECH_DATA.headline}{" "}
              <span className="text-[#F20D18]">
                {AI_TECH_DATA.headlineHighlight}
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WE HARNESS GENERATIVE NEURAL WORKFLOWS TO EXPAND PRODUCTION SCOPE,
              ACCELERATE CREATIVE EXPLORATION, AND DELIVER UNPRECEDENTED COMMERCIAL VALUE.
            </p>
          </div>
        </div>

        {/* Brand Philosophy Hero Banner */}
        <div className="bg-[#101010] border-2 border-[#F20D18]/40 p-8 sm:p-12 md:p-14 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 brutalist-stripes opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>THE AFTER THAT AI PRINCIPLE</span>
            </div>

            <h3 className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase leading-[1.05] tracking-wide text-white">
              “{AI_TECH_DATA.philosophy}”
            </h3>

            <p className="font-space text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
              {AI_TECH_DATA.supportingMessage}
            </p>

            <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#888888]">
              <ShieldCheck className="w-4 h-4 text-[#F20D18]" />
              <span>HUMAN STRATEGIC LEADERSHIP • NEURAL PRODUCTION VELOCITY</span>
            </div>
          </div>
        </div>

        {/* 10 Capabilities Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
            <span className="text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> AI CAPABILITIES & PRODUCTION PIPELINES
            </span>
            <span className="text-white/40">10 DEDICATED WORKFLOWS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {AI_TECH_DATA.capabilities.map((cap) => {
              const IconComponent = iconMap[cap.icon] || Sparkles;

              return (
                <TiltCard key={cap.id} intensity={8} glare={true} className="h-full">
                  <div className="h-full bg-[#121212] border border-white/10 p-5 space-y-3 hover:border-[#F20D18] transition-all flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[9px] text-[#F20D18] font-bold tracking-widest uppercase">
                          {cap.tag}
                        </span>
                      </div>

                      <h4 className="font-anton text-base sm:text-lg uppercase text-white group-hover:text-[#F20D18] transition-colors leading-snug">
                        {cap.title}
                      </h4>

                      <p className="font-space text-xs text-[#888888] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 font-mono text-[9px] text-white/40 flex items-center justify-between">
                      <span>PRODUCTION READY</span>
                      <ArrowRight className="w-3 h-3 text-[#F20D18] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Concept Showcase & R&D Demos */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-xs">
            <span className="text-[#F20D18] font-bold tracking-widest uppercase">
              // R&D CONCEPT DEMONSTRATIONS (SAMPLE WORK ONLY)
            </span>
            <span className="text-white/50 text-[11px]">
              EXPLORATORY BENCHMARKS • NOT CLIENT CAMPAIGNS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AI_TECH_DATA.conceptShowcases.map((concept) => (
              <div
                key={concept.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedConcept(concept);
                }}
                className={`cursor-pointer bg-[#0e0e0e] border transition-all duration-300 p-4 space-y-4 ${
                  selectedConcept.id === concept.id
                    ? "border-[#F20D18] shadow-[0_0_20px_rgba(242,13,24,0.3)]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black border border-white/10">
                  <Image
                    src={concept.image}
                    alt={concept.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 font-mono text-[9px] text-[#F20D18] font-bold border border-white/20">
                    CONCEPT SPEC
                  </div>
                </div>

                <div className="space-y-1 font-mono">
                  <span className="text-[10px] text-[#F20D18] font-bold tracking-wider uppercase block">
                    {concept.category}
                  </span>
                  <h4 className="font-anton text-lg text-white uppercase tracking-wide">
                    {concept.title}
                  </h4>
                  <p className="font-space text-xs text-[#888888]">
                    {concept.tagline}
                  </p>
                  <span className="text-[9px] text-white/40 block pt-1">
                    TECH: {concept.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Commission CTA */}
        <div className="bg-[#111111] border border-white/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
              ACCELERATE YOUR CAMPAIGN
            </span>
            <h4 className="font-anton text-2xl md:text-3xl text-white uppercase">
              INTERESTED IN AI-POWERED COMMERCIAL PRODUCTION?
            </h4>
            <p className="font-space text-sm text-[#888888]">
              We help brands integrate state-of-the-art synthetic workflows while retaining authentic human storytelling.
            </p>
          </div>

          <MagneticButton strength={0.3} className="shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                sound.playClick();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-8 py-4 bg-[#F20D18] text-white font-anton text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors block shadow-[0_0_20px_rgba(242,13,24,0.4)]"
            >
              DISCUSS AN AI CAMPAIGN
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
