
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-12">
        <h2 className="section-heading">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Let's connect! Feel free to reach out for collaborations or just a friendly chat.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
            
              <Button 
                type="submit" 
                className="w-full bg-ai-primary hover:bg-ai-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6">
              <Card className="flex-1 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="rounded-full bg-ai-soft p-3">
                      <Mail className="h-6 w-6 text-ai-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:disharkhimavath@gmail.com" 
                        className="text-gray-600 dark:text-gray-400 hover:text-ai-primary transition-colors"
                      >
                        disharkhimavath@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="rounded-full bg-ai-soft p-3">
                      <Phone className="h-6 w-6 text-ai-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a 
                        href="tel:8867553839" 
                        className="text-gray-600 dark:text-gray-400 hover:text-ai-primary transition-colors"
                      >
                        8867553839
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="rounded-full bg-ai-soft p-3">
                    <Github className="h-6 w-6 text-ai-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/Disharkhimavath" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-ai-primary transition-colors"
                    >
                      github.com/Disharkhimavath
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-ai text-white border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Location</h3>
                <p>Bengaluru, Karnataka, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
