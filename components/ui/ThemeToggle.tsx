'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full glass hover:scale-110 active:scale-95 transition-all flex items-center justify-center overflow-hidden w-10 h-10 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
         <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ y: 20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <Sun className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: 20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <Moon className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </button>
  );
}
