"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

interface WorkItem {
  category: string;
  title: string;
  titleKey:
    | "work1Title"
    | "work2Title"
    | "work3Title"
    | "work4Title"
    | "work5Title"
    | "work6Title";
  description: string;
  descriptionKey:
    | "work1Desc"
    | "work2Desc"
    | "work3Desc"
    | "work4Desc"
    | "work5Desc"
    | "work6Desc";
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
    titleKey: "work1Title",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",
    descriptionKey: "work1Desc",
    image: "/images/portfolio/uksw-1.jpg",
    slug: "social-media-design",
    span: "col-span-7",
    aspectRatio: "aspect-[16/10]",
    number: "01",
  },
  {
    category: "CREATIVE",
    title: "Brand Identity",
    titleKey: "work2Title",
    description:
      "Building cohesive brand experiences through strategic visual identity and storytelling.",
    descriptionKey: "work2Desc",
    image: "/portfolio/jendela-finansial.jpg",
    slug: "brand-identity",
    span: "col-span-5",
    aspectRatio: "aspect-[4/5]",
    number: "02",
  },
  {
    category: "CREATIVE",
    title: "Logo Design",
    titleKey: "work3Title",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",
    descriptionKey: "work3Desc",
    image: "/portfolio/pelkatpa.jpg",
    slug: "logo-design",
    span: "col-span-5",
    aspectRatio: "aspect-[4/5]",
    number: "03",
  },
  {
    category: "CREATIVE",
    title: "Thumbnail Design",
    titleKey: "work4Title",
    description:
      "High-converting and eye-catching YouTube thumbnail designs.",
    descriptionKey: "work4Desc",
    image: "/portfolio/wakatom.jpg",
    slug: "thumbnail-design",
    span: "col-span-7",
    aspectRatio: "aspect-[16/10]",
    number: "04",
  },
  {
    category: "CREATIVE",
    title: "Character Design",
    titleKey: "work5Title",
    description:
      "Custom mascot and character designs tailored for brand identity.",
    descriptionKey: "work5Desc",
    image: "/portfolio/character.jpg",
    slug: "character-design",
    span: "col-span-6",
    aspectRatio: "aspect-[16/11]",
    number: "05",
  },
  {
    category: "CREATIVE",
    title: "Poster & Overlay",
    titleKey: "work6Title",
    description:
      "Creative graphics for live streaming overlays, events, and posters.",
    descriptionKey: "work6Desc",
    image: "/portfolio/reno.jpg",
    slug: "poster-design",
    span: "col-span-6",
    aspectRatio: "aspect-[16/11]",
    number: "06",
  },
] as const;

export default function PortfolioGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] py-20 text-[#2D2433] sm:py-28 lg:py-36">

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[550px] sm:w-[550px]" />

      <div className="pointer-events-none absolute -right-48 bottom-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-rose-100/35 blur-[140px] sm:h-[550px] sm:w-[550px]" />

      {/* MAIN CONTAINER */}
      {/* Mobile horizontal white space diperbesar dari px-3 → px-5 */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-20 lg:mb-24 lg:flex-row lg:items-end">

            {/* TITLE */}
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 shadow-[0_4px_20px_rgba(244,114,182,0.08)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
                </span>

                <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                  {t("portfolioBadge")}
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
                {t("portfolioTitleMain")}{" "}
                <br className="hidden sm:inline" />

                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  {t("portfolioTitleHighlight")}
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="mx-auto flex max-w-md flex-col items-center text-center lg:mx-0 lg:items-end lg:pb-1 lg:text-right">
              <p className="text-xs leading-relaxed text-[#6B6570] sm:text-sm">
                {t("portfolioHeaderDesc")}
              </p>
            </div>
          </div>
        </FadeUp>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-12 gap-3 sm:gap-8 lg:gap-10">

          {WORKS.map((item, index) => (
            <div key={item.slug} className={item.span}>

              <FadeUp delay={index * 0.08}>

                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-pink-200/70 bg-white/95 p-3.5 shadow-[0_12px_40px_rgba(45,36,51,0.04)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2.5 hover:border-pink-400/80 hover:shadow-[0_25px_60px_rgba(233,106,152,0.18)] sm:rounded-[36px] sm:p-7">

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[36px]" />

                  <div className="relative z-10">

                    {/* IMAGE */}
                    <div
                      className={`relative w-full ${item.aspectRatio} overflow-hidden rounded-xl bg-pink-50/50 sm:rounded-[28px]`}
                    >
                      <Image
                        src={item.image}
                        alt={t(item.titleKey)}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 66vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Category */}
                      <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
                        <span className="rounded-full border border-pink-200/80 bg-white/90 px-2.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-widest text-[#2D2433] shadow-2xs backdrop-blur-md sm:px-3.5 sm:py-1 sm:text-xs">
                          {item.category}
                        </span>
                      </div>

                      {/* Number */}
                      <span className="pointer-events-none absolute right-2.5 top-2 text-2xl font-black text-white/50 drop-shadow-md transition-transform duration-500 group-hover:scale-110 sm:right-4 sm:top-3 sm:text-5xl">
                        {item.number}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-3 px-0.5 sm:mt-6 sm:px-1">

                      <h3 className="text-sm font-black tracking-tight text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600 sm:text-2xl lg:text-3xl">
                        {t(item.titleKey)}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-[#6B6570] sm:mt-2 sm:text-sm">
                        {t(item.descriptionKey)}
                      </p>

                    </div>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 mt-4 flex items-center justify-between border-t border-pink-100/80 px-0.5 pt-3 sm:mt-6 sm:px-1 sm:pt-4">

                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600 sm:gap-2.5 sm:text-xs"
                    >
                      <span>{t("viewCollection")}</span>

                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-pink-200/60 bg-pink-50 text-pink-600 transition-all duration-300 group-hover:translate-x-1 group-hover:border-pink-600 group-hover:bg-pink-600 group-hover:text-white sm:h-8 sm:w-8">

                        <svg
                          className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5"
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

                    <span className="hidden text-[9px] font-mono font-bold tracking-widest text-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline">
                      {t("explore")}
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