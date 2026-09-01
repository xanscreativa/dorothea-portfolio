export interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
  subSlides?: GalleryItem[];
  isVideo?: boolean;
}

export interface SectionDetails {
  client: string;
  industry: string;
  role: string;
  year: string;
  deliverables: string;
  tools: string;
}

export interface SectionData {
  title: string;
  username: string;
  bio: string;
  avatarImage: string;
  avatarText: string;
  avatarBg: string;
  posts: GalleryItem[];
  details: SectionDetails;
  overview: string;
  challenge: string;

  // Brand project detail page
  slug?: string;
  category?: string;
  bigIdea?: string;
  projectImages?: GalleryItem[];
}

export const desainLainItems: GalleryItem[] = [
  {
    src: "/portfolio/backdrop-fa.avif",
    alt: "Children's forum backdrop",
    caption: "Children's forum backdrop",
  },
  {
    src: "/portfolio/billboard-uksw.avif",
    alt: "UKSW billboard",
    caption: "UKSW billboard",
  },
  {
    src: "/portfolio/spanduk-pelkatpa.avif",
    alt: "Pelkat PA banner",
    caption: "Pelkat PA banner",
  },
  {
    src: "/portfolio/campaign.avif",
    alt: "Campaign design",
    caption: "Campaign design",
  },
];

export const liveStreamItems: GalleryItem[] = [
  {
    src: "/portfolio/live-anya.webm",
    alt: "Anya Zona Layer",
    caption: "Anya Zona Layer live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-ez.webm",
    alt: "EZ Squad",
    caption: "EZ Squad live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-raka.webm",
    alt: "Raka Trabas",
    caption: "Raka Trabas live stream design",
    isVideo: true,
  },
  {
    src: "/portfolio/live-reno.webm",
    alt: "Sinyal Ordal",
    caption: "Sinyal Ordal live stream design",
    isVideo: true,
  },
];

export const liveProfiles = [
  {
    title: "Anya Zona Layer",
    username: "anya",
    avatarImage: "/portfolio/anya.avif",
    avatarText: "A",
    avatarBg: "from-pink-400 to-rose-500",
  },
  {
    title: "EZ Squad",
    username: "ezsquad",
    avatarImage: "/portfolio/ez.avif",
    avatarText: "EZ",
    avatarBg: "from-purple-400 to-violet-600",
  },
  {
    title: "Raka Trabas",
    username: "rakatrabas",
    avatarImage: "/portfolio/raka.avif",
    avatarText: "RT",
    avatarBg: "from-orange-400 to-red-500",
  },
  {
    title: "Sinyal Ordal",
    username: "sinyalordal",
    avatarImage: "/portfolio/sinyalordal.avif",
    avatarText: "SO",
    avatarBg: "from-blue-400 to-cyan-500",
  },
];

export const defaultThumbnailGrid: GalleryItem[] = Array.from(
  { length: 9 },
  (_, index) => {
    const num = index + 1;

    return {
      src: `/portfolio/thumbnail-${num}.avif`,
      alt: `Thumbnail ${num}`,
      caption: `Thumbnail ${num}`,
    };
  }
);

// ==========================================
// SOCIAL MEDIA
// ==========================================

