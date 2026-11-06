"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#F20D18]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16">
        {/* Top Footer Navigation & Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          {/* Col 1: Brand Info & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F20D18] text-white font-anton flex items-center justify-center text-lg font-bold">
                AT
              </div>
              <span className="font-anton text-2xl tracking-wider uppercase text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="font-anton text-xl sm:text-2xl text-[#F20D18] uppercase tracking-wide">
              {COMPANY_INFO.tagline}
            </p>

            <p className="font-syne text-sm text-[#aaaaaa] font-medium max-w-md">
              {COMPANY_INFO.supportingHeadline}
            </p>

            <p className="font-mono text-xs text-[#666666] leading-relaxed max-w-md">
              {COMPANY_INFO.supportingDescription}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-[#F20D18] font-bold tracking-widest uppercase block mb-4">
              // NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {[
                { name: "HOME", href: "#hero" },
                { name: "ABOUT", href: "#about" },
                { name: "SERVICES", href: "#services" },
                { name: "AI AD FILMS", href: "#ai-films" },
                { name: "SELECTED WORK", href: "#work" },
                { name: "CREATIVE ARCHIVE", href: "#creative-archive" },
                { name: "PITCH DECKS", href: "#pitch-decks" },
                { name: "WHY AFTER THAT", href: "#why-us" },
                { name: "PROCESS", href: "#process" },
                { name: "LOCATIONS", href: "#locations" },
                { name: "CONTACT", href: "#contact" },
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
                    className="text-white/70 hover:text-[#F20D18] transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Verticals */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-[#F20D18] font-bold tracking-widest uppercase block mb-4">
              // FIVE VERTICALS
            </span>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white transition-colors">BRANDING & IDENTITY</li>
              <li className="hover:text-white transition-colors">ADVERTISING & PRODUCTION</li>
              <li className="hover:text-white transition-colors">DIGITAL MARKETING</li>
              <li className="hover:text-white transition-colors">TECHNOLOGY & APPS</li>
              <li className="hover:text-white transition-colors">PR & EXPERIENCES</li>
              <li className="text-[#F20D18] font-bold pt-1">AI CREATIVE TECH</li>
            </ul>
          </div>

          {/* Col 4: Locations & Direct Contacts */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <span className="text-[#F20D18] font-bold tracking-widest uppercase block mb-2">
              // LOCATIONS & CONTACT
            </span>
            <div className="space-y-2 text-[#888888]">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>OPERATIONAL HUBS:</span>
                <span className="text-white font-bold">KOCHI • BLR • AMD</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>EMAIL:</span>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-white font-bold hover:text-[#F20D18] transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>PHONE / WA:</span>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="text-white font-bold hover:text-[#F20D18] transition-colors"
                >
                  {COMPANY_INFO.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>INSTAGRAM:</span>
                <a
                  href={COMPANY_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F20D18] font-bold hover:underline"
                >
                  {COMPANY_INFO.contact.instagramHandle}
                </a>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>LOCAL TIME:</span>
                <span className="text-white">{currentTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Watermark Wordmark */}
        <div className="overflow-hidden py-4 select-none pointer-events-none">
          <h2 className="font-anton text-[13vw] leading-[0.8] tracking-tighter uppercase text-white/[0.04] text-center whitespace-nowrap">
            AFTER THAT ENTERTAINMENT
          </h2>
        </div>

        {/* Bottom Copyright Bar with Return to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666666] pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            data-cursor="TOP"
            className="flex items-center gap-2 text-white hover:text-[#F20D18] transition-colors uppercase font-bold tracking-widest text-[11px]"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-4 h-4 text-[#F20D18]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
