import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import SelectedDesignWork from "@/components/main/SelectedDesignWork";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";
import DesignPhilosophy from "@/components/main/DesignPhilosophy";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 pb-10 md:gap-24 md:pb-14">
        <Hero />
        <Skills />
        <DesignPhilosophy />
        <Encryption />
        <SelectedDesignWork />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
