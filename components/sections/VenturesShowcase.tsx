'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PhoneCanvas, ChartCanvas, CalculatorCanvas } from '@/components/3d/MiniModels';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Nexus Calculator',
    description: 'A next-generation computational engine providing instant analytical resolution for complex financial scenarios. Built with precision and raw computational performance in mind.',
    image: 'https://picsum.photos/seed/calculator/800/600',
    icon: <CalculatorCanvas />,
    align: 'left',
  },
  {
    id: 2,
    title: 'Nexus Inventory',
    description: 'Intelligent supply chain management powered by predictive models. Accurately forecast demand and optimize inventory levels globally using our proprietary ML capabilities.',
    image: 'https://picsum.photos/seed/inventory/800/600',
    icon: <ChartCanvas />,
    align: 'right',
  },
  {
    id: 3,
    title: 'Consumer Apps',
    description: 'An ecosystem of high-utility micro-apps designed for ultimate user retention. Providing seamless daily experiences across mobile platforms with unmatched performance.',
    image: 'https://picsum.photos/seed/apps/800/600',
    icon: <PhoneCanvas />,
    align: 'left',
  }
];

function ProjectRow({ project, index }: { project: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: image moves slightly up/down while scrolling
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
      {/* Text Section */}
      <div className={`flex-1 order-2 ${project.align === 'left' ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative">
          {project.icon}
          <motion.div
            initial={{ opacity: 0, x: project.align === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
              Project 0{index + 1}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              {project.description}
            </p>
            <button className="text-white font-medium tracking-wide border-b border-cyan-500 pb-1 hover:text-cyan-300 hover:scale-105 hover:brightness-125 transition-all duration-300 inline-flex items-center gap-2 group origin-left w-fit">
              View Case Study
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className={`flex-1 w-full order-1 ${project.align === 'left' ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass p-2 group">
          <motion.div style={{ y: imageY }} className="w-full h-[120%] -top-[10%] relative rounded-xl overflow-hidden">
             <Image 
               src={project.image} 
               alt={project.title} 
               fill 
               className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function VenturesShowcase() {
  return (
    <section className="relative z-10 w-full bg-slate-950/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="w-full flex flex-col pt-10 pb-32 space-y-10 md:space-y-0">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
