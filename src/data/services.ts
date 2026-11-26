import { VerticalService } from "@/types";
export type { VerticalService };

export const SERVICES: VerticalService[] = [
  {
    number: "01",
    id: "brand-strategy-identity",
    title: "Brand Strategy & Identity",
    shortTitle: "BRANDING & IDENTITY",
    headline: "BUILD A BRAND PEOPLE RECOGNISE, TRUST AND REMEMBER.",
    description:
      "Strategic positioning, visual identity architecture, multi-SKU packaging systems, and institutional collateral engineered for long-term commercial authority.",
    editorialIntro:
      "Identity begins with commercial clarity—interrogating product truth, buyer psychology, and competitive whitespace to craft naming, design systems, and packaging that command shelf and screen.",
    services: [
      "Brand Positioning & Competitive Whitespace Audit",
      "Naming, Taglines & Verbal Tone Systems",
      "Primary Logo Suites, Monograms & 40+ Page Guidelines",
      "Multi-SKU Packaging Die-Lines & Structural Labels",
      "Investor Pitch Decks, Stationery & Retail Collateral",
    ],
    projectReferences: [
      {
        title: "DIZZIRE SILK AND SAREES",
        client: "Dizzire Silk and Sarees",
        slug: "dizzire-silk-and-sarees",
        role: "Luxury Bridal Brand Identity & Guidelines",
        image: "/portfolio/dizzire/shopping-bags/shopping-bag-luxury-crimson-red.webp",
      },
      {
        title: "HappEats Dry Fruits & Snacks",
        client: "HappEats (Premium Bio Ingredients)",
        slug: "hapeats-fmcg-packaging",
        role: "Multi-SKU FMCG Packaging Architecture",
        image: "/portfolio/branding/hapeats/pouch-almonds.webp",
      },
    ],
    engagementModels: ["4–8 Week Brand Launch Sprint"],
    bgImage: "/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp",
    tagline: "Strategic clarity meets high-impact visual identity.",
  },
  {
    number: "02",
    id: "advertising-media-production",
    title: "Advertising & Media Production",
    shortTitle: "ADVERTISING & PRODUCTION",
    headline: "TURN IDEAS INTO POWERFUL VISUAL EXPERIENCES.",
    description:
      "Broadcast commercial ad films, editorial shoots, AI-powered commercials, and outdoor campaigns built from script treatment through final grade.",
    editorialIntro:
      "We unite live film production with generative AI video workflows—delivering theatrical commercials, short-form reels, and outdoor campaigns engineered for instant recall.",
    services: [
      "Broadcast TV Commercials & Theatrical Ad Films",
      "High-Velocity Reels & Short-Form Video Production",
      "Commercial Product & Fashion Editorial Photography",
      "Generative AI Commercials & Avatar Ad Workflows",
      "Script-to-Screen Direction, ACES Color & Outdoor Hoardings",
    ],
    projectReferences: [
      {
        title: "HappEats Packaging & Fleet Media",
        client: "HappEats (Premium Bio Ingredients)",
        slug: "hapeats-fmcg-packaging",
        role: "Commercial Vehicle Wraps & Retail Rollout",
        image: "/portfolio/branding/hapeats/truck-fleet.webp",
      },
      {
        title: "Milli Flame Parisian Dining",
        client: "Milli Flame",
        slug: "milli-flame-bistro-paris",
        role: "Hospitality Identity & Visual Atmosphere",
        image: "/portfolio/milli-flame/hero/restaurant-interior-booth.webp",
      },
    ],
    engagementModels: ["Turnkey Commercial & AI Film Production"],
    bgImage: "/media/featured-film/eva-gold-bts.webp",
    tagline: "Commercial cinema, editorial photography & AI-powered visuals.",
  },
  {
    number: "03",
    id: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    shortTitle: "DIGITAL MARKETING",
    headline: "MAKE YOUR DIGITAL PRESENCE WORK HARDER.",
    description:
      "Performance media, organic search, and rapid creative testing designed to convert high-intent audiences into measurable revenue pipelines.",
    editorialIntro:
      "Traffic without buyer intent is noise. We pair audience segmentation with structured creative iteration across Meta, Google Ads, and organic search to lower CAC and scale acquisition.",
    services: [
      "Psychographic Buyer Funnel & Channel Strategy",
      "Meta Ads (Instagram & Facebook) Testing & Scaling",
      "Google Search, Performance Max & Technical SEO",
      "Monthly High-Cadence Social Content Engines",
      "Conversion Rate Optimisation & Attribution Reporting",
    ],
    projectReferences: [
      {
        title: "KAKAPO Streetwear Lookbook",
        client: "KAKAPO",
        slug: "kakapo",
        role: "Editorial Campaign & Social Direction",
        image: "/portfolio/kakapo/hero-green-editorial.webp",
      },
      {
        title: "Dizzire Multi-Format Social Suite",
        client: "Dizzire Silk and Sarees",
        slug: "dizzire-silk-and-sarees",
        role: "Bridal Campaign Creatives & Print Presence",
        image: "/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp",
      },
    ],
    engagementModels: ["Monthly Growth & Performance Retainer"],
    bgImage: "/portfolio/digital-marketing/bakers-point/instagram-grid.webp",
    tagline: "Performance-driven growth, paid media & organic visibility.",
  },
  {
    number: "04",
    id: "website-app-software",
    title: "Website, App & Software Development",
    shortTitle: "TECH & SOFTWARE",
    headline: "BUILD DIGITAL EXPERIENCES THAT MOVE YOUR BUSINESS FORWARD.",
    description:
      "Bespoke web flagships, native mobile apps, e-commerce platforms, and custom business software built with modern engineering standards.",
    editorialIntro:
      "We replace slow template builds with custom Next.js flagships, mobile applications, and internal workflow tools—engineered for speed, clear UX, and reliable scale.",
    services: [
      "High-Speed Next.js Brand Flagships & Microsites",
      "Headless E-Commerce Storefronts & Checkout Flows",
      "Native iOS & Android Mobile App Development",
      "Custom Internal CRMs, Dashboards & Cloud APIs",
      "UI Design Systems, Core Web Vitals & SLA Support",
    ],
    projectReferences: [
      {
        title: "Milli Flame Digital Ordering Suite",
        client: "Milli Flame",
        slug: "milli-flame-bistro-paris",
        role: "Mobile Ordering Interface & Digital Touchpoints",
        image: "/portfolio/milli-flame/digital/mobile-ordering-splash-screen.webp",
      },
      {
        title: "KAKAPO Digital Spec System",
        client: "KAKAPO",
        slug: "kakapo",
        role: "Digital Lookbook & Garment Production Specs",
        image: "/portfolio/kakapo/crop-black-hoodie-mockup.webp",
      },
    ],
    engagementModels: ["Fixed-Scope Flagship Web & App Engineering"],
    bgImage: "/portfolio/milli-flame/digital/mobile-ordering-splash-screen.webp",
    tagline: "Custom web flagships, mobile apps & scalable business software.",
  },
  {
    number: "05",
    id: "pr-celebrity-brand-experiences",
    title: "PR, Celebrity & Brand Experiences",
    shortTitle: "PR & EXPERIENCES",
    headline: "CREATE VISIBILITY. BUILD CONNECTIONS. MAKE AN IMPRESSION.",
    description:
      "Media publicity, celebrity endorsements, creator partnerships, and large-scale live activations that earn sustained cultural attention.",
    editorialIntro:
      "Cultural momentum requires trusted voices and memorable physical experiences. We orchestrate press placements, talent collaborations, and live brand activations that build instant authority.",
    services: [
      "Celebrity Management & Strategic Endorsement Deals",
      "Regional Creator & Influencer Campaign Rollouts",
      "National Print, Digital & Broadcast PR Placements",
      "Live Product Launches, Concerts & Stage Direction",
      "Retail Storefront Activations & Experiential Pop-Ups",
    ],
    projectReferences: [
      {
        title: "Milli Flame Hospitality Launch",
        client: "Milli Flame",
        slug: "milli-flame-bistro-paris",
        role: "Guest Experience, Uniforms & Physical Collateral",
        image: "/portfolio/milli-flame/packaging/takeaway-coffee-cups-cluster.webp",
      },
      {
        title: "Dizzire Showroom & Flagship Debut",
        client: "Dizzire Silk and Sarees",
        slug: "dizzire-silk-and-sarees",
        role: "Launch Stationery, Invites & Press Presence",
        image: "/portfolio/dizzire/hero/dizzire-hero-campaign-saree.webp",
      },
    ],
    engagementModels: ["Turnkey Activation & Talent Management"],
    bgImage: "/portfolio/events-pr/calicut-banger/poster.webp",
    tagline: "High-level publicity, celebrity alignment & immersive live activations.",
  },
];
