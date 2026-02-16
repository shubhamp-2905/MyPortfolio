import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg mt-20">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-heading">Shubham Paikrao</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Building scalable AI systems & architectural solutions.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="mailto:contact@shubhampaikrao.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>

                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Shubham Paikrao. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
