
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="mb-12">
        <h2 className="section-heading">About Me</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-ai p-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-ai-soft">
                <img 
                  src="/lovable-uploads/1a7b5b83-aeb0-4eee-a250-1ca7ff70ede8.png" 
                  alt="Disha R. Khimavath" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ai-primary rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Who Am I?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm an aspiring Prompt Engineer and AI Expert passionate about creating innovative AI-driven solutions. 
            Currently pursuing my Bachelor's in Information Science and Engineering at RV Institute of Technology and Management,
            I'm developing my technical expertise in Python and MySQL.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            My journey in technology has been driven by a fascination with AI's potential to transform industries
            and create meaningful impact. I'm particularly interested in AI applications that solve real-world problems
            and enhance user experiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Bengaluru, Karnataka</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Experience Focus</h4>
                <p className="text-gray-600 dark:text-gray-400">AI Solutions & Prompt Engineering</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
