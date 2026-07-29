import FadeUp from "../components/animation/FadeUp";

const achievements = [
  {
    title: "1st Place Packaging Design",
    event: "FESTFORATIKA #3",
    year: "2022",
    description:
      "National packaging design competition winner.",
  },
  {
    title: "Winner Logo Design",
    event: "63rd Anniversary Pelkat PA GPIB",
    year: "2022",
    description:
      "Winning logo selected for the anniversary celebration.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#FFFDFB] py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <p className="text-center uppercase tracking-[0.4em] text-pink-500">
          Achievements
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
          Milestones I&apos;m Proud Of
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[#6B6570]">
          A selection of design achievements that reflect my passion for creating
          meaningful visual experiences.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {achievements.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <div className="group rounded-[36px] border border-pink-100 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-3xl">
                  🏆
                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.3em] text-pink-500">
                  {item.year}
                </p>

                <h3 className="mt-3 text-3xl font-black text-[#2D2433]">
                  {item.title}
                </h3>

                <p className="mt-3 font-medium text-pink-500">
                  {item.event}
                </p>

                <p className="mt-6 leading-8 text-[#6B6570]">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
