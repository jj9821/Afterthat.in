"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowRight, Play, Disc, ChevronDown } from "lucide-react";
import Image from "next/image";
import { sound } from "@/utils/sound";
import { COMPANY_INFO } from "@/data/company";
import MagneticButton from "@/components/motion/MagneticButton";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

interface HeroProps {
  onOpenProject?: (id: string) => void;
}

export default function Hero({ onOpenProject }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgParallaxX = useTransform(smoothMouseX, [-800, 800], [-35, 35]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], [-25, 25]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Letter arrays for staggered entrance
  const lettersAfter = ["A", "F", "T", "E", "R"];
  const lettersThat = ["T", "H", "A", "T"];

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between pt-28 md:pt-32 pb-8 px-5 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Background Architectural Noise & Mouse Parallax Light */}
      <motion.div
        style={{ x: bgParallaxX, y: bgParallaxY }}
        className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-[#ff2020]/20 via-[#ff2020]/5 to-transparent rounded-full blur-[120px] pointer-events-none"
      />

      <div className="absolute inset-0 subtle-grid opacity-25 pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-[1720px] mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[11px] text-[#888888]">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 bg-[#ff2020] text-black font-extrabold tracking-widest text-[10px] animate-pulse">
            MANIFESTO 2024–2026
          </span>
          <ScrambleText
            text="CULTURAL PRODUCTION & AD FILMS"
            className="text-white/60 tracking-wider"
          />
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-white/50 tracking-wider">
            COORDINATES: {COMPANY_INFO.headquarters.coordinates}
          </span>
          <span className="text-[#ff2020] font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2020] animate-ping" />
            KERALA • SOUTH ASIA
          </span>
        </div>
      </div>

      {/* Main Typographic Explosion */}
      <div className="relative z-10 max-w-[1720px] mx-auto w-full my-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Massive Architectural Type with Character-by-Character Stagger */}
          <div className="lg:col-span-8 space-y-2">
            {/* Tagline kicker */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 36 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[2px] bg-[#ff2020]"
              />
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] text-[#ff2020] uppercase">
                {COMPANY_INFO.legalName}
              </span>
            </div>

            {/* Giant Architectural Word 1: AFTER (Staggered character reveal) */}
            <div className="overflow-hidden flex items-baseline">
              <h1 className="font-anton text-7xl sm:text-9xl md:text-[14vw] lg:text-[13vw] leading-[0.8] tracking-tighter uppercase select-none text-white flex">
                {lettersAfter.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "110%", rotateZ: 4 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.05 * index,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block hover:text-[#ff2020] transition-colors duration-200"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Giant Architectural Word 2: THAT. with Electric Red Contrast */}
            <div className="overflow-hidden flex items-baseline gap-4 md:gap-8 flex-wrap">
              <h1 className="font-anton text-7xl sm:text-9xl md:text-[14vw] lg:text-[13vw] leading-[0.8] tracking-tighter uppercase select-none text-[#ff2020] flex">
                {lettersThat.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "110%", rotateZ: -4 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.25 + 0.06 * index,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block hover:text-white transition-colors duration-200"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
                  className="text-white inline-block"
                >
                  .
                </motion.span>
              </h1>

              {/* Subtitle badge with kinetic border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hidden xl:inline-block font-mono text-xs text-white/90 bg-white/5 border border-white/20 px-3.5 py-2 uppercase tracking-widest backdrop-blur-sm self-center shadow-[0_0_15px_rgba(255,32,32,0.15)]"
              >
                <ScrambleText text="WHAT HAPPENS NEXT CHANGES EVERYTHING" />
              </motion.div>
            </div>

            {/* Kinetic statement paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-syne text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-2xl pt-4 leading-snug"
            >
              We engineer commercial ad films, underground hip-hop festival IPs, and cultural shockwaves.
            </motion.p>
          </div>

          {/* Right Column: 3D Tilt Card & Floating Visual Showcase */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <TiltCard
              intensity={12}
              glare={true}
              onClick={() =>
                onOpenProject && onOpenProject("pulse-of-the-underground")
              }
              dataCursor="PULSE FESTIVAL"
              className="bg-[#111111] border border-white/15 p-4 sm:p-5 hover:border-[#ff2020] transition-colors duration-300 shadow-2xl cursor-pointer group"
            >
              {/* Media Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black mb-4 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
                  alt="Pulse of the Underground Festival"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Live Reel Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#ff2020] animate-ping" />
                  <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">
                    FEATURED IP
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#ff2020] text-black flex items-center justify-center group-hover:scale-115 transition-transform shadow-[0_0_20px_#ff2020]">
                  <Play className="w-4 h-4 fill-black" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#ff2020] font-bold tracking-widest uppercase block">
                    CALICUT // 2024
                  </span>
                  <h3 className="font-anton text-xl tracking-wide uppercase text-white group-hover:text-[#ff2020] transition-colors">
                    PULSE OF THE UNDERGROUND
                  </h3>
                  <p className="font-mono text-xs text-[#888888] mt-1">
                    Kerala Hip-Hop & Rap Subculture Festival
                  </p>
                </div>
                <ArrowDownRight className="w-5 h-5 text-white/40 group-hover:text-[#ff2020] group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
              </div>
            </TiltCard>

            {/* Quick Action CTAs with Magnetic Physics */}
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton
                strength={0.3}
                onClick={() => scrollTo("#work")}
                onMouseEnter={() => sound.playHover()}
                className="flex-1"
              >
                <div className="w-full flex items-center justify-between px-6 py-4 bg-white text-black font-anton text-base tracking-wider uppercase hover:bg-[#ff2020] hover:text-white transition-all duration-200 group shadow-lg">
                  <span>EXPLORE WORKS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton
                strength={0.3}
                onClick={() => scrollTo("#contact")}
                onMouseEnter={() => sound.playHover()}
                className="flex-1"
              >
                <div className="w-full flex items-center justify-between px-6 py-4 bg-transparent border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase hover:border-[#ff2020] hover:text-[#ff2020] transition-all duration-200">
                  <span>START A PROJECT</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Kinetic Marquee Ribbon */}
      <div className="relative z-10 w-full border-y border-white/10 py-3.5 bg-[#080808]/90 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-white/70">
          <span className="text-[#ff2020] font-bold flex items-center gap-2">
            <Disc className="w-3.5 h-3.5 animate-spin" /> AD FILMS
          </span>
          <span>•</span>
          <span>COMMERCIAL PRODUCTION</span>
          <span>•</span>
          <span className="text-white font-bold">MALLU RAP & HIP-HOP FESTIVALS</span>
          <span>•</span>
          <span>INFLUENCER STRATEGY</span>
          <span>•</span>
          <span className="text-[#ff2020] font-bold">CBFC REGIONAL PACKAGING</span>
          <span>•</span>
          <span>HIGH-FASHION CAMPAIGNS</span>
          <span>•</span>
          <span className="text-white font-bold">WESTERN GHATS TO FORT KOCHI</span>
          <span>•</span>
          {/* Duplicate for infinite loop */}
          <span className="text-[#ff2020] font-bold flex items-center gap-2">
            <Disc className="w-3.5 h-3.5 animate-spin" /> AD FILMS
          </span>
          <span>•</span>
          <span>COMMERCIAL PRODUCTION</span>
          <span>•</span>
          <span className="text-white font-bold">MALLU RAP & HIP-HOP FESTIVALS</span>
          <span>•</span>
          <span>INFLUENCER STRATEGY</span>
          <span>•</span>
          <span className="text-[#ff2020] font-bold">CBFC REGIONAL PACKAGING</span>
          <span>•</span>
          <span>HIGH-FASHION CAMPAIGNS</span>
          <span>•</span>
          <span>WESTERN GHATS TO FORT KOCHI</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
