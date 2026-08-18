"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Trophy, Award, ShieldCheck, UserCheck, Cpu, ExternalLink, Sparkles, Flame } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
    title: string;
    subtitle: string;
    organization: string;
    desc: string;
    icon: React.ComponentType<any>;
    badge: string;
    color: string; // Tailored glow color class
    link?: string;
}

const achievements: Achievement[] = [
    // Top Accomplishments
    {
        title: "First Prize Winner",
        subtitle: "Idea2Impact Ideathon",
        organization: "BVCOE, Pune",
        desc: "Secured 1st place among national teams, designing and pitching an innovative software system tailored for social impact and scaling.",
        icon: Trophy,
        badge: "Ideathon Gold",
        color: "rgba(245, 158, 11, 0.15)" // Amber glow
    },
    {
        title: "First Runner-up",
        subtitle: "\"Make Your Own Jarvis\" Hackathon",
        organization: "Technical Symposium",
        desc: "Designed and engineered a voice-activated LLM assistant integrated with custom local API executors and execution workflows.",
        icon: Sparkles,
        badge: "Runner-Up",
        color: "rgba(99, 102, 241, 0.15)" // Indigo glow
    },
    {
        title: "Best Performing Intern",
        subtitle: "Sumago Infotech Pvt. Ltd.",
        organization: "MERN Development Team",
        desc: "Awarded for exceptional contributions in designing scalable RESTful APIs, MERN architecture optimization, and agile delivery.",
        icon: ShieldCheck,
        badge: "Work Excellence",
        color: "rgba(59, 130, 246, 0.15)" // Blue glow
    },
    {
        title: "Emerging Mentor",
        subtitle: "Let's Speak Academy",
        organization: "Leadership Academy",
        desc: "Recognized for directing communications bootcamps, mentoring incoming cohorts, and developing modern public speaking modules.",
        icon: UserCheck,
        badge: "Leadership",
        color: "rgba(236, 72, 153, 0.15)" // Pink glow
    },
    // Certifications
    {
        title: "Building Intelligent Agent Workflows",
        subtitle: "Microsoft AI Agentic Systems",
        organization: "Microsoft / Coursera",
        desc: "Deep specialization in architecting production-ready AI agent systems, multi-agent frameworks, task routing, and autonomous graph workflows.",
        link: "https://drive.google.com/file/d/1Bfjauy9KCFw9aS2gy9dFhVLg4YPMF0de/view?usp=sharing",
        icon: Cpu,
        badge: "Microsoft AI",
        color: "rgba(16, 185, 129, 0.15)" // Emerald glow
    },
    {
        title: "IBM Full Stack Software Developer",
        subtitle: "Professional Certificate",
        organization: "IBM / Coursera",
        desc: "Comprehensive engineering curriculum covering frontend, backend, Cloud Native app structures, containerization (Docker, Kubernetes), and CI/CD systems.",
        link: "https://coursera.org/share/f16ff0b53bd517560d4232f01bafad17",
        icon: Landmark, // We can define this custom or import Landmark
        badge: "IBM Verified",
        color: "from-cyan-500/10 to-teal-500/10 hover:border-cyan-500/30" // Fallback - wait, let's keep all colors standardized as RGBA for custom gradients!
    }
];

// Reimport Landmark or define a fallback for IBM
import { Landmark } from "lucide-react";

// Update the IBM item to use RGBA color
achievements[5].color = "rgba(6, 182, 212, 0.15)"; // Cyan glow

const Achievements = () => {
    return (
        <SectionWrapper id="achievements" className="bg-black/40 border-y border-white/5 relative">
            {/* Absolute Background Visual Accents */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-primary/90 mb-4 tracking-wider uppercase">
                    <Flame className="w-3.5 h-3.5 animate-pulse" /> Credentials
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                    Achievements & <span className="text-gradient">Certifications</span>
                </h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                    A record of engineering milestones, competition awards, and verified technical credentials.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                {achievements.map((item, index) => {
                    const CardWrapper = item.link ? "a" : "div";
                    const cardProps = item.link 
                        ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } 
                        : {};

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.06 }}
                            className="h-full"
                        >
                            {/* @ts-ignore */}
                            <CardWrapper
                                {...cardProps}
                                className={`glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(124,92,255,0.15)] ${item.link ? 'cursor-pointer hover:border-primary/40' : 'cursor-default hover:border-white/15'}`}
                                style={{
                                    // Custom visual glowing background on hover
                                    // @ts-ignore
                                    "--hover-glow": item.color
                                }}
                            >
                                {/* Gradient Hover Radial Spotlight */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,var(--hover-glow)_0%,transparent_60%)]"
                                    style={{
                                        background: `radial-gradient(circle at 85% 15%, ${item.color} 0%, transparent 60%)`
                                    }}
                                />

                                <div className="space-y-5 relative z-10">
                                    {/* Icon & Category Pill */}
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-inner">
                                            <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="text-[9px] font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:border-primary/20 group-hover:bg-primary/5 px-3 py-1.5 rounded-full transition-all duration-300">
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Text Fields */}
                                    <div className="space-y-1.5">
                                        <div className="text-[10px] font-mono text-primary font-semibold tracking-wider">{item.organization}</div>
                                        <h3 className="text-lg font-bold font-heading text-white tracking-tight leading-snug group-hover:text-primary/10 transition-colors">
                                            {item.subtitle}
                                        </h3>
                                        <div className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                            {item.title}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Link verify button */}
                                {item.link && (
                                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[10px] font-mono font-bold tracking-widest text-primary group-hover:text-white transition-all duration-300 relative z-10">
                                        VERIFY CREDENTIAL
                                        <ExternalLink className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                )}
                            </CardWrapper>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
