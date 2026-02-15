"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Radar() {
  const vectors = [
    { target: "South Asian Media Ecosystems", type: "Geospatial" },
    { target: "Global Platform Policy", type: "Infrastructure" },
    { target: "State-Sponsored Disinformation", type: "Threat Actor" },
    { target: "Encrypted Messaging Networks", type: "Vector" }
  ];

  return (
    <section id="radar" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">05.</span> 
        Target Vectors
      </motion.h2>

      <div className="border-2 border-ink relative bg-white/20">
        {vectors.map((vec, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 border-b-2 border-ink last:border-b-0 hover:bg-ink hover:text-paper transition-colors group"
          >
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <span className="font-mono text-xs text-alert animate-pulse">●</span>
              <Typewriter text={`VECTOR_0${index + 1}`} delay={index * 150} speed={30} className="font-mono text-xs uppercase tracking-widest text-zinc group-hover:text-paper/60" />
            </div>
            
            <div className="font-serif text-xl md:text-2xl font-bold flex-1 md:ml-12 group-hover:text-paper">
              {vec.target}
            </div>
            
            <div className="font-mono text-xs uppercase tracking-widest border border-ink px-3 py-1 group-hover:border-paper group-hover:text-paper mt-4 md:mt-0 text-center">
              [ {vec.type} ]
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}