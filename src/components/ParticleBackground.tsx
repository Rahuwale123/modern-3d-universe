
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function getRandomPointOnSphere(radius: number) {
  const theta = 2 * Math.PI * Math.random();
  const phi = Math.acos(2 * Math.random() - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return [x, y, z];
}

// Generate random points
const generatePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const [x, y, z] = getRandomPointOnSphere(radius);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const pointsGeometry = new THREE.BufferGeometry();
  const count = 3000;
  
  // Generate initial points in a spherical distribution
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(generatePoints(count, 8), 3));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry" {...pointsGeometry} />
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

function MovingGradientSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshPhongMaterial 
        color="#1EAEDB" 
        emissive="#8B5CF6"
        emissiveIntensity={0.4}
        shininess={90}
        opacity={0.2}
        transparent
        wireframe
      />
    </mesh>
  );
}

function MovingPurpleSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
      // Create a breathing effect
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.3, 32, 32]} />
      <meshPhongMaterial 
        color="#7E69AB" 
        emissive="#8B5CF6"
        emissiveIntensity={0.4}
        shininess={30}
        opacity={0.1}
        transparent
      />
    </mesh>
  );
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 h-screen -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-futuristic-dark to-black opacity-90"></div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5E9" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
        <Stars />
        <MovingGradientSphere />
        <MovingPurpleSphere />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
