export interface PortfolioImage {
  src: string;
  alt: string;
  sourcePdf?: string;
  sourcePage?: number;
  caption?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client?: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  year: string;
  location: string;
  headline: string;
  description: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  coverImage: string;
  images: PortfolioImage[];
  projectType: "confirmed" | "concept" | "showcase";
  verified: boolean;
  featured: boolean;
  videoUrl?: string;

  // National-Level 10-Part Case Study Architecture
  clientBackground?: string;
  strategicApproach?: string;
  creativeDirection?: string;
  executionProcess?: string;
  visualIdentityApplications?: string[];
  outcomes?: string;
  metrics?: MetricItem[];
  marketLocation?: string;
  industryVertical?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };

  credits?: {
    director?: string;
    producer?: string;
    dop?: string;
    postProduction?: string;
    strategy?: string;
    creativeDirector?: string;
    technologyLead?: string;
    [key: string]: string | undefined;
  };
  // Backwards compatibility fields
  role?: string;
  secondaryImage?: string;
  gallery?: string[];
  tagline?: string;
  overview?: string;
  challenges?: string;
  colorAccent?: string;
}

export type Project = PortfolioProject;

export interface ProjectReference {
  title: string;
  client: string;
  slug: string;
  role: string;
  image: string;
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

  // National-Level Enhanced Service Fields
  editorialIntro?: string;
  strategicValue?: string;
  keyCapabilities?: string[];
  deliverablesList?: string[];
  projectReferences?: ProjectReference[];
  engagementModels?: string[];
}

export type Service = VerticalService;

export interface BrandManifestoPoint {
  index: string;
  heading: string;
  subheading: string;
  text: string;
}
