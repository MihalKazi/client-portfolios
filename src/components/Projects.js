"use client"
import { motion } from 'framer-motion';

export default function Projects({ investigations }) {
  
  if (!investigations || investigations.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">04.</span> 
        Investigations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {investigations.map((item, index) => {
          
          // DYNAMIC WRAPPER: If there's a link, make it a clickable 'a' tag. If not, use a 'div'.
          const CardWrapper = item.link ? motion.a : motion.div;

          return (
            <CardWrapper 
              key={index}
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Added cursor-pointer so it feels clickable
              className={`group block border-2 border-ink p-6 hover:bg-ink hover:text-paper transition-all duration-300 relative overflow-hidden ${item.link ? 'cursor-pointer' : ''}`}
            >
              {/* Top Meta Bar */}
              <div className="flex justify-between items-center mb-6 font-mono text-xs uppercase tracking-widest border-b-2 border-ink/20 group-hover:border-paper/20 pb-2 transition-colors">
                <span className="text-zinc group-hover:text-paper/60">[{item.fileId}]</span>
                <span className="text-alert group-hover:text-alert font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-alert animate-pulse"></span>
                  {item.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="font-serif text-base mb-8 opacity-80">{item.description}</p>
              
              {/* View File Text indicator */}
              {item.link && (
                <div className="mt-auto inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink/50 group-hover:text-alert transition-colors">
                  View File <span className="text-lg">→</span>
                </div>
              )}
              
              {/* Decorative Corner Tab */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-ink group-hover:bg-paper transition-colors duration-300 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border-t-2 border-r-2 border-paper group-hover:border-ink transition-colors"></div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}