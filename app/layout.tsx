import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Paikrao | AI Engineer & System Architect",
  description: "Portfolio of Shubham Paikrao - Building scalable AI systems and full-stack platforms.",
};

import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BackgroundParticles from "@/components/shared/BackgroundParticles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <BackgroundParticles />
        <TooltipProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
