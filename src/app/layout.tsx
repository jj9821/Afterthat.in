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
  title: {
    default: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
    template: "%s | AFTER THAT",
  },
  description:
    "AFTER THAT is an independent creative agency delivering branding, advertising, digital marketing, commercial film production and technology solutions for ambitious brands across India.",
  keywords: [
    "Creative agency in India",
    "Creative agency India",
    "Best creative agencies in India",
    "Branding agency India",
    "Brand identity agency India",
    "Advertising agency India",
    "Ad film production company India",
    "Commercial video production company India",
    "Digital marketing agency India",
    "Performance marketing agency India",
    "Website development company India",
    "Custom software development company India",
    "Mobile app development company India",
    "Influencer marketing agency India",
    "PR agency India",
    "AFTER THAT ENTERTAINMENT",
    "AFTER THAT",
    "Kochi",
    "Bangalore",
    "Ahmedabad",
  ],
  authors: [{ name: "AFTER THAT ENTERTAINMENT LLP", url: "https://www.afterthat.in" }],
  creator: "AFTER THAT ENTERTAINMENT LLP",
  publisher: "AFTER THAT ENTERTAINMENT LLP",
  alternates: {
    canonical: "https://www.afterthat.in",
  },
  openGraph: {
    title: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
    description:
      "AFTER THAT is an independent creative agency delivering branding, advertising, digital marketing, film production and technology solutions for ambitious brands.",
    url: "https://www.afterthat.in",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/portfolio/branding/dizzire/cover.webp",
        width: 1200,
        height: 630,
        alt: "AFTER THAT ENTERTAINMENT LLP - Integrated Creative & Tech Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFTER THAT | Creative, Branding, Advertising & Digital Agency India",
    description:
      "Ideas. People. Brands. Beyond. Integrated creative, advertising, digital marketing and technology agency in India.",
    images: ["/portfolio/branding/dizzire/cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "@id": "https://www.afterthat.in/#organization",
    name: "AFTER THAT ENTERTAINMENT LLP",
    alternateName: ["AFTER THAT", "After That Entertainment"],
    legalName: "After That Entertainment LLP",
    url: "https://www.afterthat.in",
    logo: "https://www.afterthat.in/next.svg",
    description:
      "Independent integrated creative, advertising, digital marketing and technology agency bringing strategy, creativity, media production, marketing and bespoke software engineering together.",
    telephone: "+91-96561-66555",
    email: "connect@afterthat.in",
    sameAs: ["https://www.instagram.com/afterthat.in/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Ahmedabad" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "9.9312",
        longitude: "76.2673",
      },
      geoRadius: "5000000",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.afterthat.in/#website",
    url: "https://www.afterthat.in",
    name: "AFTER THAT ENTERTAINMENT",
    description: "Creative, Branding, Advertising, Digital Marketing & Technology Agency in India",
    publisher: {
      "@id": "https://www.afterthat.in/#organization",
    },
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${anton.variable} ${jbMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white font-sans antialiased selection:bg-[#F20D18] selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
