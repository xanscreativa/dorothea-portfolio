"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="flex min-h-screen items-center bg-[#FFFDFC] px-6 py-24 text-[#2D2433] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[40px] border border-[#F4D9E1] bg-white p-12 shadow-[0_30px_80px_rgba(45,36,51,.08)]">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-500">
            {t("notFoundLabel")}
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight text-[#2D2433] sm:text-6xl">
            {t("notFoundTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#6B6570]">
            {t("notFoundDescription")}
          </p>
          <div className="mt-10">
            <Link
              href="/#hero"
              className="inline-flex rounded-full bg-[#E85D8E] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:scale-105"
              aria-label={t("returnHomeAria")}
            >
              {t("returnHome")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
