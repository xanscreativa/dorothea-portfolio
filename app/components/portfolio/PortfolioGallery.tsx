"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { Heart, MessageCircle, X } from "lucide-react";

interface WorkItem {
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  span: string;
  aspectRatio: string;
  number: string;
}

const WORKS: readonly WorkItem[] = [
  {
    category: "CREATIVE",
    title: "Social Media Design",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",
    image: "/portfolio/uksw.jpg",
    slug: "social-media-design",
    span: "lg:col-span-7",
    aspectRatio: "aspect-[16/10] lg:aspect-[16/10]",
    number: "01",
  },
  {
    category: "CREATIVE",
    title: "Brand Identity",
    description:
      "Building cohesive brand experiences through strategic visual identity and storytelling.",
    image: "/portfolio/jendela-finansial.jpg",
    slug: "brand-identity",
    span: "lg:col-span-5",
    aspectRatio: "aspect-[16/10] lg:aspect-[4/5]",
    number: "02",
  },
  {
    category: "CREATIVE",
    title: "Logo Design",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",
    image: "/portfolio/pelkatpa.jpg",
    slug: "logo-design",
    span: "lg:col-span-5",
    aspectRatio: "aspect-[16/10] lg:aspect-[4/5]",
    number: "03",
  },
  {
    category: "CREATIVE",
    title: "Thumbnail Design",
    description:
      "High-converting and eye-catching YouTube thumbnail designs.",
    image: "/portfolio/wakatom.jpg",
    slug: "thumbnail-design",
    span: "lg:col-span-7",
    aspectRatio: "aspect-[16/10] lg:aspect-[16/10]",
    number: "04",
  },
  {
    category: "CREATIVE",
    title: "Character Design",
    description:
      "Custom mascot and character designs tailored for brand identity.",
    image: "/portfolio/character.jpg",
    slug: "character-design",
    span: "lg:col-span-6",
    aspectRatio: "aspect-[16/10] lg:aspect-[16/11]",
    number: "05",
  },
  {
    category: "CREATIVE",
    title: "Poster & Overlay",
    description:
      "Creative graphics for live streaming overlays, events, and posters.",
    image: "/portfolio/reno.jpg",
    slug: "poster-design",
    span: "lg:col-span-6",
    aspectRatio: "aspect-[16/10] lg:aspect-[16/11]",
    number: "06",
  },
] as const;

export default function PortfolioGallery() {
  const [activeModalItem, setActiveModalItem] = useState<any | null>(null);

  const getInstagramMeta = (index: number) => {
    const likesList = ["1,428", "982", "2,150", "876", "1,120", "1,650"];
    const commentsList = ["94", "45", "128", "32", "67", "88"];
    return {
      likes: likesList[index % likesList.length],
      comments: commentsList[index % commentsList.length],
    };
  };

  return (
    <section className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] py-20 sm:py-28 lg:py-36 text-[#2D2433]">
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[550px] sm:w-[550px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-rose-100/35 blur-[140px] sm:h-[550px] sm:w-[550px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="mb-14 sm:mb-20 lg:mb-24 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title={
                  <>
                    Creative work across <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                      multiple disciplines.
                    </span>
                  </>
                }
                align="left"
                className="max-w-2xl"
                titleClassName="mt-0 text-3xl sm:text-5xl lg:text-6xl leading-[1.1]"
              />
            </div>

            <div className="max-w-md lg:pb-1">
              <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm lg:text-right">
                A curated portfolio showcasing experience in social media design, brand identity, logo design, character creation, and high-converting visual graphics.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Unified Instagram-style profile + responsive square grid (same on mobile & desktop) */}
        <div className="mb-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-pink-200/80 bg-white p-4 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.08)]">

            {/* Profile header */}
            <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-pink-300 bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  X
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D2433]">xans_creativa</h4>
                  <p className="text-[12px] text-[#6B6570]">Curated System & Grid</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
                  {WORKS.length} Posts
                </span>
              </div>
            </div>

            {/* Grid (2 columns on very small, 3 on sm+) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {WORKS.map((item, index) => {
                const meta = getInstagramMeta(index);
                return (
                  <button
                    key={item.slug}
                    onClick={() => setActiveModalItem({ ...item, ...meta, index: index + 1 })}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-md bg-pink-50 border border-pink-100 active:scale-95 transition-transform focus:outline-none"
                    aria-label={`Open ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal (same for mobile & desktop) */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-pink-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-md backdrop-blur-md transition-all hover:bg-pink-50 hover:text-pink-600 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="w-full bg-pink-50 flex-shrink-0 flex items-center justify-center">
              {/* square image */}
              <div className="w-full max-w-2xl aspect-square relative bg-gray-50">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-4 bg-white overflow-y-auto space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2D2433]">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-sm">{activeModalItem.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#6B6570]">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{activeModalItem.comments}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-pink-600 uppercase tracking-widest bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  #{activeModalItem.number}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#2D2433] mb-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-[#6B6570] leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/portfolio/${activeModalItem.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-pink-600 hover:bg-pink-700 py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                >
                  <span>View Full Collection</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}