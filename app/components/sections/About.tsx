"use client";

import Image from "next/image";
import FadeUp from "../animation/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const specialties = [
    t("spec1"),
    t("spec2"),
    t("spec3"),
    t("spec4"),
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] pt-14 sm:pt-20 lg:pt-28 pb-24 sm:pb-36 lg:pb-44 text-[#2D2433]"
    >
      {/* Tamed Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-28 top-12 h-64 w-64 rounded-full bg-pink-100/40 blur-[90px] sm:-left-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 bottom-12 h-64 w-64 rounded-full bg-rose-100/35 blur-[90px] sm:-right-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

      {/* Mobile-only Badge */}
      <div className="block lg:hidden w-[88%] mx-auto mb-6 text-center">
        <FadeUp delay={0.2}>
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
              {t("aboutBadge")}
            </span>
          </div>
        </FadeUp>
      </div>

      <div className="relative mx-auto grid w-[88%] max-w-7xl items-center gap-10 sm:w-[92%] sm:gap-14 lg:grid-cols-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="lg:col-span-5 mb-6 sm:mb-8 lg:mb-0">
          <div className="relative mx-auto max-w-[280px] xs:max-w-[310px] sm:max-w-md lg:max-w-none">
            <FadeUp delay={0.1}>
              <div className="relative rounded-[24px] sm:rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-white via-pink-50/60 to-pink-100/30 border border-pink-200/80 shadow-[0_20px_50px_rgba(233,106,152,0.1)]">
                <div className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-[30px] sm:rounded-[50px] border border-pink-200/50 opacity-70" />
                <div className="relative overflow-hidden rounded-[18px] bg-pink-50/50 sm:rounded-[36px]">
                  <div className="pointer-events-none absolute left-3 top-3 z-10 h-3.5 w-3.5 border-l-2 border-t-2 border-pink-300/70 sm:h-5 sm:w-5" />
                  <div className="pointer-events-none absolute right-3 top-3 z-10 h-3.5 w-3.5 border-r-2 border-t-2 border-pink-300/70 sm:h-5 sm:w-5" />
                  <Image
                    src="/hero/profile.png"
                    alt="Profile"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="absolute -bottom-5 -right-2 z-20 rounded-2xl border border-white/90 bg-white/95 p-3.5 shadow-[0_12px_40px_rgba(233,106,152,0.18)] backdrop-blur-xl sm:-right-6 sm:bottom-8 sm:rounded-3xl sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-rose-400 text-white shadow-md shadow-pink-500/25 sm:h-12 sm:w-12">
                    <span className="text-base font-black tracking-tight sm:text-xl">4+</span>
                  </div>
                  <div className="pr-1 text-left">
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-600 sm:text-xs">
                      {t("aboutExpTitle")}
                    </p>
                    <p className="text-xs font-bold text-[#2D2433] sm:text-sm">
                      {t("aboutExpSubtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div>
            <FadeUp delay={0.25}>
              <div className="hidden lg:block">
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-2xs mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                    {t("aboutBadge")}
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-2 sm:mt-4 space-y-3.5 max-w-2xl text-xs sm:text-base leading-relaxed sm:leading-relaxed text-[#6B6570]">
                <p>{t("aboutDesc1")}</p>
                <p>{t("aboutDesc2")}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.48}>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 border-t border-pink-100/80 pt-5 sm:mt-8 sm:pt-7">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 border border-pink-200/70 text-pink-600">
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">{t("basedIn")}</p>
                    <h4 className="mt-0.5 text-xs sm:text-lg font-bold text-[#2D2433]">{t("aboutLocation")}</h4>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 border border-pink-200/70 text-pink-600">
                    <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-600" /></span>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">{t("availability")}</p>
                    <h4 className="mt-0.5 text-xs sm:text-lg font-bold text-[#2D2433]">{t("availabilityStatus")}</h4>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Specialties (Updated: Smaller padding and font) */}
            <FadeUp delay={0.56}>
              <div className="mt-6 sm:mt-7">
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">
                  {t("specialtiesTitle")}
                </p>
                <div className="mt-2.5 flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-2 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {specialties.map((item) => (
                    <span
                      key={item}
                      className="shrink-0 inline-flex items-center rounded-full border border-pink-200/70 bg-white px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#2D2433] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400 hover:bg-pink-50/70 hover:text-pink-600 hover:shadow-sm hover:shadow-pink-500/10 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.64}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:mt-10">
                <a href="#contact" className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-3.5 sm:px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-md shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 sm:w-auto active:scale-98 text-center">{t("letsConnect")}</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-full border border-pink-200/80 bg-white px-3.5 sm:px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-[#2D2433] shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50/50 hover:text-pink-600 sm:w-auto active:scale-98 text-center">{t("downloadCv")}</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}