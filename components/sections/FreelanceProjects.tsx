"use client";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface FreelanceProject {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    gradient: string;
}

const freelanceProjects: FreelanceProject[] = [
    {
        title: "Unigold Packaging",
        description: "Designed and built a corporate brand storefront and product catalog for an industrial packaging manufacturer. Optimized product browsing and customer inquiry channels.",
        image: "/images/unigold.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        link: "https://unigoldpackaging.org/",
        gradient: "rgba(245, 158, 11, 0.15)" // Amber glow
    },
    {
        title: "SahaAakar",
        description: "An interactive personal branding and LinkedIn presence optimization SaaS landing page. Features animated charts, custom analytical visualization components, and conversion pipelines.",
        image: "/images/sahaakar.png",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts"],
        link: "https://sahaakar.vercel.app/",
        gradient: "rgba(59, 130, 246, 0.15)" // Blue glow
    },
    {
        title: "AgentForge",
        description: "An enterprise-grade orchestration framework for building, planning, and deploying autonomous AI agents on stateful execution graphs.",
        image: "/images/agentforge.png",
        technologies: ["TypeScript", "Next.js", "Node.js", "Vercel"],
        link: "https://agent-forge-pi.vercel.app/",
        gradient: "rgba(139, 92, 246, 0.15)" // Purple/violet glow
    }
];

const FreelanceCard = ({ project }: { project: FreelanceProject }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="glass-card rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col group relative h-full shadow-2xl hover:shadow-[0_0_50px_rgba(124,92,255,0.15)] hover:border-primary/30">
            {/* Spotlight Glow Effect */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 85% 15%, ${project.gradient} 0%, transparent 60%)`
                }}
            />

            {/* Project Website Preview Window */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5 border-b border-white/5">
                {/* Browser Address Bar */}
                <div className="flex items-center gap-1.5 bg-black/55 border-b border-white/5 px-4 py-2.5 w-full shadow-sm relative z-20">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 max-w-[220px] mx-auto bg-white/5 border border-white/10 px-3 py-1 rounded-md text-[10px] text-white/50 font-mono text-center truncate select-all">
                        {project.link.replace("https://", "")}
                    </div>
                </div>

                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.image}
                        alt={project.title}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                ) : (
                    // Simulated Browser Window Placeholder
                    <div className="w-full h-full bg-gradient-to-tr from-white/5 to-white/10 flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-103 relative">
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 border border-white/15 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                                </svg>
                            </div>
                            <span className="text-[10px] text-white/50 font-mono tracking-tight">{project.image}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                <div className="space-y-3 mb-6">
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {project.description}
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:border-primary/20 group-hover:bg-primary/5 rounded-full text-[9px] font-mono tracking-wider uppercase transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Visit Link */}
                    <div className="pt-4 border-t border-white/5">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-primary hover:text-white transition-all duration-300 group/link cursor-pointer"
                        >
                            VISIT WEBSITE
                            <ExternalLink className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FreelanceProjects = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {freelanceProjects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="h-full"
                    >
                        <FreelanceCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FreelanceProjects;
