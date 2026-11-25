# Shubham Paikrao — Portfolio

Personal portfolio for Shubham Paikrao, a Data and AI Engineer specializing in ETL/ELT pipelines, PostgreSQL query optimization, and multi-agent AI workflows.

Live site: https://my-portfolio-tawny-eta-31.vercel.app/

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Typography**: `next/font/google` (Geist, Instrument Serif, Geist Mono)
- **Motion**: GSAP 3 (ScrollTrigger, SplitText, `@gsap/react`) and Lenis smooth scrolling
- **Icons**: Lucide React
- **Deployment**: Vercel

## Features

- Light editorial design system with warm off-white surfaces, hairline borders, and a single deep-indigo accent
- Centralized typed content configuration in `lib/data.ts`
- Scroll-choreographed animations with `prefers-reduced-motion` fallbacks and mobile-safe breakpoints
- Interactive architecture diagrams for featured case studies (FoodChain AI Medallion pipeline and Investment Council multi-agent graph)
- SEO metadata, JSON-LD `Person` schema, generated OpenGraph image, `sitemap.xml`, and `robots.txt`

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

To run linting and a production build:

```bash
npm run lint
npm run build
```

## Folder Structure

```text
app/
  globals.css          # Design tokens, Tailwind theme mapping, base styles
  icon.tsx             # Generated SP favicon
  layout.tsx           # Root layout, fonts, metadata, JSON-LD, Lenis & Navbar
  opengraph-image.tsx  # Generated OpenGraph image
  page.tsx             # Main page section composition
  robots.ts            # Robots configuration
  sitemap.ts           # Sitemap configuration
components/
  sections/            # Hero, About, Experience, Projects, ProjectCard, Skills, Education, Achievements, Contact
  shared/              # Navbar, Footer, Preloader, ScrollProgress, SectionHeader, SmoothScroll
lib/
  data.ts              # Typed portfolio content
  gsap.ts              # Client-side GSAP plugin registration
  utils.ts             # Classname utilities
public/                # Static assets (shubham.jpg, Shubham_Paikrao_Resume.pdf)
```

## License

MIT
