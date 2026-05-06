'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Icosahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

export function GlassShapes() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[1.5, 0]} position={[-2, 0, 0]}>
          <MeshTransmissionMaterial
            backside
            thickness={1}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.4}
            color="#3B82F6"
          />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[1, 0.4, 32, 64]} position={[2, 0, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <MeshTransmissionMaterial
            backside
            thickness={1}
            roughness={0.2}
            transmission={0.9}
            ior={1.2}
            chromaticAberration={0.8}
            color="#06b6d4"
          />
        </Torus>
      </Float>
    </>
  );
}
