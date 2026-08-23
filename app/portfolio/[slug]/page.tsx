"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  X,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";

import {
  getPortfolioBySlug,
  getNextPortfolio,
} from "@/data/portfolio";

import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
  subSlides?: GalleryItem[];
  isVideo?: boolean;
}

interface SectionDetails {
  client: string;
  industry: string;
  role: string;
  year: string;
  deliverables: string;
  tools: string;
}

interface SectionData {
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
}

interface ActiveModalState {
  sectionTitle: string;
  posts: GalleryItem[];
  currentIndex: number;
  isSquare: boolean;
  isPortrait1080x1920?: boolean;
}

export default function PortfolioDetailPage() {
  const { t, lang, toggleLang } = useLanguage();

  const params = useParams();
  const slug = params?.slug as string;

  const collection = getPortfolioBySlug(slug);

  if (!collection) {
    notFound();
  }

  const nextCollection = getNextPortfolio(slug);

  const [activeModalState, setActiveModalState] =
    useState<ActiveModalState | null>(null);

  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [startPos, setStartPos] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isSocialMedia = collection.slug === "social-media-design";
  const isBrandIdentity = collection.slug === "brand-identity";
  const isLogoDesign = collection.slug === "logo-design";
  const isThumbnailDesign = collection.slug === "thumbnail-design";
  const isCharacterDesign = collection.slug === "character-design";
  const isLiveStreamDesign = collection.slug === "live-stream-design";

  // Data 5 Live Stream Design (Video 1080x1920)
  const liveStreamItems: GalleryItem[] = [
    {
      src: "/portfolio/livestream-anya-zona-layer.mp4",
      alt: "Anya Zona Layer",
      caption: "Anya Zona Layer Live Stream Design",
      isVideo: true,
    },
    {
      src: "/portfolio/livestream-data-wak-atom.mp4",
      alt: "Data Wak Atom",
      caption: "Data Wak Atom Live Stream Design",
      isVideo: true,
    },
    {
      src: "/portfolio/livestream-raka-trabas.mp4",
      alt: "Raka Trabas",
      caption: "Raka Trabas Live Stream Design",
      isVideo: true,
    },
    {
      src: "/portfolio/livestream-sinyal-ordal.mp4",
      alt: "Sinyal Ordal",
      caption: "Sinyal Ordal Live Stream Design",
      isVideo: true,
    },
    {
      src: "/portfolio/livestream-ez-squad.mp4",
      alt: "EZ Squad",
      caption: "EZ Squad Live Stream Design",
      isVideo: true,
    },
  ];

  // Grid default thumbnail 1-9
  const defaultThumbnailGrid: GalleryItem[] = Array.from({ length: 9 }, (_, index) => {
    const num = index + 1;
    return {
      src: `/portfolio/thumbnail-${num}.jpg`,
      alt: `Thumbnail ${num}`,
      caption: `Thumbnail ${num}`,
    };
  });

  const gallery: GalleryItem[] = isLiveStreamDesign
    ? liveStreamItems
    : collection.gallery && collection.gallery.length > 0
    ? collection.gallery
    : defaultThumbnailGrid;

  const handleNextModal = useCallback(() => {
    if (!activeModalState || isAnimating) return;
    setIsAnimating(true);
    setActiveModalState((prev) => {
      if (!prev) return null;
      const newIndex = (prev.currentIndex + 1) % prev.posts.length;
      return { ...prev, currentIndex: newIndex };
    });
    setDragOffset(0);
    setTimeout(() => setIsAnimating(false), 500);
  }, [activeModalState, isAnimating]);

  const handlePrevModal = useCallback(() => {
    if (!activeModalState || isAnimating) return;
    setIsAnimating(true);
    setActiveModalState((prev) => {
      if (!prev) return null;
      const newIndex =
        prev.currentIndex === 0
          ? prev.posts.length - 1
          : prev.currentIndex - 1;
      return { ...prev, currentIndex: newIndex };
    });
    setDragOffset(0);
    setTimeout(() => setIsAnimating(false), 500);
  }, [activeModalState, isAnimating]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimating || !activeModalState || activeModalState.posts.length <= 1) return;
    setIsDragging(true);
    setStartPos(e.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = currentPos - startPos;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (dragOffset < -threshold) {
      handleNextModal();
    } else if (dragOffset > threshold) {
      handlePrevModal();
    } else {
      setIsAnimating(true);
      setDragOffset(0);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalState) return;
      if (e.key === "Escape") {
        setActiveModalState(null);
      } else if (e.key === "ArrowRight" && activeModalState.posts.length > 1) {
        handleNextModal();
      } else if (e.key === "ArrowLeft" && activeModalState.posts.length > 1) {
        handlePrevModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalState, handleNextModal, handlePrevModal]);

  const openPostModal = (sectionTitle: string, postItem: GalleryItem, isSquare: boolean, isPortrait1080x1920?: boolean) => {
    if (postItem.subSlides && postItem.subSlides.length > 0) {
      setActiveModalState({
        sectionTitle,
        posts: postItem.subSlides,
        currentIndex: 0,
        isSquare,
        isPortrait1080x1920,
      });
      return;
    }

    setActiveModalState({
      sectionTitle,
      posts: [postItem],
      currentIndex: 0,
      isSquare,
      isPortrait1080x1920,
    });
  };

  const socialSections: SectionData[] =
    isSocialMedia
      ? [
          {
            title: "Pelkat PA GPIB Immanuel Pekanbaru",
            username: "pelkatpa.pku",
            bio: "Ruang ceria anak-anak kreatif & penuh kasih Tuhan 🙏✨ GPIB Immanuel Pekanbaru.",
            avatarImage: "/portfolio/pa-logo.jpg",
            avatarText: "P",
            avatarBg: "from-blue-500 to-indigo-400",
            posts: [
              { src: "/portfolio/pa-1.png", alt: "Pelkat PA 1", caption: "Pelkat PA 1" },
              { src: "/portfolio/pa-2.jpg", alt: "Pelkat PA 2", caption: "Pelkat PA 2" },
              { src: "/portfolio/pa-3.jpg", alt: "Pelkat PA 3", caption: "Pelkat PA 3" },
              { src: "/portfolio/pa-4.jpg", alt: "Pelkat PA 4", caption: "Pelkat PA 4" },
              { src: "/portfolio/pa-5.jpg", alt: "Pelkat PA 5", caption: "Pelkat PA 5" },
              { src: "/portfolio/pa-6.jpg", alt: "Pelkat PA 6", caption: "Pelkat PA 6" },
            ],
            details: {
              client: "GPIB Immanuel Pekanbaru",
              industry: "Community & Ministry",
              role: "Lead Visual Designer",
              year: "2024",
              deliverables: "Event Assets, Story Templates",
              tools: "Photoshop, Illustrator",
            },
            overview: "Joyful and vibrant creative feeds tailored for children's ministry events and daily spiritual content.",
            challenge: "Balancing a warm, playful aesthetic with clean church branding guidelines.",
          },
          {
            title: "UKSW",
            username: "uksw_salatiga",
            bio: "Official visual feed for UKSW Salatiga 🎓 Shaping futures through creative campus stories.",
            avatarImage: "/portfolio/uksw-logo.jpg",
            avatarText: "U",
            avatarBg: "from-pink-500 to-rose-400",
            posts: [
              { src: "/portfolio/uksw-1.jpg", alt: "UKSW Mendunia", caption: "UKSW Mendunia" },
              { 
                src: "/portfolio/uksw-2.jpg", 
                alt: "Kampus Tour", 
                caption: "Kampus Tour",
                subSlides: [
                  { src: "/portfolio/uksw-2.jpg", alt: "uksw-2", caption: "uksw-2" },
                  { src: "/portfolio/uksw-2a.jpg", alt: "uksw-2a", caption: "uksw-2a" },
                  { src: "/portfolio/uksw-2b.jpg", alt: "uksw-2b", caption: "uksw-2b" },
                  { src: "/portfolio/uksw-2c.jpg", alt: "uksw-2c", caption: "uksw-2c" },
                ]
              },
              { src: "/portfolio/uksw-3.jpg", alt: "PMB 2026", caption: "PMB 2026" },
              { src: "/portfolio/uksw-4.jpg", alt: "Akreditasi Unggul", caption: "Akreditasi Unggul" },
              { src: "/portfolio/uksw-5.jpg", alt: "UKSW Menyapa", caption: "UKSW Menyapa" },
              { src: "/portfolio/uksw-6.jpg", alt: "Creative Minority", caption: "Creative Minority" },
              { 
                src: "/portfolio/uksw-7.jpg", 
                alt: "Campus Life", 
                caption: "Campus Life",
                subSlides: [
                  { src: "/portfolio/uksw-7.jpg", alt: "uksw-7", caption: "uksw-7" },
                  { src: "/portfolio/uksw-7a.jpg", alt: "uksw-7a", caption: "uksw-7a" },
                  { src: "/portfolio/uksw-7b.jpg", alt: "uksw-7b", caption: "uksw-7b" },
                  { src: "/portfolio/uksw-7c.jpg", alt: "uksw-7c", caption: "uksw-7c" },
                ]
              },
              { src: "/portfolio/uksw-8.jpg", alt: "Research & Innovation", caption: "Research & Innovation" },
              { src: "/portfolio/uksw-9.jpg", alt: "Graduation Moment", caption: "Graduation Moment" },
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
            username: "jendelafinansial",
            bio: "Smart financial tips & wealth education made simple 💡 Grow your future with us.",
            avatarImage: "/portfolio/jendela-finansial-logo.jpg",
            avatarText: "JF",
            avatarBg: "from-emerald-500 to-teal-400",
            posts: [
              { 
                src: "/portfolio/jendela-1.jpg", 
                alt: "jendela-1", 
                caption: "jendela-1",
                subSlides: [
                  { src: "/portfolio/jendela-1.jpg", alt: "jendela-1", caption: "jendela-1" },
                  { src: "/portfolio/jendela-1a.jpg", alt: "jendela-1a", caption: "jendela-1a" },
                  { src: "/portfolio/jendela-1b.jpg", alt: "jendela-1b", caption: "jendela-1b" },
                  { src: "/portfolio/jendela-1c.jpg", alt: "jendela-1c", caption: "jendela-1c" },
                  { src: "/portfolio/jendela-1d.jpg", alt: "jendela-1d", caption: "jendela-1d" },
                  { src: "/portfolio/jendela-1e.jpg", alt: "jendela-1e", caption: "jendela-1e" },
                ]
              },
              { 
                src: "/portfolio/jendela-2.jpg", 
                alt: "jendela-2", 
                caption: "jendela-2",
                subSlides: [
                  { src: "/portfolio/jendela-2.jpg", alt: "jendela-2", caption: "jendela-2" },
                  { src: "/portfolio/jendela-2a.jpg", alt: "jendela-2a", caption: "jendela-2a" },
                  { src: "/portfolio/jendela-2b.jpg", alt: "jendela-2b", caption: "jendela-2b" },
                  { src: "/portfolio/jendela-2c.jpg", alt: "jendela-2c", caption: "jendela-2c" },
                  { src: "/portfolio/jendela-2d.jpg", alt: "jendela-2d", caption: "jendela-2d" },
                ]
              },
              { 
                src: "/portfolio/jendela-3.jpg", 
                alt: "jendela-3", 
                caption: "jendela-3",
                subSlides: [
                  { src: "/portfolio/jendela-3.jpg", alt: "jendela-3", caption: "jendela-3" },
                  { src: "/portfolio/jendela-3a.jpg", alt: "jendela-3a", caption: "jendela-3a" },
                  { src: "/portfolio/jendela-3b.jpg", alt: "jendela-3b", caption: "jendela-3b" },
                  { src: "/portfolio/jendela-3c.jpg", alt: "jendela-3c", caption: "jendela-3c" },
                  { src: "/portfolio/jendela-3d.jpg", alt: "jendela-3d", caption: "jendela-3d" },
                  { src: "/portfolio/jendela-3e.jpg", alt: "jendela-3e", caption: "jendela-3e" },
                ]
              },
              { 
                src: "/portfolio/jendela-4.jpg", 
                alt: "jendela-4", 
                caption: "jendela-4",
                subSlides: [
                  { src: "/portfolio/jendela-4.jpg", alt: "jendela-4", caption: "jendela-4" },
                  { src: "/portfolio/jendela-4a.jpg", alt: "jendela-4a", caption: "jendela-4a" },
                  { src: "/portfolio/jendela-4b.jpg", alt: "jendela-4b", caption: "jendela-4b" },
                  { src: "/portfolio/jendela-4c.jpg", alt: "jendela-4c", caption: "jendela-4c" },
                  { src: "/portfolio/jendela-4d.jpg", alt: "jendela-4d", caption: "jendela-4d" },
                  { src: "/portfolio/jendela-4e.jpg", alt: "jendela-4e", caption: "jendela-4e" },
                  { src: "/portfolio/jendela-4f.jpg", alt: "jendela-4f", caption: "jendela-4f" },
                  { src: "/portfolio/jendela-4g.jpg", alt: "jendela-4g", caption: "jendela-4g" },
                  { src: "/portfolio/jendela-4h.jpg", alt: "jendela-4h", caption: "jendela-4h" },
                ]
              },
              { 
                src: "/portfolio/jendela-5.jpg", 
                alt: "jendela-5", 
                caption: "jendela-5"
              },
              { 
                src: "/portfolio/jendela-6.jpg", 
                alt: "jendela-6", 
                caption: "jendela-6",
                subSlides: [
                  { src: "/portfolio/jendela-6.jpg", alt: "jendela-6", caption: "jendela-6" },
                  { src: "/portfolio/jendela-6a.jpg", alt: "jendela-6a", caption: "jendela-6a" },
                  { src: "/portfolio/jendela-6b.jpg", alt: "jendela-6b", caption: "jendela-6b" },
                  { src: "/portfolio/jendela-6c.jpg", alt: "jendela-6c", caption: "jendela-6c" },
                  { src: "/portfolio/jendela-6d.jpg", alt: "jendela-6d", caption: "jendela-6d" },
                  { src: "/portfolio/jendela-6e.jpg", alt: "jendela-6e", caption: "jendela-6e" },
                  { src: "/portfolio/jendela-6f.jpg", alt: "jendela-6f", caption: "jendela-6f" },
                ]
              },
            ],
            details: {
              client: "Jendela Finansial",
              industry: "Financial Education",
              role: "Lead Visual Designer",
              year: "2024",
              deliverables: "Infographics, Carousels",
              tools: "Figma, Illustrator",
            },
            overview: "Simplifying complex financial insights into clean, engaging, and easy-to-digest visual carousels.",
            challenge: "Translating heavy data and financial terms into highly appealing visuals for young adults.",
          },
          {
            title: "Consistrade",
            username: "consistrade",
            bio: "Professional corporate and trading brand identity design 📈 Global trade made seamless.",
            avatarImage: "/portfolio/consistrade-logo.png",
            avatarText: "C",
            avatarBg: "from-purple-500 to-pink-500",
            posts: [
              { src: "/portfolio/consistrade-1.png", alt: "consistrade-1", caption: "consistrade-1" },
              { src: "/portfolio/consistrade-2.png", alt: "consistrade-2", caption: "consistrade-2" },
              { src: "/portfolio/consistrade-3.png", alt: "consistrade-3", caption: "consistrade-3" },
              { src: "/portfolio/consistrade-4.png", alt: "consistrade-4", caption: "consistrade-4" },
              { src: "/portfolio/consistrade-5.png", alt: "consistrade-5", caption: "consistrade-5" },
              { src: "/portfolio/consistrade-6.png", alt: "consistrade-6", caption: "consistrade-6" },
              { src: "/portfolio/consistrade-7.png", alt: "consistrade-7", caption: "consistrade-7" },
              { src: "/portfolio/consistrade-8.png", alt: "consistrade-8", caption: "consistrade-8" },
              { src: "/portfolio/consistrade-9.png", alt: "consistrade-9", caption: "consistrade-9" },
            ],
            details: {
              client: "Consistrade",
              industry: "Corporate & Trading",
              role: "Lead Visual Designer",
              year: "2024",
              deliverables: "Social Systems, Post Templates",
              tools: "Photoshop, Illustrator",
            },
            overview: "Sleek, authoritative, and modern social media systems designed for global corporate trade.",
            challenge: "Communicating reliability, precision, and global reach through structured financial and trade layouts.",
          },
        ]
      : [];

  const brandSections: SectionData[] =
    isBrandIdentity
      ? [
          {
            title: "Jendela Finansial",
            username: "jendelafinansial",
            bio: "Smart financial tips & wealth education brand identity 💡",
            avatarImage: "/portfolio/jendela-finansial.jpg",
            avatarText: "JF",
            avatarBg: "from-emerald-500 to-teal-400",
            posts: [{ src: "/portfolio/jendela-finansial.jpg", alt: "Jendela Finansial Logo", caption: "Jendela Finansial Logo" }],
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
          {
            title: "HUT 63 Pelkat PA GPIB",
            username: "pelkatpa.pku",
            bio: "Winning logo design for the 63rd Anniversary of Pelkat PA GPIB 🏆",
            avatarImage: "/portfolio/hut63.jpg",
            avatarText: "PA",
            avatarBg: "from-rose-500 to-pink-500",
            posts: [{ src: "/portfolio/hut63.jpg", alt: "PA Logo HUT 63", caption: "PA Logo HUT 63" }],
            details: {
              client: "Dewan Pelayanan Anak",
              industry: "Ministry",
              role: "Graphic Designer",
              year: "2023",
              deliverables: "Logo Competition Entry",
              tools: "Illustrator",
            },
            overview: "Winning design for the 63rd Pelkat PA GPIB Anniversary logo competition.",
            challenge: "Capturing the spirit of 63 years of service within a concise, iconic mark.",
          },
          {
            title: "HUT 67 Pelkat PA GPIB",
            username: "pelkatpa.pku",
            bio: "Official visual identity for the 67th Pelkat PA GPIB Anniversary 🕊️",
            avatarImage: "/portfolio/hut67.jpg",
            avatarText: "PA",
            avatarBg: "from-blue-500 to-indigo-500",
            posts: [{ src: "/portfolio/hut67.jpg", alt: "Logo HUT Pelkat PA ke-67", caption: "Logo HUT Pelkat PA ke-67" }],
            details: {
              client: "Logo HUT Pelkat PA ke-67",
              industry: "Ministry",
              role: "Lead Brand Designer",
              year: "2024",
              deliverables: "Anniversary Logo",
              tools: "Illustrator, Photoshop",
            },
            overview: "Developing a celebratory and meaningful identity for the 67th anniversary.",
            challenge: "Creating a distinct mark that aligns with church branding while signifying longevity.",
          },
          {
            title: "GPIB Immanuel Pekanbaru",
            username: "gpib_immanuel_pku",
            bio: "Official church branding and visual identity system 🙏🕊️",
            avatarImage: "/portfolio/pelkatpa.jpg",
            avatarText: "G",
            avatarBg: "from-amber-500 to-orange-400",
            posts: [{ src: "/portfolio/pelkatpa.jpg", alt: "GPIB Immanuel Pekanbaru", caption: "GPIB Immanuel Pekanbaru" }],
            details: {
              client: "GPIB Immanuel Pekanbaru",
              industry: "Religious Organization",
              role: "Lead Brand Designer",
              year: "2024",
              deliverables: "Visual Identity, Stationery",
              tools: "Illustrator, Figma",
            },
            overview: "Establishing a dignified and welcoming brand presence for the congregation.",
            challenge: "Reflecting traditional ecclesiastical values through modern, clean graphic standards.",
          },
          {
            title: "Consistrade",
            username: "consistrade",
            bio: "Professional corporate and trading brand identity design 📈",
            avatarImage: "/portfolio/consistrade-logo.png",
            avatarText: "C",
            avatarBg: "from-purple-500 to-pink-500",
            posts: [{ src: "/portfolio/consistrade-logo.png", alt: "Consistrade", caption: "Consistrade" }],
            details: {
              client: "Consistrade",
              industry: "Corporate & Trading",
              role: "Lead Brand Designer",
              year: "2024",
              deliverables: "Corporate Identity, Logo Suite",
              tools: "Illustrator, Photoshop",
            },
            overview: "Crafting a sleek, authoritative, and modern brand identity for global trade.",
            challenge: "Communicating reliability, precision, and global reach through minimal branding.",
          },
          {
            title: "Soleste",
            username: "soleste_official",
            bio: "Elegance and modern lifestyle brand identity design ✨",
            avatarImage: "/portfolio/soleste.jpg",
            avatarText: "S",
            avatarBg: "from-amber-400 to-yellow-600",
            posts: [{ src: "/portfolio/soleste.jpg", alt: "Soleste Brand", caption: "Soleste Brand Identity" }],
            details: {
              client: "Soleste",
              industry: "Lifestyle & Fashion",
              role: "Lead Brand Designer",
              year: "2024",
              deliverables: "Brand Strategy, Visual Identity",
              tools: "Illustrator, Figma",
            },
            overview: "Crafting a refined, luxury-feeling brand identity for modern lifestyle products.",
            challenge: "Encapsulating sophistication and minimalism while keeping the brand warm and accessible.",
          },
        ]
      : [];

  const logoSections: SectionData[] =
    isLogoDesign
      ? [
          {
            title: "Consistrade",
            username: "consistrade",
            bio: "Sleek & authoritative corporate trading mark 📈",
            avatarImage: "/portfolio/consistrade.jpg",
            avatarText: "C",
            avatarBg: "from-indigo-600 to-blue-500",
            posts: [{ src: "/portfolio/consistrade.jpg", alt: "Consistrade Logo", caption: "Consistrade Logo Design" }],
            details: {
              client: "Consistrade",
              industry: "Corporate Trading",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Corporate Emblem & Guidelines",
              tools: "Illustrator",
            },
            overview: "Geometrical and strong trading logo conveying growth, trust, and consistency.",
            challenge: "Integrating abstract arrow and trade symbols without cluttering the silhouette.",
          },
          {
            title: "GPIB Immanuel Pekanbaru",
            username: "gpib_immanuel_pku",
            bio: "Official church emblem and logo mark 🙏🕊️",
            avatarImage: "/portfolio/gpib.jpg",
            avatarText: "G",
            avatarBg: "from-amber-500 to-orange-400",
            posts: [{ src: "/portfolio/gpib.jpg", alt: "GPIB Immanuel Pekanbaru Logo", caption: "GPIB Immanuel Pekanbaru Logo Design" }],
            details: {
              client: "GPIB Immanuel Pekanbaru",
              industry: "Religious Organization",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Church Logo & Visual Mark",
              tools: "Illustrator",
            },
            overview: "Establishing a dignified and welcoming brand presence for the congregation.",
            challenge: "Reflecting traditional ecclesiastical values through modern, clean graphic standards.",
          },
          {
            title: "HUT 63 Pelkat PA GPIB",
            username: "pelkatpa.pku",
            bio: "Winning anniversary emblem for Pelkat PA GPIB 🏆",
            avatarImage: "/portfolio/hut63.jpg",
            avatarText: "PA",
            avatarBg: "from-rose-500 to-pink-500",
            posts: [{ src: "/portfolio/hut63.jpg", alt: "PA Logo HUT 63", caption: "HUT 63 Pelkat PA Logo" }],
            details: {
              client: "Dewan Pelayanan Anak",
              industry: "Religious & Youth",
              role: "Logo Designer",
              year: "2023",
              deliverables: "Competition Winner Emblem",
              tools: "Illustrator",
            },
            overview: "Celebratory 63rd anniversary logo winning entry capturing faith and joy.",
            challenge: "Merging numeric elements with church motifs into a unified circular mark.",
          },
          {
            title: "HUT 67 Pelkat PA GPIB",
            username: "pelkatpa.pku",
            bio: "Official 67th anniversary visual mark 🕊️",
            avatarImage: "/portfolio/hut67.jpg",
            avatarText: "PA",
            avatarBg: "from-blue-500 to-indigo-500",
            posts: [{ src: "/portfolio/hut67.jpg", alt: "Logo HUT Pelkat PA ke-67", caption: "HUT 67 Pelkat PA Logo" }],
            details: {
              client: "Pelkat PA GPIB",
              industry: "Religious & Youth",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Official Anniversary Logo",
              tools: "Illustrator",
            },
            overview: "Modern anniversary identity commemorating 67 years of service and spiritual growth.",
            challenge: "Creating a fresh visual theme while respecting long-standing organizational identity.",
          },
          {
            title: "Joko Tuo",
            username: "jokotuo_heritage",
            bio: "Traditional heritage & authentic culinary mark 🌿",
            avatarImage: "/portfolio/jokotuo.jpg",
            avatarText: "JT",
            avatarBg: "from-emerald-700 to-green-600",
            posts: [{ src: "/portfolio/jokotuo.jpg", alt: "Joko Tuo Logo", caption: "Joko Tuo Logo Design" }],
            details: {
              client: "Joko Tuo",
              industry: "Culinary & Heritage",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Vintage Monogram & Seal",
              tools: "Illustrator, Photoshop",
            },
            overview: "A rich, heritage-inspired logo mark reflecting authentic cultural recipes and tradition.",
            challenge: "Infusing traditional retro artwork while keeping the logo modern and scalable.",
          },
          {
            title: "Nona Kirana",
            username: "nonakirana",
            bio: "Charming & feminine aesthetic visual identity 🌸",
            avatarImage: "/portfolio/kirana.jpg",
            avatarText: "NK",
            avatarBg: "from-pink-300 to-purple-400",
            posts: [{ src: "/portfolio/kirana.jpg", alt: "Nona Kirana Logo", caption: "Nona Kirana Logo Design" }],
            details: {
              client: "Nona Kirana",
              industry: "Beauty & Beauty Care",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Wordmark & Monogram",
              tools: "Illustrator, Font Self",
            },
            overview: "Elegant typographic and monogram design crafted for personal branding and beauty.",
            challenge: "Designing delicate line work that maintains clarity across small digital icons.",
          },
          {
            title: "Minci",
            username: "minci_brand",
            bio: "Playful & friendly mascot-driven brand logo 🐱",
            avatarImage: "/portfolio/minci.jpg",
            avatarText: "M",
            avatarBg: "from-pink-400 to-rose-400",
            posts: [{ src: "/portfolio/minci.jpg", alt: "Minci Logo", caption: "Minci Logo Design" }],
            details: {
              client: "Minci",
              industry: "Consumer Goods",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Character Logo & Packaging Badge",
              tools: "Illustrator",
            },
            overview: "Warm and inviting character-based logo design built for high brand recall.",
            challenge: "Balancing cute mascot elements with scalable graphic typography.",
          },
          {
            title: "Sinyal Ordal",
            username: "sinyalordal",
            bio: "Tech & insider signals community mark 📡",
            avatarImage: "/portfolio/sinyalordal.jpg",
            avatarText: "SO",
            avatarBg: "from-cyan-500 to-blue-600",
            posts: [{ src: "/portfolio/sinyalordal.jpg", alt: "Sinyal Ordal Logo", caption: "Sinyal Ordal Logo Design" }],
            details: {
              client: "Sinyal Ordal",
              industry: "Technology & Community",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Digital Logo Suite",
              tools: "Illustrator, Figma",
            },
            overview: "A sharp, futuristic logo design symbolising signal flow and exclusive networking.",
            challenge: "Crafting an abstract signal icon that feels both tech-forward and trustworthy.",
          },
          {
            title: "Soleste",
            username: "soleste_official",
            bio: "Modern & elegant lifestyle brand mark ✨",
            avatarImage: "/portfolio/soleste.jpg",
            avatarText: "S",
            avatarBg: "from-amber-400 to-yellow-600",
            posts: [{ src: "/portfolio/soleste.jpg", alt: "Soleste Logo", caption: "Soleste Logo Design" }],
            details: {
              client: "Soleste",
              industry: "Lifestyle & Fashion",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Logo Mark, Identity System",
              tools: "Illustrator, Vector",
            },
            overview: "A refined and luxury-feeling brand mark tailored for modern lifestyle products.",
            challenge: "Creating a simple yet memorable emblem that conveys elegance and durability.",
          },
          {
            title: "Pivot Point by Mark Liem",
            username: "pivotpoint_markliem",
            bio: "Executive coaching & strategic consulting logo 🎯",
            avatarImage: "/portfolio/pivot.jpg",
            avatarText: "PP",
            avatarBg: "from-slate-700 to-zinc-900",
            posts: [{ src: "/portfolio/pivot.jpg", alt: "Pivot Point Logo", caption: "Pivot Point Logo Design" }],
            details: {
              client: "Mark Liem",
              industry: "Consulting & Executive Coaching",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Personal Branding Logo",
              tools: "Illustrator, Figma",
            },
            overview: "Minimalist monogram emblem designed for high-level personal executive branding.",
            challenge: "Distilling strategic transformation and direction into a sleek geometric monogram.",
          },
          {
            title: "Raka Trabas",
            username: "rakatrabas",
            bio: "Dynamic & energetic adventure community logo 🚵‍♂️",
            avatarImage: "/portfolio/raka.jpg",
            avatarText: "RT",
            avatarBg: "from-orange-500 to-red-500",
            posts: [{ src: "/portfolio/raka.jpg", alt: "Raka Trabas Logo", caption: "Raka Trabas Logo Design" }],
            details: {
              client: "Raka Trabas",
              industry: "Outdoor & Sports",
              role: "Logo Designer",
              year: "2024",
              deliverables: "Community Logo, Apparel Badge",
              tools: "Illustrator, Photoshop",
            },
            overview: "Bold and high-energy logo mark created for off-road & adventure sports enthusiasts.",
            challenge: "Blending ruggedness with clean, modern vector lines for print on merchandise.",
          },
        ]
      : [];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">

      {/* HEADER */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-8 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 py-1 text-xs font-mono font-bold tracking-wider text-[#6B6570] transition-colors hover:text-pink-600"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Link>

          <button
            onClick={toggleLang}
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-xs font-mono font-bold text-pink-600 shadow-sm transition-all hover:bg-pink-100"
          >
            <span>🌐</span>
            {lang.toUpperCase()}
          </button>
        </div>

        <div className="max-w-4xl space-y-4">
          <span className="inline-block rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-pink-600 sm:text-xs">
            {collection.category}
          </span>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
            {collection.title}
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-[#6B6570] sm:text-lg">
            {collection.tagline}
          </p>
        </div>
      </div>

      {/* MAIN GALLERY */}
      <div className="mx-auto mb-20 max-w-6xl px-4 sm:mb-28 sm:px-8 lg:px-10">

        {isBrandIdentity || isLogoDesign || isCharacterDesign ? (
          /* GRID BRAND IDENTITY, LOGO DESIGN & CHARACTER DESIGN */
          <div className={isCharacterDesign ? "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" : "grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"}>
            {isCharacterDesign
              ? collection.items.map((item) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-[#E9DCE4] bg-white p-3.5 shadow-[0_10px_30px_-10px_rgba(233,106,152,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(233,106,152,0.18)] active:scale-98 sm:p-5"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#E9DCE4] bg-pink-50/50">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-3.5 sm:mt-4">
                      <h3 className="text-sm font-bold text-[#2D2433] transition-colors group-hover:text-pink-600 sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))
              : (isBrandIdentity ? brandSections : logoSections).map((section, sIndex) => {
                  const post = section.posts[0];
                  return (
                    <div
                      key={sIndex}
                      onClick={() => openPostModal(section.title, post, false)}
                      className="group cursor-pointer overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3.5 shadow-[0_10px_30px_-10px_rgba(233,106,152,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(233,106,152,0.18)] active:scale-98 sm:p-5"
                    >
                      <div className={`relative w-full overflow-hidden rounded-xl border border-pink-100 bg-pink-50/50 ${isBrandIdentity ? "aspect-[4/5]" : "aspect-square"}`}>
                        <Image
                          src={post.src}
                          alt={section.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#2D2433]/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <div className="mt-3.5 space-y-1 sm:mt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-600">
                            {section.details.industry}
                          </span>
                          <span className="text-[10px] font-mono text-[#6B6570]">
                            {section.details.year}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-[#2D2433] transition-colors group-hover:text-pink-600 sm:text-base">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
          </div>

        ) : isSocialMedia ? (

          <div className="space-y-12 sm:space-y-16">
            {socialSections.map((section, sIndex) => {
              const isExpanded = expandedSections[sIndex] || false;
              const isSquare = section.title === "UKSW";

              return (
                <div
                  key={sIndex}
                  className="relative mx-auto space-y-4 rounded-2xl border border-pink-200/80 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)] sm:rounded-[36px] sm:p-8 sm:space-y-6"
                >

                  <div className="flex items-center justify-between gap-3 border-b border-pink-100 pb-3 sm:pb-4">
                    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <div
                        className={`relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-pink-300 text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm ${
                          section.avatarImage
                            ? "bg-white"
                            : `bg-gradient-to-tr ${section.avatarBg}`
                        }`}
                      >
                        {section.avatarImage ? (
                          <Image
                            src={section.avatarImage}
                            alt={`${section.username} profile`}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          section.avatarText
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-[11px] font-bold text-[#2D2433] sm:text-sm">
                          {section.username}
                        </h4>
                        <p className="mt-0.5 max-w-[200px] truncate text-[9px] leading-tight text-[#6B6570] sm:max-w-md sm:text-xs">
                          {section.bio}
                        </p>
                      </div>
                    </div>

                    <span className="flex-shrink-0 rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-[9px] font-mono font-bold text-pink-600 sm:px-3 sm:text-xs">
                      {section.posts.length} {t("items")}
                    </span>
                  </div>

                  {/* THUMBNAIL SOCIAL MEDIA: RASIO 4:5 */}
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:gap-4">
                    {section.posts.map((item, itemIndex) => {
                      let globalIndex = 0;
                      for (let i = 0; i < sIndex; i++) {
                        globalIndex += socialSections[i].posts.length;
                      }
                      globalIndex += itemIndex;

                      return (
                        <div
                          key={itemIndex}
                          onClick={() => openPostModal(section.title, item, isSquare)}
                          className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 transition-all duration-300 hover:shadow-lg active:scale-95 sm:rounded-2xl ${
                            isSquare ? "aspect-square" : "aspect-[4/5]"
                          }`}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt || section.title}
                            fill
                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-[#2D2433]/50 p-1 text-center font-mono text-[10px] font-bold text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 sm:text-base sm:group-hover:opacity-100">
                            <span>
                              {t("projectNumber")} {globalIndex + 1}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="block pt-1 sm:hidden">
                    <button
                      onClick={() => toggleSection(sIndex)}
                      className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-mono font-bold text-pink-600 transition-all hover:bg-pink-100 active:scale-95"
                    >
                      <span>
                        {isExpanded ? t("hideDetails") : t("showDetails")}
                      </span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`space-y-6 pt-2 ${
                      isExpanded ? "block" : "hidden sm:block"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-6 border-t border-pink-100/60 pt-4 md:grid-cols-2">
                      <div>
                        <h3 className="mb-1.5 text-xs font-mono font-bold uppercase tracking-widest text-pink-600">
                          {t("overview")}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm">
                          {section.overview}
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-1.5 text-xs font-mono font-bold uppercase tracking-widest text-pink-600">
                          {t("challenge")}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm">
                          {section.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-pink-100 bg-pink-50/40 p-4 text-left sm:grid-cols-3 sm:p-5">
                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("client")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.client}
                        </span>
                      </div>

                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("industry")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.industry}
                        </span>
                      </div>

                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("role")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.role}
                        </span>
                      </div>

                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("year")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.year}
                        </span>
                      </div>

                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("deliverables")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.deliverables}
                        </span>
                      </div>

                      <div>
                        <span className="mb-0.5 block text-[10px] font-mono font-bold text-[#6B6570]">
                          {t("tools")}
                        </span>
                        <span className="text-xs font-bold text-[#2D2433] sm:text-sm">
                          {section.details.tools}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        ) : (

          /* THUMBNAIL DESIGN & LIVE STREAM DESIGN (AUTO-PLAY VIDEO LOOPING TIKTOK 1080x1920 / 9:16) */
          <div className="relative mx-auto rounded-2xl border border-pink-200/80 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)] sm:rounded-[36px] sm:p-8">
            <div className={`grid gap-2 sm:gap-4 ${isLiveStreamDesign ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5" : "grid-cols-3"}`}>
              {gallery.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openPostModal(collection.title, item, false, isThumbnailDesign || isLiveStreamDesign)}
                  className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 transition-all duration-300 hover:shadow-lg active:scale-95 sm:rounded-2xl ${
                    isThumbnailDesign || isLiveStreamDesign ? "aspect-[9/16]" : "aspect-[4/5]"
                  }`}
                >
                  {item.isVideo ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt || `Thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-[#2D2433]/50 font-mono text-[10px] font-bold text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 sm:text-base sm:group-hover:opacity-100">
                    <span>
                      {item.alt || `${t("projectNumber")} ${index + 1}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )}

      </div>

      {/* NEXT PROJECT */}
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="flex flex-col gap-3 border-t border-pink-100 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <span className="text-xs font-mono font-bold text-[#6B6570]">
            {t("nextProject")}
          </span>

          <Link
            href={`/portfolio/${nextCollection.slug}`}
            className="group inline-flex items-center gap-3 text-base font-bold text-[#2D2433] transition-colors hover:text-pink-600 sm:text-lg"
          >
            <span>{nextCollection.title}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>

      {/* MODAL LIGHTBOX / CAROUSEL */}
      {activeModalState && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-3 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => setActiveModalState(null)}
        >
          <div className="absolute top-4 right-4 left-4 z-40 flex items-center justify-between sm:top-6 sm:right-8 sm:left-8">
            {activeModalState.posts.length > 1 ? (
              <div className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md border border-white/20 shadow-md">
                {activeModalState.currentIndex + 1} / {activeModalState.posts.length}
              </div>
            ) : (
              <div />
            )}

            <button
              onClick={() => setActiveModalState(null)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-md transition-all hover:bg-white hover:text-black active:scale-95"
              aria-label={t("closeModalAria")}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex w-full max-w-xl flex-col items-center gap-4 sm:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {activeModalState.posts.length > 1 ? (
              <div className="relative w-full overflow-visible">
                <div
                  ref={carouselRef}
                  className="w-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing py-2"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  <div
                    className="flex items-center w-full"
                    style={{
                      transform: `translate3d(calc(12.5% - ${activeModalState.currentIndex * 75}% + ${dragOffset}px), 0, 0)`,
                      transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "transform",
                    }}
                  >
                    {activeModalState.posts.map((post, idx) => {
                      const isActive = idx === activeModalState.currentIndex;
                      return (
                        <div
                          key={idx}
                          className="w-[75%] flex-shrink-0 px-1.5 sm:px-2.5"
                        >
                          <div
                            className={`relative w-full overflow-hidden rounded-2xl bg-black/40 transition-all duration-500 ${
                              activeModalState.isPortrait1080x1920
                                ? "aspect-[9/16]"
                                : activeModalState.isSquare
                                ? "aspect-square"
                                : "aspect-[4/5]"
                            } ${isActive ? "opacity-100 scale-100 shadow-2xl" : "opacity-40 scale-90"}`}
                          >
                            {post.isVideo ? (
                              <video
                                src={post.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={post.src}
                                alt={post.alt || t("portfolioItem")}
                                fill
                                sizes="(max-width: 640px) 75vw, 450px"
                                className="object-cover pointer-events-none select-none"
                                priority={isActive}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevModal();
                  }}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 z-50 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-pink-600 hover:scale-110 active:scale-95 sm:flex"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6 pointer-events-none" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextModal();
                  }}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 z-50 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-pink-600 hover:scale-110 active:scale-95 sm:flex"
                  aria-label="Next slide"
                >
                  <ArrowRight className="h-5 w-5 pointer-events-none" />
                </button>
              </div>
            ) : (
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
                <div
                  className={`relative w-full ${
                    activeModalState.isPortrait1080x1920
                      ? "aspect-[9/16]"
                      : activeModalState.isSquare
                      ? "aspect-square"
                      : "aspect-[4/5]"
                  }`}
                >
                  {activeModalState.posts[0].isVideo ? (
                    <video
                      src={activeModalState.posts[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={activeModalState.posts[0].src}
                      alt={activeModalState.posts[0].alt || t("portfolioItem")}
                      fill
                      sizes="(max-width: 640px) 90vw, 450px"
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
            )}

            <div className="w-full max-w-md rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-md border border-white/20 text-center sm:p-5">
              <div className="mb-1.5 flex items-center justify-center">
                <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest text-pink-600 font-bold">
                  {activeModalState.sectionTitle}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#2D2433] sm:text-base">
                {activeModalState.posts[activeModalState.currentIndex]?.caption ||
                  activeModalState.posts[activeModalState.currentIndex]?.alt ||
                  `${activeModalState.sectionTitle}`}
              </h3>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}