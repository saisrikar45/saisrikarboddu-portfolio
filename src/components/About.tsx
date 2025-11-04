import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <Card className="card-hover">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User className="w-24 h-24 text-primary-foreground" />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enthusiastic Frontend Developer skilled in <span className="text-primary font-semibold">React.js</span>, 
                  <span className="text-primary font-semibold"> JavaScript (ES6+)</span>, 
                  <span className="text-primary font-semibold"> Bootstrap</span>, and modern UI/UX design principles.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strong understanding of responsive design and performance optimization. 
                  Committed to creating accessible, efficient, and visually appealing web applications 
                  that provide excellent user experiences.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My goal is to continuously learn and apply the latest technologies to build innovative 
                  solutions that make a difference in people's lives.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
