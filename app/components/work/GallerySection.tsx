"use client";

import { motion } from "framer-motion";
import GalleryGrid from "./GalleryGrid";

interface Props {
  title: string;

  images: string[];

  startIndex: number;

  onImageClick: (index: number) => void;
}

const fadeRise = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .55,
    },
  },
};

export default function GallerySection({
  title,
  images,
  startIndex,
  onImageClick,
}: Props) {

  const items = images.map((image, index) => ({
    image,
    title,
    index: startIndex + index,
  }));

  return (
    <motion.div
      variants={fadeRise}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: .15,
      }}
      className="space-y-7"
    >
      <div>

        <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
          Project
        </p>

        <h3 className="mt-3 text-3xl font-semibold text-[#2D2433]">
          {title}
        </h3>

      </div>

      <GalleryGrid
        items={items}
        onImageClick={onImageClick}
      />

    </motion.div>
  );
}