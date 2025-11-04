import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Aurora Engineering College",
      year: "2021",
      description: "Focused on software development, algorithms, and web technologies",
    },
    {
      degree: "Intermediate",
      institution: "Susheela Memorial Junior College",
      year: "Completed",
      description: "Foundation in science and mathematics",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Saint Francis English Medium High School",
      year: "Completed",
      description: "Strong academic foundation with focus on core subjects",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <Card key={idx} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">
                      <div className="font-semibold text-foreground/70">{edu.institution}</div>
                      <div className="text-muted-foreground">{edu.year}</div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
