import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">SaiSrikar Boddu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Passionate about building responsive, user-friendly web interfaces with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="mailto:srikar9004@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/saisrikarboddu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/saisrikar45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
