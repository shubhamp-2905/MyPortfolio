export interface Principle {
  index: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  monogram: string;
  active?: boolean;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  badge?: string;
  featured: boolean;
  compact?: boolean;
  problem: string;
  approach: string;
  architecture?: string;
  outcome: string;
  stack: string[];
  statChips: string[];
  links: {
    code?: string;
    live?: string;
  };
  diagramType: "evidentia" | "medallion" | "agents" | "semantic";
}

export interface SkillGroup {
  category: string;
  iconKey:
    | "code"
    | "database"
    | "server"
    | "cloud"
    | "cpu"
    | "sparkles"
    | "wrench";
  items: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  type: "Award" | "Certification" | "Recognition";
  detail: string;
  verifyUrl?: string;
}

export const SITE_CONFIG = {
  name: "Shubham Paikrao",
  monogram: "SP",
  role: "Data & AI Engineer",
  eyebrow: "DATA & AI ENGINEER · CS (DATA SCIENCE) '27",
  location: "Pune, India",
  statusLine: "Open to Data & AI Engineering roles",
  valueStatement:
    "From validated Medallion pipelines on PostgreSQL to multimodal RAG platforms with grounded citations, I engineer systems that are measurable, traceable and ready for production, not just impressive in a demo.",
  bio: "I'm a Computer Science (Data Science) undergraduate at VIIT Pune with a 9.06 CGPA and a bias toward systems that hold up under real use. My work sits where data engineering meets applied AI: designing the pipelines, schemas and APIs that models depend on, and the agent workflows that put them to work. I care about correctness first, then latency, then polish, and I prefer to measure a claim before I make it.",
  currentlyBuilding:
    "Geospatial ML workflows and an internal platform (Next.js, TypeScript, Supabase) at Loupe Earth, under strict data-privacy constraints.",
  email: "shubhampaikrao610@gmail.com",
  phone: "+91-9699083147",
  github: "https://github.com/shubhamp-2905",
  githubUsername: "shubhamp-2905",
  linkedin: "https://www.linkedin.com/in/shubham-paikrao-7848162a7/",
  liveUrl: "https://my-portfolio-tawny-eta-31.vercel.app",
  resumePath: "/Shubham_Paikrao_Resume.pdf",
  portraitPath: "/shubham.jpg",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Metrics", href: "#metrics", id: "metrics" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const HERO_TECH_STRIP = [
  { label: "Python", icon: "code" },
  { label: "PostgreSQL", icon: "database" },
  { label: "LangGraph", icon: "workflow" },
  { label: "FastAPI", icon: "zap" },
  { label: "Next.js", icon: "layers" },
  { label: "TypeScript", icon: "braces" },
  { label: "FAISS", icon: "search" },
  { label: "Pandas", icon: "table" },
  { label: "Docker", icon: "box" },
  { label: "Snowflake", icon: "snowflake" },
  { label: "Databricks", icon: "cpu" },
  { label: "Supabase", icon: "shield" },
] as const;

export const FLOATING_PROOF_CHIPS = [
  { label: "9.06 CGPA", position: "top-5 -left-4 sm:-left-6" },
  { label: "Sponsored project: Evidentia", position: "top-1/2 -right-4 sm:-right-6" },
  { label: "Best Performing Intern", position: "bottom-16 -left-3 sm:-left-5" },
] as const;

