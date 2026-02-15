"use client"
import { motion } from 'framer-motion';

export default function ProjectCard({ type, title, description, achievements }) {
  return (
    <motion.div 
      className="group relative border-t-2 border-ink pt-4 pb-8 flex flex-col md:flex-row gap-6 md:gap-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Left Column: Metadata (Monospace) */}
      <div className="md:w-1/4 shrink-0">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-alert inline-block rounded-full group-hover:animate-pulse"></span>
          {type}
        </p>
        <p className="font-mono text-xs text-zinc">Ref: {Math.floor(Math.random() * 9000) + 1000}</p>
      </div>

      {/* Right Column: Content (Serif) */}
      <div className="md:w-3/4">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-ink relative inline-block">
          {title}
          {/* Hover highlight effect */}
          <span className="absolute bottom-1 left-0 w-0 h-[30%] bg-alert/20 transition-all duration-300 group-hover:w-full -z-10"></span>
        </h3>
        
        <p className="text-lg leading-relaxed text-ink/80 mb-6 max-w-2xl">
          {description}
        </p>

        {/* Details section in a technical box */}
        <div className="border border-ink/20 p-4 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-ink"></div>
          <p className="font-mono text-xs uppercase tracking-wider mb-3 text-ink font-bold">Key Findings</p>
          <ul className="space-y-2">
            {achievements.map((item, index) => (
              <li key={index} className="font-serif text-ink/90 flex gap-3">
                <span className="font-mono text-alert">↳</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}