export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  location: string;
  role: string;
  coverImage: string;
  videoUrl?: string;
  secondaryImage: string;
  gallery: string[];
  tagline: string;
  overview: string;
  challenges: string;
  deliverables: string[];
  credits?: {
    director?: string;
    producer?: string;
    dop?: string;
    postProduction?: string;
    strategy?: string;
    production?: string;
    curator?: string;
    technologyLead?: string;
    uiUxDesign?: string;
    creativeDirector?: string;
    aiSpecialist?: string;
    [key: string]: string | undefined;
  };
  featured: boolean;
  colorAccent?: string;
}

export interface VerticalService {
  number: string;
  id: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  services: string[];
  bgImage: string;
  tagline: string;
}

export type Service = VerticalService;

export interface BrandManifestoPoint {
  index: string;
  heading: string;
  subheading: string;
  text: string;
}
