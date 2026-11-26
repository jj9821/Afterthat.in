"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { sound } from "@/utils/sound";
import { COMPANY_INFO } from "@/data/company";
import { useScrollLock } from "@/utils/scrollLock";
import LiveISTClock from "@/components/LiveISTClock";

interface NavbarProps {
  onSoundToggle?: (enabled: boolean) => void;
}

export default function Navbar({ onSoundToggle }: NavbarProps) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock body & Lenis scroll when mobile/tablet navigation drawer is open
  useScrollLock(isOpen);

  const closeDrawer = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const rafId = requestAnimationFrame(() => {
      firstDrawerLinkRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeDrawer]);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundClick = () => {
    const active = sound.toggle();
    setSoundEnabled(active);
    if (onSoundToggle) onSoundToggle(active);
  };

  const desktopLinks = [
    { label: "WORK", href: "#work" },
    { label: "AI FILMS", href: "#ai-films" },
    { label: "SERVICES", href: "#services" },
    { label: "AGENCY", href: "#about" },
  ];

  const drawerLinks = [
    { label: "WORK", href: "#work", meta: "SELECTED CASE STUDIES" },
    { label: "AI FILMS", href: "/work/ai-ad-films", meta: "GENERATIVE CINEMA" },
    { label: "SERVICES", href: "#services", meta: "CAPABILITIES" },
    { label: "AGENCY", href: "#about", meta: "STUDIO & LEADERSHIP" },
    { label: "ARCHIVE", href: "/work", meta: "ALL WORK" },
    { label: "PITCH DECKS", href: "/work/pitch-decks", meta: "PRESENTATIONS" },
  ];

  const handleLinkClick = (href: string) => {
    sound.playClick();
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3.5 md:py-4 shadow-[0_12px_32px_rgba(0,0,0,0.75)]"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              const el = document.querySelector("#hero");
              if (el) {
                e.preventDefault();
                handleLinkClick("#hero");
              }
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="AFTER THAT"
            className="inline-flex items-center shrink-0 relative z-50 opacity-90 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Image
              src="/brand/afterthat-logo-white.png"
              alt="AFTER THAT ENTERTAINMENT"
              width={751}
              height={398}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Focused Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7 lg:gap-9 font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-white/75"
          >
            {desktopLinks.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleLinkClick(item.href)}
                onMouseEnter={() => sound.playHover()}
                className="relative py-1 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#F20D18] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Lightweight Audio Utility Toggle */}
            <button
              type="button"
              onClick={handleSoundClick}
              onMouseEnter={() => sound.playHover()}
              data-cursor={soundEnabled ? "MUTE" : "AUDIO ON"}
              aria-pressed={soundEnabled}
              aria-label={soundEnabled ? "Mute audio feedback" : "Enable audio feedback"}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] font-mono text-[10px] tracking-[0.16em] uppercase border transition-colors duration-200 ${
                soundEnabled
                  ? "border-[#F20D18]/70 bg-[#F20D18]/15 text-white"
                  : "border-white/20 bg-[#111111]/70 text-[#B3B3B3] hover:border-white/40 hover:text-white"
              }`}
              title="Toggle Audio Feedback"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#F20D18]" />
                  <span className="hidden sm:inline">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SOUND OFF</span>
                </>
              )}
            </button>

            {/* Primary Crimson CTA */}
            <button
              type="button"
              onClick={() => handleLinkClick("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[2px] font-mono text-[11px] font-bold tracking-[0.14em] uppercase bg-[#F20D18] text-white hover:bg-[#d90b15] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile / Tablet Drawer Trigger (< lg) */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => {
                sound.playClick();
                if (isOpen) {
                  closeDrawer(false);
                } else {
                  setIsOpen(true);
                }
              }}
              onMouseEnter={() => sound.playHover()}
              data-cursor={isOpen ? "CLOSE" : "MENU"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`lg:hidden relative z-50 inline-flex items-center gap-2 px-3.5 py-2 rounded-[2px] font-mono text-[11px] font-bold tracking-[0.16em] uppercase border transition-colors duration-200 ${
                isOpen
                  ? "bg-[#F20D18] border-[#F20D18] text-white hover:bg-[#d90b15]"
                  : "bg-[#111111]/90 border-white/25 text-white hover:border-white"
              }`}
            >
              {isOpen ? (
                <>
                  <X className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
                  <span>CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
                  <span>MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeDrawer(true);
              }
            }}
            className="modal-backdrop fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 md:px-12 overflow-y-auto overscroll-contain modal-content-scroll"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <div className="relative z-10 max-w-[1720px] w-full mx-auto my-auto py-6">
              <nav aria-label="Mobile navigation" className="flex flex-col border-t border-white/15">
                {drawerLinks.map((item, i) => (
                  <a
                    key={item.href}
                    ref={i === 0 ? firstDrawerLinkRef : undefined}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor="EXPLORE"
                    className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:py-5 text-white hover:border-white/30 transition-colors duration-200"
                  >
                    <span className="font-anton text-3xl sm:text-5xl tracking-tight uppercase text-white group-hover:text-[#F20D18] group-hover:translate-x-0.5 transition-all duration-200">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#B3B3B3] group-hover:text-white transition-colors duration-200">
                      <span className="hidden sm:inline">{item.meta}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F20D18] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </a>
                ))}
              </nav>

              {/* Drawer Primary CTA */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => handleLinkClick("#contact")}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[2px] font-mono text-xs font-bold tracking-[0.16em] uppercase bg-[#F20D18] text-white hover:bg-[#d90b15] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Bottom Meta & Social Coordinates */}
            <div className="relative z-10 max-w-[1720px] w-full mx-auto pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#B3B3B3]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-white font-bold uppercase tracking-wider">
                  AFTER THAT ENTERTAINMENT LLP
                </span>
                <span className="text-white/30">•</span>
                <LiveISTClock className="text-white/75 tracking-widest" />
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
