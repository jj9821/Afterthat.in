import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_SERVICES, SEO_SERVICE_SLUGS } from "@/data/seo-services";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SEO_SERVICE_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SEO_SERVICES[slug];

  if (!service) {
    return {
      title: "Service Not Found | AFTER THAT ENTERTAINMENT",
    };
  }

  const canonicalUrl = `https://www.afterthat.in/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords, "AFTER THAT", "India"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: "AFTER THAT ENTERTAINMENT",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: service.caseStudies[0]?.image || "/portfolio/branding/dizzire/cover.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} — AFTER THAT ENTERTAINMENT`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.caseStudies[0]?.image || "/portfolio/branding/dizzire/cover.webp"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SEO_SERVICES[slug];

  if (!service) {
    notFound();
  }

  // JSON-LD Structured Data: Service Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.afterthat.in/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.primaryKeyword,
    description: service.metaDescription,
    provider: {
      "@type": "AdvertisingAgency",
      "@id": "https://www.afterthat.in/#organization",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: "https://www.afterthat.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Capabilities`,
      itemListElement: service.deliverables.flatMap((group, groupIdx) =>
        group.items.map((item, itemIdx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item,
            category: group.category,
          },
          position: groupIdx * 10 + itemIdx + 1,
        }))
      ),
    },
  };

  // JSON-LD Structured Data: BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.afterthat.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.afterthat.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `https://www.afterthat.in/services/${service.slug}`,
      },
    ],
  };

  // JSON-LD Structured Data: FAQPage Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
