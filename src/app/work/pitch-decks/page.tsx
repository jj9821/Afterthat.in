import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PitchDecksSection from "@/components/PitchDecksSection";

export const metadata: Metadata = {
  title: "Investor Pitch Decks & Corporate Presentations",
  description:
    "Explore strategic brand presentations, investor fundraising decks, and commercial proposals developed by AFTER THAT for high-growth enterprises.",
  keywords: [
    "Pitch deck design agency India",
    "Investor presentation design",
    "Company profile design",
    "Commercial proposals",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/pitch-decks",
  },
  openGraph: {
    title: "Investor Pitch Decks & Corporate Presentations | AFTER THAT",
    description:
      "Strategic brand presentations, investor fundraising decks, and commercial proposals developed by AFTER THAT for high-growth enterprises.",
    url: "https://www.afterthat.in/work/pitch-decks",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
  },
};

export default function PitchDecksPage() {
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
        name: "Pitch Decks",
        item: "https://www.afterthat.in/work/pitch-decks",
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
        <PitchDecksSection />
      </div>

      <Footer />
    </div>
  );
}
