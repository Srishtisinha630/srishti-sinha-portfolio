import { Code, Database, Settings, TestTube } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Fundamentals",
      icon: Code,
      skills: ["C++", "C#", "JavaScript (ES6)", "HTML5", "CSS3", "DSA", "OS", "DBMS", "CN", "OOP"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: Settings,
      skills: ["ASP.NET Core", "MVC", "EF Core", "Angular", "Dapper", "Node.js", "jQuery", "Microservices"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["SQL Server", "MySQL", "Git", "GitHub", "Postman", "Swagger", "Docker", "VS", "VS Code"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Testing & Methodologies",
      icon: TestTube,
      skills: ["NUnit", "Moq", "Debugging", "Logging", "Code Analysis", "Agile", "Scrum", "UI/UX Basics"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="section-container">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Comprehensive expertise across the full stack development lifecycle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card group animate-fade-in hover-lift"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center space-x-6 mb-8">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/50 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default animate-scale-in"
                      style={{animationDelay: `${index * 0.2 + skillIndex * 0.05}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Skill Level Indicators */}
        <div className="mt-20 glass-card p-12 animate-slide-up" style={{animationDelay: "0.8s"}}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text-enhanced">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { percentage: "90%", title: "Backend Development", skills: "ASP.NET Core, EF Core, SQL", color: "from-primary to-accent", delay: "1s" },
              { percentage: "85%", title: "Frontend Development", skills: "Angular, JavaScript, HTML/CSS", color: "from-green-500 to-teal-500", delay: "1.2s" },
              { percentage: "88%", title: "Database & DevOps", skills: "SQL Server, Git, Docker", color: "from-purple-500 to-pink-500", delay: "1.4s" }
            ].map((proficiency, index) => (
              <div key={index} className="text-center group animate-scale-in hover-lift" style={{animationDelay: proficiency.delay}}>
                <div className="relative mb-6">
                  <div className={`w-28 h-28 bg-gradient-to-r ${proficiency.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-3xl font-bold text-white">{proficiency.percentage}</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="font-bold mb-3 text-xl group-hover:text-primary transition-colors duration-300">{proficiency.title}</h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{proficiency.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;