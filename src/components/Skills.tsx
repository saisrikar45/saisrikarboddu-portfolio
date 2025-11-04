import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      title: "Design & Styling",
      icon: Palette,
      skills: [
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 92 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
