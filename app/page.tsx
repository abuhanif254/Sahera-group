import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { VenturesSection } from "@/components/sections/VenturesSection";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full selection:bg-cyan-500/30">
      <HeroSection />
      <div className="relative">
         {/* Decorative grid background for the lower half */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
         <PhilosophySection />
         <VenturesSection />
      </div>

      <footer className="w-full py-12 border-t border-white/10 mt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto text-sm text-slate-500">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/20" />
             <span className="font-semibold text-slate-300">Sahera Group</span>
         </div>
         <p>© {new Date().getFullYear()} Sahera Group. All rights reserved. Building the Digital Economy.</p>
      </footer>
    </main>
  );
}
