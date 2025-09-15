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
      technologies: ["ASP.NET Core", "Angular", "EF Core", "JWT", "Identity", "JIRA"],
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
                className="project-card animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button 
                      className="flex-1 btn-hero"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-outline-hero"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
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