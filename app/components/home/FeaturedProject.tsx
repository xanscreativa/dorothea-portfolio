"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="bg-white pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-[92%] max-w-7xl">
        
        {/* Section Header (Judul & Deskripsi Utama) */}
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-pink-500 font-bold">
            Featured Projects
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2D2433]">
            Crafting brands that connect, engage, and grow.
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base lg:text-lg text-[#6B6570] max-w-2xl leading-relaxed">
            From visual identity to social media systems, every project is designed to create a consistent and memorable brand experience.
          </p>
        </div>

        {/* Project Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl sm:rounded-[40px] bg-[#FFF7FA] shadow-[0_20px_50px_rgba(45,36,51,0.06)]"
        >
          <div className="grid items-center lg:grid-cols-2">
            
            {/* Right Image (Tampil di atas pada mobile, di kanan pada desktop) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden order-1 lg:order-2 h-full"
            >
              <Image
                src="/portfolio/jendela-finansial.jpg"
                alt="Jendela Finansial"
                width={1200}
                height={1200}
                className="h-full w-full object-cover min-h-[260px] sm:min-h-[350px]"
              />
            </motion.div>

            {/* Left Content (Tampil di bawah gambar pada mobile, di kiri pada desktop) */}
            <div className="p-6 sm:p-10 lg:p-16 order-2 lg:order-1 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-pink-500 font-bold">
                Case Study
              </span>

              <h3 className="mt-2 sm:mt-3 text-xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#2D2433]">
                Jendela Finansial
              </h3>

              <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-[#6B6570]">
                A complete branding project for an educational financial
                platform, including character design, social media assets,
                YouTube thumbnails, and visual identity.
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 sm:px-4 py-1.5 text-[11px] sm:text-sm font-medium text-[#2D2433] shadow-2xs">
                  Brand Identity
                </span>
                <span className="rounded-full bg-white px-3 sm:px-4 py-1.5 text-[11px] sm:text-sm font-medium text-[#2D2433] shadow-2xs">
                  Character Design
                </span>
                <span className="rounded-full bg-white px-3 sm:px-4 py-1.5 text-[11px] sm:text-sm font-medium text-[#2D2433] shadow-2xs">
                  Social Media
                </span>
              </div>

              <div className="mt-6 sm:mt-8">
                <Link
                  href="/work/jendela-finansial"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full bg-[#2D2433] px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition duration-300 hover:bg-pink-500 active:scale-95 shadow-md"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}