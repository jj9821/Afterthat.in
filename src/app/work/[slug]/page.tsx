import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | AFTER THAT ENTERTAINMENT",
    };
  }

  const siteUrl = "https://www.afterthat.in";
  const canonicalUrl = `${siteUrl}/work/${project.slug}`;

  return {
    title: `${project.title} — Case Study`,
    description: project.headline || project.description,
    keywords: [
      project.title,
      ...(project.client ? [project.client] : []),
      project.categoryLabel,
      "Case study",
      "AFTER THAT ENTERTAINMENT",
      "Creative agency India",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | AFTER THAT ENTERTAINMENT`,
      description: project.headline || project.description,
      url: canonicalUrl,
      siteName: "AFTER THAT ENTERTAINMENT",
      locale: "en_IN",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | AFTER THAT`,
      description: project.headline || project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find index for previous / next project navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Suggest up to 2 related projects from the same or related categories
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.category === project.category || p.categoryLabel === project.categoryLabel)
  ).slice(0, 2);

  const siteUrl = "https://www.afterthat.in";
  const canonicalUrl = `${siteUrl}/work/${project.slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonicalUrl}#work`,
    headline: `${project.title} — ${project.categoryLabel}`,
    name: project.title,
    description: project.headline || project.description,
    image: `${siteUrl}${project.coverImage}`,
    creator: {
      "@type": "AdvertisingAgency",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: siteUrl,
    },
    ...(project.client
      ? {
          provider: {
            "@type": "Organization",
            name: project.client,
          },
        }
      : {}),
    genre: project.categoryLabel,
    inLanguage: "en",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${siteUrl}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectDetailClient
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects.length > 0 ? relatedProjects : PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2)}
      />
    </>
  );
}
