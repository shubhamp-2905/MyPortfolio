"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const SectionWrapper = ({ children, id, className, delay = 0 }: SectionWrapperProps) => {
    return (
        <section id={id} className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="container mx-auto px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
