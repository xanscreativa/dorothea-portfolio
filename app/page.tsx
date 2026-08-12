import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import PortfolioGallery from "./components/sections/PortfolioGallery";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./content/Services";
import CreativeProcess from "./components/sections/CreativeProcess";
import CreativeFilms from "./components/sections/CreativeFilms";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />

        {/* Section Work / Portfolio */}
        <section id="portfolio" className="scroll-mt-24">
          <PortfolioGallery />
        </section>

        <About />

        <Skills />

        {/* Section Services */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <CreativeProcess />

        {/* Section Films */}
        <section id="films" className="scroll-mt-24">
          <CreativeFilms />
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