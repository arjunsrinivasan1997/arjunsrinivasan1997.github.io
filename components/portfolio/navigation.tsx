/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement
      );

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const marker = scrollTop + viewportHeight * 0.5;

      const sectionTops = sections.map((section) => ({
        id: `#${section.id}`,
        top: section.getBoundingClientRect().top + scrollTop,
      }));

      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        const rect = lastSection.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.75 && rect.bottom > 0) {
          setActiveSection(`#${lastSection.id}`);
          return;
        }
      }

      const firstSectionTop = sectionTops[0]?.top ?? 0;
      if (marker < firstSectionTop) {
        setActiveSection("");
        return;
      }

      let currentSection = sectionTops[0]?.id ?? "";
      sectionTops.forEach((section) => {
        if (marker >= section.top) {
          currentSection = section.id;
        }
      });

      const docHeight = document.documentElement.scrollHeight;
      if (scrollTop + viewportHeight >= docHeight - 50) {
        currentSection =
          sectionTops[sectionTops.length - 1]?.id ?? currentSection;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    const rafId = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg py-4"
            : "py-6"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <img
              src="/icon_transparent.png"
              alt="Site logo"
              width={56}
              height={56}
              className="size-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={cn(
                    "text-sm transition-colors duration-200",
                    activeSection === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="border border-primary text-primary px-4 py-2 rounded text-sm font-mono hover:bg-primary/10 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={cn(
                    "text-lg transition-colors duration-200",
                    activeSection === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/resume.pdf"
                className="border border-primary text-primary px-6 py-3 rounded text-sm font-mono hover:bg-primary/10 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
