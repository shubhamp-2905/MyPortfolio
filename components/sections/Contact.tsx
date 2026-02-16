"use client";
import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="py-32 border-t border-white/10 bg-black/40">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                    Get In Touch
                </h2>

                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm always open to discussing engineering challenges, new ideas, or potential opportunities.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" className="h-14 px-8 rounded-full text-base bg-white text-black hover:bg-gray-200 transition-all hover:scale-105" asChild>
                        <a href="mailto:shubhampaikrao610@gmail.com">
                            <Mail className="w-5 h-5 mr-2" /> Email Me
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105" asChild>
                        <a href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 mr-2 text-[#0077b5]" /> LinkedIn
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105" asChild>
                        <a href="https://github.com/shubhamp-2905" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
