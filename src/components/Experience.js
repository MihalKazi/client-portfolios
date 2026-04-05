"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

// 1. Add { experiences } inside the parentheses to accept the data!
export default function Experience({ experiences }) {
  
  // 2. We removed the hardcoded 'const experiences = [...]' array!

  // 3. Add a quick safety check in case the client deletes all their data
  if (!experiences || experiences.length === 0) {
    return null; 
  }

  return (
    <section id="experience" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">02.</span> 
        Fieldwork & Roles
      </motion.h2>
      
      <div className="relative border-l-2 border-ink ml-4 md:ml-8">
        {/* The component now loops through whatever Sanity gives it! */}
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 pl-8 relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-paper border-2 border-ink group-hover:bg-alert group-hover:border-alert transition-colors duration-300"></div>
            
            {/* SECONDARY DATA: Typed out */}
            <div className="font-mono text-xs uppercase tracking-widest text-zinc mb-2 min-h-[16px]">
              <Typewriter text={`[${exp.meta}]`} delay={index * 200} speed={30} />
            </div>
            
            {/* CRITICAL DATA: Slides in smoothly */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h3 className="text-2xl font-serif font-bold mb-3 text-ink group-hover:text-alert transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="font-serif text-lg leading-relaxed text-ink/80 max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}