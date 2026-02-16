"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const learningItems = [
    { label: "System Design", desc: "Designing scalable, high-availability systems" },
    { label: "Distributed Systems Basics", desc: "Understanding consensus, replication, and consistency" },
    { label: "Improving ML Model Reliability", desc: "Robustness, monitoring, and failover strategies" },
    { label: "CI/CD Pipelines", desc: "Automating build, test, and deployment workflows" },
];

const Now = () => {
    return (
        <SectionWrapper id="now" className="py-24">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Currently Exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {learningItems.map((item, index) => (
                    <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/20 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.label}</h3>
                        <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Now;
