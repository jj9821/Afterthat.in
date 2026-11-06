import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, Bebas_Neue, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AFTER THAT | Cultural Production, Ad Films & Creative Studio",
  description:
    "AFTER THAT is an independent advertising, cinematic film production, and cultural creative studio founded by Anand Bhairav. We engineer cultural shockwaves through commercials, influencer marketing, music festival IP, and high-fashion digital art direction.",
  keywords: [
    "AFTER THAT",
    "After That Entertainment",
    "Anand Bhairav",
    "Advertising Agency",
    "Ad Films",
    "Cinematic Commercials",
    "Creative Studio",
    "Music Festivals",
    "Kerala Advertising",
    "Calicut",
    "Brand Strategy",
    "Digital Direction",
  ],
  authors: [{ name: "AFTER THAT Studio" }],
  openGraph: {
    title: "AFTER THAT | Beyond Ordinary Content",
    description:
      "Independent advertising, cinematic commercial production, and cultural creative studio. What happens next changes everything.",
    url: "https://afterthat.in",
    siteName: "AFTER THAT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFTER THAT | Digital Flagship",
    description: "Cinematic Ad Films • Culture • High-Impact Campaigns",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${anton.variable} ${jbMono.variable} dark`}
    >
      <body className="bg-[#080808] text-white font-sans antialiased selection:bg-[#ff2020] selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
