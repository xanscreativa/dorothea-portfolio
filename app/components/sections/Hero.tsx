"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animation/FadeUp";
import Counter from "@/components/ui/Counter";
import useParallax from "@/components/animation/useParallax";
import { MapPin, Briefcase, Globe, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // <-- Import useLanguage

export default function Hero() {
  const bgOffset = useParallax(0.12);
  const { t } = useLanguage(); // <-- Panggil fungsi terjemahan

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-[#FFFFFF] pt-16 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 lg:pb-28"
    >
      {/* Background Texture & Concentrated Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Reduced & Tighter Secondary Ambient Lighting */}
      <div
        className="pointer-events-none absolute -left-12 top-20 h-48 w-48 rounded-full bg-pink-100/60 blur-[100px] sm:h-80 sm:w-80"
        style={{ transform: `translateY(${bgOffset}px)` }}
      />
      <div className="pointer-events-none absolute right-0 top-16 h-64 w-64 rounded-full bg-pink-200/25 blur-[100px] sm:right-10 sm:h-[420px] sm:w-[420px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:text-left">
          
          {/* ================= VISUAL PROFILE ================= */}
          <div className="relative w-full max-w-[290px] xs:max-w-[320px] sm:max-w-md lg:max-w-none lg:order-2 lg:col-span-5 pt-4 sm:pt-8 lg:pt-0 mb-6 lg:mb-0">
            <div className="relative mx-auto">
              
              {/* Focused Ambient Glow Directly Behind Portrait */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-300/40 via-pink-200/30 to-pink-100/20 blur-[55px] sm:h-[400px] sm:w-[400px] sm:blur-[80px]" />

              {/* Brush Graphic Layer */}
              <FadeUp delay={0.05}>
                <div className="pointer-events-none absolute -right-4 top-1 -z-10 w-full max-w-[440px] select-none opacity-20 blur-[0.5px] sm:-right-8 sm:-top-2 sm:max-w-[600px]">
                  <Image
                    src="/hero/brush.png"
                    alt=""
                    width={900}
                    height={900}
                    priority
                    className="w-full object-contain"
                  />
                </div>
              </FadeUp>

              {/* Flowers Layer with Gentle Motion */}
              <FadeUp delay={0.1}>
                <div className="pointer-events-none absolute -right-4 top-2 -z-10 w-[110%] max-w-[460px] select-none sm:-right-10 sm:-top-2 sm:max-w-[630px]">
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
                      className="w-full object-contain opacity-95"
                    />
                  </motion.div>
                </div>
              </FadeUp>

              {/* Main Portrait Image Layer */}
              <FadeUp delay={0.15}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mx-auto w-[106%] sm:w-[102%]"
                >
                  <Image
                    src="/hero/profile.png"
                    alt="Dorothea Alexandra Manuputty — Graphic Designer & Video Editor"
                    width={1000}
                    height={1300}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_16px_28px_rgba(229,135,176,0.2)] transition-transform duration-500 hover:scale-[1.01]"
                  />
                </motion.div>
              </FadeUp>

              {/* Glassmorphic Floating Quote Card */}
              <FadeUp delay={0.22}>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-[-8px] z-25 w-[88%] max-w-[190px] rounded-2xl border border-white/85 bg-white/80 p-3 shadow-[0_12px_32px_rgba(229,135,176,0.15)] backdrop-blur-xl sm:bottom-8 sm:left-[-20px] sm:max-w-[250px] sm:p-4.5"
                >
                  <p className="text-[11px] font-medium leading-relaxed text-[#6B6570] sm:text-xs sm:leading-relaxed">
                    <span className="text-xs font-bold text-pink-500 sm:text-base">“</span>
                    {t("quote1")}<br />
                    {t("quote2")}
                    <span className="text-xs font-bold text-pink-500 sm:text-base">”</span>
                  </p>
                </motion.div>
              </FadeUp>

            </div>
          </div>

          {/* ================= MAIN CONTENT AREA ================= */}
          <div className="w-full mt-2 lg:mt-0 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start">
            
            {/* Heading & Role */}
            <FadeUp delay={0.25}>
              <h1 className="mt-1 text-3xl font-black leading-[1.08] tracking-tight text-[#2D2433] xs:text-4xl sm:mt-2.5 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Dorothea Alexandra Manuputty, <br />
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">S.Ds</span>
              </h1>
              <p className="mt-2 text-base font-bold tracking-wide text-pink-600 sm:text-lg lg:text-xl">
                {t("roleSubtitle")}
              </p>
            </FadeUp>

            {/* Availability Status Badge */}
            <FadeUp delay={0.32}>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1 shadow-2xs backdrop-blur-md sm:mt-4 sm:px-4 sm:py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
                </span>
                <p className="text-[11px] font-bold tracking-wide text-pink-600 sm:text-xs">
                  {t("availableStatus")}
                </p>
              </div>
            </FadeUp>

            {/* Value Proposition */}
            <FadeUp delay={0.38}>
              <p className="mx-auto lg:mx-0 mt-3 sm:mt-4 max-w-xl text-xs leading-relaxed text-[#6B6570] sm:text-base sm:leading-relaxed">
                {t("heroDescription")}
              </p>
            </FadeUp>

            {/* Compact Information Rows */}
            <FadeUp delay={0.44}>
              <div className="mt-3.5 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-[#6B6570] sm:text-sm">
                <div className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>{t("location")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>{t("remoteWork")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>{t("relocation")}</span>
                </div>
              </div>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.5}>
              <div className="mt-6 flex w-full items-center justify-center gap-3 sm:w-auto sm:mt-7 sm:justify-start sm:gap-4">
                <div className="flex-1 sm:flex-initial">
                  <Button 
                    href="#portfolio" 
                    className="!py-2.5 !px-6 sm:!py-3.5 sm:!px-8 !text-xs sm:!text-sm flex items-center justify-center w-full shadow-md shadow-pink-500/10 transition-transform active:scale-98"
                  >
                    {t("viewProjects")}
                  </Button>
                </div>
                <div className="flex-1 sm:flex-initial">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download professional resume PDF"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-pink-200/80 bg-white/90 px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-[#2D2433] shadow-xs backdrop-blur-md hover:border-pink-400 hover:bg-pink-50/40 transition-all duration-300 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-pink-600" />
                    <span>{t("downloadResume")}</span>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Statistics Grid */}
            <FadeUp delay={0.58}>
              <div className="mt-8 sm:mt-10 w-full grid grid-cols-4 gap-2 sm:gap-3.5 px-0.5 sm:px-0">
                {[
                  { n: 50, l: t("statProjects") },
                  { n: 8, l: t("statBrands") },
                  { n: 4, l: t("statYears") },
                  { n: 200, l: t("statAssets") },
                ].map((s) => (
                  <div 
                    key={s.l} 
                    className="flex flex-col items-center justify-center min-h-[76px] sm:min-h-[96px] bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl py-3 px-1 sm:py-4 sm:px-2 shadow-[0_4px_16px_rgba(229,135,176,0.06)] transition-all duration-300 hover:border-pink-300 hover:bg-white hover:shadow-[0_8px_24px_rgba(229,135,176,0.14)]"
                  >
                    <h3 className="text-base font-black text-[#2D2433] sm:text-2xl lg:text-3xl tracking-tight">
                      <Counter end={s.n} suffix="+" />
                    </h3>
                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-tight text-[#6B6570] sm:text-xs">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>

        </div>
      </div>

      {/* Minimal Scroll Cue */}
      <FadeUp delay={0.68}>
        <div className="mt-6 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="group flex flex-col items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-[#8B8590] transition-colors hover:text-pink-600 cursor-pointer"
            aria-label="Scroll to portfolio section"
          >
            <span>{t("scroll")}</span>
            <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-pink-200/90 bg-white/80 p-1 shadow-2xs backdrop-blur-xs">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-pink-500"
              />
            </div>
          </button>
        </div>
      </FadeUp>

    </section>
  );
}