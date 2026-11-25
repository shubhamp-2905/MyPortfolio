"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { SITE_CONFIG } from "@/lib/data";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, {
          type: "lines",
          mask: "lines",
        });
        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const btn = magneticBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(btn, {
      x: Math.max(-8, Math.min(8, relX * 16)),
      y: Math.max(-8, Math.min(8, relY * 16)),
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const btn = magneticBtnRef.current;
    if (!btn) return;
    gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted-ink)]">
            <span className="text-[var(--accent)]">07</span>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div aria-hidden="true" className="h-[1px] w-full bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              ref={headingRef}
              className="font-serif text-4xl leading-[1.04] tracking-[-0.025em] text-[var(--ink)] sm:text-6xl lg:text-[4.25rem]"
            >
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-ink)]">
              Open to Data Engineering, AI Engineering, and backend-focused roles or
              technical collaborations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                ref={magneticBtnRef}
                href={`mailto:${SITE_CONFIG.email}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="btn-primary-pill group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
              >
                <Mail className="h-4 w-4" />
                <span>Send an email</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-muted)]"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[var(--accent)]" />
                    <span>Email copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[var(--muted-ink)]" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <SpotlightCard className="p-6 lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
              Direct Channels
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center justify-between text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                >
                  <span className="truncate">{SITE_CONFIG.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-between text-[var(--muted-ink)] transition-colors hover:text-[var(--ink)]"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" />
                    {SITE_CONFIG.phone}
                  </span>
                </a>
              </li>
              <li className="border-t border-[var(--border)] pt-3">
                <div className="flex items-center gap-5 font-mono text-xs text-[var(--muted-ink)]">
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-underline hover:text-[var(--ink)]"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-underline hover:text-[var(--ink)]"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>

      {/* Subtle copy toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 rounded-full border border-[var(--border)] bg-[var(--ink)] px-4 py-2 font-mono text-xs text-white shadow-lg transition-all duration-300 ${
          copied
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        Copied {SITE_CONFIG.email}
      </div>
    </section>
  );
}
