
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface MessageProps {
  text: string;
  isBot: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-[80%] ${
          isBot
            ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
            : 'bg-ai-primary text-white rounded-br-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      text: "Hi there! I'm Disha's AI assistant. How can I help you learn more about her skills and projects?",
      isBot: true,
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;

    // Add user message
    const updatedMessages = [...messages, { text: message, isBot: false }];
    setMessages(updatedMessages);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('project') || lowerMessage.includes('beautyhub')) {
        response = "Disha developed BeautyHub, an AI-powered e-commerce platform for cosmetics. It features an attractive display of products and well-organized categories based on reviews and popularity.";
      } else if (lowerMessage.includes('skill') || lowerMessage.includes('python') || lowerMessage.includes('mysql')) {
        response = "Disha is skilled in Python programming and MySQL database management. She's also developing expertise in AI prompt engineering.";
      } else if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
        response = "Disha is pursuing a BE in Information Science and Engineering at RV Institute of Technology and Management (2023-Present). Her current CGPA is 7.0.";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
        response = "You can contact Disha at disharkhimavath@gmail.com or call at 8867553839. She's also on GitHub as Disharkhimavath.";
      } else if (lowerMessage.includes('language')) {
        response = "Disha is proficient in English and fluent in Hindi and Kannada.";
      } else if (lowerMessage.includes('hobby') || lowerMessage.includes('interest')) {
        response = "Disha enjoys dancing and playing racket games in her free time.";
      } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        response = "Hello! How can I help you learn more about Disha today?";
      } else {
        response = "I'd be happy to tell you more about Disha's skills, education, projects, or how to contact her. What would you like to know?";
      }
      
      setMessages([...updatedMessages, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-ai-primary hover:bg-ai-secondary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-5 z-50 w-80 sm:w-96 shadow-xl border-none overflow-hidden">
          <CardHeader className="bg-ai-primary text-white py-3 px-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Disha's AI Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-ai-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-3 h-80 overflow-y-auto">
            <div className="space-y-2">
              {messages.map((msg, index) => (
                <Message key={index} text={msg.text} isBot={msg.isBot} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" className="bg-ai-primary hover:bg-ai-secondary">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;
