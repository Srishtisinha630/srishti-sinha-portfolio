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
                className="portfolio-card group animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
        <div className="mt-16 bg-hero-bg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h4 className="font-semibold mb-2">Backend Development</h4>
              <p className="text-sm text-muted-foreground">ASP.NET Core, EF Core, SQL</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <h4 className="font-semibold mb-2">Frontend Development</h4>
              <p className="text-sm text-muted-foreground">Angular, JavaScript, HTML/CSS</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">88%</span>
              </div>
              <h4 className="font-semibold mb-2">Database & DevOps</h4>
              <p className="text-sm text-muted-foreground">SQL Server, Git, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;