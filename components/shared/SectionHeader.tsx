"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const numeralRef = useRef<HTMLSpanElement>(null);

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

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 86%",
              once: true,
            },
          });

          if (labelRef.current) {
            tl.from(labelRef.current, {
              x: -12,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
            });
          }

          if (lineRef.current) {
            tl.from(
              lineRef.current,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.4"
            );
          }

          if (titleRef.current && isDesktop) {
            const split = new SplitText(titleRef.current, {
              type: "lines",
              mask: "lines",
            });
            tl.from(
              split.lines,
              {
                yPercent: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
              },
              "-=0.45"
            );
          } else if (titleRef.current) {
            tl.from(
              titleRef.current,
              {
                y: 14,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
              },
              "-=0.4"
            );
          }

          if (numeralRef.current && isDesktop) {
            gsap.to(numeralRef.current, {
              yPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: headerRef }
  );

  return (
    <div ref={headerRef} className="relative mb-10 md:mb-12">
      {/* Giant outlined serif numeral in background */}
      <span
        ref={numeralRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none font-serif text-[5rem] leading-none tracking-tight text-transparent sm:text-[7rem] lg:text-[8.5rem]"
        style={{
          WebkitTextStroke: "1px rgba(14, 17, 22, 0.065)",
        }}
      >
        {index}
      </span>

      <div className="mb-4 flex items-center gap-4">
        <div
          ref={labelRef}
          className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted-ink)]"
        >
          <span className="text-[var(--accent)]">{index}</span>
          <span>/</span>
          <span>{label}</span>
        </div>
        <div
          ref={lineRef}
          aria-hidden="true"
          className="h-[1px] w-full bg-[var(--border)]"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
        <h2
          ref={titleRef}
          className="font-serif text-[clamp(2rem,4vw,3.15rem)] leading-[1.06] tracking-[-0.02em] text-[var(--ink)] md:col-span-8"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm leading-relaxed text-[var(--muted-ink)] md:col-span-4 md:text-right">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
