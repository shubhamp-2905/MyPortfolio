"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Code2, Cpu, Lightbulb } from "lucide-react";

const About = () => {
    const pillars = [
        {
            icon: Lightbulb,
            title: "Problem First",
            desc: "Understanding the core 'why' before writing code. Building software directly mapped to real-world user value."
        },
        {
            icon: Cpu,
            title: "System Design",
            desc: "Architecting simple, scalable, and highly maintainable systems that evolve cleanly over time."
        },
        {
            icon: Code2,
            title: "Clean Execution",
            desc: "Prioritizing type safety, readability, and performance. Code is read far more often than it is written."
        }
    ];

    return (
        <SectionWrapper id="about" className="bg-black/20 relative border-b border-white/5">
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                    Engineering <span className="text-gradient">Philosophy</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                    I view software engineering as the art of problem-solving through modular systems. 
                    My objective is to bridge complex multi-agent architectures and high-performance frontend designs with neat, maintainable execution.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {pillars.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/20 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-4 group-hover:bg-primary/10 group-hover:border-primary/20 border border-transparent transition-colors">
                                <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-base font-bold font-heading text-white mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-white/60 transition-colors duration-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
