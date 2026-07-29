"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";

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

// Data statis dengan konfigurasi layout grid editorial
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
  return (
    <section className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] py-20 sm:py-28 lg:py-36 text-[#2D2433]">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[550px] sm:w-[550px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-rose-100/35 blur-[140px] sm:h-[550px] sm:w-[550px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mb-14 sm:mb-20 lg:mb-24 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              {/* Live Indicator Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(244,114,182,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                  SELECTED WORK
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
                Creative work across <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  multiple disciplines.
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-1">
              <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm lg:text-right">
                A curated portfolio showcasing experience in social media design, brand identity, logo design, character creation, and high-converting visual graphics.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* GALLERY GRID (Asymmetrical 12-Column Grid) */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10">
          {WORKS.map((item, index) => (
            <div key={item.slug} className={item.span}>
              <FadeUp delay={index * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-[28px] sm:rounded-[36px] border border-pink-200/70 bg-white/95 p-5 sm:p-7 shadow-[0_12px_40px_rgba(45,36,51,0.04)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2.5 hover:border-pink-400/80 hover:shadow-[0_25px_60px_rgba(233,106,152,0.18)]">
                  
                  {/* Top Inner Glow Overlay on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[28px] sm:rounded-[36px]" />

                  <div className="relative z-10">
                    {/* Visual Canvas Container */}
                    <div className={`relative w-full ${item.aspectRatio} overflow-hidden rounded-[20px] sm:rounded-[28px] bg-pink-50/50`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Smooth Dark Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Floating Category Monospace Badge */}
                      <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4">
                        <span className="rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#2D2433] backdrop-blur-md shadow-2xs">
                          {item.category}
                        </span>
                      </div>

                      {/* Large Watermark Index */}
                      <span className="pointer-events-none absolute right-4 top-3 text-3xl sm:text-5xl font-black text-white/50 drop-shadow-md transition-transform duration-500 group-hover:scale-110">
                        {item.number}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="mt-5 px-1 sm:mt-6">
                      <h3 className="text-xl font-black tracking-tight text-[#2D2433] sm:text-2xl lg:text-3xl transition-colors duration-300 group-hover:text-pink-600">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-[#6B6570] sm:text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA Action Bar */}
                  <div className="relative z-10 mt-6 border-t border-pink-100/80 px-1 pt-4 flex items-center justify-between">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600"
                    >
                      <span>VIEW COLLECTION</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-pink-600 border border-pink-200/60 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 group-hover:translate-x-1">
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </Link>

                    <span className="text-[10px] font-mono font-bold tracking-widest text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      EXPLORE
                    </span>
                  </div>

                </div>
              </FadeUp>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}