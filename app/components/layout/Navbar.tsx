"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  labelKey: "projects" | "about" | "navResume" | "contact";
  href: string;
  isAnchor?: boolean;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  {
    labelKey: "projects",
    href: "/#portfolio",
    isAnchor: true,
  },
  {
    labelKey: "about",
    href: "/about",
    isAnchor: false,
  },
  {
    labelKey: "navResume",
    href: "/resume.pdf",
    isExternal: true,
  },
  {
    labelKey: "contact",
    href: "/#contact",
    isAnchor: true,
  },
];

export default function Navbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");

      const threshold = heroSection
        ? heroSection.getBoundingClientRect().bottom
        : window.innerHeight;

      setScrolledPastHero(threshold <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileMenuOpen(false);

    const sectionId = href.replace("/#", "");

    if (pathname !== "/") {
      router.push(href);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  const NavLink = ({
    item,
    isMobile = false,
  }: {
    item: NavItem;
    isMobile?: boolean;
  }) => {
    const baseClasses = isMobile
      ? "text-left text-base font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors py-1 cursor-pointer"
      : "text-sm font-semibold text-[#6B6570] hover:text-[#2D2433] transition-colors cursor-pointer";

    /* External Link */
    if (item.isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={() => {
            if (isMobile) {
              setMobileMenuOpen(false);
            }
          }}
        >
          {t(item.labelKey)}
        </a>
      );
    }

    /* Anchor Link */
    if (item.isAnchor) {
      return (
        <button
          onClick={() => handleAnchorClick(item.href)}
          className={baseClasses}
        >
          {t(item.labelKey)}
        </button>
      );
    }

    /* Internal Link */
    return (
      <Link
        href={item.href}
        className={baseClasses}
        onClick={() => {
          if (isMobile) {
            setMobileMenuOpen(false);
          }
        }}
      >
        {t(item.labelKey)}
      </Link>
    );
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        bg-[#FFFDFC]
        border-b
        border-pink-100/60
        py-2.5
        ${scrolledPastHero ? "shadow-sm" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* =====================================================
            LEFT : BRAND / RESUME TITLE
        ====================================================== */}
        <div className="flex items-center flex-shrink-0">

          <Link
            href="/"
            className="relative flex items-center h-8"
            style={{
              width:
                pathname === "/resume"
                  ? "120px"
                  : scrolledPastHero
                    ? "250px"
                    : "200px",
            }}
          >

            {/* =================================================
                KHUSUS HALAMAN RESUME
            ================================================== */}
            {pathname === "/resume" ? (
              <span
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  z-20
                  whitespace-nowrap
                  text-sm
                  sm:text-base
                  font-black
                  tracking-tight
                  text-pink-400
                "
              >
                My Resume
              </span>
            ) : (
              <>
                {/* Greeting */}
                <span
                  className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    z-20
                    transition-all
                    duration-700
                    ease-in-out
                    whitespace-nowrap
                    text-sm
                    sm:text-base
                    font-black
                    tracking-tight
                    text-pink-400
                    ${
                      scrolledPastHero
                        ? "opacity-0 -translate-y-full pointer-events-none"
                        : "opacity-100 translate-y-0"
                    }
                  `}
                >
                  {t("brandGreeting")}
                </span>

                {/* Brand Name */}
                <span
                  className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    z-20
                    transition-all
                    duration-700
                    ease-in-out
                    whitespace-nowrap
                    text-sm
                    sm:text-base
                    font-black
                    tracking-tight
                    text-pink-400
                    ${
                      scrolledPastHero
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full pointer-events-none"
                    }
                  `}
                >
                  {t("brandName")}
                </span>
              </>
            )}

          </Link>

        </div>

        {/* =====================================================
            CENTER : DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden md:flex items-center justify-center flex-grow px-8">

          <div className="flex items-center space-x-10">

            {navItems.map((item) => (
              <NavLink
                key={item.labelKey}
                item={item}
              />
            ))}

          </div>

        </nav>

        {/* =====================================================
            RIGHT : LANGUAGE TOGGLE
            DOWNLOAD BUTTON DIHAPUS
        ====================================================== */}
        <div className="hidden md:flex items-center flex-shrink-0">

          <LanguageToggle />

        </div>

        {/* =====================================================
            MOBILE MENU TOGGLE
        ====================================================== */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t(
            mobileMenuOpen
              ? "closeMenuAria"
              : "openMenuAria"
          )}
          className="
            md:hidden
            p-1.5
            cursor-pointer
            z-30
            flex-shrink-0
          "
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>

      {/* =======================================================
          MOBILE DROPDOWN MENU
      ======================================================== */}
      {mobileMenuOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            right-0
            bg-[#FFFDFC]/95
            backdrop-blur-xl
            border-b
            border-pink-100/80
            shadow-lg
            px-6
            py-5
            md:hidden
            flex
            flex-col
            space-y-4
          "
        >

          {/* Navigation Items */}
          {navItems.map((item) => (
            <NavLink
              key={item.labelKey}
              item={item}
              isMobile
            />
          ))}

          {/* Language */}
          <div
            className="
              pt-3
              border-t
              border-pink-100/60
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#6B6570]
              "
            >
              {t("language")}
            </span>

            <LanguageToggle />
          </div>

        </div>
      )}

    </header>
  );
}