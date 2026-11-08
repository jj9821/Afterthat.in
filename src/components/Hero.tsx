"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Play,
  Disc,
  Maximize2,
  X,
  Sliders,
} from "lucide-react";
import { sound } from "@/utils/sound";
import { COMPANY_INFO } from "@/data/company";
import { useScrollLock } from "@/utils/scrollLock";
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
  projectId?: string;
}

const CAMERA_FEEDS: CameraFeed[] = [
  {
    id: "cam-1",
    name: "01 // FMCG & PACKAGING",
    tag: "HAPPEATS PACKAGING ARCHITECTURE",
    url: "/videos/hero-cinematic-reel.mp4",
    poster: "/portfolio/branding/hapeats/cover.webp",
    projectId: "hapeats-fmcg-packaging",
  },
  {
    id: "cam-2",
    name: "02 // LIVE & CONCERTS",
    tag: "CALICUT BANGER HIP-HOP FESTIVAL",
    url: "/videos/pulse-festival-reel.mp4",
    poster: "/portfolio/events-pr/calicut-banger/cover.webp",
    projectId: "calicut-banger-music-festival",
  },
  {
    id: "cam-3",
    name: "03 // LUXURY REBRANDING",
    tag: "DIZZIRE SILKS & SAREES REBRAND",
    url: "/videos/monsoon-noir-reel.mp4",
    poster: "/portfolio/branding/dizzire/cover.webp",
    projectId: "dizzire-silk-and-sarees",
  },
  {
    id: "cam-4",
    name: "04 // EDTECH PLATFORM",
    tag: "APTVEL DIGITAL LAUNCH CAMPAIGN",
    url: "/videos/motorsport-reel.mp4",
    poster: "/portfolio/technology/aptvel/cover.webp",
    projectId: "aptvel-edtech-launch",
  },
  {
    id: "cam-5",
    name: "05 // AI AD FILMS",
    tag: "BAKERS POINT AI CREATIVE SUITE",
    url: "/videos/hero-cinematic-reel.mp4",
    poster: "/portfolio/ai-advertising/bakers-point/cover.webp",
    projectId: "bakers-point-ai-creative-suite",
  },
];

