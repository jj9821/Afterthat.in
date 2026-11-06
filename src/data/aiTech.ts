export interface AICapability {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
}

export const AI_TECH_DATA = {
  headline: "BIG IDEAS.",
  headlineHighlight: "POWERED BY AI.",
  supportingMessage:
    "We combine human creativity, strategic thinking, storytelling and AI-assisted production workflows to develop distinctive visual content and advertising experiences.",
  philosophy: "AI IS A CREATIVE TOOL, NOT A REPLACEMENT FOR STRATEGIC THINKING.",
  subtext:
    "Technology accelerates synthesis, but emotional resonance and brand conviction require human judgment. We harness cutting-edge generative neural networks to expand what is commercially possible.",
  capabilities: [
    {
      id: "ai-video-ads",
      title: "AI Video Advertisements",
      tag: "SYNTHETIC CINEMA",
      description: "High-cadence cinematic commercial video generated through neural diffusion models and temporal coherence engines.",
      icon: "Film",
    },
    {
      id: "ai-product-commercials",
      title: "AI Product Commercials",
      tag: "VIRTUAL STAGECRAFT",
      description: "Zero-footprint 3D product visualization and physics-accurate commercial spots in impossible hyper-real environments.",
      icon: "Layers",
    },
    {
      id: "ai-brand-campaigns",
      title: "AI-Generated Brand Campaigns",
      tag: "CREATIVE WORLDBUILDING",
      description: "Complete visual worldbuilding across print, digital out-of-home, and interactive screen takeovers.",
      icon: "Sparkles",
    },
    {
      id: "ai-promo-videos",
      title: "AI Promotional Videos",
      tag: "RAPID DEPLOYMENT",
      description: "High-speed multi-lingual promotional cutdowns tailored for rapid product launches and event announcements.",
      icon: "Zap",
    },
    {
      id: "ai-social-creatives",
      title: "AI Social Media Creatives",
      tag: "PERFORMANCE ASSETS",
      description: "Dynamic visual variations optimized for algorithm feeds, A/B creative testing, and audience micro-segments.",
      icon: "Share2",
    },
    {
      id: "ai-visual-storytelling",
      title: "AI-Assisted Visual Storytelling",
      tag: "NARRATIVE EXPANSION",
      description: "Concept visualization, moodfilms, and animated animatics that accelerate client buy-in from weeks to hours.",
      icon: "Eye",
    },
    {
      id: "ai-avatar-ads",
      title: "AI Character & Avatar-Based Ads",
      tag: "DIGITAL HUMANS",
      description: "Consistent virtual brand ambassadors, digital spokespeople, and multi-lingual voice synthesis.",
      icon: "UserCheck",
    },
    {
      id: "ai-campaign-visuals",
      title: "AI-Generated Campaign Visuals",
      tag: "EDITORIAL ART DIRECTION",
      description: "Photorealistic editorial lookbooks, fashion campaigns, and print key-visuals with sub-pixel rendering accuracy.",
      icon: "Camera",
    },
    {
      id: "ai-concept-dev",
      title: "Creative Concept Development",
      tag: "RAPID PROTOTYPING",
      description: "Algorithmic creative exploration testing hundreds of stylistic treatments before committing to high-stakes physical shoot production.",
      icon: "Lightbulb",
    },
    {
      id: "ai-content-adaptation",
      title: "AI-Assisted Content Adaptation",
      tag: "MULTI-FORMAT SCALE",
      description: "Intelligent re-framing, localization, and language adaptation scaling one master campaign across 10+ South Asian dialects.",
      icon: "Globe",
    },
  ],
  conceptShowcases: [
    {
      id: "concept-1",
      title: "NEO-KERALA MONSOON NOIR",
      category: "AI Commercial Fashion Film",
      spec: "MIDJOURNEY V6 + RUNWAY GEN-3 ALPHA",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
      tagline: "High fashion colliding with hyper-real Western Ghats rainfall.",
    },
    {
      id: "concept-2",
      title: "SYNTHETIC AUTOMOTIVE NIGHT",
      category: "AI Product Commercial",
      spec: "STABLE VIDEO DIFFUSION + COMFYUI",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
      tagline: "Dynamic asphalt reflections and volumetric night lighting without physical track permits.",
    },
    {
      id: "concept-3",
      title: "CYBERPUNK HARBOR WAREHOUSE",
      category: "AI Stage & Event Scenography",
      spec: "NEURAL NEOMORPHIC RENDERING",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      tagline: "Kinetic stage concept testing for 4,000-capacity festival architectures.",
    },
  ],
};
