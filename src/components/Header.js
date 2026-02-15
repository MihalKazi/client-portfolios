"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', month: '2-digit', day: '2-digit' 
  });

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <header className="pt-16 pb-12 border-b-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left Column */}
        <div className="lg:col-span-7">
          {/* SECONARY DATA: Typed out */}
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc mb-6 flex gap-6 min-h-[20px]">
            <Typewriter text="File: MA-01" delay={200} />
            <Typewriter text={`Date: ${currentDate}`} delay={800} />
            <Typewriter text="Status: Active" delay={1400} className="text-alert font-bold" />
          </div>

          {/* CRITICAL DATA: Instant slide-up */}
          <motion.h1 variants={item} initial="hidden" animate="show" className="text-7xl md:text-8xl lg:text-9xl leading-[0.9] font-serif font-bold text-ink tracking-tighter">
            MINHAJ<br/>AMAN.
          </motion.h1>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 pb-2 border-l-0 lg:border-l-2 lg:border-ink lg:pl-8">
          <motion.div variants={item} initial="hidden" animate="show" transition={{ delay: 0.1 }} className="bg-ink text-paper font-mono text-sm uppercase tracking-widest px-4 py-2 mb-6 inline-block">
            Digital Rights Researcher
          </motion.div>

          {/* CRITICAL DATA: Instant slide-up */}
          <motion.p variants={item} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="text-lg md:text-xl font-serif text-ink/80 leading-relaxed max-w-lg">
            Investigating the intersection of technology, human rights, and media ecosystems. Tracking disinformation, digital authoritarianism, and protecting fundamental freedoms in digital spaces.
          </motion.p>
        </div>
      </div>
    </header>
  );
}