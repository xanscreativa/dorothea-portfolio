"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";

const navItems = [
  { label: "Projects", href: "/#portfolio", isAnchor: true },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Resume", href: "/resume.pdf", isExternal: true },
  { label: "Contact", href: "/#contact", isAnchor: true },
];

export default function Navbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setScrolledPastHero(heroBottom <= 0);
      } else {
        setScrolledPastHero(window.scrollY > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileMenuOpen(false);
    const sectionId = href.replace("/#", "");
    if (pathname !== "/") {
      router.push(href);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFDFC] border-b border-pink-100/60 ${
        scrolledPastHero
          ? "py-2 sm:py-2.5 shadow-sm"
          : "py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Smooth Cross-Fade Transition */}
        <div className="flex items-center">
          <Link
            href="/"
            className="relative flex items-center h-7 sm:h-8 overflow-hidden"
            style={{ minWidth: scrolledPastHero ? '250px' : '200px' }}
          >
            {/* Teks Hello (Muncul saat di Hero) */}
            <span
              className={`absolute left-0 top-0 transition-all duration-700 ease-in-out whitespace-nowrap text-sm sm:text-base font-black tracking-tight text-pink-400 ${
                scrolledPastHero
                  ? "opacity-0 -translate-y-full"
                  : "opacity-100 translate-y-0"
              }`}
            >
              Hello, this is my portfolio!
            </span>

            {/* Teks Nama (Muncul setelah melewati Hero) */}
            <span
              className={`absolute left-0 top-0 transition-all duration-700 ease-in-out whitespace-nowrap text-sm sm:text-base font-black tracking-tight text-pink-400 ${
                scrolledPastHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              Dorothea Alexandra Manuputty, S.Ds
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              );
            }
            if (item.isAnchor) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-sm font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button & Language Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download professional resume PDF"
            className="inline-flex items-center gap-2 rounded-full bg-[#2D2433] px-4 py-2 text-xs font-bold text-white shadow-md shadow-pink-500/10 hover:bg-pink-600 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden text-[#2D2433] p-1.5 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FFFDFC]/95 backdrop-blur-xl border-b border-pink-100/80 shadow-lg px-6 py-5 md:hidden flex flex-col space-y-4">
          {navItems.map((item) => {
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-base font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </a>
              );
            }
            if (item.isAnchor) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-left text-base font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-base font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors py-1 cursor-pointer"
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-pink-100/60 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6570]">Language</span>
            <LanguageToggle />
          </div>

          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#2D2433] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-pink-600 transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}