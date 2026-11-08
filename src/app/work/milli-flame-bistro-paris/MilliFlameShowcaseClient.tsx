"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Maximize2,
  Copy,
  Check,
  Palette,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { sound } from "@/utils/sound";
import MilliFlameLightbox, { MilliFlameImageItem } from "./MilliFlameLightbox";
import milliFlameData from "@/data/milli-flame.json";

export const MILLI_FLAME_IMAGES: MilliFlameImageItem[] = milliFlameData as MilliFlameImageItem[];

const CHAPTERS = [
  { id: "chapter-01", label: "01. IDENTITY", title: "The Identity", count: 9 },
  { id: "chapter-02", label: "02. COLOUR & TYPO", title: "Colour & Typography", count: 5 },
  { id: "chapter-03", label: "03. PATTERNS", title: "Brand Patterns", count: 5 },
  { id: "chapter-04", label: "04. CULINARY", title: "Food & Culinary Imagery", count: 13 },
  { id: "chapter-05", label: "05. PACKAGING", title: "Packaging & Collaterals", count: 5 },
  { id: "chapter-06", label: "06. EXPERIENCE", title: "Restaurant Experience", count: 6 },
  { id: "chapter-07", label: "07. DIGITAL", title: "Digital Touchpoints", count: 1 },
  { id: "chapter-08", label: "08. ARCHIVE", title: "Master Book Archive", count: 10 },
];

const PALETTE = [
  { name: "Pure White", hex: "#FFFFFF", darkText: true, role: "Primary Light & Logo Contrast" },
  { name: "Tropical Cyan", hex: "#05AAC2", darkText: false, role: "Primary Energy & Master Field" },
  { name: "Quetzal Green", hex: "#2C6667", darkText: false, role: "Natural Slate, Depth & Text" },
  { name: "Riviera Teal", hex: "#32AFA4", darkText: false, role: "Coastal Accent & Ripple Waves" },
  { name: "True Gold", hex: "#F2D050", darkText: true, role: "Sensory Warmth & Radiant Accents" },
];

