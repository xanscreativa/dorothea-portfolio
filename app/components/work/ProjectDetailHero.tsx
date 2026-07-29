"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioCollection } from "@/app/data/portfolio";

interface Props {
  project: PortfolioCollection;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectDetailHero({ project }: Props) {
  const totalImages = project.items.reduce(
    (count, item) => count + item.images.length,
    0
  );

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-100 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-rose-100 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500">
            {project.category}
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#2D2433] sm:text-6xl md:text-7xl lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-[#6B6570]">
            {project.description}
          </p>

          {/* Stats */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            <div className="rounded-[24px] border border-pink-100 bg-white p-6 shadow-[0_15px_40px_rgba(45,36,51,.06)]">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
                Collection
              </p>

              <p className="mt-4 text-lg font-semibold text-[#2D2433]">
                {project.title}
              </p>
            </div>

            <div className="rounded-[24px] border border-pink-100 bg-white p-6 shadow-[0_15px_40px_rgba(45,36,51,.06)]">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
                Projects
              </p>

              <p className="mt-4 text-4xl font-black text-[#2D2433]">
                {project.items.length}
              </p>
            </div>

            <div className="rounded-[24px] border border-pink-100 bg-white p-6 shadow-[0_15px_40px_rgba(45,36,51,.06)]">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
                Images
              </p>

              <p className="mt-4 text-4xl font-black text-[#2D2433]">
                {totalImages}
              </p>
            </div>

          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 overflow-hidden rounded-[40px] shadow-[0_40px_120px_rgba(45,36,51,.12)]"
        >
          <Image
            src={project.cover}
            alt={project.title}
            width={1800}
            height={1200}
            priority
            className="h-[460px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[640px] lg:h-[720px]"
          />
        </motion.div>

      </div>
    </section>
  );
}