"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import Lightbox from "./Lightbox";
import { Project } from "@/app/types/project";

interface Props {
  project: Project;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WorkGallery({ project }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const galleryItems = (project.gallery ?? []).map((image) =>
    typeof image === "string" ? { url: image } : image
  );

  return (
    <>
      <section id="gallery" className="bg-[#FFF8FA] py-12 sm:py-24">
        <div className="mx-auto w-[90%] sm:w-[92%] max-w-7xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-pink-500">
            Gallery
          </p>

          <h2 className="mt-2 sm:mt-4 text-3xl sm:text-5xl font-black text-[#2D2433]">
            Project Showcase
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-8 sm:mt-16 columns-1 gap-4 sm:gap-6 md:columns-2"
          >
            {galleryItems.map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="mb-4 sm:mb-6 break-inside-avoid"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-[24px] sm:rounded-[32px]"
                >
                  <Image
                    src={image.url}
                    alt={project.title}
                    width={1000}
                    height={1200}
                    className="w-full transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/40">
                    <div className="translate-y-4 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={galleryItems.map((img) => img.url)}
        currentIndex={activeIndex ?? 0}
        isOpen={activeIndex !== null}
        title={project.title}
        onClose={() => setActiveIndex(null)}
        onNext={() =>
          setActiveIndex((prev) =>
            prev === null ? 0 : (prev + 1) % galleryItems.length
          )
        }
        onPrev={() =>
          setActiveIndex((prev) =>
            prev === null
              ? 0
              : (prev - 1 + galleryItems.length) % galleryItems.length
          )
        }
      />
    </>
  );
}