import { Building2, Calendar, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Built 10+ RESTful APIs in ASP.NET Core using Repository Pattern",
    "Enhanced backend reliability by ~25% with advanced debugging/logging",
    "Designed Angular components with API integration, increasing coverage by 40%",
    "Improved SQL Server queries (LINQ + stored procedures), boosting speed by ~15%",
    "Participated in code reviews and unit testing (NUnit, Moq)",
    "Reduced project rework by ~10% through effective team collaboration"
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional journey and key achievements in full stack development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Company Info */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold">Cognizant Technology Solutions</h3>
                  <p className="text-primary font-semibold">Full Stack Developer Intern</p>
                  <div className="flex items-center justify-center lg:justify-start mt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    May 2025 – Aug 2025
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 group animate-fade-in"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {["ASP.NET Core", "Angular", "SQL Server", "EF Core", "NUnit", "Moq", "LINQ", "Repository Pattern"].map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;