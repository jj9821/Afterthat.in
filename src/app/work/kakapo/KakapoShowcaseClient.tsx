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
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { sound } from "@/utils/sound";
import KakapoLightbox, { KakapoImageItem } from "./KakapoLightbox";

export const KAKAPO_IMAGES: KakapoImageItem[] = [
  // CHAPTER 02: HERO & EDITORIAL (Cover first)
  {
    id: "hero-green-editorial",
    src: "/portfolio/kakapo/hero-green-editorial.webp",
    alt: "KAKAPO Editorial Model on Botanical Green Background",
    title: "Botanical Streetwear Study",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Female editorial model on vibrant botanical green background, wearing oversized streetwear with relaxed, effortless posture.",
  },
  {
    id: "editorial-white-streetwear",
    src: "/portfolio/kakapo/editorial-white-streetwear.webp",
    alt: "Relaxed White Streetwear Set Model",
    title: "Relaxed Monochromatic Streetwear",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Male model in relaxed heavyweight white t-shirt and matching knee-length shorts against stark monochromatic studio backdrop.",
  },
  {
    id: "editorial-bw-model",
    src: "/portfolio/kakapo/editorial-bw-model.webp",
    alt: "Black & White Studio Fashion Editorial",
    title: "Studio Editorial Portrait",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "High-contrast black-and-white fashion portrait with windblown hair, embodying underground edge and effortless attitude.",
  },
  {
    id: "crop-model-leather-trench",
    src: "/portfolio/kakapo/crop-model-leather-trench.webp",
    alt: "Leather Trench Coat & Sunglasses Editorial",
    title: "Leather Trench Detail Portrait",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Close portrait in dark sunglasses and high-collar leather coat showcasing outerwear proportion and tailored street styling.",
  },
  {
    id: "editorial-trench-shopping-bag",
    src: "/portfolio/kakapo/editorial-trench-shopping-bag.webp",
    alt: "Model with Minimalist Retail Bag in Trench Coat",
    title: "Outerwear & Carrier Concept",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Model styled in structured black leather trench coat holding minimal oversized retail carrier bag with perched bird monogram.",
  },
  {
    id: "editorial-black-turtleneck-monogram",
    src: "/portfolio/kakapo/editorial-black-turtleneck-monogram.webp",
    alt: "Turtleneck & Leather Trousers with Giant KK Monogram",
    title: "Oversized KK Monogram Study",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Full-length styling in fine-gauge turtleneck and leather trousers with oversized graphic monogram architectural backdrop.",
  },
  {
    id: "editorial-green-model-backprint",
    src: "/portfolio/kakapo/editorial-green-model-backprint.webp",
    alt: "Oversized Tee Back Print on Botanical Background",
    title: "Oversized Tee Back Print",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Male model from behind in heavyweight drop-shoulder white tee with expansive typographic print against rich green backdrop.",
  },
  {
    id: "editorial-navy-sweatshirt",
    src: "/portfolio/kakapo/editorial-navy-sweatshirt.webp",
    alt: "Navy Crewneck Oversized Fleece Sweatshirt",
    title: "Heavyweight Crewneck Silhouette",
    chapter: "02. FASHION & EDITORIAL",
    caption:
      "Model in relaxed navy fleece crewneck demonstrating boxy street proportions, clean wrist ribbing and understated detailing.",
  },

  // CHAPTER 01: LOGO EXPLORATIONS
  {
    id: "logo-brush-feather-casual",
    src: "/portfolio/kakapo/logo-brush-feather-casual.webp",
    alt: "Raw Brush Feather Lettering Logo",
    title: "Raw Brush Feather Lettering",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Dynamic hand-drawn feather stroke treatment evoking organic motion, plumage texture and raw underground streetwear attitude.",
  },
  {
    id: "logo-bird-flight-white",
    src: "/portfolio/kakapo/logo-bird-flight-white.webp",
    alt: "Minimalist Bird in Flight Logo Light Treatment",
    title: "Bird in Flight Silhouette (Light)",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Aerodynamic silhouette mark on pure white background capturing weightless flight, kinetic momentum and minimalist form.",
  },
  {
    id: "logo-bird-flight-dark",
    src: "/portfolio/kakapo/logo-bird-flight-dark.webp",
    alt: "Minimalist Bird in Flight Logo Dark Treatment",
    title: "Bird in Flight Silhouette (Dark)",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Inverted minimalist bird in flight rendered against deep obsidian black with crisp optical geometry.",
  },
  {
    id: "logo-stacked-typo-white",
    src: "/portfolio/kakapo/logo-stacked-typo-white.webp",
    alt: "Stacked Lowercase Wordmark Light",
    title: "Stacked Lowercase Wordmark (Light)",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Modern editorial typographic lockup (kaka po. CLOTHINGS) on white field, highlighting geometric spacing and rhythm.",
  },
  {
    id: "logo-stacked-typo-dark",
    src: "/portfolio/kakapo/logo-stacked-typo-dark.webp",
    alt: "Stacked Lowercase Wordmark Dark",
    title: "Stacked Lowercase Wordmark (Dark)",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Inverted stacked typographic wordmark against solid obsidian background for understated high-fashion application.",
  },
  {
    id: "editorial-page3-construction",
    src: "/portfolio/kakapo/editorial-page3-construction.webp",
    alt: "Logo Construction & Anatomical Placard",
    title: "Symbol Construction & Anatomy",
    chapter: "01. LOGO EXPLORATIONS",
    caption:
      "Exploratory breakdown analyzing the convergence of feather texture, facial silhouette and letterform rhythm.",
  },

  // CHAPTER 03: TYPOGRAPHY & COLOUR
  {
    id: "design-typography-colour-board",
    src: "/portfolio/kakapo/design-typography-colour-board.webp",
    alt: "Comprehensive Typography & Colour Architecture Board",
    title: "Typography & Colour Board",
    chapter: "03. TYPOGRAPHY & COLOUR",
    caption:
      "Comprehensive brand board pairing NORD headlines with Neue Kaine body copy across the 7 botanical hex shades.",
  },
  {
    id: "design-brand-cards-pattern",
    src: "/portfolio/kakapo/design-brand-cards-pattern.webp",
    alt: "Modular Pattern Architecture Cards",
    title: "Brand Pattern & Tonal Cards",
    chapter: "03. TYPOGRAPHY & COLOUR",
    caption:
      "Modular pattern architecture and lifestyle values: COMFORT, CASUAL, CLOTHING, STYLE across tonal green and black cards.",
  },
  {
    id: "texture-cotton-weave",
    src: "/portfolio/kakapo/texture-cotton-weave.webp",
    alt: "320 GSM Organic Cotton Weave Texture",
    title: "Heavyweight Cotton Knit Macro",
    chapter: "03. TYPOGRAPHY & COLOUR",
    caption:
      "Tactile weave inspection of 320 GSM combed organic cotton showcasing structural durability and premium drape.",
  },
  {
    id: "texture-floating-silk",
    src: "/portfolio/kakapo/texture-floating-silk.webp",
    alt: "Fluid Flowing Silk Fabric Macro",
    title: "Fluid Silk Fabric Macro",
    chapter: "03. TYPOGRAPHY & COLOUR",
    caption:
      "Organic fluid movement demonstrating lightweight breathability and tonal light play across garment surfaces.",
  },

  // CHAPTER 04: CLOTHING & APPLICATIONS
  {
    id: "crop-lightbox-signage",
    src: "/portfolio/kakapo/crop-lightbox-signage.webp",
    alt: "Outdoor Illuminated Lightbox Store Signage",
    title: "Storefront Illuminated Signage",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Architectural outdoor lightbox signage with backlit brandmark and tactile street texture for retail environments.",
  },
  {
    id: "crop-black-hoodie-mockup",
    src: "/portfolio/kakapo/crop-black-hoodie-mockup.webp",
    alt: "Heavyweight Black Streetwear Hoodie Mockup",
    title: "Heavyweight Streetwear Hoodie",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "450 GSM French terry black hoodie featuring high-density chest embroidery and relaxed dropped-shoulder cut.",
  },
  {
    id: "application-signage-hoodie",
    src: "/portfolio/kakapo/application-signage-hoodie.webp",
    alt: "Signage & Apparel Presentation Board",
    title: "Signage & Apparel Presentation Board",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Integrated identity presentation juxtaposing exterior retail signage against premium hoodie garment application.",
  },
  {
    id: "application-woven-hem-label",
    src: "/portfolio/kakapo/application-woven-hem-label.webp",
    alt: "Woven Damask Hem Label on Garment",
    title: "Woven Damask Hem Label",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Ultra-high-definition woven damask label folded at garment hem with tonal black-on-black precision stitching.",
  },
  {
    id: "application-folded-tee-hangtag",
    src: "/portfolio/kakapo/application-folded-tee-hangtag.webp",
    alt: "Folded White T-shirt with Swing Tag",
    title: "Folded Tee with Garment Hangtag",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Heavy-card swing tag attached with cotton wax cord alongside bespoke interior collar branding and sizing stamp.",
  },
  {
    id: "crop-bag-kk-monogram",
    src: "/portfolio/kakapo/crop-bag-kk-monogram.webp",
    alt: "Minimalist Retail Carrier Bag with Monogram",
    title: "Minimalist Monogram Carrier Bag",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Uncoated FSC-certified retail kraft carrier featuring perched bird monogram with twisted rope handle.",
  },
  {
    id: "application-shopping-bag-comfort",
    src: "/portfolio/kakapo/application-shopping-bag-comfort.webp",
    alt: "COMFORT Pattern Embossed Shopping Bag",
    title: "COMFORT Pattern Shopping Bag",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Secondary carrier exploration with embossed typographic word repeat and structured reinforced gusset.",
  },
  {
    id: "application-care-wash-tags",
    src: "/portfolio/kakapo/application-care-wash-tags.webp",
    alt: "Garment Care Wash & Fabric Tags",
    title: "Garment Care & Wash Documentation",
    chapter: "04. CLOTHING & APPLICATIONS",
    caption:
      "Interior satin care label system with international laundry iconography, fiber composition and craft manifesto.",
  },
];

