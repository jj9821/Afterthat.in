"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  Sparkles,
  Layers,
  Clock
} from "lucide-react";
import { AIAdFilm } from "@/types/creative-archive";
import { sound } from "@/utils/sound";
import { useScrollLock } from "@/utils/scrollLock";

interface VideoPlayerModalProps {
  video: AIAdFilm | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(video?.duration || 30);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock background scrolling while video modal is open
  useScrollLock(Boolean(video));

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    sound.playClick();
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleMuteToggle = useCallback(() => {
    if (!videoRef.current) return;
    sound.playClick();
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  }, [isMuted]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSkip = useCallback((seconds: number) => {
    if (!videoRef.current) return;
    sound.playClick();
    videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds));
  }, [duration]);

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

  // Keyboard controls
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === " " || e.key.toLowerCase() === "k") {
        e.preventDefault();
        handlePlayPause();
      } else if (e.key.toLowerCase() === "m") {
        handleMuteToggle();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSkip(5);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSkip(-5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [video, onClose, handlePlayPause, handleMuteToggle, toggleFullscreen, handleSkip]);

  // Auto-hide controls after inactivity
  const showControlsTemporarily = () => {
    setControlsVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setControlsVisible(false);
    }, 3000);
  };

  if (!video) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${video.title}`}
      className="modal-backdrop fixed inset-0 z-[2000] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 md:p-8 overscroll-contain animate-in fade-in duration-200 select-none"
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
      <div className="flex items-center justify-between border-b border-white/15 pb-4 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#F20D18] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(242,13,24,0.6)]">
            AI AD FILM // {video.resolution}
          </span>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
          <div className="flex flex-col">
            <span className="font-anton text-lg sm:text-xl text-white tracking-wide uppercase">
              {video.title}
            </span>
            <span className="font-mono text-[11px] text-[#888888] uppercase hidden sm:block">
              CLIENT: {video.client} • {video.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/40 hidden md:inline">
            PRESS SPACE TO PLAY/PAUSE • ESC TO EXIT
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#F20D18] hover:text-white transition-colors border border-white/20"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">CLOSE</span>
          </button>
        </div>
      </div>

      {/* Main Video Viewport */}
      <div
        ref={containerRef}
        onMouseMove={showControlsTemporarily}
        className="relative my-auto w-full max-w-6xl mx-auto aspect-video bg-black border-2 border-white/20 shadow-[0_0_60px_rgba(242,13,24,0.25)] overflow-hidden group flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          autoPlay
          playsInline
          onTimeUpdate={() => {
            if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
          }}
          onLoadedMetadata={() => {
            if (videoRef.current) setDuration(videoRef.current.duration);
          }}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handlePlayPause}
        />

        {/* Big Center Play Icon when Paused */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            aria-label="Play video"
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#F20D18]/90 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(242,13,24,0.8)] backdrop-blur-sm z-10"
          >
            <Play className="w-8 h-8 fill-white translate-x-0.5" />
          </button>
        )}

        {/* Transport Controls Bar (Overlay on Video) */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress / Seek Bar */}
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            className="relative w-full h-2 bg-white/20 hover:h-3 rounded-none cursor-pointer transition-all mb-4 group/bar"
          >
            <div
              className="absolute left-0 top-0 bottom-0 bg-[#F20D18] shadow-[0_0_10px_#F20D18]"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-2 border-[#F20D18] shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity"
              style={{ left: `${progressPercent}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between font-mono text-xs text-white">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handlePlayPause}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F20D18] hover:text-white flex items-center justify-center transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
              </button>

              <button
                onClick={() => handleSkip(-5)}
                className="p-1.5 text-white/70 hover:text-white transition-colors"
                title="Rewind 5 seconds"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleSkip(5)}
                className="p-1.5 text-white/70 hover:text-white transition-colors"
                title="Forward 5 seconds"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleMuteToggle}
                  className="p-1.5 text-white/70 hover:text-[#F20D18] transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[11px] text-white/80 tabular-nums">
                <span className="text-[#F20D18] font-bold">{formatTime(currentTime)}</span>
                <span className="text-white/40"> / </span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[10px] text-white/50 tracking-widest uppercase">
                {video.productionTech || "NEURAL GENERATION & ANAMORPHIC COMPOSITING"}
              </span>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-white/60 gap-3 shrink-0">
        <div className="flex items-center gap-2 text-white/80">
          <Sparkles className="w-3.5 h-3.5 text-[#F20D18]" />
          <span>{video.description}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-white/40">TAGS:</span>
          {video.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[#F20D18] font-bold text-[10px] uppercase">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
