"use client";

import { useRef } from "react";
import { Compass, MapPin } from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { ENGINEERING_PRINCIPLES, SITE_CONFIG } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const isDesktop = Boolean(context.conditions?.isDesktop);

          if (summaryRef.current && isDesktop) {
            const split = new SplitText(summaryRef.current, { type: "words" });
            gsap.fromTo(
              split.words,
              { opacity: 0.25 },
              {
                opacity: 1,
                stagger: 0.035,
                ease: "none",
                scrollTrigger: {
                  trigger: summaryRef.current,
                  start: "top 82%",
                  end: "bottom 55%",
                  scrub: true,
                },
              }
            );
          }

          if (bentoRef.current) {
            const cards = bentoRef.current.querySelectorAll(".bento-item");
            gsap.from(cards, {
              y: isDesktop ? 20 : 12,
              opacity: 0,
              duration: isDesktop ? 0.75 : 0.55,
              stagger: 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bentoRef.current,
                start: "top 85%",
                once: true,
              },
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="01"
          label="About"
          title="Engineering for reliability, not novelty."
          subtitle="Where data engineering meets applied AI—built for correctness, latency, and auditability."
        />

        {/* Bento Grid: 4 cols desktop, 2 cols tablet, 1 col phone */}
        <div
          ref={bentoRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Bio card */}
          <SpotlightCard className="bento-item flex flex-col justify-between p-6 sm:p-8 md:col-span-2 lg:col-span-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                Background
              </p>
              <p
                ref={summaryRef}
                className="mt-4 max-w-[68ch] text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.62] tracking-[-0.01em] text-[var(--ink)]"
              >
                {SITE_CONFIG.bio}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4 font-mono text-[11px] text-[var(--muted-ink)]">
              <span>VIIT Pune · B.Tech CS (Data Science)</span>
              <span>·</span>
              <span className="text-[var(--ink)]">9.06 CGPA</span>
            </div>
          </SpotlightCard>

          {/* Currently building card */}
          <SpotlightCard className="bento-item flex flex-col justify-between p-6 sm:p-8 md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                  Currently Building
                </p>
                <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--accent)]">
                  Loupe Earth
                </span>
              </div>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[var(--ink)]">
                {SITE_CONFIG.currentlyBuilding}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {["Python", "Geospatial ML", "Next.js", "TypeScript", "Supabase"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted-ink)]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </SpotlightCard>

          {/* Principles card */}
          <SpotlightCard className="bento-item p-6 sm:p-8 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-[var(--accent)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                Engineering Principles
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {ENGINEERING_PRINCIPLES.map((item) => (
                <div
                  key={item.index}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <span className="font-mono text-[11px] text-[var(--accent)]">
                    {item.index}
                  </span>
                  <h3 className="mt-2 text-sm font-medium text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted-ink)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Key Proof Stats card */}
          <SpotlightCard className="bento-item flex flex-col justify-between p-6 sm:p-7 md:col-span-1 lg:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
              Measured Impact
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border)] pb-2">
                <span className="font-mono text-xs text-[var(--muted-ink)]">
                  Latency
                </span>
                <span className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
                  342 → 18 ms
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border)] pb-2">
                <span className="font-mono text-xs text-[var(--muted-ink)]">
                  SQL Queries
                </span>
                <span className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
                  376 → 2
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-xs text-[var(--muted-ink)]">
                  Records
                </span>
                <span className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
                  16K+
                </span>
              </div>
            </div>
          </SpotlightCard>

          {/* Location & availability card */}
          <SpotlightCard className="bento-item flex flex-col justify-between p-6 sm:p-7 md:col-span-1 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                <MapPin className="h-3.5 w-3.5" />
                <span>Location</span>
              </div>
              <p className="mt-3 font-serif text-2xl text-[var(--ink)]">
                {SITE_CONFIG.location}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--muted-ink)]">
                IST (UTC+5:30) · Collaborating across US &amp; global teams.
              </p>
            </div>
            <div className="mt-5 border-t border-[var(--border)] pt-3">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--ink)]">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Open to Data &amp; AI roles
              </span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
