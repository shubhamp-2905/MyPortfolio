"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";

const skills = {
    "Languages": ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    "Frameworks": ["React", "Next.js", "Node.js", "Express", "FastAPI", "PyTorch"],
    "AI & ML": ["Scikit-learn", "TensorFlow", "NLP", "LLMs", "RAG", "Computer Vision"],
    "Tools & Cloud": ["Git", "Docker", "Kubernetes", "AWS", "CI/CD"]
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-xl font-bold font-heading mb-16 text-center text-muted-foreground uppercase tracking-widest">Technical Toolkit</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
                {/* Vertical Dividers for large screens */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                {Object.entries(skills).map(([category, items], idx) => (
                    <div key={category} className="space-y-6 p-4 relative">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3">
                            <div className="w-8 h-px bg-primary/50" />
                            {category}
                        </h3>
                        <ul className="space-y-3">
                            {items.map((skill) => (
                                <li key={skill} className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
