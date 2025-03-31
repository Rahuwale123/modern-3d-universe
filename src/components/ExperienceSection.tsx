
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshPhongMaterial 
        color="#8B5CF6" 
        emissive="#0EA5E9"
        emissiveIntensity={0.4}
        shininess={100} 
      />
    </mesh>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -1]}>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshPhongMaterial 
        color="#0EA5E9" 
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
        shininess={100} 
      />
    </mesh>
  );
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      meshRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, -1]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshPhongMaterial 
        color="#F97316" 
        emissive="#F97316"
        emissiveIntensity={0.2}
        shininess={100} 
      />
    </mesh>
  );
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Immersive <span className="text-gradient">3D Experience</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Step into a world where digital boundaries fade away. Our immersive 3D environment
              creates experiences that push the limits of what's possible in web technology.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Interactive 3D objects and environments",
                "Real-time physics and animations",
                "Cross-platform compatibility",
                "Optimized for performance and accessibility"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-futuristic-purple rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-futuristic-blue to-futuristic-purple hover:opacity-90 transition-opacity">
              Explore More
            </Button>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-[400px] w-full glass-card rounded-xl overflow-hidden"
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5E9" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
              <TorusKnot />
              <FloatingCube />
              <FloatingSphere />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
              <Environment preset="city" />
            </Canvas>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-futuristic-purple/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default ExperienceSection;
