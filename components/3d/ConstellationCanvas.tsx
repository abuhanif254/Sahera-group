'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Constellation } from './Constellation';
import { motion } from 'motion/react';

export default function ConstellationCanvas() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Add fog to blend edges beautifully into background */}
        <fog attach="fog" args={['#020617', 5, 20]} />
        <Suspense fallback={null}>
          <Constellation />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
