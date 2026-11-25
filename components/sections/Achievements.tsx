"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ACHIEVEMENTS } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".achievement-card");
      gsap.from(cards, {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
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
      id="achievements"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="06"
          label="Achievements & Certifications"
          title="Recognition and verified credentials."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {ACHIEVEMENTS.map((item) => (
            <SpotlightCard
              key={item.title}
              className="achievement-card flex flex-col justify-between p-6"
            >
              <article className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                      {item.type}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted-ink)]">
                      {item.issuer}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-medium leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-ink)]">
                    {item.detail}
                  </p>
                </div>

                {item.verifyUrl && (
                  <div className="mt-5 border-t border-[var(--border)] pt-4">
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-mono text-xs text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span>Verify credential</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                )}
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
