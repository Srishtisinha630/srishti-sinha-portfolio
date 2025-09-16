import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Music, Plane } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Echoverse",
      subtitle: "Music Library Management System",
      icon: Music,
      description: "Built 15+ secure Web APIs in ASP.NET Core with EF Core Code First. Integrated JWT authentication with ASP.NET Core Identity and developed Angular UI with routing & form handling.",
      achievements: [
        "15+ secure Web APIs with EF Core Code First",
        "JWT authentication & ASP.NET Core Identity",
        "Angular UI with routing & form handling",
        "Reduced input errors by 30%",
        "Delivered in Agile sprints with JIRA"
      ],
      technologies: ["ASP.NET Core", "Angular", "EF Core", "JWT", "Identity", "JIRA", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Srishtisinha630",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Staywise",
      subtitle: "Travel & Hotel Booking Platform",
      icon: Plane,
      description: "Engineered scalable ASP.NET Core Web API with 30+ endpoints. Implemented JWT authentication & role-based authorization with EF Core using Repository & Unit of Work patterns.",
      achievements: [
        "30+ scalable API endpoints",
        "JWT authentication & role-based authorization",
        "Repository & Unit of Work patterns",
        "40% improvement in query performance",
        "Reduced unauthorized requests by 40%"
      ],
      technologies: ["ASP.NET Core", "EF Core", "JWT", "Repository Pattern", "Unit of Work", "SOLID"],
      githubUrl: "https://github.com/Srishtisinha630",
      gradient: "from-blue-500 to-teal-500"
    }
  ];

  return (
    <section className="section-container bg-hero-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my expertise in full stack development with real-world applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="glass-card group animate-scale-in hover-lift overflow-hidden relative"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-lg gradient-text-enhanced uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 hover-lift p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-tag hover:scale-110 animate-scale-in" style={{animationDelay: `${idx * 0.05}s`}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-4">
                    <Button 
                      className="flex-1 btn-hero"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-outline-hero hover:scale-105"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;