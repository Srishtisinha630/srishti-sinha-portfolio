import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import AchievementsSection from "@/components/Portfolio/AchievementsSection";
import TestimonialsSection from "@/components/Portfolio/TestimonialsSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Navigation from "@/components/Portfolio/Navigation";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Portfolio;