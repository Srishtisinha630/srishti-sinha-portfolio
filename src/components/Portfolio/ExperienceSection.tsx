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
            Internship experience and key achievements in full stack development
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 animate-scale-in">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">
              {/* Company Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text-enhanced">Cognizant Technology Solutions</h3>
                  <p className="text-primary font-bold text-lg">Full Stack Developer Intern</p>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    May 2025 – Aug 2025
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6 gradient-text-enhanced">Key Achievements</h4>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 group animate-slide-up hover-lift p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                  <div className="relative">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0 group-hover:scale-125 group-hover:text-primary transition-all duration-300" />
                  </div>
                        <span className="leading-relaxed text-base group-hover:text-foreground transition-colors duration-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-muted-foreground">Technologies Used</h5>
                  <div className="flex flex-wrap gap-3">
                    {["ASP.NET Core", "Angular", "SQL Server", "EF Core", "NUnit", "Moq", "LINQ", "Repository Pattern", "HTML5", "CSS3", "JavaScript", "Agile", "Scrum", "Sprint Planning"].map((tech, index) => (
                      <span 
                        key={index} 
                        className="skill-tag hover:scale-110 animate-scale-in"
                        style={{animationDelay: `${0.8 + index * 0.05}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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