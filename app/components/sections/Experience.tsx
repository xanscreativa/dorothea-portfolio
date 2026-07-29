import FadeUp from "../animation/FadeUp";

const experiences = [
  {
    year: "2023",
    title: "Graphic Designer (Freelance)",
    company: "SIMS Working Group GPIB Children's Ministry Council",
    duration: "2022 — Present",
  },
  {
    year: "2022",
    title: "Content Creator",
    company: "Promotion, Public Relations & Alumni Bureau - SWCU",
    duration: "Internship",
  },
  {
    year: "2022",
    title: "Packaging Assistant Lecturer",
    company: "Visual Communication Design - SWCU",
    duration: "4 Months",
  },
  {
    year: "2022",
    title: "Research Project Assistant",
    company: "Matching Fund Kedaireka 2022",
    duration: "1 Year",
  },
  {
    year: "2021",
    title: "Graphic Designer",
    company: "Dreams Studio Salatiga",
    duration: "Internship",
  },
  {
    year: "2018",
    title: "Content Creator",
    company: "Pelkat PA GPIB Taman Sari Salatiga",
    duration: "Freelance",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FFF8FA] py-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <p className="text-center uppercase tracking-[0.4em] text-pink-500">
          Experience
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
          My Journey
        </h2>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-7 top-0 h-full w-0.5 bg-pink-200" />

          {experiences.map((item, index) => (
            <FadeUp key={item.title + index} delay={index * 0.08}>
              <div className="relative mb-12 flex gap-8">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D8E] text-sm font-bold text-white shadow-lg">
                  {item.year}
                </div>

                <div className="flex-1 rounded-[28px] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-[#2D2433]">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-pink-100 px-4 py-1 text-sm text-pink-500">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-4 leading-8 text-[#6B6570]">
                    {item.company}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
