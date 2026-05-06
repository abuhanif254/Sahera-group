'use client';

import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/Spotlight";
import { TimelineSection } from "@/components/sections/TimelineSection";

const ConstellationCanvas = dynamic(() => import("@/components/3d/ConstellationCanvas"), { ssr: false });

export default function AboutPage() {
  return (
    <main className="relative flex flex-col w-full selection:bg-cyan-500/30 overflow-x-hidden pt-16">
      
      {/* Background & Spotlight */}
      <ConstellationCanvas />
      
      <Spotlight
         className="-top-40 left-0 md:left-60 md:-top-20"
         fill="#3B82F6"
      />

      {/* Hero Header */}
      <section className="relative z-10 text-center px-6 mt-32 md:mt-48 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Legacy</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          From a singular vision to a powerhouse venture studio. Discover the timeline of relentless innovation and design-first engineering.
        </p>
      </section>

      {/* Narrative Flow / Timeline */}
      <TimelineSection />

      {/* Footer */}
      <footer className="relative z-10 w-full py-12 border-t border-white/10 mt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto text-sm text-slate-500 bg-slate-950/50 backdrop-blur-sm">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/20" />
             <span className="font-semibold text-slate-300">Sahera Group</span>
         </div>
         <p>© {new Date().getFullYear()} Sahera Group. All rights reserved. Building the Digital Economy.</p>
      </footer>
    </main>
  );
}
