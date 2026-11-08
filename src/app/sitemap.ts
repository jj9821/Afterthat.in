import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SEO_SERVICE_SLUGS } from "@/data/seo-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.afterthat.in";
  const lastModified = new Date();

  // Core Indexable Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work/ai-ad-films`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/brand-campaigns`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/product-commercials`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/creative-photography`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/pitch-decks`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/kakapo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/dizzire-silk-and-sarees`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/milli-flame-bistro-paris`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Dedicated National Service Landing Pages (8 Core Verticals)
  const serviceRoutes: MetadataRoute.Sitemap = SEO_SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Dynamic Case Studies from Projects Manifest
  // Filter out any standalone custom slugs to avoid duplicate entries
  const standaloneSlugs = new Set(["kakapo", "dizzire-silk-and-sarees", "milli-flame-bistro-paris", "dizzire", "milli-flame"]);
  const dynamicProjectRoutes: MetadataRoute.Sitemap = PROJECTS
    .filter((project) => !standaloneSlugs.has(project.slug))
    .map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  return [...coreRoutes, ...serviceRoutes, ...dynamicProjectRoutes];
}
