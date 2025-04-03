
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SkillCardProps {
  title: string;
  value: number;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, value, description }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Progress value={value} className="h-2 mt-2" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">{description}</p>
      </CardContent>
    </Card>
  );
};

const LanguageCard: React.FC<{ language: string; level: string }> = ({ language, level }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <span className="font-medium">{language}</span>
      <span className="text-gray-600 dark:text-gray-400 text-sm">{level}</span>
    </div>
  );
};

const HobbyCard: React.FC<{ hobby: string }> = ({ hobby }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-ai-soft">
      <CardContent className="p-6 text-center">
        <h3 className="font-semibold">{hobby}</h3>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: "Python",
      value: 80,
      description: "Experience in Python programming for data analysis and algorithm implementation."
    },
    {
      title: "MySQL",
      value: 85,
      description: "Proficient in database design, SQL queries, and database management."
    },
    {
      title: "AI Prompt Engineering",
      value: 75,
      description: "Knowledge in crafting effective prompts for AI models to generate desired outputs."
    }
  ];

  const languages = [
    { language: "English", level: "Proficient" },
    { language: "Hindi", level: "Fluent" },
    { language: "Kannada", level: "Fluent" }
  ];

  const hobbies = ["Dancing", "Playing racket games"];

  return (
    <section id="skills" className="section-container">
      <div className="mb-12">
        <h2 className="section-heading">Skills & Interests</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <SkillCard 
                key={skill.title}
                title={skill.title}
                value={skill.value}
                description={skill.description}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <Card>
              <CardContent className="p-6">
                {languages.map((item) => (
                  <LanguageCard 
                    key={item.language}
                    language={item.language}
                    level={item.level}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Hobbies</h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby) => (
                <HobbyCard key={hobby} hobby={hobby} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
