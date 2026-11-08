import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";

export const metadata: Metadata = {
  title: "Brand Campaigns & Identity Systems",
  description:
    "Integrated advertising, digital marketing, and brand identity campaigns engineered for ambitious Indian and global brands by AFTER THAT.",
  keywords: [
    "Brand campaigns India",
    "Brand identity design",
    "Integrated creative campaigns",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/brand-campaigns",
  },
  openGraph: {
    title: "Brand Campaigns & Identity Systems | AFTER THAT",
    description:
      "Integrated advertising, digital marketing, and brand identity campaigns engineered for ambitious brands by AFTER THAT.",
    url: "https://www.afterthat.in/work/brand-campaigns",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
  },
};

export default function BrandCampaignsPage() {
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
        name: "Brand Campaigns",
        item: "https://www.afterthat.in/work/brand-campaigns",
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
