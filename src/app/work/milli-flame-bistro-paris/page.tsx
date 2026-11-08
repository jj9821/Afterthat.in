import { Metadata } from "next";
import MilliFlameShowcaseClient from "./MilliFlameShowcaseClient";

export const metadata: Metadata = {
  title: "MILLI FLAME — Parisian Dining & Café",
  description:
    "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system. From food imagery and takeaway packaging to uniforms, stationery and storefront applications, Paris, France.",
  keywords: [
    "Milli Flame",
    "Restaurant branding",
    "Hospitality visual identity",
    "Bistro brand identity Paris",
    "Packaging design café",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/milli-flame-bistro-paris",
  },
  openGraph: {
    title: "MILLI FLAME: A Flame of Character. A World of Flavour. | AFTER THAT",
    description:
      "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system for Parisian dining.",
    url: "https://www.afterthat.in/work/milli-flame-bistro-paris",
    siteName: "AFTER THAT ENTERTAINMENT",
    images: [
      {
        url: "/portfolio/milli-flame/hero/restaurant-interior-booth.webp",
        width: 2481,
        height: 2045,
        alt: "Milli Flame Parisian Dining Atmosphere",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MILLI FLAME: Parisian Dining & Café | AFTER THAT",
    description:
      "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system.",
    images: ["/portfolio/milli-flame/hero/restaurant-interior-booth.webp"],
  },
};

export default function MilliFlamePage() {
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://www.afterthat.in/work/milli-flame-bistro-paris#work",
    headline: "MILLI FLAME — Parisian Dining & Café",
    name: "Milli Flame",
    description:
      "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system.",
    image: "https://www.afterthat.in/portfolio/milli-flame/hero/restaurant-interior-booth.webp",
    creator: {
      "@type": "AdvertisingAgency",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: "https://www.afterthat.in",
    },
    locationCreated: {
      "@type": "Place",
      name: "Paris, France",
    },
    genre: "Hospitality & Restaurant Brand Identity",
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
        name: "Milli Flame Bistro",
        item: "https://www.afterthat.in/work/milli-flame-bistro-paris",
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
      <MilliFlameShowcaseClient />
    </>
  );
}
