"use client";

import { useRef } from "react";
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SKILL_GROUPS, type SkillGroup } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotlightCard from "@/components/shared/SpotlightCard";

function SkillGroupIcon({ iconKey }: { iconKey: SkillGroup["iconKey"] }) {
  const cls = "h-4 w-4 text-[var(--accent)]";
  switch (iconKey) {
    case "code":
      return <Code2 className={cls} />;
    case "database":
      return <Database className={cls} />;
    case "server":
      return <Server className={cls} />;
    case "cloud":
      return <Cloud className={cls} />;
    case "cpu":
      return <Cpu className={cls} />;
    case "sparkles":
      return <Sparkles className={cls} />;
    default:
      return <Wrench className={cls} />;
  }
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !gridRef.current) return;

      const chips = gridRef.current.querySelectorAll(".skill-chip");
      gsap.from(chips, {
        y: 12,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="border-t border-[var(--border)] py-16 md:py-24"
    >
      <div className="site-container">
        <SectionHeader
          index="04"
          label="Skills"
          title="Core technical stack."
          subtitle="Grouped by layer—from relational storage and data quality to multimodal and agentic AI."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map((group) => (
            <SpotlightCard key={group.category} className="p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                  <SkillGroupIcon iconKey={group.iconKey} />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
                  {group.category}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition-colors duration-200 hover:border-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
