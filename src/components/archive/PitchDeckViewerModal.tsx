"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Download,
  Layers,
  Sparkles
} from "lucide-react";
import { PitchDeck } from "@/types/creative-archive";
import { sound } from "@/utils/sound";
import { useScrollLock } from "@/utils/scrollLock";

interface PitchDeckViewerModalProps {
  deck: PitchDeck | null;
  onClose: () => void;
}

export default function PitchDeckViewerModal({ deck, onClose }: PitchDeckViewerModalProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when deck viewer is open
  useScrollLock(Boolean(deck));

  // Reset slide index when opening a new deck
  useEffect(() => {
    if (deck) {
      setCurrentSlideIndex(0);
      sound.playHeavyImpact();
    }
  }, [deck]);

  const slides = deck?.slides || [];
  const currentSlide = slides[currentSlideIndex] || deck?.coverImage;

  const handleNext = useCallback(() => {
    if (slides.length <= 1) return;
    sound.playClick();
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    if (slides.length <= 1) return;
    sound.playClick();
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    sound.playClick();
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch((err) => console.warn(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch((err) => console.warn(err));
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!deck) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [deck, onClose, handleNext, handlePrev, toggleFullscreen]);

  if (!deck) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${deck.title}`}
      className="modal-backdrop fixed inset-0 z-[2000] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-5 md:p-7 overscroll-contain animate-in fade-in duration-200 select-none"
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/15 pb-3.5 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#F20D18] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(242,13,24,0.6)]">
            {deck.format}
          </span>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
          <div className="flex flex-col">
            <span className="font-anton text-lg sm:text-xl text-white tracking-wide uppercase truncate max-w-sm md:max-w-xl">
              {deck.title}
            </span>
            <span className="font-mono text-[11px] text-[#888888] uppercase hidden sm:block">
              CLIENT: {deck.client} • {deck.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {deck.pdfUrl && (
            <a
              href={deck.pdfUrl}
              download
              onClick={() => sound.playClick()}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/20"
              title="Download presentation document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
          )}

          <button
            onClick={toggleFullscreen}
            className="p-2 border border-white/20 text-white hover:bg-white/10 transition-colors hidden sm:block"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#F20D18] hover:text-white transition-colors border border-white/20"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">CLOSE</span>
          </button>
        </div>
      </div>

      {/* Main Slide Display Viewport */}
      <div className="relative flex-1 flex items-center justify-center my-3 sm:my-4 overflow-hidden">
        {/* Previous Button */}
        {slides.length > 1 && (
          <button
            onClick={handlePrev}
            data-cursor="PREV"
            aria-label="Previous Slide"
            className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 border border-white/20 hover:border-[#F20D18] hover:bg-[#F20D18] text-white flex items-center justify-center transition-all duration-200 group shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Center Presentation Slide */}
        <div className="relative w-full h-full max-w-6xl max-h-[72vh] flex items-center justify-center bg-[#070707] border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
          {currentSlide && (
            <Image
              src={currentSlide}
              alt={`${deck.title} - Slide ${currentSlideIndex + 1}`}
              fill
              className="object-contain p-1 sm:p-2 select-none"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
          )}

          {/* Floating Slide Counter Pill */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-xs border border-white/20 text-white z-10 flex items-center gap-2">
            <span className="text-[#F20D18] font-bold">SLIDE {currentSlideIndex + 1}</span>
            <span className="text-white/40">/</span>
            <span>{slides.length || deck.slidesCount}</span>
          </div>
        </div>

        {/* Next Button */}
        {slides.length > 1 && (
          <button
            onClick={handleNext}
            data-cursor="NEXT"
            aria-label="Next Slide"
            className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 border border-white/20 hover:border-[#F20D18] hover:bg-[#F20D18] text-white flex items-center justify-center transition-all duration-200 group shadow-xl"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Bottom Filmstrip Thumbnails & Telemetry */}
      <div className="shrink-0 flex flex-col gap-2.5 border-t border-white/15 pt-3">
        {/* Horizontal Slide Thumbnails Scroller */}
        {slides.length > 1 && (
          <div
            ref={thumbnailsRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 overscroll-contain"
            data-lenis-prevent="true"
          >
            {slides.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setCurrentSlideIndex(idx);
                }}
                className={`relative shrink-0 w-16 sm:w-24 aspect-[16/9] border transition-all duration-200 overflow-hidden ${
                  currentSlideIndex === idx
                    ? "border-[#F20D18] ring-2 ring-[#F20D18]/50 scale-105"
                    : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={thumb} alt={`Slide ${idx + 1}`} fill className="object-cover" sizes="96px" />
                <span className="absolute bottom-0.5 right-0.5 bg-black/80 px-1 font-mono text-[8px] text-white">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Telemetry info row */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-white/60 gap-2">
          <p className="line-clamp-1 max-w-xl text-white/80">
            {deck.description}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] text-white/40">USE ARROW KEYS OR SWIPE</span>
            <div className="h-3 w-[1px] bg-white/20" />
            <span className="text-[#F20D18] font-bold text-xs uppercase">
              CONFIDENTIAL AGENCY ARCHIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
