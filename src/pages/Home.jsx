import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackgorund'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { TracingBeam } from '../components/ui/tracing-beam'

const Home = () => {
  return (
    <div className="max-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background Effects */}
      <StarBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <TracingBeam className="px-6">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </TracingBeam>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
