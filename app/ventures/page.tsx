'use client';

import { VenturesShowcase } from "@/components/sections/VenturesShowcase";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

const GlassShapesCanvas = dynamic(() => import("@/components/3d/GlassShapesCanvas"), { ssr: false });

export default function VenturesPage() {
  return (
    <main className="relative flex flex-col w-full selection:bg-cyan-500/30">
      
      {/* Hero Banner Area */}
      <section className="relative h-[80svh] flex flex-col items-center justify-center overflow-hidden">
         <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#06b6d4"
         />
         
         <GlassShapesCanvas />

         <div className="relative z-10 text-center px-6 mt-16 pointer-events-none">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Showroom</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
              We design robust algorithms, polished interfaces, and absolute market dominance.
            </p>
         </div>
      </section>

      {/* The Parallax Zig-Zag Showcase */}
      <VenturesShowcase />

      <footer className="w-full py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto text-sm text-slate-500 bg-slate-950">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/20" />
             <span className="font-semibold text-slate-300">Sahera Group</span>
         </div>
         <p>© {new Date().getFullYear()} Sahera Group. All rights reserved. Building the Digital Economy.</p>
      </footer>
    </main>
  );
}
