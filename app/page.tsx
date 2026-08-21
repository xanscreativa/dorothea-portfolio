import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import CreativeFilms from "@/components/sections/CreativeFilms";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Get to Know Me */}
        <About />

        {/* 3. Expertise & Toolkit */}
        <Skills />

        {/* 4. Selected Work / Portfolio */}
        <section id="portfolio" className="scroll-mt-24">
          <PortfolioGallery />
        </section>

        {/* 5. Video / Creative Films */}
        <section id="films" className="scroll-mt-24">
          <CreativeFilms />
        </section>

        {/* 6. Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}