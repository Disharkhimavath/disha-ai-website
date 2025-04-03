
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="mb-12">
        <h2 className="section-heading">Projects</h2>
      </div>
      
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-to-br from-ai-primary to-ai-tertiary p-6 md:p-8 text-white">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold">BeautyHub</CardTitle>
              <p className="text-white/80 mt-1">AI-Powered E-Commerce Platform</p>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-white/20">AI</Badge>
                <Badge variant="secondary" className="bg-white/20">E-commerce</Badge>
                <Badge variant="secondary" className="bg-white/20">Web Development</Badge>
              </div>
              
              <div className="space-y-4">
                <p>
                  Developed an AI-powered e-commerce website specializing in cosmetics, 
                  including skincare, haircare products, and makeup.
                </p>
                <p>
                  The platform offers a user-friendly experience with an intuitive interface 
                  and ensures instant product delivery, enhancing customer satisfaction.
                </p>
              </div>
            </CardContent>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-ai-primary mb-2">Attractive Display</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Created an engaging interface that showcases the latest discount offers 
                  to captivate customers and increase conversion rates.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-ai-primary mb-2">Organized Categories</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Implemented shopping sections and best-seller lists that provide easy access 
                  based on product reviews and popularity, improving the user experience.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-ai-primary mb-2">Technologies Used</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Integrated AI recommendations for personalized product suggestions.
                  Developed responsive design for optimal viewing across devices.
                </p>
              </div>
            </div>
            
            <CardFooter className="flex justify-end p-0 mt-6">
              <div className="flex gap-4">
                {/* Add project links when available */}
                {/* <Button variant="outline" size="sm">View Demo</Button> */}
                {/* <Button variant="outline" size="sm">GitHub</Button> */}
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ProjectsSection;
