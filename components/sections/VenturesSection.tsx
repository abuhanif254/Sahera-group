import { BentoCard } from "@/components/ui/BentoCard";
import { Calculator, LayoutGrid, Smartphone } from "lucide-react";

export function VenturesSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 w-full" id="ventures">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Our Ventures.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
          We build, launch and scale category-defining digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <BentoCard
          title="Nexus Calculator"
          description="Next-generation computational engine providing instant analytical resolution for complex financial scenarios."
          icon={<Calculator className="w-8 h-8" />}
          className="lg:col-span-2 min-h-[300px]"
        >
          {/* Decorative graphic for Calculator */}
          <div className="absolute inset-0 right-0 left-auto w-1/2 bg-gradient-to-l from-cyan-500/20 to-transparent pointer-events-none opacity-50 flex items-center justify-center">
             <div className="w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center relative">
               <div className="absolute w-[150%] h-[1px] bg-cyan-500/20 rotate-45" />
               <div className="absolute w-[150%] h-[1px] bg-cyan-500/20 -rotate-45" />
             </div>
          </div>
        </BentoCard>

        <BentoCard
          title="Nexus Inventory"
          description="Intelligent supply chain management powered by predictive models."
          icon={<LayoutGrid className="w-8 h-8" />}
          className="lg:col-span-1 min-h-[300px]"
        >
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-blue/10 rounded-full blur-3xl pointer-events-none" />
        </BentoCard>

        <BentoCard
          title="Consumer Apps"
          description="Ecosystem of high-utility micro-apps designed for ultimate user retention."
          icon={<Smartphone className="w-8 h-8" />}
          className="lg:col-span-3 min-h-[350px]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </BentoCard>
      </div>
    </section>
  );
}
