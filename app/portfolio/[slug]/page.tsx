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

import { getPortfolioBySlug, getNextPortfolio } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

import {
  GalleryItem,
  desainLainItems,
  liveStreamItems,
  liveProfiles,
  defaultThumbnailGrid,
  socialSections,
  brandSections,
  logoSections,
} from "./portfolio-data";
import { TikTokLiveMockup } from "./TikTokLiveMockup";

interface ActiveModalState {
  sectionTitle: string;
  posts: GalleryItem[];
  currentIndex: number;
  isSquare: boolean;
  isPortrait1080x1920?: boolean;
  isCoverFB?: boolean;
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
  const isDesainLain = collection.slug === "desain-lain";

  const gallery: GalleryItem[] = isDesainLain
    ? desainLainItems
    : isLiveStreamDesign
    ? liveStreamItems
    : collection.gallery && collection.gallery.length > 0
    ? collection.gallery
    : defaultThumbnailGrid;

  // Navigasi carousel dibuat langsung tanpa lock 500ms.
  // Sebelumnya klik berikutnya/prev tertahan oleh isAnimating + setTimeout,
  // sehingga terasa seperti tombol mengalami delay.
  const handleNextModal = useCallback(() => {
    setActiveModalState((prev) => {
      if (!prev || prev.posts.length <= 1) return prev;

      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.posts.length,
      };
    });

    setDragOffset(0);
  }, []);

  const handlePrevModal = useCallback(() => {
    setActiveModalState((prev) => {
      if (!prev || prev.posts.length <= 1) return prev;

      return {
        ...prev,
        currentIndex:
          prev.currentIndex === 0
            ? prev.posts.length - 1
            : prev.currentIndex - 1,
      };
    });

    setDragOffset(0);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (
      !activeModalState ||
      activeModalState.posts.length <= 1
    ) {
      return;
    }

    setIsDragging(true);
    setStartPos(e.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    setDragOffset(e.clientX - startPos);
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
      // Tap/click tanpa swipe: reset posisi langsung, tanpa menunggu timeout.
      setDragOffset(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalState) return;

      if (e.key === "Escape") {
        setActiveModalState(null);
      } else if (
        e.key === "ArrowRight" &&
        activeModalState.posts.length > 1
      ) {
        handleNextModal();
      } else if (
        e.key === "ArrowLeft" &&
        activeModalState.posts.length > 1
      ) {
        handlePrevModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalState, handleNextModal, handlePrevModal]);

  const openPostModal = (
    sectionTitle: string,
    postItem: GalleryItem,
    isSquare: boolean,
    isPortrait1080x1920?: boolean,
    isCoverFB?: boolean
  ) => {
    if (isLiveStreamDesign) {
      const currentIndex = liveStreamItems.findIndex(
        (item) => item.src === postItem.src
      );

      setActiveModalState({
        sectionTitle,
        posts: liveStreamItems,
        currentIndex: currentIndex >= 0 ? currentIndex : 0,
        isSquare: false,
        isPortrait1080x1920: true,
        isCoverFB: false,
      });

      return;
    }

    if (postItem.subSlides && postItem.subSlides.length > 0) {
      setActiveModalState({
        sectionTitle,
        posts: postItem.subSlides,
        currentIndex: 0,
        isSquare,
        isPortrait1080x1920,
        isCoverFB,
      });

      return;
    }

    setActiveModalState({
      sectionTitle,
      posts: [postItem],
      currentIndex: 0,
      isSquare,
      isPortrait1080x1920,
      isCoverFB,
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">

      {/* HEADER */}
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pt-32">

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

          <div
            className={
              isCharacterDesign
                ? "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
                : "grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            }
          >

            {isCharacterDesign
              ? collection.items.map((item) => (

                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-[#E9DCE4] bg-white p-3.5 shadow-[0_10px_30px_-10px_rgba(233,106,152,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(233,106,152,0.18)] active:scale-95 sm:p-5"
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
              : (isBrandIdentity
                  ? brandSections
                  : logoSections
                ).map((section, sIndex) => {

                  const post = section.posts[0];

                  return (

                    <div
                      key={sIndex}
                      onClick={() =>
                        openPostModal(
                          section.title,
                          post,
                          false
                        )
                      }
                      className="group cursor-pointer overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3.5 shadow-[0_10px_30px_-10px_rgba(233,106,152,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(233,106,152,0.18)] active:scale-95 sm:p-5"
                    >

                      <div
                        className={`relative w-full overflow-hidden rounded-xl border border-pink-100 bg-pink-50/50 ${
                          isBrandIdentity
                            ? "aspect-[4/5]"
                            : "aspect-square"
                        }`}
                      >

                        <Image
                          src={post.src}
                          alt={section.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-[#2D2433]/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

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

              const isExpanded =
                expandedSections[sIndex] || false;

              const isSquare =
                section.title === "UKSW";

              return (

                <div
                  key={sIndex}
                  className="relative mx-auto space-y-4 rounded-2xl border border-pink-200/80 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)] sm:space-y-6 sm:rounded-[36px] sm:p-8"
                >

                  <div className="flex items-center justify-between gap-3 border-b border-pink-100 pb-3 sm:pb-4">

                    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

                      <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-pink-300 text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">

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

                  <div className="grid grid-cols-3 gap-2 sm:gap-4">

                    {section.posts.map(
                      (item, itemIndex) => {

                        let globalIndex = 0;

                        for (
                          let i = 0;
                          i < sIndex;
                          i++
                        ) {
                          globalIndex +=
                            socialSections[i]
                              .posts.length;
                        }

                        globalIndex += itemIndex;

                        return (

                          <div
                            key={itemIndex}
                            onClick={() =>
                              openPostModal(
                                section.title,
                                item,
                                isSquare
                              )
                            }
                            className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 transition-all duration-300 hover:shadow-lg active:scale-95 sm:rounded-2xl ${
                              isSquare
                                ? "aspect-square"
                                : "aspect-[4/5]"
                            }`}
                          >

                            <Image
                              src={item.src}
                              alt={
                                item.alt ||
                                section.title
                              }
                              fill
                              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-[#2D2433]/25 p-1 text-center font-mono text-[10px] font-bold text-white opacity-0 backdrop-blur-[1px] transition-opacity duration-300 sm:text-base sm:group-hover:opacity-100">

                              <span>
                                {t("projectNumber")}{" "}
                                {globalIndex + 1}
                              </span>

                            </div>

                          </div>

                        );
                      }
                    )}

                  </div>

                  <div className="block pt-1 sm:hidden">

                    <button
                      onClick={() =>
                        toggleSection(sIndex)
                      }
                      className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-mono font-bold text-pink-600 transition-all hover:bg-pink-100 active:scale-95"
                    >

                      <span>
                        {isExpanded
                          ? t("hideDetails")
                          : t("showDetails")}
                      </span>

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isExpanded
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>

                  </div>

                  <div
                    className={`space-y-6 pt-2 ${
                      isExpanded
                        ? "block"
                        : "hidden sm:block"
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

        ) : isDesainLain ? (

          <div className="flex flex-col gap-6">

            {gallery.map((item, index) => (

              <div
                key={index}
                onClick={() =>
                  openPostModal(
                    collection.title,
                    item,
                    false,
                    false,
                    true
                  )
                }
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-pink-200/80 bg-white p-3 shadow-sm transition-all duration-300 hover:border-pink-300 hover:shadow-md active:scale-95"
              >

                <div
                  style={{
                    aspectRatio: "820 / 312",
                  }}
                  className="relative w-full overflow-hidden rounded-xl bg-pink-50"
                >

                  <Image
                    src={item.src}
                    alt={
                      item.alt ||
                      item.caption ||
                      `Desain Lain ${index + 1}`
                    }
                    fill
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[#2D2433]/25 font-mono text-sm font-bold text-white opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">

                    <span>
                      {item.caption || item.alt}
                    </span>

                  </div>

                </div>

                <div className="mt-3 px-2 pb-1">

                  <p className="text-xs font-normal not-italic leading-relaxed text-justify text-[#2D2433] sm:text-sm">
                    {item.caption || item.alt}
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="relative mx-auto rounded-2xl border border-pink-200/80 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(233,106,152,0.1)] sm:rounded-[36px] sm:p-8">

            {isLiveStreamDesign ? (

              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">

                {liveStreamItems.map(
                  (item, index) => {

                    const profile =
                      liveProfiles[index];

                    return (

                      <div
                        key={item.src}
                        onClick={() =>
                          openPostModal(
                            collection.title,
                            item,
                            false,
                            true
                          )
                        }
                        className="group min-w-0 cursor-pointer"
                      >

                        <TikTokLiveMockup
                          item={item}
                          username={
                            profile.username
                          }
                          avatarImage={
                            profile.avatarImage
                          }
                          avatarText={
                            profile.avatarText
                          }
                          avatarBg={
                            profile.avatarBg
                          }
                          title={profile.title}
                        />

                        <div className="mt-3 px-1">

                          <div className="flex items-center justify-between gap-2">

                            <h3 className="min-w-0 truncate text-xs font-bold text-[#2D2433] transition-colors group-hover:text-pink-600 sm:text-sm">
                              {profile.title}
                            </h3>

                            <span className="flex-shrink-0 rounded-full border border-pink-200 bg-pink-50 px-2 py-0.5 text-[7px] font-mono font-bold uppercase tracking-wider text-pink-600 sm:text-[8px]">
                              LIVE
                            </span>

                          </div>

                          <p className="mt-1 text-[8px] font-mono text-[#6B6570] sm:text-[10px]">
                            TikTok Live Layout
                          </p>

                        </div>

                      </div>

                    );
                  }
                )}

              </div>

            ) : (

              <div className="grid grid-cols-3 gap-2 sm:gap-4">

                {gallery.map((item, index) => (

                  <div
                    key={index}
                    onClick={() =>
                      openPostModal(
                        collection.title,
                        item,
                        false,
                        isThumbnailDesign
                      )
                    }
                    className={`group relative cursor-pointer overflow-hidden rounded-lg border border-pink-100 bg-pink-50 transition-all duration-300 hover:shadow-lg active:scale-95 sm:rounded-2xl ${
                      isThumbnailDesign
                        ? "aspect-[9/16]"
                        : "aspect-[4/5]"
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
                        alt={
                          item.alt ||
                          `Thumbnail ${index + 1}`
                        }
                        fill
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-[#2D2433]/25 font-mono text-[10px] font-bold text-white opacity-0 backdrop-blur-[1px] transition-opacity duration-300 sm:text-base sm:group-hover:opacity-100">

                      <span>
                        {item.alt ||
                          `${t(
                            "projectNumber"
                          )} ${index + 1}`}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            )}

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

            <span>
              {nextCollection.title}
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />

          </Link>

        </div>

      </div>

      {/* MODAL LIGHTBOX */}
      {activeModalState && (

        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black/75 p-3 backdrop-blur-sm animate-in fade-in duration-200 select-none"
          onClick={() =>
            setActiveModalState(null)
          }
        >

          <div className="absolute left-4 right-4 top-4 z-50 flex items-center justify-between sm:left-8 sm:right-8 sm:top-6">

            {activeModalState.posts.length > 1 ? (

              <div className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono font-bold text-white shadow-md backdrop-blur-md">
                {activeModalState.currentIndex + 1} /{" "}
                {activeModalState.posts.length}
              </div>

            ) : (

              <div />

            )}

            <button
              onClick={() =>
                setActiveModalState(null)
              }
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-black active:scale-95"
              aria-label={t("closeModalAria")}
            >

              <X className="h-5 w-5" />

            </button>

          </div>

          <div
            className={`relative flex w-full flex-col items-center gap-4 sm:gap-6 ${
              activeModalState.isCoverFB
                ? "max-w-3xl"
                : activeModalState.isPortrait1080x1920
                ? "max-w-[340px] sm:max-w-[380px]"
                : "max-w-xl"
            }`}
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {activeModalState.posts.length > 1 ? (

              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">

                <style dangerouslySetInnerHTML={{ __html: `
                  .peek-track {
                    --slide-w: 85%;
                    --slide-gap: 1rem;
                    --peek-offset: 7.5%;
                  }

                  @media (min-width: 640px) {
                    .peek-track {
                      --slide-w: 100%;
                      --slide-gap: 0rem;
                      --peek-offset: 0%;
                    }
                  }
                `}} />

                <div
                  ref={carouselRef}
                  className="w-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >

                  <div
                    className="flex items-center peek-track"
                    style={{
                      transform: `translate3d(calc(var(--peek-offset) - ${activeModalState.currentIndex} * (var(--slide-w) + var(--slide-gap)) + ${dragOffset}px), 0, 0)`,
                      transition: isDragging
                        ? "none"
                        : "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                      willChange: "transform",
                    }}
                  >

                    {activeModalState.posts.map(
                      (post, idx) => {

                        const isActive =
                          idx ===
                          activeModalState.currentIndex;

                        return (

                          <div
                            key={idx}
                            className="peek-slide flex-shrink-0"
                            style={{
                              width: "var(--slide-w)",
                              marginRight:
                                idx === activeModalState.posts.length - 1
                                  ? 0
                                  : "var(--slide-gap)",
                            }}
                          >

                            <div
                              className={`relative w-full overflow-hidden rounded-2xl bg-black transition-all duration-500 ${
                                activeModalState.isCoverFB
                                  ? "aspect-[820/312]"
                                  : activeModalState.isPortrait1080x1920
                                  ? "aspect-[9/16]"
                                  : activeModalState.isSquare
                                  ? "aspect-square"
                                  : "aspect-[4/5]"
                              }`}
                            >

                              {post.isVideo ? (

                                <video
                                  src={post.src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  controls
                                  className="h-full w-full object-cover"
                                />

                              ) : (

                                <Image
                                  src={post.src}
                                  alt={
                                    post.alt ||
                                    t("portfolioItem")
                                  }
                                  fill
                                  sizes="(max-width: 640px) 85vw, 600px"
                                  className="pointer-events-none object-cover select-none"
                                  priority={isActive}
                                />

                              )}

                              {/* Overlay untuk peek slide, khusus mobile */}
                              <div
                                className={`absolute inset-0 bg-black/40 transition-opacity duration-500 sm:hidden ${
                                  isActive
                                    ? "opacity-0"
                                    : "opacity-100"
                                }`}
                              />

                            </div>

                          </div>

                        );
                      }
                    )}

                  </div>

                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevModal();
                  }}
                  className="absolute left-3 top-1/2 z-50 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-pink-600 active:scale-95 sm:flex"
                  aria-label="Previous slide"
                >

                  <ChevronLeft className="h-6 w-6" />

                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextModal();
                  }}
                  className="absolute right-3 top-1/2 z-50 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#2D2433] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-pink-600 active:scale-95 sm:flex"
                  aria-label="Next slide"
                >

                  <ArrowRight className="h-5 w-5" />

                </button>

              </div>

            ) : (

              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
                  activeModalState.isCoverFB
                    ? "max-w-2xl"
                    : "max-w-sm"
                }`}
              >

                <div
                  className={`relative w-full ${
                    activeModalState.isCoverFB
                      ? "aspect-[820/312]"
                      : activeModalState.isPortrait1080x1920
                      ? "aspect-[9/16]"
                      : activeModalState.isSquare
                      ? "aspect-square"
                      : "aspect-[4/5]"
                  }`}
                >

                  {activeModalState.posts[0].isVideo ? (

                    <video
                      src={
                        activeModalState.posts[0].src
                      }
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="h-full w-full object-cover"
                    />

                  ) : (

                    <Image
                      src={
                        activeModalState.posts[0].src
                      }
                      alt={
                        activeModalState.posts[0].alt ||
                        t("portfolioItem")
                      }
                      fill
                      sizes="(max-width: 640px) 90vw, 600px"
                      className="object-cover"
                      priority
                    />

                  )}

                </div>

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  );
}