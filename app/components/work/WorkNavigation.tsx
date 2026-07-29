import Image from "next/image";
import Link from "next/link";

import { Project } from "@/app/types/project";

interface Props {
  current: Project;
  projects: Project[];
}

export default function WorkNavigation({
  current,
  projects,
}: Props) {
  const index = projects.findIndex(
    (project) => project.slug === current.slug
  );

  const previous =
    index > 0
      ? projects[index - 1]
      : null;

  const next =
    index < projects.length - 1
      ? projects[index + 1]
      : null;

  return (
    <section className="bg-[#FFF8FA] py-24">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-8 lg:grid-cols-2">

        {/* Previous */}

        {previous ? (
          <ProjectCard
            project={previous}
            type="previous"
          />
        ) : (
          <div />
        )}

        {/* Next */}

        {next ? (
          <ProjectCard
            project={next}
            type="next"
          />
        ) : (
          <div />
        )}

      </div>
    </section>
  );
}

interface CardProps {
  project: Project;
  type: "previous" | "next";
}

function ProjectCard({
  project,
  type,
}: CardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group overflow-hidden rounded-[36px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        type === "next"
          ? "text-right"
          : ""
      }`}
    >
      <div className="overflow-hidden">

        <Image
          src={project.cover ?? "/"}
          alt={project.title}
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
          {type === "previous"
            ? "← Previous Project"
            : "Next Project →"}
        </p>

        <span className="mt-5 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
          {project.category}
        </span>

        <h3 className="mt-6 text-3xl font-black text-[#2D2433] transition group-hover:text-pink-500">
          {project.title}
        </h3>

        <p className="mt-4 text-[#6B6570]">
          {project.subtitle}
        </p>

      </div>
    </Link>
  );
}