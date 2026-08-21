"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { getPortfolioBySlug, getNextPortfolio } from "@/data/portfolio";
import { X, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
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

interface ActiveModalItem extends GalleryItem {
  index: number;
  brandName?: string;
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
  const [activeModalItem, setActiveModalItem] = useState<ActiveModalItem | null>(null);
  
  // State untuk mengontrol show/hide detail per card
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const isSocialMedia = collection.slug === "social-media-design";
  const isBrandIdentity = collection.slug === "brand-identity";

  const gallery: GalleryItem[] = collection.gallery || [];

  // Helper untuk mengambil slice foto dengan aman
  const getSafePosts = (start: number, end: number): GalleryItem[] => {
    if (gallery.length === 0) return [];
    const sliced = gallery.slice(start, end);
    if (sliced.length > 0) return sliced;
    return gallery.slice(0, Math.min(6, gallery.length));
  };

  // Helper aman untuk 1 foto per brand identity card
  const getSafeBrandPost = (index: number): GalleryItem[] => {
    if (gallery.length === 0) return [];
    const item = gallery[index] || gallery[index % gallery.length];
    return [item];
  };

  const socialSections: SectionData[] = isSocialMedia ? [
    {
      title: "UKSW",
      username: "uksw_salatiga",
      bio: "Official visual feed for UKSW Salatiga 🎓 Shaping futures through creative campus stories.",
      avatarImage: "/images/uksw-logo.jpg",
      avatarText: "U",
      avatarBg: "from-pink-500 to-rose-400",
      posts: getSafePosts(0, 6),
      details: {
        client: "UKSW Salatiga",
        industry: "Education",
        role: "Lead Visual Designer",
        year: "2024",
        deliverables: "Social Templates, Feed Systems",
        tools: "Figma, Photoshop"
      },
      overview: "Editorial social media systems designed to look refined, coherent, and premium across campus touchpoints.",
      challenge: "Maintaining brand consistency across academic campaigns while keeping designs engaging for students."
    },
    {
      title: "Jendela Finansial",
      username: "jendela_finansial",
      bio: "Smart financial tips & wealth education made simple 💡 Grow your future with us.",
      avatarImage: "/images/jendela-finansial-logo.jpg",
      avatarText: "JF",
      avatarBg: "from-emerald-500 to-teal-400",
      posts: getSafePosts(6, 12),
      details: {
        client: "Jendela Finansial",
        industry: "Financial Education",
        role: "Lead Visual Designer",
        year: "2024",
        deliverables: "Infographics, Carousels",
        tools: "Figma, Illustrator"
      },
      overview: "Simplifying complex financial insights into clean, engaging, and easy-to-digest visual carousels.",
      challenge: "Translating heavy data and financial terms into highly appealing visuals for young adults."
    },
    {
      title: "Pelkat PA GPIB Immanuel Pekanbaru",
      username: "pelkatpa_gpib_pekanbaru",
      bio: "Ruang ceria anak-anak kreatif & penuh kasih Tuhan 🙏✨ GPIB Immanuel Pekanbaru.",
      avatarImage: "/images/pa-logo.jpg",
      avatarText: "P",
      avatarBg: "from-blue-500 to-indigo-400",
      posts: getSafePosts(12, 18),
      details: {
        client: "GPIB Immanuel Pekanbaru",
        industry: "Community & Ministry",
        role: "Lead Visual Designer",
        year: "2024",
        deliverables: "Event Assets, Story Templates",
        tools: "Photoshop, Illustrator"
      },
      overview: "Joyful and vibrant creative feeds tailored for children's ministry events and daily spiritual content.",
      challenge: "Balancing a warm, playful aesthetic with clean church branding guidelines."
    }
  ] : [];

  const brandSections: SectionData[] = isBrandIdentity ? [
    {
      title: "Jendela Finansial",
      username: "jendela_finansial",
      bio: "Smart financial tips & wealth education brand identity 💡",
      avatarImage: "/images/jendela-finansial-logo.jpg",
      avatarText: "JF",
      avatarBg: "from-emerald-500 to-teal-400",
      posts: getSafeBrandPost(0),
      details: { 
        client: "Jendela Finansial", 
        industry: "Financial Education", 
        role: "Lead Brand Designer", 
        year: "2024", 
        deliverables: "Brand Identity, Logo Suite", 
        tools: "Illustrator, Figma" 
      },
      overview: "Creating a trustworthy and approachable brand identity for financial education.",
      challenge: "Balancing professional financial trust with friendly, youthful appeal."
    },
    {
      title: "Dewan Pelayanan Anak",
      username: "pelkatpa_gpib",
      bio: "Winning logo design for the 63rd Anniversary of Pelkat PA GPIB 🏆",
      avatarImage: "",
      avatarText: "PA",
      avatarBg: "from-rose-500 to-pink-500",
      posts: getSafeBrandPost(1),
      details: { 
        client: "Dewan Pelayanan Anak (Juara Sayembara Logo HUT ke-63)", 
        industry: "Ministry", 
        role: "Graphic Designer", 
        year: "2023", 
        deliverables: "Logo Competition Entry", 
        tools: "Illustrator" 
      },
      overview: "Winning design for the 63rd Pelkat PA GPIB Anniversary logo competition.",
      challenge: "Capturing the spirit of 63 years of service within a concise, iconic mark."
    },
    {
      title: "Logo HUT Pelkat PA ke-67",
      username: "pelkatpa_gpib",
      bio: "Official visual identity for the 67th Pelkat PA GPIB Anniversary 🕊️",
      avatarImage: "",
      avatarText: "PA",
      avatarBg: "from-blue-500 to-indigo-500",
      posts: getSafeBrandPost(2),
      details: { 
        client: "Logo HUT Pelkat PA ke-67", 
        industry: "Ministry", 
        role: "Lead Brand Designer", 
        year: "2024", 
        deliverables: "Anniversary Logo", 
        tools: "Illustrator, Photoshop" 
      },
      overview: "Developing a celebratory and meaningful identity for the 67th anniversary.",
      challenge: "Creating a distinct mark that aligns with church branding while signifying longevity."
    },
    {
      title: "GPIB Immanuel Pekanbaru",
      username: "gpib_immanuel_pku",
      bio: "Official church branding and visual identity system 🙏🕊️",
      avatarImage: "/images/pa-logo.jpg",
      avatarText: "G",
      avatarBg: "from-amber-500 to-orange-400",
      posts: getSafeBrandPost(3),
      details: { 
        client: "GPIB Immanuel Pekanbaru", 
        industry: "Religious Organization", 
        role: "Lead Brand Designer", 
        year: "2024", 
        deliverables: "Visual Identity, Stationery", 
        tools: "Illustrator, Figma" 
      },
      overview: "Establishing a dignified and welcoming brand presence for the congregation.",
      challenge: "Reflecting traditional ecclesiastical values through modern, clean graphic standards."
    },
    {
      title: "Consistrade",
      username: "consistrade",
      bio: "Professional corporate and trading brand identity design 📈",
      avatarImage: "",
      avatarText: "C",
      avatarBg: "from-purple-500 to-pink-500",
      posts: getSafeBrandPost(4),
      details: { 
        client: "Consistrade", 
        industry: "Corporate & Trading", 
        role: "Lead Brand Designer", 
        year: "2024", 
        deliverables: "Corporate Identity, Logo Suite", 
        tools: "Illustrator, Photoshop" 
      },
      overview: "Crafting a sleek, authoritative, and modern brand identity for global trade.",
      challenge: "Communicating reliability, precision, and global reach through minimal branding."
    }
  ] : [];

  return (
    <main className="min-h-screen bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      {/* Header / Navigation */}
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-6 sm:px-6 sm:pt-28 sm:pb-8 lg:pt-32">
        
        {/* Tombol Back & Switcher Bahasa */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-8">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#6B6570] hover:text-pink-600 transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" /> {t('back')}
          </Link>

          <button 
            onClick={toggleLang}
            className="bg-pink-50 hover:bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full border border-pink-200 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>🌐</span> {lang.toUpperCase()}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <span className="inline-block text-[11px] sm:text-xs font-mono font-bold text-pink-600 tracking-widest uppercase bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
            {collection.category}
          </span>
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-[#2D2433] leading-tight">
            {collection.title}
          </h1>
          <p className="text-sm sm:text-lg text-[#6B6570] max-w-2xl leading-relaxed">
            {collection.tagline}
          </p>
        </div>
      </div>

      {/* Main Gallery & Section Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        {isBrandIdentity ? (
          /* Compact 5-Column Grid Layout with Slim Frame */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
            {brandSections.map((section, sIndex) => {
              const isExpanded = expandedSections[sIndex] || false;
              return (
                <div 
                  key={sIndex} 
                  className="relative rounded-xl border border-pink-200/80 bg-white px-2 py-3 sm:p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header Profile */}
                    <div className="flex items-center gap-1.5 px-0.5 border-b border-pink-100 pb-1.5 mb-2">
                      <div className={`relative h-6 w-6 sm:h-7 sm:w-7 rounded-full overflow-hidden border border-pink-300 ${!section.avatarImage ? `bg-gradient-to-tr ${section.avatarBg}` : 'bg-white'} flex items-center justify-center text-white font-bold text-[8px] sm:text-[9px] flex-shrink-0`}>
                        {section.avatarImage ? (
                          <Image src={section.avatarImage} alt={section.username} fill className="object-cover" />
                        ) : (
                          section.avatarText
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[9px] sm:text-[10px] font-bold text-[#2D2433] truncate leading-tight">{section.username}</h4>
                        <p className="text-[8px] sm:text-[9px] text-[#6B6570] truncate leading-tight mt-0.5">{section.title}</p>
                      </div>
                    </div>

                    {/* Foto */}
                    <div className="w-full px-0.5 mb-2">
                      {section.posts.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          onClick={() => setActiveModalItem({ ...item, index: sIndex + 1, brandName: section.title })}
                          className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-lg bg-pink-50 border border-pink-100 shadow-sm"
                        >
                          <Image src={item.src} alt={item.alt || section.title} fill className="object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Overview */}
                    <p className="text-[9px] sm:text-[10px] text-[#6B6570] leading-tight text-center line-clamp-2 px-0.5 mb-2">
                      {section.overview}
                    </p>
                  </div>

                  {/* Button Details */}
                  <button
                    onClick={() => toggleSection(sIndex)}
                    className="w-full py-1 text-[9px] sm:text-[10px] font-mono font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-md border border-pink-200 transition-all active:scale-95 cursor-pointer"
                  >
                    {isExpanded ? t('close') : t('info')}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-1 pt-2 border-t border-pink-100 text-[9px] animate-in fade-in">
                      <div>
                        <span className="font-bold text-[#2D2433] block leading-snug">{section.details.client}</span>
                        <span className="text-[8px] text-[#6B6570]">{section.details.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : isSocialMedia ? (
          /* Social Media Sections */
          <div className="space-y-16">
            {socialSections.map((section, sIndex) => {
              const isExpanded = expandedSections[sIndex] || false;
              return (
                <div key={sIndex} className="relative mx-auto rounded-2xl sm:rounded-[36px] border border-pink-200/80 bg-white p-4 sm:p-8 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)] space-y-6">
                  <div className="flex items-center justify-between border-b border-pink-100 pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className={`relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-pink-300 ${!section.avatarImage ? `bg-gradient-to-tr ${section.avatarBg}` : 'bg-white'} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm flex-shrink-0`}>
                        {section.avatarImage ? (
                          <Image src={section.avatarImage} alt={`${section.username} profile`} fill className="object-cover" />
                        ) : (
                          section.avatarText
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.username}</h4>
                        <p className="text-[10px] sm:text-xs text-[#6B6570] max-w-xs sm:max-w-md leading-tight mt-0.5">{section.bio}</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-pink-600 bg-pink-50 px-2.5 sm:px-3 py-1 rounded-full border border-pink-200 flex-shrink-0">
                      {section.posts.length > 0 ? section.posts.length : gallery.length} Items
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                    {section.posts.map((item, itemIndex) => {
                      const globalIndex = sIndex * 6 + itemIndex;
                      return (
                        <div
                          key={itemIndex}
                          onClick={() => setActiveModalItem({ ...item, index: globalIndex + 1, brandName: section.title })}
                          className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg sm:rounded-2xl bg-pink-50 border border-pink-100 transition-all duration-300 hover:shadow-lg active:scale-95 sm:active:scale-100"
                        >
                          <Image src={item.src} alt={item.alt || section.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-[#2D2433]/50 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-mono font-bold text-sm sm:text-base backdrop-blur-[2px] p-2 text-center">
                            <span>Project {globalIndex + 1}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="block sm:hidden pt-1">
                    <button
                      onClick={() => toggleSection(sIndex)}
                      className="w-full py-2.5 px-4 text-xs font-mono font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-200 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>{isExpanded ? t('hideDetails') : t('showDetails')}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <div className={`space-y-6 pt-2 ${isExpanded ? "block" : "hidden sm:block"}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-pink-100/60">
                      <div>
                        <h3 className="text-xs font-mono font-bold text-pink-600 tracking-widest uppercase mb-1.5">{t('overview')}</h3>
                        <p className="text-xs sm:text-sm text-[#6B6570] leading-relaxed">{section.overview}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-mono font-bold text-pink-600 tracking-widest uppercase mb-1.5">{t('challenge')}</h3>
                        <p className="text-xs sm:text-sm text-[#6B6570] leading-relaxed">{section.challenge}</p>
                      </div>
                    </div>

                    <div className="bg-pink-50/40 p-4 sm:p-5 rounded-2xl border border-pink-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('client')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.client}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('industry')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.industry}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('role')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.role}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('year')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.year}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('deliverables')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.deliverables}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#6B6570] block mb-0.5">{t('tools')}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#2D2433]">{section.details.tools}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Fallback Gallery */
          <div className="relative mx-auto rounded-2xl sm:rounded-[36px] border border-pink-200/80 bg-white p-3 sm:p-8 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)]">
            {gallery.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                {gallery.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveModalItem({ ...item, index: index + 1 })}
                      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg sm:rounded-2xl bg-pink-50 border border-pink-100 transition-all duration-300 hover:shadow-lg active:scale-95 sm:active:scale-100"
                    >
                      <Image src={item.src} alt={item.alt || collection.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[#2D2433]/50 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-mono font-bold text-sm sm:text-base backdrop-blur-[2px]">
                        <span>Project {index + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-pink-50">
                <Image src={collection.cover} alt={collection.title} fill className="object-cover" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Next Project Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="border-t border-pink-100 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-xs font-mono font-bold text-[#6B6570]">{t('nextProject')}</span>
          <Link 
            href={`/portfolio/${nextCollection.slug}`}
            className="group inline-flex items-center gap-3 text-base sm:text-lg font-bold text-[#2D2433] hover:text-pink-600 transition-colors cursor-pointer"
          >
            <span>{nextCollection.title}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox / Popup Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-xs sm:max-w-md overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-pink-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-md backdrop-blur-md transition-all hover:bg-pink-50 hover:text-pink-600 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* 4:5 View Image */}
            <div className="relative aspect-[4/5] w-full bg-pink-50 flex-shrink-0">
              <Image 
                src={activeModalItem.src} 
                alt={activeModalItem.alt || "Portfolio Item"} 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-4 sm:p-6 bg-white overflow-y-auto">
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <span className="text-[10px] font-mono text-pink-600 uppercase tracking-widest bg-pink-50 px-2.5 py-0.5 sm:py-1 rounded-full border border-pink-200">
                  Project #{activeModalItem.index}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-[#2D2433] mb-1">
                {activeModalItem.brandName ? `${activeModalItem.brandName} - Project #${activeModalItem.index}` : (activeModalItem.caption || activeModalItem.alt)}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6570] leading-relaxed">
                {collection.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}