export default function Hero({ onOpenProject: _onOpenProject }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeFeed, setActiveFeed] = useState<CameraFeed>(CAMERA_FEEDS[0]);
  const [timecode, setTimecode] = useState("00:00:24:18");
  const [showFullReelModal, setShowFullReelModal] = useState(false);
  const [viewfinderActive, setViewfinderActive] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Global scroll lock when full reel modal is open
  useScrollLock(showFullReelModal);

  // 5-second automatic capability showcase sequence
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveFeed((current) => {
        const currentIndex = CAMERA_FEEDS.findIndex((f) => f.id === current.id);
        const nextIndex = (currentIndex + 1) % CAMERA_FEEDS.length;
        return CAMERA_FEEDS[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!showFullReelModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowFullReelModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullReelModal]);

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
    setIsAutoPlaying(false);
    setActiveFeed(feed);
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#0A0A0A] text-white flex flex-col justify-between pt-28 md:pt-36 pb-6 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.7)_80%)]" />

        {/* Primary Red Atmospheric Light Source */}
        <motion.div
          style={{ x: bgParallaxX, y: bgParallaxY }}
          className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-gradient-to-tr from-[#F20D18]/25 via-[#F20D18]/10 to-transparent rounded-full blur-[140px]"
        />

        {/* Subtle Engineering Grid Overlay */}
        <div className="absolute inset-0 subtle-grid opacity-20" />
      </div>

      {/* 2. DIRECTOR VIEWFINDER TECHNICAL HUD (Reticles & VU Meter) */}
      {viewfinderActive && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-8 pt-32">
          {/* Top Corner Crosshairs */}
          <div className="w-full flex justify-between">
            <span className="text-[#F20D18]/50 font-mono text-sm leading-none">[ + ]</span>
            <span className="text-[#F20D18]/50 font-mono text-sm leading-none">[ + ]</span>
          </div>

          {/* Bottom HUD: Live Audio Visualizer VU Equalizer */}
          <div className="w-full flex items-end justify-between font-mono text-[10px] text-white/50 pb-16">
            <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 border border-white/15">
              <span className="text-[#F20D18] font-bold">AUDIO VU CH 1/2:</span>
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
                      h > 80 ? "bg-[#F20D18]" : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/80 font-bold ml-1">-6 dB</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 bg-black/70 px-3 py-1.5 border border-white/15">
              <span>LOCATIONS:</span>
              <span className="text-white font-bold tracking-wider">
                KOCHI • BANGALORE • AHMEDABAD
              </span>
              <span className="text-[#F20D18]">INTEGRATED AGENCY</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. TOP META BAR & CAMERA FEED CONTROLS */}
      <div className="relative z-20 max-w-[1720px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-[11px] text-[#888888] backdrop-blur-sm">
        {/* Left Telemetry: REC, Timecode, Resolution */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/80 border border-white/20 text-[#F20D18] font-bold text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20D18] animate-ping" />
            REC [●]
          </span>
          <span className="bg-black/70 px-2.5 py-1 border border-white/10 tracking-widest text-white font-mono text-[11px]">
            TC {timecode}
          </span>
          <span className="px-2 py-0.5 bg-[#F20D18] text-white font-extrabold tracking-widest text-[9px] uppercase hidden sm:inline">
            4K DCI • 24.00 FPS
          </span>
          <ScrambleText
            text="CREATIVE • ADVERTISING • MARKETING • TECHNOLOGY"
            className="text-white/60 tracking-wider text-[11px] hidden xl:inline"
          />
        </div>

        {/* Right Camera Feed Switcher Buttons with Live Sequence Indicators */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-white/40 uppercase tracking-widest text-[10px] mr-1 hidden sm:inline">
            CAPABILITY SEQUENCE:
          </span>
          {CAMERA_FEEDS.map((feed) => {
            const isActive = activeFeed.id === feed.id;
            return (
              <button
                key={feed.id}
                onClick={() => handleSwitchFeed(feed)}
                onMouseEnter={() => sound.playHover()}
                data-cursor="SWITCH FEED"
                className={`relative overflow-hidden px-2.5 py-1 text-[10px] font-mono tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-[#F20D18] border-[#F20D18] text-white font-extrabold shadow-[0_0_12px_rgba(242,13,24,0.6)]"
                    : "bg-black/60 border-white/20 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                <span>{feed.name.split("//")[0]}</span>
                {isActive && isAutoPlaying && (
                  <motion.div
                    key={feed.id}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-white shadow-[0_0_6px_#fff]"
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={() => setViewfinderActive(!viewfinderActive)}
            title="Toggle Viewfinder Reticles"
            className="p-1 border border-white/20 bg-black/60 text-white/60 hover:text-[#F20D18] hover:border-[#F20D18] transition-colors ml-1"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. MAIN TYPOGRAPHIC EXPLOSION (OFFICIAL BRAND POSITIONING) */}
      <div className="relative z-20 max-w-[1720px] mx-auto w-full my-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Eyebrow + IDEAS. PEOPLE. BRANDS. BEYOND. */}
          <div className="lg:col-span-8 space-y-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 44 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[2px] bg-[#F20D18]"
              />
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] text-[#F20D18] uppercase">
                {COMPANY_INFO.eyebrow}
              </span>
            </div>

            {/* Giant Architectural Word Stack: IDEAS. PEOPLE. BRANDS. BEYOND. */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <h1 className="font-anton text-6xl sm:text-8xl md:text-[9.5vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase select-none flex flex-wrap gap-x-6 md:gap-x-10 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block hover:text-[#F20D18] transition-colors duration-200"
                  >
                    IDEAS.
                  </motion.span>
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block hover:text-[#F20D18] transition-colors duration-200"
                  >
                    PEOPLE.
                  </motion.span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="font-anton text-6xl sm:text-8xl md:text-[9.5vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase select-none flex flex-wrap gap-x-6 md:gap-x-10 text-[#F20D18] drop-shadow-[0_10px_35px_rgba(242,13,24,0.35)]">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block hover:text-white transition-colors duration-200"
                  >
                    BRANDS.
                  </motion.span>
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white hover:text-[#F20D18] transition-colors duration-200"
                  >
                    BEYOND.
                  </motion.span>
                </h1>
              </div>
            </div>

            {/* Supporting Headline & Description */}
            <div className="pt-3 space-y-3 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-syne text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase"
              >
                {COMPANY_INFO.supportingHeadline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-space text-sm sm:text-base md:text-lg text-white/80 leading-relaxed"
              >
                {COMPANY_INFO.supportingDescription}
              </motion.p>
            </div>
          </div>

          {/* Right Column: 3D Tilt Card & Action CTAs */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <TiltCard
              intensity={12}
              glare={true}
              onClick={() => setShowFullReelModal(true)}
              dataCursor="PLAY"
              className="bg-[#101010]/95 backdrop-blur-md border border-white/20 p-4 sm:p-5 hover:border-[#F20D18] transition-colors duration-300 shadow-2xl cursor-pointer group"
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
                  <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-ping" />
                  <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">
                    {activeFeed.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#F20D18] text-white flex items-center justify-center group-hover:scale-115 transition-transform shadow-[0_0_25px_#F20D18]">
                  <Play className="w-4 h-4 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase block">
                    ACTIVE FEED // CAPABILITY REEL
                  </span>
                  <h3 className="font-anton text-xl tracking-wide uppercase text-white group-hover:text-[#F20D18] transition-colors">
                    WATCH AGENCY SHOWREEL
                  </h3>
                  <p className="font-mono text-xs text-[#888888] mt-1">
                    Branding • Advertising • Technology • AI Workflows
                  </p>
                </div>
                <Maximize2 className="w-5 h-5 text-white/40 group-hover:text-[#F20D18] group-hover:scale-110 transition-all" />
              </div>
            </TiltCard>

            {/* Quick Action CTAs with Magnetic Physics */}
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton
                strength={0.3}
                onClick={() => scrollTo("#contact")}
                onMouseEnter={() => sound.playHover()}
                className="flex-1"
              >
                <div className="w-full flex items-center justify-between px-6 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-200 group shadow-[0_0_20px_rgba(242,13,24,0.4)]">
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton
                strength={0.3}
                onClick={() => scrollTo("#work")}
                onMouseEnter={() => sound.playHover()}
                className="flex-1"
              >
                <div className="w-full flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase hover:border-[#F20D18] hover:text-[#F20D18] transition-all duration-200">
                  <span>EXPLORE OUR WORK</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM KINETIC MARQUEE RIBBON & SCROLL INDICATOR */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/15 pt-3 bg-[#0A0A0A]/90 backdrop-blur-md">
        {/* Animated Scroll Down Indicator */}
        <button
          onClick={() => scrollTo("#about")}
          onMouseEnter={() => sound.playHover()}
          data-cursor="SCROLL"
          className="flex items-center gap-3 font-mono text-xs text-white/60 hover:text-white group shrink-0"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-[#F20D18] transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#F20D18]"
            />
          </div>
          <span className="tracking-widest uppercase text-[10px] text-white/70 group-hover:text-[#F20D18] transition-colors">
            SCROLL TO EXPLORE
          </span>
        </button>

        {/* Marquee Ticker */}
        <div className="w-full overflow-hidden py-1">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs tracking-[0.25em] uppercase text-white/70">
            <span className="text-[#F20D18] font-bold flex items-center gap-2">
              <Disc className="w-3.5 h-3.5 animate-spin" /> BRAND STRATEGY & IDENTITY
            </span>
            <span>•</span>
            <span>COMMERCIAL AD FILMS</span>
            <span>•</span>
            <span className="text-white font-bold">DIGITAL MARKETING & PERFORMANCE</span>
            <span>•</span>
            <span>WEBSITE & CUSTOM SOFTWARE DEVELOPMENT</span>
            <span>•</span>
            <span className="text-[#F20D18] font-bold">AI VIDEO COMMERCIALS</span>
            <span>•</span>
            <span>PR, CELEBRITY & BRAND EXPERIENCES</span>
            <span>•</span>
            <span className="text-white font-bold">KOCHI • BANGALORE • AHMEDABAD</span>
            <span>•</span>
            {/* Loop duplicate */}
            <span className="text-[#F20D18] font-bold flex items-center gap-2">
              <Disc className="w-3.5 h-3.5 animate-spin" /> BRAND STRATEGY & IDENTITY
            </span>
            <span>•</span>
            <span>COMMERCIAL AD FILMS</span>
            <span>•</span>
            <span className="text-white font-bold">DIGITAL MARKETING & PERFORMANCE</span>
            <span>•</span>
            <span>WEBSITE & CUSTOM SOFTWARE DEVELOPMENT</span>
            <span>•</span>
            <span className="text-[#F20D18] font-bold">AI VIDEO COMMERCIALS</span>
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
            className="modal-backdrop fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 overscroll-contain"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                sound.playClick();
                setShowFullReelModal(false);
              }
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/20 pb-4 shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#F20D18] text-white font-mono font-bold text-xs uppercase">
                  AFTER THAT ENTERTAINMENT // MASTER REEL
                </span>
                <span className="font-mono text-xs text-white/60 hidden sm:inline">
                  INTEGRATED CREATIVE, ADVERTISING & TECHNOLOGY
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setShowFullReelModal(false);
                }}
                onMouseEnter={() => sound.playHover()}
                data-cursor="CLOSE"
                className="p-2 border border-white/20 text-white hover:text-white hover:bg-[#F20D18] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="relative my-auto w-full max-w-6xl mx-auto aspect-video bg-black border-2 border-white/20 shadow-[0_0_50px_rgba(242,13,24,0.3)] overflow-hidden shrink-0">
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
            <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-white/50 gap-2 shrink-0">
              <span>AFTER THAT ENTERTAINMENT LLP • KOCHI | BANGALORE | AHMEDABAD</span>
              <span className="text-[#F20D18] font-bold">IDEAS. PEOPLE. BRANDS. BEYOND.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
