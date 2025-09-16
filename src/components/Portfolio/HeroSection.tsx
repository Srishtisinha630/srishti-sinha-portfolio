import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Srishti_Sinha_Resume.pdf';
    link.download = 'Srishti_Sinha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="hero-section">
      {/* Background Elements */}
      <div className="floating-element top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-bounce-slow"></div>
      <div className="floating-element top-40 right-20 w-24 h-24 bg-accent/10 rounded-full"></div>
      <div className="floating-element bottom-32 left-1/3 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
      
      <div className="hero-content pt-20">
        <div className="hero-grid">
          {/* Left side - Content */}
          <div className="space-y-10 animate-fade-in">            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Hi, I'm a
                <br />
                <span className="gradient-text-enhanced">Full Stack</span>
                <br />
                Developer
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-slide-up" style={{
              animationDelay: "0.2s"
            }}>Full Stack Developer Intern skilled in ASP.NET Core, Angular, SQL, and JavaScript. Experienced in building secure APIs, scalable backend systems, and responsive UIs with strong problem-solving and Data Structures &amp; Algorithms skills in Agile environments.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{
            animationDelay: "0.4s"
          }}>
              <Button onClick={downloadResume} size="lg" className="btn-hero px-8 py-4 text-base font-semibold">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6 animate-slide-up" style={{
            animationDelay: "0.6s"
          }}>
              <a href="https://github.com/Srishtisinha630" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary/50 backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/srishti-sinha-03aa3721b" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary/50 backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile Photo & Info Card */}
          <div className="relative animate-slide-in-right">
            {/* Location Card - Above photo */}
            <div className="glass-card p-6 hover-lift mb-6 w-fit">
              <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Location</div>
              <div className="font-bold text-lg">Noida, U.P.</div>
            </div>
            
            {/* Experience Badge - Above photo */}
            <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-4 shadow-hover hover-lift mb-6 w-fit ml-auto">
              <div className="text-xs font-medium uppercase tracking-wider">Experience</div>
              <div className="text-xl font-bold">Cognizant</div>
              <div className="text-sm opacity-90">Full Stack Intern</div>
            </div>
            
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img src={profilePhoto} alt="Srishti Sinha - Full Stack Developer" className="relative w-full max-w-md mx-auto rounded-3xl shadow-hover animate-float z-10 border border-border/20" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;