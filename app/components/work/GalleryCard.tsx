"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  index: number;
  onClick: () => void;
}

export default function GalleryCard({
  image,
  title,
  index,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="group overflow-hidden rounded-[28px] bg-[#F8F3F5] shadow-[0_20px_50px_rgba(28,22,33,.06)]"
    >
      <Image
        src={image}
        alt={`${title}-${index}`}
        width={1400}
        height={1600}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
    </motion.button>
  );
}