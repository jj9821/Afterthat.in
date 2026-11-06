"use client";

import Image from "next/image";
import { Flame, Sparkles, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background grain & grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-20 md:space-y-28">
        {/* Section Header with Industrial Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ff2020] font-bold tracking-[0.3em] uppercase">
                // SECTION 02
              </span>
              <span className="text-white/30 font-mono">/</span>
              <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                EDITORIAL MANIFESTO
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              BEYOND THE <span className="text-[#ff2020]">SURFACE</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              ROOTED IN KERALA • OPERATING ACROSS SOUTH ASIA • REJECTING MEDIOCRE
              ADVERTISING WITH CINEMATIC DISCIPLINE.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Bold Founder Perspective & Philosophy */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
                Most agencies give you safe slides. We give you{" "}
                <span className="text-[#ff2020] underline decoration-[#ff2020] decoration-2 underline-offset-8 inline-block hover:scale-105 transition-transform duration-200">
                  goosebumps
                </span>
                .
              </h3>

              <div className="space-y-5 text-[#cccccc] font-space text-base md:text-lg leading-relaxed pt-2">
                <p>
                  Established in October 2021 by actor and digital entrepreneur{" "}
                  <strong className="text-white font-semibold">
                    Anand Bhairav
                  </strong>
                  , <strong className="text-white font-semibold">AFTER THAT</strong>{" "}
                  was conceived as an antidote to the monotonous corporate advertising
                  landscape.
                </p>
                <p>
                  Having walked both the silver screen in feature cinema and the
                  underground street scenes of Malabar and Kochi, Anand realized that
                  modern audiences don’t hate advertising—they hate being bored.
                  They crave spectacle, narrative tension, and visceral emotion.
                </p>
                <p className="border-l-2 border-[#ff2020] pl-6 text-white font-mono text-sm md:text-base italic leading-relaxed py-2 bg-white/[0.02]">
                  “We don’t think in 15-second throwaway social posts. We think in
                  cinematic frames, cultural resonance, and unforgettable visual
                  gravity.”
                </p>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <TiltCard intensity={8} glare={true}>
                <div className="bg-[#111111] border border-white/10 p-6 space-y-3 hover:border-[#ff2020] transition-colors group h-full">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2020] group-hover:bg-[#ff2020] group-hover:text-black transition-colors">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-anton text-xl tracking-wide uppercase text-white">
                    <ScrambleText text="CINEMA DISCIPLINE" />
                  </h4>
                  <p className="font-mono text-xs text-[#888888] leading-relaxed">
                    Every ad film is graded, shot, and directed with the rigor of
                    theatrical releases, using high-end anamorphic glass and raw
                    soundscapes.
                  </p>
                </div>
              </TiltCard>

              <TiltCard intensity={8} glare={true}>
                <div className="bg-[#111111] border border-white/10 p-6 space-y-3 hover:border-[#ff2020] transition-colors group h-full">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2020] group-hover:bg-[#ff2020] group-hover:text-black transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-anton text-xl tracking-wide uppercase text-white">
                    <ScrambleText text="YOUTH SUBCULTURE" />
                  </h4>
                  <p className="font-mono text-xs text-[#888888] leading-relaxed">
                    We curate Kerala’s biggest independent hip-hop and rap
                    festivals, connecting your brand to authentic youth subculture
                    rather than manufactured trends.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Right Column: Imagery Collage with 3D Tilt */}
          <div className="lg:col-span-5 space-y-8">
            <TiltCard intensity={10} glare={true}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black border border-white/20 group shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
                  alt="Cinema Production Rig in South India"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Corner Badges */}
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/80 backdrop-blur-md px-3 py-1 text-white border border-white/20">
                  EST. OCT 2021 // REG. LLP
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-[#ff2020] font-bold tracking-widest block uppercase">
                      CREATIVE DIRECTION
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {COMPANY_INFO.founder.name}
                    </span>
                  </div>
                  <span className="text-xs text-white/60">IDUKKI / KOCHI</span>
                </div>
              </div>
            </TiltCard>

            {/* Overlapping Brutalist Accent Card */}
            <div className="p-5 bg-[#141414] border border-[#ff2020]/40 flex items-start gap-4 shadow-xl">
              <MapPin className="w-5 h-5 text-[#ff2020] shrink-0 mt-0.5" />
              <div className="space-y-1 font-mono text-xs">
                <span className="text-white font-bold block uppercase tracking-wider">
                  HEADQUARTERS & PRODUCTION BASE
                </span>
                <p className="text-[#888888] leading-relaxed">
                  {COMPANY_INFO.headquarters.address}
                </p>
                <span className="text-[#ff2020] font-bold block pt-1">
                  ACTIVE HUBS: KOCHI • CALICUT • BANGALORE • TRIVANDRUM
                </span>
              </div>
            </div>

            {/* Live Verified Brand Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {COMPANY_INFO.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/10 p-3.5 text-center hover:border-[#ff2020] hover:scale-105 transition-all cursor-default"
                >
                  <span className="font-bebas text-3xl md:text-4xl text-white block leading-none">
                    {s.value}
                  </span>
                  <span className="text-[9px] text-[#888888] tracking-widest uppercase block mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