const CHAPTERS = [
  { id: "chapter-01", label: "01. LOGO", title: "Logo Explorations", count: 6 },
  { id: "chapter-02", label: "02. FASHION", title: "Fashion & Editorial", count: 8 },
  { id: "chapter-03", label: "03. TYPOGRAPHY & COLOUR", title: "Typography & Colour", count: 4 },
  { id: "chapter-04", label: "04. APPLICATIONS", title: "Clothing & Applications", count: 7 },
  { id: "chapter-05", label: "05. ALTERNATIVES", title: "Alternative Directions", count: 6 },
];

const PALETTE = [
  { name: "Pure White", hex: "#FFFFFF", darkText: true, role: "Primary Canvas / Inversion" },
  { name: "Deep Obsidian", hex: "#231F20", darkText: false, role: "Core Dark & Base Contrast" },
  { name: "Forest Deep", hex: "#2C4F24", darkText: false, role: "Botanical Foundation" },
  { name: "Kakapo Pine", hex: "#387639", darkText: false, role: "Mid-Tone Foliage Accent" },
  { name: "Vivid Foliage", hex: "#6AA84F", darkText: false, role: "High-Energy Accent Green" },
  { name: "Sage Moss", hex: "#93C47E", darkText: true, role: "Soft Intermediate Tint" },
  { name: "Celadon Mint", hex: "#DAEBD4", darkText: true, role: "Tonal Ground & Soft Mint" },
];

