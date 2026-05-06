'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlassShapes } from './GlassShapes';
import { motion } from 'motion/react';

export default function GlassShapesCanvas() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="w-full h-full min-h-[400px] lg:min-h-[600px] absolute inset-0 -z-10 pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <GlassShapes />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
