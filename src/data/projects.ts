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
  return PROJECTS.find((p) => p.slug === slug || p.id === slug);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === "ALL" || category === "ALL WORK") return PROJECTS;
  return PROJECTS.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() ||
      p.categoryLabel.toLowerCase().includes(category.toLowerCase())
  );
};
