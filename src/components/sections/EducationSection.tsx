
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="mb-12">
        <h2 className="section-heading">Education</h2>
      </div>
      
      <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="bg-gradient-ai p-6 md:p-8 text-white">
              <div className="md:sticky md:top-8">
                <h3 className="text-xl font-bold mb-2">2023 - Present</h3>
                <p className="text-white/80">Current CGPA: 7.0</p>
              </div>
            </div>
            
            <div className="col-span-3 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                BE in Information Science and Engineering
              </h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                RV Institute of Technology and Management
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-ai-primary mb-2">Core Coursework</h5>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Object-Oriented Programming</li>
                    <li>Web Technologies</li>
                    <li>Artificial Intelligence Fundamentals</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-ai-primary mb-2">Academic Achievements</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pursuing my bachelor's degree with a focus on information systems 
                    and computer engineering, building a strong foundation in both 
                    theoretical knowledge and practical applications of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EducationSection;
