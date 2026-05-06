'use client';

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const BentoCard = ({
  title,
  description,
  icon,
  className,
  children
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl p-[1px] overflow-hidden group/card",
        className
      )}
    >
      {/* Border Beam Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3B82F6_100%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative h-full w-full bg-slate-950/90 rounded-[23px] p-6 lg:p-8 flex flex-col justify-between z-10 glass overflow-hidden">
        {/* Glow effect matching cursor position */}
        <motion.div
           className="absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{
             background: useTransform(
               () => `radial-gradient(600px circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 40%)`
             )
           }}
        />

        <div className="z-20 relative transform-gpu" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>

        <div className="mt-8 z-20 relative transform-gpu" style={{ transform: "translateZ(40px)" }}>
          {icon && <div className="mb-4 text-cyan-400">{icon}</div>}
          <h3 className="text-xl font-semibold text-white tracking-tight mb-2">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
