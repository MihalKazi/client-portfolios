"use client"
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Triggers slightly before it hits the screen
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}