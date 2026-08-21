"use client";

import { useState } from "react";
import FadeUp from "../animation/FadeUp";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Identity",
    tagline: "Building cohesive, memorable, and scalable brand foundations.",
    description:
      "Merancang identitas visual yang unik dan berkesan untuk memperkuat karakter inti merek kamu.",
    offerings: ["Logo & Grid System", "Visual Guidelines", "Color & Typography"],
    deliverables: ["Vector Logo (AI, SVG)", "Guideline PDF", "Social Kits"],
  },
  {
    number: "02",
    title: "Graphic Design",
    tagline: "Eye-catching materials tailored for digital and print media.",
    description:
      "Menyediakan solusi desain grafis serbaguna untuk kebutuhan promosi digital maupun cetak.",
    offerings: ["Social Media Graphics", "Marketing Ads", "Poster & Banner"],
    deliverables: ["PNG/JPG Packs", "Print-Ready PDF", "Source Files"],
  },
  {
    number: "03",
    title: "Video Editing",
    tagline: "Transforming raw footage into compelling visual stories.",
    description:
      "Mengolah materi video mentah menjadi tontonan yang hidup melalui transisi dan pacing yang pas.",
    offerings: ["Commercial Editing", "Short-Form Content", "Color Grading"],
    deliverables: ["HD/4K Renders", "Multi-Format Cuts", "Sound Mix"],
  },
  {
    number: "04",
    title: "Illustration",
    tagline: "Custom artwork crafted to elevate your brand storytelling.",
    description:
      "Membuat karya seni dan ilustrasi kustom yang menambah nilai estetika serta keunikan visual.",
    offerings: ["Custom Artwork", "Vector Illustration", "Character Design"],
    deliverables: ["Vector/Raster Assets", "Layered PSD/AI"],
  },
  {
    number: "05",
    title: "Motion Design",
    tagline: "Bringing static visuals to life with dynamic motion.",
    description:
      "Menghidupkan elemen visual statis menjadi animasi bergerak yang dinamis.",
    offerings: ["Logo Animation", "Explainer Motion", "Micro-interactions"],
    deliverables: ["MP4/GIF Loops", "Lottie/JSON", "Alpha Video"],
  },
  {
    number: "06",
    title: "Creative Direction",
    tagline: "Strategic visual leadership and cohesive aesthetic vision.",
    description:
      "Mengarahkan konsep visual secara menyeluruh agar selaras dengan strategi brand.",
    offerings: ["Visual Concept", "Campaign Direction", "Brand Strategy"],
    deliverables: ["Creative Brief PDF", "Strategy Blueprint"],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#0D0C10] py-16 sm:py-32 text-white">
      <div className="mx-auto w-[94%] sm:w-[92%] max-w-7xl">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-16">
            <div>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.3em] text-pink-500 font-bold">
                SERVICES & CAPABILITIES
              </p>
              <h2 className="mt-2 sm:mt-4 max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Strategic visual solutions built to scale your creative output.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm">
              Tap any service to explore detailed capabilities and deliverables.
            </p>
          </div>
        </FadeUp>

        {/* 2-COLUMN GRID FOR MOBILE & DESKTOP */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 items-start">
          {servicesData.map((service, idx) => {
            const isOpen = activeService === idx;

            return (
              <FadeUp key={service.number} delay={idx * 0.04}>
                <div
                  className={`group rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-pink-500/50 bg-white/[0.07] shadow-[0_15px_40px_rgba(233,106,152,0.12)] col-span-2 sm:col-span-1"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  {/* Clickable Header Bar */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-3 sm:p-7 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-6 min-w-0">
                      <span className="text-xs sm:text-xl font-mono text-pink-500/70 font-bold shrink-0">
                        {service.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-2xl font-bold text-white leading-tight truncate">
                          {service.title}
                        </h3>
                        <p className="mt-0.5 text-[9px] sm:text-sm text-gray-400 font-medium line-clamp-1">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-6 w-6 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-transform duration-300 group-hover:scale-110 ml-2">
                      <span className={`text-xs sm:text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="border-t border-white/10 p-3 pt-2.5 sm:p-7 sm:pt-6 transition-all duration-300">
                      <p className="text-gray-300 text-[11px] sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-3.5 sm:mt-6 grid gap-3 sm:gap-6 md:grid-cols-2">
                        {/* Core Offerings */}
                        <div>
                          <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-400 font-bold mb-1.5 sm:mb-3">
                            Capabilities
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {service.offerings.map((offering) => (
                              <li key={offering} className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shrink-0" />
                                <span className="leading-tight">{offering}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-400 font-bold mb-1.5 sm:mb-3">
                            Deliverables
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {service.deliverables.map((deliv) => (
                              <li key={deliv} className="flex items-center gap-2 text-[11px] sm:text-sm text-gray-300">
                                <span className="text-pink-400 text-xs shrink-0">✓</span>
                                <span className="leading-tight">{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}