"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE_CONFIG } from "@/lib/data";

interface ByTheNumbersClientProps {
  publicRepos: number | null;
  followers: number | null;
}

export default function ByTheNumbersClient({
  publicRepos,
  followers,
}: ByTheNumbersClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !gridRef.current) return;

      const counters =
        gridRef.current.querySelectorAll<HTMLElement>("[data-count-to]");
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.countTo || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.textContent =
              decimals > 0
                ? obj.val.toFixed(decimals)
                : Math.round(obj.val).toString();
          },
        });
      });

      const tiles = gridRef.current.querySelectorAll(".number-tile");
      gsap.from(tiles, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
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
      id="metrics"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0F19] py-16 text-white md:py-24"
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-[#3730A3]/25 blur-[130px]"
      />

      <div className="site-container relative z-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-300">
              By the numbers
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-white sm:text-5xl">
              Measurable engineering output.
            </h2>
          </div>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-white/90 transition-colors hover:border-indigo-400/50 hover:bg-white/10"
          >
            <span>Visit GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* 9.06 CGPA */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
              <span data-count-to="9.06" data-decimals="2">
                9.06
              </span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Academic CGPA
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              B.Tech Computer Science (Data Science), VIIT Pune
            </p>
          </div>

          {/* LIVE GitHub repos */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <p className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
                {publicRepos !== null ? (
                  <span data-count-to={publicRepos} data-decimals="0">
                    {publicRepos}
                  </span>
                ) : (
                  <span>—</span>
                )}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Public GitHub Repositories
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              {followers !== null
                ? `${followers} followers on @${SITE_CONFIG.githubUsername}`
                : `@${SITE_CONFIG.githubUsername}`}
            </p>
          </div>

          {/* 1 Sponsored project */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
              <span data-count-to="1" data-decimals="0">
                1
              </span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Sponsored Project
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              Evidentia AI · Code Culture Technical Solutions
            </p>
          </div>

          {/* 16K+ records */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
              <span data-count-to="16" data-decimals="0">
                16
              </span>
              <span className="text-indigo-300">K+</span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Records Processed
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              Supplier-product records in FoodChain AI Medallion pipeline
            </p>
          </div>

          {/* 376 to 2 queries */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
              <span className="text-white/40 line-through">376</span>{" "}
              <span className="text-indigo-300">→</span>{" "}
              <span data-count-to="2" data-decimals="0">
                2
              </span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Queries Per Request
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              PostgreSQL indexing &amp; schema optimization
            </p>
          </div>

          {/* 342 to 18 ms */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
              <span className="text-white/40 line-through">342</span>{" "}
              <span className="text-indigo-300">→</span>{" "}
              <span data-count-to="18" data-decimals="0">
                18
              </span>{" "}
              <span className="font-sans text-lg text-white/70">ms</span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Mean Response Time
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              FastAPI recommendation engine latency reduction
            </p>
          </div>

          {/* 2 Hackathon/ideathon podiums */}
          <div className="number-tile rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:col-span-2">
            <p className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
              <span data-count-to="2" data-decimals="0">
                2
              </span>
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-indigo-300">
              Hackathon &amp; Ideathon Podiums
            </p>
            <p className="mt-1.5 text-xs text-white/65">
              First Prize: Idea2Impact (BVCOE, Pune) · First Runner-up: Make Your
              Own Jarvis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
