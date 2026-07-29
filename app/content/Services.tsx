"use client";

import Link from "next/link";
import FadeUp from "@/app/components/animation/FadeUp";
import {
  Palette,
  LayoutGrid,
  Video,
  Share2,
  Sparkles,
  Compass,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  href: string;
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Brand Identity",
    category: "Visual Strategy",
    description:
      "Bespoke logo systems, visual guidelines, and brand assets crafted for lasting impression.",
    deliverables: ["Logo Systems", "Brand Books", "Visual Assets"],
    href: "/services/brand-identity",
    icon: Palette,
  },
  {
    title: "Graphic Design",
    category: "Print & Digital",
    description:
      "High-impact marketing collateral, editorial layouts, and digital graphics built to convert.",
    deliverables: ["Editorial Design", "Marketing", "Collateral"],
    href: "/services/graphic-design",
    icon: LayoutGrid,
  },
  {
    title: "Video Editing",
    category: "Post-Production",
    description:
      "Cinematic pacing, sound design, and color grading for commercials, reels, and mini-films.",
    deliverables: ["Shorts & Reels", "Commercials", "Color Grading"],
    href: "/services/video-editing",
    icon: Video,
  },
  {
    title: "Social Media",
    category: "Content & Growth",
    description:
      "Cohesive visual content packages and motion templates engineered for social engagement.",
    deliverables: ["Content Kits", "Templates", "Visual Strategy"],
    href: "/services/social-media",
    icon: Share2,
  },
  {
    title: "Motion Design",
    category: "Animation & 3D",
    description:
      "Dynamic logo reveals, 3D graphics, and kinetic typography that breathe life into brands.",
    deliverables: ["Kinetic Type", "2D/3D Motion", "Logo Reveals"],
    href: "/services/motion-design",
    icon: Sparkles,
  },
  {
    title: "Creative Direction",
    category: "Concept & Film",
    description:
      "End-to-end artistic guidance, campaign concepting, and visual execution across channels.",
    deliverables: ["Campaign Concept", "Art Direction", "Execution"],
    href: "/services/creative-direction",
    icon: Compass,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-pink-100/60 bg-[#FFFDFB] py-16 sm:py-24 lg:py-32 selection:bg-pink-500 selection:text-white"
    >
      {/* Background Soft Glows & Floating Accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-200/50 to-rose-100/30 blur-[120px] sm:-left-52 sm:h-[580px] sm:w-[580px] sm:blur-[190px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-pink-200/40 via-rose-100/30 to-transparent blur-[120px] sm:right-[-180px] sm:h-[580px] sm:w-[580px] sm:blur-[190px]" />

      <div className="relative mx-auto w-[90%] max-w-7xl sm:w-[92%]">
        
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-20">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/90 px-4 py-1.5 border border-pink-200/70 shadow-[0_4px_20px_rgba(244,114,182,0.08)] backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
                SERVICES & CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
              Crafting Visuals That Matter
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#6B6570] font-normal">
              End-to-end design and motion solutions tailored for brands seeking a refined digital presence and lasting aesthetic impact.
            </p>
          </div>
        </FadeUp>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const indexFormatted = String(index + 1).padStart(2, "0");

            return (
              <FadeUp key={service.title} delay={index * 0.08} className="h-full">
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between h-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-pink-200/70 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(45,36,51,0.03)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-pink-400/60 hover:bg-gradient-to-b hover:from-white hover:to-pink-50/20 hover:shadow-[0_24px_50px_rgba(233,106,152,0.14)]"
                >
                  {/* Subtle Top Inner Glow Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* TOP ROW: Icon, Index & Interactive Arrow CTA */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      {/* Upgraded Icon Badge */}
                      <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-pink-50/80 text-pink-500 border border-pink-200/80 transition-all duration-500 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 group-hover:scale-110 group-hover:shadow-md">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 group-hover:rotate-6" />
                      </div>

                      {/* Number Counter */}
                      <span className="text-xs font-mono font-extrabold tracking-wider text-[#A098A8] group-hover:text-pink-600 transition-colors">
                        {indexFormatted} /
                      </span>
                    </div>

                    {/* Interactive Arrow Button with Hidden "Learn More" State */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-pink-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:inline">
                        Explore
                      </span>
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-pink-50/80 text-[#2D2433] border border-pink-200/70 transition-all duration-500 group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white group-hover:shadow-md">
                        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE SECTION: Category, Title & Concise Description */}
                  <div className="relative z-10 mt-6 sm:mt-8">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-pink-500">
                      {service.category}
                    </span>

                    <h3 className="mt-2 text-xl sm:text-2xl font-black tracking-tight text-[#2D2433] transition-colors duration-300 group-hover:text-pink-600">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#6B6570] leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* BOTTOM SECTION: Polished Deliverable Tags */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-pink-100/80 flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-pink-50/70 px-3 py-1 text-[11px] font-semibold text-[#6B6570] border border-pink-100 shadow-[0_2px_8px_rgba(45,36,51,0.01)] transition-all duration-300 group-hover:border-pink-200 group-hover:bg-white group-hover:text-[#2D2433]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}