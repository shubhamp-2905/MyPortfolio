"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Search, PenTool, Database, Gauge, Rocket } from "lucide-react";

const steps = [
    { icon: Search, title: "Discovery", desc: "Understanding the core problem and user needs deeply before proposing solutions." },
    { icon: PenTool, title: "Architecture", desc: "Designing scalable systems with clear data flows and component separation." },
    { icon: Database, title: "Implementation", desc: "Writing clean, tested code with a focus on maintainability and security." },
    { icon: Gauge, title: "Optimization", desc: "Refining performance, reducing latency, and ensuring resource efficiency." },
    { icon: Rocket, title: "Deployment", desc: "Automated CI/CD pipelines for reliable, zero-downtime releases." }
];

const Approach = () => {
    return (
        <SectionWrapper id="process" className="bg-black/20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Engineering Approach</h2>
                <p className="text-muted-foreground">
                    A rigorous process for building reliable software.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

                <div className="grid md:grid-cols-5 gap-8 relative z-10">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(124,92,255,0.3)] transition-all duration-300 relative bg-background">
                                <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                <div className="absolute -bottom-2 px-2 bg-background text-[10px] font-mono border border-white/10 rounded-full text-muted-foreground">
                                    0{idx + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-heading mb-2">{step.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Approach;
