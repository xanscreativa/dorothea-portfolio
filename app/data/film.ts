export interface FilmProcess {
  preProduction?: string;
  production?: string;
  postProduction?: string;
}

export interface Film {
  title: string;
  category: string;
  client?: string;
  role?: string;
  description: string;
  duration: string;
  orientation: "portrait" | "landscape";
  preview: string;
  thumbnail: string;
  youtubeId: string;
  playlist: string;
  href: string;
  featured?: boolean;
  tags: string[];
  process?: FilmProcess;
}

export const films: Film[] = [
  {
    title: "Data Wak Atom",
    category: "Trading Campaign",
    client: "Data Wak Atom",
    role: "Video Editor & Motion Graphic Artist",
    description:
      "Short-form educational videos for trading campaigns and social media.",
    duration: "0:18",
    orientation: "portrait",
    preview: "/videos/previews/data-wak-atom.mp4",
    thumbnail: "/images/films/data-wak-atom.jpg",
    youtubeId: "",
    playlist: "https://www.youtube.com/playlist?list=PLC-2LDqQA69k",
    href: "#",
    featured: true,
    tags: ["Video Editing", "Motion Graphics", "TikTok", "Reels"],
    process: {
      preProduction:
        "Analyzing trading content trends, writing engaging hook scripts, and preparing visual asset concepts.",
      production:
        "Directing framing, multi-angle video setup, and clean audio capture for short-form format.",
      postProduction:
        "Fast-paced video cuts, dynamic text animations, sound design, and color grading optimized for TikTok & Reels.",
    },
  },
  {
    title: "Sinyal Ordal",
    category: "Financial Education",
    client: "Sinyal Ordal",
    role: "Short-Form Video Specialist",
    description:
      "Creative short-form videos for financial education content.",
    duration: "0:26",
    orientation: "portrait",
    preview: "/videos/previews/sinyal-ordal.mp4",
    thumbnail: "/images/films/sinyal-ordal.jpg",
    youtubeId: "",
    playlist: "https://www.youtube.com/playlist?list=PLBP7Y-YeCoHM",
    href: "#",
    tags: ["Video Editing", "Motion Graphics", "Short Form"],
    process: {
      preProduction:
        "Brainstorming financial concepts, script structuring, and visual storytelling planning.",
      production:
        "On-set video capture and audio sync setup.",
      postProduction:
        "Adding engaging motion graphics, chart overlay animations, kinetic typography, and audio enhancement.",
    },
  },
  {
    title: "Raka Trabas",
    category: "Trading Education",
    client: "Raka Trabas",
    role: "Video Editor & Content Creator",
    description:
      "Creative video editing for educational trading campaigns.",
    duration: "0:31",
    orientation: "portrait",
    preview: "/videos/previews/raka-trabas.mp4",
    thumbnail: "/images/films/raka-trabas.jpg",
    youtubeId: "",
    playlist: "https://www.youtube.com/playlist?list=PLQXQaMgBqo50",
    href: "#",
    tags: ["Video Editing", "Motion Graphics"],
    process: {
      preProduction:
        "Trading topic selection, hook scripting, and visual storyboard drafting.",
      production:
        "Camera footage acquisition and voice-over recording.",
      postProduction:
        "Dynamic pacing, custom text captions, sound effect layering, and visual polish.",
    },
  },
  {
    title: "GTE",
    category: "Gold Trading Education",
    client: "Global Trading Education",
    role: "Lead Video Editor",
    description:
      "Educational videos focused on international gold trading.",
    duration: "0:24",
    orientation: "portrait",
    preview: "/videos/previews/gte.mp4",
    thumbnail: "/images/films/gte.jpg",
    youtubeId: "",
    playlist: "https://www.youtube.com/playlist?list=PLa1ey4tTciqI",
    href: "#",
    tags: ["Video Editing", "Motion Graphics", "Educational"],
    process: {
      preProduction:
        "Researching gold market education topics and outlining key takeaway bullet points.",
      production:
        "High-definition video shooting with clean studio lighting.",
      postProduction:
        "Chart overlays, gold market data visualization, motion callouts, and clean background music integration.",
    },
  },
  {
    title: "GPIB Immanuel Pekanbaru",
    category: "Church Media",
    client: "GPIB Immanuel Pekanbaru",
    role: "Creative Director & AI Video Editor",
    description:
      "Church announcements, Easter campaigns, Christmas events, and ministry videos.",
    duration: "0:20",
    orientation: "landscape",
    preview: "/videos/previews/gpib.mp4",
    thumbnail: "/images/films/gpib.jpg",
    youtubeId: "",
    playlist: "https://www.youtube.com/playlist?list=PLExudwMXswLA",
    href: "#",
    tags: ["Church Media", "Video Editing", "AI Video"],
    process: {
      preProduction:
        "Concepting event themes, AI character generation, storyboard mapping, and narration scriptwriting.",
      production:
        "AI video generation, voice-over recording, and media asset aggregation.",
      postProduction:
        "AI visual blending, background music scoring, subtitle design, and final color correction.",
    },
  },
];