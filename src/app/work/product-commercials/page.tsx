import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";

export const metadata: Metadata = {
  title: "Product Commercials & Ad Film Showcase",
  description:
    "Product commercials, FMCG launch films, and high-impact digital advertising productions by AFTER THAT across India.",
  keywords: [
    "Product commercials India",
    "Commercial video production company",
    "FMCG product films",
    "TV commercial advertising",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work/product-commercials",
  },
  openGraph: {
    title: "Product Commercials & Ad Film Showcase | AFTER THAT",
    description:
      "Product commercials, FMCG launch films, and high-impact digital advertising productions by AFTER THAT across India.",
    url: "https://www.afterthat.in/work/product-commercials",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
  },
};

export default function ProductCommercialsPage() {
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
        name: "Product Commercials",
        item: "https://www.afterthat.in/work/product-commercials",
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
