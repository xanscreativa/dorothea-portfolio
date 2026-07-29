"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import type { PortfolioCollection } from "@/app/data/portfolio";
import Lightbox from "./Lightbox";

interface Props {
  project: PortfolioCollection;
}

const fadeRise = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function ProjectDetailGallery({ project }: Props) {
  // Semua gambar dijadikan satu flat array untuk Lightbox
  const allImages = useMemo(
    () => project.items.flatMap((item) => item.images),
    [project]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project.items.length) {
    return null;
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-pink-500 font-semibold">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
            Selected Visuals
          </h2>

          <div className="mt-14 space-y-16">
            {project.items.map((collectionProject, collectionIndex) => {
              // Menghitung offset index global secara murni tanpa mutasi render
              const previousImagesCount = project.items
                .slice(0, collectionIndex)
                .reduce((acc, item) => acc + item.images.length, 0);

              return (
                <motion.div
                  key={collectionIndex}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeRise}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
                      Project
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[#2D2433] sm:text-3xl">
                      {collectionProject.title}
                    </h3>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {collectionProject.images.map((image, imageIndex) => {
                      const absoluteIndex = previousImagesCount + imageIndex;

                      return (
                        <motion.div
                          whileHover={{ y: -4 }}
                          key={`${image}-${imageIndex}`}
                          onClick={() => openLightbox(absoluteIndex)}
                          className="group relative cursor-pointer overflow-hidden rounded-[28px] bg-[#F8F3F5] shadow-[0_20px_50px_rgba(28,22,33,0.06)]"
                        >
                          <Image
                            src={image}
                            alt={`${collectionProject.title}-${imageIndex}`}
                            width={1200}
                            height={1400}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#2D2433] shadow-md backdrop-blur-md">
                              Expand ↗
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Komponen Bawaan Proyek */}
      <Lightbox
        images={allImages}
        title={project.title}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}