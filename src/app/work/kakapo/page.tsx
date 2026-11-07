import { Metadata } from "next";
import KakapoShowcaseClient from "./KakapoShowcaseClient";

export const metadata: Metadata = {
  title: "KAKAPO — A Study in Creative Expression | AFTER THAT",
  description:
    "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
  alternates: {
    canonical: "https://www.afterthat.in/work/kakapo",
  },
  openGraph: {
    title: "KAKAPO — A Study in Creative Expression | AFTER THAT",
    description:
      "A collection of visual explorations for KAKAPO, bringing together distinctive logo concepts, typography, fashion imagery, colour, clothing applications and packaging.",
    url: "https://www.afterthat.in/work/kakapo",
    siteName: "AFTER THAT ENTERTAINMENT",
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
  return <KakapoShowcaseClient />;
}
