
import React from 'react';
import FeatureCard from './FeatureCard';
import { Zap, Shield, Gauge, Layout, Layers, Code } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing speeds with our optimized performance architecture."
    },
    {
      icon: Shield,
      title: "Secure By Design",
      description: "Built with security in mind, featuring end-to-end encryption and data protection."
    },
    {
      icon: Gauge,
      title: "High Performance",
      description: "Engineered for maximum efficiency and resource optimization."
    },
    {
      icon: Layout,
      title: "Modern Interface",
      description: "Clean, intuitive UI/UX designed for the best user experience."
    },
    {
      icon: Layers,
      title: "3D Technology",
      description: "Cutting-edge 3D rendering for immersive visual experiences."
    },
    {
      icon: Code,
      title: "Advanced API",
      description: "Robust API solutions for seamless integration with your systems."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Future-Ready</span> Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the technologies that power our platform and take your experience to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-futuristic-blue/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-futuristic-purple/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default FeaturesSection;
