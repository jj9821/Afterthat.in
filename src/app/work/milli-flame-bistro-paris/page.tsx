import { Metadata } from "next";
import MilliFlameShowcaseClient from "./MilliFlameShowcaseClient";

export const metadata: Metadata = {
  title: "MILLI FLAME — Parisian Dining & Café | AFTER THAT",
  description:
    "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system. From food imagery and takeaway packaging to uniforms, stationery and storefront applications, Paris, France.",
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
  return <MilliFlameShowcaseClient />;
}
