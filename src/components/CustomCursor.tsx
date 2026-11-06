"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse/trackpad)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let prevX = -100;
    let prevY = -100;
    let isInitialized = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isInitialized) {
        cursorX = mouseX;
        cursorY = mouseY;
        prevX = mouseX;
        prevY = mouseY;
        isInitialized = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        // 1. Contextual Cursor Label check
        const cursorAttr = target.closest("[data-cursor]");
        if (cursorAttr) {
          const text = cursorAttr.getAttribute("data-cursor") || "";
          setCursorText(text);
        } else {
          setCursorText("");
        }

        // 2. Hover Image Preview check
        const previewAttr = target.closest("[data-preview-img]");
        if (previewAttr) {
          const imgUrl = previewAttr.getAttribute("data-preview-img");
          setPreviewImage(imgUrl);
        } else {
          setPreviewImage(null);
        }

        // 3. Clickable Interactive Element check
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.closest("[role='button']") !== null ||
          target.closest(".cursor-pointer") !== null ||
          target.getAttribute("role") === "button" ||
          window.getComputedStyle(target).cursor === "pointer";

        setIsPointer(isClickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const render = () => {
      // Fluid, unified spring interpolation for seamless trailing
      const ease = 0.32;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      if (wrapperRef.current) {
        // Mathematical centering around pointer position via translate(-50%, -50%)
        wrapperRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }

      // Floating image preview follows with secondary trailing physics
      if (previewRef.current) {
        const pEase = 0.15;
        prevX += (mouseX - prevX) * pEase;
        prevY += (mouseY - prevY) * pEase;
        previewRef.current.style.transform = `translate3d(${prevX + 24}px, ${prevY - 80}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* 
        Unified Fixed Cursor Wrapper:
        Both the outer ring and red center dot reside inside this wrapper.
        The wrapper is positioned at (cursorX, cursorY) with translate(-50%, -50%).
        This guarantees mathematical, sub-pixel centering at all times.
      */}
      <div
        ref={wrapperRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[99999] will-change-transform transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate3d(-200px, -200px, 0) translate(-50%, -50%)",
        }}
      >
        {cursorText === "PLAY" ? (
          /* Cinematic Round Play Cursor for Video Reels */
          <div className="w-16 h-16 rounded-full bg-[#ff2020] text-black border-2 border-white flex flex-col items-center justify-center shadow-[0_0_35px_rgba(255,32,32,0.9)] scale-110 transition-transform">
            <svg
              className="w-4 h-4 fill-black translate-x-0.5"
              viewBox="0 0 24 24"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="font-mono text-[8px] font-black tracking-widest uppercase mt-0.5">
              PLAY
            </span>
          </div>
        ) : cursorText === "VIEW" ? (
          /* Editorial Cinematic View Disc for Case Studies */
          <div className="w-16 h-16 rounded-full bg-black/95 text-white border-2 border-[#ff2020] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,32,32,0.6)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-[#ff2020] rounded-full animate-ping mb-1" />
            <span className="font-mono text-[9px] font-black tracking-widest text-white">
              VIEW
            </span>
          </div>
        ) : cursorText ? (
          /* Contextual Action Pill (e.g. MENU, CLOSE, EXPLORE, INQUIRE) */
          <div className="bg-[#ff2020] text-black font-mono text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1.5 border border-white/20 shadow-[0_0_25px_rgba(255,32,32,0.85)] flex items-center gap-1.5 animate-pulse whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            <span>{cursorText}</span>
          </div>
        ) : (
          /* Circular Outline with Mathematically Centered Red Dot */
          <div
            className={`relative flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
              isClicking
                ? "w-7 h-7 border border-[#ff2020] bg-[#ff2020]/25 scale-90"
                : isPointer
                ? "w-14 h-14 border border-[#ff2020] bg-[#ff2020]/15 scale-105 shadow-[0_0_20px_rgba(255,32,32,0.35)]"
                : "w-9 h-9 border border-white/40"
            }`}
          >
            {/* Center Electric Red Dot — Absolute Dead Center */}
            <div
              className={`rounded-full bg-[#ff2020] transition-all duration-150 ease-out shadow-[0_0_10px_#ff2020] ${
                isClicking
                  ? "w-1 h-1 scale-75"
                  : isPointer
                  ? "w-2 h-2 scale-110 shadow-[0_0_14px_#ff2020]"
                  : "w-1.5 h-1.5"
              }`}
            />
          </div>
        )}
      </div>

      {/* Floating Image Preview Thumbnail Portal (for project/service hover) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[99998] transition-all duration-300 ease-out origin-bottom-left will-change-transform ${
          previewImage
            ? "opacity-100 scale-100 rotate-2"
            : "opacity-0 scale-75 rotate-0"
        }`}
        style={{
          transform: "translate3d(-300px, -300px, 0)",
        }}
      >
        {previewImage && (
          <div className="w-48 h-32 relative bg-black border-2 border-[#ff2020] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(255,32,32,0.5)]">
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-cover"
              sizes="200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#ff2020] animate-ping rounded-full" />
              <span className="font-mono text-[9px] text-white font-bold tracking-widest uppercase">
                PREVIEW ARCHIVE
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
