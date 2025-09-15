import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="floating-element top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-bounce-slow"></div>
      <div className="floating-element top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-pulse-slow"></div>
      <div className="floating-element bottom-32 left-1/3 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
      
      <div className="hero-content">
        <div className="hero-grid">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 glass-card text-sm font-medium text-muted-foreground hover-lift">
              <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
              Available for work
              <div className="ml-2 w-2 h-2 bg-accent/50 rounded-full animate-ping"></div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Hi, I'm a
                <br />
                <span className="gradient-text-enhanced">Full Stack</span>
                <br />
                Developer
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}}>
                Passionate about building scalable backend systems, designing secure APIs, 
                and creating user-friendly Angular applications. I thrive in Agile environments 
                and love solving complex problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: "0.4s"}}>
              <Button 
                size="lg" 
                className="btn-hero px-8 py-4 text-base font-semibold hover-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-hero px-8 py-4 text-base font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6 animate-slide-up" style={{animationDelay: "0.6s"}}>
              <a 
                href="https://github.com/Srishtisinha630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/srishti-sinha-03aa3721b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile Photo & Info Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img 
                src={profilePhoto}
                alt="Srishti Sinha - Full Stack Developer"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-hover animate-float z-10 border border-border/20"
              />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 hover-lift animate-glow">
              <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Location</div>
              <div className="font-bold text-lg">Noida, U.P.</div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-6 -right-6 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-4 shadow-hover hover-lift animate-bounce-slow">
              <div className="text-xs font-medium uppercase tracking-wider">Experience</div>
              <div className="text-xl font-bold">Cognizant</div>
              <div className="text-sm opacity-90">Full Stack Intern</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;