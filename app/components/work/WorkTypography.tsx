import { Project } from "@/app/types/project";

interface Props {
  project: Project;
}

export default function WorkTypography({ project }: Props) {
  return (
    <section className="bg-[#FFFDFB] py-24">

      <div className="mx-auto w-[92%] max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-pink-500">
          Typography
        </p>

        <h2 className="mt-4 text-5xl font-black text-[#2D2433]">
          Typography System
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[36px] bg-white p-12 shadow-lg">

            <p className="text-sm uppercase tracking-[0.35em] text-pink-500">
              Font Family
            </p>

            <h3 className="mt-6 text-5xl font-black text-[#2D2433]">
              {typeof project.typography === "string"
                ? project.typography
                : project.typography?.fontFamily}
            </h3>

            <div className="mt-10 space-y-6">

              <h1 className="text-6xl font-black text-[#2D2433]">
                Aa
              </h1>

              <p className="text-3xl font-bold text-[#2D2433]">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>

              <p className="text-2xl text-[#6B6570]">
                abcdefghijklmnopqrstuvwxyz
              </p>

              <p className="text-xl text-[#6B6570]">
                1234567890
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[36px] bg-white p-12 shadow-lg">

            <p className="text-sm uppercase tracking-[0.35em] text-pink-500">
              Type Scale
            </p>

            <div className="mt-10 space-y-8">

              <div>

                <p className="text-sm text-pink-500">
                  Display
                </p>

                <h1 className="text-6xl font-black text-[#2D2433]">
                  Creative
                </h1>

              </div>

              <div>

                <p className="text-sm text-pink-500">
                  Heading
                </p>

                <h2 className="text-4xl font-bold text-[#2D2433]">
                  Premium Branding
                </h2>

              </div>

              <div>

                <p className="text-sm text-pink-500">
                  Body
                </p>

                <p className="text-lg leading-8 text-[#6B6570]">
                  The quick brown fox jumps over the lazy dog.
                </p>

              </div>

              <div>

                <p className="text-sm text-pink-500">
                  Caption
                </p>

                <p className="text-sm text-[#6B6570]">
                  Consistency creates memorable brands.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}