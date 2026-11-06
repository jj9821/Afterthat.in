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
    title: `${project.title} — Case Study | AFTER THAT ENTERTAINMENT`,
    description: project.headline || project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | AFTER THAT ENTERTAINMENT`,
      description: project.headline || project.description,
      url: canonicalUrl,
      siteName: "AFTER THAT ENTERTAINMENT",
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

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      relatedProjects={relatedProjects.length > 0 ? relatedProjects : PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2)}
    />
  );
}
