"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  Download,
  Layers,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Snowflake,
  Table2,
  Workflow,
  Zap,
} from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { HERO_TECH_STRIP, SITE_CONFIG } from "@/lib/data";

function TechIcon({ name }: { name: string }) {
  const cls = "h-3.5 w-3.5 text-[var(--accent)]";
  switch (name) {
    case "code":
      return <Code2 className={cls} />;
    case "database":
      return <Database className={cls} />;
    case "workflow":
      return <Workflow className={cls} />;
    case "zap":
      return <Zap className={cls} />;
    case "layers":
      return <Layers className={cls} />;
    case "braces":
      return <Braces className={cls} />;
    case "search":
      return <Search className={cls} />;
    case "table":
      return <Table2 className={cls} />;
    case "box":
      return <Box className={cls} />;
    case "snowflake":
      return <Snowflake className={cls} />;
    case "cpu":
      return <Cpu className={cls} />;
    default:
      return <ShieldCheck className={cls} />;
  }
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const metaItems = sectionRef.current?.querySelectorAll(".hero-meta");

      const runHeroTimeline = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (headlineRef.current) {
          const split = new SplitText(headlineRef.current, {
            type: "lines",
            mask: "lines",
          });
          tl.from(split.lines, {
            yPercent: 105,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
          });
        }

        if (metaItems && metaItems.length > 0) {
          tl.from(
            metaItems,
            {
              y: 16,
              opacity: 0,
              duration: 0.7,
              stagger: 0.06,
            },
            "-=0.55"
          );
        }

        // Animate ONLY the wrapper clip-path, never the img element
        if (photoWrapRef.current) {
          tl.fromTo(
            photoWrapRef.current,
            { clipPath: "inset(8% 0% 8% 0% round 24px)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0% round 24px)",
              opacity: 1,
              duration: 0.95,
              ease: "expo.out",
            },
            "-=0.7"
          );
        }
      };

      let preloaderSeen = false;
      try {
        preloaderSeen = sessionStorage.getItem("sp_preloader_seen") === "1";
      } catch {
        preloaderSeen = true;
      }

      if (preloaderSeen) {
        runHeroTimeline();
      } else {
        const onReady = () => runHeroTimeline();
        window.addEventListener("preloader:complete", onReady, { once: true });
        const timer = window.setTimeout(runHeroTimeline, 1300);
        return () => {
          window.removeEventListener("preloader:complete", onReady);
          window.clearTimeout(timer);
        };
      }

      // Soft drifting radial gradient washes (22-28s loops, tiny amplitude)
      const blobs = sectionRef.current?.querySelectorAll<HTMLElement>(".hero-wash");
      blobs?.forEach((blob, idx) => {
        gsap.to(blob, {
          x: idx % 2 === 0 ? 22 : -18,
          y: idx % 2 === 0 ? -16 : 20,
          duration: 22 + idx * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Gentle floating proof chips around the portrait
      const chips = sectionRef.current?.querySelectorAll<HTMLElement>(".proof-chip");
      chips?.forEach((chip, idx) => {
        gsap.to(chip, {
          y: idx % 2 === 0 ? -6 : 6,
          duration: 3.2 + idx * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: idx * 0.35,
        });
      });

      // Animated scroll cue line
      if (scrollCueRef.current) {
        gsap.fromTo(
          scrollCueRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.2,
            repeat: -1,
            repeatDelay: 0.4,
            ease: "power2.inOut",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pb-10 pt-24 sm:pt-28 md:pb-14"
    >
      {/* Masked grid + soft drifting radial washes */}
      <div
        aria-hidden="true"
        className="hero-grid-mask pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-wash pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[#3730A3]/[0.09] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="hero-wash pointer-events-none absolute right-[-60px] top-24 h-[380px] w-[380px] rounded-full bg-[#7C3AED]/[0.06] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="hero-wash pointer-events-none absolute bottom-0 left-1/3 h-[340px] w-[420px] rounded-full bg-[#E7DEC8]/45 blur-[120px]"
      />

      <div className="site-container relative z-10">
        {/* Subtle status & location bar */}
        <div className="hero-meta mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
          <p className="font-mono text-xs tracking-[0.03em] text-[var(--muted-ink)]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] align-middle" />
            {SITE_CONFIG.statusLine}
          </p>
          <p className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted-ink)]">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span>{SITE_CONFIG.location}</span>
          </p>
        </div>

        {/* 12-column editorial hero: 7 / 5 split with 48px gap */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 7 columns: Typography & CTAs */}
          <div className="lg:col-span-7">
            <p className="hero-meta mb-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
              {SITE_CONFIG.eyebrow}
            </p>

            <h1
              ref={headlineRef}
              className="font-serif text-[clamp(3rem,6.2vw,6.5rem)] leading-[0.98] tracking-[-0.03em] text-[var(--ink)]"
            >
              {SITE_CONFIG.name}.
              <br />
              <span className="block pt-2 text-[clamp(1.85rem,3.1vw,3.15rem)] italic leading-[1.12] tracking-[-0.02em] text-[var(--muted-ink)]">
                I build the data foundations and agentic systems that make AI
                dependable.
              </span>
            </h1>

            <p className="hero-meta mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-ink)] sm:text-lg">
              {SITE_CONFIG.valueStatement}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-meta mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-primary-pill group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
              >
                <span>View Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={SITE_CONFIG.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-muted)]"
              >
                <Download className="h-4 w-4 text-[var(--muted-ink)]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-3 text-sm font-medium text-[var(--muted-ink)] transition-colors hover:text-[var(--accent)]"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Small external links */}
            <div className="hero-meta mt-8 flex flex-wrap items-center gap-6 border-t border-[var(--border)] pt-4 font-mono text-xs text-[var(--muted-ink)]">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-underline transition-colors hover:text-[var(--ink)]"
              >
                GitHub ↗
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-underline transition-colors hover:text-[var(--ink)]"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="nav-link-underline transition-colors hover:text-[var(--ink)]"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Right 5 columns: 4:5 Portrait with floating glass chips */}
          <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none">
            <div
              ref={photoWrapRef}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[#E8E7E3] shadow-[0_16px_40px_rgba(14,17,22,0.06)]"
            >
              <Image
                src={SITE_CONFIG.portraitPath}
                alt={SITE_CONFIG.name}
                fill
                priority
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover object-[50%_18%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              {/* Very light warm overlay on hover only */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#E7DEC8]/0 transition-colors duration-500 group-hover:bg-[#E7DEC8]/10"
              />
            </div>
          </div>
        </div>

        {/* Scroll cue + pill marquee with edge mask */}
        <div className="mt-10 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-5">
          <div className="flex shrink-0 items-center gap-3">
            <div className="h-7 w-[1px] overflow-hidden bg-[var(--border)]">
              <div
                ref={scrollCueRef}
                className="h-full w-full bg-[var(--accent)]"
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted-ink)]">
              Scroll
            </span>
          </div>

          <div
            aria-hidden="true"
            className="marquee-fade relative hidden flex-1 overflow-hidden sm:block"
          >
            <div className="animate-marquee flex w-max items-center gap-3 whitespace-nowrap">
              {[...HERO_TECH_STRIP, ...HERO_TECH_STRIP].map((tech, i) => (
                <span
                  key={`${tech.label}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-1 font-mono text-[11px] text-[var(--muted-ink)]"
                >
                  <TechIcon name={tech.icon} />
                  <span>{tech.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