const ALTERNATIVES = [
  {
    number: "01",
    title: "Perched Bird & Architectural Monogram",
    concept: "Architectural structure meets avian character",
    vibe: "Street-ready, geometric, recognizable at icon scale",
    applications: "Fleece embroidery, engraved metal zippers, retail signage",
    image: "/portfolio/kakapo/crop-bag-kk-monogram.webp",
    imageId: "crop-bag-kk-monogram",
  },
  {
    number: "02",
    title: "Raw Brush Feather Lettering",
    concept: "Expressive handwritten stroke with organic feather texture",
    vibe: "Underground attitude, raw energy, skate and festival culture",
    applications: "Screenprinted back pieces, oversized drop-shoulder t-shirts",
    image: "/portfolio/kakapo/logo-brush-feather-casual.webp",
    imageId: "logo-brush-feather-casual",
  },
  {
    number: "03",
    title: "Bird in Flight Silhouette",
    concept: "Streamlined aerodynamic contour in weightless motion",
    vibe: "Minimalist, forward-moving, athletic crossover appeal",
    applications: "Reflective prints, technical nylon outerwear, caps",
    image: "/portfolio/kakapo/logo-bird-flight-white.webp",
    imageId: "logo-bird-flight-white",
  },
  {
    number: "04",
    title: "Stacked Lowercase Wordmark",
    concept: "Modular editorial typesetting: 'ka ka po. CLOTHINGS'",
    vibe: "Contemporary European editorial, understated quiet luxury",
    applications: "Care wash tags, woven hem labels, lookbook typography",
    image: "/portfolio/kakapo/logo-stacked-typo-dark.webp",
    imageId: "logo-stacked-typo-dark",
  },
  {
    number: "05",
    title: "High-Impact Oversized Monogram",
    concept: "Bold graphic statement dominating garment architecture",
    vibe: "High-fashion streetwear, maximalist silhouette presence",
    applications: "Leather outerwear, knit jacquard patterns, shopping bags",
    image: "/portfolio/kakapo/editorial-black-turtleneck-monogram.webp",
    imageId: "editorial-black-turtleneck-monogram",
  },
  {
    number: "06",
    title: "Tonal Botanical & Tactile Fabric System",
    concept: "Harmonizing seven nature-derived tones with organic fibers",
    vibe: "Earth-conscious, durable, sophisticated material depth",
    applications: "Garment dye lots, woven cotton tagging, tactile packaging",
    image: "/portfolio/kakapo/texture-cotton-weave.webp",
    imageId: "texture-cotton-weave",
  },
];

