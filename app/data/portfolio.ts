import type { PortfolioCollection } from "@/types/portfolio";

export type { PortfolioCollection } from "@/types/portfolio";

export const portfolioCollections: PortfolioCollection[] = [
  // =========================================================
  // 1. SOCIAL MEDIA DESIGN
  // =========================================================
  {
    id: 1,
    slug: "social-media-design",
    title: "Social Media Design",
    category: "CREATIVE DIRECTION",
    tagline:
      "Editorial social media systems with clean layouts and consistent visual rhythm.",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",

    cover: "/images/portfolio/uksw-1.avif",

    overview:
      "Editorial social media systems designed to look refined, coherent, and premium across feed, story, and campaign touchpoints.",

    challenge:
      "Maintaining brand consistency across diverse social media platforms while keeping individual post designs visually engaging and culturally relevant for different audiences.",

    solution:
      "Developed a flexible grid system, uniform typographic rules, and curated color palettes that allow for high content variety without compromising overall brand identity.",

    outcome:
      "Increased visual consistency across client social feeds, resulting in higher brand recognition and an average 35% growth in audience engagement.",

    meta: {
      client: "UKSW Salatiga",
      industry: "Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables: "Social Templates, Feed Systems",
      tools: "Figma, Photoshop",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/uksw-1.avif",
        alt: "UKSW Mendunia - Feed Post",
        caption:
          "UKSW Mendunia — Editorial Feed Layout & Typography",
      },
      {
        type: "half",
        src: "/portfolio/uksw-2.avif",
        alt: "Kampus Tour & Fasilitas",
        caption:
          "Kampus Tour — Architectural & Visual Overlay",
      },
      {
        type: "half",
        src: "/portfolio/uksw-3.avif",
        alt: "PMB 2026 Opening",
        caption:
          "PMB 2026 — High-Impact Announcement Grid",
      },
      {
        type: "full",
        src: "/portfolio/uksw-4.avif",
        alt: "Akreditasi Unggul",
        caption:
          "Akreditasi Unggul — Institutional Pride Layout",
      },
      {
        type: "half",
        src: "/portfolio/uksw-5.avif",
        alt: "UKSW Menyapa Event",
        caption:
          "UKSW Menyapa — Dynamic Event Coverage",
      },
      {
        type: "half",
        src: "/portfolio/uksw-6.avif",
        alt: "Creative Minority Series",
        caption:
          "Creative Minority — Student Talent Storytelling",
      },
    ],

    items: [
      {
        title: "UKSW Mendunia",
        subtitle: "Feed Post",
        description:
          "Editorial social media system crafted for UKSW admissions and campus life with a calm editorial rhythm.",
        cover: "/portfolio/uksw-1.avif",
        images: ["/portfolio/uksw-1.avif"],
      },
      {
        title: "Kampus Tour & Fasilitas",
        subtitle: "Carousel Design",
        description:
          "Highlighting campus spaces with immersive architectural photography and clean graphic overlays.",
        cover: "/portfolio/uksw-2.avif",
        images: ["/portfolio/uksw-2.avif"],
      },
      {
        title: "PMB 2026 Opening",
        subtitle: "Announcement",
        description:
          "High-impact announcement grid layout designed to drive student engagement and registration.",
        cover: "/portfolio/uksw-3.avif",
        images: ["/portfolio/uksw-3.avif"],
      },
      {
        title: "Akreditasi Unggul",
        subtitle: "Institutional Post",
        description:
          "Institutional pride delivered through structured editorial design systems and sharp typography.",
        cover: "/portfolio/uksw-4.avif",
        images: ["/portfolio/uksw-4.avif"],
      },
      {
        title: "UKSW Menyapa Event",
        subtitle: "Event Coverage",
        description:
          "Dynamic event coverage assets designed for multi-platform social engagement and visibility.",
        cover: "/portfolio/uksw-5.avif",
        images: ["/portfolio/uksw-5.avif"],
      },
      {
        title: "Creative Minority Series",
        subtitle: "Community Showcase",
        description:
          "Showcasing student creativity and diverse talents through curated visual storytelling.",
        cover: "/portfolio/uksw-6.avif",
        images: ["/portfolio/uksw-6.avif"],
      },
    ],
  },

  // =========================================================
  // 2. BRAND IDENTITY
  // =========================================================
  {
    id: 2,
    slug: "brand-identity",
    title: "Brand Identity",
    category: "CREATIVE DIRECTION",
    tagline:
      "Building cohesive brand experiences through strategic visual identity and storytelling.",
    description:
      "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",

    cover: "/portfolio/jendela-finansial.avif",

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
      deliverables:
        "Brand Identity, Typography Systems, Brand Guidelines",
      tools: "Illustrator, Figma, Photoshop",
    },

    featured: true,

    gallery: [
      {
        type: "full",
        src: "/portfolio/jendela-finansial.avif",
        alt: "Brand Identity Overview",
        caption: "Brand Identity System & Editorial Grid",
      },
      {
        type: "half",
        src: "/portfolio/mark.avif",
        alt: "Social Media Application",
        caption: "Digital Application & Content Templates",
      },
      {
        type: "half",
        src: "/portfolio/character.avif",
        alt: "Brand Character Integration",
        caption: "Mascot & Character Brand Asset",
      },
      {
        type: "full",
        src: "/portfolio/hut63.avif",
        alt: "HUT 63 Pelkat PA",
        caption: "HUT 63 — Brand Identity & Campaign Visuals",
      },
      {
        type: "full",
        src: "/portfolio/hut67.avif",
        alt: "HUT 67 Pelkat PA",
        caption: "HUT 67 — Brand Identity & Campaign Visuals",
      },
      {
        type: "full",
        src: "/portfolio/soleste.avif",
        alt: "Soleste Brand Identity",
        caption: "Soleste — Brand Identity & Visual Communication",
      },
    ],

    items: [
      {
        title: "Brand Identity",
        subtitle: "Visual Identity",
        description:
          "Designed a cohesive brand identity system including colors, typography, layouts, and supporting visual elements.",
        cover: "/portfolio/jendela-finansial.avif",
        images: ["/portfolio/jendela-finansial.avif"],
      },
      {
        title: "Social Media Design",
        subtitle: "Content Design",
        description:
          "Created engaging Instagram feeds, carousel posts, stories, promotional graphics, and educational content.",
        cover: "/portfolio/mark.avif",
        images: ["/portfolio/mark.avif"],
      },
      {
        title: "HUT 63",
        subtitle: "Brand Identity",
        description:
          "Visual identity and campaign design created for HUT 63 Pelkat PA.",
        cover: "/portfolio/hut63.avif",
        images: ["/portfolio/hut63.avif"],
      },
      {
        title: "HUT 67",
        subtitle: "Brand Identity",
        description:
          "Visual identity and campaign design created for HUT 67 Pelkat PA.",
        cover: "/portfolio/hut67.avif",
        images: ["/portfolio/hut67.avif"],
      },
      {
        title: "Soleste",
        subtitle: "Brand Identity",
        description:
          "Brand identity and visual communication design developed for Soleste.",
        cover: "/portfolio/soleste.avif",
        images: ["/portfolio/soleste.avif"],
      },
    ],
  },

  // =========================================================
  // 3. LOGO DESIGN
  // =========================================================
  {
    id: 3,
    slug: "logo-design",
    title: "Logo Design",
    category: "VISUAL IDENTITY",
    tagline:
      "Timeless logo systems designed for brands, churches, and communities.",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",

    cover: "/portfolio/pelkatpa.avif",

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
      deliverables:
        "Logo Marks, Vector Assets, Brand Usage Guidelines",
      tools: "Illustrator, Figma",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/pelkatpa.avif",
        alt: "HUT 63 Pelkat PA Logo",
        caption: "HUT 63 Pelkat PA — Commemorative Identity",
      },
      {
        type: "half",
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal Symbol",
        caption: "Sinyal Ordal — Brand Symbol Concept",
      },
      {
        type: "half",
        src: "/portfolio/uksw.avif",
        alt: "Community Logo Mark",
        caption: "Community Identity & Vector Grid",
      },
    ],

    items: [
      {
        title: "HUT 63 Pelkat PA",
        subtitle: "HUT 63 Pelkat PA",
        description:
          "A commemorative logo direction with a clear and memorable identity.",
        cover: "/portfolio/pelkatpa.avif",
        images: ["/portfolio/pelkatpa.avif"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description:
          "Community identity work built with warmth, clarity, and lasting structure.",
        cover: "/portfolio/pelkatpa.avif",
        images: ["/portfolio/pelkatpa.avif"],
      },
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description:
          "Logo application and brand symbol direction for a recognizable visual presence.",
        cover: "/portfolio/sinyalordal.avif",
        images: ["/portfolio/sinyalordal.avif"],
      },
    ],
  },

  // =========================================================
  // 4. THUMBNAIL DESIGN (FORMAT 1080x1920 - PORTRAIT/VERTICAL)
  // =========================================================
  {
    id: 4,
    slug: "thumbnail-design",
    title: "Thumbnail Design",
    category: "CONTENT DESIGN",
    tagline:
      "High-performing vertical content & thumbnails (1080x1920) crafted with strong visual hierarchy.",
    description:
      "High-performing YouTube Shorts, TikTok, and Instagram Reels thumbnails crafted in vertical 1080x1920 format.",

    cover: "/portfolio/thumbnail-1.avif",

    overview:
      "High-performing vertical thumbnails (1080x1920) designed to balance clarity, storytelling, and premium visual hierarchy for mobile-first content platforms.",

    challenge:
      "Standing out in fast-scrolling mobile video feeds where viewers make click decisions in milliseconds.",

    solution:
      "Engineered high-contrast vertical visual compositions with bold focal points, expressive typography, and clear subject isolation optimized for 9:16 ratio.",

    outcome:
      "Achieved measurable increases in Click-Through Rates (CTR) across client social and short-form video channels.",

    meta: {
      client: "Content Creators & Traders",
      industry: "Digital Media & Entertainment",
      role: "Visual Content Designer",
      year: "2024",
      deliverables:
        "High-CTR Vertical Thumbnails (1080x1920), Channel Graphics",
      tools: "Photoshop, Lightroom",
    },

    gallery: [
      { type: "half", src: "/portfolio/thumbnail-1.avif", alt: "Thumbnail 1 (1080x1920)", caption: "Thumbnail 1 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-2.avif", alt: "Thumbnail 2 (1080x1920)", caption: "Thumbnail 2 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-3.avif", alt: "Thumbnail 3 (1080x1920)", caption: "Thumbnail 3 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-4.avif", alt: "Thumbnail 4 (1080x1920)", caption: "Thumbnail 4 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-5.avif", alt: "Thumbnail 5 (1080x1920)", caption: "Thumbnail 5 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-6.avif", alt: "Thumbnail 6 (1080x1920)", caption: "Thumbnail 6 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-7.avif", alt: "Thumbnail 7 (1080x1920)", caption: "Thumbnail 7 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-8.avif", alt: "Thumbnail 8 (1080x1920)", caption: "Thumbnail 8 — Vertical 1080x1920" },
      { type: "half", src: "/portfolio/thumbnail-9.avif", alt: "Thumbnail 9 (1080x1920)", caption: "Thumbnail 9 — Vertical 1080x1920" },
    ],

    items: [
      {
        title: "Vertical Thumbnail Collection",
        subtitle: "1080x1920 Content Design",
        description:
          "High-performing vertical thumbnails (1080x1920) crafted for maximum mobile engagement.",
        cover: "/portfolio/thumbnail-1.avif",
        images: ["/portfolio/thumbnail-1.avif"],
      },
    ],
  },

  // =========================================================
  // 5. CHARACTER DESIGN (Rasio 4:5 - Tanpa Deskripsi)
  // =========================================================
  {
    id: 5,
    slug: "character-design",
    title: "Character Design",
    category: "ILLUSTRATION",
    tagline: "",
    description: "",

    cover: "/portfolio/character.avif",

    overview: "",
    challenge: "",
    solution: "",
    outcome: "",

    meta: {
      client: "Jendela Finansial",
      industry: "EdTech & Brand Mascot",
      role: "Character Artist & Illustrator",
      year: "2024",
      deliverables: "Character Sheet",
      tools: "Illustrator, Photoshop",
    },

    gallery: [
      {
        type: "portrait-4-5",
        src: "/portfolio/character.avif",
        alt: "Character Model Sheet",
        caption: "Jendela Finansial Mascot",
      },
    ],

    items: [
      {
        title: "Elof",
        subtitle: "Character Illustration",
        description: "",
        cover: "/portfolio/elof.avif",
        images: ["/portfolio/elof.avif"],
      },
      {
        title: "Jeni & Jeno",
        subtitle: "Character Illustration",
        description: "",
        cover: "/portfolio/jeni-jeno.avif",
        images: ["/portfolio/jeni-jeno.avif"],
      },
      {
        title: "Teddy",
        subtitle: "Character Illustration",
        description: "",
        cover: "/portfolio/teddy.avif",
        images: ["/portfolio/teddy.avif"],
      },
      {
        title: "Emily",
        subtitle: "Character Illustration",
        description: "",
        cover: "/portfolio/emily.avif",
        images: ["/portfolio/emily.avif"],
      },
    ],
  },

  // =========================================================
  // 6. LIVE STREAM DESIGN
  // =========================================================
  {
    id: 6,
    slug: "live-stream-design",
    title: "Live Stream Design",
    category: "BROADCAST GRAPHICS",
    tagline:
      "Professional streaming layouts and broadcast assets for creators and communities.",
    description:
      "Professional streaming layouts and broadcast assets for creators and trading communities.",

    cover: "/portfolio/ezsquad.avif",

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
      deliverables:
        "Stream Overlays, Alert Sets, Sponsor Banners",
      tools: "Photoshop, After Effects, OBS Studio",
    },

    video: {
      title: "Live Stream Design",
      thumbnail: "/portfolio/ezsquad.avif",
      youtubeId: "AbCdEf12345",
    },

    gallery: [
      {
        type: "full",
        src: "/portfolio/ezsquad.avif",
        alt: "EZ Squad Stream Package",
        caption:
          "EZ Squad — Live Stream Overlay Package",
      },
      {
        type: "half",
        src: "/portfolio/wakatom.avif",
        alt: "Wak Atom Stream Assets",
        caption:
          "Wak Atom — Broadcast Screen Layout",
      },
      {
        type: "half",
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal Live Graphic",
        caption:
          "Sinyal Ordal — Trading Stream Graphics",
      },
    ],

    items: [
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description:
          "Live stream direction with clean composition and strong timing cues.",
        cover: "/portfolio/wakatom.avif",
        images: ["/portfolio/wakatom.avif"],
      },
      {
        title: "EZ Squad",
        subtitle: "EZ Squad",
        description:
          "Premium motion-forward assets for a live community and trading campaign identity.",
        cover: "/portfolio/ezsquad.avif",
        images: ["/portfolio/ezsquad.avif"],
      },
    ],
  },

  // =========================================================
  // 7. DESAIN LAIN
  // =========================================================
  {
    id: 7,
    slug: "desain-lain",
    title: "Desain Lain",
    category: "MISCELLANEOUS DESIGN",
    tagline:
      "A gallery showcasing various creative visual assets, print media, and promotional design experiments.",
    description:
      "A collection of various graphic design projects including banners, posters, and visual experiments.",

    cover: "/portfolio/mark.avif",

    overview:
      "A flexible collection of promotional materials, posters, and miscellaneous visual design projects crafted across different client requests.",

    challenge:
      "Adapting quickly to diverse visual styles and print/digital technical requirements across non-standard formats.",

    solution:
      "Applied core graphic design fundamentals to deliver eye-catching visual communication regardless of media constraint.",

    outcome:
      "A rich visual gallery demonstrating adaptability and creative exploration across multiple mediums.",

    meta: {
      client: "Various Clients",
      industry: "Creative Services",
      role: "Graphic Designer",
      year: "2023 - 2024",
      deliverables: "Print Assets, Banners, Digital Graphics",
      tools: "Photoshop, Illustrator",
    },

    gallery: [
      {
        type: "half",
        src: "/portfolio/desain-lain-1.avif",
        alt: "Desain Lain 1",
        caption: "Creative Visual Work 1",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-2.avif",
        alt: "Desain Lain 2",
        caption: "Creative Visual Work 2",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-3.avif",
        alt: "Desain Lain 3",
        caption: "Creative Visual Work 3",
      },
      {
        type: "half",
        src: "/portfolio/desain-lain-4.avif",
        alt: "Desain Lain 4",
        caption: "Creative Visual Work 4",
      },
    ],

    items: [
      {
        title: "Miscellaneous Graphics",
        subtitle: "Gallery Collection",
        description:
          "Various promotional and graphic design experiments.",
        cover: "/portfolio/mark.avif",
        images: [
          "/portfolio/desain-lain-1.avif",
          "/portfolio/desain-lain-2.avif",
        ],
      },
    ],
  },
];

// =========================================================
// GET PORTFOLIO BY SLUG
// =========================================================

export function getPortfolioBySlug(
  slug: string
): PortfolioCollection | undefined {
  return portfolioCollections.find(
    (item) => item.slug === slug
  );
}

// =========================================================
// GET NEXT PORTFOLIO
// =========================================================

export function getNextPortfolio(
  currentSlug: string
): PortfolioCollection {
  const currentIndex = portfolioCollections.findIndex(
    (item) => item.slug === currentSlug
  );

  const nextIndex =
    (currentIndex + 1) % portfolioCollections.length;

  return portfolioCollections[nextIndex];
}