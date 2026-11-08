export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDeliverableGroup {
  category: string;
  items: string[];
}

export interface ServiceFrameworkStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceReferenceProject {
  title: string;
  client: string;
  slug: string;
  category: string;
  role: string;
  image: string;
}

export interface SEOServiceData {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  tagline: string;
  narrativeLead: string;
  businessProblemsSolved: string[];
  strategicApproach: {
    heading: string;
    description: string;
    steps: ServiceFrameworkStep[];
  };
  deliverables: ServiceDeliverableGroup[];
  caseStudies: ServiceReferenceProject[];
  faqs: ServiceFAQ[];
  timeline: string;
  commercialValue: string;
}

export const SEO_SERVICES: Record<string, SEOServiceData> = {
  "branding-and-identity": {
    slug: "branding-and-identity",
    number: "01",
    title: "Brand Strategy & Visual Identity",
    shortTitle: "BRANDING & IDENTITY",
    h1: "Branding & Brand Identity Agency in India",
    primaryKeyword: "Branding agency India",
    secondaryKeywords: [
      "Brand identity agency India",
      "Branding and design company India",
      "Brand strategy agency India",
      "Packaging design agency India",
      "Corporate branding services India",
      "Logo design agency India",
    ],
    metaTitle: "Branding & Identity Agency India | Strategy, Identity & Packaging",
    metaDescription:
      "AFTER THAT is an independent branding and identity agency in India. We engineer enduring brand strategies, visual identities, packaging systems, and corporate communications for ambitious brands.",
    heroEyebrow: "BRAND ARCHITECTURE // NATIONAL PRACTICE",
    tagline: "BUILD A BRAND PEOPLE RECOGNISE, TRUST AND REMEMBER.",
    narrativeLead:
      "A great brand is not a cosmetic decoration; it is an economic moat. In a market crowded with commoditized alternatives, distinctive brand identity grants immediate market authority, protects premium margins, and builds lifelong customer resonance. We unite deep consumer psychography, competitive whitespace analysis, and uncompromising visual craft to build enduring brand assets.",
    businessProblemsSolved: [
      "Commoditization & Price Erosion: Inability to command premium pricing due to lack of distinct brand perception.",
      "Fragmented Market Presence: Disjointed visual and verbal messaging across packaging, digital, retail, and corporate touchpoints.",
      "Outdated Legacy Image: Brand assets failing to connect with contemporary, design-literate consumers.",
      "New Product Launch Risk: Entering competitive categories without clear positioning or shelf-standout packaging architecture.",
      "Investor Dilution: Pitch presentations and corporate profiles failing to communicate institutional authority.",
    ],
    strategicApproach: {
      heading: "The 5-Stage Brand Architecture Framework",
      description:
        "We do not design in a vacuum. Every curve, typographic pairing, and color choice stems from exhaustive market interrogation and consumer behavioral truth.",
      steps: [
        {
          step: "01",
          title: "MARKET & PRODUCT INTERROGATION",
          description:
            "Deep immersion into category dynamics, competitor whitespace, audience psychographics, and the functional truth of your product.",
        },
        {
          step: "02",
          title: "CORE POSITIONING & NARRATIVE",
          description:
            "Distilling the unique brand conviction, value proposition, voice, and positioning statement that make you irreplaceable.",
        },
        {
          step: "03",
          title: "VISUAL & VERBAL DESIGN SYSTEM",
          description:
            "Crafting the core symbol, wordmark, bespoke typography, chromatic palette, iconography, and editorial tone of voice.",
        },
        {
          step: "04",
          title: "TOUCHPOINT ARCHITECTURE & PACKAGING",
          description:
            "Applying the identity across physical packaging die-lines, retail signage, digital flagships, uniforms, and corporate collateral.",
        },
        {
          step: "05",
          title: "GUIDELINES & BRAND CUSTODIANSHIP",
          description:
            "Delivering comprehensive 40+ page brand specification manuals to ensure unyielding brand consistency across regional teams and vendors.",
        },
      ],
    },
    deliverables: [
      {
        category: "Strategic Foundations",
        items: [
          "Brand positioning strategy & market whitespace mapping",
          "Brand naming & nomenclature systems",
          "Brand core values, mission & manifesto copywriting",
          "Tone of voice & verbal identity guidelines",
        ],
      },
      {
        category: "Visual Identity System",
        items: [
          "Primary logo, secondary marks & animated insignia",
          "Custom typographic hierarchy & licensing advisory",
          "Color system with CMYK, RGB, Pantone & digital hex codes",
          "Brand pattern, texture & proprietary visual device suite",
        ],
      },
      {
        category: "Packaging & Physical Touchpoints",
        items: [
          "Multi-SKU packaging die-line development & label design",
          "Retail storefront signage & architectural spatial branding",
          "Fleet vehicle liveries & logistics branding",
          "Staff uniforms, merchandise & unboxing experiences",
        ],
      },
      {
        category: "Corporate Collateral & Presentations",
        items: [
          "Executive business cards, letterheads & stationery sets",
          "Investor pitch deck & venture fundraising design",
          "Enterprise company profiles & capability brochures",
          "Comprehensive Brand Standards Manual (40+ pages)",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Dizzire Silk and Sarees",
        client: "Dizzire Silk and Sarees",
        slug: "dizzire-silk-and-sarees",
        category: "FASHION & RETAIL",
        role: "Luxury Heritage Bridal Brand Identity & Showroom System",
        image: "/portfolio/branding/dizzire/cover.webp",
      },
      {
        title: "HappEats FMCG Packaging",
        client: "HappEats (Premium Bio Ingredients)",
        slug: "hapeats-fmcg-packaging",
        category: "FMCG PACKAGING",
        role: "Multi-SKU Packaging Architecture & Fleet Branding",
        image: "/portfolio/branding/hapeats/cover.webp",
      },
      {
        title: "KAKAPO Streetwear Identity",
        client: "KAKAPO",
        slug: "kakapo",
        category: "STREETWEAR",
        role: "Avant-Garde Fashion Identity, Typography & Trims",
        image: "/portfolio/branding/kakapo/cover.webp",
      },
      {
        title: "Milli Flame Parisian Dining",
        client: "Milli Flame",
        slug: "milli-flame-bistro-paris",
        category: "HOSPITALITY",
        role: "Bespoke Bistro Identity, Flame Emblem & Print Suite",
        image: "/portfolio/branding/milli-flame/cover.webp",
      },
    ],
    faqs: [
      {
        question: "What does an enterprise brand identity project include?",
        answer:
          "An enterprise brand identity project at AFTER THAT covers deep market and consumer discovery, strategic positioning, naming (if required), logo mark and wordmark suite, custom color and typography systems, packaging die-lines, corporate stationery, investor and sales presentations, and a comprehensive 40+ page Brand Guidelines document that governs all physical and digital implementations.",
      },
      {
        question: "How long does a brand identity project take from discovery to delivery?",
        answer:
          "A comprehensive branding sprint typically takes between 4 to 8 weeks depending on the complexity of packaging die-lines, number of SKUs, and corporate deliverables. We work in structured weekly milestones with clear review gates.",
      },
      {
        question: "How does packaging design influence consumer purchase decisions in India?",
        answer:
          "In high-competition Indian retail and FMCG categories, packaging is your most vital ad placement. Distinctive structural forms, tactile finishes, and clear information hierarchy cut through visual clutter in retail aisles and drive thumb-stopping appeal on quick-commerce apps like Blinkit and Zepto.",
      },
      {
        question: "Can AFTER THAT manage trademark checks and legal registration coordination?",
        answer:
          "Yes. During the naming and logo development phase, we conduct preliminary phonetic and visual trademark clearance searches across the Controller General of Patents, Designs and Trade Marks (India) database to ensure naming defensibility prior to final asset handover.",
      },
    ],
    timeline: "4–8 Weeks",
    commercialValue: "Transforms commodity offerings into defensible market leaders commanding premium pricing power.",
  },

  "advertising-and-campaigns": {
    slug: "advertising-and-campaigns",
    number: "02",
    title: "Advertising & Commercial Campaigns",
    shortTitle: "ADVERTISING & CAMPAIGNS",
    h1: "Integrated Advertising & Commercial Campaign Agency India",
    primaryKeyword: "Advertising agency India",
    secondaryKeywords: [
      "Advertising company India",
      "Digital advertising agency India",
      "Integrated creative agency India",
      "Creative production studio India",
      "Commercial advertising campaigns India",
      "Outdoor advertising agency India",
    ],
    metaTitle: "Advertising Agency India | Integrated Commercial Campaigns",
    metaDescription:
      "Full-service advertising agency in India. We develop integrated commercial campaigns, TV & digital ads, outdoor hoardings, and creative direction that capture immediate market attention.",
    heroEyebrow: "INTEGRATED ADVERTISING // NATIONAL REACH",
    tagline: "TURN IDEAS INTO POWERFUL COMMERCIAL EXPERIENCES.",
    narrativeLead:
      "Advertising is not about noise; it is about resonant cultural interruption. In an age of automated banner blindness and thumb-scrolling fatigue, commercial communication must provoke visceral emotion, tell authentic stories, and present an irresistible reason to act. We engineer end-to-end commercial campaigns across broadcast, outdoor, and digital ecosystems that generate measurable brand recall and commercial momentum.",
    businessProblemsSolved: [
      "Thumb-Scrolling Fatigue: Audiences skipping or ignoring generic social and digital ads within 1.5 seconds.",
      "Omnichannel Disconnect: Mixed messaging where TV, digital performance ads, and hoardings speak conflicting languages.",
      "Poor Media ROI: Expensive media buys wasted on uninspiring creative that fails to trigger recall.",
      "Lack of Cultural Resonance: Corporate ad campaigns that feel disconnected from Indian consumer sentiment and regional nuances.",
      "High Cost per Acquisition: Underperforming digital ad funnels requiring excessive spend to acquire customers.",
    ],
    strategicApproach: {
      heading: "The Commercial Campaign Engine",
      description:
        "Every campaign begins with a psychographic trigger—pinpointing the exact emotional tension between what the consumer desires and what current offerings fail to deliver.",
      steps: [
        {
          step: "01",
          title: "PSYCHOGRAPHIC AUDIENCE MAPPING",
          description:
            "Identifying consumer tensions, cognitive biases, purchase triggers, and regional cultural nuances across target Indian markets.",
        },
        {
          step: "02",
          title: "CENTRAL CREATIVE PLATFORM (THE BIG IDEA)",
          description:
            "Developing an overarching, culturally resonant campaign umbrella capable of flexing across 30-second broadcast spots to 6-second vertical reels.",
        },
        {
          step: "03",
          title: "CROSS-MEDIA SCRIPTING & ART DIRECTION",
          description:
            "Drafting cinematic scripts, visual treatments, headline copy, and editorial art direction tailored to each specific distribution medium.",
        },
        {
          step: "04",
          title: "PRODUCTION & ADAPTATION SUITE",
          description:
            "Full-scale production orchestration, anamorphic optics, high-craft editing, ACES color grading, and multi-lingual voiceover dubbing.",
        },
        {
          step: "05",
          title: "PERFORMANCE DEPLOYMENT & ITERATION",
          description:
            "Executing synchronized media rollouts, A/B creative testing, hook rate analysis, and conversion telemetry to maximize return on ad spend.",
        },
      ],
    },
    deliverables: [
      {
        category: "Creative Strategy & Conceptualization",
        items: [
          "Omnichannel campaign strategy & central narrative platform",
          "Commercial TV & digital film scriptwriting and treatments",
          "Punchy copywriting for hoardings, headlines & print ads",
          "Multi-lingual linguistic adaptation (Malayalam, Hindi, Tamil, Kannada)",
        ],
      },
      {
        category: "Commercial Film & Digital Content",
        items: [
          "Broadcast TV commercial spots (15s, 30s, 60s)",
          "High-impact social video ad variations (9:16 vertical & 1:1)",
          "Top-of-funnel brand films & corporate manifestos",
          "Performance-oriented direct-response ad creative matrices",
        ],
      },
      {
        category: "Out-of-Home & Print Advertising",
        items: [
          "Large-format highway hoardings & LED wall takeovers",
          "National newspaper & luxury magazine print spreads",
          "Transit advertising (metro, airport displays, transit hubs)",
          "Point-of-sale retail merchandising & promotional activations",
        ],
      },
      {
        category: "Campaign Measurement & Assets",
        items: [
          "Multi-format asset distribution kit for media buying partners",
          "Creative performance telemetry & hook-rate analytics",
          "Post-campaign brand equity & ad recall debriefs",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Eva Gold & Diamonds — Broadcast TVC",
        client: "Eva Gold & Diamonds",
        slug: "eva-gold-and-diamonds-broadcast-tvc",
        category: "BROADCAST COMMERCIAL",
        role: "Live On-Set Commercial Cinema, Direction & Lighting Design",
        image: "/portfolio/commercial/eva-gold/cover.webp",
      },
      {
        title: "AU Small Finance Bank — Festive Film Series",
        client: "AU Small Finance Bank",
        slug: "au-small-finance-bank-festive-films",
        category: "BFSI FESTIVE CAMPAIGN",
        role: "Diwali & Onam Digital Films, Emotional Storytelling & Direction",
        image: "/portfolio/commercial/au-bank/cover.webp",
      },
      {
        title: "Excel Diagnostic Centre — 'Diagnose First' TVC",
        client: "Excel Diagnostic Centre",
        slug: "excel-diagnostic-centre-tvc",
        category: "HEALTHCARE BROADCAST",
        role: "Broadcast TV Commercial, Public Health Narrative & Production",
        image: "/portfolio/commercial/excel-lab/cover.webp",
      },
      {
        title: "International Models — 9-Category Apparel Production",
        client: "Luxury Apparel Conglomerate",
        slug: "international-models-9-category-apparel",
        category: "FASHION PRODUCTION",
        role: "9-Category Fashion Catalogue, Master Reel & E-Commerce Suite",
        image: "/portfolio/commercial/apparel-shoot/cover.webp",
      },
    ],
    faqs: [
      {
        question: "How does AFTER THAT integrate traditional and digital advertising?",
        answer:
          "We anchor every campaign around a singular, high-impact Big Idea. From that core narrative, we craft bespoke creative expressions tailored to each channel's user psychology—cinema-grade storytelling for broadcast and YouTube, punchy 3-second hook variations for Instagram Reels, and uncluttered visual clarity for 100-foot highway billboards.",
      },
      {
        question: "What industries does AFTER THAT have direct advertising experience in?",
        answer:
          "Our portfolio spans FMCG and packaged food, luxury textiles and retail, BFSI (banking and fintech), consumer technology, hospitality and dining, entertainment and large-scale live arena events.",
      },
      {
        question: "Do you handle media buying or creative production?",
        answer:
          "AFTER THAT is primarily a creative strategy and production agency. We conceptualize, script, film, design, and master all creative assets. For media distribution, we either collaborate seamlessly with your existing media planning agency or orchestrate targeted digital media buying in-house.",
      },
      {
        question: "How do you evaluate whether an advertising campaign succeeded?",
        answer:
          "We evaluate campaigns on dual horizons: qualitative brand equity (brand recall, social sentiment, press pickup) and quantitative performance indicators (click-through rates, ROAS, cost per lead, store footfalls, and uplift in sales volume during campaign flight periods).",
      },
    ],
    timeline: "3–6 Weeks per Campaign Sprint",
    commercialValue: "Replaces commoditized messaging with culturally resonant cinematic advertising that multiplies brand recall.",
  },

  "film-and-video-production": {
    slug: "film-and-video-production",
    number: "03",
    title: "Ad Film & Commercial Video Production",
    shortTitle: "AD FILMS & VIDEO",
    h1: "Commercial Ad Film & Video Production Company India",
    primaryKeyword: "Ad film production company India",
    secondaryKeywords: [
      "Commercial video production company India",
      "AI video advertisements India",
      "Brand film production company India",
      "Corporate video production India",
      "TV commercial production India",
      "Cinematic video production Kochi Bangalore",
    ],
    metaTitle: "Ad Film Production Company India | Commercials & Video",
    metaDescription:
      "Premier commercial ad film production company in India. We produce cinematic TV commercials, broadcast spots, corporate brand films, and AI-accelerated video productions.",
    heroEyebrow: "CINEMATIC CINEMA // STUDIO GRADE",
    tagline: "CINEMATIC DISCIPLINE FROM FIRST TREATMENT TO FINAL GRADE.",
    narrativeLead:
      "Moving image is the most potent instrument for emotional persuasion ever created. At AFTER THAT, commercial film production is treated with the rigor of cinema. Operating advanced production crews, anamorphic optics, and our proprietary AI creative pipeline across South India, we craft ad films that captivate audiences, evoke genuine desire, and build indelible brand prestige.",
    businessProblemsSolved: [
      "Generic Corporate Sludge: Boring talking-head videos and corporate slide decks that alienate modern viewers.",
      "Exorbitant Legacy Film Budgets: Bloated traditional film production costs with slow turnaround times.",
      "Inability to Scale Video Volume: Needing dozens of fresh video creatives monthly for digital ads without ballooning shoot days.",
      "Subpar Production Quality: Low-budget video shoots that cheapen premium brand perception.",
      "Lack of Technical Post-Production Rigor: Poor color grading, amateur sound engineering, and choppy pacing.",
    ],
    strategicApproach: {
      heading: "The 5-Stage Cinema Production Pipeline",
      description:
        "Every frame is storyboarded, lit, shot, and color-graded according to strict commercial objectives.",
      steps: [
        {
          step: "01",
          title: "TREATMENT & DIRECTORIAL VISION",
          description:
            "Translating the creative brief into a visual director's treatment, tone board, character archetypes, and script.",
        },
        {
          step: "02",
          title: "PRE-PRODUCTION & CASTING RIGOR",
          description:
            "Detailed storyboarding, actor casting, styling, location scouting, set design, and production logistical roadmaps.",
        },
        {
          step: "03",
          title: "PRINCIPAL PHOTOGRAPHY & ON-SET DIRECTION",
          description:
            "Shooting with RED/ARRI cinema platforms, anamorphic lenses, controlled lighting setups, and dedicated sound recording.",
        },
        {
          step: "04",
          title: "EDITORIAL & ACES COLOR SCIENCE",
          description:
            "Precision editing, offline cuts, motion graphics, and Hollywood-grade DaVinci Resolve color grading.",
        },
        {
          step: "05",
          title: "AI EXPANSION & NEURAL POST-PRODUCTION",
          description:
            "Deploying generative AI video workflows for surreal visuals, neural CGI enhancements, and automated multi-aspect adaptations.",
        },
      ],
    },
    deliverables: [
      {
        category: "Commercial & Broadcast Films",
        items: [
          "Broadcast TV commercial films (15s, 30s, 45s, 60s)",
          "Cinema theatre advertising reels (DCP master format)",
          "High-end fashion, apparel & beauty commercials",
          "Automotive, FMCG & lifestyle product launch films",
        ],
      },
      {
        category: "AI Commercial Video Suite",
        items: [
          "Generative AI commercial video production & neural CGI",
          "Hyper-realistic AI character & avatar video advertisements",
          "AI product commercial mockups & virtual environments",
          "Rapid-turnaround AI concept films & storyboards",
        ],
      },
      {
        category: "Brand Documentaries & Manifestos",
        items: [
          "Founder origin stories & company vision films",
          "Behind-the-scenes craft documentaries",
          "Architectural walkthroughs & hospitality films",
          "High-impact investor video presentations",
        ],
      },
      {
        category: "Technical Post-Production & Sound",
        items: [
          "ACES color grading & dynamic range optimization",
          "Bespoke sound design, Foley & cinematic audio mastering",
          "Original musical score composition & licensing",
          "Multi-lingual dubbing & synchronized subtitles",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Eva Gold & Diamonds — Broadcast TVC",
        client: "Eva Gold & Diamonds",
        slug: "eva-gold-and-diamonds-broadcast-tvc",
        category: "BROADCAST CINEMA",
        role: "4K Widescreen Anamorphic TVC, Set Direction & Lighting Design",
        image: "/portfolio/commercial/eva-gold/cover.webp",
      },
      {
        title: "AU Small Finance Bank — Festive Film Series",
        client: "AU Small Finance Bank",
        slug: "au-small-finance-bank-festive-films",
        category: "COMMERCIAL AD FILM",
        role: "Diwali & Onam Cultural Films, Direction & Bilingual Production",
        image: "/portfolio/commercial/au-bank/cover.webp",
      },
      {
        title: "Excel Diagnostic Centre — 'Diagnose First' TVC",
        client: "Excel Diagnostic Centre",
        slug: "excel-diagnostic-centre-tvc",
        category: "COMMERCIAL AD FILM",
        role: "Commercial TVC Production, Medical Set Direction & Dolby Sound",
        image: "/portfolio/commercial/excel-lab/cover.webp",
      },
      {
        title: "International Models — 9-Category Apparel Production",
        client: "Luxury Apparel Conglomerate",
        slug: "international-models-9-category-apparel",
        category: "FASHION COMMERCIAL REEL",
        role: "Master Fashion Video Reel, Studio Lighting & 9-Line Apparel Shoot",
        image: "/portfolio/commercial/apparel-shoot/cover.webp",
      },
    ],
    faqs: [
      {
        question: "How does AFTER THAT combine traditional film production with generative AI?",
        answer:
          "We view AI as a production multiplier, not a replacement for human taste. We shoot core human performances, product textures, and physical locations using cinema cameras, and deploy proprietary AI video pipelines to generate impossible backgrounds, surreal visual transitions, and rapid multi-variant social adaptations at 4x the speed of legacy CGI houses.",
      },
      {
        question: "What is the typical production timeline for a commercial ad film?",
        answer:
          "A full-scale commercial ad film takes approximately 3 to 5 weeks from script approval through casting, shooting, editorial, color grading, and final delivery. For AI-accelerated commercial spots, delivery can be achieved in as little as 7 to 14 days.",
      },
      {
        question: "Do you supply camera crews and equipment in-house?",
        answer:
          "Yes. We maintain our own cinema camera setups, prime and anamorphic glass, gimbals, drones, and lighting packages across our South India production centers in Kochi and Bangalore, with flexible mobile units that travel nationwide.",
      },
      {
        question: "In what formats are final commercial videos delivered?",
        answer:
          "We deliver master files tailored for every distribution platform: ProRes 422 HQ / 4444 masters for broadcast and cinema (DCP), 16:9 4K for YouTube and TV, 9:16 vertical 4K for Instagram Reels and YouTube Shorts, and compressed web formats optimized for zero-latency website video backgrounds.",
      },
    ],
    timeline: "2–5 Weeks",
    commercialValue: "Delivers cinema-calibre commercial video that commands immediate attention and elevates perceived brand value.",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing & Performance Growth",
    shortTitle: "DIGITAL MARKETING",
    h1: "Performance Digital Marketing & Growth Agency India",
    primaryKeyword: "Digital marketing agency India",
    secondaryKeywords: [
      "Performance marketing agency India",
      "Social media marketing agency India",
      "SEO agency India",
      "Digital campaign management India",
      "Lead generation agency India",
      "Meta ads agency India",
    ],
    metaTitle: "Digital Marketing Agency India | Performance & Growth",
    metaDescription:
      "Performance-driven digital marketing agency in India. We manage Meta & Google Ads, full-funnel customer acquisition, social media marketing, and technical SEO for sustainable growth.",
    heroEyebrow: "PERFORMANCE GROWTH // DATA RIGOR",
    tagline: "BRIDGING HIGH-CRAFT CREATIVE WITH QUANTITATIVE PERFORMANCE.",
    narrativeLead:
      "Traffic without commercial intent is a vanity metric. At AFTER THAT, digital marketing is engineered at the intersection of creative brilliance and algorithmic mathematics. We eliminate wasted ad spend by pairing psychographic audience segmentation with aggressive creative testing across Meta, Google Search, and organic channels to construct scalable, defensible customer acquisition engines.",
    businessProblemsSolved: [
      "Unprofitable Customer Acquisition: High Cost per Acquisition (CAC) burning ad budgets without positive return on ad spend (ROAS).",
      "Creative Ad Fatigue: Performance campaigns hitting a wall when audiences grow tired of the same 2-3 ads.",
      "Low Conversion Rates: Sending expensive paid traffic to sluggish, confusing landing pages that fail to convert.",
      "Shallow Social Engagement: Posting generic corporate stock photos that generate zero meaningful community engagement.",
      "Invisible Search Rankings: Missing out on high-intent commercial organic search queries to competitors.",
    ],
    strategicApproach: {
      heading: "The Quantitative Growth Engine",
      description:
        "We reject guessing. Every rupee of ad budget is allocated through structured multivariate testing and funnel telemetry.",
      steps: [
        {
          step: "01",
          title: "FUNNEL & AUDIENCE DIAGNOSTICS",
          description:
            "Auditing tracking pixels, conversion funnels, landing page speed, and mapping high-intent buyer personas.",
        },
        {
          step: "02",
          title: "HIGH-VELOCITY CREATIVE SPRINT",
          description:
            "Producing 20+ distinct creative hooks, video variants, headline tests, and static graphics tailored to distinct buyer motivations.",
        },
        {
          step: "03",
          title: "CAMPAIGN ARCHITECTURE & SCALING",
          description:
            "Structuring Meta Ads (CBO/ABO) and Google Ads (Search, Performance Max) for algorithmic learning and minimum cost per acquisition.",
        },
        {
          step: "04",
          title: "LANDING PAGE OPTIMIZATION (CRO)",
          description:
            "A/B testing page copy, friction points, speed, and social proof elements to maximize visitor-to-lead conversion rates.",
        },
        {
          step: "05",
          title: "LIFETIME VALUE & RETENTION",
          description:
            "Deploying email automation, WhatsApp nurture flows, and smart retargeting to maximize customer lifetime value (LTV).",
        },
      ],
    },
    deliverables: [
      {
        category: "Paid Performance Advertising",
        items: [
          "Meta Ads (Facebook & Instagram) media management & scaling",
          "Google Ads (Search, Performance Max, Display, YouTube Ads)",
          "High-velocity ad creative production (30+ fresh assets monthly)",
          "Audience retargeting funnels & Lookalike cohort modeling",
        ],
      },
      {
        category: "Search Engine Optimization (SEO)",
        items: [
          "Technical SEO audits, Core Web Vitals & schema architecture",
          "Commercial intent keyword research & topical authority content",
          "On-page optimization & internal linking strategy",
          "Local SEO & Google Business Profile optimization",
        ],
      },
      {
        category: "Social Media Strategy & Management",
        items: [
          "Content calendar planning & editorial direction",
          "Original short-form video content creation (Reels & Shorts)",
          "Brand community management & audience engagement",
          "Profile aesthetic curation & brand identity maintenance",
        ],
      },
      {
        category: "Conversion Rate Optimization & Analytics",
        items: [
          "Landing page conversion audits & A/B testing",
          "Google Analytics 4 (GA4) custom event & funnel tracking",
          "Weekly performance dashboards & transparent ROAS reporting",
          "Customer Acquisition Cost (CAC) vs. LTV financial modeling",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Strategic Ad Targeting Framework",
        client: "Consumer Health & Wellness Brands",
        slug: "strategic-ad-targeting-framework",
        category: "PERFORMANCE MARKETING",
        role: "Ad Testing Matrix (-35% CAC, 2.8x ROAS across multi-market campaigns)",
        image: "/portfolio/advertising/targeting/cover.webp",
      },
      {
        title: "The Bakers Point Social Transformation",
        client: "The Bakers Point",
        slug: "the-bakers-point-instagram-transformation",
        category: "SOCIAL & GROWTH",
        role: "Editorial Social Transformation, Viral Reels & Footfall Generation",
        image: "/portfolio/digital-marketing/bakers-point/cover.webp",
      },
      {
        title: "Enterprise Client Retainers",
        client: "LuLu, Milma, AU Bank, Nandini",
        slug: "enterprise-client-retainers",
        category: "MULTI-CHANNEL GROWTH",
        role: "Multi-Market Digital Growth & Regional Campaign Adaptation",
        image: "/portfolio/advertising/retainers/cover.webp",
      },
    ],
    faqs: [
      {
        question: "What differentiates AFTER THAT's digital marketing from traditional media agencies?",
        answer:
          "Most media agencies are media buyers who treat creative as an afterthought, while creative agencies have no clue how algorithmic bidding works. AFTER THAT unites both: we produce world-class creative assets designed specifically for algorithmic engagement, and optimize campaigns using rigorous data telemetry.",
      },
      {
        question: "What kind of ad spend budgets do you typically manage?",
        answer:
          "We manage performance campaigns ranging from fast-growing challenger brands spending ₹2L to ₹10L per month, up to enterprise retail and banking clients with multi-crore national media budgets.",
      },
      {
        question: "How long does it take to see positive ROI from digital marketing?",
        answer:
          "Paid performance campaigns (Meta & Google Ads) typically demonstrate validated data trends within 14 to 21 days during the initial algorithmic learning phase. Organic SEO and topical authority compounding requires 60 to 90 days of consistent execution.",
      },
      {
        question: "How do you track and report campaign performance?",
        answer:
          "We provide clients with real-time Looker Studio dashboards tracking revenue, ROAS, blended CAC, hook rates, and lead quality metrics. No smoke and mirrors—only actual business results.",
      },
    ],
    timeline: "Monthly Ongoing Growth Retainer",
    commercialValue: "Systematically lowers CAC while multiplying conversion volume through disciplined creative testing.",
  },

  "website-development": {
    slug: "website-development",
    number: "05",
    title: "Website Development & Digital Flagships",
    shortTitle: "WEB DEVELOPMENT",
    h1: "Website Development Company in India",
    primaryKeyword: "Website development company India",
    secondaryKeywords: [
      "Web development agency India",
      "Website design agency India",
      "Custom web application development India",
      "UI/UX design agency India",
      "Next.js web development agency",
      "Corporate website development India",
    ],
    metaTitle: "Website Development Company India | Custom Web & Next.js",
    metaDescription:
      "Custom website development company in India. We engineer bespoke Next.js web applications, digital flagships, responsive UI/UX design, and high-performance business platforms.",
    heroEyebrow: "FLAGSHIP ENGINEERING // MODERN STACK",
    tagline: "BESPOKE DIGITAL FLAGSHIPS THAT COMMAND MARKET RESPECT.",
    narrativeLead:
      "Your website is the single most critical touchpoint in your company's entire commercial existence. Off-the-shelf templates and bloated WordPress installations inflict devastating harm: slow load times that destroy Google rankings, generic aesthetics that communicate cheapness, and fragile plugins that break constantly. We build bespoke, highly engineered web architectures powered by Next.js, React, and Tailwind CSS—delivering cinematic micro-interactions, sub-second load times, and unyielding reliability.",
    businessProblemsSolved: [
      "Sluggish Page Speed & Failed Core Web Vitals: Frustrated visitors bouncing before the page even loads.",
      "Generic Template Syndrome: Looking identical to hundreds of competitors using the same off-the-shelf theme.",
      "Fragile Security & Broken Plugins: Vulnerable CMS systems requiring constant maintenance and breaking unexpectedly.",
      "Poor Mobile Experience: Clunky navigation and awkward layouts on modern mobile screens.",
      "Low Conversion & High Bounce Rates: Visitors unable to find what they need or navigate the inquiry process smoothly.",
    ],
    strategicApproach: {
      heading: "The High-Performance Engineering Framework",
      description:
        "Every web platform is handcrafted from the ground up to achieve perfect Lighthouse scores, flawless responsive fluidity, and maximum commercial conversions.",
      steps: [
        {
          step: "01",
          title: "INFORMATION ARCHITECTURE & WIREFRAMES",
          description:
            "Mapping conversion pathways, user journeys, navigation taxonomy, and content hierarchy in high-fidelity wireframes.",
        },
        {
          step: "02",
          title: "BESPOKE UI/UX DESIGN SYSTEM",
          description:
            "Designing custom Figma interfaces with brutalist or editorial elegance, responsive grids, and custom typographic styling.",
        },
        {
          step: "03",
          title: "MODERN NEXT.JS & REACT ENGINEERING",
          description:
            "Writing clean, modular, and type-safe code using Next.js App Router, React, Tailwind CSS, and Framer Motion.",
        },
        {
          step: "04",
          title: "PERFORMANCE, SEO & CORE WEB VITALS",
          description:
            "Optimizing image payloads, server-side rendering, XML sitemaps, JSON-LD structured data, and sub-second Largest Contentful Paint (LCP).",
        },
        {
          step: "05",
          title: "GLOBAL CDN DEPLOYMENT & TESTING",
          description:
            "Deploying on edge serverless infrastructure with automated SSL, multi-device cross-browser testing, and enterprise uptime SLAs.",
        },
      ],
    },
    deliverables: [
      {
        category: "Bespoke Web Flagships",
        items: [
          "Corporate & enterprise flagship website development",
          "High-conversion campaign landing pages & microsites",
          "Creative portfolio & interactive agency showcases",
          "Headless e-commerce platforms & digital catalogs",
        ],
      },
      {
        category: "UI/UX & Interactive Design",
        items: [
          "Comprehensive Figma design systems & component libraries",
          "Interactive 60 FPS motion design & fluid page transitions",
          "Fully responsive mobile, tablet & ultra-wide desktop layouts",
          "Accessible WCAG-compliant interface styling",
        ],
      },
      {
        category: "Technical Stack & Backend",
        items: [
          "Next.js App Router & React 19 architecture",
          "Tailwind CSS styling with zero unused CSS bloat",
          "Serverless API route development & third-party integrations",
          "Custom CMS integration (Sanity, Strapi, or headless database)",
        ],
      },
      {
        category: "Search & Performance Optimization",
        items: [
          "100% Core Web Vitals compliance (LCP < 2.5s, CLS < 0.1)",
          "Server-side rendered (SSR) metadata & dynamic sitemaps",
          "Schema.org JSON-LD structured data implementation",
          "Comprehensive Google Analytics 4 & conversion pixel setup",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Aptvel EdTech Platform Brand Launch",
        client: "Aptvel (Assess. Assist. Achieve.)",
        slug: "aptvel-edtech-launch",
        category: "EDTECH PLATFORM",
        role: "Web & Mobile App UI/UX Design System, Next.js Platform & Launch Strategy",
        image: "/portfolio/technology/aptvel/cover.webp",
      },
      {
        title: "meem coin. Digital Payments Ecosystem",
        client: "meem coin.",
        slug: "meem-coin-fintech-ecosystem",
        category: "FINTECH PLATFORM",
        role: "Fintech Mobile Wallet UI & Real-Time Settlement Architecture",
        image: "/portfolio/technology/meem-coin/cover.webp",
      },
      {
        title: "Milli Flame Bistro Parisian Digital Suite",
        client: "Milli Flame",
        slug: "milli-flame-bistro-paris",
        category: "HOSPITALITY WEB",
        role: "Bespoke Hospitality Platform, Digital Menus & Reservation System",
        image: "/portfolio/branding/milli-flame/cover.webp",
      },
    ],
    faqs: [
      {
        question: "Why does AFTER THAT build on Next.js rather than WordPress or Shopify?",
        answer:
          "Next.js provides unrivaled speed, security, and design freedom. Unlike template-based platforms weighed down by bloated plugins and database lag, Next.js generates static and server-rendered HTML at edge servers worldwide, ensuring near-instant page loads, superior Google SEO rankings, and zero vulnerability to common WordPress exploits.",
      },
      {
        question: "How do Core Web Vitals affect my website's Google search rankings?",
        answer:
          "Google uses Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) as a direct search ranking signal. Fast, visually stable websites outrank sluggish competitors in organic search results and convert significantly higher percentages of traffic into customers.",
      },
      {
        question: "Can non-technical team members easily update content?",
        answer:
          "Absolutely. We connect your custom Next.js frontend to user-friendly headless CMS solutions like Sanity, Strapi, or Supabase, allowing your marketing team to edit text, publish case studies, and upload images effortlessly without touching any code.",
      },
      {
        question: "What is the typical timeline for a custom website build?",
        answer:
          "A bespoke corporate website sprint typically takes between 4 to 8 weeks from initial wireframes through Figma design, Next.js engineering, testing, and live domain deployment.",
      },
    ],
    timeline: "4–8 Weeks",
    commercialValue: "Delivers an authoritative digital flagship that converts visitors and achieves top-tier Google search performance.",
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    number: "06",
    title: "Mobile App & Software Development",
    shortTitle: "APP & SOFTWARE",
    h1: "Custom Mobile App Development Company in India",
    primaryKeyword: "Mobile app development company India",
    secondaryKeywords: [
      "Custom software development company India",
      "iOS app development India",
      "Android app development company India",
      "React Native development agency India",
      "Enterprise mobile app development",
      "Cross-platform app development India",
    ],
    metaTitle: "Mobile App Development Company India | iOS & Android Apps",
    metaDescription:
      "Custom mobile app development company in India. We design and engineer intuitive iOS and Android applications, cross-platform apps, and enterprise digital solutions.",
    heroEyebrow: "MOBILE ENGINEERING // CROSS-PLATFORM",
    tagline: "POWERFUL MOBILE EXPERIENCES BUILT FOR SCALE AND USER RETENTION.",
    narrativeLead:
      "A mobile app is the ultimate direct connection between your business and your customer's daily life. Yet over 80% of mobile apps are uninstalled within 72 hours due to sluggish performance, clunky onboarding, or poor UI design. We engineer high-retention iOS and Android applications that unite intuitive tactile UI design with resilient, secure cloud architectures built to scale with enterprise growth.",
    businessProblemsSolved: [
      "High Churn & Low User Retention: Clunky interfaces and confusing onboarding driving users away immediately.",
      "Sluggish Cross-Platform Performance: Non-native apps that feel slow, jittery, and unresponsive to touch.",
      "Fragile Backend Integrations: Crashes caused by poorly designed APIs and unstable database connections.",
      "Security & Compliance Gaps: Failure to adhere to modern data privacy standards and app store requirements.",
      "High Maintenance Costs: Codebases that require double the effort to maintain separate iOS and Android versions.",
    ],
    strategicApproach: {
      heading: "The High-Retention App Development Lifecycle",
      description:
        "From early interaction wireframes to app store approval and production telemetry, we build for longevity.",
      steps: [
        {
          step: "01",
          title: "PRODUCT ROADMAP & FEATURE SCOPING",
          description:
            "Defining the Minimum Viable Product (MVP), core user journeys, data schemas, and technical architecture.",
        },
        {
          step: "02",
          title: "TACTILE MOBILE UI/UX DESIGN",
          description:
            "Designing pixel-perfect mobile interfaces in Figma with native gestures, haptic feedback design, and dark/light modes.",
        },
        {
          step: "03",
          title: "MODERN CROSS-PLATFORM DEVELOPMENT",
          description:
            "Developing high-performance codebases in React Native and Flutter with native bridge modules for iOS and Android.",
        },
        {
          step: "04",
          title: "BACKEND API & SECURITY ENGINEERING",
          description:
            "Constructing secure GraphQL / REST APIs, authentication protocols (OAuth, biometric), and cloud databases.",
        },
        {
          step: "05",
          title: "STORE SUBMISSION & APP STORE OPTIMIZATION (ASO)",
          description:
            "Navigating Apple App Store and Google Play review policies, keyword optimization, and production release management.",
        },
      ],
    },
    deliverables: [
      {
        category: "Mobile Application Development",
        items: [
          "iOS Native & Swift Application Development",
          "Android Native & Kotlin Application Development",
          "High-performance cross-platform React Native engineering",
          "Flutter application development for rapid MVP rollouts",
        ],
      },
      {
        category: "Enterprise Software & Backend",
        items: [
          "Secure cloud backend & database architecture (AWS, Supabase)",
          "Real-time notifications, push services & chat infrastructure",
          "Biometric authentication & end-to-end data encryption",
          "Custom admin dashboards & internal business management tools",
        ],
      },
      {
        category: "UI/UX & Prototyping",
        items: [
          "Interactive Figma clickable prototypes & user testing",
          "Design system tokenization for iOS Human Interface & Material You",
          "Micro-animations & gesture-based interactions",
        ],
      },
      {
        category: "App Store Optimization & Support",
        items: [
          "App Store Optimization (ASO) for search ranking in Play & App Store",
          "Turnkey store submission & review compliance management",
          "Post-launch crash monitoring, telemetry & SLA maintenance",
        ],
      },
    ],
    caseStudies: [
      {
        title: "meem coin. Fintech Ecosystem & Mobile Wallet",
        client: "meem coin.",
        slug: "meem-coin-fintech-ecosystem",
        category: "FINTECH MOBILE APP",
        role: "Fintech Mobile Wallet UI & Real-Time Settlement Architecture",
        image: "/portfolio/technology/meem-coin/cover.webp",
      },
      {
        title: "Aptvel EdTech Mobile Platform",
        client: "Aptvel",
        slug: "aptvel-edtech-launch",
        category: "EDTECH APP",
        role: "Student Assessment App UI/UX & Native Interactive Dashboard",
        image: "/portfolio/technology/aptvel/cover.webp",
      },
    ],
    faqs: [
      {
        question: "Should my company build a native app or cross-platform (React Native)?",
        answer:
          "For 90% of commercial and consumer business applications, modern React Native offers near-native 60 FPS performance while cutting development and maintenance costs in half by sharing a single codebase across iOS and Android. For hardware-intensive applications (such as advanced AR, high-frequency bluetooth sensors, or heavy 3D gaming), native Swift and Kotlin are recommended.",
      },
      {
        question: "How long does it take to develop a custom mobile application?",
        answer:
          "A feature-rich Minimum Viable Product (MVP) typically requires 8 to 12 weeks from design approval to initial App Store and Google Play submission. Complex enterprise systems with custom backend integrations may take 12 to 16 weeks.",
      },
      {
        question: "Does AFTER THAT handle App Store and Google Play submissions?",
        answer:
          "Yes. We manage the entire store submission process, including developer account configuration, security checklists, privacy policy compliance, metadata and screenshots, and resolving any review inquiries until your app is live.",
      },
      {
        question: "How do you ensure user data security and regulatory compliance?",
        answer:
          "We follow rigorous industry security protocols: encrypted communications (HTTPS/TLS), secure token-based authentication (OAuth2 / JWT), encrypted local data storage (Keychain / EncryptedSharedPreferences), and compliance with Indian Digital Personal Data Protection (DPDP) Act requirements.",
      },
    ],
    timeline: "8–14 Weeks",
    commercialValue: "Establishes a high-retention mobile touchpoint that deepens customer relationships and unlocks recurring revenue.",
  },

  "influencer-marketing": {
    slug: "influencer-marketing",
    number: "07",
    title: "Influencer Marketing & Creator Collaborations",
    shortTitle: "INFLUENCER MARKETING",
    h1: "Influencer Marketing & Creator Collaboration Agency India",
    primaryKeyword: "Influencer marketing agency India",
    secondaryKeywords: [
      "Celebrity management India",
      "Creator collaborations India",
      "KOL marketing agency India",
      "Brand ambassador management India",
      "Social influencer campaigns India",
      "Regional influencer marketing Kerala Bangalore",
    ],
    metaTitle: "Influencer Marketing Agency India | Creator & Celebrity Talent",
    metaDescription:
      "Influencer marketing agency in India. We orchestrate authentic creator collaborations, A-list celebrity endorsements, and multi-tier influencer campaigns that drive real engagement.",
    heroEyebrow: "TALENT & CREATOR // CULTURAL AUTHORITY",
    tagline: "HARNESS CULTURAL ICONS TO ACCELERATE BRAND TRUST.",
    narrativeLead:
      "Consumers do not trust corporate sales pitches; they trust human voices they already admire. But generic sponsored posts featuring disingenuous product placements waste budget and erode brand integrity. At AFTER THAT, influencer marketing is treated as creative talent direction. We curate authentic creators, write native narrative briefs, and negotiate airtight commercial agreements to drive genuine social resonance and measurable commercial conversions.",
    businessProblemsSolved: [
      "Wasted Spend on Fake Followers: Partnering with creators whose engagement is driven by bot farms and inactive accounts.",
      "Tone-Deaf Sponsored Content: Awkward, scripted posts that look like cheap advertisements and alienate followers.",
      "Lack of Contractual Discipline: Creators failing to deliver on agreed timelines or misrepresenting product claims.",
      "Zero Commercial Attribution: Inability to prove whether an influencer campaign generated real sales or just empty vanity metrics.",
      "Overpaying for Talent: Navigating opaque celebrity and talent agency pricing without industry benchmarks.",
    ],
    strategicApproach: {
      heading: "The Authentic Creator Alignment Model",
      description:
        "We identify creators whose personal audience values align authentically with your brand narrative.",
      steps: [
        {
          step: "01",
          title: "AUDIENCE QUALITY & FOLLOWER VETTING",
          description:
            "Auditing creator audience authenticity, engagement rates, follower demographics, and past brand partnership performance.",
        },
        {
          step: "02",
          title: "CREATIVE BRIEFS (NOT CORPORATE SCRIPTS)",
          description:
            "Crafting narrative briefs that give creators the creative freedom to speak naturally while hitting essential brand message pillars.",
        },
        {
          step: "03",
          title: "CONTRACTUAL & USAGE RIGHTS NEGOTIATION",
          description:
            "Securing digital advertising whitelist rights, exclusivity windows, delivery schedules, and clear legal covenants.",
        },
        {
          step: "04",
          title: "CONTENT REVIEW & SYNCHRONIZED ROLLOUT",
          description:
            "Reviewing rough cuts, ensuring brand safety, and scheduling coordinated campaign flight dates for maximum algorithmic reach.",
        },
        {
          step: "05",
          title: "PAID MEDIA AMPLIFICATION & ATTRIBUTION",
          description:
            "Amplifying top-performing organic creator content via Meta Partnership Ads to extend reach beyond the creator's immediate followers.",
        },
      ],
    },
    deliverables: [
      {
        category: "Talent Scouting & Management",
        items: [
          "Micro, macro & celebrity talent identification across India",
          "Regional vernacular creator mapping (Malayalam, Hindi, Kannada, Tamil)",
          "A-list celebrity endorsement sourcing & contract structuring",
          "Brand ambassador long-term retainer negotiation",
        ],
      },
      {
        category: "Campaign Briefing & Creative Direction",
        items: [
          "Tailored narrative briefs that preserve creator authenticity",
          "Product unboxing, styling & experience kits",
          "On-set creative direction for celebrity video shoots",
          "Script review & brand compliance monitoring",
        ],
      },
      {
        category: "Contracting, Legal & Rights",
        items: [
          "Airtight talent contracts, deliverables schedules & kill fees",
          "Digital ad whitelist rights (Meta / YouTube Spark Ads)",
          "Exclusivity clauses protecting against competitor partnerships",
          "ASCI (Advertising Standards Council of India) disclosure compliance",
        ],
      },
      {
        category: "Attribution & Paid Amplification",
        items: [
          "Unique affiliate promo codes & trackable UTM link architecture",
          "Meta Partnership Ads (Branded Content) campaign scaling",
          "Post-campaign sentiment & engagement analytics report",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Calicut Banger Concert Arena",
        client: "Maxxo presents Calicut Banger",
        slug: "calicut-banger-music-festival",
        category: "CELEBRITY & TALENT",
        role: "Hip-Hop Headliner Talent Coordination, Arena Backstage & Social Rollout",
        image: "/portfolio/events-pr/calicut-banger/cover.webp",
      },
      {
        title: "Maharani Wedding Collections Influencer Rollout",
        client: "Maharani Wedding Collections",
        slug: "maharani-wedding-collections-film",
        category: "FASHION INFLUENCERS",
        role: "Bridal Influencer Curation, Saree Styling & Coordinated Launch",
        image: "/portfolio/advertising/maharani/cover.webp",
      },
      {
        title: "The Bakers Point Creator Collaborations",
        client: "The Bakers Point",
        slug: "the-bakers-point-instagram-transformation",
        category: "LIFESTYLE CREATORS",
        role: "Food & Lifestyle Creator Tastings, Viral Reels & Store Footfall",
        image: "/portfolio/digital-marketing/bakers-point/cover.webp",
      },
    ],
    faqs: [
      {
        question: "How do you detect fake followers and engagement before booking an influencer?",
        answer:
          "We use advanced diagnostic tools combined with manual inspection to audit audience geographic distribution, comment quality (flagging spam and bot pods), follower growth velocity anomalies, and historical engagement rates. We only partner with verified human audiences.",
      },
      {
        question: "What is the difference between micro and macro influencers in India?",
        answer:
          "Micro-influencers (10k–100k followers) typically command hyper-engaged, niche communities with 3x higher engagement and lower CPMs, making them ideal for high-trust recommendations. Macro and celebrity figures (500k+) deliver immediate mass reach and prestige, ideal for national product launches.",
      },
      {
        question: "Can we run paid ads using the influencer's social account?",
        answer:
          "Yes. We negotiate Meta Partnership Ad and YouTube Spark Ad authorization rights into talent contracts, allowing your brand to amplify the creator's organic post as a paid advertisement directly from their handle to targeted demographics.",
      },
      {
        question: "How does AFTER THAT ensure compliance with ASCI influencer guidelines?",
        answer:
          "We enforce clear, compliant disclosure labels (#ad, #collab, or platform paid partnership tags) across all published deliverables in strict accordance with Advertising Standards Council of India regulations.",
      },
    ],
    timeline: "2–4 Weeks per Campaign Sprint",
    commercialValue: "Translates cultural creator authority into validated social proof and rapid customer acquisition.",
  },

  "public-relations": {
    slug: "public-relations",
    number: "08",
    title: "Public Relations & Brand Communications",
    shortTitle: "PUBLIC RELATIONS",
    h1: "Strategic Public Relations & Brand Communications Agency India",
    primaryKeyword: "PR agency India",
    secondaryKeywords: [
      "Public relations agency India",
      "Brand launch publicity India",
      "Corporate communications agency India",
      "Media relations India",
      "Event PR and activations India",
      "Crisis communications agency India",
    ],
    metaTitle: "PR Agency India | Public Relations & Brand Communications",
    metaDescription:
      "Strategic public relations agency in India. We deliver high-impact brand launch publicity, media communication, corporate PR, and experiential brand activations across national markets.",
    heroEyebrow: "MEDIA RELATIONS // NATIONAL DISCOVERY",
    tagline: "EARNED MEDIA AUTHORITY THAT BUILDS UNRIVALLED PRESTIGE.",
    narrativeLead:
      "Advertising is what you pay for; publicity is what you earn. When an esteemed journalist, business publication, or cultural authority features your brand, credibility multiplies exponentially. At AFTER THAT, public relations is driven by compelling journalistic angles, strategic media relationships, and experiential on-ground storytelling. We position founders, enterprises, and breakthrough products at the forefront of the national media conversation.",
    businessProblemsSolved: [
      "Lack of Mainstream Media Recognition: Groundbreaking products that receive zero coverage in tier-1 business and lifestyle media.",
      "Silent Brand Launches: Spending millions on product development only for the launch to pass unnoticed by press and industry leaders.",
      "Poor Crisis Preparedness: Inability to respond effectively when negative publicity or public misunderstandings occur.",
      "Weak Corporate & Founder Profile: Enterprise leaders who are invisible in national industry forums and thought leadership circles.",
      "Disjointed Event Media Coverage: Staging expensive live events that fail to translate into earned digital and print coverage.",
    ],
    strategicApproach: {
      heading: "The Earned Authority Narrative Model",
      description:
        "Journalists do not publish sales brochures. We frame your business milestones into legitimate, culturally relevant news stories.",
      steps: [
        {
          step: "01",
          title: "JOURNALISTIC ANGLE & NARRATIVE FRAMING",
          description:
            "Extracting the unique data points, human drama, economic impact, or cultural significance of your announcement.",
        },
        {
          step: "02",
          title: "TARGETED MEDIA LIST & BEAT MATCHING",
          description:
            "Curating bespoke media rosters of accredited journalists, bureau chiefs, and editors covering your exact industry beat.",
        },
        {
          step: "03",
          title: "PRESS KIT & SPOKESPERSON PREPARATION",
          description:
            "Drafting comprehensive press releases, executive Q&As, founder bios, and high-resolution media asset suites.",
        },
        {
          step: "04",
          title: "EXCLUSIVE PITCHING & PRESS CONFERENCES",
          description:
            "Securing high-impact editorial exclusives, organizing targeted press meets, and coordinating broadcast interviews.",
        },
        {
          step: "05",
          title: "MEDIA CLIPPING & REPUTATION AUDIT",
          description:
            "Monitoring print, digital, and broadcast coverage in real time, calculating Advertising Value Equivalency (AVE), and cataloging earned media.",
        },
      ],
    },
    deliverables: [
      {
        category: "Media Relations & Press Outreach",
        items: [
          "Strategic press release drafting & national wire distribution",
          "Exclusive interview pitching in leading national dailies & portals",
          "Bespoke journalist & editor media rounds across major metros",
          "Feature story placements in business, tech & lifestyle media",
        ],
      },
      {
        category: "Brand Launch & Event PR",
        items: [
          "Grand showroom opening & flagship launch media management",
          "Press conference orchestration & media lounge coordination",
          "VIP, investor & dignitary guest list protocol management",
          "Live event media accreditation & red carpet press management",
        ],
      },
      {
        category: "Founder & Executive Thought Leadership",
        items: [
          "CEO thought leadership op-eds & ghostwritten editorial pieces",
          "Speaking engagements & keynote panel placements at national conferences",
          "Industry award nomination curation & submission dossiers",
          "Wikipedia and verified executive digital biography management",
        ],
      },
      {
        category: "Crisis Communications & Advisory",
        items: [
          "24/7 crisis communication response & holding statements",
          "Stakeholder advisory & employee internal communications",
          "Online reputation repair & press retraction coordination",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Dizzire Silk Flagship Store Launch",
        client: "Dizzire Silk and Sarees",
        slug: "dizzire-silk-and-sarees",
        category: "RETAIL LAUNCH PR",
        role: "Grand Showroom Activation, Regional Press Conferences & Media Takeover",
        image: "/portfolio/branding/dizzire/cover.webp",
      },
      {
        title: "Calicut Banger Arena Concert PR",
        client: "Maxxo presents Calicut Banger",
        slug: "calicut-banger-music-festival",
        category: "ENTERTAINMENT PR",
        role: "8,000+ Attendee Arena Music Event, Broadcast News & Media Access",
        image: "/portfolio/events-pr/calicut-banger/cover.webp",
      },
      {
        title: "Corporate & Enterprise Retainers",
        client: "LuLu, Milma, AU Bank, Nandini, Pothys",
        slug: "enterprise-client-retainers",
        category: "ENTERPRISE PR",
        role: "Regional PR Coordination & Public Reputation Stewardship",
        image: "/portfolio/advertising/retainers/cover.webp",
      },
    ],
    faqs: [
      {
        question: "How does PR differ from paid advertising?",
        answer:
          "Advertising is paid placement with complete control over message and timing. PR secures earned media coverage through third-party journalistic validation. An article or television feature in a respected publication carries 10x the credibility of a paid advertisement because it represents objective editorial endorsement.",
      },
      {
        question: "Which publications and media outlets does AFTER THAT collaborate with?",
        answer:
          "We collaborate directly with national business publications, major regional dailies (Malayala Manorama, Mathrubhumi, The Hindu, Times of India, Economic Times), trade journals, tech portals, and broadcast news channels across India.",
      },
      {
        question: "Can AFTER THAT manage emergency crisis communications?",
        answer:
          "Yes. In times of crisis, speed and accuracy are paramount. We draft immediate holding statements, establish press briefing protocols, advise executive leadership on media conduct, and coordinate retractions where inaccuracies occur.",
      },
      {
        question: "How is PR success measured?",
        answer:
          "We provide comprehensive media evaluation reports measuring total article volume, publication tier, audience readership, message pull-through (whether your key message points were included), sentiment analysis, and Advertising Value Equivalency (AVE).",
      },
    ],
    timeline: "Monthly Retainer or Project Launch Sprint",
    commercialValue: "Secures third-party journalistic authority that multiplies corporate valuation and consumer trust.",
  },
};

export const SEO_SERVICE_SLUGS = Object.keys(SEO_SERVICES);
