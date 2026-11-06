import creativeArchiveData from "./creative-archive.json";
import { AIAdFilm, PitchDeck, PhotographyItem, CreativeArchiveData } from "@/types/creative-archive";

export const CREATIVE_ARCHIVE: CreativeArchiveData = creativeArchiveData as CreativeArchiveData;

export const AI_AD_FILMS: AIAdFilm[] = CREATIVE_ARCHIVE.aiAdFilms;
export const PITCH_DECKS: PitchDeck[] = CREATIVE_ARCHIVE.pitchDecks;
export const PHOTOGRAPHY: PhotographyItem[] = CREATIVE_ARCHIVE.photography;

export function getAIAdFilmBySlug(slug: string): AIAdFilm | undefined {
  return AI_AD_FILMS.find((film) => film.slug === slug);
}

export function getPitchDeckBySlug(slug: string): PitchDeck | undefined {
  return PITCH_DECKS.find((deck) => deck.slug === slug);
}
