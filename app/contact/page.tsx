'use client';

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Send } from "lucide-react";

// Disable SSR for 3D components
const LocationEarthCanvas = dynamic(() => import("@/components/3d/LocationEarthCanvas"), { ssr: false });

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden selection:bg-cyan-500/30 pt-16">
      
      {/* Background 3D Earth focusing on Bangladesh */}
      <LocationEarthCanvas />

      <div className="relative z-10 w-full max-w-lg px-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">The Connection</h1>
            <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Initialize Protocol</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label htmlFor="name" className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Identity
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="email" className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Comm Link
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                Transmission
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 resize-none"
                placeholder="Begin transmission..."
              />
            </div>

            <button
              type="submit"
              className="w-full group bg-white text-slate-950 font-medium tracking-wide py-4 px-6 rounded-xl hover:scale-105 hover:brightness-125 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <span>Transmit Signal</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

    </main>
  );
}
