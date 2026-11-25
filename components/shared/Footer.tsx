import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
      <div className="site-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-[var(--muted-ink)]">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. {SITE_CONFIG.location}.
        </p>

        <div className="flex items-center gap-6 font-mono text-xs text-[var(--muted-ink)]">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="transition-colors hover:text-[var(--ink)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
