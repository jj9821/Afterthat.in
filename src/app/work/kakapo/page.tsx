import { Metadata } from "next";
import KakapoShowcaseClient from "./KakapoShowcaseClient";

export const metadata: Metadata = {
  title: "KAKAPO — A Study in Creative Expression",
  description:
    "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
  keywords: [
    "KAKAPO",
    "Streetwear brand identity",
    "Fashion branding India",
    "Apparel packaging design",
    "AFTER THAT ENTERTAINMENT",
    "Creative studio India",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/kakapo",
  },
  openGraph: {
    title: "KAKAPO — A Study in Creative Expression | AFTER THAT",
    description:
      "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
    url: "https://www.afterthat.in/work/kakapo",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    images: [
      {
        url: "/portfolio/kakapo/hero-green-editorial.webp",
        width: 1920,
        height: 1080,
        alt: "KAKAPO Streetwear Creative Showcase",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAKAPO — A Study in Creative Expression | AFTER THAT",
    description:
      "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
    images: ["/portfolio/kakapo/hero-green-editorial.webp"],
  },
};

export default function KakapoPage() {
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://www.afterthat.in/work/kakapo#work",
    headline: "KAKAPO — A Study in Creative Expression",
    name: "KAKAPO",
    description:
      "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
    image: "https://www.afterthat.in/portfolio/kakapo/hero-green-editorial.webp",
    creator: {
      "@type": "AdvertisingAgency",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: "https://www.afterthat.in",
    },
    genre: "Fashion & Streetwear Brand Identity",
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
        name: "KAKAPO",
        item: "https://www.afterthat.in/work/kakapo",
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
      <KakapoShowcaseClient />
    </>
  );
}
