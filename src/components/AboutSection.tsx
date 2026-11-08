"use client";

import Image from "next/image";
import { Layers, Target, Cpu, CheckCircle2, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function AboutSection() {
  const pillars = [
    {
      title: "STRATEGY & CREATIVE",
      desc: "Brand positioning, naming, and visual identity systems built for commercial distinction.",
      icon: Target,
    },
    {
      title: "MEDIA PRODUCTION",
      desc: "Commercial ad films, corporate films, photography, and high-velocity digital content.",
      icon: Layers,
    },
    {
      title: "DIGITAL MARKETING",
      desc: "Performance marketing, Meta & Google ads, SEO, and multi-channel audience growth.",
      icon: CheckCircle2,
    },
    {
      title: "TECH & AI WORKFLOWS",
      desc: "Custom web flagships, mobile applications, business software, and AI creative tooling.",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background grain & grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header with Industrial Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
                // SECTION 02
              </span>
              <span className="text-white/30 font-mono">/</span>
              <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                COMPANY OVERVIEW
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              ABOUT <span className="text-[#F20D18]">AFTER THAT</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              KOCHI • BANGALORE • AHMEDABAD • INTEGRATED CREATIVE, ADVERTISING,
              MARKETING & TECHNOLOGY SOLUTIONS UNDER ONE ROOF.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Official Positioning & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05]">
                {COMPANY_INFO.about.headline.split(".")[0]}.{" "}
                <span className="text-[#F20D18]">
                  {COMPANY_INFO.about.headline.split(".")[1]}.
                </span>
              </h3>

              <div className="space-y-5 text-[#cccccc] font-space text-base md:text-lg leading-relaxed pt-2">
                <p>{COMPANY_INFO.about.paragraph1}</p>
                <p>{COMPANY_INFO.about.paragraph2}</p>
                <p>{COMPANY_INFO.about.paragraph3}</p>
                <p>{COMPANY_INFO.about.paragraph4}</p>

                {/* Closing Impact Callout */}
                <div className="border-l-4 border-[#F20D18] pl-6 py-4 bg-white/[0.02] space-y-2 my-6">
                  <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                    OUR CORE DIRECTIVE
                  </span>
                  <p className="font-anton text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wide leading-snug">
                    {COMPANY_INFO.about.closing}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capabilities Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <TiltCard key={i} intensity={8} glare={true}>
                    <div className="bg-[#111111] border border-white/10 p-6 space-y-3 hover:border-[#F20D18] transition-colors group h-full">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-anton text-lg tracking-wide uppercase text-white">
                        <ScrambleText text={item.title} />
                      </h4>
                      <p className="font-mono text-xs text-[#888888] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Editorial Visuals & Hub Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            <TiltCard intensity={10} glare={true}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black border border-white/20 group shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop"
                  alt="Integrated Agency Strategy & Creative Direction"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/80 backdrop-blur-md px-3 py-1 text-[#F20D18] font-bold border border-white/20">
                  ESTABLISHED 2021 // INTEGRATED AGENCY
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-[#F20D18] font-bold tracking-widest block uppercase">
                      OFFICIAL POSITIONING
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      IDEAS. PEOPLE. BRANDS. BEYOND.
                    </span>
                  </div>
                  <span className="text-xs text-white/60">KOCHI • BLR • AMD</span>
                </div>
              </div>
            </TiltCard>

            {/* Hub Locations Banner */}
            <div className="p-6 bg-[#121212] border border-[#F20D18]/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <MapPin className="w-5 h-5 text-[#F20D18] shrink-0" />
                <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                  ACTIVE HUB MATRIX
                </span>
              </div>
              <p className="font-space text-xs text-[#aaaaaa] leading-relaxed">
                Operating across three key regional hubs to support rapid collaboration, live media production, and scalable enterprise software deployment.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">KOCHI</span>
                  <span className="text-[9px] text-[#F20D18]">PRODUCTION</span>
                </div>
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">BANGALORE</span>
                  <span className="text-[9px] text-[#F20D18]">TECH & GROWTH</span>
                </div>
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">AHMEDABAD</span>
                  <span className="text-[9px] text-[#F20D18]">STRATEGY</span>
                </div>
              </div>
            </div>

            {/* Agency Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {COMPANY_INFO.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/10 p-3.5 text-center hover:border-[#F20D18] hover:scale-105 transition-all cursor-default"
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