export default function KakapoShowcaseClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>("chapter-01");

  const openLightboxByImageId = (id: string) => {
    sound.playClick();
    const idx = KAKAPO_IMAGES.findIndex((img) => img.id === id);
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
      const scrollPos = window.scrollY + 200;
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
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      {/* Top Breadcrumb & Metadata Navigation */}
      <section className="pt-24 sm:pt-28 md:pt-32 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A]">
        <div className="max-w-[1720px] mx-auto pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/#work"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-[#F20D18] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#F20D18]" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] text-white/50">
            <span className="text-[#6AA84F] font-bold">CLIENT: KAKAPO</span>
            <span className="text-white/20">/</span>
            <span>YEAR: 2024</span>
            <span className="text-white/20">/</span>
            <span className="text-white/80 uppercase">BRANDING / FASHION / CREATIVE DESIGN</span>
            <span className="text-white/20">/</span>
            <span className="px-2 py-0.5 bg-[#2C4F24] text-white font-bold text-[10px] uppercase border border-[#6AA84F]/40">
              EXPLORATORY SHOWCASE
            </span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full py-12 md:py-20 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0e120f] to-[#0A0A0A]">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

        <div className="max-w-[1720px] mx-auto relative z-10 space-y-10 md:space-y-16">
          {/* Main Title Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// PROJECT SHOWCASE</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">
                  ESTD. 2024 · CONTEMPORARY STREETWEAR
                </span>
              </div>

              <h1 className="font-anton text-5xl sm:text-7xl md:text-9xl tracking-tight uppercase text-white leading-[0.9]">
                KAKAPO<span className="text-[#6AA84F]">.</span>
              </h1>

              <div className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white/90">
                A STUDY IN <span className="text-[#6AA84F]">CREATIVE EXPRESSION.</span>
              </div>

              <p className="font-mono text-sm sm:text-base text-[#DAEBD4] font-medium tracking-wide pt-2">
                EXPLORING IDENTITY THROUGH FORM, FASHION AND VISUAL EXPRESSION.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <p className="font-space text-sm sm:text-base text-white/70 leading-relaxed">
                A collection of visual explorations for KAKAPO, bringing together distinctive logo
                concepts, typography, fashion imagery, colour, clothing applications and packaging.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    DISCIPLINE
                  </span>
                  <span className="text-white font-bold">Branding / Fashion</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    FORMAT
                  </span>
                  <span className="text-white font-bold">Visual Study & Identity</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    PALETTE
                  </span>
                  <span className="text-[#6AA84F] font-bold">Botanical & Obsidian</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                    CURATED ASSETS
                  </span>
                  <span className="text-white font-bold">26 Visual Works</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Hero Showcase Banner */}
          <div
            onClick={() => openLightboxByImageId("hero-green-editorial")}
            data-cursor="EXPAND"
            className="group relative w-full aspect-[16/9] md:aspect-[21/9] bg-black border border-[#2C4F24]/50 hover:border-[#6AA84F] transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_0_50px_rgba(44,79,36,0.2)]"
          >
            <Image
              src="/portfolio/kakapo/hero-green-editorial.webp"
              alt="KAKAPO Streetwear Editorial Feature"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1720px) 100vw, 1720px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Corner Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="px-3 py-1 bg-black/90 font-mono text-[10px] sm:text-xs text-[#6AA84F] font-bold uppercase tracking-widest border border-[#6AA84F]/40 backdrop-blur-md">
                FEATURED EDITORIAL
              </span>
              <span className="px-2.5 py-1 bg-[#2C4F24] text-white font-mono text-[10px] uppercase tracking-wider font-bold">
                VOL. 01
              </span>
            </div>

            {/* Expand Action Button */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#2C4F24] group-hover:border-[#6AA84F] group-hover:scale-110 transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Caption on Hero Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-widest block mb-1">
                  // VISUAL DIRECTION
                </span>
                <h2 className="font-anton text-2xl sm:text-4xl uppercase text-white tracking-wide">
                  BOTANICAL STREETWEAR STUDY
                </h2>
                <p className="font-mono text-xs text-white/70 max-w-xl hidden md:block">
                  Female editorial model in relaxed streetwear silhouette against vivid botanical green canvas.
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
                      ? "bg-[#2C4F24] border-[#6AA84F] text-white font-bold shadow-[0_0_15px_rgba(106,168,79,0.3)]"
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
            <span className="text-[#6AA84F] font-bold">26 ASSETS</span>
            <span>•</span>
            <span>LIGHTBOX ACTIVE</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          CHAPTER 01: LOGO EXPLORATIONS
      ========================================================================= */}
      <section
        id="chapter-01"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 01</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">IDENTITY ARCHITECTURE</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                LOGO <span className="text-[#6AA84F]">EXPLORATIONS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                FIVE DISTINCT TYPOGRAPHIC & SYMBOLIC ARCHITECTURES
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Rather than committing prematurely to a single route, the KAKAPO identity was explored
              across divergent typographic weights and symbolic treatments — examining how raw brush
              textures, minimalist silhouettes, stacked lowercase lockups and geometric monograms
              speak to contemporary youth culture.
            </p>
          </div>

          {/* Logo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 01: Raw Brush Feather Casual */}
            <div
              onClick={() => openLightboxByImageId("logo-brush-feather-casual")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    01. RAW BRUSH LETTERING
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">EXPRESSIVE</span>
                </div>
                <div className="relative aspect-[16/10] bg-black border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/logo-brush-feather-casual.webp"
                    alt="Raw Brush Feather Casual Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  KAKAPO CASUAL WEAR
                </h3>
                <p className="font-mono text-xs text-white/60">
                  Dynamic hand-drawn feather stroke treatment evoking organic motion and raw
                  underground streetwear attitude.
                </p>
              </div>
            </div>

            {/* Card 02: Bird in Flight Light & Dark Comparative */}
            <div
              onClick={() => openLightboxByImageId("logo-bird-flight-white")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    02. BIRD IN FLIGHT (LIGHT)
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">MINIMAL SILHOUETTE</span>
                </div>
                <div className="relative aspect-[16/10] bg-white border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/logo-bird-flight-white.webp"
                    alt="Bird in Flight Light Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  AERODYNAMIC SILHOUETTE
                </h3>
                <p className="font-mono text-xs text-white/60">
                  Minimalist contour capturing kinetic flight momentum, optimized for athletic
                  apparel and technical nylon surfaces.
                </p>
              </div>
            </div>

            {/* Card 03: Bird in Flight Dark */}
            <div
              onClick={() => openLightboxByImageId("logo-bird-flight-dark")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    03. BIRD IN FLIGHT (OBSIDIAN)
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">INVERSE OPTIC</span>
                </div>
                <div className="relative aspect-[16/10] bg-[#141414] border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/logo-bird-flight-dark.webp"
                    alt="Bird in Flight Dark Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  OBSIDIAN INVERSION
                </h3>
                <p className="font-mono text-xs text-white/60">
                  High-contrast inversion designed for dark fleece, tone-on-tone rubber patches and
                  screenprinted hoodies.
                </p>
              </div>
            </div>

            {/* Card 04: Stacked Lowercase White */}
            <div
              onClick={() => openLightboxByImageId("logo-stacked-typo-white")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    04. STACKED LOWERCASE (LIGHT)
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">EDITORIAL</span>
                </div>
                <div className="relative aspect-[16/10] bg-white border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/logo-stacked-typo-white.webp"
                    alt="Stacked Lowercase White Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  KAKA PO. CLOTHINGS
                </h3>
                <p className="font-mono text-xs text-white/60">
                  Deconstructed syllables arranged vertically to challenge conventional streetwear
                  typography with understated luxury cadence.
                </p>
              </div>
            </div>

            {/* Card 05: Stacked Lowercase Dark */}
            <div
              onClick={() => openLightboxByImageId("logo-stacked-typo-dark")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    05. STACKED LOWERCASE (DARK)
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">INVERTED</span>
                </div>
                <div className="relative aspect-[16/10] bg-[#141414] border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/logo-stacked-typo-dark.webp"
                    alt="Stacked Lowercase Dark Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  MONOCHROME CADENCE
                </h3>
                <p className="font-mono text-xs text-white/60">
                  Refined spacing designed for subtle neck tapes, woven hem labels and high-fashion
                  lookbook editorial dividers.
                </p>
              </div>
            </div>

            {/* Card 06: Anatomical Construction Placard */}
            <div
              onClick={() => openLightboxByImageId("editorial-page3-construction")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    06. SYMBOL DECONSTRUCTION
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">ANATOMY</span>
                </div>
                <div className="relative aspect-[16/10] bg-black border border-white/5 overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src="/portfolio/kakapo/editorial-page3-construction.webp"
                    alt="Logo Construction Placard"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  FEATHER + PROFILE + RHYTHM
                </h3>
                <p className="font-mono text-xs text-white/60">
                  Visual diagram detailing the synthesis of natural feather geometry, parrot
                  profile and structural typographic balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 02: FASHION & EDITORIAL
      ========================================================================= */}
      <section
        id="chapter-02"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 02</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">VISUAL STORYTELLING</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                FASHION & <span className="text-[#6AA84F]">EDITORIAL DIRECTION.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                FORM, ATTITUDE AND THE UNCONVENTIONAL SILHOUETTE
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Visual direction pairing relaxed, oversized streetwear proportions with uncompromising
              editorial styling. High-contrast monochromatic studio portraits contrast with vivid
              botanical green backdrops to balance raw street attitude against refined elegance.
            </p>
          </div>

          {/* Asymmetrical Fashion Magazine Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Big Feature: White Streetwear Set */}
            <div
              onClick={() => openLightboxByImageId("editorial-white-streetwear")}
              data-cursor="EXPAND"
              className="lg:col-span-7 group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full bg-black overflow-hidden">
                <Image
                  src="/portfolio/kakapo/editorial-white-streetwear.webp"
                  alt="Male Model in White Relaxed Streetwear"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/90 font-mono text-[10px] text-[#6AA84F] font-bold uppercase tracking-widest border border-white/10">
                    LOOK 01 · MONOCHROMATIC
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#2C4F24] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-anton text-2xl sm:text-3xl uppercase text-white">
                    RELAXED MONOCHROMATIC STREETWEAR
                  </h3>
                  <p className="font-mono text-xs text-white/70 mt-1">
                    Heavyweight 320 GSM drop-shoulder tee paired with structural knee shorts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Two Editorial Portraits */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Editorial Portrait B&W */}
              <div
                onClick={() => openLightboxByImageId("editorial-bw-model")}
                data-cursor="EXPAND"
                className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/11] w-full bg-black overflow-hidden">
                  <Image
                    src="/portfolio/kakapo/editorial-bw-model.webp"
                    alt="Black & White Studio Fashion Editorial"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-black/90 font-mono text-[10px] text-white/80 font-bold uppercase border border-white/10">
                      B&W STUDIO LIGHTING
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-anton text-xl uppercase text-white">
                      STUDIO EDITORIAL PORTRAIT
                    </h4>
                    <p className="font-mono text-xs text-white/60">
                      Windblown movement conveying raw attitude and individuality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trench Coat & Carrier Concept */}
              <div
                onClick={() => openLightboxByImageId("editorial-trench-shopping-bag")}
                data-cursor="EXPAND"
                className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/11] w-full bg-black overflow-hidden">
                  <Image
                    src="/portfolio/kakapo/editorial-trench-shopping-bag.webp"
                    alt="Trench Coat & Carrier Editorial"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-black/90 font-mono text-[10px] text-[#6AA84F] font-bold uppercase border border-white/10">
                      OUTERWEAR STYLING
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-anton text-xl uppercase text-white">
                      STRUCTURED LEATHER TRENCH & CARRIER
                    </h4>
                    <p className="font-mono text-xs text-white/60">
                      High-attitude tailoring merged with minimalist retail packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three-Column Editorial Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
            {/* Turtleneck & KK Monogram */}
            <div
              onClick={() => openLightboxByImageId("editorial-black-turtleneck-monogram")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/kakapo/editorial-black-turtleneck-monogram.webp"
                  alt="Turtleneck and Oversized KK Monogram"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="font-mono text-[10px] text-[#6AA84F] uppercase font-bold tracking-wider">
                  01 // MONOGRAM PRESENCE
                </span>
                <h4 className="font-anton text-lg uppercase text-white">
                  OVERSIZED KK MONOGRAM STUDY
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Full silhouette styling featuring giant monogram architectural installation.
                </p>
              </div>
            </div>

            {/* Green Tee Backprint */}
            <div
              onClick={() => openLightboxByImageId("editorial-green-model-backprint")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/kakapo/editorial-green-model-backprint.webp"
                  alt="Oversized Tee Back Print"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="font-mono text-[10px] text-[#6AA84F] uppercase font-bold tracking-wider">
                  02 // BACK PRINT PLACEMENT
                </span>
                <h4 className="font-anton text-lg uppercase text-white">
                  TYPOGRAPHIC BACK PRINT
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Expansive drop-shoulder back print showcasing street-level readability.
                </p>
              </div>
            </div>

            {/* Navy Sweatshirt */}
            <div
              onClick={() => openLightboxByImageId("editorial-navy-sweatshirt")}
              data-cursor="EXPAND"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src="/portfolio/kakapo/editorial-navy-sweatshirt.webp"
                  alt="Navy Crewneck Oversized Fleece"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="font-mono text-[10px] text-[#6AA84F] uppercase font-bold tracking-wider">
                  03 // FLEECE PROPORTIONS
                </span>
                <h4 className="font-anton text-lg uppercase text-white">
                  HEAVYWEIGHT CREWNECK SILHOUETTE
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Boxy crewneck fleece cut with reinforced ribbed collar and cuff hems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03: TYPOGRAPHY & COLOUR
      ========================================================================= */}
      <section
        id="chapter-03"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 03</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">DESIGN SYSTEM & MATERIALITY</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                TYPOGRAPHY & <span className="text-[#6AA84F]">COLOUR SYSTEM.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                BOTANICAL GREENS, ARCHITECTURAL OBSIDIAN AND SYSTEMATIC HIERARCHY
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Seven distinct tones inspired by plumage, flora and deep slate minerals compose the
              brand universe. Grounded by heavy organic cotton knit and fluid silk textures, the
              visual system pairs structured display geometry with clean neo-grotesque body types.
            </p>
          </div>

          {/* Interactive 7-Color Palette Swatch Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/50 uppercase tracking-wider flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[#6AA84F]" /> CLICK ANY SWATCH TO COPY HEX CODE
              </span>
              {copiedHex && (
                <span className="text-[#6AA84F] font-bold animate-pulse flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> COPIED {copiedHex} TO CLIPBOARD
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {PALETTE.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  data-cursor="COPY"
                  className="group relative p-4 rounded-none border border-white/10 hover:border-white transition-all text-left flex flex-col justify-between min-h-[140px] shadow-lg"
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
                      className={`font-mono text-sm font-black block tracking-widest ${
                        c.darkText ? "text-black" : "text-white"
                      }`}
                    >
                      {c.hex}
                    </span>
                    <span
                      className={`font-mono text-[9px] uppercase tracking-wider block opacity-70 ${
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

          {/* Typography Specimen & Tactile Fabric Inspection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Typography Hierarchy Specimen */}
            <div className="lg:col-span-6 bg-[#0e0e0e] border border-white/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    TYPOGRAPHIC SPECIMEN
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">
                    HEADLINE & BODY HIERARCHY
                  </span>
                </div>

                <div className="space-y-6 pt-2">
                  <div className="border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                      PRIMARY DISPLAY // NORD
                    </span>
                    <div className="font-anton text-4xl sm:text-5xl uppercase tracking-wider text-white">
                      KAKAPO STREETWEAR 2024
                    </div>
                    <p className="font-mono text-xs text-white/60 mt-1">
                      High-impact geometric sans-serif engineered for hero statements, billboards and
                      apparel back prints.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                      SECONDARY EDITORIAL // NEUE KAINE
                    </span>
                    <p className="font-space text-sm sm:text-base text-white/80 leading-relaxed">
                      Neue Kaine delivers surgical precision and quiet elegance across lookbook
                      editorial body text, garment care labels, packaging disclosures and digital
                      interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Click to open full Typography Board in Lightbox */}
              <div
                onClick={() => openLightboxByImageId("design-typography-colour-board")}
                data-cursor="INSPECT"
                className="group relative aspect-[16/9] w-full bg-black border border-white/10 hover:border-[#6AA84F] overflow-hidden cursor-pointer"
              >
                <Image
                  src="/portfolio/kakapo/design-typography-colour-board.webp"
                  alt="Typography & Colour Board"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] text-white">
                  <span className="bg-black/80 px-2 py-0.5 border border-white/15">
                    VIEW COMPLETE SPECIMEN BOARD
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#6AA84F]" />
                </div>
              </div>
            </div>

            {/* Right: Tactile Fabric Textures & Pattern Board */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pattern Board Card */}
              <div
                onClick={() => openLightboxByImageId("design-brand-cards-pattern")}
                data-cursor="INSPECT"
                className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-3 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                    PATTERN ARCHITECTURE
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase">03. PATTERN</span>
                </div>
                <div className="relative aspect-[16/9] w-full bg-black border border-white/5 overflow-hidden">
                  <Image
                    src="/portfolio/kakapo/design-brand-cards-pattern.webp"
                    alt="Brand Pattern and Value Cards"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-mono text-xs text-white/60">
                  COMFORT · CASUAL · CLOTHING · STYLE modular pattern tiles across botanical greens.
                </p>
              </div>

              {/* Two Macro Fabric Swatches */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightboxByImageId("texture-cotton-weave")}
                  data-cursor="INSPECT"
                  className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-4 space-y-3 cursor-pointer transition-all"
                >
                  <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                    <Image
                      src="/portfolio/kakapo/texture-cotton-weave.webp"
                      alt="Organic Heavyweight Cotton Knit Macro"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h5 className="font-anton text-sm uppercase text-white">320 GSM COTTON WEAVE</h5>
                    <p className="font-mono text-[11px] text-white/50">
                      Dense organic fiber structure providing natural thermal retention.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => openLightboxByImageId("texture-floating-silk")}
                  data-cursor="INSPECT"
                  className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-4 space-y-3 cursor-pointer transition-all"
                >
                  <div className="relative aspect-[4/3] bg-black overflow-hidden border border-white/5">
                    <Image
                      src="/portfolio/kakapo/texture-floating-silk.webp"
                      alt="Fluid Flowing Silk Macro"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h5 className="font-anton text-sm uppercase text-white">ORGANIC FLUID SILK</h5>
                    <p className="font-mono text-[11px] text-white/50">
                      Featherweight fluid drape with subtle botanical sheen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 04: CLOTHING & APPLICATIONS
      ========================================================================= */}
      <section
        id="chapter-04"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 04</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">PHYSICAL TOUCHPOINTS</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                CLOTHING & <span className="text-[#6AA84F]">APPLICATIONS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                TACTILE EXECUTION ACROSS APPAREL, SIGNAGE AND PACKAGING
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Exploring how the visual language translates into physical form — from illuminated
              retail storefronts and heavy cotton hoodies to woven hem labels, swing tags, minimalist
              carriers and care documentation.
            </p>
          </div>

          {/* Applications 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 01: Lightbox Storefront Signage */}
            <div
              onClick={() => openLightboxByImageId("crop-lightbox-signage")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  01. STOREFRONT LIGHTBOX
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">RETAIL EXTERIOR</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/crop-lightbox-signage.webp"
                  alt="Storefront Lightbox Signage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  ILLUMINATED LIGHTBOX SIGNAGE
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Architectural outdoor lightbox with backlit perched bird monogram on dark steel facade.
                </p>
              </div>
            </div>

            {/* 02: Heavyweight Black Hoodie */}
            <div
              onClick={() => openLightboxByImageId("crop-black-hoodie-mockup")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  02. STREETWEAR HOODIE
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">APPAREL MOCKUP</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/crop-black-hoodie-mockup.webp"
                  alt="Heavyweight Black Hoodie Mockup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  450 GSM FRENCH TERRY HOODIE
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Chest placement embroidery with dropped shoulders and double-lined hood structure.
                </p>
              </div>
            </div>

            {/* 03: Woven Damask Hem Label */}
            <div
              onClick={() => openLightboxByImageId("application-woven-hem-label")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  03. WOVEN HEM LABEL
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">GARMENT DETAIL</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/application-woven-hem-label.webp"
                  alt="Woven Damask Hem Label"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  WOVEN DAMASK HEM LABEL
                </h4>
                <p className="font-mono text-xs text-white/60">
                  High-density damask weave label folded over t-shirt hem with tone-on-tone stitch.
                </p>
              </div>
            </div>

            {/* 04: Folded Tee with Swing Tag */}
            <div
              onClick={() => openLightboxByImageId("application-folded-tee-hangtag")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  04. SWING TAG & PACKAGING
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">COLLATERAL</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/application-folded-tee-hangtag.webp"
                  alt="Folded Tee with Garment Hangtag"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  COTTON WAX CORD HANGTAG
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Uncoated cotton card tag with debossed monogram attached via organic wax cord.
                </p>
              </div>
            </div>

            {/* 05: Monogram Kraft Retail Bag */}
            <div
              onClick={() => openLightboxByImageId("crop-bag-kk-monogram")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  05. RETAIL SHOPPING BAG
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">PACKAGING</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/crop-bag-kk-monogram.webp"
                  alt="Minimalist Retail Carrier Bag"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  MONOGRAM FSC KRAFT CARRIER
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Heavyweight FSC kraft paper carrier featuring centered perched bird monogram.
                </p>
              </div>
            </div>

            {/* 06: Garment Care & Wash Tags */}
            <div
              onClick={() => openLightboxByImageId("application-care-wash-tags")}
              data-cursor="INSPECT"
              className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] p-6 space-y-4 cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                  06. CARE & WASH LABELS
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase">DOCUMENTATION</span>
              </div>
              <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                <Image
                  src="/portfolio/kakapo/application-care-wash-tags.webp"
                  alt="Garment Care & Wash Documentation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-anton text-lg uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                  SATIN INTERIOR CARE TAGS
                </h4>
                <p className="font-mono text-xs text-white/60">
                  Comprehensive laundry symbols, fabric blend disclosure and brand manifesto copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 05: ALTERNATIVE DIRECTIONS
      ========================================================================= */}
      <section
        id="chapter-05"
        className="py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#0A0A0A] relative"
      >
        <div className="max-w-[1720px] mx-auto space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6AA84F] font-bold tracking-[0.3em] uppercase">
                <span>// CHAPTER 05</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 tracking-widest">EXPLORATORY ARCHIVE</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                ALTERNATIVE <span className="text-[#6AA84F]">DIRECTIONS.</span>
              </h2>
              <div className="font-anton text-xl sm:text-3xl text-white/70 uppercase tracking-wide">
                A COMPARATIVE ARCHIVE OF 6 DESIGN PATHWAYS
              </div>
            </div>

            <p className="max-w-lg font-space text-xs sm:text-sm text-white/70 leading-relaxed">
              Every strong brand emerges from thorough exploration. Below are six distinct design
              pathways developed during the creative investigation for KAKAPO, each articulating a
              unique balance of energy, minimalism and street presence.
            </p>
          </div>

          {/* Important Editorial Curation Note */}
          <div className="p-6 sm:p-8 bg-[#0f1410] border border-[#2C4F24] flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-none bg-[#2C4F24] text-[#DAEBD4] flex items-center justify-center shrink-0 border border-[#6AA84F]/40">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider block">
                CURATORIAL NOTE: CREATIVE EXPLORATIONS
              </span>
              <p className="font-space text-xs sm:text-sm text-white/80 leading-relaxed">
                The concepts presented below represent design explorations and stylistic options
                investigated during the branding process. They are presented side-by-side to showcase
                the breadth of creative possibilities, form experimentation and typographic
                thinking without selecting an approved final mark.
              </p>
            </div>
          </div>

          {/* 6 Comparative Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ALTERNATIVES.map((alt) => (
              <div
                key={alt.number}
                onClick={() => openLightboxByImageId(alt.imageId)}
                data-cursor="EXPLORE"
                className="group bg-[#0e0e0e] border border-white/10 hover:border-[#6AA84F] transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs text-[#6AA84F] font-bold uppercase tracking-wider">
                      PATHWAY {alt.number}
                    </span>
                    <span className="font-mono text-[10px] text-white/40 uppercase">CONCEPT</span>
                  </div>

                  <div className="relative aspect-[16/10] bg-black overflow-hidden border border-white/5">
                    <Image
                      src={alt.image}
                      alt={alt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-anton text-xl uppercase text-white group-hover:text-[#6AA84F] transition-colors">
                      {alt.title}
                    </h4>
                    <p className="font-space text-xs text-white/70 italic">&ldquo;{alt.concept}&rdquo;</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-[11px]">
                  <div>
                    <span className="text-white/40 uppercase block text-[9px]">AESTHETIC VIBE:</span>
                    <span className="text-white/90">{alt.vibe}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[9px]">KEY APPLICATIONS:</span>
                    <span className="text-[#DAEBD4]">{alt.applications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION & NEXT NAVIGATION */}
      <section className="py-20 px-5 sm:px-8 md:px-12 bg-[#0c0c0c] border-b border-white/10">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-mono text-xs text-[#6AA84F] font-bold tracking-widest uppercase">
              // READY TO BUILD YOUR BRAND IDENTITY?
            </span>
            <h3 className="font-anton text-3xl sm:text-5xl uppercase text-white">
              LET&apos;S CREATE SOMETHING <span className="text-[#6AA84F]">UNMISTAKABLE.</span>
            </h3>
            <p className="font-space text-sm text-white/60 max-w-xl">
              From creative direction and brand identities to full-scale digital experiences and AI
              production, AFTER THAT transforms vision into cultural impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              onClick={() => sound.playClick()}
              className="px-8 py-4 bg-[#2C4F24] hover:bg-[#6AA84F] text-white font-anton text-base tracking-wider uppercase transition-colors shadow-[0_0_20px_rgba(44,79,36,0.5)]"
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
      <KakapoLightbox
        images={KAKAPO_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
