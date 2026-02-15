"use client"
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function Projects() {
  const projects = [
    {
      id: "FILE-892",
      status: "Declassified",
      title: "Disinformation Tracking Initiative",
      description: "Multi-platform analysis of coordinated disinformation campaigns targeting democratic processes. Analyzed 500+ coordinated campaigns across social media platforms.",
      link: "#"
    },
    {
      id: "FILE-404",
      status: "Active Monitoring",
      title: "Digital Authoritarianism Report",
      description: "Investigating the deployment of surveillance technologies and internet shutdowns by state actors to suppress civil society and marginalized groups.",
      link: "#"
    },
    {
      id: "FILE-771",
      status: "Archived",
      title: "Platform Accountability Framework",
      description: "Collaborative research project developing transparency metrics for major tech platforms regarding their handling of political manipulation.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 border-b-2 border-ink">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="text-4xl font-serif font-bold mb-12 uppercase tracking-tight text-ink flex items-center"
      >
        <span className="text-alert mr-4 font-mono text-2xl">04.</span> 
        Investigations & Case Files
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className="group block border-2 border-ink p-6 bg-white/30 hover:bg-paper transition-all relative overflow-hidden"
          >
            {/* Background texture on hover */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4xKSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6 font-mono text-xs uppercase tracking-widest min-h-[16px]">
                <Typewriter text={`Ref: ${project.id}`} delay={index * 200} speed={40} className="text-zinc" />
                <span className={`px-2 py-1 border ${project.status === 'Active Monitoring' ? 'border-alert text-alert animate-pulse' : 'border-ink text-ink'}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold mb-4 text-ink relative inline-block">
                {project.title}
                {/* Redaction hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[30%] bg-alert/20 transition-all duration-300 group-hover:w-full -z-10"></span>
              </h3>

              <p className="font-serif text-ink/80 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="font-mono text-xs uppercase tracking-widest text-alert group-hover:text-ink transition-colors flex items-center gap-2">
                <span>[ Access File ]</span>
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}