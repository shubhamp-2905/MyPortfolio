"use client";

import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { ProjectItem } from "@/lib/data";
import SpotlightCard from "@/components/shared/SpotlightCard";

function ArchitectureDiagram({ type }: { type: ProjectItem["diagramType"] }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !svgRef.current) return;

      const paths = svgRef.current.querySelectorAll<
        SVGPathElement | SVGLineElement
      >(".draw-path");

      paths.forEach((path) => {
        const length =
          typeof path.getTotalLength === "function" ? path.getTotalLength() : 80;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 86%",
          once: true,
        },
      });
    },
    { scope: svgRef }
  );

  if (type === "evidentia") {
    return (
      <svg
        ref={svgRef}
        viewBox="0 0 420 110"
        className="w-full"
        role="img"
        aria-label="Evidentia AI pipeline: PDF, DOCX, Image, Audio to OCR, Whisper, CLIP to Embeddings and FAISS to LLM with Citations"
      >
        <rect x="4" y="24" width="84" height="58" rx="10" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="46" y="47" textAnchor="middle" fontSize="8.5" fill="#5B6270" fontFamily="monospace">
          INPUTS
        </text>
        <text x="46" y="63" textAnchor="middle" fontSize="8.5" fill="#0E1116">
          PDF·DOCX·Img·Aud
        </text>

        <path d="M 88 53 L 110 53" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />
        <path d="M 106 49 L 110 53 L 106 57" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

        <rect x="110" y="24" width="88" height="58" rx="10" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="154" y="47" textAnchor="middle" fontSize="8.5" fill="#5B6270" fontFamily="monospace">
          EXTRACT
        </text>
        <text x="154" y="63" textAnchor="middle" fontSize="8.5" fill="#0E1116">
          OCR·Whisper·CLIP
        </text>

        <path d="M 198 53 L 220 53" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />
        <path d="M 216 49 L 220 53 L 216 57" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

        <rect x="220" y="24" width="88" height="58" rx="10" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="264" y="47" textAnchor="middle" fontSize="8.5" fill="#5B6270" fontFamily="monospace">
          INDEX
        </text>
        <text x="264" y="63" textAnchor="middle" fontSize="8.5" fill="#0E1116">
          Embed + FAISS
        </text>

        <path d="M 308 53 L 330 53" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />
        <path d="M 326 49 L 330 53 L 326 57" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

        <rect x="330" y="24" width="86" height="58" rx="10" fill="#EEF2FF" stroke="#3730A3" strokeOpacity="0.4" />
        <text x="373" y="47" textAnchor="middle" fontSize="8.5" fill="#3730A3" fontFamily="monospace">
          GROQ RAG
        </text>
        <text x="373" y="63" textAnchor="middle" fontSize="8.5" fill="#0E1116">
          LLM + Citations
        </text>
      </svg>
    );
  }

  if (type === "medallion") {
    return (
      <svg
        ref={svgRef}
        viewBox="0 0 360 110"
        className="w-full"
        role="img"
        aria-label="Medallion architecture: Bronze raw ingestion to Silver validated data to Gold FastAPI serving"
      >
        <rect x="8" y="22" width="88" height="58" rx="10" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="52" y="46" textAnchor="middle" fontSize="10" fill="#5B6270" fontFamily="monospace">
          BRONZE
        </text>
        <text x="52" y="63" textAnchor="middle" fontSize="10" fill="#0E1116">
          16K+ Raw
        </text>

        <path d="M 96 51 L 136 51" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.5" />
        <path d="M 131 47 L 136 51 L 131 55" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.5" />

        <rect x="136" y="22" width="88" height="58" rx="10" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="180" y="46" textAnchor="middle" fontSize="10" fill="#5B6270" fontFamily="monospace">
          SILVER
        </text>
        <text x="180" y="63" textAnchor="middle" fontSize="10" fill="#0E1116">
          Validated SQL
        </text>

        <path d="M 224 51 L 264 51" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.5" />
        <path d="M 259 47 L 264 51 L 259 55" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.5" />

        <rect x="264" y="22" width="88" height="58" rx="10" fill="#EEF2FF" stroke="#3730A3" strokeOpacity="0.4" />
        <text x="308" y="46" textAnchor="middle" fontSize="10" fill="#3730A3" fontFamily="monospace">
          GOLD
        </text>
        <text x="308" y="63" textAnchor="middle" fontSize="10" fill="#0E1116">
          18ms FastAPI
        </text>
      </svg>
    );
  }

  if (type === "agents") {
    return (
      <svg
        ref={svgRef}
        viewBox="0 0 360 120"
        className="w-full"
        role="img"
        aria-label="Multi-agent LangGraph workflow: Shared State coordinating Market Data, Risk and Rules, and Advisor SSE agents"
      >
        <rect x="130" y="10" width="100" height="32" rx="8" fill="#EEF2FF" stroke="#3730A3" strokeOpacity="0.4" />
        <text x="180" y="30" textAnchor="middle" fontSize="10" fill="#3730A3" fontFamily="monospace">
          SHARED STATE
        </text>

        <path d="M 155 42 L 56 72" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />
        <path d="M 180 42 L 180 72" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />
        <path d="M 205 42 L 304 72" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

        <rect x="10" y="72" width="92" height="36" rx="8" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="56" y="94" textAnchor="middle" fontSize="10" fill="#0E1116">
          Market Data
        </text>

        <rect x="134" y="72" width="92" height="36" rx="8" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="180" y="94" textAnchor="middle" fontSize="10" fill="#0E1116">
          Risk &amp; Rules
        </text>

        <rect x="258" y="72" width="92" height="36" rx="8" fill="#FAFAF8" stroke="#E7E5E0" />
        <text x="304" y="94" textAnchor="middle" fontSize="10" fill="#0E1116">
          Advisor SSE
        </text>
      </svg>
    );
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 90"
      className="w-full"
      role="img"
      aria-label="Semantic search pipeline: Resumes to LLM Embeddings to Pinecone Vector Index"
    >
      <rect x="8" y="20" width="96" height="48" rx="8" fill="#FAFAF8" stroke="#E7E5E0" />
      <text x="56" y="48" textAnchor="middle" fontSize="10" fill="#0E1116">
        Resumes
      </text>

      <path d="M 104 44 L 136 44" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

      <rect x="136" y="20" width="96" height="48" rx="8" fill="#FAFAF8" stroke="#E7E5E0" />
      <text x="184" y="48" textAnchor="middle" fontSize="10" fill="#0E1116">
        Embeddings
      </text>

      <path d="M 232 44 L 264 44" className="draw-path" fill="none" stroke="#3730A3" strokeWidth="1.4" />

      <rect x="264" y="20" width="88" height="48" rx="8" fill="#EEF2FF" stroke="#3730A3" strokeOpacity="0.4" />
      <text x="308" y="48" textAnchor="middle" fontSize="10" fill="#3730A3">
        Pinecone
      </text>
    </svg>
  );
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <SpotlightCard className="p-6 sm:p-8 lg:p-10">
      <article>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Title, Badge, P/A/O, Stack */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[var(--accent)]">
                {project.index}
              </span>
              <span className="text-[var(--border-hover)]">/</span>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted-ink)]">
                {project.featured ? "Case Study" : "Selected Project"}
              </span>
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-0.5 font-mono text-[11px] font-medium text-[var(--accent)]">
                  <Star className="h-3 w-3 fill-current" />
                  {project.badge}
                </span>
              )}
            </div>

            <h3 className="mt-3 font-serif text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--muted-ink)]">
              {project.subtitle}
            </p>

            <dl className="mt-6 max-w-[70ch] space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
                  Problem
                </dt>
                <dd className="mt-1 text-[var(--ink)]">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
                  Approach
                </dt>
                <dd className="mt-1 text-[var(--muted-ink)]">
                  {project.approach}
                </dd>
              </div>
              {project.architecture && (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
                    Architecture
                  </dt>
                  <dd className="mt-1 text-[var(--muted-ink)]">
                    {project.architecture}
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
                  Outcome
                </dt>
                <dd className="mt-1 text-[var(--ink)]">{project.outcome}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 font-mono text-[11px] text-[var(--muted-ink)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Architecture diagram, project's own stat chips, links */}
          <div className="flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
                System Flow
              </p>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                <div className="min-w-[300px]">
                  <ArchitectureDiagram type={project.diagramType} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.statChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 font-mono text-[11px] font-medium text-[var(--ink)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-pill group inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[var(--ink)] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[var(--accent)]"
                >
                  <span>Live</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <span>Code</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
