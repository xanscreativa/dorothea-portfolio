import Link from "next/link";
import FadeUp from "@/app/components/animation/FadeUp";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const servicesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    deliverables: string[];
    process: { step: string; title: string; desc: string }[];
  }
> = {
  "brand-identity": {
    title: "Brand Identity",
    subtitle: "Creating Memorable & Impactful Visual Identities",
    description:
      "Helping your brand stand out and stay consistent through strategic visual design approaches. From logo creation to complete visual identity guidelines to build audience trust.",
    deliverables: [
      "Logo Primary, Secondary & Emblem Variations",
      "Color Palette & Typography System",
      "Brand Guidelines Book (Digital PDF)",
      "Social Media Templates & Stationery Assets",
      "Master Source Files (AI, SVG, EPS, PNG)",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Research",
        desc: "Understanding business vision, target audience, and competitor analysis.",
      },
      {
        step: "02",
        title: "Visual Concept & Design",
        desc: "Idea exploration, moodboard creation, and initial logo concept design.",
      },
      {
        step: "03",
        title: "Refinement & Final Assets",
        desc: "Polishing design details based on feedback until final file organization.",
      },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "High-Quality Marketing & Promotional Visuals",
    description:
      "Designing engaging visual materials for both print and digital marketing needs to ensure your brand's communication is delivered effectively and aesthetically.",
    deliverables: [
      "Social Media Post & Story Kits",
      "Flyer, Brochure & Poster Designs",
      "Packaging & Label Design",
      "Banner & Digital Ad Creatives",
      "High-Resolution Print-Ready Files",
    ],
    process: [
      {
        step: "01",
        title: "Brief & Content Analysis",
        desc: "Gathering text materials, images, and visual campaign goals.",
      },
      {
        step: "02",
        title: "Layout & Composition",
        desc: "Structuring visual hierarchy and professional layout composition.",
      },
      {
        step: "03",
        title: "Export & Delivery",
        desc: "Handing over print-ready and web-optimized final files.",
      },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    subtitle: "Engaging & Dynamic Motion Visuals",
    description:
      "Transforming raw footage into engaging, cinematic short-form or long-form videos tailored for reels, TikTok, and other social media platforms.",
    deliverables: [
      "Short-form Content (Reels/Shorts/TikTok)",
      "Color Grading & Audio Mixing",
      "Subtitles & Text Animation",
      "Transitions & Sound Effects (SFX)",
      "High-Quality Export Files (MP4/MOV)",
    ],
    process: [
      {
        step: "01",
        title: "Cuttings & Storyline",
        desc: "Selecting the best scenes and arranging the video storyline flow.",
      },
      {
        step: "02",
        title: "Pacing & FX",
        desc: "Adding music, sound effects, animated texts, and color grading.",
      },
      {
        step: "03",
        title: "Final Review",
        desc: "Adjusting video rhythm and final polishing based on feedback.",
      },
    ],
  },
  "social-media": {
    title: "Social Media",
    subtitle: "Engaging Content & Feed Aesthetics",
    description:
      "Designing strategic, aesthetic, and eye-catching social media content to boost engagement, build brand awareness, and grow your online community.",
    deliverables: [
      "Feed Post & Carousel Designs",
      "Story & Reel Cover Templates",
      "Editable Design Templates",
      "Content Grid Layout Strategy",
      "High-Resolution Image Files (PNG/JPG)",
    ],
    process: [
      {
        step: "01",
        title: "Concept & Grid Planning",
        desc: "Planning aesthetic grid layout and visual tone for the brand.",
      },
      {
        step: "02",
        title: "Design & Asset Creation",
        desc: "Designing templates and regular post assets according to the strategy.",
      },
      {
        step: "03",
        title: "Review & Final Delivery",
        desc: "Final adjustments and organizing assets ready to be published.",
      },
    ],
  },
  "motion-design": {
    title: "Motion Design",
    subtitle: "Bringing Static Visuals to Life",
    description:
      "2D animation and motion graphics for logos, video intros, product promos, and interface animations to make your brand presence feel more alive.",
    deliverables: [
      "Animated Logo / Logo Reveal",
      "2D Motion Graphics Ads",
      "Social Media Motion Loops",
      "Lower Thirds & Title Animations",
      "Video Export (MP4 / GIF / Lottie JSON)",
    ],
    process: [
      {
        step: "01",
        title: "Storyboard",
        desc: "Designing object movement flow and frame-by-frame transitions.",
      },
      {
        step: "02",
        title: "Animation & Rigging",
        desc: "Animating visual element movements and transition effects.",
      },
      {
        step: "03",
        title: "Audio & Rendering",
        desc: "Synchronizing motion with sound effects and rendering files.",
      },
    ],
  },
  "creative-direction": {
    title: "Creative Direction",
    subtitle: "Guiding the Vision of Your Brand",
    description:
      "Directing comprehensive visual execution to ensure all campaigns, photography concepts, and promotional materials follow a consistent theme.",
    deliverables: [
      "Creative Brief & Moodboards",
      "Art Direction for Photography / Videography",
      "Visual Campaign Strategy",
      "Design Quality Supervision",
      "Comprehensive Style Guide",
    ],
    process: [
      {
        step: "01",
        title: "Ideation & Concept",
        desc: "Developing creative concepts and establishing visual guidelines.",
      },
      {
        step: "02",
        title: "Production Guidance",
        desc: "Guiding the creative team or photographer during execution.",
      },
      {
        step: "03",
        title: "Curate & Review",
        desc: "Curating final outputs to match desired visual standards.",
      },
    ],
  },
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const formattedTitleFromSlug = slug.replace(/-/g, " ");
  const service = servicesData[slug] || {
    title: formattedTitleFromSlug,
    subtitle: "Professional Creative Solutions",
    description: `This is the detail page for the ${formattedTitleFromSlug} service. We help you create high-end visual executions tailored to your project needs.`,
    deliverables: [
      "High-Quality Source Files",
      "Professional Layout & Composition",
      "Revision & Refinement Rounds",
      "Commercial Usage Rights",
    ],
    process: [
      {
        step: "01",
        title: "Initial Consultation",
        desc: "Discussing project needs and determining the scope of work.",
      },
      {
        step: "02",
        title: "Execution",
        desc: "Executing the project according to the agreed brief.",
      },
      {
        step: "03",
        title: "Final Delivery",
        desc: "Handing over all final production-ready assets.",
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFFDFB] pb-16 pt-24 sm:pb-24 sm:pt-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[250px] w-[250px] rounded-full bg-pink-100/50 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[250px] w-[250px] rounded-full bg-pink-100/40 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[160px]" />

      <div className="relative mx-auto w-[88%] max-w-5xl sm:w-[92%]">
        {/* Back Navigation */}
        <FadeUp>
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B6570] transition-colors hover:text-pink-600 sm:text-sm"
          >
            <span className="text-pink-500">←</span> Back to Services
          </Link>
        </FadeUp>

        {/* HERO SECTION DETAIL */}
        <FadeUp delay={0.1}>
          <div className="mt-4 border-b border-pink-100/80 pb-6 sm:mt-6 sm:pb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              SERVICE DETAIL
            </p>
            <h1 className="mt-1.5 text-2xl font-black text-[#2D2433] capitalize sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-2 text-xs font-semibold text-pink-600 sm:text-base">
              {service.subtitle}
            </p>
            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-[#6B6570] sm:text-sm sm:leading-relaxed">
              {service.description}
            </p>
          </div>
        </FadeUp>

        {/* DELIVERABLES & PROCESS GRID */}
        <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-8 md:grid-cols-2">
          {/* Deliverables Card */}
          <FadeUp delay={0.15}>
            <div className="h-full rounded-2xl border border-pink-100 bg-white p-4 shadow-xs sm:rounded-3xl sm:p-7">
              <h2 className="text-sm font-bold text-[#2D2433] sm:text-lg">
                What You Get
              </h2>
              <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[10px] font-bold text-pink-600">
                      ✓
                    </span>
                    <span className="text-xs font-medium text-[#4A4250] sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Workflow Process */}
          <FadeUp delay={0.2}>
            <div className="h-full rounded-2xl border border-pink-100 bg-white p-4 shadow-xs sm:rounded-3xl sm:p-7">
              <h2 className="text-sm font-bold text-[#2D2433] sm:text-lg">
                The Process
              </h2>
              <div className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
                {service.process.map((p) => (
                  <div key={p.step} className="flex gap-2.5 sm:gap-3.5">
                    <span className="text-xs font-black text-pink-500 sm:text-sm">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-[#2D2433] sm:text-sm">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] leading-normal text-[#6B6570] sm:text-xs">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* CALL TO ACTION CARD */}
        <FadeUp delay={0.25}>
          <div className="mt-6 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50/60 to-white p-5 text-center shadow-xs sm:mt-10 sm:rounded-3xl sm:p-8">
            <h2 className="text-base font-extrabold text-[#2D2433] sm:text-xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-1 text-xs text-[#6B6570] sm:text-sm">
              Let&apos;s discuss your ideas and design needs together.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="rounded-full bg-pink-500 px-5 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-pink-600 hover:shadow-md sm:px-7 sm:py-2.5 sm:text-sm"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}