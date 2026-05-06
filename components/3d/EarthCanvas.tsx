'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
import { motion } from 'motion/react';

export default function EarthCanvas() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      className="w-full h-full min-h-[400px] lg:min-h-[600px] cursor-grab active:cursor-grabbing"
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
