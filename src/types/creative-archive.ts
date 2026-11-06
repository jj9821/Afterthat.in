export interface AIAdFilm {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  categoryKey: string;
  description: string;
  duration: number; // in seconds
  durationFormatted: string; // e.g. "00:32"
  videoUrl: string;
  thumbnailUrl: string;
  aspect: "16:9" | "9:16" | "4:5";
  resolution: string; // "1080p FHD" | "4K UHD"
  year: string;
  tags: string[];
  featured: boolean;
  narrative?: string;
  productionTech?: string;
}

export interface PitchDeck {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  format: string; // e.g. "STRATEGY PITCH DECK • 16:9 HD"
  description: string;
  slidesCount: number;
  coverImage: string;
  slides: string[];
  pdfUrl?: string;
  visibility: "public" | "teaser" | "private";
  year: string;
  tags: string[];
  featured: boolean;
  scope?: string[];
}

export interface PhotographyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  aspect: "landscape" | "portrait" | "square";
  tags: string[];
  featured: boolean;
  sourcePdf?: string;
  sourcePage?: number;
}

export interface CreativeArchiveData {
  aiAdFilms: AIAdFilm[];
  pitchDecks: PitchDeck[];
  photography: PhotographyItem[];
}
