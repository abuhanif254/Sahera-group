'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel() {
  const mesh = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
       mesh.current.rotation.y += delta * 0.5;
       mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={mesh}>
       <ambientLight intensity={1} />
       <directionalLight position={[5, 5, 5]} intensity={2} color="#06b6d4" />
       <directionalLight position={[-5, -5, -5]} intensity={1} color="#3B82F6" />
       
       <RoundedBox args={[1.2, 2.4, 0.2]} radius={0.1} smoothness={4}>
         <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
       </RoundedBox>
       {/* Screen */}
       <Box args={[1.05, 2.2, 0.05]} position={[0, 0, 0.1]}>
         <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.2} />
       </Box>
    </group>
  );
}

function ChartModel() {
  const mesh = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
       mesh.current.rotation.y -= delta * 0.3;
    }
  });
  
  return (
    <group ref={mesh}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#3B82F6" />
      <Box args={[0.4, 1, 0.4]} position={[-0.6, -0.5, 0]}>
         <meshStandardMaterial color="#3B82F6" />
      </Box>
      <Box args={[0.4, 1.8, 0.4]} position={[0, -0.1, 0]}>
         <meshStandardMaterial color="#06b6d4" />
      </Box>
      <Box args={[0.4, 2.5, 0.4]} position={[0.6, 0.25, 0]}>
         <meshStandardMaterial color="#ffffff" />
      </Box>
    </group>
  );
}

function CalculatorModel() {
  const mesh = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
       mesh.current.rotation.y += delta * 0.4;
       mesh.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <group ref={mesh}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#06b6d4" />
      
      <RoundedBox args={[1.8, 2.5, 0.2]} radius={0.1}>
        <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.5} />
      </RoundedBox>
      {/* Screen */}
      <Box args={[1.4, 0.6, 0.1]} position={[0, 0.7, 0.15]}>
        <meshStandardMaterial color="#1e293b" />
      </Box>
      {/* Buttons */}
      {[-0.3, -0.9, -1.5].map((y, i) => (
        <group key={y} position={[0, y + 0.3, 0.15]}>
          <Box args={[0.3, 0.3, 0.1]} position={[-0.5, 0, 0]}><meshStandardMaterial color="#3B82F6" /></Box>
          <Box args={[0.3, 0.3, 0.1]} position={[0, 0, 0]}><meshStandardMaterial color="#06b6d4" /></Box>
          <Box args={[0.3, 0.3, 0.1]} position={[0.5, 0, 0]}><meshStandardMaterial color="#334155" /></Box>
        </group>
      ))}
    </group>
  );
}


export function PhoneCanvas() {
  return (
    <div className="w-[120px] h-[120px] pointer-events-none absolute -right-10 -top-10 opacity-70 rotate-12 scale-75 md:scale-100">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}><PhoneModel /></Suspense>
      </Canvas>
    </div>
  )
}

export function ChartCanvas() {
  return (
    <div className="w-[120px] h-[120px] pointer-events-none absolute -left-10 -top-10 opacity-70 -rotate-12 scale-75 md:scale-100">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}><ChartModel /></Suspense>
      </Canvas>
    </div>
  )
}

export function CalculatorCanvas() {
  return (
    <div className="w-[120px] h-[120px] pointer-events-none absolute -right-10 -top-10 opacity-70 rotate-6 scale-75 md:scale-100">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}><CalculatorModel /></Suspense>
      </Canvas>
    </div>
  )
}
