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

export interface DizzireImageItem {
  id: string;
  filename: string;
  title: string;
  description?: string;
  category: string;
  src: string;
  thumbnail?: string;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  sourcePdf?: string;
  sourcePage?: number;
  originalImageRef?: string | null;
  cropCoordinates?: number[] | null;
  featured?: boolean;
  galleryOrder?: number;
}

interface DizzireLightboxProps {
  images: DizzireImageItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function DizzireLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: DizzireLightboxProps) {
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

  const handleClose = useCallback(() => {
    sound.playClick();
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
    setIsZoomed(false);
    onClose();
  }, [onClose]);

  // Keyboard navigation & accessibility
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "z" || e.key === "Z") {
        setIsZoomed((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose, handleNext, handlePrev, toggleFullscreen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Detect horizontal swipe if delta X > 50px and dominates delta Y
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title || "Image Lightbox"}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overscroll-contain select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Navigation Bar */}
      <div className="relative z-50 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C92028] font-bold tracking-widest uppercase">
            DIZZIRE // {currentImage.category.replace("-", " ")}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs text-white/50 tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zoom Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setIsZoomed(!isZoomed);
            }}
            className="p-2 sm:p-2.5 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-[#C92028] hover:bg-[#C92028]/20 transition-all"
            aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
            title="Toggle Zoom (Z)"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 sm:p-2.5 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-[#C92028] hover:bg-[#C92028]/20 transition-all"
            aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Toggle Caption */}
          <button
            onClick={() => {
              sound.playClick();
              setShowCaption(!showCaption);
            }}
            className={`p-2 sm:p-2.5 rounded-full border transition-all ${
              showCaption
                ? "border-[#C92028] bg-[#C92028]/20 text-[#C92028]"
                : "border-white/15 bg-white/5 text-white/60 hover:text-white"
            }`}
            aria-label="Toggle Info"
            title="Toggle Metadata (I)"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={handleClose}
            className="p-2 sm:p-2.5 rounded-full border border-[#C92028]/40 bg-[#C92028]/10 text-white hover:bg-[#C92028] hover:text-white hover:border-[#C92028] transition-all ml-2"
            aria-label="Close Lightbox"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport Area */}
      <div className="relative flex-1 flex items-center justify-center p-3 sm:p-8 min-h-[60vh] max-h-[85vh] overflow-auto">
        {/* Previous Image Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full border border-white/20 bg-black/70 text-white hover:bg-[#C92028] hover:border-[#C92028] transition-all shadow-xl group"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Center Image Container */}
        <div
          className={`relative transition-all duration-300 flex items-center justify-center ${
            isZoomed
              ? "scale-150 cursor-grab active:cursor-grabbing max-w-none max-h-none py-12"
              : "w-full h-full max-h-[75vh] cursor-zoom-in"
          }`}
          onClick={() => !isZoomed && setIsZoomed(true)}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={currentImage.dimensions?.width || 1920}
            height={currentImage.dimensions?.height || 1080}
            className="object-contain max-h-[75vh] w-auto max-w-full drop-shadow-2xl select-none"
            priority
            quality={92}
          />
        </div>

        {/* Next Image Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full border border-white/20 bg-black/70 text-white hover:bg-[#C92028] hover:border-[#C92028] transition-all shadow-xl group"
          aria-label="Next Image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Metadata & Caption Bar */}
      {showCaption && (
        <div className="relative z-50 border-t border-white/10 bg-black/90 backdrop-blur-md px-4 sm:px-8 py-4 sm:py-5 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#C92028] font-bold tracking-widest uppercase bg-[#C92028]/15 px-2 py-0.5 border border-[#C92028]/30">
                  {currentImage.category.replace("-", " ")}
                </span>
                {currentImage.sourcePage && (
                  <span className="font-mono text-[10px] text-white/50 tracking-wider">
                    SOURCE: {currentImage.sourcePdf} // PAGE {currentImage.sourcePage}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg sm:text-2xl text-white tracking-wide font-normal">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  {currentImage.description}
                </p>
              )}
            </div>

            {/* Thumbnail Strip Shortcut */}
            <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-md py-1 no-scrollbar shrink-0">
              {images.slice(Math.max(0, currentIndex - 3), Math.min(images.length, currentIndex + 4)).map((img) => (
                <button
                  key={img.id}
                  onClick={() => {
                    sound.playClick();
                    setIsZoomed(false);
                    const idx = images.findIndex((i) => i.id === img.id);
                    if (idx !== -1) onNavigate(idx);
                  }}
                  className={`relative w-12 h-12 rounded border overflow-hidden shrink-0 transition-all ${
                    img.id === currentImage.id
                      ? "border-[#C92028] scale-105 shadow-[0_0_10px_rgba(201,32,40,0.6)]"
                      : "border-white/15 opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.thumbnail || img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
