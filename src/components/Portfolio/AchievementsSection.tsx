import { Trophy, Award, Medal, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Hackathons & Events",
      icon: Trophy,
      items: [
        "Led teams at Eatsure Hackathon (2024)",
        "Hyperverge Hackathon participant (2024)",
        "Myntra HackerRamp team leader (2024)",
        "CICE Project Exhibition (2024)"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "Competitive Achievements",
      icon: Target,
      items: [
        "Cleared 1st round of TVS Credit IT Challenge (2024)",
        "Advanced to Spark Wars 3.0 (2024)",
        "Subject Topper in Computer Science (CBSE, 2021)"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        ".NET Framework Fundamentals (Infosys Springboard)",
        "SQL Fundamentals (Infosys Springboard)",
        "Full Stack Development Expertise"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Leadership & Impact",
      icon: Medal,
      items: [
        "Team leadership in multiple hackathons",
        "Mentored junior developers",
        "Active in tech community events",
        "Open source contributions"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="section-container bg-hero-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements & Leadership</h2>
          <p className="section-subtitle">
            Recognitions, certifications, and leadership experiences that showcase my commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="glass-card group animate-scale-in hover-lift"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center space-x-6 mb-8">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{achievement.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {achievement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-4 hover-lift p-3 rounded-xl hover:bg-secondary/20 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2 + itemIndex * 0.1}s`}}>
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full mt-1 flex-shrink-0"></div>
                      <span className="leading-relaxed hover:text-foreground transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "4+", label: "Hackathons Led", delay: "0.8s" },
            { number: "5+", label: "Certifications", delay: "1s" },
            { number: "3", label: "Major Projects", delay: "1.2s" }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-scale-in hover-lift" style={{animationDelay: stat.delay}}>
              <div className="relative mb-4">
                <div className="text-5xl font-bold gradient-text-enhanced mb-2">
                  {stat.number}
                </div>
              </div>
              <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;