"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Info,
} from "lucide-react";
import { sound } from "@/utils/sound";
import { useScrollLock } from "@/utils/scrollLock";

export interface MilliFlameImageItem {
  id: string;
  filename: string;
  title: string;
  caption?: string;
  category: string;
  src: string;
  thumbnail?: string;
  dimensions?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  sourcePdfPage?: number;
  featured?: boolean;
}

interface MilliFlameLightboxProps {
  images: MilliFlameImageItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function MilliFlameLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: MilliFlameLightboxProps) {
  const currentImage = images[currentIndex];
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showCaption, setShowCaption] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Global background scroll lock
  useScrollLock(isOpen);

  const handleNext = useCallback(() => {
    sound.playClick();
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    sound.playClick();
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const toggleFullscreen = useCallback(() => {
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch((err) => console.warn(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch((err) => console.warn(err));
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        sound.playClick();
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev, toggleFullscreen]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen || !currentImage) return null;

  const categoryName = currentImage.category.replace(/-/g, " ").toUpperCase();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Milli Flame Image Viewer"
      className="modal-backdrop fixed inset-0 z-[99999] bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 md:p-8 overscroll-contain select-none"
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
    >
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/15 pb-4 shrink-0 gap-4 relative z-20">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="px-2.5 py-1 bg-[#2C6667] text-white font-mono font-bold text-[10px] sm:text-xs uppercase shrink-0 border border-[#05AAC2]/40">
            {categoryName}
          </span>
          <div className="truncate">
            <span className="font-anton text-base sm:text-xl uppercase text-white tracking-wide truncate block">
              {currentImage.title}
            </span>
            <span className="font-mono text-[10px] text-white/50 tracking-wider truncate hidden sm:block">
              MILLI FLAME // PARISIAN DINING & CAFÉ
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="font-mono text-xs text-white/70 font-bold px-2.5 py-1 bg-white/5 border border-white/10">
            {currentIndex + 1} / {images.length}
          </span>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            data-cursor={isZoomed ? "ZOOM OUT" : "ZOOM IN"}
            className="p-2 border border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-[#05AAC2] transition-colors hidden sm:block"
            title="Toggle Zoom"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={toggleFullscreen}
            data-cursor="FULLSCREEN"
            className="p-2 border border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-[#05AAC2] transition-colors hidden sm:block"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowCaption(!showCaption)}
            className={`p-2 border transition-colors hidden md:block ${
              showCaption
                ? "bg-[#2C6667] border-[#05AAC2] text-white"
                : "border-white/20 bg-white/5 text-white/70 hover:text-white"
            }`}
            title="Toggle Caption Info"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-[#F20D18] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">CLOSE [ESC]</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="my-auto w-full max-w-7xl mx-auto flex items-center justify-between relative z-10 py-3 sm:py-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          data-cursor="PREV"
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/80 hover:bg-[#2C6667] border border-white/20 hover:border-[#05AAC2] text-white flex items-center justify-center transition-all duration-200 group shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Center Image Container */}
        <div
          className={`relative w-full mx-auto max-h-[75vh] flex items-center justify-center overflow-auto px-12 sm:px-16 transition-all duration-300 ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <div
            className={`relative transition-transform duration-300 ${
              isZoomed ? "scale-135" : "scale-100"
            }`}
            style={{ maxWidth: "100%", maxHeight: "70vh" }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              width={currentImage.width || 1920}
              height={currentImage.height || 1080}
              priority
              className="object-contain max-h-[70vh] w-auto mx-auto shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/10"
              sizes="90vw"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          data-cursor="NEXT"
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/80 hover:bg-[#2C6667] border border-white/20 hover:border-[#05AAC2] text-white flex items-center justify-center transition-all duration-200 group shadow-2xl"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Footer Info & Navigation Bar */}
      <div className="max-w-7xl mx-auto w-full border-t border-white/15 pt-3 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-white/50 gap-2 shrink-0 relative z-20">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-[#05AAC2] font-bold">PROJECT: MILLI FLAME</span>
          <span className="text-white/20">•</span>
          {showCaption && currentImage.caption && (
            <span className="text-white/80 truncate max-w-xl">
              {currentImage.caption}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-white/40">
          <span className="hidden md:inline">KEYBOARD: [←] PREV • [→] NEXT • [ESC] CLOSE</span>
          <span className="text-[#F2D050] font-bold">ESTD 2025 · PARIS, FRANCE</span>
        </div>
      </div>
    </div>
  );
}
