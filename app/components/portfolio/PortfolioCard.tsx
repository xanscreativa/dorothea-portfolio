"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioCollection } from "@/app/data/portfolio";

interface PortfolioCardProps {
  project: PortfolioCollection;
  onOpen?: (project: PortfolioCollection) => void;
}

export default function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group w-full overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_20px_55px_rgba(28,22,33,0.06)] transition-all duration-500"
    >
      <Link
        href={`/work/${project.slug}`}
        onClick={() => onOpen?.(project)}
        className="flex h-full w-full cursor-pointer flex-col text-left"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
          <Image
            src={project.cover}
            alt={project.title}
            width={900}
            height={1200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="px-2 pb-3 pt-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#2D2433]/60">
            {project.category}
          </p>
          <h3 className="mt-3 text-[1.45rem] font-medium leading-[1.05] tracking-[-0.02em] text-[#2D2433] transition-colors duration-500 group-hover:text-[#D86C98] sm:text-[1.55rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B6570] line-clamp-2">
            {project.description}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.26em] text-[#2D2433]/75 transition-all duration-500 group-hover:text-[#D86C98]">
            <span>View Collection</span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
