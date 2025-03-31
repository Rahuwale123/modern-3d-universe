
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Builder = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Add user message to chat
    const newMessages = [...messages, { role: 'user', content: prompt }];
    setMessages(newMessages);
    
    // Simulate AI processing
    setIsGenerating(true);
    setGeneratedCode('// Generating website from your prompt...\n\nimport React from "react";\n\nconst GeneratedWebsite = () => {\n  return (\n    <div className="min-h-screen bg-gray-900 text-white">\n      <header className="py-8">\n        <h1 className="text-4xl font-bold text-center">Your AI Generated Website</h1>\n      </header>\n      <main>\n        <p className="text-center">Content is being generated based on your prompt...</p>\n      </main>\n    </div>\n  );\n};\n\nexport default GeneratedWebsite;');
    
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'I\'ve generated a website based on your prompt. You can see the code and preview on the right.' 
      }]);
      setIsGenerating(false);
      setPrompt('');
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-futuristic-dark">
      {/* Left side - Chat interface */}
      <div className="w-full md:w-1/2 flex flex-col border-r border-white/10">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-gradient">AI Website Builder</h2>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400 text-center">
                Start by describing the website you want to build.
                <br />
                Be detailed for better results!
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg max-w-[85%] ${
                  message.role === 'user' 
                    ? 'bg-futuristic-purple/30 ml-auto' 
                    : 'bg-gray-800 mr-auto'
                }`}
              >
                {message.content}
              </div>
            ))
          )}
        </div>
        
        {/* Prompt input */}
        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Describe your website..."
              className="flex-1 bg-black/30 border-futuristic-purple text-white"
              disabled={isGenerating}
            />
            <Button 
              type="submit" 
              disabled={isGenerating || !prompt.trim()}
              className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
      
      {/* Right side - Preview/Code */}
      <div className="hidden md:flex md:w-1/2 flex-col">
        {/* Code editor */}
        <div className="h-1/2 overflow-auto border-b border-white/10 font-mono text-sm p-4 bg-black/50">
          <pre className="text-gray-300">
            {generatedCode}
          </pre>
        </div>
        
        {/* Preview */}
        <div className="h-1/2 overflow-auto p-4 bg-black/20">
          <div className="h-full rounded-lg border border-white/10 flex items-center justify-center">
            {isGenerating ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-futuristic-purple mb-4"></div>
                <p className="text-gray-400">Generating your website...</p>
              </div>
            ) : messages.length > 0 ? (
              <div className="text-center p-8">
                <h1 className="text-3xl font-bold mb-4">Your AI Generated Website</h1>
                <p className="text-gray-400">Website preview will appear here</p>
              </div>
            ) : (
              <p className="text-gray-400">Website preview will appear here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
