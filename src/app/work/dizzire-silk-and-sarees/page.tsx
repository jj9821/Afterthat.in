import { Metadata } from "next";
import DizzireShowcaseClient from "./DizzireShowcaseClient";

export const metadata: Metadata = {
  title: "DIZZIRE SILK AND SAREES — Elegance Woven Into Every Thread | AFTER THAT",
  description:
    "A contemporary fashion identity inspired by the elegance of Indian silk, combining distinctive visual symbolism, editorial campaign imagery and retail applications. Based in Kothamangalam, Kerala.",
  alternates: {
    canonical: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
  },
  openGraph: {
    title: "DIZZIRE SILK AND SAREES — Case Study | AFTER THAT ENTERTAINMENT",
    description:
      "A refined and contemporary fashion identity rooted in Indian textile heritage, celebrating silk sarees, individuality, elegance and tradition. Located in Kothamangalam, Kerala.",
    url: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
    siteName: "AFTER THAT ENTERTAINMENT",
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
  return <DizzireShowcaseClient />;
}
