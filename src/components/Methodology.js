"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Methodology({ categories }) {
  
  if (!categories || categories.length === 0) {
    return null; 
  }

  // 1. Determine the right layout based on how many items exist
  const getGridClass = (length) => {
    if (length === 1) return "md:grid-cols-1";
    if (length === 2) return "md:grid-cols-2";
    return "md:grid-cols-3"; // Handles 3 items (or more, keeping them in rows of 3)
  };

  const gridClass = getGridClass(categories.length);

  return (
    <section id="methodology" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">03.</span> 
        Methodology
      </motion.h2>

      {/* 2. Inject the dynamic gridClass right here */}
      <div className={`grid grid-cols-1 ${gridClass} gap-0 border-2 border-ink`}>
        
        {categories.map((cat, idx) => (
          <div key={idx} className="border-b-2 md:border-b-0 md:border-r-2 border-ink last:border-b-0 md:last:border-r-0 md:last:border-b-0 p-6 bg-white/30 hover:bg-white/60 transition-colors relative">
            
            <div className="font-mono text-xs text-alert mb-4 tracking-widest uppercase min-h-[16px]">
              <Typewriter text={`ID: ${cat.id}`} delay={idx * 200} speed={40} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h3 className="font-serif text-xl font-bold mb-4 uppercase text-ink">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items && cat.items.map((item, i) => (
                  <li key={i} className="font-mono text-sm text-ink/80 flex items-start group">
                    <span className="mr-2 text-alert opacity-50 group-hover:opacity-100 transition-opacity">›</span>
                    <span className="group-hover:text-ink transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        ))}
      </div>
    </section>
  );
}