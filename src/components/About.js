"use client"
import { motion } from 'framer-motion';

export default function About() {
  const trainings = [
    "Atlantic Council",
    "Global Investigative Journalists Network",
    "Access Now",
    "Internews",
    "EngageMedia",
    "FoJo Media Institute, Sweden"
  ];

  // This creates the sequential "pop-in" effect for your list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each item appearing
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      
      <div className="about-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I am a researcher focused on digital rights and information integrity, working at the intersection of technology, human rights, and media ecosystems. My work centers on understanding and addressing challenges related to online disinformation, digital authoritarianism, and the protection of fundamental freedoms in digital spaces.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Through collaborative research and investigative work, I examine how information flows shape democratic discourse and impact vulnerable communities, with a particular focus on transparency, accountability, and the responsible use of technology.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <strong>Training & Professional Development:</strong>
        </motion.p>
        
        {/* Staggered Animated List */}
        <motion.ul 
          className="training-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trainings.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}