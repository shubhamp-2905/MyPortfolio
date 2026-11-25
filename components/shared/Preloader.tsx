"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { SITE_CONFIG } from "@/lib/data";

const SESSION_KEY = "sp_preloader_seen";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const dismiss = () => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(new CustomEvent("preloader:complete"));
    setVisible(false);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (prefersReducedMotion || alreadySeen) {
      window.dispatchEvent(new CustomEvent("preloader:complete"));
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      setVisible(true);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (!visible || !containerRef.current || !monogramRef.current || !lineRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            // ignore
          }
          window.dispatchEvent(new CustomEvent("preloader:complete"));
          setVisible(false);
        },
      });

      tlRef.current = tl;

      tl.fromTo(
        monogramRef.current,
        { opacity: 0, y: 12, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.45,
          ease: "power3.out",
        }
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.35, ease: "power3.out" },
          "-=0.2"
        )
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "+=0.05"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[var(--bg)]"
    >
      <div className="flex flex-col items-center gap-3">
        <span
          ref={monogramRef}
          className="font-serif text-4xl tracking-tight text-[var(--ink)]"
        >
          {SITE_CONFIG.monogram}
        </span>
        <div className="h-[1px] w-12 overflow-hidden bg-[var(--border)]">
          <div
            ref={lineRef}
            className="h-full w-full origin-left scale-x-0 bg-[var(--accent)]"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)] transition-colors hover:text-[var(--ink)]"
      >
        Skip
      </button>
    </div>
  );
}
