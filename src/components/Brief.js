"use client"
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Brief({ data }) {
  // Track mouse coordinates and hover state for the flashlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  if (!data || !data.content) return null;

  // Calculate exact mouse position relative to this specific container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // We pass 'isIlluminated' so the bracketed text looks like a glowing clue under the light
  const renderText = (text, isIlluminated) => {
    return text.split('\n').map((paragraph, pIndex) => {
      if (!paragraph.trim()) return <br key={pIndex} />;
      const parts = paragraph.split(/(\[.*?\])/g);

      return (
        <p key={pIndex} className="mb-6 text-xl md:text-2xl leading-relaxed font-serif">
          {parts.map((part, i) => {
            if (part.startsWith('[') && part.endsWith(']')) {
              const innerText = part.slice(1, -1);
              return (
                <span 
                  key={i} 
                  className={isIlluminated 
                    ? "text-alert font-mono uppercase text-sm tracking-widest border-b border-alert bg-alert/10 px-1 mx-[2px] transition-all" 
                    : "font-mono uppercase text-sm tracking-widest px-1 mx-[2px] opacity-0"} // Hidden until light hits it
                >
                  {innerText}
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <section id="about" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">00.</span> 
        {data.title || "Subject Brief"}
      </motion.h2>

      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl bg-white/30 border-2 border-ink relative cursor-crosshair overflow-hidden"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-alert -mt-[2px] -ml-[2px] z-40"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-alert -mt-[2px] -mr-[2px] z-40"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-alert -mb-[2px] -ml-[2px] z-40"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-alert -mb-[2px] -mr-[2px] z-40"></div>

        {/* Center prompt that disappears when hovered */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30"
          animate={{ opacity: isHovering ? 0 : 1 }}
        >
          <div className="w-16 h-16 border border-ink/30 rounded-full flex items-center justify-center mb-4 relative">
             <div className="w-2 h-2 bg-alert rounded-full animate-ping"></div>
             {/* Crosshair lines */}
             <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-ink/20 -translate-x-1/2"></div>
             <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-ink/20 -translate-y-1/2"></div>
          </div>
          <span className="bg-ink text-paper px-3 py-1 font-mono text-[10px] tracking-widest uppercase shadow-lg">
            Awaiting Visual Sweep
          </span>
        </motion.div>
        {/* LAYER 1: Base Faint Layer (What you see without the light) */}
        <div className="p-8 md:p-12 opacity-10 text-ink select-none">
          <div className="font-mono text-xs mb-8 uppercase tracking-widest border-b-2 border-ink pb-4">
            Status: Classified // Eyes Only
          </div>
          {renderText(data.content, false)}
        </div>

        {/* LAYER 2: The UV Spotlight Layer (Only visible around the cursor) */}
        <motion.div 
          className="absolute inset-0 p-8 md:p-12 pointer-events-none text-ink bg-white/10"
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            // This CSS creates the circular flashlight mask
            WebkitMaskImage: `radial-gradient(circle 160px at ${mousePosition.x}px ${mousePosition.y}px, black 30%, transparent 100%)`,
            maskImage: `radial-gradient(circle 160px at ${mousePosition.x}px ${mousePosition.y}px, black 30%, transparent 100%)`,
          }}
        >
          <div className="font-mono text-xs text-zinc mb-8 uppercase tracking-widest border-b-2 border-ink/20 pb-4">
            Status: <span className="text-alert">Classified</span> 
          </div>
          {renderText(data.content, true)}
        </motion.div>

      </motion.div>
    </section>
  );
}