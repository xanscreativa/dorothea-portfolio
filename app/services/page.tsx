"use client";

import Button from "@/components/ui/Button";
import FadeUp from "@/components/animation/FadeUp";
import ContactCTA from "@/components/contact/Contact";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    titleKey: "serviceBrandTitle", descriptionKey: "serviceBrandDescription",
  },
  {
    titleKey: "serviceCampaignTitle", descriptionKey: "serviceCampaignDescription",
  },
  {
    titleKey: "serviceVideoTitle", descriptionKey: "serviceVideoDescription",
  },
];

const process = [
  {
    titleKey: "processListen", descriptionKey: "processListenDescription",
  },
  {
    titleKey: "processCurate", descriptionKey: "processCurateDescription",
  },
  {
    titleKey: "processCraft", descriptionKey: "processCraftDescription",
  },
  {
    titleKey: "processRefine", descriptionKey: "processRefineDescription",
  },
];

const reasons = [
  {
    titleKey: "reasonRhythm", descriptionKey: "reasonRhythmDescription",
  },
  {
    titleKey: "reasonClarity", descriptionKey: "reasonClarityDescription",
  },
  {
    titleKey: "reasonAttention", descriptionKey: "reasonAttentionDescription",
  },
  {
    titleKey: "reasonImpact", descriptionKey: "reasonImpactDescription",
  },
];

const faq = [
  {
    questionKey: "faqStart", answerKey: "faqStartAnswer",
  },
  {
    questionKey: "faqBrands", answerKey: "faqBrandsAnswer",
  },
  {
    questionKey: "faqMotion", answerKey: "faqMotionAnswer",
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <main className="bg-[#FFFDFC] text-[#2D2433]">
      <section className="relative overflow-hidden bg-[#FEF8F7] py-28 sm:py-32 lg:py-36">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-pink-100 blur-[120px] opacity-80" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                {t("servicesHeroLabel")}
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.03em] text-[#2D2433] sm:text-6xl lg:text-7xl">
                {t("servicesHeroTitle")}
              </h1>
              <p className="mt-8 text-lg leading-9 text-[#6B6570] sm:text-xl">
                {t("servicesHeroDescription")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/#contact">{t("startProject")}</Button>
                <Button href="/about" variant="secondary">
                  {t("aboutStudio")}
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                  {t("servicesWhatIDo")}
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  {t("servicesSectionTitle")}
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                {t("servicesSectionDescription")}
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <article className="rounded-4xl border border-[#F3E6EB] bg-white p-10 shadow-[0_24px_70px_rgba(229,135,176,.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {t(item.descriptionKey)}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8FA] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                  {t("creativeProcess")}
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  {t("processTitle")}
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                {t("processDescription")}
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <div className="rounded-4xl bg-white p-9 shadow-[0_24px_60px_rgba(229,135,176,.08)]">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                  {t("whyWorkWithMe")}
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  {t("whyTitle")}
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                {t("whyDescription")}
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reasons.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <article className="rounded-4xl border border-[#F3E6EB] bg-white p-10 shadow-[0_24px_60px_rgba(229,135,176,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {t(item.descriptionKey)}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8FA] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                  {t("faqTitle")}
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  {t("faqHeading")}
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                {t("faqDescription")}
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6">
            {faq.map((item, index) => (
              <FadeUp key={item.questionKey} delay={index * 0.06}>
                <details className="group rounded-4xl border border-[#EDE1E6] bg-white p-10 transition-all duration-300 hover:border-pink-200">
                  <summary className="cursor-pointer text-xl font-semibold text-[#2D2433] list-none marker:hidden">
                    {t(item.questionKey)}
                  </summary>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {t(item.answerKey)}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hero CTA Card Component */}
      <ContactCTA />
    </main>
  );
}