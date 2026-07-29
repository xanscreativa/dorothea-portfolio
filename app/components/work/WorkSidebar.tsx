"use client";

import { Project } from "@/app/types/project";
import useScrollSpy from "./useScrollSpy";

interface Props {
  project: Project;
}

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "palette",
    label: "Palette",
  },
  {
    id: "typography",
    label: "Typography",
  },
  {
    id: "gallery",
    label: "Gallery",
  },
  {
    id: "result",
    label: "Result",
  },
];

export default function WorkSidebar({
  project,
}: Props) {
  const active = useScrollSpy(
    sections.map((item) => item.id)
  );

  return (
    <aside className="sticky top-28 h-fit">

      <div className="overflow-hidden rounded-[32px] border border-pink-100 bg-white shadow-xl">

        {/* Navigation */}

        <div className="border-b border-pink-100 p-8">

          <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
            Navigation
          </p>

          <div className="mt-6 space-y-2">

            {sections.map((item) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active === item.id
                    ? "bg-[#E85D8E] text-white shadow-lg"
                    : "text-[#6B6570] hover:bg-pink-50"
                }`}
              >
                <span>{item.label}</span>

                {active === item.id && (
                  <span>●</span>
                )}

              </a>

            ))}

          </div>

        </div>

        {/* Project Info */}

        <div className="p-8">

          <Info title="Client" value={project.client ?? "—"} />

          <Info title="Year" value={project.year ?? "—"} />

          <Info title="Duration" value={project.duration ?? "—"} />

          <Info title="Role" value={project.role ?? "—"} />

          <Tags title="Software" items={project.software ?? []} filled />

          <Tags title="Services" items={project.services ?? []} />

        </div>

      </div>

    </aside>
  );
}

interface InfoProps {
  title: string;
  value: string;
}

function Info({
  title,
  value,
}: InfoProps) {
  return (
    <div className="mb-7">

      <p className="text-xs uppercase tracking-[0.3em] text-pink-500">
        {title}
      </p>

      <p className="mt-2 font-semibold text-[#2D2433]">
        {value}
      </p>

    </div>
  );
}

interface TagsProps {
  title: string;
  items: string[];
  filled?: boolean;
}

function Tags({
  title,
  items,
  filled = false,
}: TagsProps) {
  return (
    <div className="mt-8">

      <p className="text-xs uppercase tracking-[0.3em] text-pink-500">
        {title}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">

        {items.map((item) => (

          <span
            key={item}
            className={
              filled
                ? "rounded-full bg-pink-100 px-3 py-2 text-sm font-medium text-pink-600"
                : "rounded-full border border-pink-200 px-3 py-2 text-sm text-[#2D2433]"
            }
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}