"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Play,
  Disc,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Eye,
  Sliders,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import { sound } from "@/utils/sound";
import { COMPANY_INFO } from "@/data/company";
import MagneticButton from "@/components/motion/MagneticButton";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

interface HeroProps {
  onOpenProject?: (id: string) => void;
}

interface CameraFeed {
  id: string;
  name: string;
  tag: string;
  url: string;
  poster: string;
}

const CAMERA_FEEDS: CameraFeed[] = [
  {
    id: "cam-1",
    name: "01 // STUDIO SHOWREEL",
    tag: "A24 / BRUTALIST REEL",
    url: "/videos/hero-cinematic-reel.mp4",
    poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "cam-2",
    name: "02 // MALABAR RAP",
    tag: "PULSE UNDERGROUND FESTIVAL",
    url: "/videos/pulse-festival-reel.mp4",
    poster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cam-3",
    name: "03 // MONSOON NOIR",
    tag: "WESTERN GHATS HIGH-FASHION",
    url: "/videos/monsoon-noir-reel.mp4",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "cam-4",
    name: "04 // NIGHT VELOCITY",
    tag: "MOTORSPORT THEATRICAL",
    url: "/videos/motorsport-reel.mp4",
    poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Hero({ onOpenProject }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeFeed, setActiveFeed] = useState<CameraFeed>(CAMERA_FEEDS[0]);
  const [timecode, setTimecode] = useState("00:00:24:18");
  const [showFullReelModal, setShowFullReelModal] = useState(false);
  const [viewfinderActive, setViewfinderActive] = useState(true);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgParallaxX = useTransform(smoothMouseX, [-800, 800], [-25, 25]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);

  // Live running SMPTE Timecode simulation
  useEffect(() => {
    let frame = 18;
    let sec = 24;
    let min = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      const pad = (n: number) => n.toString().padStart(2, "0");
      setTimecode(`00:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleSwitchFeed = (feed: CameraFeed) => {
    sound.playShutter();
    setActiveFeed(feed);
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
      className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between pt-28 md:pt-36 pb-6 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      {/* 1. CINEMATIC BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          key={activeFeed.url}
          autoPlay
          loop
          muted
          playsInline
          poster={activeFeed.poster}
          className="w-full h-full object-cover opacity-45 mix-blend-screen scale-105 filter brightness-95 contrast-125 transition-opacity duration-700"
        >
          <source src={activeFeed.url} type="video/mp4" />
        </video>

        {/* 35mm Film Grain Texture */}
        <div className="absolute inset-0 grain-overlay opacity-30" />

        {/* Anamorphic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.7)_80%)]" />

        {/* Electric Red Atmospheric Light Source */}
        <motion.div
          style={{ x: bgParallaxX, y: bgParallaxY }}
          className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-gradient-to-tr from-[#ff2020]/25 via-[#ff2020]/10 to-transparent rounded-full blur-[140px]"
        />

        {/* Subtle Engineering Grid Overlay */}
        <div className="absolute inset-0 subtle-grid opacity-20" />
      </div>

      {/* 2. DIRECTOR VIEWFINDER TECHNICAL HUD (Reticles & VU Meter) */}
      {viewfinderActive && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-8 pt-32 pointer-events-none">
          {/* Top Corner Crosshairs */}
          <div className="w-full flex justify-between">
            <span className="text-[#ff2020]/50 font-mono text-sm leading-none">[ + ]</span>
            <span className="text-[#ff2020]/50 font-mono text-sm leading-none">[ + ]</span>
          </div>

          {/* Bottom HUD: Live Audio Visualizer VU Equalizer */}
          <div className="w-full flex items-end justify-between font-mono text-[10px] text-white/50 pb-16">
            <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 border border-white/15">
              <span className="text-[#ff2020] font-bold">AUDIO CH 1/2:</span>
              <div className="flex items-end gap-1 h-3">
                {[40, 75, 55, 90, 60, 85, 45, 100, 70, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                    transition={{
                      duration: 0.4 + i * 0.05,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className={`w-1 rounded-none ${
                      h > 80 ? "bg-[#ff2020]" : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/80 font-bold ml-1">-6 dB</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 bg-black/70 px-3 py-1.5 border border-white/15">
              <span>COORDS:</span>
              <span className="text-white font-bold tracking-wider">
                {COMPANY_INFO.headquarters.coordinates}
              </span>
              <span className="text-[#ff2020]">IDUKKI / KOCHI</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. TOP META BAR & CAMERA FEED CONTROLS */}
      <div className="relative z-20 max-w-[1720px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-[11px] text-[#888888] backdrop-blur-sm">
        {/* Left Telemetry: REC, Timecode, Resolution */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/80 border border-white/20 text-[#ff2020] font-bold text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2020] animate-ping" />
            REC [●]
          </span>
          <span className="bg-black/70 px-2.5 py-1 border border-white/10 tracking-widest text-white font-mono text-[11px]">
            TC {timecode}
          </span>
          <span className="px-2 py-0.5 bg-[#ff2020] text-black font-extrabold tracking-widest text-[9px] uppercase hidden sm:inline">
            4K DCI • 24.00 FPS
          </span>
          <ScrambleText
            text="CINEMATIC COMMERCIALS & SUBCULTURE IPS"
            className="text-white/60 tracking-wider text-[11px] hidden xl:inline"
          />
        </div>

        {/* Right Camera Feed Switcher Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-white/40 uppercase tracking-widest text-[10px] mr-1 hidden sm:inline">
            CAMERA FEED:
          </span>
          {CAMERA_FEEDS.map((feed) => (
            <button
              key={feed.id}
              onClick={() => handleSwitchFeed(feed)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="SWITCH FEED"
              className={`px-2.5 py-1 text-[10px] font-mono tracking-wider transition-all duration-200 border ${
                activeFeed.id === feed.id
                  ? "bg-[#ff2020] border-[#ff2020] text-black font-extrabold shadow-[0_0_12px_rgba(255,32,32,0.6)]"
                  : "bg-black/60 border-white/20 text-white/70 hover:border-white hover:text-white"
              }`}
            >
              {feed.name.split("//")[0]}
            </button>
          ))}
          <button
            onClick={() => setViewfinderActive(!viewfinderActive)}
            title="Toggle Viewfinder Reticles"
            className="p-1 border border-white/20 bg-black/60 text-white/60 hover:text-[#ff2020] hover:border-[#ff2020] transition-colors ml-1"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. MAIN TYPOGRAPHIC EXPLOSION */}
      <div className="relative z-20 max-w-[1720px] mx-auto w-full my-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Massive Architectural Type with Character-by-Character Stagger */}
          <div className="lg:col-span-8 space-y-2">
            {/* Tagline kicker */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 44 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[2px] bg-[#ff2020]"
              />
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] text-[#ff2020] uppercase flex items-center gap-2">
                <span>{COMPANY_INFO.legalName}</span>
                <span className="text-white/40">//</span>
                <span className="text-white/70">DIRECTOR ANAND BHAIRAV</span>
              </span>
            </div>

            {/* Giant Architectural Word 1: AFTER (Staggered character reveal) */}
            <div className="overflow-hidden flex items-baseline">
              <h1 className="font-anton text-7xl sm:text-9xl md:text-[14vw] lg:text-[13vw] leading-[0.8] tracking-tighter uppercase select-none text-white flex drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
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
              <h1 className="font-anton text-7xl sm:text-9xl md:text-[14vw] lg:text-[13vw] leading-[0.8] tracking-tighter uppercase select-none text-[#ff2020] flex drop-shadow-[0_10px_35px_rgba(255,32,32,0.35)]">
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
                className="hidden xl:inline-block font-mono text-xs text-white/90 bg-black/80 border border-white/20 px-4 py-2 uppercase tracking-widest backdrop-blur-md self-center shadow-[0_0_20px_rgba(255,32,32,0.25)]"
              >
                <ScrambleText text="WHAT HAPPENS NEXT CHANGES EVERYTHING" />
              </motion.div>
            </div>

            {/* Kinetic statement paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-syne text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-2xl pt-4 leading-snug drop-shadow-md"
            >
              We engineer commercial ad films, underground hip-hop festival IPs, and cultural shockwaves.
            </motion.p>
          </div>

          {/* Right Column: 3D Tilt Card & Floating Visual Showcase */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <TiltCard
              intensity={12}
              glare={true}
              onClick={() => setShowFullReelModal(true)}
              dataCursor="PLAY"
              className="bg-[#101010]/95 backdrop-blur-md border border-white/20 p-4 sm:p-5 hover:border-[#ff2020] transition-colors duration-300 shadow-2xl cursor-pointer group"
            >
              {/* Media Container with Mini Video Looper */}
              <div className="relative aspect-video w-full overflow-hidden bg-black mb-4 border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={activeFeed.poster}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                >
                  <source src={activeFeed.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Live Reel Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#ff2020] animate-ping" />
                  <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">
                    {activeFeed.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#ff2020] text-black flex items-center justify-center group-hover:scale-115 transition-transform shadow-[0_0_25px_#ff2020]">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#ff2020] font-bold tracking-widest uppercase block">
                    ACTIVE FEED // 2026 ARCHIVE
                  </span>
                  <h3 className="font-anton text-xl tracking-wide uppercase text-white group-hover:text-[#ff2020] transition-colors">
                    WATCH 2026 SHOWREEL
                  </h3>
                  <p className="font-mono text-xs text-[#888888] mt-1">
                    Cinema Direction • Malabar Culture • Ad Films
                  </p>
                </div>
                <Maximize2 className="w-5 h-5 text-white/40 group-hover:text-[#ff2020] group-hover:scale-110 transition-all" />
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
                <div className="w-full flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase hover:border-[#ff2020] hover:text-[#ff2020] transition-all duration-200">
                  <span>COMMISSION US</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM KINETIC MARQUEE RIBBON & SCROLL INDICATOR */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/15 pt-3 bg-[#080808]/90 backdrop-blur-md">
        {/* Animated Scroll Down Indicator */}
        <button
          onClick={() => scrollTo("#about")}
          onMouseEnter={() => sound.playHover()}
          data-cursor="SCROLL"
          className="flex items-center gap-3 font-mono text-xs text-white/60 hover:text-white group shrink-0"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-[#ff2020] transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#ff2020]"
            />
          </div>
          <span className="tracking-widest uppercase text-[10px] text-white/70 group-hover:text-[#ff2020] transition-colors">
            SCROLL TO EXPLORE
          </span>
        </button>

        {/* Marquee Ticker */}
        <div className="w-full overflow-hidden py-1">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs tracking-[0.25em] uppercase text-white/70">
            <span className="text-[#ff2020] font-bold flex items-center gap-2">
              <Disc className="w-3.5 h-3.5 animate-spin" /> COMMERCIAL AD FILMS
            </span>
            <span>•</span>
            <span>INDEPENDENT CINEMA PACKAGING</span>
            <span>•</span>
            <span className="text-white font-bold">MALLU RAP & HIP-HOP FESTIVALS</span>
            <span>•</span>
            <span>INFLUENCER TALENT STRATEGY</span>
            <span>•</span>
            <span className="text-[#ff2020] font-bold">CBFC REGIONAL CLEARANCES</span>
            <span>•</span>
            <span>MAXIMALIST BRAND IDENTITY</span>
            <span>•</span>
            <span className="text-white font-bold">WESTERN GHATS TO FORT KOCHI</span>
            <span>•</span>
            {/* Loop duplicate */}
            <span className="text-[#ff2020] font-bold flex items-center gap-2">
              <Disc className="w-3.5 h-3.5 animate-spin" /> COMMERCIAL AD FILMS
            </span>
            <span>•</span>
            <span>INDEPENDENT CINEMA PACKAGING</span>
            <span>•</span>
            <span className="text-white font-bold">MALLU RAP & HIP-HOP FESTIVALS</span>
            <span>•</span>
            <span>INFLUENCER TALENT STRATEGY</span>
            <span>•</span>
            <span className="text-[#ff2020] font-bold">CBFC REGIONAL CLEARANCES</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* 6. FULLSCREEN CINEMATIC SHOWREEL MODAL */}
      <AnimatePresence>
        {showFullReelModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#ff2020] text-black font-mono font-bold text-xs uppercase">
                  AFTER THAT // 2026 OFFICIAL SHOWREEL
                </span>
                <span className="font-mono text-xs text-white/60 hidden sm:inline">
                  DIRECTED BY ANAND BHAIRAV • DCI 4K MASTER
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setShowFullReelModal(false);
                }}
                onMouseEnter={() => sound.playHover()}
                data-cursor="CLOSE"
                className="p-2 border border-white/20 text-white hover:text-black hover:bg-[#ff2020] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="relative my-auto w-full max-w-6xl mx-auto aspect-video bg-black border-2 border-white/20 shadow-[0_0_50px_rgba(255,32,32,0.3)] overflow-hidden">
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
                poster={activeFeed.poster}
              >
                <source src={activeFeed.url} type="video/mp4" />
              </video>
            </div>

            {/* Modal Footer Telemetry */}
            <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-white/50 gap-2">
              <span>AFTER THAT ENTERTAINMENT LLP • KOCHI / CALICUT / BANGALORE</span>
              <span className="text-[#ff2020] font-bold">ALL RIGHTS RESERVED • 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
