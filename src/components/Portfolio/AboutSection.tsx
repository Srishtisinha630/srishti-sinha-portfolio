import { GraduationCap, Users, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech at Jaypee Institute of Information Technology (2025)"
    },
    {
      icon: Target,
      title: "Strengths",
      description: "Full Stack Development, API Engineering, SQL Optimization"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Agile delivery and effective collaboration"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Clean, maintainable code and problem-solving"
    }
  ];

  return (
    <section className="section-container bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate and detail-oriented Full Stack Developer from Noida, U.P., 
            currently pursuing B.Tech (2025) at Jaypee Institute of Information Technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="portfolio-card text-center group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-hero-bg rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With hands-on experience as a Full Stack Developer Intern at Cognizant, 
                I specialize in building scalable backend systems with ASP.NET Core, 
                designing secure APIs, and creating intuitive Angular applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Enhanced backend reliability by ~25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Improved SQL query performance by ~15%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Reduced project rework by ~10%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Collaboration", "Leadership", "Problem-solving", "Attention to detail"].map((skill, index) => (
                  <div key={index} className="skill-tag justify-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;