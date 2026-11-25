"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { PROJECTS, SITE_CONFIG } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/sections/ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !stackRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = stackRef.current?.querySelectorAll<HTMLElement>(
          ".stacked-project-card"
        );
        if (!cards || cards.length < 2) return;

        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;

          const nextCard = cards[index + 1];
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.72,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 75%",
              end: "top 20%",
              scrub: true,
            },
          });
        });

        return () => {
          ScrollTrigger.refresh();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="03"
          label="Selected Work"
          title="Systems built end to end."
          subtitle="Architecture case studies across multimodal RAG, Medallion data pipelines, and multi-agent workflows."
        />

        {/* Featured case studies: Evidentia AI (first), FoodChain AI, Investment Council */}
        <div ref={stackRef} className="flex flex-col gap-8 md:gap-10">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="stacked-project-card md:sticky"
              style={{ top: `${88 + idx * 20}px` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Compact project card (TalentSync) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* More projects CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-7">
          <p className="font-mono text-xs text-[var(--muted-ink)]">
            Additional repositories, experiments, and coursework
          </p>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <span>Explore more on GitHub</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
