// @ts-nocheck
'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, BackSide, AdditiveBlending, Vector3 } from 'three';
import { OrbitControls, Html } from '@react-three/drei';

export default function LocationEarth() {
  const earthRef = useRef<Mesh>(null);
  const cloudRef = useRef<Mesh>(null);

  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
  ]);

  const markerPos = useMemo(() => {
    const lat = 23.8103;
    const lon = 90.4125;
    const r = 2.05;
    
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 90) * (Math.PI / 180); 
    
    const x = -(r * Math.sin(phi) * Math.cos(theta));
    const z = (r * Math.sin(phi) * Math.sin(theta));
    const y = r * Math.cos(phi);
    
    return new Vector3(x, y, z);
  }, []);

  useFrame((state) => {
    if (earthRef.current) {
        earthRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#3B82F6" />
      
      <group ref={earthRef}>
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshPhongMaterial
            map={colorMap}
            normalMap={normalMap}
            specularMap={specularMap}
            shininess={15}
          />
        </mesh>

        <mesh ref={cloudRef}>
          <sphereGeometry args={[2.02, 64, 64]} />
          <meshPhongMaterial
            map={cloudMap}
            transparent={true}
            opacity={0.4}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.15, 64, 64]} />
          <meshBasicMaterial
            color="#3B82F6"
            transparent={true}
            opacity={0.15}
            side={BackSide}
            blending={AdditiveBlending}
          />
        </mesh>

        <mesh position={markerPos}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#06b6d4" />
            <Html center>
               <div className="relative flex items-center justify-center pointer-events-none">
                  <div className="absolute w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-75" />
                  <div className="absolute w-12 h-12 border border-cyan-400 rounded-full animate-ping opacity-30" style={{ animationDuration: '2s' }} />
                  <div className="w-3 h-3 bg-cyan-400 rounded-full" />
               </div>
            </Html>
        </mesh>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        target={[markerPos.x * 0.5, markerPos.y * 0.5, markerPos.z]}
      />
    </group>
  );
}
