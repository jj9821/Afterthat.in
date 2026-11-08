"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  Copy,
  Check,
  Sparkles,
  Eye,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import { sound } from "@/utils/sound";
import DizzireLightbox, { DizzireImageItem } from "./DizzireLightbox";
import dizzireData from "@/data/dizzire.json";

export const DIZZIRE_IMAGES: DizzireImageItem[] = (dizzireData as unknown) as DizzireImageItem[];

const CHAPTERS = [
  { id: "chapter-01", label: "01. THE BRAND", title: "The Brand", count: 2 },
  { id: "chapter-02", label: "02. LOGO EXPLORATIONS", title: "Logo Explorations", count: 15 },
  { id: "chapter-03", label: "03. COLOUR & TYPE", title: "Colour & Typography", count: 3 },
  { id: "chapter-04", label: "04. PATTERNS", title: "Brand Patterns", count: 3 },
  { id: "chapter-05", label: "05. FASHION CAMPAIGNS", title: "Fashion Campaigns", count: 9 },
  { id: "chapter-06", label: "06. OUTDOOR ADS", title: "Outdoor Advertising", count: 6 },
  { id: "chapter-07", label: "07. STOREFRONT", title: "Storefront & Retail", count: 3 },
  { id: "chapter-08", label: "08. PACKAGING", title: "Shopping Bags", count: 4 },
  { id: "chapter-09", label: "09. STAFF BRANDING", title: "Staff Branding", count: 2 },
  { id: "chapter-10", label: "10. SOCIAL & STATIONERY", title: "Social & Stationery", count: 5 },
  { id: "chapter-11", label: "11. MASTER ARCHIVE", title: "Master Guidelines Archive", count: 31 },
];

const PALETTE = [
  {
    name: "Primary Red",
    hex: "#C92028",
    cmyk: "C: 14% | M: 100% | Y: 98% | K: 4%",
    darkText: false,
    role: "Primary Brandmark, Hero Identity & Crimson Silk Field",
  },
  {
    name: "Light Beige",
    hex: "#ECE9E3",
    cmyk: "C: 6% | M: 6% | Y: 8% | K: 0%",
    darkText: true,
    role: "Tactile Negative Space, Editorial Background & Fine Packaging",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    cmyk: "C: 0% | M: 0% | Y: 0% | K: 0%",
    darkText: true,
    role: "Reversed Logo Lockups, Corporate Paper Stock & Clarity",
  },
  {
    name: "Warm Champagne",
    hex: "#F8E8CD",
    cmyk: "C: 2% | M: 7% | Y: 20% | K: 0%",
    darkText: true,
    role: "Gold Zari Weft Accent, Luxury Shopping Bags & Foil Stamps",
  },
  {
    name: "Royal Burgundy",
    hex: "#6A1013",
    cmyk: "C: 33% | M: 98% | Y: 90% | K: 49%",
    darkText: false,
    role: "Deep Contrast Field, Architectural Fascia & Evening Mood",
  },
  {
    name: "Crimson Red",
    hex: "#A21E24",
    cmyk: "C: 24% | M: 100% | Y: 95% | K: 19%",
    darkText: false,
    role: "Bridal Silk Saree Drapery & Rich Heritage Accents",
  },
];

