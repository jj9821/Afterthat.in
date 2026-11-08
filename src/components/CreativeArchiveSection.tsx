"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Play,
  Maximize2,
  Filter,
  Layers,
} from "lucide-react";
import { AI_AD_FILMS, PITCH_DECKS, PHOTOGRAPHY } from "@/data/creative-archive";
import { AIAdFilm, PitchDeck, PhotographyItem } from "@/types/creative-archive";
import { sound } from "@/utils/sound";
import VideoPlayerModal from "@/components/archive/VideoPlayerModal";
import PitchDeckViewerModal from "@/components/archive/PitchDeckViewerModal";
import ImageViewerModal from "@/components/ImageViewerModal";
import { PortfolioImage } from "@/types";
import MagneticButton from "@/components/motion/MagneticButton";

type ArchiveFilter =
  | "ALL"
  | "AI AD FILMS"
  | "BRAND CAMPAIGNS"
  | "PRODUCT COMMERCIALS"
  | "CREATIVE PHOTOGRAPHY"
  | "PITCH DECKS"
  | "EXPERIMENTAL WORKS";

interface ArchiveCardItem {
  id: string;
  type: "video" | "deck" | "photo";
  title: string;
  client: string;
  categoryLabel: string;
  filterCategories: ArchiveFilter[];
  thumbnail: string;
  description: string;
  aspect: "landscape" | "portrait" | "square";
  metaBadge: string;
  videoData?: AIAdFilm;
  deckData?: PitchDeck;
  photoData?: PhotographyItem;
}

