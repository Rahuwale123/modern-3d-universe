
import React from 'react';
import ShowcaseCard from './ShowcaseCard';

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      title: "Virtual Reality Experience",
      description: "Immersive VR environments with realistic physics and interactions.",
      imageSrc: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Augmented Reality Tools",
      description: "AR applications that blend digital content with the physical world.",
      imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Interactive 3D Models",
      description: "Detailed 3D models with interactive elements and animations.",
      imageSrc: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Futuristic UI Design",
      description: "Next-generation user interfaces with advanced visualization.",
      imageSrc: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="showcase" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Showcase</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge projects and innovations that push the boundaries of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-futuristic-orange/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default ShowcaseSection;
