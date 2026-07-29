import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  videoPortfolioData, 
  VideoProject, 
  WorkflowStep, 
  EditingBreakdownItem, 
  ResultMetric 
} from '@/data/videoPortfolio';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(videoPortfolioData).map((slug) => ({ slug }));
}

export default async function VideoCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project: VideoProject | undefined = videoPortfolioData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-neutral-100">
      {/* SECTION 1: Hero & Video Embed */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-400 font-mono">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-4xl leading-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-neutral-900 mb-12 text-sm">
          <div>
            <span className="block text-neutral-500 font-mono text-xs uppercase mb-1">Client</span>
            <span className="font-medium text-neutral-200">{project.client}</span>
          </div>
          <div>
            <span className="block text-neutral-500 font-mono text-xs uppercase mb-1">Role</span>
            <span className="font-medium text-neutral-200">{project.role}</span>
          </div>
          <div>
            <span className="block text-neutral-500 font-mono text-xs uppercase mb-1">Duration</span>
            <span className="font-medium text-neutral-200">{project.duration}</span>
          </div>
        </div>

        {/* Video Player Embed */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {project.videoType === 'youtube' ? (
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full absolute inset-0 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video
              src={project.videoUrl}
              controls
              className="w-full h-full object-cover"
              poster={project.heroThumbnail}
            />
          )}
        </div>
      </section>

      {/* SECTION 2: Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 sticky top-24">
              01 / Overview
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">Project Goals</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.overview.goals}</p>
              </div>
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">Target Audience</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.overview.targetAudience}</p>
              </div>
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">Communication Objective</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.overview.commObjective}</p>
              </div>
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">Business Context</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.overview.businessContext}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Specifications */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 sticky top-24">
              02 / Specifications
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-neutral-900/30 p-8 rounded-2xl border border-neutral-900">
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Client</span>
                <span className="text-neutral-200 font-medium">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Industry</span>
                <span className="text-neutral-200 font-medium">{project.industry}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Duration</span>
                <span className="text-neutral-200 font-medium">{project.duration}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Role</span>
                <span className="text-neutral-200 font-medium">{project.role}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Platform</span>
                <span className="text-neutral-200 font-medium">{project.platform}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-neutral-500 mb-1">Aspect Ratio</span>
                <span className="text-neutral-200 font-medium">{project.aspectRatio}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Creative Challenge */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 sticky top-24">
              03 / Creative Challenge
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-neutral-300 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-neutral-500 uppercase">Communication Problem</h3>
              <p className="text-lg text-neutral-200">{project.creativeChallenge.problem}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-neutral-500 uppercase">Why Video Was Chosen</h3>
              <p className="text-lg text-neutral-200">{project.creativeChallenge.reason}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-neutral-500 uppercase">Production Constraints</h3>
              <p className="text-lg text-neutral-200">{project.creativeChallenge.constraints}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Creative Direction */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 sticky top-24">
              04 / Creative Direction
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {Object.entries(project.creativeDirection as Record<string, string>).map(([key, value]) => (
              <div key={key} className="bg-neutral-950 p-6 rounded-xl border border-neutral-900">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  {key.replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Production Workflow Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            05 / Pipeline
          </h2>
          <h3 className="text-2xl font-semibold text-white">Production Workflow</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.productionWorkflow.map((step: WorkflowStep, idx: number) => (
            <div key={idx} className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-neutral-500 mb-3 block">0{idx + 1}</span>
                <h4 className="font-semibold text-neutral-200 mb-2">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Editing Breakdown Cards */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 sticky top-24">
              06 / Execution
            </h2>
            <h3 className="text-2xl font-semibold text-white mt-2">Editing Breakdown</h3>
          </div>
          <div className="md:col-span-8 space-y-4">
            {project.editingBreakdown.map((item: EditingBreakdownItem, idx: number) => (
              <div key={idx} className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-900">
                <h4 className="text-base font-semibold text-neutral-200 mb-1">{item.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Software Used */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              07 / Toolchain
            </h2>
            <h3 className="text-2xl font-semibold text-white">Software Stack</h3>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-3">
            {project.softwareUsed.map((software: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
              >
                {software}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Deliverables */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              08 / Output
            </h2>
            <h3 className="text-2xl font-semibold text-white">Deliverables</h3>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-3">
            {project.deliverablesBadges.map((badge: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-neutral-900 text-neutral-200 text-xs font-medium border border-neutral-800"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Results */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900">
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            09 / Impact
          </h2>
          <h3 className="text-2xl font-semibold text-white">Results & Impact</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.results.map((result: ResultMetric, idx: number) => (
            <div key={idx} className="bg-neutral-900/30 p-6 rounded-xl border border-neutral-900">
              <span className="block text-xs font-mono text-neutral-500 mb-2 uppercase">{result.label}</span>
              <div className="text-3xl font-semibold text-white mb-1">{result.value}</div>
              {result.change && <span className="text-xs text-emerald-400 font-mono">{result.change}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Return Navigation */}
      <section className="py-16 px-6 max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <span>←</span> Back to Portfolio
        </Link>
      </section>
    </main>
  );
}