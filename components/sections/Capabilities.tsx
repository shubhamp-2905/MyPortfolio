"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, Code2, Database, Server } from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "AI Systems Engineering",
        desc: "Building RAG pipelines, fine-tuning LLMs, and integrating predictive models into production workflows.",
        tags: ["LangChain", "OpenAI", "PyTorch"]
    },
    {
        icon: Code2,
        title: "Full-Stack Platforms",
        desc: "Developing end-to-end web applications with modern frameworks, secure authentication, and real-time features.",
        tags: ["Next.js", "React", "Node.js"]
    },
    {
        icon: Database,
        title: "Data Engineering",
        desc: "Architecting data pipelines, ETL processes, and analytics dashboards to turn raw data into actionable insights.",
        tags: ["PostgreSQL", "Kafka", "Airflow"]
    },
    {
        icon: Server,
        title: "DevOps & Cloud",
        desc: "Automating deployment pipelines, managing containerized environments, and ensuring system reliability.",
        tags: ["Docker", "AWS", "CI/CD"]
    }
];

const Capabilities = () => {
    return (
        <SectionWrapper id="services">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Core Capabilities</h2>
                <p className="text-muted-foreground">
                    Delivering technical excellence across the entire stack.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                        <Card className="glass-card border-white/10 h-full relative z-10 hover:-translate-y-2 transition-transform duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground mb-6">
                                    {service.desc}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Capabilities;
