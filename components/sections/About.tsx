"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Brain, Layers, Zap, ShieldCheck, Code, GitBranch } from "lucide-react";

const About = () => {
    const philosophy = [
        { icon: Brain, title: "Problem First", desc: "Understanding the 'why' before the 'how'. I don't write code until the problem is clearly defined and the solution is designed." },
        { icon: Layers, title: "System Design", desc: "Building for scalability and maintainability. Simple systems scale better than complex ones." },
        { icon: ShieldCheck, title: "Reliability", desc: "Correctness is not optional. I prioritize robust error handling, type safety, and predictable behavior." },
        { icon: Code, title: "Code as Communication", desc: "Code is read more often than it is written. I write clean, self-documenting code that respects the next developer." },
        { icon: Zap, title: "Performance", desc: "Efficiency matters. Whether it's database query optimization or reducing bundle size, every millisecond counts." },
        { icon: GitBranch, title: "Iterative Improvement", desc: "Software is living. I believe in continuous refactoring and improving the codebase with every commit." }
    ];

    return (
        <SectionWrapper id="about" className="bg-black/20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                        How I Think About <span className="text-gradient">Engineering</span>
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I approach software engineering not just as coding, but as problem-solving through systems.
                            My focus is on building reliable, scalable, and maintainable software that solves real-world problems.
                        </p>
                        <p>
                            I believe that great software is born from deep understanding, careful design, and a relentless focus on quality.
                            It's about making the right trade-offs and building systems that can stand the test of time.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {philosophy.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold font-heading">{item.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
