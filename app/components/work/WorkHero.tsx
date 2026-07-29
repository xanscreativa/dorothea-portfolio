import Image from "next/image";
import { Project } from "@/app/types/project";

interface Props {
  project: Project;
}

export default function WorkHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#FFFDFB] pt-36 pb-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-100 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-rose-100 blur-[150px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          {project.category}
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.9] text-[#2D2433] lg:text-8xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-[#6B6570]">
          {project.subtitle}
        </p>

        <div className="mt-12 flex flex-wrap gap-8">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-pink-500">
              Client
            </p>

            <p className="mt-2 font-semibold text-[#2D2433]">
              {project.client}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-pink-500">
              Year
            </p>

            <p className="mt-2 font-semibold text-[#2D2433]">
              {project.year}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-pink-500">
              Duration
            </p>

            <p className="mt-2 font-semibold text-[#2D2433]">
              {project.duration}
            </p>
          </div>

        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,.12)]">

          <Image
            src={project.hero ?? project.cover ?? "/"}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}