"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { sound } from "@/utils/sound";

interface GalleryFrame {
  title: string;
  context: string;
  discipline: string;
  image: string;
  alt: string;
  tagline: string;
  imageClassName: string;
}

const GALLERY_FRAMES: GalleryFrame[] = [
  {
    title: "MAHARANI BRIDAL COUTURE",
    context: "BRIDAL COUTURE · ARCHITECTURAL HALL",
    discipline: "FASHION EDITORIAL & CAMPAIGN STILL",
    image: "/media/behind-the-glass/maharani-bridal-hall.jpg",
    alt: "Bride in a blush embroidered couture gown and flowing sheer veil inside a sunlit classical hall with floral arches",
    tagline:
      "Classical columns, warm floral arches, and flowing blush embroidery framed in natural hall light.",
    imageClassName: "object-cover object-top",
  },
  {
    title: "COLOR-BLOCKED STUDIO PORTRAIT",
    context: "STUDIO SET · AFTER THAT ENTERTAINMENT",
    discipline: "VISUAL IDENTITY & STUDIO DIRECTION",
    image: "/media/behind-the-glass/studio-colorblock-fashion.jpg",
    alt: "Color-blocked studio fashion portrait against diagonal hot pink, lime green, and cyan panels featuring After That Entertainment mark",
    tagline:
      "Tri-tone diagonal set pairing hot pink, lime, and cyan panels with sharp key lighting and graphic branding.",
    imageClassName: "object-cover object-top",
  },
  {
    title: "SOFA & MIRROR LOOKBOOK",
    context: "INTERIOR SET · LIFESTYLE EDITORIAL",
    discipline: "APPAREL CAMPAIGN DIRECTION",
    image: "/media/behind-the-glass/sofa-mirror-casualwear.jpg",
    alt: "Three models styled in casualwear seated on a neutral sofa with open books beneath an ornate gold-framed mirror reflecting greenery",
    tagline:
      "Three-subject casualwear tableau anchored by an ornate gilt mirror, reflected garden depth, and warm neutrals.",
    imageClassName: "object-cover object-[50%_42%]",
  },
  {
    title: "EVERY BRIDE IS A MAHARANI",
    context: "MAHARANI WEDDING COLLECTIONS · KEY VISUAL",
    discipline: "CAMPAIGN ART DIRECTION & TYPOGRAPHY",
    image: "/media/behind-the-glass/maharani-campaign-trio.jpg",
    alt: "Maharani Wedding Collections campaign key visual featuring three brides in red silk saree, burgundy lehenga, and white bridal gown",
    tagline:
      "Multi-silhouette bridal campaign key visual uniting crimson saree, embellished lehenga, and white gown.",
    imageClassName: "object-contain",
  },
  {
    title: "BOTANICAL PATIO ENSEMBLE",
    context: "OUTDOOR PATIO · TROPICAL FOLIAGE",
    discipline: "ON-LOCATION CAMPAIGN PHOTOGRAPHY",
    image: "/media/behind-the-glass/tropical-garden-trio.jpg",
    alt: "Outdoor patio group portrait of three models around woven cane chairs framed by lush tropical foliage and palms",
    tagline:
      "Natural daylight group portrait balancing woven textures, crisp casual styling, and layered tropical greenery.",
    imageClassName: "object-cover object-top",
  },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    const watermark = watermarkRef.current;
    if (!container || !track) return;

    const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getScrollDistance() * 1.1}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (watermark) {
        gsap.to(watermark, {
          x: () => -getScrollDistance() * 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${getScrollDistance() * 1.1}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Behind the Glass Campaign Archive"
      className="relative w-full min-h-[580px] md:h-screen bg-[#060606] text-white overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none no-scrollbar border-b border-white/10"
    >
      {/* Background Watermark Parallax Type */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap font-anton text-[24vw] text-white/[0.025] select-none pointer-events-none tracking-tighter"
      >
        BRIDAL COUTURE • STUDIO EDITORIAL • CAMPAIGN DIRECTION • LOOKBOOK
      </div>

      {/* Top Pin Header */}
      <div className="md:absolute md:top-6 md:left-12 md:right-12 px-6 pt-8 md:px-0 md:pt-0 z-20 flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#F20D18] shrink-0" aria-hidden="true" />
          <span className="text-[#FF4750] font-bold tracking-widest uppercase">
            {"// CAMPAIGN REEL"}
          </span>
          <span className="text-white/35 hidden sm:inline" aria-hidden="true">
            |
          </span>
          <span className="text-[#C2C2C2] hidden sm:inline">
            SELECTED SHOOT STILLS &amp; KEY VISUALS
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#B3B3B3] text-[11px] tracking-wider uppercase">
          <span className="hidden md:inline">SCROLL VERTICALLY TO TRAVERSE</span>
          <span className="md:hidden">SWIPE TO EXPLORE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F20D18]" aria-hidden="true" />
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        className="md:h-full flex items-center gap-6 md:gap-12 px-6 md:px-14 py-8 md:pt-20 md:pb-10 w-max"
      >
        {/* Intro Card */}
        <div className="w-[300px] sm:w-[400px] shrink-0 space-y-5 snap-start">
          <span className="font-mono text-xs text-[#FF4750] font-bold tracking-[0.28em] uppercase block">
            VISUAL DISCIPLINE
          </span>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] text-white tracking-tight">
            BEHIND THE <span className="text-[#F20D18]">GLASS</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-[#C2C2C2] leading-relaxed">
            In-studio color-blocking, bridal couture storytelling, and natural-light ensemble direction produced for commercial campaigns and fashion labels.
          </p>
          <div className="p-4 bg-[#111111] border border-white/10 border-l-2 border-l-[#F20D18] font-mono text-xs text-white/85 tracking-wider uppercase">
            IN-HOUSE DIRECTION • EDITORIAL STILLS &amp; CAMPAIGN ARTWORK
          </div>
        </div>

        {/* Dynamic Horizontal Slides */}
        {GALLERY_FRAMES.map((frame, index) => (
          <article
            key={frame.image}
            className="w-[320px] sm:w-[500px] md:w-[620px] shrink-0 snap-start bg-[#0E0E0E] border border-white/15 p-4 sm:p-5 md:p-6 space-y-4 hover:border-[#F20D18] hover:-translate-y-0.5 transition-[transform,border-color] duration-200 motion-reduce:hover:translate-y-0 group"
            onMouseEnter={() => sound.playHover()}
            data-cursor="EXAMINE"
          >
            {/* Unobstructed Photo Frame — zero overlaid scrims or corner badges */}
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#060606] border border-white/10">
              <Image
                src={frame.image}
                alt={frame.alt}
                fill
                className={`${frame.imageClassName} group-hover:scale-[1.03] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100`}
                sizes="(max-width: 640px) 320px, (max-width: 768px) 500px, 620px"
              />
            </div>

            {/* Card Metadata Footer */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] tracking-[0.14em] uppercase">
                <span className="text-[#B3B3B3] truncate">{frame.context}</span>
                <span className="text-[#FF4750] font-bold shrink-0">
                  0{index + 1} / 0{GALLERY_FRAMES.length}
                </span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors duration-200">
                {frame.title}
              </h3>
              <p className="font-mono text-[11px] text-[#FF4750] uppercase tracking-[0.16em]">
                {frame.discipline}
              </p>
              <p className="font-space text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                {frame.tagline}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
