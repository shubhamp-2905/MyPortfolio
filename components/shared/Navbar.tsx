"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (currentY > 120 && currentY > lastScrollY.current + 6 && !mobileOpen) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 6 || currentY <= 80) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useGSAP(() => {
    const triggers = NAV_LINKS.map((link) => {
      const el = document.getElementById(link.id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveId(link.id),
        onEnterBack: () => setActiveId(link.id),
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const links = mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
    gsap.fromTo(
      links,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed left-0 right-0 top-0 z-40 transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="site-container pt-3">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? "border-[var(--border)] bg-white/85 shadow-[0_4px_20px_rgba(14,17,22,0.04)] backdrop-blur-md"
                : "border-[var(--border)]/75 bg-white/70 backdrop-blur-sm"
            }`}
          >
            <a
              href="#top"
              className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-[var(--ink)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] font-serif text-sm text-[var(--ink)]">
                {SITE_CONFIG.monogram}
              </span>
              <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
            </a>

            <ul className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    data-active={activeId === link.id}
                    className={`nav-link-underline text-[13px] font-medium transition-colors ${
                      activeId === link.id
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted-ink)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
              >
                Resume
              </a>

              <button
                type="button"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:border-[var(--border-hover)] md:hidden"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-30 flex flex-col justify-between bg-[var(--bg)] px-6 pb-10 pt-24 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, idx) => (
              <li
                key={link.id}
                className="mobile-nav-item border-b border-[var(--border)] pb-3"
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-baseline justify-between font-serif text-3xl text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[var(--muted-ink)]">
                    0{idx + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-item flex flex-col gap-3">
            <a
              href={SITE_CONFIG.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="btn-primary-pill inline-flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white"
            >
              Download Resume
            </a>
            <p className="text-center font-mono text-xs text-[var(--muted-ink)]">
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
