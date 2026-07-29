"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { PortfolioCollection } from "@/app/data/portfolio";

interface Props {
  project: PortfolioCollection;
}

export default function PortfolioCard({
  project,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-[34px] bg-white shadow-[0_20px_60px_rgba(28,22,33,.06)]"
    >
      <Link href={`/work/${project.slug}`}>

        <div className="relative aspect-[4/3] overflow-hidden">

          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2433]/80 via-[#2D2433]/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

            <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-[#2D2433] backdrop-blur">

              Explore Collection

            </span>

          </div>

        </div>

        <div className="space-y-5 p-8">

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">

              {project.category}

            </span>

            <span className="text-sm text-[#8E8896]">

              {project.items.length} Projects

            </span>

          </div>

          <div>

            <h3 className="text-3xl font-bold text-[#2D2433]">

              {project.title}

            </h3>

            <p className="mt-4 leading-8 text-[#6B6570]">

              {project.description}

            </p>

          </div>

          <div className="flex items-center gap-3 font-semibold text-[#2D2433] transition group-hover:text-pink-500">

            View Collection

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </div>

        </div>

      </Link>
    </motion.article>
  );
}