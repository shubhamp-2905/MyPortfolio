import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Now from "@/components/sections/Now";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Work />
      <Skills />
      <Now />
      <Contact />
    </div>
  );
}
