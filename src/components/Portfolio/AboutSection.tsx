import { GraduationCap, Users, Target, Heart } from "lucide-react";
const AboutSection = () => {
  const highlights = [{
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech at Jaypee Institute of Information Technology (2025)"
  }, {
    icon: Target,
    title: "Strengths",
    description: "Full Stack Development, API Engineering, SQL Optimization, Data Structures and Algorithms, Debugging and Testing"
  }, {
    icon: Users,
    title: "Team Player",
    description: "Agile delivery and effective collaboration"
  }, {
    icon: Heart,
    title: "Passionate",
    description: "Clean, maintainable code and problem-solving"
  }];
  return <section className="section-container bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate and detail-oriented Full Stack Developer from Noida, U.P., B.Tech (2025) from Jaypee Institute of Information Technology.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return <div key={index} className="glass-card text-center group animate-scale-in hover-lift" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>;
        })}
        </div>
        
        <div className="mt-20 glass-card p-10 lg:p-16 animate-slide-up" style={{
        animationDelay: "0.8s"
      }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 gradient-text-enhanced">Technical Expertise</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  With hands-on experience as a Full Stack Developer Intern at Cognizant, 
                  I specialize in building scalable backend systems with ASP.NET Core, 
                  designing secure APIs, and creating intuitive Angular applications.
                </p>
              </div>
              <div className="space-y-4">
                {[{
                text: "Enhanced backend reliability by ~25%",
                delay: "1s"
              }, {
                text: "Improved SQL query performance by ~15%",
                delay: "1.2s"
              }, {
                text: "Reduced project rework by ~10%",
                delay: "1.4s"
              }].map((achievement, index) => <div key={index} className="flex items-center space-x-4 animate-slide-up" style={{
                animationDelay: achievement.delay
              }}>
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <span className="text-base font-medium">{achievement.text}</span>
                  </div>)}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 gradient-text-enhanced">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Collaboration", "Leadership", "Problem-solving", "Attention to detail"].map((skill, index) => <div key={index} className="skill-tag justify-center py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 animate-scale-in" style={{
                animationDelay: `${1.6 + index * 0.1}s`
              }}>
                    {skill}
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;