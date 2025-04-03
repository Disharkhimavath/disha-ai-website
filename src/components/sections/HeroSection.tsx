
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with AI theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark via-ai-tertiary to-ai-primary opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-ai-light opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-ai-primary opacity-10 blur-3xl"></div>
        <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-ai-secondary opacity-10 blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span>Hello, I'm </span>
            <span className="gradient-text">Disha R. Khimavath</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Aspiring Prompt Engineer and AI Expert based in Bengaluru
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Seeking opportunities to apply and enhance skills in MySQL and Python through impactful projects and internships. Aiming to contribute to innovative AI-driven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-ai-primary hover:bg-ai-secondary text-white px-6 py-2">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-white px-6 py-2">
              <a href="#projects">Explore My Work</a>
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown className="text-ai-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
