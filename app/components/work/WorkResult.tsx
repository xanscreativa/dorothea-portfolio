import { Project } from "@/app/types/project";

interface Props {
  project: Project;
}

export default function WorkResult({
  project,
}: Props) {
  return (
    <section className="bg-[#FFFDFB] py-24">

      <div className="mx-auto w-[92%] max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Result
        </p>

        <h2 className="mt-4 text-5xl font-black text-[#2D2433]">
          Project Outcome
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {project.result?.map((item) => (

            <div
              key={item}
              className="flex items-center gap-5 rounded-[28px] border border-pink-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-xl">

                ✓

              </div>

              <p className="text-lg font-medium text-[#2D2433]">

                {item}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}