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
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afterthat.in"),
  title: "AFTER THAT ENTERTAINMENT | Ideas. People. Brands. Beyond.",
  description:
    "AFTER THAT ENTERTAINMENT is an independent integrated creative, advertising, digital marketing and technology agency operating across Kochi, Bangalore and Ahmedabad. From brand strategy and commercial ad films to performance marketing, custom software, and AI creative technology.",
  keywords: [
    "AFTER THAT ENTERTAINMENT",
    "AFTER THAT",
    "Creative advertising agency",
    "Advertising agency in Kochi",
    "Digital marketing agency in Kochi",
    "Branding and brand identity services",
    "Ad film production",
    "AI video advertisements",
    "Social media marketing services",
    "Performance marketing",
    "SEO services",
    "Website development",
    "E-commerce website development",
    "Mobile app development",
    "Custom software development",
    "Company profile design",
    "Investor pitch deck design",
    "Celebrity management",
    "Public relations and PR campaigns",
    "Kochi",
    "Bangalore",
    "Ahmedabad",
  ],
  authors: [{ name: "AFTER THAT ENTERTAINMENT LLP" }],
  alternates: {
    canonical: "https://www.afterthat.in",
  },
  openGraph: {
    title: "AFTER THAT ENTERTAINMENT | Ideas. People. Brands. Beyond.",
    description:
      "Independent integrated creative, advertising, digital marketing and technology agency. We bring strategy, creativity, advertising, marketing and technology together.",
    url: "https://www.afterthat.in",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFTER THAT ENTERTAINMENT | Integrated Creative & Tech Agency",
    description:
      "Ideas. People. Brands. Beyond. Operating across Kochi, Bangalore & Ahmedabad.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: "AFTER THAT ENTERTAINMENT LLP",
    alternateName: "AFTER THAT",
    url: "https://www.afterthat.in",
    logo: "https://www.afterthat.in/public/next.svg",
    description:
      "Independent integrated creative, advertising, digital marketing and technology agency bringing strategy, creativity, media production, marketing and technology together.",
    telephone: "+91-96561-66555",
    email: "connect@afterthat.in",
    sameAs: ["https://www.instagram.com/afterthat.in/"],
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Ahmedabad" },
    ],
    serviceArea: "India & International",
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${anton.variable} ${jbMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white font-sans antialiased selection:bg-[#F20D18] selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
