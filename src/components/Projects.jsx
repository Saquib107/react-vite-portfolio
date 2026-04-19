import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ECO-TRADER',
    problem: 'Fragmentation in sustainable goods markets.',
    solution: 'A unified platform for verified carbon-neutral trading.',
    tech: ['Next.js', 'Tailwind', 'MongoDB'],
    accent: '#d4a373'
  },
  {
    title: 'PULSE AI',
    problem: 'Delayed health micro-monitoring.',
    solution: 'Real-time biometric analysis with predictive modeling.',
    tech: ['React', 'D3.js', 'Node.js'],
    accent: '#f5e6d3'
  },
  {
     title: 'AUTH KIT',
     problem: 'Complex authentication workflows.',
     solution: 'A unified SDK for high-security user management.',
     tech: ['React', 'Node.js', 'Redis'],
     accent: '#d4a373'
  }
];

const ProjectSlide = ({ project, index }) => (
  <section className="snap-section w-full h-screen bg-bg-black flex flex-col justify-center px-10 md:px-24 border-b border-primary-beige/5 overflow-hidden relative">
    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
      <div className="w-full md:w-1/2">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-accent-gold font-body text-[10px] uppercase tracking-[0.5em] mb-4 block"
        >
          Project 0{index + 1}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-[10vw] font-heading text-primary-beige leading-none mb-8"
        >
          {project.title}
        </motion.h2>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-secondary-text/50 font-body text-[10px] uppercase tracking-widest mb-2">The Challenge</h4>
            <p className="text-secondary-text font-body text-sm max-w-sm opacity-70">
              {project.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-accent-gold font-body text-[10px] uppercase tracking-widest mb-2">Our Solution</h4>
            <p className="text-primary-beige font-body text-sm max-w-sm">
              {project.solution}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-12"
        >
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] border border-primary-beige/30 rounded-full px-4 py-1.5 uppercase font-body tracking-wider text-primary-beige/60">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 h-64 md:h-[500px] bg-primary-beige/5 border border-primary-beige/10 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-4xl text-primary-beige opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
            VIEW CASE STUDY
          </span>
        </div>
        {/* Mock project overlay lines */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent-gold/30 opacity-30" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent-gold/30 opacity-30" />
      </motion.div>
    </div>
  </section>
);

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      {projects.map((p, i) => (
        <ProjectSlide key={i} project={p} index={i} />
      ))}
    </div>
  );
};

export default Projects;