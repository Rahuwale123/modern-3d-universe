
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Adding framer-motion dependency
<lov-add-dependency>framer-motion@^10.16.4</lov-add-dependency>

const HeroSection = () => {
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
              <span className="text-gradient">Explore Modern</span>
              <br />
              <span className="text-white">3D Universe</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience cutting-edge technology and design in our immersive digital playground,
              where innovation meets imagination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity text-lg px-8"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
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
