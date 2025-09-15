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
                className="portfolio-card group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{achievement.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4+</div>
            <p className="text-sm text-muted-foreground">Hackathons Led</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2+</div>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">3</div>
            <p className="text-sm text-muted-foreground">Major Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">1</div>
            <p className="text-sm text-muted-foreground">Academic Topper</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;