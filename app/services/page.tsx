import type { Metadata } from "next";

import Button from "@/app/components/ui/Button";
import FadeUp from "@/app/components/animation/FadeUp";
import ContactCTA from "@/app/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services | XANS Studio",
  description:
    "A premium editorial services page for XANS Studio, presenting process, service focus, and creative direction with quiet confidence.",
};

const services = [
  {
    title: "Brand & Identity Systems",
    description:
      "A refined visual world for brands, built to feel cohesive across print, digital and motion with editorial balance.",
  },
  {
    title: "Campaign Direction",
    description:
      "Story-led creative concepts and assets that shape launches, seasonal campaigns, and digital moments with considered nuance.",
  },
  {
    title: "Video & Motion",
    description:
      "Short films, branded edits, and social visuals designed to move audiences while maintaining a polished studio tone.",
  },
];

const process = [
  {
    title: "Listen",
    description:
      "Start with the project brief, audience, and context so every decision is rooted in intention.",
  },
  {
    title: "Curate",
    description:
      "Shape a clear creative direction with mood, tone, and composition that feels distinct and enduring.",
  },
  {
    title: "Craft",
    description:
      "Develop thoughtful visual systems, motion frameworks, and assets with refined detail and consistency.",
  },
  {
    title: "Refine",
    description:
      "Polish the work until it feels effortless, ensuring every element supports the story with quiet strength.",
  },
];

const reasons = [
  {
    title: "A curated studio rhythm",
    description:
      "The process is shaped to feel editorial and calm, not noisy or overly busy.",
  },
  {
    title: "Visual clarity at every stage",
    description:
      "Each solution is guided by purpose, making the work easier to understand and harder to forget.",
  },
  {
    title: "Studio-level attention",
    description:
      "From direction to delivery, the work is crafted with meticulous care and honest restraint.",
  },
  {
    title: "Built for lasting impact",
    description:
      "Projects feel premium in the moment and confident enough to hold up over time.",
  },
];

const faq = [
  {
    question: "How do you begin a new project?",
    answer:
      "The first step is a short conversation to understand the brief, values, and what the work needs to communicate.",
  },
  {
    question: "What kind of brands do you work with?",
    answer:
      "Boutique businesses, creative organizations, and thoughtful teams that value refined visual direction and editorial storytelling.",
  },
  {
    question: "Can you support motion and video?",
    answer:
      "Yes — the studio provides live motion and polished edits that complement identity and campaign work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FFFDFC] text-[#2D2433]">
      <section className="relative overflow-hidden bg-[#FEF8F7] py-28 sm:py-32 lg:py-36">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-pink-100 blur-[120px] opacity-80" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.45em] text-pink-500">
                Services
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.03em] text-[#2D2433] sm:text-6xl lg:text-7xl">
                A creative studio process that feels editorial, calm, and purposeful.
              </h1>
              <p className="mt-8 text-lg leading-9 text-[#6B6570] sm:text-xl">
                The work is developed with careful attention to story, craft, and cohesion — not as a menu of offerings, but as a guided studio practice.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/#contact">Start a Project</Button>
                <Button href="/about" variant="secondary">
                  About the Studio
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
                  What I do
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  Services rooted in thoughtful visual direction.
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                Focused services that support brands through identity, campaign storytelling, and motion without diluting the design with unnecessary detail.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <article className="rounded-4xl border border-[#F3E6EB] bg-white p-10 shadow-[0_24px_70px_rgba(229,135,176,.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {item.description}
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
                  Creative Process
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  A quiet, strategic path from brief to crafted output.
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                The process is designed to move quickly from concept to clarity, preserving an editorial sense of calm while delivering work that feels intentional.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <div className="rounded-4xl bg-white p-9 shadow-[0_24px_60px_rgba(229,135,176,.08)]">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {item.description}
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
                  Why Work With Me
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  A considered studio experience, without the agency noise.
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                The studio blends careful art direction, editorial craft, and direct collaboration so every project feels bespoke and beautifully executed.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reasons.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.06}>
                <article className="rounded-4xl border border-[#F3E6EB] bg-white p-10 shadow-[0_24px_60px_rgba(229,135,176,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-2xl font-black text-[#2D2433]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {item.description}
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
                  FAQ
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
                  Simple answers to the most common questions.
                </h2>
              </div>
              <p className="text-lg leading-9 text-[#6B6570]">
                This page is meant to outline our creative approach and how collaboration works from the first conversation.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6">
            {faq.map((item, index) => (
              <FadeUp key={item.question} delay={index * 0.06}>
                <details className="group rounded-4xl border border-[#EDE1E6] bg-white p-10 transition-all duration-300 hover:border-pink-200">
                  <summary className="cursor-pointer text-xl font-semibold text-[#2D2433] list-none marker:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-5 leading-8 text-[#6B6570]">
                    {item.answer}
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