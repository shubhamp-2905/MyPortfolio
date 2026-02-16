"use client";
import React from "react";
import { motion } from "framer-motion";

const technologies = [
    "Artificial Intelligence", "React", "Next.js", "TypeScript",
    "Python", "TensorFlow", "Node.js", "Docker", "AWS",
    "GraphQL", "MongoDB", "PostgreSQL", "System Architecture"
];

const TrustBar = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden whitespace-nowrap relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex items-center gap-12 px-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="text-xl font-heading text-muted-foreground/60 hover:text-primary transition-colors cursor-default">
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;
