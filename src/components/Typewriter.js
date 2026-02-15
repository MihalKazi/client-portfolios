"use client"
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Typewriter({ 
  text, 
  speed = 40, 
  delay = 0, 
  className = "", 
  as: Component = "span" 
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setStartTyping(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay]);

  useEffect(() => {
    if (!startTyping) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [startTyping, text, speed]);

  return (
    <Component ref={ref} className={className}>
      {displayedText}
      {/* Short-lived blinking cursor */}
      {startTyping && displayedText.length < text.length && (
         <span className="inline-block w-[0.4em] h-[0.9em] bg-alert animate-pulse ml-1 align-baseline"></span>
      )}
    </Component>
  );
}