export const ENGINEERING_PRINCIPLES: Principle[] = [
  {
    index: "01",
    title: "Problem first",
    description:
      "Define the user outcome and the failure modes before choosing a model or a framework.",
  },
  {
    index: "02",
    title: "Evidence over assertion",
    description:
      "Validation, audit trails and grounded citations are part of the design, not an afterthought.",
  },
  {
    index: "03",
    title: "Deterministic where it matters",
    description:
      "Rules handle what must be exact; models handle what must be flexible, with a clear boundary between them.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "loupe-earth",
    monogram: "LE",
    active: true,
    role: "AI & Data Intern",
    company: "Loupe Earth",
    location: "New York, NY",
    period: "Aug 2026 — Present",
    highlights: [
      "Building Python data-processing and machine learning workflows for large-scale geospatial datasets, including multimodal AI components used to evaluate data quality.",
      "Developing the Loupe Central System (LCS), an internal platform on Next.js, TypeScript and Supabase that unifies backend services and databases while honoring data-privacy constraints.",
    ],
    stack: ["Python", "Geospatial ML", "Multimodal AI", "Next.js", "TypeScript", "Supabase"],
  },
  // TODO: Confirm whether to keep Ediglobe experience
  {
    id: "ediglobe",
    monogram: "EG",
    role: "Data Science Intern",
    company: "Ediglobe",
    location: "Remote",
    period: "Oct 2024 — Nov 2024",
    highlights: [
      "Built end-to-end ML data pipelines covering preprocessing, outlier detection and feature transformation, and iterated on models through structured experimentation.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Pipelines"],
  },
  {
    id: "sumago",
    monogram: "SI",
    role: "Full Stack Developer Intern (MERN)",
    company: "Sumago Infotech Pvt. Ltd.",
    location: "Nashik, India",
    period: "14 Jan 2024 — 15 Jun 2024",
    highlights: [
      "Shipped production features across the MERN stack, designing REST APIs and wiring them to the React frontend and MongoDB. Worked through Git workflows and code reviews with cross-functional engineers, and was recognized as Best Performing Intern for engineering execution.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Git"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "evidentia-ai",
    index: "01",
    title: "Evidentia AI",
    subtitle: "Multimodal Document Intelligence Platform",
    badge: "Sponsored · Code Culture Technical Solutions",
    featured: true,
    problem:
      "Teams hold knowledge across PDFs, Word files, images and audio, and keyword search can't reach most of it or prove where an answer came from.",
    approach:
      "A production-grade, distributed multimodal RAG platform: Whisper transcribes audio, Tesseract OCR and CLIP unlock images and scans, Sentence Transformers + FAISS power semantic retrieval, and a Groq-hosted LLM answers with grounded, contextual citations, all exposed through REST APIs.",
    architecture:
      "FastAPI services built on repository-service patterns, a Next.js frontend, PostgreSQL for persistence, JWT authentication, document-scoped conversations and multi-user workspaces.",
    outcome: "Selected for sponsorship by Code Culture Technical Solutions.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "JWT",
      "Groq API",
      "FAISS",
      "Sentence Transformers",
      "Whisper",
      "Tesseract OCR",
      "CLIP",
    ],
    statChips: [
      "4 input modalities",
      "Multi-user workspaces",
      "Grounded citations",
      "Sponsored",
    ],
    links: {
      code: "https://github.com/shubhamp-2905/Evidentia",
    },
    diagramType: "evidentia",
  },
  {
    id: "foodchain-ai",
    index: "02",
    title: "FoodChain AI",
    subtitle: "AI-Powered Supplier Recommendation & Procurement Platform",
    featured: true,
    problem:
      "Procurement teams evaluating thousands of supplier-product records faced slow, unindexed lookups (376 queries per request, ~342 ms mean response) and inconsistent data quality across raw supplier feeds.",
    approach:
      "Built a Python and Pandas pipeline for 16K+ supplier-product records covering ingestion, cleaning, validation, and feature engineering, structured in a Medallion (Bronze–Silver–Gold) architecture on PostgreSQL (Supabase) with indexing and constraints. Added K-Means supplier clustering and a FastAPI recommendation engine with weighted scoring, JWT auth, and PostgreSQL-backed audit records.",
    outcome:
      "Optimized database access from 376 queries down to 2 and reduced mean API response time from ~342 ms to 18 ms. Deployed with a Next.js frontend on Vercel and FastAPI backend on Render.",
    stack: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "Supabase",
      "Medallion Architecture",
      "Scikit-learn",
      "FastAPI",
      "Next.js",
    ],
    statChips: ["16K+ records", "376 to 2 queries", "342 ms to 18 ms"],
    links: {
      live: "https://food-chain-puce.vercel.app",
      code: "https://github.com/shubhamp-2905",
    },
    diagramType: "medallion",
  },
  {
    id: "investment-council",
    index: "03",
    title: "Investment Council",
    subtitle: "Multi-Agent AI Decision Support Platform",
    featured: true,
    problem:
      "Single-prompt financial assistants conflate live market retrieval, quantitative checks, and narrative reasoning—making outputs hard to audit, cache, or reproduce reliably.",
    approach:
      "Architected a multi-agent LangGraph workflow where specialized agents handle financial data retrieval, analysis, risk evaluation, and recommendation through shared structured state. Built FastAPI services ingesting Twelve Data market data with validation, caching, and SSE-based monitoring, separating deterministic rules from AI-generated analysis.",
    outcome:
      "Exposed the agent workflow via REST APIs and persisted structured execution results in MongoDB for real-time tracking, repeatability, and clear auditability.",
    stack: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Python",
      "MongoDB",
      "SSE",
      "Twelve Data API",
      "REST APIs",
    ],
    statChips: [
      "Multi-agent (LangGraph)",
      "SSE live monitoring",
      "Deterministic + AI separation",
    ],
    links: {
      code: "https://github.com/shubhamp-2905/InvestWise-AI",
    },
    diagramType: "agents",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    iconKey: "code",
    items: ["Python", "SQL", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Data Engineering",
    iconKey: "database",
    items: [
      "ETL/ELT Pipelines",
      "Data Modeling",
      "Data Validation",
      "Data Quality",
      "Medallion Architecture",
    ],
  },
  {
    category: "SQL & Databases",
    iconKey: "server",
    items: ["PostgreSQL", "Query Optimization", "MongoDB", "Supabase"],
  },
  {
    category: "Cloud & Data Platforms",
    iconKey: "cloud",
    items: ["Snowflake", "Databricks", "Azure Fundamentals"],
  },
  {
    category: "Python Data Stack",
    iconKey: "cpu",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Agentic AI & ML",
    iconKey: "sparkles",
    items: [
      "LangGraph",
      "LangChain",
      "Multi-Agent Workflows",
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Multimodal AI: Whisper, OCR, CLIP, FAISS",
      "Semantic Search",
      "Prompt Engineering",
      "NLP",
    ],
  },
  {
    category: "Engineering Tools",
    iconKey: "wrench",
    items: ["Git/GitHub", "Docker", "FastAPI", "REST APIs", "Next.js"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Vishwakarma Institute of Information Technology",
    location: "Pune, India",
    degree: "B.Tech, Computer Science (Data Science)",
    period: "Aug 2024 — Expected 2027",
    score: "CGPA 9.06",
  },
  {
    institution: "Government Polytechnic, Nashik",
    location: "Nashik, India",
    degree: "Diploma in Computer Technology",
    period: "Sept 2021 — May 2024",
    score: "88.59%",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "First Prize — Idea2Impact Ideathon",
    issuer: "BVCOE, Pune",
    type: "Award",
    detail:
      "Awarded first place for technical problem framing and solution architecture.",
  },
  {
    title: "First Runner-up — Make Your Own Jarvis",
    issuer: "Technical Competition",
    type: "Award",
    detail:
      "Built a voice-activated LLM assistant with structured tool execution.",
  },
  {
    title: "Best Performing Intern",
    issuer: "Sumago Infotech Pvt. Ltd.",
    type: "Recognition",
    detail:
      "Recognized for engineering execution during the 5-month MERN stack internship.",
  },
  {
    title: "Emerging Mentor",
    issuer: "Let's Speak Academy",
    type: "Recognition",
    detail:
      "Recognized for mentoring peers in technical communication and fundamentals.",
  },
  {
    title: "Building Intelligent Agent Workflows",
    issuer: "Microsoft (Coursera)",
    type: "Certification",
    detail:
      "Verified coursework on designing multi-step, tool-using agentic AI systems.",
    verifyUrl:
      "https://drive.google.com/file/d/1Bfjauy9KCFw9aS2gy9dFhVLg4YPMF0de/view?usp=sharing",
  },
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM (Coursera)",
    type: "Certification",
    detail:
      "Professional certificate covering cloud-native backend and frontend engineering.",
    verifyUrl: "https://coursera.org/share/f16ff0b53bd517560d4232f01bafad17",
  },
];
