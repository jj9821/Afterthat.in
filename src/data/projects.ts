import portfolioData from "./portfolio.json";
import { PortfolioProject } from "@/types";

export const PROJECTS: PortfolioProject[] = (portfolioData as PortfolioProject[]).map((p) => ({
  ...p,
  role: p.headline || p.categoryLabel,
  tagline: p.headline,
  overview: p.description,
  challenges: p.challenge,
  secondaryImage: p.images && p.images.length > 1 ? p.images[1].src : p.coverImage,
  gallery: p.images && p.images.length > 0 ? p.images.map((img) => img.src) : [p.coverImage],
  colorAccent: "#F20D18",
  credits: p.credits || {
    director: "Anand Bhairav",
    producer: "AFTER THAT ENTERTAINMENT LLP",
    strategy: "AFTER THAT Integrated Agency",
  },
}));

export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return PROJECTS.find(
    (p) =>
      p.slug === slug ||
      p.id === slug ||
      (slug === "dizzire" && (p.slug === "dizzire-silk-and-sarees" || p.id === "dizzire-silk-and-sarees")) ||
      (slug === "dizzire-silk-and-sarees" && (p.slug === "dizzire-silks-and-sarees" || p.id === "dizzire-silks-and-sarees")) ||
      (slug === "dizzire-silks-and-sarees" && (p.slug === "dizzire-silk-and-sarees" || p.id === "dizzire-silk-and-sarees")) ||
      (slug === "kakapo-streetwear-identity" && (p.slug === "kakapo" || p.id === "kakapo")) ||
      (slug === "kakapo" && (p.slug === "kakapo-streetwear-identity" || p.id === "kakapo-streetwear-identity")) ||
      (slug === "milli-flame" && (p.slug === "milli-flame-bistro-paris" || p.id === "milli-flame-bistro-paris")) ||
      (slug === "milli-flame-bistro-paris" && (p.slug === "milli-flame" || p.id === "milli-flame")) ||
      ((slug === "eva-gold-broadcast-tvc" || slug === "eva-gold-commercial-cinema" || slug === "eva-gold") &&
        (p.slug === "eva-gold-and-diamonds-broadcast-tvc" || p.id === "eva-gold-and-diamonds-broadcast-tvc")) ||
      ((slug === "au-small-finance-bank" || slug === "au-bank" || slug === "au-small-finance-bank-festive-films") &&
        (p.slug === "au-small-finance-bank-festive-films" || p.id === "au-small-finance-bank-festive-films")) ||
      ((slug === "excel-diagnostic-centre" || slug === "excel-lab" || slug === "excel-diagnostic-centre-tvc") &&
        (p.slug === "excel-diagnostic-centre-tvc" || p.id === "excel-diagnostic-centre-tvc")) ||
      ((slug === "international-apparel-production" || slug === "international-models-apparel" || slug === "international-apparel") &&
        (p.slug === "international-models-9-category-apparel" || p.id === "international-models-9-category-apparel"))
  );
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === "ALL" || category === "ALL WORK") return PROJECTS;
  return PROJECTS.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() ||
      p.categoryLabel.toLowerCase().includes(category.toLowerCase())
  );
};
