"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "contact@minhajaman.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="bg-ink text-paper p-8 md:p-12 relative overflow-hidden">
        {/* Decorative corner lines */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-alert"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-alert"></div>

        {/* SECONDARY DATA: Typed out system message */}
        <div className="font-mono text-xs uppercase tracking-widest text-alert mb-6 min-h-[16px]">
          <Typewriter text="// Secure Comm Channel Open" delay={200} speed={30} />
        </div>
        
        {/* CRITICAL DATA: Instant slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Initiate Transmission.
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            <a 
              href={`mailto:${email}`}
              onClick={handleCopy}
              className="font-mono text-sm uppercase tracking-widest border border-paper/30 px-6 py-4 hover:bg-paper hover:text-ink transition-colors relative overflow-hidden group"
            >
              {copied ? "[ Email Copied to Clipboard ]" : `[ Email: ${email} ]`}
            </a>
            
            <a 
              href="https://twitter.com/minhajaman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest border border-paper/30 px-6 py-4 hover:bg-alert hover:border-alert transition-colors"
            >
              [ X / Twitter ]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}