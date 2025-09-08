import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SkillsMarquee } from "@/components/skills-marquee"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ParticlesBackground } from "@/components/particles-background"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import SpotlightSection from "@/components/SpotlightSection"

export default function HomePage() {
  return (
    <>
      {/* <SkipLink />
      <ParticlesBackground /> */}
      <Header />
      <main id="main-content" className="relative min-h-screen">
        <Hero />
        <SkillsMarquee />
        <About />
        <Projects />
        <SpotlightSection/>
        <Contact /> 
      </main>
      <Footer />
    </>
  )
}
