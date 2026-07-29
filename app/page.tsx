import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import PortfolioGallery from "./components/sections/PortfolioGallery";
import CreativeFilms from "./components/sections/CreativeFilms";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />

        {/* Section Featured Projects */}
        <section id="portfolio" className="scroll-mt-24">
          <PortfolioGallery />
        </section>

        {/* Section Video Portfolio */}
        <section id="films" className="scroll-mt-24">
          <CreativeFilms />
        </section>

        {/* Section Professional Experience */}
        <section id="experience" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#FFF8FB] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.4em]">
                Career History
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#2D2433] sm:text-4xl">
                Professional Experience
              </h2>
              <p className="mt-3 text-xs sm:text-base text-[#6B6570]">
                A timeline of professional roles and contributions in design and media production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-[0_4px_16px_rgba(229,135,176,0.06)] hover:border-pink-300 transition-all">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">2024–Present</span>
                <h3 className="mt-2 text-xl font-bold text-[#2D2433]">Graphic Designer</h3>
                <p className="text-sm font-medium text-[#6B6570] mt-1">Company</p>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-[0_4px_16px_rgba(229,135,176,0.06)] hover:border-pink-300 transition-all">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">2023–2024</span>
                <h3 className="mt-2 text-xl font-bold text-[#2D2433]">Video Editor</h3>
                <p className="text-sm font-medium text-[#6B6570] mt-1">Organization</p>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-pink-100/90 rounded-2xl p-6 shadow-[0_4px_16px_rgba(229,135,176,0.06)] hover:border-pink-300 transition-all">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">2022–Present</span>
                <h3 className="mt-2 text-xl font-bold text-[#2D2433]">Freelance Designer</h3>
                <p className="text-sm font-medium text-[#6B6570] mt-1">Independent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Core Skills */}
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {/* Section About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Section Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}