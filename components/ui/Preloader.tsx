'use client';

import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const { progress, active } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Smooth out the progress value so it doesn't jump instantly
    let timer: NodeJS.Timeout;
    if (progress > displayProgress) {
      timer = setTimeout(() => {
        setDisplayProgress((prev) => Math.min(prev + 1, Math.round(progress)));
      }, 20);
    }
    return () => clearTimeout(timer);
  }, [progress, displayProgress]);

  useEffect(() => {
    // When progress hits 100 or is no longer active (loaded from cache quickly), finish loading.
    // Adding a slight delay makes it feel more deliberate.
    if (!active && progress === 100 || displayProgress === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [active, progress, displayProgress]);

  // Fallback timeout just in case 3D doesn't trigger or fails
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  // Lock body scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
              <motion.div 
                className="absolute inset-0 rounded-full border-t border-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-sm tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
                Initializing
              </span>
              <span className="font-mono text-3xl font-light tracking-tighter text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                {displayProgress.toString().padStart(3, '0')}%
              </span>
            </div>

            <div className="w-48 h-[1px] bg-slate-200 dark:bg-slate-800 relative overflow-hidden mt-4">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
