"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";
import { useLenisControl } from "@/components/shared/SmoothScroll";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { stop, start } = useLenisControl();

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

  // Mobile overlay: staggered link reveal, ESC to close, focus trap, Lenis + body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      stop();
    } else {
      document.body.style.overflow = "";
      start();
    }

    if (!mobileOpen || !mobileMenuRef.current) {
      return () => {
        document.body.style.overflow = "";
        start();
      };
    }

    const menuEl = mobileMenuRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const links = menuEl.querySelectorAll(".mobile-nav-item");
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
    }

    const focusable = menuEl.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];
    firstEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      start();
    };
  }, [mobileOpen, stop, start]);

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
            className={`flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5 ${
              scrolled
                ? "border-[var(--border)] bg-white/85 shadow-[0_4px_20px_rgba(14,17,22,0.04)] backdrop-blur-md"
                : "border-[var(--border)]/75 bg-white/70 backdrop-blur-sm"
            }`}
          >
            <a
              href="#top"
              className="flex min-h-[44px] items-center gap-2.5 text-sm font-medium tracking-tight text-[var(--ink)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] font-serif text-sm text-[var(--ink)]">
                {SITE_CONFIG.monogram}
              </span>
              <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
            </a>

            {/* Desktop links (1024px+) */}
            <ul className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    data-active={activeId === link.id}
                    className={`nav-link-underline inline-flex min-h-[44px] items-center text-[13px] font-medium transition-colors ${
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

            <div className="flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-[44px] items-center rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:inline-flex"
              >
                Resume
              </a>

              <button
                ref={toggleBtnRef}
                type="button"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:border-[var(--border-hover)] lg:hidden"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen light overlay (< 1024px) */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-[var(--bg)] px-6 pb-10 pt-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted-ink)]">
              Navigation
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => {
                setMobileOpen(false);
                toggleBtnRef.current?.focus();
              }}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="my-6 flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => (
              <li
                key={link.id}
                className="mobile-nav-item border-b border-[var(--border)]"
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[52px] items-baseline justify-between py-2 font-serif text-3xl text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
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
              className="btn-primary-pill inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white"
            >
              Download Resume
            </a>
            <p className="break-words text-center font-mono text-xs text-[var(--muted-ink)]">
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
