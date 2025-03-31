
import React from 'react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="glass-card h-full overflow-hidden group">
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-futuristic-purple/20 to-futuristic-blue/20 w-fit group-hover:from-futuristic-purple/30 group-hover:to-futuristic-blue/30 transition-all duration-300">
            <Icon className="h-6 w-6 text-futuristic-purple" />
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-futuristic-purple transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
