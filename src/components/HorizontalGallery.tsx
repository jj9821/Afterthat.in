"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Film, ArrowRight } from "lucide-react";
import { sound } from "@/utils/sound";

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  const frames = [
    {
      num: "FRAME 01",
      title: "ANAMORPHIC WESTERN GHATS",
      location: "Idukki & Vagamon High Ranges",
      spec: "ARRI ALEXA 35 / COOKE ANAMORPHIC",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
      tagline: "Monsoon mist, torrential rains, and brutalist fashion silhouettes.",
    },
    {
      num: "FRAME 02",
      title: "CALICUT HIP-HOP UNDERGROUND",
      location: "Industrial Port Warehouse, Calicut",
      spec: "8-CAMERA LIVE DCI 4K SWITCHER",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      tagline: "4,000 subculture rebels shouting Malayalam rap lyrics into the night.",
    },
    {
      num: "FRAME 03",
      title: "FORT KOCHI 35MM NOIR",
      location: "Heritage Warehouse, Fort Kochi",
      spec: "KODAK 500T 35MM FILM EMBULSION",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      tagline: "Analogue modular synthesizers, red smoke, and late-night art direction.",
    },
    {
      num: "FRAME 04",
      title: "VELOCITY NIGHT DRIVE",
      location: "Marine Drive, Kochi",
      spec: "PHANTOM FLEX 4K @ 1000 FPS",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
      tagline: "High-speed water collisions, neon tubing reflections, and raw speed.",
    },
    {
      num: "FRAME 05",
      title: "THE THEATRICAL CUT",
      location: "Mollywood Master Suite",
      spec: "DAVINCI RESOLVE / DCI-P3 GRADING",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
      tagline: "Where frames transform into cultural shockwaves.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    const watermark = watermarkRef.current;
    if (!container || !track) return;

    // Calculate total horizontal scroll length
    const totalWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // 1. Horizontal Scroll Pinning
      gsap.to(track, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth * 1.2}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 2. Parallax background typography
      if (watermark) {
        gsap.to(watermark, {
          x: () => -totalWidth * 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalWidth * 1.2}`,
            scrub: 1,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#060606] text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Watermark Parallax Type */}
      <div
        ref={watermarkRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap font-anton text-[26vw] text-white/[0.025] select-none pointer-events-none tracking-tighter"
      >
        70MM CINEMATIC ARCHIVE • WESTERN GHATS TO FORT KOCHI • STREET SUBCULTURE
      </div>

      {/* Top Pin Header */}
      <div className="absolute top-6 left-6 right-6 md:left-12 md:right-12 z-20 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-ping" />
          <span className="text-[#F20D18] font-bold tracking-widest uppercase">
            // HORIZONTAL REEL
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/70 hidden sm:inline">
            PINNED PRODUCTION EXPOSURE
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/50 text-[11px]">
          <span>SCROLL VERTICALLY TO TRAVERSE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F20D18]" />
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        className="h-full flex items-center gap-8 md:gap-14 px-6 md:px-16 pt-20 pb-12 w-max"
      >
        {/* Intro Card */}
        <div className="w-[300px] sm:w-[420px] shrink-0 space-y-6">
          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
            VISUAL DISCIPLINE
          </span>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] text-white tracking-tight">
            BEHIND THE <span className="text-[#F20D18]">GLASS</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-[#aaaaaa] leading-relaxed">
            Every camera rig, lens package, and location scout is chosen to inject raw visceral emotion into commercial advertising.
          </p>
          <div className="p-4 bg-[#111111] border-l-2 border-[#F20D18] font-mono text-xs text-white/80">
            KERALA PRODUCTION INFRASTRUCTURE • 4K DCI & 35MM ARCHIVE
          </div>
        </div>

        {/* Dynamic Horizontal Slides */}
        {frames.map((frame, index) => (
          <div
            key={index}
            className="w-[340px] sm:w-[540px] md:w-[680px] shrink-0 bg-[#0e0e0e] border border-white/10 p-5 md:p-7 space-y-5 hover:border-[#F20D18] transition-colors group"
            onMouseEnter={() => sound.playHover()}
            data-cursor="EXAMINE"
          >
            {/* Visual Screen Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-white/10">
              <Image
                src={frame.image}
                alt={frame.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 border border-white/20 font-mono text-[10px] text-white font-bold tracking-widest flex items-center gap-1.5">
                <Film className="w-3 h-3 text-[#F20D18]" />
                <span>{frame.num}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 font-mono">
                <span className="text-[10px] text-[#F20D18] font-bold tracking-widest uppercase block">
                  TECHNICAL SPEC
                </span>
                <span className="text-xs text-white/90 font-medium">
                  {frame.spec}
                </span>
              </div>
            </div>

            {/* Slide Metadata */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#888888]">{frame.location}</span>
                <span className="text-[#F20D18] font-bold">0{index + 1} / 05</span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                {frame.title}
              </h3>
              <p className="font-space text-xs sm:text-sm text-white/70">
                {frame.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
