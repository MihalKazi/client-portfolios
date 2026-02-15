"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Skills() {
  const categories = [
    {
      id: "MTH-01",
      title: "Research Methods",
      items: ["Open Source Intelligence (OSINT)", "Social Network Analysis", "Quantitative Data Analysis", "Qualitative Case Studies"]
    },
    {
      id: "DRT-02",
      title: "Digital Rights",
      items: ["Information Integrity", "Online Safety Protocols", "Internet Freedom Access", "Privacy & Encryption"]
    },
    {
      id: "INV-03",
      title: "Investigative",
      items: ["Verification & Fact-Checking", "Source Credibility Assessment", "Digital Forensics Collection", "Media & Narrative Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">03.</span> 
        Methodology
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-ink">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-b-2 md:border-b-0 md:border-r-2 border-ink last:border-0 p-6 bg-white/30 hover:bg-white/60 transition-colors relative">
            
            {/* SECONDARY DATA: Typed out ID */}
            <div className="font-mono text-xs text-alert mb-4 tracking-widest uppercase min-h-[16px]">
              <Typewriter text={`ID: ${cat.id}`} delay={idx * 200} speed={40} />
            </div>
            
            {/* CRITICAL DATA: Instant slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h3 className="font-serif text-xl font-bold mb-4 uppercase text-ink">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
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