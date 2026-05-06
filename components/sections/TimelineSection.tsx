'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const timelineData = [
  {
    year: '2016',
    title: 'The Origin',
    description: 'Began as a singular vision in a small studio. The focus was on mastering the fundamentals of digital product design and low-level engineering.',
  },
  {
    year: '2019',
    title: 'First Scale',
    description: 'Launched initial SaaS offerings, acquiring thousands of users and proving the thesis that design-first engineering creates defensible moats.',
  },
  {
    year: '2022',
    title: 'Venture Studio Model',
    description: 'Transitioned from a single-product company to a holding company. Initiated Nexus Calculator and Nexus Inventory as autonomous entities built on a shared proprietary engine.',
  },
  {
    year: 'Present',
    title: 'The Showroom',
    description: 'Expanding the ecosystem with deep tech integrations, immersive 3D experiences, and AI-driven platforms. Engineering the future of the digital economy.',
  }
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full max-w-4xl mx-auto px-6 py-32 md:py-48 z-10 flex flex-col mt-20">
      
      {/* The Background Line */}
      <div className="absolute left-[54px] md:left-1/2 md:-translate-x-1/2 top-40 bottom-40 w-[2px] bg-white/5" />
      
      {/* The Drawing Glowing Line */}
      <motion.div 
        className="absolute left-[54px] md:left-1/2 md:-translate-x-1/2 top-40 w-[2px] bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent"
        style={{ height: lineHeight, filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.8))' }}
      />

      <div className="flex flex-col gap-24 relative z-10">
        {timelineData.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} justify-center gap-12 md:gap-0 group`}>
              
              {/* Center Dot Wrapper - fixed at w-14 h-14 (56px) so center is at 28px left or mid */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center z-10 glass transition-colors group-hover:border-cyan-500/50 -translate-y-1 md:translate-y-0">
                <div className="w-3 h-3 bg-slate-700 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass p-8 rounded-3xl"
                >
                  <span className="text-cyan-400 font-mono tracking-wider text-sm mb-3 block">{item.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{item.description}</p>
                </motion.div>
              </div>

              {/* Empty Space for the other side on Desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
