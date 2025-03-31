
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-futuristic-blue to-futuristic-purple">
              UNIVERSE
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300">
              Features
            </a>
            <a href="#experience" className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300">
              Experience
            </a>
            <a href="#showcase" className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300">
              Showcase
            </a>
            <a href="#contact" className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 glass-card rounded-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300 px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#experience" 
                className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300 px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#showcase" 
                className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300 px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Showcase
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-futuristic-purple transition-colors duration-300 px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
