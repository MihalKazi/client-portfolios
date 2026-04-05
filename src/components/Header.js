"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

// 1. Remove "roles" from here, we only need "data" now
export default function Header({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const name = data?.name || "MINHAJ AMAN.";
  const fileNumber = data?.fileNumber || "MA-01";
  const status = data?.status || "Active";
  const imageUrl = data?.profileImage ? urlFor(data.profileImage).url() : "/profile.jpg";

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', month: '2-digit', day: '2-digit' 
  });

  // 2. Pull the roles directly from the Header data instead of the Experience data!
  const activeRoles = data?.roles && data.roles.length > 0 ? data.roles : [
    { meta: "Standby", title: "System Awaiting Data", description: "Please add cycling roles in the Sanity Header document." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeRoles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeRoles.length]);

  return (
    <header className="pt-16 pb-12 border-b-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* Left Column: Dynamic Name & Meta */}
        <div className="lg:col-span-7">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc mb-6 flex gap-6 min-h-[20px]">
            <Typewriter text={`File: ${fileNumber}`} delay={200} />
            <Typewriter text={`Date: ${currentDate}`} delay={800} />
            <Typewriter text={`Status: ${status}`} delay={1400} className="text-alert font-bold" />
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.85] font-serif font-bold text-ink tracking-tighter uppercase"
          >
            {name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>
        </div>

        {/* Right Column: Dynamic Photo & Cycling Roles */}
        <div className="lg:col-span-5 pb-2 border-l-0 lg:border-l-2 lg:border-ink lg:pl-8 flex flex-col justify-between min-h-[400px] lg:min-h-[450px]">
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 lg:mb-0"
          >
            <div className="relative w-32 h-40 border-2 border-ink p-1 group">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-alert transition-transform group-hover:scale-150 z-20"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-alert transition-transform group-hover:scale-150 z-20"></div>
              
              <div className="relative w-full h-full overflow-hidden bg-ink/5">
                <Image 
                  src={imageUrl} 
                  alt={`Subject Reference: ${fileNumber}`} 
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
              </div>
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-zinc">
              [ SUBJ_REF: {fileNumber} ]
            </div>
          </motion.div>

          {/* Dynamic Cycling Roles */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="font-mono text-xs uppercase tracking-widest text-zinc mb-3">
                  [{activeRoles[currentIndex].meta}]
                </div>

                <div className="bg-ink text-paper font-mono text-sm uppercase tracking-widest px-4 py-2 mb-4 inline-block">
                  {activeRoles[currentIndex].title}
                </div>

                <p className="text-lg md:text-xl font-serif text-ink/80 leading-relaxed max-w-lg">
                  {activeRoles[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Cycling Indicators */}
            <div className="flex gap-2 mt-8">
              {activeRoles.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 transition-all duration-500 ${
                    idx === currentIndex ? 'w-8 bg-alert' : 'w-4 bg-ink/20'
                  }`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}