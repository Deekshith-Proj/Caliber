import Hero from "@/components/home/hero";
import Clients from "@/components/home/clients";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Projects from "@/components/home/projects";
import Stats from "@/components/home/stats";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Stats />
      <CTA />
    </main>
  );
}