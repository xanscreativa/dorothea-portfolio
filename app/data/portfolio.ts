export interface GalleryItem {
  type: "full" | "half";
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioMeta {
  client: string;
  industry: string;
  role: string;
  year: string;
  deliverables: string;
  tools: string;
}

export interface PortfolioItem {
  title: string;
  subtitle?: string;
  description: string;
  cover: string;
  images: string[];
}

export interface PortfolioCollection {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  cover: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  meta: PortfolioMeta;
  gallery: GalleryItem[];
  featured?: boolean;
  video?: {
    title: string;
    thumbnail: string;
    youtubeId: string;
  };
  items: PortfolioItem[];
}

export const portfolioCollections: PortfolioCollection[] = [
  // 1. Social Media Design
  {
    id: 1,
    slug: "social-media-design",
    title: "Social Media Design",
    category: "CREATIVE DIRECTION",
    tagline: "Editorial social media systems with clean layouts and consistent visual rhythm.",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",
    cover: "/portfolio/uksw.jpg",
    overview:
      "Editorial social media systems designed to look refined, coherent, and premium across feed, story, and campaign touchpoints.",
    challenge:
      "Maintaining brand consistency across diverse social media platforms while keeping individual post designs visually engaging and culturally relevant for different audiences.",
    solution:
      "Developed a flexible grid system, uniform typographic rules, and curated color palettes that allow for high content variety without compromising overall brand identity.",
    outcome:
      "Increased visual consistency across client social feeds, resulting in higher brand recognition and an average 35% growth in audience engagement.",
    meta: {
      client: "Various Clients",
      industry: "Education & Lifestyle",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables: "Social Templates, Editorial Feed Systems, Story Assets",
      tools: "Figma, Photoshop, Illustrator",
    },
    gallery: [
      {
        type: "full",
        src: "/portfolio/uksw.jpg",
        alt: "UKSW Social Media Campaign",
        caption: "UKSW — Editorial Social Feed Layout",
      },
      {
        type: "half",
        src: "/portfolio/jendela-finansial.jpg",
        alt: "Jendela Finansial Visuals",
        caption: "Jendela Finansial — Educational Carousel",
      },
      {
        type: "half",
        src: "/portfolio/pelkatpa.jpg",
        alt: "GPIB Immanuel Assets",
        caption: "GPIB Immanuel — Community Assets",
      },
      {
        type: "full",
        src: "/portfolio/emily.jpg",
        alt: "Emily Creative Story Assets",
        caption: "Emily Creative — Event Story Suite",
      },
    ],
    items: [
      {
        title: "UKSW",
        subtitle: "UKSW",
        description: "Social feed visuals with a calm editorial rhythm and polished hierarchy.",
        cover: "/portfolio/uksw.jpg",
        images: ["/portfolio/uksw.jpg"],
      },
      {
        title: "Jendela Finansial",
        subtitle: "Jendela Finansial",
        description: "Crisp social visuals for educational and branded communication.",
        cover: "/portfolio/jendela-finansial.jpg",
        images: ["/portfolio/jendela-finansial.jpg"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description: "Community-focused social media assets shaped with warmth and structure.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "Emily Creative",
        subtitle: "Emily",
        description: "A polished visual system combining event messaging and premium digital storytelling.",
        cover: "/portfolio/emily.jpg",
        images: ["/portfolio/emily.jpg"],
      },
    ],
  },

  // 2. Brand Identity
  {
    id: 2,
    slug: "brand-identity",
    title: "Brand Identity",
    category: "CREATIVE DIRECTION",
    tagline: "Building cohesive brand experiences through strategic visual identity and storytelling.",
    description:
      "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",
    cover: "/portfolio/jendela-finansial.jpg",
    overview:
      "A comprehensive branding project that combines visual identity, social media content, campaign design, motion graphics, and digital storytelling into one consistent brand ecosystem.",
    challenge:
      "Traditional financial and community platforms often suffer from visual rigidity. The goal was to humanize the identity without losing professional credibility.",
    solution:
      "Crafted a modern brand design language with warm, approachable typography, structured grids, and versatile brand marks adaptable across digital and physical touchpoints.",
    outcome:
      "Successfully launched the refreshed brand identity, driving over 40% higher digital interaction and establishing a distinct market presence.",
    meta: {
      client: "Jendela Finansial",
      industry: "Finance & Lifestyle",
      role: "Brand Strategist & Lead Designer",
      year: "2024",
      deliverables: "Brand Identity, Typography Systems, Brand Guidelines",
      tools: "Illustrator, Figma, Photoshop",
    },
    featured: true,
    gallery: [
      {
        type: "full",
        src: "/portfolio/jendela-finansial.jpg",
        alt: "Brand Identity Overview",
        caption: "Brand Identity System & Editorial Grid",
      },
      {
        type: "half",
        src: "/portfolio/mark.jpg",
        alt: "Social Media Application",
        caption: "Digital Application & Content Templates",
      },
      {
        type: "half",
        src: "/portfolio/character.jpg",
        alt: "Brand Character Integration",
        caption: "Mascot & Character Brand Asset",
      },
    ],
    items: [
      {
        title: "Brand Identity",
        subtitle: "Visual Identity",
        description:
          "Designed a cohesive brand identity system including colors, typography, layouts, and supporting visual elements.",
        cover: "/portfolio/jendela-finansial.jpg",
        images: ["/portfolio/jendela-finansial.jpg"],
      },
      {
        title: "Social Media Design",
        subtitle: "Content Design",
        description:
          "Created engaging Instagram feeds, carousel posts, stories, promotional graphics, and educational content.",
        cover: "/portfolio/mark.jpg",
        images: ["/portfolio/mark.jpg"],
      },
    ],
  },

  // 3. Logo Design
  {
    id: 3,
    slug: "logo-design",
    title: "Logo Design",
    category: "VISUAL IDENTITY",
    tagline: "Timeless logo systems designed for brands, churches, and communities.",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",
    cover: "/portfolio/pelkatpa.jpg",
    overview:
      "Timeless logo systems built for communities, churches, and brands that need a confident and lasting identity.",
    challenge:
      "Creating symbolic logos that capture deep organizational values while remaining minimalist, scalable, and versatile for multi-medium reproduction.",
    solution:
      "Focused on geometry, purposeful symbolism, and strong typographic balance to produce clean marks that function seamlessly from tiny digital icons to large event banners.",
    outcome:
      "Delivered iconic visual marks embraced by client communities and easily implemented across all organizational collateral.",
    meta: {
      client: "Multiple Organizations",
      industry: "Community & Culture",
      role: "Logo & Brand Mark Specialist",
      year: "2023 - 2024",
      deliverables: "Logo Marks, Vector Assets, Brand Usage Guidelines",
      tools: "Illustrator, Figma",
    },
    gallery: [
      {
        type: "full",
        src: "/portfolio/pelkatpa.jpg",
        alt: "HUT 63 Pelkat PA Logo",
        caption: "HUT 63 Pelkat PA — Commemorative Identity",
      },
      {
        type: "half",
        src: "/portfolio/reno.jpg",
        alt: "Sinyal Ordal Symbol",
        caption: "Sinyal Ordal — Brand Symbol Concept",
      },
      {
        type: "half",
        src: "/portfolio/uksw.jpg",
        alt: "Community Logo Mark",
        caption: "Community Identity & Vector Grid",
      },
    ],
    items: [
      {
        title: "HUT 63 Pelkat PA",
        subtitle: "HUT 63 Pelkat PA",
        description: "A commemorative logo direction with a clear and memorable identity.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description: "Community identity work built with warmth, clarity, and lasting structure.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description: "Logo application and brand symbol direction for a recognizable visual presence.",
        cover: "/portfolio/reno.jpg",
        images: ["/portfolio/reno.jpg"],
      },
    ],
  },

  // 4. Thumbnail Design
  {
    id: 4,
    slug: "thumbnail-design",
    title: "Thumbnail Design",
    category: "CONTENT DESIGN",
    tagline: "High-performing YouTube thumbnails crafted with strong visual hierarchy and storytelling.",
    description:
      "High-performing YouTube and social media thumbnails crafted with strong visual hierarchy and storytelling.",
    cover: "/portfolio/showreel.jpg",
    overview:
      "High-performing thumbnails designed to balance clarity, storytelling, and premium visual hierarchy for social and video platforms.",
    challenge:
      "Standing out in crowded video feeds where viewers make click decisions in milliseconds.",
    solution:
      "Engineered high-contrast visual compositions with bold focal points, expressive typography, and clear subject isolation.",
    outcome:
      "Achieved measurable increases in Click-Through Rates (CTR) across client YouTube channels.",
    meta: {
      client: "Content Creators & Traders",
      industry: "Digital Media & Entertainment",
      role: "Visual Content Designer",
      year: "2024",
      deliverables: "High-CTR Thumbnails, Channel Graphics",
      tools: "Photoshop, Lightroom",
    },
    gallery: [
      {
        type: "full",
        src: "/portfolio/showreel.jpg",
        alt: "Thumbnail Collection Showcase",
        caption: "Featured Thumbnail Design Suite",
      },
      {
        type: "half",
        src: "/portfolio/wakatom.jpg",
        alt: "Wak Atom Thumbnail",
        caption: "Wak Atom — High Contrast Content Art",
      },
      {
        type: "half",
        src: "/portfolio/raka.jpg",
        alt: "Raka Trabas Thumbnail",
        caption: "Raka Trabas — Action-Oriented Thumbnail",
      },
    ],
    items: [
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description: "Editorial thumbnail direction for educational trading content.",
        cover: "/portfolio/reno.jpg",
        images: ["/portfolio/reno.jpg"],
      },
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description: "A polished thumbnail set built for attention and strong visual clarity.",
        cover: "/portfolio/wakatom.jpg",
        images: ["/portfolio/wakatom.jpg"],
      },
      {
        title: "Raka Trabas",
        subtitle: "Raka Trabas",
        description: "Thumbnail treatment focused on clean hierarchy and expressive storytelling.",
        cover: "/portfolio/raka.jpg",
        images: ["/portfolio/raka.jpg"],
      },
    ],
  },

  // 5. Character Design
  {
    id: 5,
    slug: "character-design",
    title: "Character Design",
    category: "ILLUSTRATION",
    tagline: "Custom character design and mascot illustrations tailored for brand personality.",
    description:
      "Custom character design and mascot illustrations tailored for digital presence and brand storytelling.",
    cover: "/portfolio/character.jpg",
    overview:
      "Expressive character designs and digital mascot assets crafted to give brands and creators a unique personality.",
    challenge:
      "Creating a friendly, recognizable mascot that represents brand values while remaining flexible for various animated and static content uses.",
    solution:
      "Designed a vector-based character with versatile poses, expressive emotional states, and clean color blocks easily recognizable at any scale.",
    outcome:
      "Enhanced brand memorability and provided the marketing team with a versatile brand ambassador for campaign media.",
    meta: {
      client: "Jendela Finansial",
      industry: "EdTech & Brand Mascot",
      role: "Character Artist & Illustrator",
      year: "2024",
      deliverables: "Character Sheet, Pose Library, Digital Assets",
      tools: "Illustrator, Photoshop, Clip Studio",
    },
    gallery: [
      {
        type: "full",
        src: "/portfolio/character.jpg",
        alt: "Character Model Sheet",
        caption: "Jendela Finansial Mascot — Full Model & Pose Suite",
      },
    ],
    items: [
      {
        title: "Jendela Finansial Mascot",
        subtitle: "Character Illustration",
        description: "Custom character design created for educational digital content and brand identity.",
        cover: "/portfolio/character.jpg",
        images: ["/portfolio/character.jpg"],
      },
    ],
  },

  // 6. Live Stream Design
  {
    id: 6,
    slug: "live-stream-design",
    title: "Live Stream Design",
    category: "BROADCAST GRAPHICS",
    tagline: "Professional streaming layouts and broadcast assets for creators and communities.",
    description:
      "Professional streaming layouts and broadcast assets for creators and trading communities.",
    cover: "/portfolio/ezsquad.jpg",
    overview:
      "Streaming layouts, sponsor graphics, and broadcast visuals designed for creators and communities that need clean, premium professionalism.",
    challenge:
      "Designing complex broadcast screens that display live information, overlays, and sponsor logos without cluttering the main stream content.",
    solution:
      "Built modular overlay components with sleek dark-mode aesthetics, dynamic lighting effects, and clear focal areas for the streamer video feed.",
    outcome:
      "Delivered broadcast-grade stream assets that elevated creator production value to professional esports standards.",
    meta: {
      client: "EZ Squad & Content Streamers",
      industry: "Esports & Live Broadcast",
      role: "Broadcast Asset Designer",
      year: "2024",
      deliverables: "Stream Overlays, Alert Sets, Sponsor Banners",
      tools: "Photoshop, After Effects, OBS Studio",
    },
    video: {
      title: "Live Stream Design",
      thumbnail: "/portfolio/ezsquad.jpg",
      youtubeId: "AbCdEf12345",
    },
    gallery: [
      {
        type: "full",
        src: "/portfolio/ezsquad.jpg",
        alt: "EZ Squad Stream Package",
        caption: "EZ Squad — Live Stream Overlay Package",
      },
      {
        type: "half",
        src: "/portfolio/wakatom.jpg",
        alt: "Wak Atom Stream Assets",
        caption: "Wak Atom — Broadcast Screen Layout",
      },
      {
        type: "half",
        src: "/portfolio/reno.jpg",
        alt: "Sinyal Ordal Live Graphic",
        caption: "Sinyal Ordal — Trading Stream Graphics",
      },
    ],
    items: [
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description: "Live stream direction with clean composition and strong timing cues.",
        cover: "/portfolio/wakatom.jpg",
        images: ["/portfolio/wakatom.jpg"],
      },
      {
        title: "EZ Squad",
        subtitle: "EZ Squad",
        description: "Premium motion-forward assets for a live community and trading campaign identity.",
        cover: "/portfolio/ezsquad.jpg",
        images: ["/portfolio/ezsquad.jpg"],
      },
    ],
  },
];

// Helper functions for dynamic fetching
export function getPortfolioBySlug(slug: string): PortfolioCollection | undefined {
  return portfolioCollections.find((item) => item.slug === slug);
}

export function getNextPortfolio(currentSlug: string): PortfolioCollection {
  const currentIndex = portfolioCollections.findIndex(
    (item) => item.slug === currentSlug
  );
  const nextIndex = (currentIndex + 1) % portfolioCollections.length;
  return portfolioCollections[nextIndex];
}