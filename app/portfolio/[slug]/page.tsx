import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioCollections, PortfolioCollection } from "@/app/data/portfolio";
import FadeUp from "@/app/components/animation/FadeUp";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes saat build time (SSG)
export async function generateStaticParams() {
  return portfolioCollections.map((item) => ({
    slug: item.slug,
  }));
}

// Helper untuk mengambil project berikutnya
function getNextPortfolio(currentSlug: string): PortfolioCollection {
  const currentIndex = portfolioCollections.findIndex(
    (item) => item.slug === currentSlug
  );
  const nextIndex = (currentIndex + 1) % portfolioCollections.length;
  return portfolioCollections[nextIndex];
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Cari data berdasarkan slug
  const collection = portfolioCollections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  const nextProject = getNextPortfolio(slug);

  return (
    <article className="relative overflow-hidden bg-[#FFFDFC] pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-20 -z-10 h-[400px] w-[400px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-pink-200/20 blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* TOMBOL KEMBALI */}
        <FadeUp delay={0}>
          <Link
            href="/#portfolio"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B6570] transition-colors hover:text-[#E96A98] sm:mb-12"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Selected Works</span>
          </Link>
        </FadeUp>

        {/* HEADER PROJECT */}
        <header className="max-w-4xl">
          <FadeUp delay={0.05}>
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#E96A98] sm:text-xs sm:tracking-[0.45em]">
              {collection.category}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
              {collection.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-[#6B6570] sm:text-xl sm:leading-relaxed">
              {collection.tagline || collection.description}
            </p>
          </FadeUp>
        </header>

        {/* COVER IMAGE MAIN */}
        <FadeUp delay={0.2}>
          <div className="relative mt-8 sm:mt-12 overflow-hidden rounded-[24px] sm:rounded-[36px] bg-[#F9F4F2] border border-pink-100/80 p-2 sm:p-3 shadow-[0_15px_45px_rgba(45,36,51,0.06)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[18px] sm:rounded-[28px]">
              <Image
                src={collection.cover}
                alt={collection.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </FadeUp>

        {/* STRUCTURED PROJECT METADATA BLOCK */}
        {collection.meta && (
          <FadeUp delay={0.25}>
            <div className="mt-12 sm:mt-16 border-y border-pink-100/80 py-8 sm:py-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Client
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.client}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Industry
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.industry}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Role
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.role}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Year
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.year}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Deliverables
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.deliverables}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                    Tools Used
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#2D2433]">
                    {collection.meta.tools}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        )}

        {/* STORYTELLING SECTIONS */}
        <section className="mt-16 sm:mt-24 lg:mt-32 space-y-16 sm:space-y-24">
          
          {/* Overview */}
          {collection.overview && (
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                    01 / OVERVIEW
                  </span>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433]">
                    Project Context
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm sm:text-lg leading-relaxed text-[#6B6570]">
                    {collection.overview}
                  </p>
                </div>
              </div>
            </FadeUp>
          )}

          {/* Strategy: Challenge & Solution */}
          {(collection.challenge || collection.solution) && (
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-12 border-t border-pink-100/60">
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                    02 / STRATEGY
                  </span>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433]">
                    The Challenge &amp; Approach
                  </h2>
                </div>
                
                <div className="lg:col-span-8 space-y-8">
                  {collection.challenge && (
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2433]">The Core Challenge</h3>
                      <p className="mt-2 text-xs sm:text-base leading-relaxed text-[#6B6570]">
                        {collection.challenge}
                      </p>
                    </div>
                  )}

                  {collection.solution && (
                    <div className="rounded-2xl bg-pink-50/50 p-6 sm:p-8 border border-pink-100/80">
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2433]">The Visual Solution</h3>
                      <p className="mt-2 text-xs sm:text-base leading-relaxed text-[#6B6570]">
                        {collection.solution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          )}

        </section>

        {/* EMBEDDED VIDEO (JIKA ADA) */}
        {collection.video && (
          <section className="mt-16 sm:mt-24">
            <FadeUp>
              <div className="overflow-hidden rounded-[24px] bg-[#2D2433] p-3 sm:p-4 border border-pink-100/80 shadow-lg">
                <div className="relative aspect-video w-full overflow-hidden rounded-[18px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${collection.video.youtubeId}`}
                    title={collection.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            </FadeUp>
          </section>
        )}

        {/* EDITORIAL GALLERY SHOWCASE */}
        <section className="mt-20 sm:mt-28 lg:mt-36">
          <FadeUp>
            <div className="mb-10 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                03 / VISUAL SHOWCASE
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-black text-[#2D2433]">
                Design Artifacts
              </h2>
            </div>
          </FadeUp>

          {/* Render Gallery jika tersedia */}
          {collection.gallery && collection.gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {collection.gallery.map((item, index) => {
                const isFullWidth = item.type === "full";

                return (
                  <FadeUp
                    key={index}
                    delay={0.08 * index}
                    className={isFullWidth ? "sm:col-span-2" : "sm:col-span-1"}
                  >
                    <figure className="group flex flex-col">
                      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] bg-[#F9F4F2] border border-pink-100/80 p-2 sm:p-2.5 shadow-[0_10px_30px_rgba(45,36,51,0.03)] transition-all duration-500 hover:border-pink-200 hover:shadow-[0_20px_45px_rgba(233,106,152,0.15)]">
                        <div
                          className={`relative w-full overflow-hidden rounded-[14px] sm:rounded-[22px] ${
                            isFullWidth
                              ? "aspect-[16/9] sm:aspect-[21/9]"
                              : "aspect-[4/3] sm:aspect-[3/4]"
                          }`}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes={isFullWidth ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                          />
                        </div>
                      </div>

                      {item.caption && (
                        <figcaption className="mt-3 px-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A098A8]">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  </FadeUp>
                );
              })}
            </div>
          ) : (
            /* Fallback menggunakan items jika gallery tidak ada */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collection.items.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="overflow-hidden rounded-[24px] border border-pink-100/80 bg-white p-4 shadow-sm">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-gray-100 mb-4">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#2D2433]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6570] mt-1">
                      {item.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </section>

        {/* OUTCOME / IMPACT */}
        {collection.outcome && (
          <section className="mt-20 sm:mt-28 lg:mt-36">
            <FadeUp>
              <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-pink-50/60 to-white p-8 sm:p-12 lg:p-16 border border-pink-100/80 text-center max-w-4xl mx-auto shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  04 / RESULTS &amp; IMPACT
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#2D2433]">
                  Project Outcome
                </h2>
                <p className="mt-4 text-xs sm:text-lg leading-relaxed text-[#6B6570] max-w-2xl mx-auto">
                  {collection.outcome}
                </p>
              </div>
            </FadeUp>
          </section>
        )}

        {/* NEXT PROJECT TRANSITION */}
        {nextProject && (
          <section className="mt-24 sm:mt-32 lg:mt-40 border-t border-pink-100/80 pt-16">
            <FadeUp>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  NEXT CASE STUDY
                </span>
                <Link
                  href="/#portfolio"
                  className="text-xs font-bold uppercase tracking-wider text-[#6B6570] hover:text-[#E96A98] transition-colors"
                >
                  View All Projects →
                </Link>
              </div>

              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group relative block overflow-hidden rounded-[24px] sm:rounded-[32px] border border-pink-100/80 bg-white p-4 sm:p-6 shadow-[0_10px_30px_rgba(45,36,51,0.03)] transition-all duration-500 hover:border-pink-200 hover:shadow-[0_20px_45px_rgba(233,106,152,0.18)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">
                      {nextProject.category}
                    </span>
                    <h3 className="mt-1 text-xl sm:text-3xl font-black text-[#2D2433] group-hover:text-[#E96A98] transition-colors">
                      {nextProject.title}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2433]">
                      <span>Explore Case Study</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#F9F4F2]">
                      <Image
                        src={nextProject.cover}
                        alt={nextProject.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </section>
        )}

        {/* FINAL STUDIO CTA */}
        <section className="mt-20 sm:mt-28 lg:mt-36 border-t border-pink-100/80 pt-16 sm:pt-20 text-center">
          <FadeUp>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
              START A CONVERSATION
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-[#2D2433]">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-xs sm:text-base text-[#6B6570] max-w-lg mx-auto">
              Let&apos;s build memorable visual experiences together. Reach out for availability and project inquiries.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#E96A98] px-9 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(233,106,152,0.32)] transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-[0_16px_34px_rgba(233,106,152,0.42)] sm:text-sm"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </FadeUp>
        </section>

      </div>
    </article>
  );
}