export default function DizzireShowcaseClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>("chapter-01");

  const openLightboxByImageId = (id: string) => {
    sound.playClick();
    const idx = DIZZIRE_IMAGES.findIndex((img) => img.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const copyHex = (hex: string) => {
    sound.playClick();
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    });
  };

  // Track active chapter during scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const chapter of CHAPTERS) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C92028] selection:text-white">
      <CustomCursor />
      <Navbar />

      {/* =========================================================================
          HERO SECTION: CINEMATIC LUXURY FASHION OPENING
          ========================================================================= */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-5 sm:px-8 md:px-12 overflow-hidden border-b border-white/10">
        {/* Ambient Silk Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C92028]/15 via-black/40 to-[#0A0A0A] pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#C92028]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#6A1013]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto w-full relative z-10 flex flex-col justify-between min-h-[80vh]">
          {/* Top Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <Link
              href="/#work"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 font-mono text-xs text-white/70 hover:text-[#C92028] transition-colors uppercase tracking-widest group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Selected Works</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white/50">
              <span className="text-[#C92028] font-bold tracking-widest uppercase">
                BRAND IDENTITY // FASHION // RETAIL
              </span>
              <span>·</span>
              <span>KOTHAMANGALAM, KERALA</span>
              <span>·</span>
              <span className="text-white/80 font-bold">YEAR: 2026</span>
              <span className="bg-[#C92028]/20 text-[#C92028] px-2.5 py-0.5 border border-[#C92028]/40 font-bold uppercase tracking-widest text-[10px]">
                VERIFIED SOURCE
              </span>
            </div>
          </div>

          {/* Main Hero Header & Asymmetrical Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#C92028]/10 border border-[#C92028]/30 px-3.5 py-1.5 font-mono text-[11px] text-[#C92028] uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INDIAN TEXTILE HERITAGE · LUXURY REBRANDING</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-[0.92] font-normal">
                DIZZIRE <br />
                <span className="text-[#C92028] italic font-serif">SILK & SAREES</span>
              </h1>

              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8E8CD] italic tracking-wide font-light max-w-2xl border-l-2 border-[#C92028] pl-5">
                “Elegance woven into every thread.”
              </p>

              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                A refined and contemporary identity rooted in Indian textile heritage, celebrating silk sarees,
                individuality, elegance and tradition. Based in Kothamangalam, Kerala, Dizzire enters an elevated
                fashion chapter developed by AFTER THAT.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton strength={0.25}>
                  <button
                    onClick={() => openLightboxByImageId("dizzire-hero-campaign-saree")}
                    className="inline-flex items-center gap-3 bg-[#C92028] text-white font-mono text-xs font-bold tracking-widest uppercase px-6 py-4 hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(201,32,40,0.5)]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>EXPLORE 88 BRAND ASSETS</span>
                  </button>
                </MagneticButton>

                <a
                  href="#chapter-02"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-2 font-mono text-xs text-white/70 hover:text-white border border-white/20 px-5 py-4 tracking-wider uppercase hover:border-[#C92028] transition-all"
                >
                  <span>VIEW 4 LOGO OPTIONS</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C92028]" />
                </a>
              </div>
            </div>

            {/* Hero Dual Visual Showcase */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <TiltCard intensity={8} className="col-span-2 sm:col-span-1">
                <div
                  onClick={() => openLightboxByImageId("dizzire-hero-campaign-saree")}
                  className="relative aspect-[3/4] overflow-hidden rounded border border-white/15 cursor-pointer group shadow-2xl"
                >
                  <Image
                    src="/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp"
                    alt="Dizzire Crimson Silk Saree Campaign"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="text-[#C92028] font-bold">HERO 01 // BRIDAL CRIMSON</span>
                    <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                  </div>
                </div>
              </TiltCard>

              <TiltCard intensity={8} className="col-span-2 sm:col-span-1 sm:translate-y-8">
                <div
                  onClick={() => openLightboxByImageId("dizzire-hero-elegance-editorial")}
                  className="relative aspect-[3/4] overflow-hidden rounded border border-white/15 cursor-pointer group shadow-2xl"
                >
                  <Image
                    src="/portfolio/dizzire/hero/dizzire-hero-elegance-editorial.webp"
                    alt="Dizzire Editorial Lifestyle Portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="text-[#F8E8CD] font-bold">HERO 02 // CONTEMPORARY DRAPE</span>
                    <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">CLIENT</span>
              <span className="font-serif text-lg text-white font-medium">Dizzire Silk and Sarees</span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">LOCATION</span>
              <span className="font-serif text-lg text-white font-medium">Kothamangalam, Kerala</span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">CREATIVE SCOPE</span>
              <span className="font-serif text-lg text-[#C92028] font-medium">Identity, Campaigns & Retail</span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">ARCHIVE ASSETS</span>
              <span className="font-serif text-lg text-[#F8E8CD] font-medium">88 Curated Visuals</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER NAVIGATION STICKY BAR
          ========================================================================= */}
      <div className="sticky top-16 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 overflow-x-auto no-scrollbar">
        <div className="max-w-[1720px] mx-auto flex items-center gap-2">
          <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest mr-2 shrink-0">
            CHAPTERS:
          </span>
          {CHAPTERS.map((chap) => (
            <a
              key={chap.id}
              href={`#${chap.id}`}
              onClick={() => sound.playClick()}
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                activeChapter === chap.id
                  ? "bg-[#C92028] border-[#C92028] text-white font-bold shadow-[0_0_12px_rgba(201,32,40,0.5)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {chap.label} <span className="opacity-50 text-[10px]">({chap.count})</span>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-32">
        {/* =========================================================================
            CHAPTER 01: THE BRAND & STORY
            ========================================================================= */}
        <section id="chapter-01" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 01
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                THE BRAND & TEXTILE HERITAGE
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Dezzire Silk and Sarees, based in Kothamangalam, Kerala, enters a new phase with a refined and modern identity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                <p>
                  Rooted in the richness of Indian textile heritage, Dizzire offers a wide and thoughtfully curated
                  collection of silk sarees that cater to diverse styles and occasions. Our rebranding reflects a more
                  elegant and contemporary expression, while staying true to the trust and warmth built with customers
                  over the years.
                </p>
                <p>
                  At Dizzire, every saree is carefully chosen to celebrate individuality, blending tradition with
                  today’s evolving sense of style. The creative direction honors traditional Kerala and Kanchipuram
                  weaving practices while translating the identity into high-fashion editorial clarity.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#6A1013]/30 via-white/5 to-transparent border border-white/10 rounded space-y-3">
                <span className="font-mono text-xs text-[#F8E8CD] tracking-widest uppercase block font-bold">
                  CORE BRAND DELIVERABLES
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-white/70">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Master Brandmark & Desire Star
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> 4 Distinct Logo Options
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> 6-Tone CMYK Color System
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Cormorant & Montserrat Type Hierarchy
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Saree Fashion Campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Storefront Architecture Concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Luxury Carry Bags & Packaging
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C92028]" /> Executive Stationery Suite
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard intensity={6}>
                <div
                  onClick={() => openLightboxByImageId("saree-campaign-staircase-regal")}
                  className="relative aspect-[16/10] overflow-hidden rounded border border-white/15 cursor-pointer group shadow-2xl"
                >
                  <Image
                    src="/portfolio/dizzire/fashion-campaigns/saree-campaign-staircase-regal.webp"
                    alt="Dizzire Heritage Grandeur Staircase Campaign"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                    <div>
                      <span className="text-[#C92028] block font-bold">HERITAGE GRANDEUR</span>
                      <span className="text-white/70 text-[11px]">Architectural Staircase Campaign</span>
                    </div>
                    <Maximize2 className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 02: LOGO EXPLORATIONS (FOUR DIRECTIONS)
            ========================================================================= */}
        <section id="chapter-02" className="space-y-12 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 02
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                FOUR LOGO DIRECTIONS
              </h2>
            </div>
            <div className="max-w-md font-mono text-xs text-white/50 space-y-1">
              <p>
                Documented explorations from <span className="text-white">DEZZIRE_FINAL LOGO copy.pdf</span>.
              </p>
              <p className="text-[#F8E8CD]">
                All four directions were explored as creative alternatives; no final direction is selected here.
              </p>
            </div>
          </div>

          {/* Master Design Rationale Box */}
          <div className="p-8 bg-gradient-to-r from-[#6A1013]/40 via-black to-[#C92028]/20 border border-white/15 rounded-lg space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#C92028] text-white font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest">
                CONCEPT RATIONALE
              </span>
              <h3 className="font-serif text-2xl text-white">Stylized “di” Symbol + Subtle Desire Star</h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-4xl">
              The logo combines a stylized “di” from Dizzire with a subtle desire star, symbolizing desire and
              fulfillment — reflecting the idea “Crafted from your wishes”. The flowing curves of the mark echo the
              drape and elegance of silk sarees, while the bold red conveys richness and tradition. A modern rounded
              serif-inspired display font is used for Dizzire, paired with a clean spaced sans-serif for Silks and
              Sarees, creating a balance of premium heritage and contemporary style.
            </p>
          </div>

          {/* Grid of the 4 Logo Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OPTION ONE */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-5 hover:border-[#C92028]/50 transition-all">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold tracking-widest uppercase">
                  DIRECTION 01 // INTERLOCKING MONOGRAM
                </span>
                <span className="font-mono text-[10px] text-white/40">OPTION ONE</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Primary presentation on crimson silk paired with high-contrast variations and highway outdoor billboard mockup.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => openLightboxByImageId("logo-option-01-primary-silk")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-01-primary-silk.webp"
                    alt="Logo Option 01 Primary Silk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div
                  onClick={() => openLightboxByImageId("logo-option-01-billboard")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-01-billboard.webp"
                    alt="Logo Option 01 Billboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* OPTION TWO */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-5 hover:border-[#C92028]/50 transition-all">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold tracking-widest uppercase">
                  DIRECTION 02 // CALLIGRAPHIC DRAPE
                </span>
                <span className="font-mono text-[10px] text-white/40">OPTION TWO</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Fluid calligraphic curves reflecting the gentle drape of silk pallus, tested across light champagne and urban billboards.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => openLightboxByImageId("logo-option-02-primary-silk")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-02-primary-silk.webp"
                    alt="Logo Option 02 Primary Silk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div
                  onClick={() => openLightboxByImageId("logo-option-02-billboard")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-02-billboard.webp"
                    alt="Logo Option 02 Billboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* OPTION THREE */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-5 hover:border-[#C92028]/50 transition-all">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold tracking-widest uppercase">
                  DIRECTION 03 // CLASSICAL SERIF & EMBLEM
                </span>
                <span className="font-mono text-[10px] text-white/40">OPTION THREE</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Balanced classical typography and standalone desire star emblem with daylight urban and twilight highway mockups.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => openLightboxByImageId("logo-option-03-primary-silk")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-03-primary-silk.webp"
                    alt="Logo Option 03 Primary Silk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div
                  onClick={() => openLightboxByImageId("logo-option-03-billboard-day")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-03-billboard-day.webp"
                    alt="Logo Option 03 Billboard Day"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* OPTION FOUR */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-5 hover:border-[#C92028]/50 transition-all">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold tracking-widest uppercase">
                  DIRECTION 04 // ARCHITECTURAL HIGH FASHION
                </span>
                <span className="font-mono text-[10px] text-white/40">OPTION FOUR</span>
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Architectural letterforms paired with contemporary floral desire star icon and night illuminated city billboard visualization.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => openLightboxByImageId("logo-option-04-primary-silk")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-04-primary-silk.webp"
                    alt="Logo Option 04 Primary Silk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div
                  onClick={() => openLightboxByImageId("logo-option-04-billboard")}
                  className="relative aspect-[3/2] overflow-hidden rounded border border-white/15 cursor-pointer group"
                >
                  <Image
                    src="/portfolio/dizzire/logo-explorations/logo-option-04-billboard.webp"
                    alt="Logo Option 04 Billboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 03: COLOUR AND TYPOGRAPHY
            ========================================================================= */}
        <section id="chapter-03" className="space-y-12 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 03
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                COLOUR ARCHITECTURE & TYPOGRAPHY
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Documented CMYK values from Page 6 of the official DIZZIRE Brand Guidelines. Click any swatch to copy its hex token.
            </p>
          </div>

          {/* Interactive Palette Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PALETTE.map((color) => (
              <div
                key={color.hex}
                onClick={() => copyHex(color.hex)}
                className="group p-5 rounded-lg border border-white/15 bg-white/5 hover:border-[#C92028] transition-all cursor-pointer relative overflow-hidden"
              >
                <div
                  className="w-full h-24 rounded border border-white/20 mb-4 flex items-center justify-center font-mono text-sm font-bold shadow-inner"
                  style={{ backgroundColor: color.hex, color: color.darkText ? "#000000" : "#FFFFFF" }}
                >
                  {color.hex}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-white font-medium">{color.name}</h4>
                    <span className="font-mono text-xs text-white/40 group-hover:text-[#C92028] flex items-center gap-1 transition-colors">
                      {copiedHex === color.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-[#F8E8CD]">{color.cmyk}</p>
                  <p className="font-sans text-xs text-white/60 pt-1 leading-relaxed">{color.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Typography Specimens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Primary: Cormorant */}
            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-lg space-y-4">
              <span className="font-mono text-xs text-[#C92028] tracking-widest uppercase font-bold block">
                PRIMARY TYPEFACE
              </span>
              <h3 className="font-serif text-4xl text-white">CORMORANT</h3>
              <p className="font-mono text-xs text-[#F8E8CD]">Regular | Medium | Bold</p>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Cormorant brings a refined, heritage elegance that perfectly complements Dizzire’s silk and sarees,
                reflecting timeless craftsmanship with a modern sense of luxury.
              </p>
              <div
                onClick={() => openLightboxByImageId("font-specimen-cormorant-primary")}
                className="pt-2 cursor-pointer group flex items-center gap-2 text-xs font-mono text-[#C92028] hover:text-white transition-colors"
              >
                <span>VIEW OFFICIAL SPECIMEN BOARD</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Secondary: Montserrat */}
            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-lg space-y-4">
              <span className="font-mono text-xs text-[#C92028] tracking-widest uppercase font-bold block">
                SECONDARY & PARAGRAPH TYPEFACE
              </span>
              <h3 className="font-sans text-4xl text-white font-medium tracking-wide">MONTSERRAT</h3>
              <p className="font-mono text-xs text-[#F8E8CD]">Light | Medium | Bold</p>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Montserrat, as the secondary and paragraph font, adds a clean and modern contrast to Cormorant,
                ensuring clarity, readability, and a contemporary feel across all Dizzire communications.
              </p>
              <div
                onClick={() => openLightboxByImageId("font-specimen-montserrat-secondary")}
                className="pt-2 cursor-pointer group flex items-center gap-2 text-xs font-mono text-[#C92028] hover:text-white transition-colors"
              >
                <span>VIEW OFFICIAL SPECIMEN BOARD</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 04: BRAND PATTERNS & TEXTILE MOTIFS
            ========================================================================= */}
        <section id="chapter-04" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 04
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                TEXTILE & BRAND PATTERNS
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Geometric repeat motifs, traditional Indian saree embroidery, and gold jacquard weave details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pattern 1 */}
            <div
              onClick={() => openLightboxByImageId("pattern-geometric-repeating-crimson")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/brand-patterns/pattern-geometric-repeating-crimson.webp"
                  alt="Geometric Lattice Pattern"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Geometric Textile Lattice</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Diamond and star tessellation inspired by traditional Indian silk weaving frames.
                </p>
              </div>
            </div>

            {/* Pattern 2 */}
            <div
              onClick={() => openLightboxByImageId("pattern-traditional-saree-embroidery")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/brand-patterns/pattern-traditional-saree-embroidery.webp"
                  alt="Traditional Saree Floral Motif"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Traditional Saree Floral Jaal</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Ornate floral jaal pattern drawing from Kerala silk borders and classical heritage embroidery.
                </p>
              </div>
            </div>

            {/* Pattern 3 */}
            <div
              onClick={() => openLightboxByImageId("pattern-gold-jacquard-weave")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/brand-patterns/pattern-gold-jacquard-weave.webp"
                  alt="Gold Jacquard Weave Detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Gold Jacquard Weave Detail</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Tactile macro study of gold zari threads interwoven with fine silk weft yarns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 05: FASHION CAMPAIGNS (EXTENSIVE PHOTO GALLERY)
            ========================================================================= */}
        <section id="chapter-05" className="space-y-12 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 05
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                FASHION CAMPAIGNS & SAREE EDITORIALS
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Immersive high-fashion visual narratives showcasing red, purple, gold, and green saree collections.
            </p>
          </div>

          {/* Magazine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Lead Crimson Portrait (Large Span) */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-crimson-red-editorial")}
              className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded border border-white/15 cursor-pointer group shadow-2xl"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-crimson-red-editorial.webp"
                alt="Crimson Red Saree Campaign"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white font-mono text-xs">
                <div>
                  <span className="text-[#C92028] font-bold block">SIGNATURE CAMPAIGN // 2026</span>
                  <span className="font-serif text-2xl text-white font-normal">Crimson Bridal Silk Saree</span>
                </div>
                <Maximize2 className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </div>
            </div>

            {/* Contemporary Drape */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-editorial-lifestyle")}
              className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded border border-white/15 cursor-pointer group shadow-2xl"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-editorial-lifestyle.webp"
                alt="Contemporary Silk Drape"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white font-mono text-xs">
                <div>
                  <span className="text-[#F8E8CD] font-bold block">EDITORIAL DRAPE</span>
                  <span className="font-serif text-xl text-white font-normal">Understated Luxury</span>
                </div>
                <Maximize2 className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>

            {/* Golden Ivory */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-golden-ivory-grace")}
              className="md:col-span-4 relative aspect-[4/3] overflow-hidden rounded border border-white/15 cursor-pointer group"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-golden-ivory-grace.webp"
                alt="Golden Ivory Silk Saree"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                <span>Golden Ivory Grace</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Royal Purple Drape */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-purple-drape-elegance")}
              className="md:col-span-4 relative aspect-[4/3] overflow-hidden rounded border border-white/15 cursor-pointer group"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-purple-drape-elegance.webp"
                alt="Royal Purple Silk Saree"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                <span>Royal Purple & Magenta</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Heritage Bridal Portrait */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-royal-heritage-portrait")}
              className="md:col-span-4 relative aspect-[4/3] overflow-hidden rounded border border-white/15 cursor-pointer group"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-royal-heritage-portrait.webp"
                alt="Heritage Bridal Silk"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                <span>Heritage Festive Silk</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Headline Slogan Typography Still */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-elegance-headline")}
              className="md:col-span-6 relative aspect-[16/9] overflow-hidden rounded border border-white/15 cursor-pointer group"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-elegance-headline.webp"
                alt="Elegance Woven Into Every Thread Headline"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                <span className="text-[#C92028]">Core Headline Treatment</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Textile Weave Macro */}
            <div
              onClick={() => openLightboxByImageId("saree-campaign-textile-texture-macro")}
              className="md:col-span-6 relative aspect-[16/9] overflow-hidden rounded border border-white/15 cursor-pointer group"
            >
              <Image
                src="/portfolio/dizzire/fashion-campaigns/saree-campaign-textile-texture-macro.webp"
                alt="Silk Texture Macro"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                <span>Tactile Weave & Fabric Texture</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 06: OUTDOOR ADVERTISING (BILLBOARDS)
            ========================================================================= */}
        <section id="chapter-06" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 06
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                OUTDOOR ADVERTISING & BILLBOARDS
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Outdoor advertising visualizations and mockups testing visibility, lighting conditions, and prestigious presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Billboard 1 */}
            <div
              onClick={() => openLightboxByImageId("billboard-master-brand-guideline")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/billboards/billboard-master-brand-guideline.webp"
                  alt="Brand Guideline Master Campaign Billboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#C92028] font-bold uppercase tracking-wider">
                  MASTER BRAND IDENTITY
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">Master Campaign Billboard Mockup</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Documented in DIZZIRE Brand Guidelines Page 4 with the master “di” desire star identity.
                </p>
              </div>
            </div>

            {/* Billboard 2: Option 3 Cityscape Day */}
            <div
              onClick={() => openLightboxByImageId("billboard-option-03-cityscape-day")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/billboards/billboard-option-03-cityscape-day.webp"
                  alt="Daylight Cityscape Billboard Option 03"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#F8E8CD] font-bold uppercase tracking-wider">
                  LOGO OPTION 03 // DAYLIGHT
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">Daylight Urban Billboard Mockup</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Architectural roadside visualization under bright natural sunlight in high-density retail corridors.
                </p>
              </div>
            </div>

            {/* Billboard 3: Option 3 Highway Dusk */}
            <div
              onClick={() => openLightboxByImageId("billboard-option-03-highway-dusk")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/billboards/billboard-option-03-highway-dusk.webp"
                  alt="Highway Twilight Billboard Option 03"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#F8E8CD] font-bold uppercase tracking-wider">
                  LOGO OPTION 03 // TWILIGHT
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">Expressway Twilight Billboard Mockup</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Dramatic twilight illumination study showcasing vibrant crimson silk against indigo dusk skies.
                </p>
              </div>
            </div>

            {/* Billboard 4: Option 4 Night */}
            <div
              onClick={() => openLightboxByImageId("billboard-option-04-illuminated-night")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/billboards/billboard-option-04-illuminated-night.webp"
                  alt="Night Cityscape Billboard Option 04"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#C92028] font-bold uppercase tracking-wider">
                  LOGO OPTION 04 // NIGHT CITY
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">Illuminated Night Billboard Mockup</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  High-contrast nocturnal billboard presentation with crisp backlit desire star mark.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 07: STOREFRONT & RETAIL EXPERIENCE
            ========================================================================= */}
        <section id="chapter-07" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 07
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                STOREFRONT & RETAIL EXPERIENCE
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Careful distinction between the proposed modern concept with minimal alterations and the existing retail building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Concept */}
            <div
              onClick={() => openLightboxByImageId("storefront-new-concept-minimal-alterations")}
              className="p-6 bg-gradient-to-b from-[#C92028]/10 to-white/5 border border-[#C92028]/40 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold uppercase tracking-widest">
                  PROPOSED NEW CONCEPT
                </span>
                <span className="bg-[#C92028] text-white font-mono text-[10px] px-2 py-0.5 font-bold uppercase">
                  MINIMAL ALTERATIONS
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/storefront/storefront-new-concept-minimal-alterations.webp"
                  alt="Shop Front New Concept with Minimal Alterations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Modernized exterior architectural concept with refined dark fascia, warm lighting, illuminated brand
                signage, and prominent window display showcases for bridal sarees.
              </p>
            </div>

            {/* Existing Storefront */}
            <div
              onClick={() => openLightboxByImageId("storefront-existing-exterior")}
              className="p-6 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-white/40 transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-white/60 font-bold uppercase tracking-widest">
                  EXISTING ARCHITECTURE
                </span>
                <span className="bg-white/15 text-white/80 font-mono text-[10px] px-2 py-0.5 font-bold uppercase">
                  CURRENT PREMISES
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/storefront/storefront-existing-exterior.webp"
                  alt="Shop Front Existing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Documentation of Dizzire's existing retail flagship building in Kothamangalam, Kerala prior to full
                exterior brand transformation.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 08: PACKAGING AND SHOPPING BAGS
            ========================================================================= */}
        <section id="chapter-08" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 08
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                PACKAGING & LUXURY SHOPPING BAGS
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Custom red, gold, and beige shopping bag systems with side gussets, rope handles, and technical die-cut specs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Red Bag */}
            <div
              onClick={() => openLightboxByImageId("shopping-bag-luxury-crimson-red")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/shopping-bags/shopping-bag-luxury-crimson-red.webp"
                  alt="Crimson Luxury Shopping Carry Bag"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Crimson Luxury Carry Bag</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Heavyweight luxury carry bag in rich crimson with gold rope handles and gold foil stamped emblem.
                </p>
              </div>
            </div>

            {/* Gold Bag */}
            <div
              onClick={() => openLightboxByImageId("shopping-bag-champagne-gold-luxury")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/shopping-bags/shopping-bag-champagne-gold-luxury.webp"
                  alt="Champagne Gold Luxury Carry Bag"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Champagne Gold Luxury Bag</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Secondary shopping bag concept in warm champagne ivory with crimson branding and woven handles.
                </p>
              </div>
            </div>

            {/* Side Gusset */}
            <div
              onClick={() => openLightboxByImageId("shopping-bag-side-perspective-gusset")}
              className="p-5 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/shopping-bags/shopping-bag-side-perspective-gusset.webp"
                  alt="Carry Bag Gusset & Tactile Finish"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="500px"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-white">Gusset & Structural Finish</h4>
                <p className="font-sans text-xs text-white/60 leading-relaxed mt-1">
                  Perspective detail showing side gusset repeat pattern, reinforced base, and premium matte laminate finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 09: STAFF BRANDING & HOSPITALITY ATTIRE
            ========================================================================= */}
        <section id="chapter-09" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 09
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                STAFF BRANDING & IDENTIFICATION
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Professional retail attire and staff identification systems reflecting warm hospitality and luxury fashion service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Uniforms */}
            <div
              onClick={() => openLightboxByImageId("staff-uniforms-manager-and-general")}
              className="p-6 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold uppercase tracking-widest">
                  HOSPITALITY UNIFORMS
                </span>
                <span className="font-mono text-[10px] text-white/40">MANAGER & GENERAL STAFF</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/staff-branding/staff-uniforms-manager-and-general.webp"
                  alt="Staff Uniforms Manager and General"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Tailored formal attire: crisp manager-level suiting paired with refined retail associates' uniforms
                featuring discreet embroidered chest insignias.
              </p>
            </div>

            {/* Badges */}
            <div
              onClick={() => openLightboxByImageId("staff-identification-badges")}
              className="p-6 bg-white/5 border border-white/15 rounded-lg space-y-4 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#C92028] font-bold uppercase tracking-widest">
                  IDENTIFICATION BADGE SYSTEM
                </span>
                <span className="font-mono text-[10px] text-white/40">TIERED ROLES</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/staff-branding/staff-identification-badges.webp"
                  alt="Staff Identification Badges"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="600px"
                />
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Tiered metal identification badges designed for Senior Management, Senior Sales Representatives, and
                General Staff with magnetic backings.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 10: SOCIAL MEDIA CREATIVES & CORPORATE STATIONERY
            ========================================================================= */}
        <section id="chapter-10" className="space-y-10 scroll-mt-32">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 10
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                SOCIAL MEDIA & BUSINESS STATIONERY
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Omnichannel digital campaigns (4:5, 9:16, 16:9, 1:1) paired with executive correspondence stationery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 4:5 Feed Post */}
            <div
              onClick={() => openLightboxByImageId("social-creative-portrait-4x5")}
              className="md:col-span-4 p-5 bg-white/5 border border-white/15 rounded-lg space-y-3 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/social-media/social-creative-portrait-4x5.webp"
                  alt="Social Creative 4:5 Feed Portrait"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="400px"
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#C92028] font-bold">4:5 FEED CREATIVE</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* 9:16 Story Reel */}
            <div
              onClick={() => openLightboxByImageId("social-creative-story-9x16")}
              className="md:col-span-4 p-5 bg-white/5 border border-white/15 rounded-lg space-y-3 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/social-media/social-creative-story-9x16.webp"
                  alt="Social Creative 9:16 Story Reel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="400px"
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#F8E8CD] font-bold">9:16 STORY / REEL</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Stationery Suite */}
            <div
              onClick={() => openLightboxByImageId("stationery-corporate-suite-complete")}
              className="md:col-span-4 p-5 bg-white/5 border border-white/15 rounded-lg space-y-3 cursor-pointer group hover:border-[#C92028] transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded border border-white/10">
                <Image
                  src="/portfolio/dizzire/stationery/stationery-corporate-suite-complete.webp"
                  alt="Executive Correspondence Stationery Suite"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="400px"
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white font-bold">STATIONERY SUITE</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 11: MASTER GUIDELINES ARCHIVE (ALL 31 ARTBOARDS)
            ========================================================================= */}
        <section id="chapter-11" className="space-y-10 scroll-mt-32 border-t border-white/10 pt-16">
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#C92028] font-bold tracking-[0.25em] uppercase block mb-1">
                // CHAPTER 11
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-normal">
                MASTER GUIDELINES & EXPLORATION ARCHIVE
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Complete uncropped high-resolution reproductions of all 11 Brand Guideline pages and all 20 Logo Option artboards.
            </p>
          </div>

          {/* Grid of Artboard Previews */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {DIZZIRE_IMAGES.filter((img) => img.category === "original-compositions").map((item) => (
              <div
                key={item.id}
                onClick={() => openLightboxByImageId(item.id)}
                className="group relative aspect-[3/4] overflow-hidden rounded border border-white/15 bg-white/5 hover:border-[#C92028] transition-all cursor-pointer shadow-md"
              >
                <Image
                  src={item.thumbnail || item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-white/80 line-clamp-2 leading-tight">
                  <span className="text-[#C92028] block font-bold text-[9px] uppercase">
                    {item.sourcePdf?.includes("LOGO") ? "LOGO OPTION" : "GUIDELINE"}
                  </span>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal Component */}
      <DizzireLightbox
        images={DIZZIRE_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      <Footer />
    </div>
  );
}
