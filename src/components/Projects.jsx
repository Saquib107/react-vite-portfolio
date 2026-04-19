import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Decision IQ',
    description: 'Built a decision-making web application that enables users to analyze and compare choices using structured logic and scoring. Implemented dynamic input handling and interactive UI components to improve usability and clarity in complex decision scenarios.',
    tech: ['Next.js', 'Tailwind', 'MongoDB'],
    accent: '#d4a373',
    githubUrl: 'https://github.com/Saquib107/Decision-IQ',
    demoUrl: 'https://decision-iq-three.vercel.app/'
  },
  {
    title: 'AI Park',
    description: 'Developed a real-An AI-powered web platform that integrates intelligent tools through external APIs to deliver interactive user experiences. Developed dynamic UI components and handled real-time API responses to ensure smooth interaction. Emphasis was placed on usability and efficient data handling.',
    tech: ['React', 'D3.js', 'Node.js'],
    accent: '#f5e6d3',
    githubUrl: 'https://github.com/Saquib107/Ai-park',
    demoUrl: 'https://ai-park-one.vercel.app/'
  },
  {
    title: 'Glam Beauty Studio',
    description: 'Created a unified A modern business website designed to showcase beauty services and enhance customer engagement. Built a responsive and visually appealing interface with a focus on user experience, layout clarity, and mobile optimization.',
    tech: ['React', 'Node.js', 'Redis'],
    accent: '#d4a373',
    githubUrl: 'https://github.com/Saquib107/GLAMBEAUTYSTUDIO',
    demoUrl: 'https://glambeautystudio.vercel.app/'
  }
];

const ProjectSlide = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="snap-section w-full h-screen bg-bg-black flex flex-col justify-center px-4 sm:px-6 md:px-20 border-b border-primary-beige/5 overflow-hidden relative">
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 ${!isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-gold font-body text-[10px] uppercase tracking-[0.5em] mb-4 block select-none"
          >
            Project 0{index + 1}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-[8vw] font-heading text-primary-beige leading-none mb-8 lg:-mt-4 select-none"
          >
            {project.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h4 className="text-accent-gold font-body text-[10px] uppercase tracking-widest mb-2 select-none">Overview</h4>
            <p className="text-primary-beige/80 font-body text-xs md:text-sm max-w-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8 select-none"
          >
            {project.tech.map((t, i) => (
              <span key={i} className="text-[9px] border border-primary-beige/20 rounded-full px-4 py-1.5 uppercase font-body tracking-wider text-primary-beige/60 bg-primary-beige/5">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-10 w-full"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex justify-center items-center px-6 py-3 rounded-full border border-primary-beige/30 hover:border-accent-gold/80 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-accent-gold/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-primary-beige font-body text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-accent-gold transition-colors duration-300 select-none">GitHub</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex justify-center items-center px-6 py-3 rounded-full bg-primary-beige text-bg-black hover:bg-accent-gold transition-all duration-300 shadow-[0_0_15px_rgba(245,230,211,0.1)] hover:shadow-[0_0_20px_rgba(212,163,115,0.4)]"
            >
              <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold select-none">Live Demo</span>
            </a>
          </motion.div>
        </div>

        {/* IMAGE/MOCKUP BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-64 md:h-[60vh] bg-bg-black/50 border border-primary-beige/5 relative overflow-hidden group shadow-2xl rounded-sm"
        >
          {/* Faux Image Background until populated */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-beige/5 to-transparent z-0" />
          <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="font-heading text-4xl text-primary-beige opacity-10 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 select-none tracking-widest">
              [ PROJECT MEDIA ]
            </span>
          </div>

          {/* Aesthetic Corner Lines */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-accent-gold/20 opacity-30 z-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-accent-gold/20 opacity-30 z-30 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-bg-black">
      {projects.map((p, i) => (
        <ProjectSlide key={i} project={p} index={i} />
      ))}
    </div>
  );
};

export default Projects;