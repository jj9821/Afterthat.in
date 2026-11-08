import { Metadata } from "next";
import DizzireShowcaseClient from "./DizzireShowcaseClient";

export const metadata: Metadata = {
  title: "DIZZIRE SILK AND SAREES — Elegance Woven Into Every Thread",
  description:
    "A contemporary fashion identity inspired by the elegance of Indian silk, combining distinctive visual symbolism, editorial campaign imagery and retail applications. Based in Kothamangalam, Kerala.",
  keywords: [
    "Dizzire Silk and Sarees",
    "Luxury saree branding",
    "Fashion brand identity Kerala",
    "Retail showroom identity",
    "AFTER THAT ENTERTAINMENT",
    "Textile branding India",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
  },
  openGraph: {
    title: "DIZZIRE SILK AND SAREES — Case Study | AFTER THAT ENTERTAINMENT",
    description:
      "A refined and contemporary fashion identity rooted in Indian textile heritage, celebrating silk sarees, individuality, elegance and tradition. Located in Kothamangalam, Kerala.",
    url: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    images: [
      {
        url: "/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp",
        width: 1200,
        height: 630,
        alt: "Dizzire Silk and Sarees — Elegance Woven Into Every Thread",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIZZIRE SILK AND SAREES | AFTER THAT ENTERTAINMENT",
    description:
      "Elegance woven into every thread — contemporary luxury fashion and textile identity for Dizzire Silk and Sarees, Kothamangalam, Kerala.",
    images: ["/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp"],
  },
};

export default function DizzirePage() {
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://www.afterthat.in/work/dizzire-silk-and-sarees#work",
    headline: "DIZZIRE SILK AND SAREES — Elegance Woven Into Every Thread",
    name: "Dizzire Silk and Sarees",
    description:
      "A contemporary luxury fashion identity inspired by the elegance of Indian silk, combining distinctive visual symbolism, editorial campaign imagery and retail applications.",
    image: "https://www.afterthat.in/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp",
    creator: {
      "@type": "AdvertisingAgency",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: "https://www.afterthat.in",
    },
    locationCreated: {
      "@type": "Place",
      name: "Kothamangalam, Kerala, India",
    },
    genre: "Luxury Fashion & Retail Brand Identity",
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
        item: "https://www.afterthat.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://www.afterthat.in/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dizzire Silk and Sarees",
        item: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
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
      <DizzireShowcaseClient />
    </>
  );
}
