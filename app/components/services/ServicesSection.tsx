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
      "Merancang identitas visual yang unik dan berkesan untuk memperkuat karakter inti merek kamu. Dari pembuatan logo hingga panduan gaya yang konsisten.",
    offerings: ["Logo Design & Grid System", "Visual Identity Guidelines", "Color Palette & Typography", "Brand Asset Library"],
    deliverables: ["Vector Logo Files (AI, SVG)", "Brand Guideline PDF", "Social Media Kits", "Stationery Assets"],
  },
  {
    number: "02",
    title: "Graphic Design",
    tagline: "Eye-catching materials tailored for digital and print media.",
    description:
      "Menyediakan solusi desain grafis serbaguna untuk kebutuhan promosi digital maupun cetak agar pesan brand kamu tersampaikan dengan jelas.",
    offerings: ["Social Media Graphics", "Marketing & Promotional Ads", "Poster & Banner Design", "Print & Editorial Media"],
    deliverables: ["High-Res PNG/JPG Packs", "Print-Ready PDF Files", "Editable Source Files"],
  },
  {
    number: "03",
    title: "Video Editing",
    tagline: "Transforming raw footage into compelling visual stories.",
    description:
      "Mengolah materi video mentah menjadi tontonan yang hidup melalui transisi halus, ritme pacing yang pas, hingga pemrosesan audio yang jernih.",
    offerings: ["Commercial & Promo Editing", "Short-Form Content (Reels/TikTok)", "Color Grading & Correction", "Audio Post-Production"],
    deliverables: ["Full HD / 4K Render Files", "Multi-Format Cuts (16:9, 9:16)", "Project Sound Mix"],
  },
  {
    number: "04",
    title: "Illustration",
    tagline: "Custom artwork crafted to elevate your brand storytelling.",
    description:
      "Membuat karya seni dan ilustrasi kustom yang menambah nilai estetika serta keunikan visual pada kampanye atau produk kamu.",
    offerings: ["Custom Digital Artwork", "Vector Illustration", "Character Design", "Editorial & Storyboard Art"],
    deliverables: ["High-Res Vector & Raster Assets", "Layered Source Files (PSD/AI)"],
  },
  {
    number: "05",
    title: "Motion Design",
    tagline: "Bringing static visuals to life with dynamic motion.",
    description:
      "Menghidupkan elemen visual statis menjadi animasi bergerak yang dinamis untuk menarik perhatian audiens secara instan.",
    offerings: ["Logo Animation", "Explainer Motion Graphics", "UI/UX Micro-interactions", "Visual Effects (VFX)"],
    deliverables: ["Looping MP4/GIF Files", "Lottie/JSON Animations", "Alpha Channel Transparent Video"],
  },
  {
    number: "06",
    title: "Creative Direction",
    tagline: "Strategic visual leadership and cohesive aesthetic vision.",
    description:
      "Mengarahkan konsep visual secara menyeluruh untuk memastikan semua aset kreatif selaras dengan strategi dan tujuan utama brand.",
    offerings: ["Visual Concept & Moodboarding", "Campaign Direction", "Brand Aesthetic Strategy", "Art Direction"],
    deliverables: ["Creative Brief & Moodboard PDF", "Visual Strategy Blueprint", "Campaign Execution Guide"],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#0D0C10] py-32 text-white">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Header */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500 font-bold">
            SERVICES & CAPABILITIES
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Strategic visual solutions built to scale your creative output.
          </h2>
        </FadeUp>

        {/* Agency-style Accordion / List */}
        <div className="mt-16 space-y-6">
          {servicesData.map((service, idx) => {
            const isOpen = activeService === idx;

            return (
              <FadeUp key={service.number} delay={idx * 0.1}>
                <div
                  className={`group rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "border-pink-500/50 bg-white/[0.06] shadow-[0_20px_50px_rgba(233,106,152,0.1)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  {/* Clickable Header Bar */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-8 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-xl font-mono text-pink-500/60 font-bold">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400 font-medium hidden md:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                      <span className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="border-t border-white/10 p-8 pt-6 transition-all duration-300">
                      <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                        {service.description}
                      </p>

                      <div className="mt-8 grid gap-8 md:grid-cols-2">
                        {/* Core Offerings */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold mb-4">
                            Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {service.offerings.map((offering) => (
                              <li key={offering} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                                {offering}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold mb-4">
                            Typical Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliv) => (
                              <li key={deliv} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="text-pink-400">✓</span>
                                {deliv}
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