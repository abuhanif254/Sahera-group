'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Constellation() {
  const groupRef = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    // Icosahedron with some detail creates a cool network pattern
    const geo = new THREE.IcosahedronGeometry(12, 2);
    // Add some jitter to vertices to make it look like a network rather than a perfect sphere
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const pseudoRandom = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
      const normalizedRandom = Math.abs(pseudoRandom);
      pos.setXYZ(
        i,
        pos.getX(i) * (1 + (normalizedRandom - 0.5) * 0.2),
        pos.getY(i) * (1 + (normalizedRandom - 0.5) * 0.2),
        pos.getZ(i) * (1 + (normalizedRandom - 0.5) * 0.2)
      );
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#06b6d4" wireframe={true} transparent opacity={0.15} />
      </mesh>
      <points geometry={geometry}>
        <pointsMaterial color="#3B82F6" size={0.08} transparent opacity={0.8} />
      </points>
    </group>
  );
}
