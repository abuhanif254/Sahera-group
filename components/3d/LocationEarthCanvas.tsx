'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import LocationEarth from './LocationEarth';
import { motion } from 'motion/react';

export default function LocationEarthCanvas() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      <Canvas camera={{ position: [2, 1, 3], fov: 45 }}>
        <Suspense fallback={null}>
          <LocationEarth />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
    </motion.div>
  );
}
