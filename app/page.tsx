import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const ByTheNumbers = dynamic(() => import("@/components/sections/ByTheNumbers"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Achievements = dynamic(() => import("@/components/sections/Achievements"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ByTheNumbers />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
