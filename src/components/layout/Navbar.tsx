
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-lg md:text-xl font-bold gradient-text">Disha R. Khimavath</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-ai-primary transition-colors">About Me</a>
            <a href="#education" className="hover:text-ai-primary transition-colors">Education</a>
            <a href="#skills" className="hover:text-ai-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-ai-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-ai-primary transition-colors">Contact</a>
            <div className="flex space-x-2">
              <a href="mailto:disharkhimavath@gmail.com" aria-label="Email" className="hover:text-ai-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Disharkhimavath" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ai-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-effect rounded-md p-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="hover:text-ai-primary transition-colors py-1" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </a>
              <a 
                href="#education" 
                className="hover:text-ai-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </a>
              <a 
                href="#skills" 
                className="hover:text-ai-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="hover:text-ai-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="hover:text-ai-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="mailto:disharkhimavath@gmail.com" 
                  aria-label="Email"
                  className="hover:text-ai-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com/Disharkhimavath" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="hover:text-ai-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
