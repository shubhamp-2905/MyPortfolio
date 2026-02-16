"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const experience = [
    {
        role: "Data Science Intern",
        company: "TechCorp Inc.",
        period: "2023 - Present",
        desc: "Designed and deployed a predictive maintenance model achieving 15% downtime reduction. Built automated ETL pipelines processing 500GB+ daily data using Python and SQL."
    },
    {
        role: "Full Stack Developer Intern",
        company: "StartupX",
        period: "2022 - 2023",
        desc: "Refactored legacy React codebase to improve FCP by 40%. Implemented secure Stripe payment integration handling $10k+ monthly transaction volume."
    }
];

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-black/20">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">Experience</h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 sm:pl-0">
                        {/* Timeline Line for Desktop */}
                        <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2" />

                        <div className={`sm:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] sm:left-[50%] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-black sm:-translate-x-1/2 z-10" />

                            <div className="w-full sm:w-[calc(50%-2rem)]">
                                <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1 duration-300 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                            <h3 className="text-lg font-bold text-white">{job.role}</h3>
                                            <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">{job.period}</span>
                                        </div>
                                        <div className="text-sm font-medium text-muted-foreground mb-4 border-b border-white/5 pb-2">{job.company}</div>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {job.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side of timeline */}
                            <div className="hidden sm:block w-[calc(50%-2rem)]" />
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
