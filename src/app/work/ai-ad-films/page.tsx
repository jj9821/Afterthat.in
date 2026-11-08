import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";

export const metadata: Metadata = {
  title: "AI Advertising Films & Commercial Cinema",
  description:
    "Explore AI-powered commercial advertising films, fashion spots, and cinematic storytelling produced by AFTER THAT ENTERTAINMENT across India.",
  keywords: [
    "AI video advertisements India",
    "AI commercial production company",
    "Generative AI ad films",
    "Cinematic commercial cinema",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/ai-ad-films",
  },
  openGraph: {
    title: "AI Advertising Films & Commercial Cinema | AFTER THAT",
    description:
      "Explore AI-powered commercial advertising films, fashion spots, and cinematic storytelling produced by AFTER THAT ENTERTAINMENT across India.",
    url: "https://www.afterthat.in/work/ai-ad-films",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
  },
};

export default function AIAdFilmsPage() {
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
        name: "AI Ad Films",
        item: "https://www.afterthat.in/work/ai-ad-films",
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
        <AIAdFilmsSection />
      </div>

      <Footer />
    </div>
  );
}
