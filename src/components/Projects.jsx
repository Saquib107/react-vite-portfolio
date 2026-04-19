import React from 'react';
import { motion } from 'framer-motion';
import decisionIqImg from '../assets/project-decision-iq.png';
import aiParkImg from '../assets/project-ai-park.png';
import glamBeautyImg from '../assets/project-glam-beauty.png';

const projects = [
  {
    title: 'Decision IQ',
    description: 'A smart decision-making web application that helps users navigate complex choices through structured logic, weighted scoring, and side-by-side comparisons. Built with a clean, interactive UI that transforms abstract decisions into data-driven clarity — designed to reduce cognitive overload and improve outcome confidence.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    accent: '#d4a373',
    image: decisionIqImg,
    githubUrl: 'https://github.com/Saquib107/Decision-IQ',
    demoUrl: 'https://decision-iq-three.vercel.app/'
  },
  {
    title: 'AI Park',
    description: 'A full-featured theme park web platform built for SunnySplash — an AI-enhanced water park experience. Includes ride exploration, real-time ticket booking, an interactive park map, emergency information, and a membership system. Engineered with seamless navigation, responsive layouts, and a focus on delivering high-energy user engagement across all devices.',
    tech: ['React', 'React Router', 'Tailwind CSS'],
    accent: '#f5e6d3',
    image: aiParkImg,
    githubUrl: 'https://github.com/Saquib107/Ai-park',
    demoUrl: 'https://ai-park-one.vercel.app/'
  },
  {
    title: 'Glam Beauty Studio',
    description: 'A premium digital presence for a luxury ladies\'s beauty salon. The site elegantly showcases the studio\'s full range of services — from bridal makeup and hair styling to facial treatments — with a refined aesthetic using Playfair Display typography and a rose gold palette. Built with a focus on brand identity, mobile responsiveness, and converting visitors into clients.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    accent: '#d4a373',
    image: glamBeautyImg,
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

        {/* PROJECT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-64 md:h-[60vh] relative overflow-hidden group shadow-2xl rounded-sm border border-primary-beige/5"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay that lightens on hover */}
          <div className="absolute inset-0 bg-bg-black/40 group-hover:bg-bg-black/10 transition-all duration-500 z-10" />
          {/* Aesthetic Corner Lines */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent-gold/30 opacity-60 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent-gold/30 opacity-60 z-20 pointer-events-none" />
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