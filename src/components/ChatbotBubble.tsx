
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X } from 'lucide-react';

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-ai-primary hover:bg-ai-secondary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </Button>

      {/* Chatbot iframe */}
      {isOpen && (
        <Card className="fixed bottom-20 right-5 z-50 w-[350px] sm:w-[400px] h-[600px] shadow-xl border-none overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="bg-ai-primary text-white py-3 px-4 flex justify-between items-center">
              <h3 className="font-medium">Disha's Chatbot</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-ai-secondary"
              >
                <X size={18} />
              </Button>
            </div>
            <div className="flex-grow">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/vrFCNgyQm7lg7lbWgMQkF"
                width="100%"
                height="100%"
                frameBorder="0"
                className="bg-white"
              ></iframe>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatbotBubble;
