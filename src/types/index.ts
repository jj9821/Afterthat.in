export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  location: string;
  role: string;
  coverImage: string;
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
    [key: string]: string | undefined;
  };
  featured: boolean;
  colorAccent?: string;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  bgImage: string;
  accentQuote: string;
}

export interface BrandManifestoPoint {
  index: string;
  heading: string;
  subheading: string;
  text: string;
}
