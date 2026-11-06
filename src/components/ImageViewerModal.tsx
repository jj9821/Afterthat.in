"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { PortfolioImage } from "@/types";
import { sound } from "@/utils/sound";
import { useScrollLock } from "@/utils/scrollLock";

interface ImageViewerModalProps {
  images: PortfolioImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageViewerModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageViewerModalProps) {
  const currentImage = images[currentIndex];

  // Global scroll lock for image viewer overlay
  useScrollLock(isOpen);

  const handleNext = useCallback(() => {
    sound.playClick();
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    sound.playClick();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full Screen Image Viewer"
      className="modal-backdrop fixed inset-0 z-[2000] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none overscroll-contain"
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
      <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
            IMAGE {currentIndex + 1} / {images.length}
          </span>
          <div className="h-3 w-[1px] bg-white/20" />
          <span className="font-mono text-[11px] text-white/60 truncate max-w-xs sm:max-w-md hidden sm:inline">
            {currentImage.alt}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/40 hidden md:inline">
            USE ARROW KEYS OR ESC TO EXIT
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/20"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">CLOSE</span>
          </button>
        </div>
      </div>

      {/* Center Image Display with Previous / Next Arrows */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            data-cursor="PREV"
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 border border-white/20 hover:border-[#F20D18] hover:bg-[#F20D18] text-white flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Main High-Resolution Image */}
        <div className="relative w-full h-full max-w-6xl max-h-[82vh] flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain p-2"
            priority
            sizes="100vw"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            data-cursor="NEXT"
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 border border-white/20 hover:border-[#F20D18] hover:bg-[#F20D18] text-white flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Bottom Footer Info Bar with PDF Provenance */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-xs relative z-10">
        <div className="flex items-center gap-2 text-white/90">
          <span className="text-[#F20D18] font-bold">CAPTION:</span>
          <span>{currentImage.caption || currentImage.alt}</span>
        </div>

        {currentImage.sourcePdf && (
          <div className="flex items-center gap-2 text-white/50 text-[11px] shrink-0">
            <FileText className="w-3.5 h-3.5 text-[#F20D18]" />
            <span>SOURCE:</span>
            <span className="text-white/80 font-bold">{currentImage.sourcePdf}</span>
            <span>(PAGE {currentImage.sourcePage})</span>
          </div>
        )}
      </div>
    </div>
  );
}
