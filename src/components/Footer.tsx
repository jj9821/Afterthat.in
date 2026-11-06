"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Heart, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString("en-GB", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-20 pb-12 px-5 sm:px-8 md:px-12 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Red Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#ff2020]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16">
        {/* Top Footer Navigation & Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ff2020] text-black font-anton flex items-center justify-center text-lg font-bold">
                AT
              </div>
              <span className="font-anton text-2xl tracking-wider uppercase text-white">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="font-syne text-sm md:text-base text-[#aaaaaa] font-medium max-w-md">
              {COMPANY_INFO.tagline}
            </p>
            <p className="font-mono text-xs text-[#666666] leading-relaxed max-w-md">
              {COMPANY_INFO.subTagline}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#ff2020] font-bold tracking-widest uppercase block mb-4">
              // DIRECTORY
            </span>
            <ul className="space-y-2.5">
              {[
                { name: "MANIFESTO", href: "#about" },
                { name: "CAPABILITIES", href: "#services" },
                { name: "SELECTED WORKS", href: "#work" },
                { name: "BRAND PHILOSOPHY", href: "#philosophy" },
                { name: "COMMISSION TERMINAL", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      sound.playClick();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="text-white/70 hover:text-[#ff2020] transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinates & Base */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <span className="text-[#ff2020] font-bold tracking-widest uppercase block mb-4">
              // LOCATION MATRIX
            </span>
            <div className="space-y-2 text-[#888888]">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>HEADQUARTERS:</span>
                <span className="text-white font-bold">{COMPANY_INFO.headquarters.city}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>STATE & REGION:</span>
                <span className="text-white font-bold">{COMPANY_INFO.headquarters.state}, INDIA</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>GLOBAL COORDINATES:</span>
                <span className="text-white font-bold">{COMPANY_INFO.headquarters.coordinates}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>TIME ZONE:</span>
                <span className="text-[#ff2020] font-bold">{currentTime}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-[#ff2020] hover:text-[#ff2020] transition-colors font-bold uppercase tracking-widest text-[11px]"
              >
                <span>FOLLOW ON INSTAGRAM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Massive Architectural AFTER THAT Typographic Landmark */}
        <div className="overflow-hidden select-none py-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#ff2020] font-bold tracking-[0.3em] uppercase">
              // ARCHITECTURAL IDENTITY
            </span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              data-cursor="TOP"
              className="flex items-center gap-2 font-mono text-xs text-white/70 hover:text-[#ff2020] transition-colors uppercase tracking-widest"
            >
              <span>RETURN TO TOP</span>
              <div className="w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#ff2020]">
                <ArrowUp className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>

          <h2 className="font-anton text-[15vw] leading-[0.75] tracking-tighter uppercase text-white/15 hover:text-white/30 transition-colors duration-500 whitespace-nowrap">
            AFTER <span className="text-[#ff2020]/30 hover:text-[#ff2020]/60 transition-colors">THAT</span>
          </h2>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-[11px] text-[#666666]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>FOUNDED & DIRECTED BY {COMPANY_INFO.founder.name.toUpperCase()}</span>
            <span>•</span>
            <span className="text-[#ff2020]">KERALA • SOUTH ASIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
