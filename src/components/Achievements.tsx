import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Lightbulb, Users, Clock, Target, MessageSquare } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "Election Volunteer",
      description: "Volunteered in Telangana Lok Sabha and Legislative Assembly Elections",
    },
    {
      icon: Lightbulb,
      title: "AI Workshop Participant",
      description: "Participated in Be-10X Workshop on Artificial Intelligence",
    },
  ];

  const softSkills = [
    { icon: MessageSquare, skill: "Communication" },
    { icon: Clock, skill: "Time Management" },
    { icon: Target, skill: "Adaptability" },
    { icon: Users, skill: "Teamwork" },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Achievements & <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <Card key={idx} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-3 text-center">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item.skill}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
