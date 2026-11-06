"use client";

import { MapPin, Globe, Compass, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function LocationsSection() {
  const { headline, description, cities } = COMPANY_INFO.locations;

  return (
    <section
      id="locations"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background World Network Grid */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 09</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                GEOGRAPHIC REACH
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              CONNECTING IDEAS <span className="text-[#F20D18]">ACROSS CITIES.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>{description}</p>
          </div>
        </div>

        {/* 3 Prominent Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, idx) => (
            <TiltCard key={city.name} intensity={10} glare={true} className="h-full">
              <div
                onMouseEnter={() => sound.playHover()}
                className="h-full bg-[#111111] border border-white/10 hover:border-[#F20D18] p-8 sm:p-10 space-y-6 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
              >
                {/* Background Watermark Number */}
                <div className="absolute -right-4 -bottom-6 font-anton text-8xl text-white/[0.025] pointer-events-none select-none">
                  0{idx + 1}
                </div>

                <div className="space-y-4">
                  {/* Top Hub Tag */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase">
                      {city.tag}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      {city.coordinates}
                    </span>
                  </div>

                  {/* City Name */}
                  <div>
                    <h3 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                      <ScrambleText text={city.name} />
                    </h3>
                    <span className="font-mono text-xs text-white/70 block mt-1">
                      {city.role} • {city.state}
                    </span>
                  </div>

                  <p className="font-space text-sm text-[#aaaaaa] leading-relaxed pt-2">
                    {city.description}
                  </p>
                </div>

                {/* Bottom Status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F20D18] animate-ping" />
                    OPERATIONAL HUB
                  </span>
                  <span className="text-[#F20D18] font-bold">ACTIVE</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Global Undertakings Disclaimer Banner */}
        <div className="bg-[#121212] border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#888888]">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#F20D18] shrink-0" />
            <span>
              WE ROUTINELY UNDERTAKE CAMPAIGNS, AD SHOOTS, AND TECHNOLOGY DEPLOYMENTS BEYOND THESE HUBS ACROSS SOUTH ASIA & GLOBALLY.
            </span>
          </div>
          <span className="text-white font-bold shrink-0">WORLDWIDE MOBILIZATION</span>
        </div>
      </div>
    </section>
  );
}
