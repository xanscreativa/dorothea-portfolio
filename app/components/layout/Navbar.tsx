"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle"; // <-- Import LanguageToggle

const navItems = [
  { label: "Projects", href: "/#portfolio", isAnchor: true },
  { label: "About", href: "/about", isAnchor: false },
  { label: "Resume", href: "/resume.pdf", isExternal: true },
  { label: "Contact", href: "/#contact", isAnchor: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDFC]/90 backdrop-blur-md border-b border-pink-100/60 py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-base font-black tracking-tight text-[#2D2433] sm:text-lg hover:text-pink-600 transition-colors"
        >
          Dorothea Alexandra
        </Link>

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
            className="inline-flex items-center gap-2 rounded-full bg-[#2D2433] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-pink-500/10 hover:bg-pink-600 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden text-[#2D2433] p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FFFDFC]/95 backdrop-blur-xl border-b border-pink-100/80 shadow-lg px-6 py-6 md:hidden flex flex-col space-y-4">
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

          {/* Mobile Language Toggle & Resume Download */}
          <div className="pt-4 border-t border-pink-100/60 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6570]">Language</span>
            <LanguageToggle />
          </div>

          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download professional resume PDF"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#2D2433] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-pink-600 transition-all duration-300 cursor-pointer"
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