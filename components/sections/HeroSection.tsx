'use client';

import { motion, Variants } from "motion/react";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/Spotlight";

const EarthCanvas = dynamic(() => import("@/components/3d/EarthCanvas"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20 pb-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#3B82F6"
      />
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column - Text content */}
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass w-fit border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wide">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
             </span>
             Sahera Group Venture Studio
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
            Building the
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Future of the
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#3B82F6,45%,#06b6d4,55%,#3B82F6)] bg-[length:200%_100%] animate-[background-position_2s_linear_infinite]">
              Digital Economy.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mt-4">
            We are a solo-founder holding company engineering category-defining software solutions and immersive digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mt-8 flex-wrap">
            <a href="/ventures" className="px-8 py-4 rounded-full bg-white text-slate-950 font-medium tracking-wide hover:scale-105 hover:brightness-125 transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] inline-flex">
              Explore Ventures
            </a>
            <button className="px-8 py-4 rounded-full glass text-white font-medium tracking-wide hover:bg-white/10 hover:scale-105 hover:brightness-125 transition-all duration-300">
              Our Philosophy
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Earth */}
        <div className="relative h-full w-full flex items-center justify-center">
           {/* Decorative background glow behind Earth */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none" />
           <EarthCanvas />
        </div>

      </div>
    </section>
  );
}
