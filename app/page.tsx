import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SkillsMarquee } from "@/components/skills-marquee";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative min-h-screen">
        <Hero />
        <SkillsMarquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
