import type { PortfolioCollection } from "@/types/portfolio";

// Definisikan tipe SectionData langsung di sini agar tidak error
export interface SectionData {
  title: string;
  username: string;
  bio: string;
  avatarImage?: string;
  avatarText: string;
  avatarBg: string;
  posts: {
    type: "full" | "half";
    src: string;
    alt: string;
    caption: string;
  }[];
  details: {
    client: string;
    industry: string;
    role: string;
    year: string;
    deliverables: string;
    tools: string;
  };
  overview: string;
  challenge: string;
}

export function getSocialSections(): SectionData[] {
  return [
    {
      title: "UKSW",
      username: "uksw_salatiga",
      bio: "Official visual feed for UKSW Salatiga 🎓 Shaping futures through creative campus stories.",
      avatarImage: "/images/portfolio/uksw.jpg",
      avatarText: "U",
      avatarBg: "from-pink-500 to-rose-400",
      posts: [
        { type: "full", src: "/images/portfolio/uksw-1.jpg", alt: "UKSW Mendunia", caption: "UKSW Mendunia" },
        { type: "half", src: "/images/portfolio/uksw-2.jpg", alt: "Kampus Tour", caption: "Kampus Tour" },
        { type: "half", src: "/images/portfolio/uksw-3.jpg", alt: "PMB 2026", caption: "PMB 2026" },
        { type: "full", src: "/images/portfolio/uksw-4.jpg", alt: "Akreditasi Unggul", caption: "Akreditasi Unggul" },
        { type: "half", src: "/images/portfolio/uksw-5.jpg", alt: "UKSW Menyapa", caption: "UKSW Menyapa" },
        { type: "half", src: "/images/portfolio/uksw-6.jpg", alt: "Creative Minority", caption: "Creative Minority" },
      ],
      details: {
        client: "UKSW Salatiga",
        industry: "Education",
        role: "Lead Visual Designer",
        year: "2024",
        deliverables: "Social Templates, Feed Systems",
        tools: "Figma, Photoshop",
      },
      overview: "Editorial social media systems designed to look refined, coherent, and premium across campus touchpoints.",
      challenge: "Maintaining brand consistency across academic campaigns while keeping designs engaging for students.",
    },
    {
      title: "Jendela Finansial",
      username: "jendela_finansial",
      bio: "Smart financial tips & wealth education made simple 💡 Grow your future with us.",
      avatarImage: "/images/portfolio/jendela-finansial-logo.jpg",
      avatarText: "JF",
      avatarBg: "from-emerald-500 to-teal-400",
      posts: [
        { type: "full", src: "/images/portfolio/jendela-1.jpg", alt: "Jendela Finansial 1", caption: "Brand Identity System" },
        { type: "half", src: "/images/portfolio/jendela-2.jpg", alt: "Jendela Finansial 2", caption: "Digital Application" },
        { type: "half", src: "/images/portfolio/jendela-3.jpg", alt: "Jendela Finansial 3", caption: "Content Templates" },
        { type: "full", src: "/images/portfolio/jendela-4.jpg", alt: "Jendela Finansial 4", caption: "Layout Design" },
        { type: "half", src: "/images/portfolio/jendela-5.jpg", alt: "Jendela Finansial 5", caption: "Visual Asset" },
        { type: "half", src: "/images/portfolio/jendela-6.jpg", alt: "Jendela Finansial 6", caption: "Mascot Integration" },
      ],
      details: {
        client: "Jendela Finansial",
        industry: "Finance & Lifestyle",
        role: "Brand Strategist & Lead Designer",
        year: "2024",
        deliverables: "Brand Identity, Typography Systems",
        tools: "Illustrator, Figma, Photoshop",
      },
      overview: "A comprehensive branding project combining visual identity, social media content, and digital storytelling.",
      challenge: "Humanizing financial and community platforms without losing professional credibility.",
    },
  ];
}

export function getBrandSections(): SectionData[] {
  return [
    {
      title: "Jendela Finansial",
      username: "jendela_finansial",
      bio: "Smart financial tips & wealth education brand identity 💡",
      avatarImage: "/images/portfolio/jendela-finansial-logo.jpg",
      avatarText: "JF",
      avatarBg: "from-emerald-500 to-teal-400",
      posts: [
        { type: "full", src: "/images/portfolio/jendela-1.jpg", alt: "Brand Identity Overview", caption: "Brand Identity System & Editorial Grid" }
      ],
      details: {
        client: "Jendela Finansial",
        industry: "Financial Education",
        role: "Lead Brand Designer",
        year: "2024",
        deliverables: "Brand Identity, Logo Suite",
        tools: "Illustrator, Figma",
      },
      overview: "Creating a trustworthy and approachable brand identity for financial education.",
      challenge: "Balancing professional financial trust with friendly, youthful appeal.",
    },
  ];
}