export default function CreativeArchiveSection() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<AIAdFilm | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<PitchDeck | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters: { label: ArchiveFilter; count?: number }[] = [
    { label: "ALL" },
    { label: "AI AD FILMS" },
    { label: "BRAND CAMPAIGNS" },
    { label: "PRODUCT COMMERCIALS" },
    { label: "CREATIVE PHOTOGRAPHY" },
    { label: "PITCH DECKS" },
    { label: "EXPERIMENTAL WORKS" },
  ];

  // Map all assets into unified creative archive items
  const allItems: ArchiveCardItem[] = useMemo(() => {
    const items: ArchiveCardItem[] = [];

    // 1. AI Ad Films
    AI_AD_FILMS.forEach((film) => {
      const isProduct = film.categoryKey === "ai-product-commercials";
      const isExperimental = film.categoryKey === "experimental-ai";
      const isBrand = film.categoryKey === "ai-brand-films" || film.categoryKey === "ai-fashion-ads";

      const categories: ArchiveFilter[] = ["AI AD FILMS"];
      if (isProduct) categories.push("PRODUCT COMMERCIALS");
      if (isExperimental) categories.push("EXPERIMENTAL WORKS");
      if (isBrand) categories.push("BRAND CAMPAIGNS");

      items.push({
        id: `film-${film.id}`,
        type: "video",
        title: film.title,
        client: film.client,
        categoryLabel: film.category,
        filterCategories: categories,
        thumbnail: film.thumbnailUrl,
        description: film.description,
        aspect: "landscape",
        metaBadge: `${film.resolution} • ${film.durationFormatted}`,
        videoData: film,
      });
    });

    // 2. Pitch Decks
    PITCH_DECKS.forEach((deck) => {
      const isBrand = deck.category.includes("BRAND") || deck.tags.includes("Brand Strategy");
      const isProduct = deck.category.includes("FMCG");
      const categories: ArchiveFilter[] = ["PITCH DECKS"];
      if (isBrand) categories.push("BRAND CAMPAIGNS");
      if (isProduct) categories.push("PRODUCT COMMERCIALS");

      items.push({
        id: `deck-${deck.id}`,
        type: "deck",
        title: deck.title,
        client: deck.client,
        categoryLabel: deck.category,
        filterCategories: categories,
        thumbnail: deck.coverImage,
        description: deck.description,
        aspect: "landscape",
        metaBadge: `${deck.slidesCount} SLIDES`,
        deckData: deck,
      });
    });

    // 3. Creative Photography
    PHOTOGRAPHY.forEach((photo) => {
      const isExperimental = photo.tags.includes("Neural Diffusion");
      const categories: ArchiveFilter[] = ["CREATIVE PHOTOGRAPHY"];
      if (isExperimental) categories.push("EXPERIMENTAL WORKS");
      categories.push("BRAND CAMPAIGNS");

      items.push({
        id: `photo-${photo.id}`,
        type: "photo",
        title: photo.title,
        client: photo.client,
        categoryLabel: photo.category,
        filterCategories: categories,
        thumbnail: photo.image,
        description: photo.description,
        aspect: photo.aspect,
        metaBadge: "HI-RES STILL",
        photoData: photo,
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") return allItems;
    return allItems.filter((item) => item.filterCategories.includes(activeFilter));
  }, [allItems, activeFilter]);

  // Transform photography items to PortfolioImage array for light box
  const photoGalleryImages: PortfolioImage[] = useMemo(() => {
    return PHOTOGRAPHY.map((p) => ({
      src: p.image,
      alt: p.title,
      caption: p.description,
    }));
  }, []);

  const handleCardClick = (item: ArchiveCardItem) => {
    sound.playClick();
    if (item.type === "video" && item.videoData) {
      setSelectedVideo(item.videoData);
    } else if (item.type === "deck" && item.deckData) {
      setSelectedDeck(item.deckData);
    } else if (item.type === "photo" && item.photoData) {
      const pIdx = PHOTOGRAPHY.findIndex((p) => p.id === item.photoData?.id);
      setSelectedPhotoIndex(pIdx >= 0 ? pIdx : 0);
    }
  };

  return (
    <section
      id="creative-archive"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F20D18]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 07</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60 tracking-widest">
                THE CREATIVE ARCHIVE · VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              THE CREATIVE <span className="text-[#F20D18]">ARCHIVE.</span>
            </h2>
            <div className="font-anton text-2xl sm:text-4xl text-white/80 uppercase tracking-wide">
              IDEAS MADE <span className="text-[#F20D18]">VISIBLE.</span>
            </div>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] space-y-2 leading-relaxed">
            <p>
              A collection of visual stories, advertising experiments, AI-powered commercials, creative campaigns and presentations developed by AFTER THAT.
            </p>
            <div className="flex items-center gap-4 text-[#F20D18] font-bold">
              <span>• 28 CURATED ASSETS</span>
              <span>• ZERO TEMPLATES</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest mr-3 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#F20D18]" /> ARCHIVE:
          </span>
          {filters.map((f) => (
            <MagneticButton key={f.label} strength={0.2}>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(f.label);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 shrink-0 border transition-all duration-200 ${
                  activeFilter === f.label
                    ? "bg-[#F20D18] border-[#F20D18] text-white font-bold shadow-[0_0_15px_rgba(242,13,24,0.6)]"
                    : "bg-transparent border-white/15 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {f.label}
              </button>
            </MagneticButton>
          ))}
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="bg-[#0E0E0E] border border-white/10 hover:border-[#F20D18] transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Media Card Thumbnail Container */}
              <div
                className={`relative w-full bg-black overflow-hidden ${
                  item.aspect === "portrait"
                    ? "aspect-[4/5]"
                    : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Center Action Icon Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.type === "video" && (
                    <div className="w-12 h-12 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center group-hover:bg-[#F20D18] group-hover:border-[#F20D18] group-hover:scale-110 transition-all duration-200 shadow-xl">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  )}
                  {item.type === "deck" && (
                    <div className="px-3 py-1.5 bg-[#F20D18] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                      <Layers className="w-3.5 h-3.5" />
                      <span>OPEN DECK</span>
                    </div>
                  )}
                  {item.type === "photo" && (
                    <div className="w-10 h-10 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center group-hover:bg-[#F20D18] group-hover:border-[#F20D18] group-hover:scale-110 transition-all duration-200 shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                      item.type === "video"
                        ? "bg-[#F20D18] text-white"
                        : item.type === "deck"
                        ? "bg-white text-black"
                        : "bg-black/80 text-[#F20D18] border border-white/20"
                    }`}
                  >
                    {item.type === "video" ? "AI FILM" : item.type === "deck" ? "PITCH DECK" : "PHOTOGRAPHY"}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white">
                  {item.metaBadge}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase block">
                    // {item.categoryLabel}
                  </span>
                  <h3 className="font-anton text-xl uppercase tracking-tight text-white group-hover:text-[#F20D18] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-space text-xs text-[#888888] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/50 text-[11px] truncate max-w-[140px]">
                    {item.client}
                  </span>
                  <span className="text-[#F20D18] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {item.type === "video" ? "WATCH" : item.type === "deck" ? "VIEW SLIDES" : "EXPAND"} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Pitch Deck Viewer Modal */}
      <PitchDeckViewerModal
        deck={selectedDeck}
        onClose={() => setSelectedDeck(null)}
      />

      {/* High-Resolution Image Lightbox */}
      {selectedPhotoIndex !== null && (
        <ImageViewerModal
          images={photoGalleryImages}
          currentIndex={selectedPhotoIndex}
          isOpen={selectedPhotoIndex !== null}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(idx) => setSelectedPhotoIndex(idx)}
        />
      )}
    </section>
  );
}
