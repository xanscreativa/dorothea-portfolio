"use client";

import { Project } from "@/app/types/project";

interface Props {
  project: Project;
}

const labels = [
  "Primary",
  "Heading",
  "Background",
  "Accent",
];

export default function WorkPalette({ project }: Props) {
  return (
    <section className="bg-[#FFF8FA] py-24">

      <div className="mx-auto w-[92%] max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Color Palette
        </p>

        <h2 className="mt-4 text-5xl font-black text-[#2D2433]">
          Visual Identity Colors
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {project.colors?.map((color, index) => (

            <button
              key={color}
              onClick={() => navigator.clipboard.writeText(color)}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
            >

              <div
                className="h-52 w-full"
                style={{
                  backgroundColor: color,
                }}
              />

              <div className="p-8">

                <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
                  {labels[index] ?? "Color"}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#2D2433]">
                  {color}
                </h3>

                <p className="mt-4 text-sm text-[#6B6570] transition group-hover:text-pink-500">
                  Click to copy
                </p>

              </div>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}