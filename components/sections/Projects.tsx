"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "TalentSync",
        role: "Intelligent Resume Matching System",
        problem: "Recruiters spend too much time manually screening resumes, missing good candidates due to keyword mismatches.",
        approach: "Built a semantic search engine using LLMs to understand resume context beyond simple keywords. Implemented a vector database for similarity search.",
        outcome: "Reduced screening time by 70% and improved match quality.",
        tech: ["Next.js", "MongoDB", "Python (FastAPI)", "OpenAI API", "Pinecone"],
        color: "from-blue-500/20 to-purple-500/20",
        github: "https://github.com/shubhamp-2905",
        demo: "https://demo.com"
    },
    {
        title: "FoodChain",
        role: "Supply Chain Optimization Platform",
        problem: "Local food vendors struggle with demand prediction, leading to significant food waste.",
        approach: "Used clustering algorithms to group similar vendor profiles and time-series forecasting to predict daily demand.",
        outcome: "Helped pilot vendors reduce waste by 15% in the first month.",
        tech: ["Scikit-learn", "Flask", "PostgreSQL", "React", "Pandas"],
        color: "from-orange-500/20 to-red-500/20",
        github: "https://github.com/shubhamp-2905",
        demo: "https://demo.com"
    },
    {
        title: "Real-Time Chat Framework",
        role: "High-Concurrency Messaging System",
        problem: "Standard polling-based chat apps suffer from latency and server load at scale.",
        approach: "Architected a WebSocket-based pub/sub system. Handled connection state management and message persistence asynchronously.",
        outcome: "Supports 10k+ concurrent connections with sub-100ms latency.",
        tech: ["Node.js", "Socket.io", "Redis", "React", "MongoDB"],
        color: "from-pink-500/20 to-rose-500/20",
        github: "https://github.com/shubhamp-2905",
        demo: "https://demo.com"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">Selected Work</h2>

            <div className="space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        key={index}
                        className="group relative border-t border-white/10 pt-12"
                    >
                        {/* Background Glow */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r ${project.color} opacity-50 blur-sm`} />

                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Project Header & Tech - Left Side */}
                            <div className="lg:col-span-4 space-y-6">
                                <div>
                                    <div className="text-primary font-mono text-sm mb-2">{project.role}</div>
                                    <h3 className="text-3xl font-bold font-heading">{project.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </a>
                                    </Button>
                                    <Button size="sm" className="rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Case Study Content - Right Side */}
                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Problem</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{project.problem}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Approach</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{project.approach}</p>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Outcome</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{project.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10" asChild>
                    <a href="https://github.com/StartUp-User" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" /> View Full Project Archive
                    </a>
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
