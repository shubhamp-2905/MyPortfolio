"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { EDUCATION } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".education-card");
      gsap.from(cards, {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="education"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="05"
          label="Education"
          title="Academic foundation."
        />

        <div ref={gridRef} className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {EDUCATION.map((edu) => (
            <SpotlightCard
              key={edu.institution}
              className="education-card flex flex-col justify-between p-6 sm:p-7"
            >
              <article>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[var(--muted-ink)]">
                    {edu.period}
                  </span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-0.5 font-mono text-xs font-medium text-[var(--accent)]">
                    {edu.score}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-tight text-[var(--ink)] sm:text-xl">
                  {edu.degree}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted-ink)]">
                  {edu.institution} · {edu.location}
                </p>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
