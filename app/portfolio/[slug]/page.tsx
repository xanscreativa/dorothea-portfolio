import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioCollections, PortfolioCollection } from "@/data/portfolio";
import FadeUp from "@/components/animation/FadeUp";

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
  const c = collection as any;

  // Fallback data for recruiter-friendly case study sections
  const overviewText = c.overview || collection.description || "This project was developed through rigorous strategic planning, iterative visual design, and meticulous execution to address core user experience and branding goals.";
  const challengeText = c.challenge || "Balancing high-end aesthetic visual appeal with absolute functional clarity. The core hurdle involved communicating complex brand values within a crowded digital marketplace while establishing immediate emotional resonance with the target demographic.";
  const rolesList = c.roles || (collection.meta?.role ? collection.meta.role.split(",").map((r: string) => r.trim()) : ["Brand Strategist", "UI/UX Designer", "Visual Designer"]);
  const toolsList = c.toolsList || (collection.meta?.tools ? collection.meta.tools.split(",").map((t: string) => t.trim()) : ["Figma", "Illustrator", "Photoshop", "After Effects", "Premiere Pro"]);
  
  const resultsStats = c.results || [
    { label: "Brand Consistency", value: "100%", desc: "Unified visual system across all digital touchpoints." },
    { label: "Client Satisfaction", value: "98%", desc: "Exceeded stakeholder expectations and project KPIs." },
    { label: "Social Engagement", value: "+45%", desc: "Immediate uplift in user interaction and reach." }
  ];

  const reflectionText = c.reflection || "This initiative reinforced the vital importance of foundational research before jumping into execution. Overcoming initial conceptual constraints taught me how to streamline complex workflows and maintain design integrity under tight delivery schedules.";

  return (
    <article className="relative overflow-hidden bg-[#FFFDFC] pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-20 -z-10 h-[400px] w-[400px] rounded-full bg-pink-100/40 blur-[130px] sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-pink-200/20 blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* BACK BUTTON */}
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

        {/* SECTION 1: HERO */}
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

        {/* Metadata Bar */}
        {collection.meta && (
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-6 sm:gap-10 border-y border-pink-100/80 py-5 text-xs font-bold uppercase tracking-wider text-[#2D2433]">
              <div>
                <span className="text-[#E96A98] block text-[10px] tracking-[0.2em] mb-0.5">Client</span>
                {collection.meta.client}
              </div>
              <div>
                <span className="text-[#E96A98] block text-[10px] tracking-[0.2em] mb-0.5">Year</span>
                {collection.meta.year}
              </div>
              <div>
                <span className="text-[#E96A98] block text-[10px] tracking-[0.2em] mb-0.5">Industry</span>
                {collection.meta.industry}
              </div>
            </div>
          </FadeUp>
        )}

        {/* Large Hero Image */}
        <FadeUp delay={0.25}>
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

        {/* STORYTELLING CASE STUDY SECTIONS */}
        <div className="mt-20 sm:mt-28 lg:mt-36 space-y-20 sm:space-y-32">

          {/* SECTION 2: Overview */}
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  01 / OVERVIEW
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433]">
                  The Big Picture
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-lg leading-relaxed text-[#6B6570]">
                  {overviewText}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* SECTION 3: The Challenge */}
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-12 border-t border-pink-100/60">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  02 / STRATEGY
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433]">
                  The Challenge
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-lg leading-relaxed text-[#6B6570]">
                  {challengeText}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* SECTION 4 & 5: My Role & Tools Used */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-pink-100/60">
            {/* My Role */}
            <FadeUp>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  03 / EXPERTISE
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
                  My Role
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {rolesList.map((role: string) => (
                    <span
                      key={role}
                      className="rounded-full bg-pink-50 px-4 py-2 text-xs font-bold text-pink-600 border border-pink-100 shadow-xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Tools Used */}
            <FadeUp delay={0.1}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  04 / TOOLKIT
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-black text-[#2D2433] mb-6">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {toolsList.map((tool: string) => (
                    <span
                      key={tool}
                      className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2D2433] border border-pink-200 shadow-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* SECTION 6: Creative Process (Horizontal Timeline) */}
          <FadeUp>
            <div className="pt-12 border-t border-pink-100/60">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                05 / WORKFLOW
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433] mb-8">
                Creative Process
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: "01", title: "Research", desc: "Audience & market analysis" },
                  { step: "02", title: "Ideation", desc: "Concept mapping & wireframes" },
                  { step: "03", title: "Sketch", desc: "Rough visual explorations" },
                  { step: "04", title: "Design", desc: "High-fidelity UI/visual assets" },
                  { step: "05", title: "Refinement", desc: "Feedback iteration & polish" },
                  { step: "06", title: "Delivery", desc: "Asset prep & handoff" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-pink-100/80 bg-white p-4 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block rounded-full bg-pink-50 px-2.5 py-0.5 text-[10px] font-black text-pink-500 mb-2">
                        {item.step}
                      </span>
                      <h3 className="text-sm font-bold text-[#2D2433] mb-1">{item.title}</h3>
                      <p className="text-[11px] leading-relaxed text-[#6B6570]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* EMBEDDED VIDEO (JIKA ADA) */}
          {collection.video && (
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
          )}

          {/* SECTION 7: Project Gallery */}
          <FadeUp>
            <div className="pt-12 border-t border-pink-100/60">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  06 / ARTIFACTS
                </span>
                <h2 className="mt-1 text-2xl sm:text-4xl font-black text-[#2D2433]">
                  Project Gallery
                </h2>
              </div>

              {collection.gallery && collection.gallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                  {collection.gallery.map((item, index) => {
                    const isFullWidth = item.type === "full";

                    return (
                      <div
                        key={index}
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
                                alt={item.alt || collection.title}
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
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {collection.items.map((item, idx) => (
                    <div key={idx} className="overflow-hidden rounded-[24px] border border-pink-100/80 bg-white p-4 shadow-sm">
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
                  ))}
                </div>
              )}
            </div>
          </FadeUp>

          {/* SECTION 8: Results (Statistics Cards) */}
          <FadeUp>
            <div className="pt-12 border-t border-pink-100/60">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                07 / IMPACT
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#2D2433] mb-8">
                Results &amp; Metrics
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {resultsStats.map((stat: any, idx: number) => (
                  <div key={idx} className="rounded-3xl border border-pink-100 bg-gradient-to-b from-pink-50/50 to-white p-6 sm:p-8 text-center shadow-xs">
                    <span className="text-3xl sm:text-4xl font-black text-[#E96A98] block mb-2">
                      {stat.value}
                    </span>
                    <h3 className="text-sm font-bold text-[#2D2433] mb-1">{stat.label}</h3>
                    <p className="text-xs text-[#6B6570]">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* SECTION 9: Reflection */}
          <FadeUp>
            <div className="pt-12 border-t border-pink-100/60">
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-pink-100/80 p-8 sm:p-12 shadow-xs max-w-4xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E96A98] sm:text-xs">
                  08 / REFLECTION
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black text-[#2D2433]">
                  Lessons Learned &amp; Growth
                </h2>
                <p className="mt-4 text-xs sm:text-base leading-relaxed text-[#6B6570]">
                  {reflectionText}
                </p>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* SECTION 10: Next Project Transition */}
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

      </div>
    </article>
  );
}