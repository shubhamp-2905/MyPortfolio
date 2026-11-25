"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { EXPERIENCES } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      if (timelineLineRef.current && listRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: true,
            },
          }
        );
      }

      if (listRef.current) {
        const cards = listRef.current.querySelectorAll(".experience-card");
        gsap.from(cards, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="02"
          label="Experience"
          title="Applied engineering across data, AI, and full-stack."
          subtitle="Internships spanning geospatial ML pipelines, model experimentation, and production web systems."
        />

        <div ref={listRef} className="relative pl-6 md:pl-0">
          {/* Vertical scrubbed timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-1.5 top-2 w-[1px] bg-[var(--border)] md:left-[25%]"
          >
            <div
              ref={timelineLineRef}
              className="h-full w-full origin-top scale-y-0 bg-[var(--accent)]"
            />
          </div>

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="experience-card relative grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8"
              >
                {/* Timeline node with glowing pulse on active entry */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[22px] top-2.5 flex h-3 w-3 items-center justify-center md:left-[calc(25%-5px)] md:top-3"
                >
                  {exp.active && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-45" />
                  )}
                  <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] ${
                      exp.active ? "bg-[var(--accent)]" : "bg-[var(--bg)]"
                    }`}
                  />
                </span>

                {/* Sticky date column on desktop */}
                <div className="md:col-span-3 md:pr-6">
                  <div className="md:sticky md:top-24">
                    <p className="font-mono text-xs font-medium text-[var(--ink)]">
                      {exp.period}
                    </p>
                    <p className="mt-1 font-mono text-xs text-[var(--muted-ink)]">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Role & highlights card */}
                <SpotlightCard className="p-6 sm:p-7 md:col-span-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] font-mono text-xs font-semibold text-[var(--accent)]">
                        {exp.monogram}
                      </span>
                      <div>
                        <h3 className="text-lg font-medium tracking-tight text-[var(--ink)] sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-xs text-[var(--accent)]">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {exp.active && (
                      <span className="rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--muted-ink)]">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted-ink)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
