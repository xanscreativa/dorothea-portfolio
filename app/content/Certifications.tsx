import FadeUp from "../components/animation/FadeUp";

const certifications = [
  {
    year: "2023",
    title: "UI/UX Design with Figma",
    organization: "Kementerian Ketenagakerjaan RI",
    description:
      "Completed professional training focused on UI/UX design principles, wireframing, prototyping, and interface design using Figma.",
  },
  {
    year: "2020",
    title: "Entrepreneurship in Animation",
    organization: "Kemenparekraf & AINAKI",
    description:
      "Professional certification covering animation industry, entrepreneurship, and creative business development.",
  },
];

export default function Certifications() {
  return (
    <section className="bg-[#FFF8FA] py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <p className="text-center uppercase tracking-[0.4em] text-pink-500">
          Certifications
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
          Continuous Learning
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[#6B6570]">
          I believe great designers never stop learning. These certifications
          reflect my commitment to growing both creatively and professionally.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {certifications.map((item, index) => (

            <FadeUp key={item.title} delay={index * 0.1}>

              <div className="rounded-[36px] border border-pink-100 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl">

                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-500">
                  {item.year}
                </span>

                <h3 className="mt-6 text-3xl font-black text-[#2D2433]">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-pink-500">
                  {item.organization}
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