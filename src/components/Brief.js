"use client"
import { motion } from 'framer-motion';

export default function Brief({ data }) {
  if (!data || !data.content) return null;

  // This function finds the [bracketed] text and applies the redacted effect
  const renderRedactedText = (text) => {
    // Split the text by line breaks to support paragraphs
    return text.split('\n').map((paragraph, pIndex) => {
      if (!paragraph.trim()) return <br key={pIndex} />;

      // Split the paragraph by the [bracketed] syntax
      const parts = paragraph.split(/(\[.*?\])/g);

      return (
        <p key={pIndex} className="mb-6 text-xl md:text-2xl leading-relaxed font-serif text-ink/90">
          {parts.map((part, i) => {
            // If it's a bracketed word, redact it!
            if (part.startsWith('[') && part.endsWith(']')) {
              const innerText = part.slice(1, -1);
              return (
                <span 
                  key={i} 
                  title="CLASSIFIED - Hover to unseal"
                  className="bg-ink text-ink hover:bg-ink/5 hover:text-alert border border-transparent hover:border-alert transition-all duration-300 px-2 py-0.5 mx-[2px] cursor-crosshair font-mono uppercase text-sm tracking-widest inline-block"
                >
                  {innerText}
                </span>
              );
            }
            // Otherwise, return normal text
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
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl bg-white/30 border-2 border-ink p-8 md:p-12 relative"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-alert -mt-[2px] -ml-[2px]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-alert -mt-[2px] -mr-[2px]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-alert -mb-[2px] -ml-[2px]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-alert -mb-[2px] -mr-[2px]"></div>

        <div className="font-mono text-xs text-zinc mb-8 uppercase tracking-widest border-b-2 border-ink/20 pb-4">
          Status: <span className="text-alert">Classified</span> // Eyes Only
        </div>

        {renderRedactedText(data.content)}
        
      </motion.div>
    </section>
  );
}