import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";

export const metadata: Metadata = {
  title: "Creative Photography & Editorial Visuals",
  description:
    "Editorial lookbooks, luxury fashion photography, commercial product styling, and high-impact visual artwork by AFTER THAT across India.",
  keywords: [
    "Creative photography India",
    "Fashion editorial photography",
    "Commercial product photography",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/creative-photography",
  },
  openGraph: {
    title: "Creative Photography & Editorial Visuals | AFTER THAT",
    description:
      "Editorial lookbooks, luxury fashion photography, commercial product styling, and visual artwork by AFTER THAT.",
    url: "https://www.afterthat.in/work/creative-photography",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
  },
};

export default function CreativePhotographyPage() {
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
        name: "Creative Photography",
        item: "https://www.afterthat.in/work/creative-photography",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CustomCursor />
      <Navbar />

      <div className="pt-24 sm:pt-32">
        <CreativeArchiveSection />
      </div>

      <Footer />
    </div>
  );
}
