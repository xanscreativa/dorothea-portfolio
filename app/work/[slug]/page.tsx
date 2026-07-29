import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { portfolioCollections } from "@/app/data/portfolio";
import ProjectDetailHero from "@/app/components/work/ProjectDetailHero";
import ProjectDetailGallery from "@/app/components/work/ProjectDetailGallery";
import ProjectDetailNext from "@/app/components/work/ProjectDetailNext";
import ProjectDetailSection from "@/app/components/work/ProjectDetailSection";
import ProjectVideo from "@/app/components/work/ProjectVideo";

// Optional Case Study Extensions for Type Safety
interface CreativeProcessStep {
  step: string;
  title: string;
  description: string;
}

interface TypographyConfig {
  fontFamily: string;
  description: string;
}

interface ResultMetric {
  metric: string;
  label: string;
}

type ExtendedPortfolioCollection = (typeof portfolioCollections)[number] & {
  challenge?: string;
  solution?: string;
  creativeProcess?: CreativeProcessStep[];
  brandColors?: string[];
  typography?: TypographyConfig;
  results?: ResultMetric[];
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioCollections.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Collection Not Found | XANS",
    };
  }

  return {
    title: `${project.title} | XANS`,
    description: project.description,
  };
}

export default async function WorkPage({
  params,
}: Props) {
  const { slug } = await params;

  const rawProject = portfolioCollections.find(
    (item) => item.slug === slug
  );

  if (!rawProject) {
    notFound();
  }

  // Cast safely to ExtendedPortfolioCollection for optional case study fields
  const project = rawProject as ExtendedPortfolioCollection;

  const nextProject =
    portfolioCollections.find(
      (item) => item.id === project.id + 1
    ) ?? portfolioCollections[0];

  const totalProjectCount = project.items.length;

  const totalImageCount = project.items.reduce(
    (count: number, item) => count + item.images.length,
    0
  );

  return (
    <main className="bg-white text-[#2D2433]">
      {/* 1. HERO SECTION */}
      <ProjectDetailHero project={project} />

      {/* 2. FEATURED VIDEO (If Available) */}
      {project.video && (
        <ProjectVideo
          thumbnail={project.video.thumbnail}
          youtubeId={project.video.youtubeId}
        />
      )}

      {/* 3. OVERVIEW & STATISTICS */}
      <section className="bg-[#FFFDFB]">
        <div className="mx-auto w-[92%] max-w-7xl py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <ProjectDetailSection
              label="Overview"
              title="Collection overview"
            >
              <p className="text-lg leading-8 text-[#6B6570]">
                {project.overview}
              </p>
            </ProjectDetailSection>

            <ProjectDetailSection
              label="Statistics"
              title="Collection at a glance"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-[#FFF7FA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
                    Projects
                  </p>
                  <p className="mt-3 text-3xl font-bold">
                    {totalProjectCount}
                  </p>
                </div>

                <div className="rounded-[20px] bg-[#FFF7FA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
                    Images
                  </p>
                  <p className="mt-3 text-3xl font-bold">
                    {totalImageCount}
                  </p>
                </div>
              </div>
            </ProjectDetailSection>
          </div>
        </div>
      </section>

      {/* 4. CHALLENGE & SOLUTION (Optional Extended Case Study Details) */}
      {(project.challenge || project.solution) && (
        <section className="border-t border-[#F2EBF0] bg-white">
          <div className="mx-auto w-[92%] max-w-7xl py-24">
            <div className="grid gap-12 md:grid-cols-2">
              {project.challenge && (
                <ProjectDetailSection
                  label="01 / Challenge"
                  title="The Strategic Problem"
                >
                  <p className="text-lg leading-8 text-[#6B6570]">
                    {project.challenge}
                  </p>
                </ProjectDetailSection>
              )}

              {project.solution && (
                <ProjectDetailSection
                  label="02 / Solution"
                  title="The Creative Direction"
                >
                  <p className="text-lg leading-8 text-[#6B6570]">
                    {project.solution}
                  </p>
                </ProjectDetailSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. CREATIVE PROCESS (Optional Extended Workflow) */}
      {project.creativeProcess && project.creativeProcess.length > 0 && (
        <section className="border-t border-[#F2EBF0] bg-[#FFFDFB]">
          <div className="mx-auto w-[92%] max-w-7xl py-24">
            <ProjectDetailSection
              label="Workflow"
              title="Creative Process"
            >
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {project.creativeProcess.map((stepItem: CreativeProcessStep) => (
                  <div
                    key={stepItem.step}
                    className="rounded-[24px] border border-[#F2EBF0] bg-white p-8 shadow-sm"
                  >
                    <span className="text-2xl font-black text-pink-500/80">
                      {stepItem.step}
                    </span>
                    <h4 className="mt-3 text-xl font-bold text-[#2D2433]">
                      {stepItem.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6570]">
                      {stepItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </ProjectDetailSection>
          </div>
        </section>
      )}

      {/* 6. MAIN PROJECT GALLERY */}
      <ProjectDetailGallery project={project} />

      {/* 7. BRAND COLORS & TYPOGRAPHY DESIGN SYSTEM */}
      {(project.brandColors || project.typography) && (
        <section className="border-t border-[#F2EBF0] bg-[#FFFDFB]">
          <div className="mx-auto w-[92%] max-w-7xl py-24">
            <ProjectDetailSection
              label="Identity System"
              title="Design Foundation"
            >
              <div className="mt-8 grid gap-12 md:grid-cols-2">
                {project.brandColors && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B6570]">
                      Color Palette
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.brandColors.map((color: string) => (
                        <div key={color} className="flex flex-col items-center">
                          <div
                            className="h-16 w-16 rounded-2xl border border-black/10 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <span className="mt-2 text-xs font-mono text-[#6B6570]">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.typography && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B6570]">
                      Typography
                    </p>
                    <p className="text-3xl font-black text-[#2D2433]">
                      {project.typography.fontFamily}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6570]">
                      {project.typography.description}
                    </p>
                  </div>
                )}
              </div>
            </ProjectDetailSection>
          </div>
        </section>
      )}

      {/* 8. RESULTS / IMPACT METRICS */}
      {project.results && project.results.length > 0 && (
        <section className="border-t border-[#F2EBF0] bg-white">
          <div className="mx-auto w-[92%] max-w-7xl py-24">
            <ProjectDetailSection
              label="Impact"
              title="Project Results"
            >
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {project.results.map((res: ResultMetric) => (
                  <div
                    key={res.label}
                    className="rounded-[24px] bg-[#FFF7FA] p-8 text-center"
                  >
                    <p className="text-4xl font-black text-pink-500">
                      {res.metric}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#6B6570]">
                      {res.label}
                    </p>
                  </div>
                ))}
              </div>
            </ProjectDetailSection>
          </div>
        </section>
      )}

      {/* 9. NEXT PROJECT NAVIGATION */}
      <ProjectDetailNext nextProject={nextProject} />
    </main>
  );
}