"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export interface WorkItem {
  id: string;
  category: string;
  title: string;
  titleKey: string;
  image: string;
  slug: string;
  span: string;
  aspectRatio: string;
  number: string;
}

const WORKS: WorkItem[] = [
  {
    id: "work-1",
    category: "CREATIVE",
    title: "Social Media Design",
    titleKey: "work1Title",
    image: "/portfolio/uksw-1.jpg",
    slug: "social-media-design",
    span: "col-span-6",
    aspectRatio: "1/1",
    number: "01",
  },
  {
    id: "work-2",
    category: "CREATIVE",
    title: "Brand Identity",
    titleKey: "work2Title",
    image: "/portfolio/jendela-finansial.jpg",
    slug: "brand-identity",
    span: "col-span-6",
    aspectRatio: "4/5",
    number: "02",
  },
  {
    id: "work-3",
    category: "CREATIVE",
    title: "Logo Design",
    titleKey: "work3Title",
    image: "/portfolio/pelkatpa.jpg",
    slug: "logo-design",
    span: "col-span-6",
    aspectRatio: "4/5",
    number: "03",
  },
  {
    id: "work-4",
    category: "CREATIVE",
    title: "Thumbnail Design",
    titleKey: "work4Title",
    image: "/portfolio/thumbnail-1.jpg",
    slug: "thumbnail-design",
    span: "col-span-6",
    aspectRatio: "1/1",
    number: "04",
  },
  {
    id: "work-5",
    category: "CREATIVE",
    title: "Character Design",
    titleKey: "work5Title",
    image: "/portfolio/character.jpg",
    slug: "character-design",
    span: "col-span-6",
    aspectRatio: "1/1",
    number: "05",
  },
  {
    id: "work-6",
    category: "BROADCAST GRAPHICS",
    title: "Live Stream Design",
    titleKey: "work6Title",
    image: "/portfolio/ezsquad.jpg",
    slug: "live-stream-design",
    span: "col-span-6",
    aspectRatio: "4/5",
    number: "06",
  },
  {
    id: "work-7",
    category: "MISCELLANEOUS DESIGN",
    title: "Desain Lain",
    titleKey: "work7Title",
    image: "/portfolio/desain-lain.jpg",
    slug: "desain-lain",
    span: "col-span-12", // Full-width
    aspectRatio: "16/9", // Rasio landscape 1920x1080
    number: "07",
  },
];

export default function PortfolioGallery() {
  const { t } = useLanguage();

  const getTranslation = (key: string, fallback: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translated = (t as any)(key);
    return translated && translated !== key ? translated : fallback;
  };

  return (
    <section className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] py-12 text-[#2D2433] sm:py-20 lg:py-28">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[550px] sm:w-[550px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-rose-100/35 blur-[140px] sm:h-[550px] sm:w-[550px]" />

      <div className="relative mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        {/* HEADER */}
        <FadeUp>
          <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3 py-1 shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.25em] text-pink-600 sm:text-xs">
                  {getTranslation("portfolioBadge", "PORTFOLIO")}
                </span>
              </div>

              <h2 className="mt-2.5 text-2xl font-black leading-[1.1] tracking-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                {getTranslation("portfolioTitleMain", "Selected")}{" "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  {getTranslation("portfolioTitleHighlight", "Works")}
                </span>
              </h2>
            </div>

            <div className="mx-auto flex max-w-md flex-col items-center text-center lg:mx-0 lg:items-end lg:pb-1 lg:text-right">
              <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm">
                {getTranslation(
                  "portfolioHeaderDesc",
                  "A curated showcase of visual design and creative direction."
                )}
              </p>
            </div>
          </div>
        </FadeUp>

        {/* GRID GALLERY */}
        <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-4 lg:gap-5">
          {WORKS.map((item, index) => (
            <div key={item.id} className={item.span}>
              <FadeUp delay={index * 0.05}>
                {/* Seluruh card dibungkus komponen Link */}
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group relative flex cursor-pointer flex-col justify-between rounded-xl border border-pink-200/40 bg-white/80 p-2 shadow-xs backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-pink-300 hover:shadow-md sm:rounded-2xl sm:p-3.5"
                >
                  <div className="relative z-10">
                    <div
                      style={{ aspectRatio: item.aspectRatio }}
                      className="relative w-full overflow-hidden rounded-lg bg-pink-50/50 sm:rounded-xl"
                    >
                      <Image
                        src={item.image}
                        alt={getTranslation(item.titleKey, item.title)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                        <span className="rounded-full border border-pink-200/60 bg-white/90 px-2 py-0.5 text-[7px] font-mono font-bold uppercase tracking-wider text-[#2D2433] backdrop-blur-md sm:px-2.5 sm:text-[9px]">
                          {item.category}
                        </span>
                      </div>

                      <span className="pointer-events-none absolute right-2 top-1.5 text-lg font-black text-white/50 drop-shadow-xs transition-transform duration-300 group-hover:scale-105 sm:right-3 sm:top-2 sm:text-2xl">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-2 px-0.5 sm:mt-2.5">
                      <h3 className="text-xs font-bold tracking-tight text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600 sm:text-base lg:text-lg">
                        {getTranslation(item.titleKey, item.title)}
                      </h3>
                    </div>
                  </div>

                  {/* Footer Card diganti menggunakan <div> agar tidak bentrok dengan <Link> induk */}
                  <div className="relative z-10 mt-2 flex items-center justify-between border-t border-pink-100/60 pt-2 sm:mt-2.5 sm:pt-2.5">
                    <div className="inline-flex w-full items-center justify-between text-[8px] font-bold uppercase tracking-[0.1em] text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600 sm:text-[11px]">
                      <span>
                        {getTranslation("viewCollection", "VIEW COLLECTION")}
                      </span>

                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-pink-200/60 bg-pink-50 text-pink-600 transition-all duration-300 group-hover:border-pink-600 group-hover:bg-pink-600 group-hover:text-[#FFFDFC] sm:h-6 sm:w-6">
                        <svg
                          className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
                    </div>
                  </div>
                </Link>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}