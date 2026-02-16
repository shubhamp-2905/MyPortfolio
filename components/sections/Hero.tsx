"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Database, Activity } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Gradients handled in globals.css, but adding local glow for hero focus */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">Available for new projects</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                        I build <span className="text-gradient">reliable systems</span> powered by AI.
                    </h1>

                    <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed">
                        Computer Science student focused on backend systems, machine learning pipelines and real-world problem solving.
                        I care about correctness, scalability and long-term maintainability.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                            View Work <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5 hover:text-white px-8 h-12 text-base" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                            About Me
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <div className="glass-card rounded-xl p-0 overflow-hidden border border-white/20 shadow-2xl bg-black/80">
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-muted-foreground font-mono">shubham@dev:~/projects/portfolio</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-sm space-y-4">
                            <div className="flex gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-muted-foreground">cat philosophy.md</span>
                            </div>
                            <div className="text-gray-300 pl-4 border-l-2 border-white/10">
                                <p># Engineering Principles</p>
                                <p className="mt-2">- Reliability &gt; Features</p>
                                <p>- Simplicity &gt; Complexity</p>
                                <p>- Automate everything</p>
                                <p>- Always keep learning</p>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-muted-foreground">git log --oneline -n 3</span>
                            </div>
                            <div className="space-y-1 pl-4 text-xs text-muted-foreground">
                                <p><span className="text-yellow-500">a1b2c3d</span> feat: optimize inference pipeline latency</p>
                                <p><span className="text-yellow-500">e4f5g6h</span> refactor: decouple database layer</p>
                                <p><span className="text-yellow-500">i7j8k9l</span> docs: update architecture diagrams</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="animate-pulse bg-white/50 w-2 h-4 block"></span>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
