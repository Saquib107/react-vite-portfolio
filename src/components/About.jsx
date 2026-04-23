import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-me.jpg';
import resumePDF from '../assets/Saquib_Rayees_Resume (1).pdf';

const About = () => {
  const [isPhotoColored, setIsPhotoColored] = useState(false);

  return (
    <section id="about" className="relative w-full bg-bg-black flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-24 py-16 md:py-24 overflow-hidden gap-8 md:gap-0">

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <div 
          className={`relative group transition-all duration-700 cursor-pointer ${isPhotoColored ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`}
          onClick={() => setIsPhotoColored(!isPhotoColored)}
        >
          <div className="absolute -inset-2 border border-primary-beige/20 scale-95 group-hover:scale-100 transition-transform duration-500" />
          <img
            src={aboutImg}
            alt="About Saquib"
            className="w-40 h-56 sm:w-48 sm:h-64 md:w-80 md:h-[450px] object-cover rounded-sm shadow-2xl relative z-20"
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="font-body text-accent-gold text-[10px] uppercase tracking-[0.4em] mb-2 md:mb-4 block">Introduction</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading text-primary-beige mb-4 leading-none mt-2">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-accent-gold mb-6 mx-auto md:mx-0" />

          <div className="space-y-4 max-w-lg text-left md:text-left">
            <p className="text-secondary-text font-body text-xs md:text-sm leading-relaxed opacity-80">
              I'm Saquib Rayees — a full-stack developer who thrives at the intersection of
              thoughtful engineering and expressive design. I build fast, accessible,
              and visually refined web applications that go beyond just working — they feel right.
            </p>
            <p className="text-secondary-text font-body text-sm leading-relaxed opacity-80">
              My toolkit spans the full development spectrum: from crafting pixel-perfect
              React interfaces to architecting robust Node.js backends and MongoDB data layers.
              I care deeply about code quality, performance, and the details that separate
              good products from great ones.
            </p>
            <div className="pt-2">
              <a
                href={resumePDF}
                download="Saquib_Rayees_Resume.pdf"
                className="inline-flex w-full sm:w-auto justify-center border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-black font-body text-[10px] uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8 max-w-sm mx-auto sm:mx-0"
          >
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-xl md:text-2xl">3+</span>
              <span className="text-[10px] text-primary-beige/50 uppercase tracking-widest">Years Coding</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-primary-beige/10" />
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-xl md:text-2xl">10+</span>
              <span className="text-[9px] md:text-[10px] text-primary-beige/50 uppercase tracking-widest">Projects Built</span>
            </div>
            <div className="hidden sm:block w-[1px] h-6 bg-primary-beige/10" />
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-xl md:text-2xl">5+</span>
              <span className="text-[9px] md:text-[10px] text-primary-beige/50 uppercase tracking-widest">Technologies Mastered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer bar for the slide */}
      <div className="hidden md:block absolute bottom-6 md:bottom-10 left-6 md:left-24 z-30 opacity-50">
        <span className="text-primary-beige font-body text-[10px] uppercase tracking-widest">Saquib | Creative Developer</span>
      </div>
      <div className="hidden md:block absolute bottom-6 md:bottom-10 right-6 md:right-24 z-30 opacity-50 font-body text-[10px] uppercase tracking-widest">
        www.saquib.dev
      </div>
    </section>
  );
};

export default About;
