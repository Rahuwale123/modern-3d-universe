
import React from 'react';
import { motion } from 'framer-motion';

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const ShowcaseCard = ({ title, description, imageSrc, delay = 0 }: ShowcaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="group perspective-1000"
    >
      <div className="relative w-full overflow-hidden glass-card rounded-xl transition-transform duration-500 transform group-hover:scale-[1.02] h-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-futuristic-purple transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
