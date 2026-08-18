"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GraphicDesign {
    image: string;
    title: string;
    category: "marketing" | "wedding" | "events";
    aspect: string;
    gradient: string;
}

const graphicDesigns: GraphicDesign[] = [
    // Marketing Posters (Actual visual assets)
    {
        image: "/images/poster-1.jpg",
        title: "SahaAakar Dream Job Campaign",
        category: "marketing",
        aspect: "aspect-[3/4]",
        gradient: "from-blue-600 via-sky-500 to-indigo-650"
    },
    {
        image: "/images/poster-2.jpg",
        title: "LinkedIn Growth Hacks Main Banner",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-blue-600 to-teal-500"
    },
    {
        image: "/images/poster-3.jpg",
        title: "AgentForge Tech Showcase Banner",
        category: "marketing",
        aspect: "aspect-[3/2]",
        gradient: "from-purple-655 via-indigo-600 to-blue-700"
    },
    {
        image: "/images/marketing-1.jpg",
        title: "100 Days Growth Hacks - Day 1",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-amber-500 via-yellow-600 to-orange-500"
    },
    {
        image: "/images/marketing-2.jpg",
        title: "LinkedIn Profile Formula - Day 4",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-sky-500 via-indigo-500 to-purple-600"
    },
    {
        image: "/images/marketing-3.jpg",
        title: "LinkedIn Profile Mistakes - Day 2",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-rose-500 via-red-600 to-orange-500"
    },
    {
        image: "/images/marketing-4.jpg",
        title: "LinkedIn Conversion Call-to-Action",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-teal-500 via-emerald-600 to-cyan-500"
    },
    {
        image: "/images/marketing-5.jpg",
        title: "LinkedIn Value: Why Profile Matters",
        category: "marketing",
        aspect: "aspect-square",
        gradient: "from-purple-600 via-fuchsia-600 to-pink-500"
    },

    // Events & Challenges (Actual visual assets)
    {
        image: "/images/event-5.jpg",
        title: "XRGF Game Development Recruiting Banner",
        category: "events",
        aspect: "aspect-[3/4]",
        gradient: "from-blue-600 via-indigo-950 to-teal-500"
    },
    
    {
        image: "/images/event-4.jpg",
        title: "VIIT's Got Talent Competition Showcase",
        category: "events",
        aspect: "aspect-[3/4]",
        gradient: "from-purple-600 via-yellow-600 to-rose-705"
    },
    {
        image: "/images/poster-4.jpg",
        title: "Technopoly Quest Event Poster",
        category: "events",
        aspect: "aspect-[3/4]",
        gradient: "from-red-655 via-neutral-900 to-red-800"
    },
    {
        image: "/images/event-3.jpg",
        title: "Lights Out Horror Game Showcase",
        category: "events",
        aspect: "aspect-[3/2]",
        gradient: "from-red-950 via-neutral-900 to-red-900"
    },
    
    {
        image: "/images/event-1.jpg",
        title: "3D Modeling Rules Scroll",
        category: "events",
        aspect: "aspect-[3/4]",
        gradient: "from-amber-700 via-orange-950 to-amber-900"
    },
    {
        image: "/images/event-2.jpg",
        title: "3D Modeling Challenge - Indian Musical Instruments",
        category: "events",
        aspect: "aspect-[3/4]",
        gradient: "from-amber-600 via-orange-950 to-amber-800"
    },
    
    

    // Wedding Cards (Copied visual assets) - shifted last
    {
        image: "/images/wedding-1.jpg",
        title: "Traditional Marathi Vivah Invite",
        category: "wedding",
        aspect: "aspect-[3/2]",
        gradient: "from-amber-600 via-red-600 to-yellow-500"
    },
    {
        image: "/images/wedding-2.jpg",
        title: "Royal Marathi Ganesha Invitation",
        category: "wedding",
        aspect: "aspect-[3/4]",
        gradient: "from-yellow-400 via-amber-500 to-rose-600"
    },
    {
        image: "/images/wedding-3.jpg",
        title: "Floral Shubhvivah Invitation",
        category: "wedding",
        aspect: "aspect-[3/2]",
        gradient: "from-pink-600 to-purple-855"
    },
    {
        image: "/images/wedding-4.jpg",
        title: "Traditional Hindu Wedding Card",
        category: "wedding",
        aspect: "aspect-[3/2]",
        gradient: "from-rose-500 via-orange-500 to-amber-400"
    },
    {
        image: "/images/wedding-5.jpg",
        title: "Modern Sakharpuda (Engagement) Card",
        category: "wedding",
        aspect: "aspect-[3/4]",
        gradient: "from-indigo-600 via-blue-500 to-teal-500"
    }
];

