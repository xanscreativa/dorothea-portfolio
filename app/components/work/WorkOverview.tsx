import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function WorkOverview({
  project,
}: Props) {
  return (
    <div>

      {/* Overview */}

      <section className="border-b border-pink-100 pb-20">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Overview
        </p>

        <h2 className="mt-6 text-5xl font-black leading-tight text-[#2D2433]">
          Building a memorable
          <br />
          visual identity.
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base">
          {project.overview}
        </p>

      </section>

      {/* Challenge */}

      <section className="border-b border-pink-100 py-20">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Challenge
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base">
          {project.challenge}
        </p>

      </section>

      {/* Solution */}

      <section className="py-20">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Solution
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base">
          {project.solution}
        </p>

      </section>

    </div>
  );
}