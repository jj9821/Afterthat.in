import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
  description:
    "AFTER THAT is a creative agency delivering branding, advertising, digital marketing, film production and technology solutions for ambitious brands.",
  alternates: {
    canonical: "https://www.afterthat.in",
  },
  openGraph: {
    title: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
    description:
      "AFTER THAT is a creative agency delivering branding, advertising, digital marketing, film production and technology solutions for ambitious brands.",
    url: "https://www.afterthat.in",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/portfolio/branding/dizzire/cover.webp",
        width: 1200,
        height: 630,
        alt: "AFTER THAT ENTERTAINMENT — Creative, Branding, Advertising & Digital Agency India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
    description:
      "AFTER THAT is a creative agency delivering branding, advertising, digital marketing, film production and technology solutions for ambitious brands.",
    images: ["/portfolio/branding/dizzire/cover.webp"],
  },
};

export default function HomePage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
