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

      {/* HEADER */}
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-10 lg:pt-32">

        {/* BACK */}
        <div className="mb-10 sm:mb-12">
          <Link
            href="/portfolio/brand-identity"
            className="inline-flex items-center gap-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6570] transition-colors hover:text-pink-600 sm:text-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO BRAND IDENTITY
          </Link>
        </div>

        {/* TITLE */}
        <div className="max-w-4xl">

          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-pink-600 sm:text-xs">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#2D2433] sm:mt-4 sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

        </div>

        {/* INFO */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-pink-100 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-8 sm:pt-7">

          <div>
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500">
              Client
            </p>

            <p className="mt-1.5 text-xs font-semibold text-[#2D2433] sm:text-sm">
              {project.details.client}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500">
              Industry
            </p>

            <p className="mt-1.5 text-xs font-semibold text-[#2D2433] sm:text-sm">
              {project.details.industry}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-pink-500">
              Role
            </p>

            <p className="mt-1.5 text-xs font-semibold text-[#2D2433] sm:text-sm">
              {project.details.role}
            </p>
          </div>

        </div>

      </div>

      {/* BIG IDEA */}
      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10">

        <div className="max-w-3xl">

          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-pink-600 sm:text-xs">
            Big Idea
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#6B6570] sm:mt-5 sm:text-lg">
            {project.bigIdea ?? project.overview}
          </p>

        </div>

      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24 lg:px-10">

        <div className="space-y-6 sm:space-y-10">

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