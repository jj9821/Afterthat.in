"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { sound } from "@/utils/sound";
import { COMPANY_INFO } from "@/data/company";
import { useScrollLock } from "@/utils/scrollLock";

interface NavbarProps {
  onSoundToggle?: (enabled: boolean) => void;
}

export default function Navbar({ onSoundToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Lock body scroll when mobile navigation menu is open
  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Live Kerala (IST) Time
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

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundClick = () => {
    const active = sound.toggle();
    setSoundEnabled(active);
    if (onSoundToggle) onSoundToggle(active);
  };

  const navLinks = [
    { label: "INDEX", href: "#hero", index: "01" },
    { label: "ABOUT", href: "#about", index: "02" },
    { label: "SERVICES", href: "#services", index: "03" },
    { label: "AI AD FILMS", href: "#ai-films", index: "04" },
    { label: "SELECTED WORK", href: "#work", index: "05" },
    { label: "CREATIVE ARCHIVE", href: "#creative-archive", index: "06" },
    { label: "PITCH DECKS", href: "#pitch-decks", index: "07" },
    { label: "WHY AFTER THAT", href: "#why-us", index: "08" },
    { label: "EXECUTION PROCESS", href: "#process", index: "09" },
    { label: "PHILOSOPHY", href: "#philosophy", index: "10" },
    { label: "LOCATIONS", href: "#locations", index: "11" },
    { label: "COMMISSION", href: "#contact", index: "12" },
  ];

  const handleLinkClick = (href: string) => {
    sound.playClick();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="AFTER THAT"
            className="group flex items-center gap-3 relative z-50"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-white text-black font-anton flex items-center justify-center text-lg md:text-xl font-bold tracking-tighter group-hover:bg-[#F20D18] group-hover:text-white transition-colors duration-200">
              AT
            </div>
            <div className="flex flex-col">
              <span className="font-anton text-xl md:text-2xl tracking-wider text-white uppercase group-hover:text-[#F20D18] transition-colors leading-none">
                AFTER THAT
              </span>
              <span className="font-mono text-[9px] text-[#888888] tracking-[0.2em] uppercase hidden sm:block">
                ENTERTAINMENT LLP
              </span>
            </div>
          </a>

          {/* Desktop Status Bar / Live Time */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F20D18] animate-ping" />
              <span className="text-white font-medium tracking-wider">KOCHI • BANGALORE • AHMEDABAD</span>
              <span className="text-white/40 font-mono tracking-widest ml-1">{currentTime}</span>
            </div>
            <div className="h-3 w-[1px] bg-white/20" />
            <div className="text-white/60">
              <span className="text-[#F20D18] font-semibold">//</span> INDEPENDENT AGENCY
            </div>
          </div>

          {/* Right Action Controls: Audio Toggle + Menu Trigger */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Audio Feedback Toggle */}
            <button
              onClick={handleSoundClick}
              onMouseEnter={() => sound.playHover()}
              data-cursor={soundEnabled ? "MUTE" : "AUDIO ON"}
              className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase border transition-all duration-200 ${
                soundEnabled
                  ? "bg-[#F20D18] border-[#F20D18] text-white font-bold shadow-[0_0_15px_rgba(242,13,24,0.5)]"
                  : "bg-black/50 border-white/20 text-white/70 hover:border-white hover:text-white"
              }`}
              title="Toggle Audio Feedback"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SOUND OFF</span>
                </>
              )}
            </button>

            {/* Quick Contact CTA Desktop */}
            <button
              onClick={() => handleLinkClick("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="hidden md:flex items-center gap-2 px-4 py-1.5 font-mono text-[11px] font-bold tracking-wider uppercase border border-[#F20D18] text-white hover:bg-[#F20D18] hover:text-white transition-all duration-200 group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F20D18] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Menu Trigger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setIsOpen(!isOpen);
              }}
              onMouseEnter={() => sound.playHover()}
              data-cursor={isOpen ? "CLOSE" : "MENU"}
              className={`relative z-50 flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                isOpen
                  ? "bg-[#F20D18] text-white"
                  : "bg-white text-black hover:bg-[#F20D18] hover:text-white"
              }`}
            >
              {isOpen ? (
                <>
                  <X className="w-4 h-4 stroke-[2.5]" />
                  <span>CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 stroke-[2.5]" />
                  <span>MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Maximalist Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="modal-backdrop fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-16 overflow-y-auto overscroll-contain modal-content-scroll"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Background brutalist red accent slash */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#F20D18]/10 pointer-events-none hidden lg:block subtle-red-grid" />
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 font-anton text-[24vw] text-white/[0.02] pointer-events-none select-none">
              AFTER THAT
            </div>

            {/* Navigation links grid */}
            <div className="relative z-10 max-w-6xl w-full mx-auto my-auto py-8">
              <span className="font-mono text-xs text-[#F20D18] tracking-[0.3em] uppercase block mb-6">
                // SYSTEM DIRECTORY — KOCHI • BANGALORE • AHMEDABAD
              </span>

              <nav className="flex flex-col space-y-3 md:space-y-4">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.35 }}
                    className="group flex items-baseline gap-4 md:gap-8 border-b border-white/10 pb-2 md:pb-3"
                  >
                    <span className="font-mono text-xs md:text-sm text-[#F20D18] tracking-widest font-bold">
                      {item.index}
                    </span>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      data-cursor="EXPLORE"
                      className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-white group-hover:text-[#F20D18] group-hover:translate-x-4 transition-all duration-200 inline-block"
                    >
                      {item.label}
                    </a>
                    <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 text-[#F20D18] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:inline" />
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Meta & Social Coordinates */}
            <div className="relative z-10 max-w-6xl w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-[#888888]">
              <div className="space-y-1">
                <span className="text-white block font-bold uppercase tracking-wider">
                  AFTER THAT ENTERTAINMENT LLP
                </span>
                <span>KOCHI • BANGALORE • AHMEDABAD</span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="text-white hover:text-[#F20D18] transition-colors flex items-center gap-1.5 font-bold uppercase tracking-wider"
                >
                  INSTAGRAM <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.social.email}`}
                  onMouseEnter={() => sound.playHover()}
                  className="text-white hover:text-[#F20D18] transition-colors flex items-center gap-1.5 font-bold uppercase tracking-wider"
                >
                  EMAIL <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
