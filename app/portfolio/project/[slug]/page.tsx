"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getProjectBySlug } from "../../[slug]/portfolio-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectDetailPage() {
  const { t } = useLanguage();

  const params = useParams();
  const slug = params?.slug as string;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const images = project.projectImages ?? project.posts;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#2D2433] selection:bg-pink-100 selection:text-pink-900">

      {/* =========================
          HEADER
      ========================== */}
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:px-10 lg:pt-32">

        {/* BACK BUTTON */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/portfolio/brand-identity"
            className="inline-flex items-center gap-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6570] transition-colors hover:text-pink-600 sm:text-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO BRAND IDENTITY
          </Link>
        </div>

        {/* CATEGORY */}
        <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
          {project.category}
        </span>

        {/* TITLE */}
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#2D2433] sm:mt-5 sm:text-6xl lg:text-7xl">
          {project.title}
        </h1>

        {/* =========================
            PROJECT INFO
        ========================== */}
        <div className="mt-8 grid grid-cols-3 border-y border-pink-100 sm:mt-10">

          {/* CLIENT */}
          <div className="border-r border-pink-100 py-4 pr-3 sm:py-5 sm:pr-6">
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">
              Client
            </p>

            <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">
              {project.details.client}
            </p>
          </div>

          {/* INDUSTRY */}
          <div className="border-r border-pink-100 px-3 py-4 sm:px-6 sm:py-5">
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">
              Industry
            </p>

            <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">
              {project.details.industry}
            </p>
          </div>

          {/* ROLE */}
          <div className="py-4 pl-3 sm:py-5 sm:pl-6">
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-[10px]">
              Role
            </p>

            <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[#2D2433] sm:text-sm">
              {project.details.role}
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          BIG IDEA
      ========================== */}
      <section className="mx-auto max-w-6xl px-6 pb-5 pt-2 sm:px-8 sm:pb-7 sm:pt-3 lg:px-10">

        <div className="max-w-3xl">

          {/* SECTION TITLE */}
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
            BIG IDEA
          </span>

          {/* BIG IDEA TEXT */}
          <p className="mt-3 text-base leading-relaxed text-[#6B6570] sm:mt-4 sm:text-lg lg:text-xl">
            {project.bigIdea || project.overview}
          </p>

        </div>

      </section>


      {/* =========================
          DESIGN APPROACH & CHALLENGE
      ========================== */}
      <section className="mx-auto max-w-6xl px-6 py-5 sm:px-8 sm:py-7 lg:px-10">

        <div className="max-w-3xl space-y-6">

          {/* DESIGN APPROACH (OVERVIEW) */}
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
              DESIGN APPROACH
            </span>

            <p className="mt-3 text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base lg:text-lg">
              {project.overview}
            </p>
          </div>

          {/* CHALLENGE */}
          {project.challenge && (
            <div className="pt-2">
              <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
                CHALLENGE
              </span>

              <p className="mt-3 text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base lg:text-lg">
                {project.challenge}
              </p>
            </div>
          )}

        </div>

      </section>


      {/* =========================
          BRAND DEVELOPMENT
      ========================== */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-5 sm:px-8 sm:pb-20 sm:pt-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-4 flex items-center justify-between sm:mb-6">

          {/* SECTION TITLE */}
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-600 sm:px-3.5 sm:py-2 sm:text-[10px]">
            BRAND DEVELOPMENT
          </span>

          {/* IMAGE COUNT */}
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#A39BA4] sm:text-[10px]">
            {images.length.toString().padStart(2, "0")}{" "}
            {images.length === 1 ? "IMAGE" : "IMAGES"}
          </span>

        </div>


        {/* =========================
            IMAGES GALLERY
        ========================== */}
        <div className="space-y-5 sm:space-y-8">

          {images.map((image, index) => (

            <div
              key={`${image.src}-${index}`}
              className="relative w-full overflow-hidden rounded-2xl bg-pink-50"
            >

              <Image
                src={image.src}
                alt={image.alt || `${project.title} ${index + 1}`}
                width={1920}
                height={1080}
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="h-auto w-full object-cover"
              />

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}