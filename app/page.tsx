import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import CaseStudies from "@/components/main/CaseStudies";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <CaseStudies />
        <About />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
