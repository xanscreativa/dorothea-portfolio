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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileMenuOpen(false);

    const sectionId = href.replace("/#", "");

    if (pathname !== "/") {
      router.push(href);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleBrandClick = () => {
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push("/#hero");
      return;
    }

    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const NavLink = ({
    item,
    isMobile = false,
  }: {
    item: NavItem;
    isMobile?: boolean;
  }) => {
    const baseClasses = isMobile
      ? "cursor-pointer py-1 text-left text-base font-semibold text-[#6B6570] transition-colors hover:text-[#2D2433]"
      : "cursor-pointer text-sm font-semibold text-[#6B6570] transition-colors hover:text-[#2D2433]";

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
          type="button"
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
        border-b
        border-pink-100/60
        bg-[#FFFDFC]
        py-2.5
        transition-all
        duration-300
        ${scrolledPastHero ? "shadow-sm" : ""}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT : BRAND / RESUME TITLE */}
        <div className="flex flex-shrink-0 items-center">
          <button
            type="button"
            onClick={handleBrandClick}
            aria-label="Back to hero section"
            className="relative flex h-8 cursor-pointer items-center text-left"
            style={{
              width:
                pathname === "/resume"
                  ? "120px"
                  : scrolledPastHero
                    ? "250px"
                    : "200px",
            }}
          >
            {/* KHUSUS HALAMAN RESUME */}
            {pathname === "/resume" ? (
              <span
                className="
                  absolute
                  inset-0
                  z-20
                  flex
                  items-center
                  whitespace-nowrap
                  text-sm
                  font-black
                  tracking-tight
                  text-pink-400
                  sm:text-base
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
                    z-20
                    flex
                    items-center
                    whitespace-nowrap
                    text-sm
                    font-black
                    tracking-tight
                    text-pink-400
                    transition-all
                    duration-700
                    ease-in-out
                    sm:text-base
                    ${
                      scrolledPastHero
                        ? "pointer-events-none -translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
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
                    z-20
                    flex
                    items-center
                    whitespace-nowrap
                    text-sm
                    font-black
                    tracking-tight
                    text-pink-400
                    transition-all
                    duration-700
                    ease-in-out
                    sm:text-base
                    ${
                      scrolledPastHero
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-full opacity-0"
                    }
                  `}
                >
                  {t("brandName")}
                </span>
              </>
            )}
          </button>
        </div>

        {/* CENTER : DESKTOP NAVIGATION */}
        <nav className="hidden flex-grow items-center justify-center px-8 md:flex">
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink key={item.labelKey} item={item} />
            ))}
          </div>
        </nav>

        {/* RIGHT : LANGUAGE TOGGLE */}
        <div className="hidden flex-shrink-0 items-center md:flex">
          <LanguageToggle />
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t(
            mobileMenuOpen ? "closeMenuAria" : "openMenuAria"
          )}
          className="
            z-30
            flex
            flex-shrink-0
            cursor-pointer
            p-1.5
            md:hidden
          "
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            right-0
            flex
            flex-col
            space-y-4
            border-b
            border-pink-100/80
            bg-[#FFFDFC]/95
            px-6
            py-5
            shadow-lg
            backdrop-blur-xl
            md:hidden
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
              flex
              items-center
              justify-between
              border-t
              border-pink-100/60
              pt-3
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