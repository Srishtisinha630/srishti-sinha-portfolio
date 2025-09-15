import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import AchievementsSection from "@/components/Portfolio/AchievementsSection";
import TestimonialsSection from "@/components/Portfolio/TestimonialsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;