// Swapped Order: Marketing Posters -> Events -> Wedding Cards
const subCategories = [
    { id: "marketing", name: "Marketing Posters" },
    { id: "events", name: "Events" },
    { id: "wedding", name: "Wedding Cards" }
];

const GalleryImage = ({ design, onClick }: { design: GraphicDesign; onClick: () => void }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/5 break-inside-avoid mb-6 bg-white/5 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-black/30"
        >
            <div className={`w-full ${design.aspect} relative overflow-hidden`}>
                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={design.image}
                        alt={design.title}
                        loading="lazy"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${design.gradient} opacity-75 flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-103 relative`}>
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 border border-white/20 text-white shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold text-xs mb-0.5">{design.title}</span>
                            <span className="text-white/60 font-mono text-[9px] truncate max-w-[130px]">{design.image}</span>
                        </div>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-heading font-bold text-sm md:text-base">{design.title}</p>
                        <p className="text-primary text-xs mt-1 font-mono">View Design →</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Lightbox = ({ design, onClose }: { design: GraphicDesign; onClose: () => void }) => {
    const [imgError, setImgError] = useState(false);

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
        >
            {/* Highly Visible Prominent Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 z-[60]"
            >
                <span className="text-xs font-mono font-bold tracking-widest">CLOSE</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Restricted image container size */}
            <motion.div
                initial={{ scale: 0.96, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl max-h-[70vh] w-full h-full flex flex-col items-center justify-center cursor-default p-2"
            >
                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={design.image}
                        alt={design.title}
                        onError={() => setImgError(true)}
                        className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
                    />
                ) : (
                    <div className="w-full max-w-md aspect-[3/4] bg-gradient-to-tr from-white/5 to-white/10 rounded-xl flex flex-col items-center justify-center p-8 text-center border border-white/10 relative shadow-2xl">
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px] rounded-xl" />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 text-white shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <h3 className="text-white text-lg font-bold font-heading mb-2">{design.title}</h3>
                            <span className="bg-black/45 text-primary font-mono text-xs px-3.5 py-2 rounded-lg border border-white/5 select-all">
                                {design.image}
                            </span>
                        </div>
                    </div>
                )}
                {/* Title badge beneath the image inside lightbox */}
                <div className="mt-4 text-center">
                    <p className="text-white/90 text-sm font-semibold tracking-wide font-heading bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">{design.title}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const GraphicDesignGallery = () => {
    const [activeSub, setActiveSub] = useState<"marketing" | "wedding" | "events">("marketing");
    const [selectedDesign, setSelectedDesign] = useState<GraphicDesign | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const INITIAL_LIMIT = 3;

    // Reset expansion state when changing sub-categories
    useEffect(() => {
        setIsExpanded(false);
    }, [activeSub]);

    // Filter graphic design list
    const filteredDesigns = graphicDesigns.filter(
        (item) => item.category === activeSub
    );

    // Limit displayed items based on expansion state
    const displayedDesigns = isExpanded
        ? filteredDesigns
        : filteredDesigns.slice(0, INITIAL_LIMIT);

    return (
        <div className="w-full">
            {/* Secondary Sub-Category Filter Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
                {subCategories.map((sub) => {
                    const isActive = activeSub === sub.id;
                    return (
                        <button
                            key={sub.id}
                            onClick={() => setActiveSub(sub.id as any)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer select-none",
                                isActive
                                    ? "bg-white/10 text-white border-white/20 shadow-md shadow-white/5"
                                    : "bg-transparent text-muted-foreground border-transparent hover:text-white hover:border-white/10"
                            )}
                        >
                            {sub.name}
                        </button>
                    );
                })}
            </div>

            {/* Masonry Columns Layout */}
            <motion.div 
                layout
                className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance] w-full"
            >
                <AnimatePresence mode="popLayout">
                    {displayedDesigns.map((design) => (
                        <motion.div
                            key={design.image}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GalleryImage
                                design={design}
                                onClick={() => setSelectedDesign(design)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* View All / Show Less Button */}
            {filteredDesigns.length > INITIAL_LIMIT && (
                <div className="mt-12 flex justify-center">
                    <Button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-5 text-xs font-mono font-bold tracking-widest shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        {isExpanded ? "SHOW LESS" : `VIEW ALL ${activeSub.toUpperCase()} WORKS (${filteredDesigns.length})`}
                    </Button>
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedDesign && (
                    <Lightbox
                        design={selectedDesign}
                        onClose={() => setSelectedDesign(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default GraphicDesignGallery;
