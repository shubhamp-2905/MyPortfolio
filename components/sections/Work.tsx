"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GraphicDesignGallery from "./GraphicDesignGallery";
import FreelanceProjects from "./FreelanceProjects";
import Projects from "./Projects";
import { cn } from "@/lib/utils";

type TabId = "projects" | "freelance" | "graphic";

interface Tab {
    id: TabId;
    name: string;
}

const categories: Tab[] = [
    { id: "projects", name: "Projects" },
    { id: "freelance", name: "Freelancing" },
    { id: "graphic", name: "Graphic Designing" }
];

const Work = () => {
    const [activeTab, setActiveTab] = useState<TabId>("projects");

    return (
        <SectionWrapper id="projects">
            {/* Header Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                    Selected <span className="text-gradient">Work</span>
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    A curated collection of my creative, professional, and technical undertakings.
                </p>
            </div>

            {/* Tab/Filter Navigation */}
            <div className="flex justify-center mb-16 px-4">
                <div className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full max-w-full overflow-x-auto whitespace-nowrap scrollbar-none shadow-xl relative">
                    {categories.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 z-10 select-none cursor-pointer whitespace-nowrap",
                                    isActive ? "text-white" : "text-muted-foreground hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-work-tab"
                                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/30"
                                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                    />
                                )}
                                {tab.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content Panels with Smooth Animation */}
            <div className="w-full min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="w-full"
                    >
                        {activeTab === "graphic" && <GraphicDesignGallery />}
                        {activeTab === "freelance" && <FreelanceProjects />}
                        {activeTab === "projects" && <Projects />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};

export default Work;
