import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pickles Website",
      description: "Responsive e-commerce site showcasing various pickle products with modern UI and Bootstrap framework.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      demo: "https://github.com/saisrikar45/PicklesWebsite/blob/main/Pickles%20website.png",
    },
    {
      title: "Personal Dashboard",
      description: "Interactive dashboard with clean UI featuring real-time data visualization and JavaScript interactivity.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/saisrikar45/DashBoard-Project",
      demo: "https://saisrikar45.github.io/DashBoard-Project",
    },
    {
      title: "IPL Template",
      description: "Dynamic IPL information portal built with Bootstrap, displaying team stats, schedules, and player information.",
      tech: ["Bootstrap", "HTML5", "CSS3"],
      github: "https://github.com/saisrikar45/IPL-Info-Template",
      demo: " https://saisrikar45.github.io/IPL-Info-Template/",
    },
    {
      title: "Camping Template",
      description: "Static webpage showcasing various camping types, benefits, and outdoor adventure information.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/saisrikar45/CampingTemplate",
      demo: " https://saisrikar45.github.io/CampingTemplate/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in frontend development
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
