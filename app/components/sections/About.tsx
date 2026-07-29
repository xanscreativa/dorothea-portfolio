"use client";

import Image from "next/image";
import FadeUp from "../animation/FadeUp";

const specialties = [
  "Brand Identity",
  "Social Media Design",
  "Motion Graphics",
  "Video Editing",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-pink-100/60 bg-gradient-to-b from-[#FFFDFC] via-[#FFFFFF] to-[#FFF7FB] pt-14 sm:pt-20 lg:pt-28 pb-24 sm:pb-36 lg:pb-44 text-[#2D2433]"
    >
      {/* Tamed Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-28 top-12 h-64 w-64 rounded-full bg-pink-100/40 blur-[90px] sm:-left-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 bottom-12 h-64 w-64 rounded-full bg-rose-100/35 blur-[90px] sm:-right-44 sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

      <div className="relative mx-auto grid w-[88%] max-w-7xl items-center gap-10 sm:w-[92%] sm:gap-14 lg:grid-cols-12 lg:gap-16">
        
        {/* ================= LEFT COLUMN: Portrait & Experience Card ================= */}
        <div className="lg:col-span-5 mb-6 sm:mb-8 lg:mb-0">
          <div className="relative mx-auto max-w-[280px] xs:max-w-[310px] sm:max-w-md lg:max-w-none">
            
            {/* Reveal #1: Embedded Portrait Frame */}
            <FadeUp delay={0.1}>
              <div className="relative rounded-[24px] sm:rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-white via-pink-50/60 to-pink-100/30 border border-pink-200/80 shadow-[0_20px_50px_rgba(233,106,152,0.1)]">
                
                {/* Subtle Decorative Ambient Ring */}
                <div className="pointer-events-none absolute -inset-2.5 sm:-inset-3 rounded-[30px] sm:rounded-[50px] border border-pink-200/50 opacity-70" />

                {/* Inner Image Container */}
                <div className="relative overflow-hidden rounded-[18px] bg-pink-50/50 sm:rounded-[36px]">
                  {/* Soft Corner Accent Lines */}
                  <div className="pointer-events-none absolute left-3 top-3 z-10 h-3.5 w-3.5 border-l-2 border-t-2 border-pink-300/70 sm:h-5 sm:w-5" />
                  <div className="pointer-events-none absolute right-3 top-3 z-10 h-3.5 w-3.5 border-r-2 border-t-2 border-pink-300/70 sm:h-5 sm:w-5" />

                  <Image
                    src="/hero/profile.png"
                    alt="Dorothea Alexandra Manuputty, S.Ds"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </FadeUp>

            {/* Reveal #2: Floating Experience Card */}
            <FadeUp delay={0.18}>
              <div className="absolute -bottom-5 -right-2 z-20 rounded-2xl border border-white/90 bg-white/95 p-3.5 shadow-[0_12px_40px_rgba(233,106,152,0.18)] backdrop-blur-xl sm:-right-6 sm:bottom-8 sm:rounded-3xl sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-rose-400 text-white shadow-md shadow-pink-500/25 sm:h-12 sm:w-12">
                    <span className="text-base font-black tracking-tight sm:text-xl">4+</span>
                  </div>
                  <div className="pr-1 text-left">
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-600 sm:text-xs">
                      EXPERIENCE
                    </p>
                    <p className="text-xs font-bold text-[#2D2433] sm:text-sm">
                      Years Crafting <br className="hidden sm:block" /> Visual Stories
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: Biography & Details ================= */}
        <div className="lg:col-span-7">
          <div>
            
            {/* Reveal #3: Category Sub-tag */}
            <FadeUp delay={0.25}>
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-2xs mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                  GET TO KNOW ME
                </span>
              </div>
            </FadeUp>

            {/* Reveal #4: Main Title */}
            <FadeUp delay={0.32}>
              <h2 className="mt-2 text-2xl font-black leading-[1.1] tracking-tight text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-[2.75rem]">
                Dorothea Alexandra <br className="hidden sm:block" />
                Manuputty, <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">S.Ds</span>
              </h2>
            </FadeUp>

            {/* Reveal #5: Rewritten Paragraphs */}
            <FadeUp delay={0.4}>
              <div className="mt-4 sm:mt-6 space-y-3.5 max-w-2xl text-xs sm:text-base leading-relaxed sm:leading-relaxed text-[#6B6570]">
                <p>
                  I’m a Graphic Designer and Video Editor with hands-on experience creating visual content across brand identity, social media design, motion graphics, and video production.
                </p>
                <p>
                  I specialize in transforming complex ideas into clear, engaging, and visually compelling stories that communicate effectively and leave a lasting impression.
                </p>
              </div>
            </FadeUp>

            {/* Reveal #6: Location & Availability Info */}
            <FadeUp delay={0.48}>
              <div className="mt-6 grid gap-4 border-t border-pink-100/80 pt-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 sm:pt-7">
                
                {/* Based In */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 border border-pink-200/70 text-pink-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">
                      Based In
                    </p>
                    <h4 className="mt-0.5 text-sm font-bold text-[#2D2433] sm:text-lg">
                      Pekanbaru, Indonesia
                    </h4>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 border border-pink-200/70 text-pink-600">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-600" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">
                      Availability
                    </p>
                    <h4 className="mt-0.5 text-sm font-bold text-[#2D2433] sm:text-lg">
                      Full-Time &amp; Freelance
                    </h4>
                  </div>
                </div>

              </div>
            </FadeUp>

            {/* Reveal #7: Specialties Chips */}
            <FadeUp delay={0.56}>
              <div className="mt-6 sm:mt-7">
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs">
                  Specialties
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2.5 sm:gap-3">
                  {specialties.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-pink-200/70 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#2D2433] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400 hover:bg-pink-50/70 hover:text-pink-600 hover:shadow-sm hover:shadow-pink-500/10 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Reveal #8: Primary & Secondary CTA Buttons */}
            <FadeUp delay={0.64}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 sm:mt-10">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-md shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 sm:w-auto active:scale-98"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-pink-200/80 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-[#2D2433] shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50/50 hover:text-pink-600 sm:w-auto active:scale-98"
                >
                  Download CV / Resume
                </a>
              </div>
            </FadeUp>

          </div>
        </div>

      </div>
    </section>
  );
}