export const socialSections: SectionData[] = [
  {
    title: "Pelkat PA GPIB Immanuel Pekanbaru",
    username: "pelkatpa.pku",
    bio: "Children's ministry Sunday service.",
    avatarImage: "/portfolio/pa-logo.avif",
    avatarText: "P",
    avatarBg: "from-blue-500 to-indigo-400",
    posts: [
      { src: "/portfolio/pa-1.avif" },
      { src: "/portfolio/pa-2.avif" },
      { src: "/portfolio/pa-3.avif" },
      { src: "/portfolio/pa-4.avif" },
      { src: "/portfolio/pa-5.avif" },
      { src: "/portfolio/pa-6.avif" },
    ],
    details: {
      client: "Pelkat PA GPIB Immanuel Pekanbaru",
      industry: "Community & Ministry",
      role: "Visual Designer",
      year: "2024",
      deliverables: "Event assets, social media story templates",
      tools: "Adobe Illustrator, Canva",
    },
    overview:
      "Created joyful and engaging visual content for children's ministry events and daily spiritual communication. The designs were developed to feel vibrant, warm, and approachable while maintaining a clear and consistent visual identity.",
    challenge:
      "The main challenge was balancing a playful, child-friendly aesthetic with the established branding and visual guidelines of the church.",
  },

  {
    title: "UKSW",
    username: "uksw_salatiga",
    bio: "Creative minority.",
    avatarImage: "/portfolio/uksw-logo.avif",
    avatarText: "U",
    avatarBg: "from-pink-500 to-rose-400",
    posts: [
      {
        src: "/portfolio/uksw-1.avif",
        alt: "UKSW goes global",
        caption: "UKSW goes global",
      },
      {
        src: "/portfolio/uksw-2.avif",
        alt: "Campus tour",
        caption: "Campus tour",
        subSlides: [
          { src: "/portfolio/uksw-2.avif" },
          { src: "/portfolio/uksw-2a.avif" },
          { src: "/portfolio/uksw-2b.avif" },
          { src: "/portfolio/uksw-2c.avif" },
        ],
      },
      {
        src: "/portfolio/uksw-3.avif",
        alt: "New student admission 2026",
        caption: "Rumah Noto",
      },
      {
        src: "/portfolio/uksw-4.avif",
        alt: "Excellence accreditation",
        caption: "Passover poster",
      },
      {
        src: "/portfolio/uksw-5.avif",
        alt: "UKSW greets",
        caption: "Passover poster",
      },
      {
        src: "/portfolio/uksw-6.avif",
        alt: "Creative minority",
        caption: "Quotes",
      },
      {
        src: "/portfolio/uksw-7.avif",
        alt: "Campus life",
        caption: "Campus life",
        subSlides: [
          { src: "/portfolio/uksw-7.avif" },
          { src: "/portfolio/uksw-7a.avif" },
          { src: "/portfolio/uksw-7b.avif" },
          { src: "/portfolio/uksw-7c.avif" },
        ],
      },
      {
        src: "/portfolio/uksw-8.avif",
        alt: "Research & innovation",
        caption: "Research & innovation",
      },
      {
        src: "/portfolio/uksw-9.avif",
        alt: "Graduation moment",
        caption: "Graduation moment",
      },
    ],
    details: {
      client: "UKSW Salatiga",
      industry: "Education",
      role: "Visual Design Intern",
      year: "2022",
      deliverables: "Social media content, thumbnails, photography",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "Created engaging visual content for the university's social media platforms, including promotional posts, video thumbnails, and photography to support various campus activities and communications.",
    challenge:
      "Creating visually engaging and consistent content for different campus communications while adapting to a variety of formats, audiences, and creative needs.",
  },

  {
    title: "Jendela Finansial",
    username: "jendelafinansial",
    bio: "Smart financial tips and wealth education made simple 💡 Grow your future with us.",
    avatarImage: "/portfolio/jendela-finansial-logo.avif",
    avatarText: "JF",
    avatarBg: "from-emerald-500 to-teal-400",
    posts: [
      {
        src: "/portfolio/jendela-1.avif",
        alt: "Jendela 1",
        caption: "Jendela 1",
        subSlides: [
          { src: "/portfolio/jendela-1.avif" },
          { src: "/portfolio/jendela-1a.avif" },
          { src: "/portfolio/jendela-1b.avif" },
          { src: "/portfolio/jendela-1c.avif" },
          { src: "/portfolio/jendela-1d.avif" },
          { src: "/portfolio/jendela-1e.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-2.avif",
        alt: "Jendela 2",
        caption: "Jendela 2",
        subSlides: [
          { src: "/portfolio/jendela-2.avif" },
          { src: "/portfolio/jendela-2a.avif" },
          { src: "/portfolio/jendela-2b.avif" },
          { src: "/portfolio/jendela-2c.avif" },
          { src: "/portfolio/jendela-2d.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-3.avif",
        alt: "Jendela 3",
        caption: "Jendela 3",
        subSlides: [
          { src: "/portfolio/jendela-3.avif" },
          { src: "/portfolio/jendela-3a.avif" },
          { src: "/portfolio/jendela-3b.avif" },
          { src: "/portfolio/jendela-3c.avif" },
          { src: "/portfolio/jendela-3d.avif" },
          { src: "/portfolio/jendela-3e.avif" },
        ],
      },
      {
        src: "/portfolio/jendela-4.avif",
        alt: "Jendela 4",
        caption: "Jendela 4",
        subSlides: [
          { src: "/portfolio/jendela-4.avif" },
          { src: "/portfolio/jendela-4a.avif" },
          { src: "/portfolio/jendela-4b.avif" },
          { src: "/portfolio/jendela-4c.avif" },
          { src: "/portfolio/jendela-4d.avif" },
          { src: "/portfolio/jendela-4e.avif" },
          { src: "/portfolio/jendela-4f.avif" },
          { src: "/portfolio/jendela-4g.avif" },
          {
            src: "/portfolio/jendela-4h.avif",
            alt: "Jendela 4h",
            caption: "Jendela 4h",
          },
        ],
      },
      { src: "/portfolio/jendela-5.avif" },
      {
        src: "/portfolio/jendela-6.avif",
        alt: "Jendela 6",
        caption: "Jendela 6",
        subSlides: [
          { src: "/portfolio/jendela-6.avif" },
          { src: "/portfolio/jendela-6a.avif" },
          { src: "/portfolio/jendela-6b.avif" },
          { src: "/portfolio/jendela-6c.avif" },
          { src: "/portfolio/jendela-6d.avif" },
          { src: "/portfolio/jendela-6e.avif" },
          { src: "/portfolio/jendela-6f.avif" },
        ],
      },
    ],
    details: {
      client: "Jendela Finansial",
      industry: "Financial Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables:
        "Social media content, character design, branding assets, educational campaigns",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "Developed visual content and branding assets for a financial education platform focused on helping Gen Z become more financially aware. The work included creating social media content, original character designs, and engaging visuals for financial challenges, news, and educational content.",
    challenge:
      "Making financial topics approachable and engaging for Gen Z while building a distinctive visual identity that could communicate educational content, financial news, and interactive challenges in a clear, relatable, and visually appealing way.",
  },

  {
    title: "Consistrade",
    username: "consistrade",
    bio: "Professional corporate and trading brand identity design 📈 Global trade made seamless.",
    avatarImage: "/portfolio/consistrade-logo.avif",
    avatarText: "C",
    avatarBg: "from-purple-500 to-pink-500",
    posts: [
      { src: "/portfolio/consistrade-1.avif" },
      { src: "/portfolio/consistrade-2.avif" },
      { src: "/portfolio/consistrade-3.avif" },
      { src: "/portfolio/consistrade-4.avif" },
      { src: "/portfolio/consistrade-5.avif" },
      { src: "/portfolio/consistrade-6.avif" },
      { src: "/portfolio/consistrade-7.avif" },
      { src: "/portfolio/consistrade-8.avif" },
      { src: "/portfolio/consistrade-9.avif" },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Graphic Designer & Brand Designer",
      year: "2025",
      deliverables:
        "Brand identity, social media content, character design, digital learning assets",
      tools: "Adobe Photoshop, Adobe Illustrator, Canva",
    },
    overview:
      "Developed visual and branding assets for Consistrade, a financial education platform focused on helping traders—from beginners to professionals—learn and grow consistently. The work included building a cohesive brand identity, creating character designs, and developing engaging visual assets for digital products, trading modules, educational classes, and community-based content.",
    challenge:
      "Creating a visual identity that feels approachable for beginner traders while maintaining credibility and relevance for more experienced audiences. The challenge was to transform complex trading and financial concepts into clear, engaging, and visually consistent content that supports learning, community engagement, and Consistrade's digital education ecosystem.",
  },
];

// ==========================================
// BRAND IDENTITY
// ==========================================

export const brandSections: SectionData[] = [
  {
    slug: "jendela-finansial",
    category: "BRAND IDENTITY",
    title: "Jendela Finansial",
    username: "jendelafinansial",
    bio: "Smart financial tips and wealth education. 💡📈",
    avatarImage: "/portfolio/jendela-finansial.avif",
    avatarText: "JF",
    avatarBg: "from-emerald-500 to-teal-400",
    posts: [
      {
        src: "/portfolio/jendela-finansial.avif",
        alt: "Jendela Finansial logo",
        caption: "Jendela Finansial logo",
      },
    ],
    details: {
      client: "Jendela Finansial",
      industry: "Financial Education",
      role: "Lead Visual Designer",
      year: "2024",
      deliverables: "Character design, branding, social media design",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "A financial education brand that addresses financial literacy using a visual approach tailored to Gen Z. Responsibilities included designing brand mascots, establishing the visual branding, and crafting social media content.",
    challenge:
      "Communicating complex financial concepts to make them approachable, relevant, and engaging for a younger audience through a fresh visual strategy.",
    bigIdea:
      "Creating mascots Jeni & Jeno to represent Gen Z eager to learn and improve their financial literacy, turning financial education into a friendly and interactive visual experience.",
    projectImages: [
      {
        src: "/portfolio/branding-jendela.avif",
        alt: "Jendela Finansial brand identity",
      },
    ],
  },

  {
    slug: "pelkat-pa-gpib-immanuel-pekanbaru",
    category: "BRAND IDENTITY",
    title: "Pelkat PA GPIB Immanuel Pekanbaru",
    username: "pelkatpa.pku",
    bio: "Official Pelayanan Anak GPIB Immanuel Pekanbaru. 🙏🕊️",
    avatarImage: "/portfolio/pelkatpa.avif",
    avatarText: "PA",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/pelkatpa.avif",
        alt: "Pelkat PA GPIB Immanuel Pekanbaru",
        caption: "Pelkat PA GPIB Immanuel Pekanbaru",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Children Ministry",
      role: "Visual Designer",
      year: "2025",
      deliverables:
        "Character design, video editing, poster design, event design, branding, social media design",
      tools: "Illustrator, Photoshop, Premiere Pro / CapCut",
    },
    overview:
      "Children's Ministry (Pelkat PA) serving elementary school children at GPIB Immanuel Pekanbaru. Responsible for developing visual characters, creating worship and event posters, editing videos, building visual branding, and designing social media content.",
    challenge:
      "Establishing a cheerful and attractive visual consistency for elementary-aged children while upholding core church ministry values.",
    projectImages: [
      {
        src: "/portfolio/branding-pelkatpa.avif",
        alt: "Pelkat PA GPIB Immanuel Pekanbaru brand identity",
      },
    ],
  },

  {
    slug: "gpib-immanuel-pekanbaru",
    category: "BRAND IDENTITY",
    title: "GPIB Immanuel Pekanbaru",
    username: "gpibimmanuelpku",
    bio: "Official church branding and visual identity system. 🙏🕊️",
    avatarImage: "/portfolio/gpib-sinode.avif",
    avatarText: "G",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/gpib-thumb.avif",
        alt: "GPIB Immanuel Pekanbaru",
        caption: "GPIB Immanuel Pekanbaru",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Church",
      role: "Visual Designer",
      year: "2025",
      deliverables:
        "Logo design, branding, character design, social media design, video editing",
      tools: "Illustrator, Figma, Photoshop",
    },
    overview:
      "Designed internal logos, developed visual branding, created brand mascots, crafted social media content, and handled video editing for GPIB Immanuel Pekanbaru.",
    challenge:
      "Building a cohesive visual identity that bridges the church's long standing ministry heritage with a modern, approachable aesthetic for the whole congregation.",
    bigIdea:
      "Introducing 'Elof', a mascot inspired by Rudolf Knierim (the first missionary and pastor of GPIB). The name Immanuel Rudolf is abbreviated to Elof with the philosophy: E (ImmanuEl - God with us), L (Light - living in God's light), O (Obedience - walking in His path), and F (Faith - moving forward in faith). Core Philosophy: Walking together with God in light, obedience, and faith.",
    projectImages: [
      {
        src: "/portfolio/branding-gpib.avif",
        alt: "GPIB Immanuel Pekanbaru brand identity",
      },
    ],
  },

  {
    slug: "consistrade-brand",
    category: "BRAND IDENTITY",
    title: "Consistrade",
    username: "consistrade",
    bio: "Financial and trading education. 📊📉",
    avatarImage: "/portfolio/consistrade-thumb.avif",
    avatarText: "C",
    avatarBg: "from-purple-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/consistrade-thumb.avif",
        alt: "Consistrade",
        caption: "Consistrade",
      },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo design, character design, social media design",
      tools: "Adobe Photoshop, Adobe Illustrator",
    },
    overview:
      "A financial and trading education brand providing digital learning modules for users ranging from beginners to professionals. Responsible for logo design, brand character development, and social media content design.",
    challenge:
      "Crafting a professional trading identity that feels welcoming and approachable for beginner traders without being intimidating.",
    bigIdea:
      "Introducing 'Teddy', a mascot representing financially savvy youth who enjoys sharing trading knowledge in a relatable and inspiring manner.",
    projectImages: [
      {
        src: "/portfolio/branding-consistrade.avif",
        alt: "Consistrade brand identity",
      },
    ],
  },

  {
    slug: "hut-63-pelkat-pa",
    category: "BRAND IDENTITY",
    title: "63rd Anniversary of Pelkat PA GPIB Synod",
    username: "pelkatpa.sinode",
    bio: "Winning logo design for the 63rd Anniversary of Pelkat PA GPIB. 🏆",
    avatarImage: "/portfolio/hut63.avif",
    avatarText: "PA",
    avatarBg: "from-rose-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/hut63.avif",
        alt: "PA logo 63rd anniversary",
        caption: "PA logo 63rd anniversary",
      },
    ],
    details: {
      client: "GPIB Synod Children's Ministry Board",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2022",
      deliverables: "Logo design (competition entry)",
      tools: "Illustrator",
    },
    overview:
      "Winning logo design entry for the 63rd Anniversary of Pelkat PA GPIB organized by the GPIB Synod Children's Ministry Board. The design was selected nationwide and featured across all official 63rd-anniversary celebrations.",
    challenge:
      "Encapsulating children's ministry values and the celebration's 63-year milestone into an iconic, versatile visual symbol for various media formats.",
    projectImages: [
      {
        src: "/portfolio/branding-hut63.avif",
        alt: "63rd Anniversary of Pelkat PA GPIB brand identity",
      },
    ],
  },

  {
    slug: "hut-67-pelkat-pa",
    category: "BRAND IDENTITY",
    title: "67th Anniversary of Pelkat PA GPIB Synod",
    username: "pelkatpa.sinode",
    bio: "Official visual identity for the 67th Pelkat PA GPIB Anniversary. 🕊️",
    avatarImage: "/portfolio/hut67.avif",
    avatarText: "PA",
    avatarBg: "from-blue-500 to-indigo-500",
    posts: [
      {
        src: "/portfolio/hut67.avif",
        alt: "Pelkat PA 67th anniversary logo",
        caption: "Pelkat PA 67th anniversary logo",
      },
    ],
    details: {
      client: "GPIB Synod Children's Ministry Board",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Logo design",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Official anniversary logo design for the 67th Anniversary of Pelkat PA GPIB organized by the GPIB Synod Children's Ministry Board, utilized nationwide across all commemoration events.",
    challenge:
      "Designing a meaningful celebration emblem that captures the nationwide history and mission of the GPIB children's ministry.",
    projectImages: [
      {
        src: "/portfolio/branding-hut67.avif",
        alt: "67th Anniversary of Pelkat PA GPIB brand identity",
      },
    ],
  },
];

// ==========================================
// LOGO DESIGN
// ==========================================

export const logoSections: SectionData[] = [
  {
    title: "63rd Anniversary of Pelkat PA GPIB",
    username: "pelkatpa.pku",
    bio: "Winning anniversary emblem for Pelkat PA GPIB. 🏆",
    avatarImage: "/portfolio/hut63.avif",
    avatarText: "PA",
    avatarBg: "from-rose-500 to-pink-500",
    posts: [
      {
        src: "/portfolio/hut63.avif",
        alt: "PA logo 63rd anniversary",
        caption: "63rd anniversary Pelkat PA logo",
      },
    ],
    details: {
      client: "Dewan Pelayanan Anak Sinode GPIB",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2022",
      deliverables: "National Competition Winner Emblem",
      tools: "Illustrator",
    },
    overview:
      "Sayembara desain logo HUT ke-63 Pelkat PA GPIB yang diselenggarakan oleh Dewan Pelayanan Anak Sinode GPIB. Logo terpilih sebagai juara dan digunakan secara nasional.",
    challenge:
      "Merging numeric elements with church motifs into a unified, celebratory circular mark used nationwide.",
  },
  {
    title: "67th Anniversary of Pelkat PA GPIB",
    username: "pelkatpa.pku",
    bio: "Official 67th anniversary visual mark. 🕊️",
    avatarImage: "/portfolio/hut67.avif",
    avatarText: "PA",
    avatarBg: "from-blue-500 to-indigo-500",
    posts: [
      {
        src: "/portfolio/hut67.avif",
        alt: "Pelkat PA 67th anniversary logo",
        caption: "67th anniversary Pelkat PA logo",
      },
    ],
    details: {
      client: "Dewan Pelayanan Anak Sinode GPIB",
      industry: "Children Ministry",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Official National Anniversary Logo",
      tools: "Illustrator",
    },
    overview:
      "Desain logo peringatan HUT ke-67 Pelkat PA GPIB yang digunakan secara nasional untuk menggambarkan pelayanan dan pertumbuhan spiritual anak.",
    challenge:
      "Creating a fresh visual theme while respecting long-standing organizational identity and national application standards.",
  },
  {
    title: "GPIB Immanuel Pekanbaru",
    username: "gpib_immanuel_pku",
    bio: "Official church emblem and visual branding. 🙏🕊️",
    avatarImage: "/portfolio/gpib.avif",
    avatarText: "G",
    avatarBg: "from-amber-500 to-orange-400",
    posts: [
      {
        src: "/portfolio/gpib.avif",
        alt: "GPIB Immanuel Pekanbaru logo",
        caption: "GPIB Immanuel Pekanbaru logo design",
      },
    ],
    details: {
      client: "GPIB Immanuel Pekanbaru",
      industry: "Church",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo Design, Branding, Mascot (Elof), Social Media & Video Editing",
      tools: "Illustrator, Photoshop, Premiere Pro",
    },
    overview:
      "Mendesain logo internal, mengembangkan branding visual, membuat karakter maskot Elof, serta memproduksi konten media sosial dan video untuk gereja.",
    challenge:
      "Reflecting traditional ecclesiastical values through modern graphic standards while introducing a friendly mascot.",
  },
  {
    title: "Joko Tuo Resort",
    username: "jokotuo_resort",
    bio: "Whale shark bone inspired resort logo & identity. 🌿🌊",
    avatarImage: "/portfolio/jokotuo.avif",
    avatarText: "JT",
    avatarBg: "from-emerald-700 to-green-600",
    posts: [
      {
        src: "/portfolio/jokotuo.avif",
        alt: "Joko Tuo Resort logo",
        caption: "Joko Tuo Resort logo design",
      },
    ],
    details: {
      client: "Joko Tuo Resort",
      industry: "Hospitality & Resort",
      role: "Logo Designer",
      year: "2022",
      deliverables: "Resort Logo & Visual Identity",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Desain logo dan identitas visual untuk resort di Jepara dengan konsep visual yang terinspirasi dari struktur tulang hiu paus.",
    challenge:
      "Translating abstract whale shark bone structures into a luxury, serene, and iconic hospitality brand mark.",
  },
  {
    title: "Consistrade",
    username: "consistrade",
    bio: "Sleek financial & trading education logo mark. 📈",
    avatarImage: "/portfolio/consistrade.avif",
    avatarText: "C",
    avatarBg: "from-indigo-600 to-blue-500",
    posts: [
      {
        src: "/portfolio/consistrade.avif",
        alt: "Consistrade logo",
        caption: "Consistrade logo design",
      },
    ],
    details: {
      client: "Consistrade",
      industry: "Financial & Trading Education",
      role: "Visual Designer",
      year: "2025",
      deliverables: "Logo Design, Character Design (Teddy), Social Media Assets",
      tools: "Illustrator, Photoshop, Canva",
    },
    overview:
      "Mendesain logo, mengembangkan karakter brand (Teddy), serta merancang konten media sosial untuk platform edukasi trading.",
    challenge:
      "Balancing professional corporate trading credibility with an accessible, friendly character-driven education style.",
  },
  {
    title: "Minci",
    username: "minci_brand",
    bio: "Personal brand logo for link owner & creator. 🐱✨",
    avatarImage: "/portfolio/minci.avif",
    avatarText: "M",
    avatarBg: "from-pink-400 to-rose-400",
    posts: [
      {
        src: "/portfolio/minci.avif",
        alt: "Minci logo",
        caption: "Minci personal brand logo",
      },
    ],
    details: {
      client: "Minci",
      industry: "Personal Brand / Content Creator",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Personal Brand Logo & Monogram",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo personal brand milik Minci (istri Ko Mark dari Pivot Point), seorang link owner dan kreator konten vlog harian.",
    challenge:
      "Capturing a friendly, approachable, and engaging creator personality within a scalable vector mark.",
  },
  {
    title: "Nona Kirana",
    username: "nonakirana",
    bio: "Sophisticated trading & lifestyle community mark. 🌸",
    avatarImage: "/portfolio/kirana.avif",
    avatarText: "NK",
    avatarBg: "from-pink-300 to-purple-400",
    posts: [
      {
        src: "/portfolio/kirana.avif",
        alt: "Nona Kirana logo",
        caption: "Nona Kirana logo design",
      },
    ],
    details: {
      client: "Nona Kirana",
      industry: "Trading Education & Lifestyle",
      role: "Logo Designer",
      year: "2026",
      deliverables: "Logo Design & Visual Identity",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo dan identitas visual untuk komunitas trading yang menggabungkan edukasi finansial, trading, dan lifestyle dengan gaya dewasa serta elegan.",
    challenge:
      "Crafting a sophisticated and feminine aesthetic that still communicates financial strength and education.",
  },
  {
    title: "Sinyal Ordal",
    username: "sinyalordal",
    bio: "Bold & masculine trading community mark. 📡",
    avatarImage: "/portfolio/sinyalordal.avif",
    avatarText: "SO",
    avatarBg: "from-cyan-500 to-blue-600",
    posts: [
      {
        src: "/portfolio/sinyalordal.avif",
        alt: "Sinyal Ordal logo",
        caption: "Sinyal Ordal logo design",
      },
    ],
    details: {
      client: "Sinyal Ordal",
      industry: "Trading Education & Community",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Logo Design & Brand Identity",
      tools: "Illustrator",
    },
    overview:
      "Mendesain logo dan identitas visual komunitas edukasi finansial, trading, dan lifestyle dengan arahan visual yang bebas, maskulin, dan berkarakter.",
    challenge:
      "Combining high-tech signal metaphors with a strong, confident, and edgy community visual identity.",
  },
  {
    title: "Soleste",
    username: "soleste_official",
    bio: "Promotional & lifestyle skincare brand mark. ✨",
    avatarImage: "/portfolio/soleste.avif",
    avatarText: "S",
    avatarBg: "from-amber-400 to-yellow-600",
    posts: [
      {
        src: "/portfolio/soleste.avif",
        alt: "Soleste logo",
        caption: "Soleste logo design",
      },
    ],
    details: {
      client: "Soleste",
      industry: "Skincare & Beauty",
      role: "Brand Designer",
      year: "2024",
      deliverables: "Logo Design, Branding, Social Media Design",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Mendesain logo, membangun identitas visual, serta merancang komunikasi media sosial yang memadukan konten promosi, lifestyle, dan beauty.",
    challenge:
      "Balancing aesthetic elegance with commercial promotional flexibility across digital skincare channels.",
  },
  {
    title: "Pivot Point by Mark Liem",
    username: "pivotpoint_markliem",
    bio: "Smart & professional trader community rebranding. 🎯",
    avatarImage: "/portfolio/pivot.avif",
    avatarText: "PP",
    avatarBg: "from-slate-700 to-zinc-900",
    posts: [
      {
        src: "/portfolio/pivot.avif",
        alt: "Pivot Point logo",
        caption: "Pivot Point logo redesign",
      },
    ],
    details: {
      client: "Mark Liem",
      industry: "Trading Education & Community",
      role: "Brand Designer",
      year: "2026",
      deliverables: "Logo Redesign & Rebranding System",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Melakukan rebranding dan redesign logo untuk memperkuat positioning sebagai komunitas trader yang cerdas, profesional, dan berorientasi edukasi.",
    challenge:
      "Evolving an existing trading mark into a modern, high-level corporate identity that appeals to modern traders.",
  },
  {
    title: "Raka Trabas SNR",
    username: "rakatrabas",
    bio: "Strong & dynamic trading community logo. 🚴‍♂️",
    avatarImage: "/portfolio/raka.avif",
    avatarText: "RT",
    avatarBg: "from-orange-500 to-red-500",
    posts: [
      {
        src: "/portfolio/raka.avif",
        alt: "Raka Trabas SNR logo",
        caption: "Raka Trabas SNR logo design",
      },
    ],
    details: {
      client: "Raka Trabas SNR",
      industry: "Trading Education & Community",
      role: "Logo Designer",
      year: "2025",
      deliverables: "Logo Design & Visual Identity",
      tools: "Illustrator, Photoshop",
    },
    overview:
      "Mendesain logo dan identitas visual komunitas trading yang berfokus pada edukasi finansial dan lifestyle dengan konsep maskulin dan kuat.",
    challenge:
      "Translating high-energy, powerful community traits into a sleek, recognizable visual logo mark.",
  },
];

// ==========================================
// BRAND PROJECT CASE STUDIES ONLY
// ==========================================

export const projectCaseStudies: SectionData[] = brandSections.map(
  (project) => ({
    ...project,

    category: project.category ?? "BRAND IDENTITY",

    slug:
      project.slug ??
      project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),

    bigIdea: project.bigIdea ?? project.overview,

    projectImages: project.projectImages ?? project.posts,
  })
);

// ==========================================
// GET BRAND PROJECT BY SLUG
// ==========================================

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}