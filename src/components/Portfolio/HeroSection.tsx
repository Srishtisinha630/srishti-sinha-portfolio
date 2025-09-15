import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-grid">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-medium text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              Available for work
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Hi, I'm a
                <br />
                <span className="text-gradient">Full Stack</span>
                <br />
                Developer
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building scalable backend systems, designing secure APIs, 
                and creating user-friendly Angular applications. I thrive in Agile environments 
                and love solving complex problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-3 text-base font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-hero px-8 py-3 text-base font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/Srishtisinha630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/srishti-sinha-03aa3721b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile Photo & Info Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={profilePhoto}
                alt="Srishti Sinha - Full Stack Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-hover animate-float"
              />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-4 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="text-sm text-muted-foreground mb-1">Location</div>
              <div className="font-semibold">Noida, U.P.</div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-3 shadow-card">
              <div className="text-xs font-medium">Experience</div>
              <div className="text-lg font-bold">Cognizant</div>
              <div className="text-xs opacity-90">Full Stack Intern</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;