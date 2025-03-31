import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const HeroSection = () => {
  const [prompt, setPrompt] = useState('');
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented when user is authenticated
    alert('Please sign up first to use this feature');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">AI Website</span>
              <br />
              <span className="text-white">Builder</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning websites from simple text prompts.
              Just describe what you want, and our AI will build it for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your dream website in detail. The more specific you are, the better the result!"
                className="flex-grow min-h-[120px] bg-black/30 border border-futuristic-purple text-white focus-visible:ring-futuristic-purple p-4 rounded-lg resize-none"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity self-start"
              >
                <Send className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-card border-0">
                <SheetHeader>
                  <SheetTitle className="text-gradient text-2xl">Sign Up to Continue</SheetTitle>
                  <SheetDescription className="text-gray-300">
                    Sign up with your Google account to start building awesome websites with AI.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <Button 
                    className="w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4"
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Sign up with Google
                  </Button>
                  <p className="text-center text-sm text-gray-300">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
            
            <Button
              size="lg"
              variant="outline"
              className="border-futuristic-purple text-white hover:bg-futuristic-purple/20 transition-colors text-lg px-8"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-48 h-48 rounded-full bg-futuristic-purple/30 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-futuristic-blue/20 blur-3xl animate-pulse-glow"></div>
    </section>
  );
};

export default HeroSection;
