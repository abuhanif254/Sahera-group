'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  // For paragraph 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);
  const blur1 = useTransform(scrollYProgress, [0, 0.3], ["blur(8px)", "blur(0px)"]);
  
  // For paragraph 2
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0.2, 1]);
  const blur2 = useTransform(scrollYProgress, [0.2, 0.6], ["blur(8px)", "blur(0px)"]);
  
  // For paragraph 3
  const opacity3 = useTransform(scrollYProgress, [0.5, 1], [0.2, 1]);
  const blur3 = useTransform(scrollYProgress, [0.5, 1], ["blur(8px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 w-full flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24 text-center select-none font-medium text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight text-white tracking-tight">
        
        <motion.p style={{ opacity: opacity1, filter: blur1 }}>
          Innovation isn&apos;t about moving fast and breaking things. It&apos;s about <span className="text-cyan-400">calculated precision</span>.
        </motion.p>
        
        <motion.p style={{ opacity: opacity2, filter: blur2 }}>
          At the Sahera Group, we believe that the best products are born at the intersection of <span className="text-cyan-400">photorealistic design</span> and <span className="text-electric-blue">ruthless engineering</span>.
        </motion.p>
        
        <motion.p style={{ opacity: opacity3, filter: blur3 }}>
          We don&apos;t launch MVPs. We forge <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">category-defining powerhouses.</span>
        </motion.p>
        
      </div>
    </section>
  );
}