export default function MilliFlameShowcaseClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>("chapter-01");

  const openLightboxByImageId = (id: string) => {
    sound.playClick();
    const idx = MILLI_FLAME_IMAGES.findIndex((img) => img.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const copyHex = (hex: string) => {
    sound.playClick();
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  // Scroll spy for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#05AAC2] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      {/* Top Breadcrumb & Metadata Navigation */}
      <section className="pt-24 sm:pt-28 md:pt-32 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A]">
        <div className="max-w-[1720px] mx-auto pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/#work"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-[#05AAC2] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#05AAC2]" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] text-white/50">
            <span className="text-[#05AAC2] font-bold">CLIENT: MILLI FLAME</span>
            <span className="text-white/20">/</span>
            <span>LOCATION: PARIS, FRANCE</span>
            <span className="text-white/20">/</span>
            <span>YEAR: 2025</span>
            <span className="text-white/20">/</span>
            <span className="text-white/80 uppercase">BRANDING / HOSPITALITY / RESTAURANT IDENTITY</span>
            <span className="text-white/20">/</span>
            <span className="px-2 py-0.5 bg-[#2C6667] text-white font-bold text-[10px] uppercase border border-[#05AAC2]/40">
              57 VERIFIED ASSETS
            </span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full py-12 md:py-20 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0c1314] to-[#0A0A0A]">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto relative z-10 space-y-10 md:space-y-16">
          {/* Main Title Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// PROJECT SHOWCASE</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">
                  ESTD. 2025 · PARISIAN DINING & CAFÉ
                </span>
              </div>

              <h1 className="font-anton text-5xl sm:text-7xl md:text-9xl tracking-tight uppercase text-white leading-[0.9]">
                MILLI FLAME<span className="text-[#05AAC2]">.</span>
              </h1>

              <div className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white/90">
                A FLAME OF CHARACTER. <span className="text-[#05AAC2]">A WORLD OF FLAVOUR.</span>
              </div>

              <p className="font-mono text-sm sm:text-base text-[#F2D050] font-medium tracking-wide pt-2">
                PETITE FLAMME. GRAND GOÛT.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <p className="font-space text-sm sm:text-base text-white/70 leading-relaxed">
                A distinctive restaurant identity built around a circular flame emblem, contemporary
                typography and a vibrant visual system. From food imagery and takeaway packaging to
                uniforms, stationery and storefront applications, the creative direction extends
                across the complete dining experience.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    LOCATION
                  </span>
                  <span className="text-white font-bold">Paris, France</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    TYPOGRAPHY
                  </span>
                  <span className="text-white font-bold">Nexa & Montserrat</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    PALETTE
                  </span>
                  <span className="text-[#05AAC2] font-bold">Cyan, Teal, Gold</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    CURATED ASSETS
                  </span>
                  <span className="text-white font-bold">57 Master Works</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Hero Showcase Banner */}
          <div
            onClick={() => openLightboxByImageId("restaurant-interior-booth")}
            data-cursor="EXPAND"
            className="group relative w-full aspect-[16/9] md:aspect-[21/9] bg-black border border-[#2C6667]/50 hover:border-[#05AAC2] transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_0_50px_rgba(5,170,194,0.15)]"
          >
            <Image
              src="/portfolio/milli-flame/hero/restaurant-interior-booth.webp"
              alt="Milli Flame Parisian Dining Atmosphere"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1720px) 100vw, 1720px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Corner Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="px-3 py-1 bg-black/90 font-mono text-[10px] sm:text-xs text-[#05AAC2] font-bold uppercase tracking-widest border border-[#05AAC2]/40 backdrop-blur-md">
                FEATURED RESTAURANT INTERIOR
              </span>
              <span className="px-2.5 py-1 bg-[#2C6667] text-white font-mono text-[10px] uppercase tracking-wider font-bold">
                PARIS 2025
              </span>
            </div>

            {/* Expand Action Button */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#2C6667] group-hover:border-[#05AAC2] group-hover:scale-110 transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Caption on Hero Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-widest block mb-1">
                  // VISUAL DIRECTION
                </span>
                <h2 className="font-anton text-2xl sm:text-4xl uppercase text-white tracking-wide">
                  PARISIAN DINING ATMOSPHERE
                </h2>
                <p className="font-mono text-xs text-white/70 max-w-xl hidden md:block">
                  Understated luxury in modern Parisian dining: turquoise leather booths, fluted architectural glass, and the circular flame seal.
                </p>
              </div>

              <span className="font-mono text-xs text-white/50 tracking-wider">
                CLICK TO OPEN FULLSCREEN LIGHTBOX ↗
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CHAPTER NAVIGATION BAR */}
      <nav
        aria-label="Chapter Navigation"
        className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur-xl border-y border-white/10 px-5 sm:px-8 md:px-12 py-3"
      >
        <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mr-2 hidden lg:inline">
              JUMP TO CHAPTER:
            </span>
            {CHAPTERS.map((ch) => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 shrink-0 border transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#2C6667] border-[#05AAC2] text-white font-bold shadow-[0_0_15px_rgba(5,170,194,0.35)]"
                      : "bg-transparent border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <span>{ch.label}</span>
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded ${
                      isActive ? "bg-white/20 text-white" : "text-white/40"
                    }`}
                  >
                    {ch.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-white/50 shrink-0">
            <span className="text-[#05AAC2] font-bold">57 ASSETS</span>
            <span>•</span>
            <span>300 DPI EXTRACTED</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          CHAPTER 01: THE IDENTITY
      ========================================================================= */}
      <section
        id="chapter-01"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 01</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">BRANDMARK & IDENTITY SPECIFICATIONS</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                THE <span className="text-[#05AAC2]">IDENTITY.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                CIRCULAR FLAME EMBLEM, MONOGRAM ARCHITECTURE & SYSTEM RULES
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              At the core of Milli Flame is an organic continuous-line flame nestled within a
              circular plate-like frame bearing the French motto &ldquo;Petite Flamme. Grand
              Goût.&rdquo; The brand identity was engineered with clear-space rules, minimum reproduction
              metrics, and multi-color flexibility.
            </p>
          </div>

          {/* Primary Logo Showcase Banner */}
          <div
            onClick={() => openLightboxByImageId("primary-logo-tropical-cyan")}
            data-cursor="INSPECT"
            className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] transition-all duration-300 p-6 md:p-10 cursor-pointer shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-wider">
                  PRIMARY BRANDMARK // TROPICAL CYAN APPLICATION
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">300 DPI MASTER</span>
              </div>
              <div className="relative aspect-[16/7] md:aspect-[21/8] bg-[#05AAC2] overflow-hidden flex items-center justify-center p-8">
                <Image
                  src="/portfolio/milli-flame/logo/primary-logo-tropical-cyan.webp"
                  alt="Primary Logo on Tropical Cyan"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-white/60">
                <p>Primary logo lockup featuring circular flame emblem and custom modern typography.</p>
                <span className="text-[#05AAC2] font-bold">CLICK TO INSPECT FULL RESOLUTION ↗</span>
              </div>
            </div>
          </div>

          {/* Logo Variations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Riviera Teal */}
            <div
              onClick={() => openLightboxByImageId("primary-logo-riviera-teal")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#32AFA4] font-bold uppercase tracking-wider">
                  01. RIVIERA TEAL
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">#32AFA4</span>
              </div>
              <div className="relative aspect-[4/3] bg-[#32AFA4] overflow-hidden flex items-center justify-center p-6">
                <Image
                  src="/portfolio/milli-flame/logo/primary-logo-riviera-teal.webp"
                  alt="Primary Logo on Riviera Teal"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Reversed white lockup on coastal Riviera Teal for dining collaterals.
              </p>
            </div>

            {/* True Gold */}
            <div
              onClick={() => openLightboxByImageId("primary-logo-true-gold")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#F2D050] font-bold uppercase tracking-wider">
                  02. TRUE GOLD
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">#F2D050</span>
              </div>
              <div className="relative aspect-[4/3] bg-[#F2D050] overflow-hidden flex items-center justify-center p-6">
                <Image
                  src="/portfolio/milli-flame/logo/primary-logo-true-gold.webp"
                  alt="Primary Logo on True Gold"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Radiant True Gold ground for premium bakery items and gift packaging.
              </p>
            </div>

            {/* Quetzal Green on White */}
            <div
              onClick={() => openLightboxByImageId("secondary-logo-quetzal-green")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#2C6667] font-bold uppercase tracking-wider">
                  03. QUETZAL GREEN
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">#2C6667 ON WHITE</span>
              </div>
              <div className="relative aspect-[4/3] bg-white overflow-hidden flex items-center justify-center p-6">
                <Image
                  src="/portfolio/milli-flame/logo/secondary-logo-quetzal-green.webp"
                  alt="Secondary Logo in Quetzal Green"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Secondary logo lockup in deep Quetzal Green for stationery and print menus.
              </p>
            </div>
          </div>

          {/* Construction, Safe Area & Guidelines Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Construction Equation */}
            <div
              onClick={() => openLightboxByImageId("logo-construction-equation")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                ANATOMICAL EQUATION
              </span>
              <div className="relative aspect-[16/9] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/identity/logo-construction-equation.webp"
                  alt="Logo Construction Equation"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-[11px] text-white/60">
                Flame + Plate/Cutlery + French motto identity synthesis.
              </p>
            </div>

            {/* Emblem Variations */}
            <div
              onClick={() => openLightboxByImageId("circular-emblem-color-variations")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                CIRCULAR EMBLEM SUITE
              </span>
              <div className="relative aspect-[16/9] bg-white overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/logo/circular-emblem-color-variations.webp"
                  alt="Circular Emblem Color Variations"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-[11px] text-white/60">
                Black, Deep Blue, True Gold, and Quetzal Green emblems.
              </p>
            </div>

            {/* Safe Area Grid */}
            <div
              onClick={() => openLightboxByImageId("logo-safe-area-grid")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                SAFE AREA & ISOLATION
              </span>
              <div className="relative aspect-[16/9] bg-white overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/identity/logo-safe-area-grid.webp"
                  alt="Logo Safe Area Grid"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-[11px] text-white/60">
                Architectural grid defining proportional clear space.
              </p>
            </div>

            {/* Incorrect Usage Matrix */}
            <div
              onClick={() => openLightboxByImageId("logo-incorrect-usage-matrix")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#F20D18] uppercase font-bold tracking-wider block">
                PROHIBITED APPLICATIONS
              </span>
              <div className="relative aspect-[16/9] bg-white overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/identity/logo-incorrect-usage-matrix.webp"
                  alt="Logo Incorrect Usage Matrix"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-[11px] text-white/60">
                Strict rules against skew, drop shadow, outlines, and distortion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 02: COLOUR AND TYPOGRAPHY
      ========================================================================= */}
      <section
        id="chapter-02"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 02</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">CHROMATIC & TYPOGRAPHIC ARCHITECTURE</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                COLOUR & <span className="text-[#05AAC2]">TYPOGRAPHY.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                TROPICAL CYAN, QUETZAL GREEN, RIVIERA TEAL AND WARM GOLD ACCENTS
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Led by fresh turquoise teal expressing energy and culinary warmth, the palette is
              grounded by deep Quetzal Green and radiant True Gold. Typographic clarity is delivered
              through Nexa display headlines and Montserrat editorial body text.
            </p>
          </div>

          {/* Interactive 5-Color Swatch Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/50 uppercase tracking-wider flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[#05AAC2]" /> CLICK ANY SWATCH TO COPY HEX CODE
              </span>
              {copiedHex && (
                <span className="text-[#05AAC2] font-bold animate-pulse flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> COPIED {copiedHex} TO CLIPBOARD
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {PALETTE.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  data-cursor="COPY"
                  className="group relative p-5 rounded-none border border-white/10 hover:border-white transition-all text-left flex flex-col justify-between min-h-[160px] shadow-lg"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        c.darkText ? "text-black" : "text-white"
                      }`}
                    >
                      {c.name}
                    </span>
                    <Copy
                      className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 ${
                        c.darkText ? "text-black" : "text-white"
                      }`}
                    />
                  </div>

                  <div className="space-y-1 pt-6">
                    <span
                      className={`font-mono text-base font-black block tracking-widest ${
                        c.darkText ? "text-black" : "text-white"
                      }`}
                    >
                      {c.hex}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider block opacity-75 ${
                        c.darkText ? "text-black/80" : "text-white/80"
                      }`}
                    >
                      {c.role}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Specimen Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Nexa Display Card */}
            <div
              onClick={() => openLightboxByImageId("font-specimen-nexa")}
              data-cursor="INSPECT"
              className="lg:col-span-6 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 sm:p-8 space-y-5 cursor-pointer transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#F2D050] font-bold uppercase tracking-wider">
                    PRIMARY TYPEFACE // NEXA
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">HEADLINES & SIGNAGE</span>
                </div>
                <div className="relative aspect-[16/10] bg-[#F2D050] overflow-hidden">
                  <Image
                    src="/portfolio/milli-flame/colour-and-typography/font-specimen-nexa.webp"
                    alt="Nexa Typeface Specimen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="font-mono text-xs text-white/60">
                Nexa provides modern geometric confidence and refined warmth across menus, exterior
                fascias and packaging headlines.
              </p>
            </div>

            {/* Montserrat Body Card */}
            <div
              onClick={() => openLightboxByImageId("font-specimen-montserrat")}
              data-cursor="INSPECT"
              className="lg:col-span-6 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 sm:p-8 space-y-5 cursor-pointer transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-wider">
                    SECONDARY TYPEFACE // MONTSERRAT
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">BODY & INTERFACE</span>
                </div>
                <div className="relative aspect-[16/10] bg-[#05AAC2] overflow-hidden">
                  <Image
                    src="/portfolio/milli-flame/colour-and-typography/font-specimen-montserrat.webp"
                    alt="Montserrat Typeface Specimen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="font-mono text-xs text-white/60">
                Montserrat ensures surgical legibility across digital ordering screens, recipe
                disclosures and corporate stationery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03: BRAND PATTERNS
      ========================================================================= */}
      <section
        id="chapter-03"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 03</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">GRAPHIC MOTIFS & RHYTHMS</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                BRAND <span className="text-[#05AAC2]">PATTERNS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                HYPNOTIC CONCENTRIC RIPPLES, EMBLEM WALLPAPERS AND TACTILE TEXTURES
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Circular forms and repeating patterns create immediate brand recall. Concentric ripples
              evoke the gentle spreading warmth of heat and flavor, while repeating emblem wallpapers
              provide structure for physical packaging and retail interiors.
            </p>
          </div>

          {/* Pattern Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Concentric Ripples */}
            <div
              onClick={() => openLightboxByImageId("concentric-ripples-flame-teal")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-wider">
                  01. CONCENTRIC RIPPLE
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">RIVIERA TEAL</span>
              </div>
              <div className="relative aspect-[3/4] bg-[#32AFA4] overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/brand-patterns/concentric-ripples-flame-teal.webp"
                  alt="Concentric Ripple Pattern"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Expanding concentric ripples around the flame emblem representing flavor resonance.
              </p>
            </div>

            {/* Emblem Wallpaper */}
            <div
              onClick={() => openLightboxByImageId("circular-emblem-wallpaper-gold")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#F2D050] font-bold uppercase tracking-wider">
                  02. GOLD EMBLEM WALLPAPER
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">TRUE GOLD</span>
              </div>
              <div className="relative aspect-[3/4] bg-[#F2D050] overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/brand-patterns/circular-emblem-wallpaper-gold.webp"
                  alt="Circular Emblem Wallpaper on True Gold"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Geometric diagonal repeat of circular flame emblems for bags, tissue wrap and lining.
              </p>
            </div>

            {/* Swirled Butter */}
            <div
              onClick={() => openLightboxByImageId("swirled-butter-gold-motto")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#F2D050] font-bold uppercase tracking-wider">
                  03. TACTILE MOTTO SWIRL
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">CULINARY TEXTURE</span>
              </div>
              <div className="relative aspect-[3/4] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/brand-patterns/swirled-butter-gold-motto.webp"
                  alt="Artisanal Butter Swirl with Gold Slogan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Tactile churned cream swirl framed by gold motto typography.
              </p>
            </div>

            {/* Horizontal Flame Line Device */}
            <div
              onClick={() => openLightboxByImageId("horizontal-flame-brandmark-line")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-wider">
                  04. HORIZONTAL LINE DEVICE
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">LINEAR BRANDMARK</span>
              </div>
              <div className="relative aspect-[3/4] bg-[#05AAC2] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/portfolio/milli-flame/brand-patterns/horizontal-flame-brandmark-line.webp"
                  alt="Horizontal Flame Line Device"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-mono text-xs text-white/60">
                Linear architectural divider integrating flame emblem and gold rule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 04: FOOD AND CULINARY IMAGERY
      ========================================================================= */}
      <section
        id="chapter-04"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 04</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">GASTRONOMIC STORYTELLING</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                FOOD & <span className="text-[#05AAC2]">CULINARY IMAGERY.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                PARISIAN BISTRO GASTRONOMY: BURGERS, PASTRIES, ROASTS AND DESSERTS
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Every photograph celebrates the tactile pleasure of dining. High-attitude lifestyle
              moments pair with macro gastronomic captures — from warm flaky croissants and brioche
              burgers to seared poultry drumsticks, artisan quiches and decadent tiramisu.
            </p>
          </div>

          {/* Asymmetric Hero Pair: Terrace Pasta Dining & Croissants */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Terrace Dining */}
            <div
              onClick={() => openLightboxByImageId("pasta-dining-terrace")}
              data-cursor="EXPAND"
              className="lg:col-span-7 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] overflow-hidden cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/pasta-dining-terrace.webp"
                  alt="Sunlit Café Dining & Pasta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#05AAC2] font-bold uppercase tracking-widest border border-white/10">
                    PARISIAN TERRACE DINING
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase text-white">
                    SUNLIT CAFÉ DINING & ARTISAN PASTA
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1">
                    Guest enjoying handcrafted pasta and chilled white wine on blue terrace table.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Artisanal Croissants */}
            <div
              onClick={() => openLightboxByImageId("croissants-artisan-bakery")}
              data-cursor="EXPAND"
              className="lg:col-span-5 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] overflow-hidden cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/11] w-full bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/croissants-artisan-bakery.webp"
                  alt="Freshly Baked Artisanal Croissants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#F2D050] font-bold uppercase tracking-widest border border-white/10">
                    DAILY VIENNOISERIE
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase text-white">
                    ARTISANAL BAKERY CROISSANTS
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1">
                    Flaky golden layers dusted with powdered sugar on craft paper with circular brand sticker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Culinary Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Gourmet Burger Plate */}
            <div
              onClick={() => openLightboxByImageId("gourmet-burger-plate")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-4 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/gourmet-burger-plate.webp"
                  alt="Gourmet Burger on Blue Plate"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">CHAR-GRILLED GOURMET BURGER</h4>
              <p className="font-mono text-xs text-white/60">
                Toasted brioche, melted cheddar, red onions, fresh tomato, and golden fries.
              </p>
            </div>

            {/* Lattice Apple Pie */}
            <div
              onClick={() => openLightboxByImageId("lattice-apple-pie")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-4 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/lattice-apple-pie.webp"
                  alt="Lattice Apple Pie on Stone Table"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">LATTICE FRUIT TART</h4>
              <p className="font-mono text-xs text-white/60">
                Traditional golden lattice pastry on stone tabletop beside wicker bistro chair.
              </p>
            </div>

            {/* Flame-Roasted Chicken */}
            <div
              onClick={() => openLightboxByImageId("roast-chicken-drumstick")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-4 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/roast-chicken-drumstick.webp"
                  alt="Flame-Roasted Chicken Drumsticks"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">OPEN-FIRE ROAST POULTRY</h4>
              <p className="font-mono text-xs text-white/60">
                Glazed roasted drumsticks charred over flame, celebrating the core identity concept.
              </p>
            </div>

            {/* Tiramisu Dessert */}
            <div
              onClick={() => openLightboxByImageId("tiramisu-dessert-ladyfingers")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-4 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/tiramisu-dessert-ladyfingers.webp"
                  alt="Artisanal Cocoa Tiramisu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">ARTISANAL COCOA TIRAMISU</h4>
              <p className="font-mono text-xs text-white/60">
                Decadent dessert garnished with fresh mint, whole roasted beans and ladyfingers.
              </p>
            </div>
          </div>

          {/* Third Row: Milkshakes, Coasters Drink, Breakfast Burger & Brand Tone Bite */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
            {/* Milkshakes */}
            <div
              onClick={() => openLightboxByImageId("strawberry-milkshakes-whipped-cream")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/strawberry-milkshakes-whipped-cream.webp"
                  alt="Strawberry Milkshakes with Whipped Cream"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">HANDCRAFTED MILKSHAKES</h4>
              <p className="font-mono text-xs text-white/60">
                Dual strawberry milkshakes topped with whipped cream and decorative sugar pearls.
              </p>
            </div>

            {/* Breakfast Burger */}
            <div
              onClick={() => openLightboxByImageId("breakfast-burger-egg-bacon")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/breakfast-burger-egg-bacon.webp"
                  alt="Gourmet Breakfast Burger with Egg & Bacon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">SUNNY-SIDE BREAKFAST BURGER</h4>
              <p className="font-mono text-xs text-white/60">
                Loaded brioche burger with sunny-side fried egg, bacon, hash brown, and melted cheese.
              </p>
            </div>

            {/* Brand Tone Burger Bite */}
            <div
              onClick={() => openLightboxByImageId("brand-tone-burger-bite")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/food-photography/brand-tone-burger-bite.webp"
                  alt="Guest Biting Into Burger with Gold Slogan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">THE PURE SENSATION OF TASTE</h4>
              <p className="font-mono text-xs text-white/60">
                Editorial portrait capturing pure indulgence framed by circular gold motto lettering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 05: PACKAGING AND BRAND COLLATERALS
      ========================================================================= */}
      <section
        id="chapter-05"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 05</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">TACTILE BRAND APPLICATIONS</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                PACKAGING & <span className="text-[#05AAC2]">COLLATERALS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                COFFEE CUPS, KRAFT BAGS, EMBOSSED BUSINESS CARDS AND STATIONERY
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              From morning takeaway espresso cups with concentric ripple sleeves to textured craft
              bakery sacks and foil-stamped business cards on cedar blocks, every physical touchpoint
              reinforces Parisian sophistication.
            </p>
          </div>

          {/* Large Feature: Takeaway Coffee Cups */}
          <div
            onClick={() => openLightboxByImageId("takeaway-coffee-cups-cluster")}
            data-cursor="EXPAND"
            className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] overflow-hidden cursor-pointer transition-all shadow-2xl"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-black overflow-hidden">
              <Image
                src="/portfolio/milli-flame/packaging/takeaway-coffee-cups-cluster.webp"
                alt="Concentric Ripple Takeaway Coffee Cups"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1720px) 100vw, 1720px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#05AAC2] font-bold uppercase tracking-widest border border-white/10">
                  BEVERAGE PACKAGING SUITE
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 className="font-anton text-2xl sm:text-4xl uppercase text-white">
                    CONCENTRIC RIPPLE TAKEAWAY CUPS
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1 max-w-xl">
                    Multi-size takeaway paper cups in Tropical Cyan and Riviera Teal with paper sipping straws.
                  </p>
                </div>
                <span className="font-mono text-xs text-white/50 tracking-wider">
                  CLICK TO VIEW IN LIGHTBOX ↗
                </span>
              </div>
            </div>
          </div>

          {/* 4-Item Collaterals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Coasters */}
            <div
              onClick={() => openLightboxByImageId("lemon-iced-beverage-coasters")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                01. DRINK COASTERS
              </span>
              <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/food-photography/lemon-iced-beverage-coasters.webp"
                  alt="Drink Coasters with Iced Drink"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">ABSORBENT COASTERS</h4>
              <p className="font-mono text-xs text-white/60">
                Pulp-board circular coasters with concentric ripple graphic and central flame emblem.
              </p>
            </div>

            {/* Business Cards Stack */}
            <div
              onClick={() => openLightboxByImageId("business-cards-wood-block")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                02. CARD REVERSE
              </span>
              <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/packaging/business-cards-wood-block.webp"
                  alt="Business Cards Stack on Cedar Block"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">EMBOSSED RIPPLE BACK</h4>
              <p className="font-mono text-xs text-white/60">
                Cyan cards resting on cedar grid block with blind-embossed concentric ripple finish.
              </p>
            </div>

            {/* Business Card Front */}
            <div
              onClick={() => openLightboxByImageId("business-card-front-mockup")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                03. CARD FACE
              </span>
              <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/packaging/business-card-front-mockup.webp"
                  alt="Business Card Front Mockup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">QUETZAL GREEN PRINT</h4>
              <p className="font-mono text-xs text-white/60">
                Cotton rag card face with Quetzal Green typography and subtle 10% opacity watermark.
              </p>
            </div>

            {/* Letterhead & Envelope */}
            <div
              onClick={() => openLightboxByImageId("letterhead-trifold-wood")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <span className="font-mono text-[10px] text-[#05AAC2] uppercase font-bold tracking-wider block">
                04. CORPORATE STATIONERY
              </span>
              <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/milli-flame/stationery/letterhead-trifold-wood.webp"
                  alt="Letterhead on Wood Table"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">TRI-FOLD LETTERHEAD</h4>
              <p className="font-mono text-xs text-white/60">
                Official corporate letterhead paired with matching Riviera Teal correspondence envelopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 06: THE RESTAURANT EXPERIENCE
      ========================================================================= */}
      <section
        id="chapter-06"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 06</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">PHYSICAL TOUCHPOINTS & APPAREL</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                THE RESTAURANT <span className="text-[#05AAC2]">EXPERIENCE.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                PARISIAN ARCHITECTURE, STOREFRONT LIGHTBOXES, AND STAFF APPAREL
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Extending the brand into the built environment: classic soft pink Parisian stone
              facades, illuminated exterior cantilever signs, and clean staff apparel designed with
              tailored hospitality cuts.
            </p>
          </div>

          {/* Storefront & Signage Two-Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Storefront Facade */}
            <div
              onClick={() => openLightboxByImageId("storefront-facade-paris")}
              data-cursor="EXPAND"
              className="lg:col-span-7 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] overflow-hidden cursor-pointer transition-all"
            >
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/storefront/storefront-facade-paris.webp"
                  alt="Parisian Exterior Storefront Facade"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#05AAC2] font-bold uppercase tracking-widest border border-white/10">
                    EXTERIOR FASCIATION
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase text-white">
                    PARISIAN EXTERIOR STOREFRONT FACADE
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1">
                    Classic Parisian soft stone facade with large teal brand fascia board and window display.
                  </p>
                </div>
              </div>
            </div>

            {/* Cantilever Lightbox */}
            <div
              onClick={() => openLightboxByImageId("cantilever-projection-lightbox")}
              data-cursor="EXPAND"
              className="lg:col-span-5 group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] overflow-hidden cursor-pointer transition-all"
            >
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/storefront/cantilever-projection-lightbox.webp"
                  alt="Illuminated Cantilever Lightbox Sign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#05AAC2] font-bold uppercase tracking-widest border border-white/10">
                    BLADE SIGNAGE
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase text-white">
                    ILLUMINATED PROJECTION BLADE SIGN
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1">
                    Square illuminated cantilever sign in vibrant cyan mounted to outdoor brick wall.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Uniforms 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
            {/* Staff T-Shirt */}
            <div
              onClick={() => openLightboxByImageId("staff-tshirt-white-front-back")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-[#32AFA4] overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/uniforms/staff-tshirt-white-front-back.webp"
                  alt="Staff Crewneck T-Shirt Front & Back"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">STAFF CREWNECK T-SHIRT</h4>
              <p className="font-mono text-xs text-white/60">
                Front and back view featuring embroidered chest emblem, back lockup, and hem stripe.
              </p>
            </div>

            {/* Staff Cap */}
            <div
              onClick={() => openLightboxByImageId("staff-cap-riviera-teal")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-[#F2D050] overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/uniforms/staff-cap-riviera-teal.webp"
                  alt="Staff Baseball Cap in Riviera Teal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-white">TWILL BASEBALL CAP</h4>
              <p className="font-mono text-xs text-white/60">
                Structured Riviera Teal twill cap featuring circular embroidered flame patch.
              </p>
            </div>

            {/* Staff Lookbook Model */}
            <div
              onClick={() => openLightboxByImageId("staff-model-white-uniform")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-5 space-y-3 cursor-pointer transition-all"
            >
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <Image
                  src="/portfolio/milli-flame/uniforms/staff-model-white-uniform.webp"
                  alt="Staff Uniform Lookbook Model"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-anton text-lg uppercase text-black">UNIFORM LOOKBOOK MODEL</h4>
              <p className="font-mono text-xs text-white/60">
                Male hospitality staff model wearing white Milli Flame t-shirt and white embroidered cap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 07: DIGITAL TOUCHPOINTS
      ========================================================================= */}
      <section
        id="chapter-07"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 07</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">MOBILE & DIGITAL INTERFACE</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                DIGITAL <span className="text-[#05AAC2]">TOUCHPOINTS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                SMARTPHONE MOBILE ORDERING INTERFACE & APP EXPERIENCE
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Extending the visual language to smartphones and digital ordering interfaces:
              minimalist splash animation with expanding concentric wave pulses around the circular
              flame brandmark.
            </p>
          </div>

          {/* Digital Mobile Interface Feature */}
          <div
            onClick={() => openLightboxByImageId("mobile-ordering-splash-screen")}
            data-cursor="EXPAND"
            className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-8 md:p-12 cursor-pointer transition-all shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-[16/9] bg-black overflow-hidden border border-white/10">
                <Image
                  src="/portfolio/milli-flame/digital/mobile-ordering-splash-screen.webp"
                  alt="Mobile Ordering App Splash Screen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#05AAC2] font-bold uppercase tracking-widest block">
                  NATIVE MOBILE INTERFACE
                </span>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase text-white">
                  DIGITAL ORDERING SPLASH EXPERIENCE
                </h3>
                <p className="font-space text-sm text-white/70 leading-relaxed">
                  The mobile ordering application extends the dining room ritual into the palm of
                  the hand. Designed around fluid concentric ripples, the interface communicates
                  effortless ease, speedy tableside ordering, and digital takeaway pickup.
                </p>
                <div className="pt-2 font-mono text-xs text-[#F2D050]">
                  VERIFIED DESIGN TOUCHPOINT · MILLI FLAME BRAND GUIDELINES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 08: MASTER BRAND GUIDELINES ARCHIVE
      ========================================================================= */}
      <section
        id="chapter-08"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#05AAC2] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 08</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">COMPLETE PDF DOCUMENTATION</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                MASTER <span className="text-[#05AAC2]">BRAND BOOK.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                UNCROPPED 300 DPI EDITORIAL ARTBOARDS (PAGES 01 – 10)
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Every individual creative asset above originated from the complete 10-page master
              brand guideline document. Below is the unedited full artboard archive for comprehensive
              curatorial inspection.
            </p>
          </div>

          {/* 10 Full-Page Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 10 }, (_, i) => {
              const pno = i + 1;
              const pnoStr = pno < 10 ? `0${pno}` : `${pno}`;
              const imgId = `page-${pnoStr}-overview`;
              return (
                <div
                  key={imgId}
                  onClick={() => openLightboxByImageId(imgId)}
                  data-cursor="INSPECT"
                  className="group bg-[#0e0e0e] border border-white/10 hover:border-[#05AAC2] p-3 space-y-2 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px] text-white/40 border-b border-white/10 pb-1.5">
                      <span className="text-[#05AAC2] font-bold">PAGE {pnoStr}</span>
                      <span>300 DPI</span>
                    </div>
                    <div className="relative aspect-[9/16] bg-black overflow-hidden border border-white/5">
                      <Image
                        src={`/portfolio/milli-flame/collages-original/page-${pnoStr}-overview.webp`}
                        alt={`Milli Flame Brand Book Page ${pnoStr}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="font-anton text-xs uppercase text-white block truncate">
                      ARTBOARD {pnoStr}
                    </span>
                    <span className="font-mono text-[9px] text-white/40 block">CLICK TO EXPAND</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION */}
      <section className="py-20 px-5 sm:px-8 md:px-12 bg-[#0c0c0c] border-b border-white/10">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-mono text-xs text-[#05AAC2] font-bold tracking-widest uppercase">
              // READY TO BUILD A DEFINING RESTAURANT BRAND?
            </span>
            <h3 className="font-anton text-3xl sm:text-5xl uppercase text-white">
              LET&apos;S CRAFT SOMETHING <span className="text-[#05AAC2]">EXTRAORDINARY.</span>
            </h3>
            <p className="font-space text-sm text-white/60 max-w-xl">
              From hospitality creative direction and brand identities to packaging, interiors and
              cinematic campaigns, AFTER THAT transforms culinary vision into cultural presence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              onClick={() => sound.playClick()}
              className="px-8 py-4 bg-[#2C6667] hover:bg-[#05AAC2] text-white font-anton text-base tracking-wider uppercase transition-colors shadow-[0_0_20px_rgba(5,170,194,0.4)]"
            >
              START A PROJECT →
            </Link>
            <Link
              href="/#work"
              onClick={() => sound.playClick()}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Interactive Lightbox Modal */}
      <MilliFlameLightbox
        images={MILLI_FLAME_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
