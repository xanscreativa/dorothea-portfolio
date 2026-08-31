"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import useParallax from "@/components/animation/useParallax";
import {
  MapPin,
  Briefcase,
  Globe,
  Palette,
  Clapperboard,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const bgOffset = useParallax(0.12);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-[#FFFFFF] pt-16 sm:pt-28 lg:min-h-[calc(100vh-4.5rem)] lg:pt-24 lg:pb-16 xl:min-h-[calc(100vh-5rem)] xl:pt-28 xl:pb-20"
    >
      {/* Background Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute -left-12 top-20 h-48 w-48 rounded-full bg-pink-100/60 blur-[100px] sm:h-80 sm:w-80"
        style={{ transform: `translateY(${bgOffset}px)` }}
      />

      <div className="pointer-events-none absolute right-0 top-16 h-64 w-64 rounded-full bg-pink-200/25 blur-[100px] sm:right-10 sm:h-[420px] sm:w-[420px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:text-left xl:gap-10">
          {/* VISUAL PROFILE */}
          <div className="relative mb-6 w-full max-w-[285px] pt-4 sm:max-w-[320px] sm:pt-8 md:max-w-md lg:order-2 lg:col-span-5 lg:mb-0 lg:max-w-none lg:pt-0">
            <div className="relative mx-auto">
              {/* Portrait Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-300/40 via-pink-200/30 to-pink-100/20 blur-[55px] sm:h-[400px] sm:w-[400px] sm:blur-[80px]" />

              {/* Brush Graphic */}
              <div className="pointer-events-none absolute -right-3 top-1 -z-10 w-full max-w-[420px] select-none opacity-20 blur-[0.5px] sm:-right-8 sm:-top-2 sm:max-w-[600px] lg:max-w-[520px]">
                <Image
                  src="/hero/brush.png"
                  alt=""
                  width={900}
                  height={900}
                  loading="lazy"
                  className="w-full object-contain"
                />
              </div>

              {/* Flowers */}
              <div className="pointer-events-none absolute -right-3 top-2 -z-10 w-[108%] max-w-[440px] select-none sm:-right-10 sm:-top-2 sm:max-w-[630px] lg:max-w-[550px]">
                <motion.div
                  animate={{ rotate: [-0.6, 0.6, -0.6] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/hero/flowers.png"
                    alt=""
                    width={2048}
                    height={2048}
                    loading="lazy"
                    className="w-full object-contain opacity-95"
                  />
                </motion.div>
              </div>

              {/* Main Portrait */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mx-auto w-[104%] sm:w-[102%] lg:w-[88%] xl:w-[92%]"
              >
                <Image
                  src="/hero/profile.png"
                  alt={t("profileImageAlt")}
                  width={1000}
                  height={1300}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_16px_28px_rgba(229,135,176,0.2)] transition-transform duration-500 hover:scale-[1.01]"
                />
              </motion.div>

              {/* Quote Card */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-[-5px] z-25 w-[88%] max-w-[190px] rounded-2xl border border-white/85 bg-white/80 p-3 shadow-[0_12px_32px_rgba(229,135,176,0.15)] backdrop-blur-xl sm:bottom-8 sm:left-[-20px] sm:max-w-[250px] sm:p-4 lg:bottom-4 lg:max-w-[220px] lg:p-3 xl:max-w-[235px]"
              >
                <p className="text-[11px] font-medium leading-relaxed text-[#6B6570] sm:text-xs sm:leading-relaxed">
                  <span className="text-xs font-bold text-pink-500 sm:text-base">
                    “
                  </span>

                  {t("quote1")}

                  <br />

                  {t("quote2")}

                  <span className="text-xs font-bold text-pink-500 sm:text-base">
                    ”
                  </span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="mt-2 flex w-full max-w-[360px] flex-col items-center lg:order-1 lg:col-span-7 lg:mt-0 lg:max-w-none lg:items-start">
            {/* Heading & Role */}
            <div>
              <h1 className="mt-1 text-3xl font-black leading-[1.08] tracking-tight text-[#2D2433] xs:text-4xl sm:mt-2.5 sm:text-5xl lg:text-5xl xl:text-[3.75rem] 2xl:text-[4rem]">
                Dorothea Alexandra{" "}
                <span className="whitespace-nowrap">
                  Manuputty,{" "}
                  <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                    S.Ds
                  </span>
                </span>
              </h1>

              <p className="mt-2 text-base font-bold tracking-wide text-pink-600 sm:text-lg lg:text-lg xl:text-xl">
                {t("roleSubtitle")}
              </p>
            </div>

            {/* Availability */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1 shadow-2xs backdrop-blur-md sm:mt-4 sm:px-4 sm:py-1.5 lg:mt-3 lg:px-3.5 lg:py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>

              <p className="text-[11px] font-bold tracking-wide text-pink-600 sm:text-xs lg:text-[11px]">
                {t("availableStatus")}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="mx-auto mt-3 max-w-[350px] text-xs leading-relaxed text-[#6B6570] sm:mt-4 sm:max-w-xl sm:text-base sm:leading-relaxed lg:mx-0 lg:max-w-lg lg:text-sm xl:text-base">
              {t("heroDescription")}
            </p>

            {/* Information Rows */}
            <div className="mt-3.5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-[#6B6570] sm:gap-x-5 sm:text-sm lg:mt-3 lg:justify-start lg:gap-x-4 lg:gap-y-1 lg:text-xs">
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0 text-pink-500 lg:h-3.5 lg:w-3.5" />
                <span>{t("location")}</span>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 shrink-0 text-pink-500 lg:h-3.5 lg:w-3.5" />
                <span>{t("remoteWork")}</span>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <Globe className="h-4 w-4 shrink-0 text-pink-500 lg:h-3.5 lg:w-3.5" />
                <span>{t("relocation")}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 w-full sm:mt-7 lg:mt-5 lg:w-auto">
              <div className="flex w-full items-center justify-center gap-3 lg:justify-start">
                {/* VIEW DESIGN */}
                <Button
                  href="#portfolio"
                  className="!flex !w-full !max-w-[170px] !items-center !justify-center !gap-2 !rounded-2xl !px-3 !py-3 text-xs shadow-md shadow-pink-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/15 active:scale-[0.98] sm:!max-w-[190px] sm:!px-5 sm:!py-3.5 sm:!text-sm lg:!max-w-[170px] lg:!px-5 lg:!py-3 lg:!text-xs xl:!max-w-[190px] xl:!text-sm"
                >
                  <Palette
                    className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                    strokeWidth={2.2}
                  />

                  <span className="whitespace-nowrap">
                    View Design
                  </span>
                </Button>

                {/* VIEW REELS */}
                <Button
                  href="#reels"
                  className="!flex !w-full !max-w-[170px] !items-center !justify-center !gap-2 !rounded-2xl !border !border-[#8B4B68] !bg-[#8B4B68] !px-3 !py-3 text-xs !text-white shadow-md shadow-[#8B4B68]/10 transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#753D57] hover:shadow-lg active:scale-[0.98] sm:!max-w-[190px] sm:!px-5 sm:!py-3.5 sm:!text-sm lg:!max-w-[170px] lg:!px-5 lg:!py-3 lg:!text-xs xl:!max-w-[190px] xl:!text-sm"
                >
                  <Clapperboard
                    className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                    strokeWidth={2.2}
                  />

                  <span className="whitespace-nowrap">
                    View Reels
                  </span>
                </Button>
              </div>
            </div>

            {/* STATISTICS */}
            <div className="mt-8 w-full sm:mt-10 lg:mt-6">
              <div className="flex w-full flex-nowrap items-center justify-center gap-2.5 sm:gap-4 lg:justify-start lg:gap-3">
                {[
                  { n: 50, l: t("statProjects") },
                  { n: 8, l: t("statBrands") },
                  { n: 4, l: t("statYears") },
                  { n: 200, l: t("statAssets") },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="relative flex aspect-square w-[72px] shrink-0 flex-col items-center justify-center rounded-[18px] bg-gradient-to-br from-[#D92F75] via-[#E85D8E] to-[#F6A6C3] p-[2.5px] shadow-[0_8px_26px_rgba(232,93,142,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(232,93,142,0.28)] sm:w-[88px] lg:w-[82px] xl:w-[88px]"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-[16px] bg-[#FDF1F6] px-2">
                      <h3 className="text-lg font-extrabold tracking-tight text-[#B04F78] sm:text-xl lg:text-xl xl:text-2xl">
                        <Counter end={s.n} suffix="+" />
                      </h3>

                      <p className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase tracking-tight text-[#B04F78] sm:text-[9px] lg:text-[9px] xl:text-[10px]">
                        {s.l}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="mt-6 flex flex-col items-center justify-center lg:mt-2">
        <button
          onClick={() => scrollToSection("portfolio")}
          className="group flex cursor-pointer flex-col items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B8590] transition-colors hover:text-pink-600"
          aria-label={t("scrollToPortfolioAria")}
        >
          <span>{t("scroll")}</span>

          <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-pink-200/90 bg-white/80 p-1 shadow-2xs backdrop-blur-xs">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-pink-500"
            />
          </div>
        </button>
      </div>
    </section>
  );
}