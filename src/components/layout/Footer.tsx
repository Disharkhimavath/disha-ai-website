
import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ai-dark text-white py-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 gradient-text">Disha R. Khimavath</h3>
            <p className="text-gray-300">Aspiring Prompt Engineer and AI Expert</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <a href="#about" className="text-gray-300 hover:text-ai-primary transition-colors">About</a>
                <a href="#education" className="text-gray-300 hover:text-ai-primary transition-colors">Education</a>
                <a href="#skills" className="text-gray-300 hover:text-ai-primary transition-colors">Skills</a>
                <a href="#projects" className="text-gray-300 hover:text-ai-primary transition-colors">Projects</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-center md:text-left">Contact</h4>
              <div className="flex flex-col space-y-1">
                <a href="mailto:disharkhimavath@gmail.com" className="text-gray-300 hover:text-ai-primary transition-colors flex items-center gap-2">
                  <Mail size={16} /> disharkhimavath@gmail.com
                </a>
                <a href="tel:8867553839" className="text-gray-300 hover:text-ai-primary transition-colors flex items-center gap-2">
                  <Phone size={16} /> 8867553839
                </a>
                <a href="https://github.com/Disharkhimavath" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-ai-primary transition-colors flex items-center gap-2">
                  <Github size={16} /> Disharkhimavath
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Disha R. Khimavath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
