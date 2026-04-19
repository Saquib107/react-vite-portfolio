import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-me.jpg';

const About = () => {
  return (
    <section id="about" className="snap-section relative w-full h-screen bg-bg-black flex flex-col md:flex-row items-center justify-center px-10 md:px-24 overflow-hidden">

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 flex justify-center"
      >
        <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute -inset-4 border border-primary-beige/20 scale-95 group-hover:scale-100 transition-transform duration-500" />
          <img
            src={aboutImg}
            alt="About Saquib"
            className="w-72 h-96 md:w-96 md:h-[500px] object-cover rounded-sm shadow-2xl relative z-20"
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full md:w-1/2 mt-12 md:mt-0 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="font-body text-accent-gold text-xs uppercase tracking-[0.5em] mb-4 block">Introduction</span>
          <h2 className="text-6xl md:text-8xl font-heading text-primary-beige mb-6 leading-none">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-accent-gold mb-8" />

          <div className="space-y-6 max-w-lg">
            <p className="text-secondary-text font-body text-sm leading-relaxed opacity-80">
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
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex items-center gap-10"
          >
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-2xl">3+</span>
              <span className="text-[10px] text-primary-beige/50 uppercase tracking-widest">Years Coding</span>
            </div>
            <div className="w-[1px] h-8 bg-primary-beige/10" />
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-2xl">10+</span>
              <span className="text-[10px] text-primary-beige/50 uppercase tracking-widest">Projects Built</span>
            </div>
            <div className="w-[1px] h-8 bg-primary-beige/10" />
            <div className="flex flex-col">
              <span className="text-accent-gold font-heading text-2xl">∞</span>
              <span className="text-[10px] text-primary-beige/50 uppercase tracking-widest">Lines Written</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer bar for the slide */}
      <div className="absolute bottom-10 left-10 md:left-24 z-30 opacity-50">
        <span className="text-primary-beige font-body text-[10px] uppercase tracking-widest">Saquib | Creative Developer</span>
      </div>
      <div className="absolute bottom-10 right-10 md:right-24 z-30 opacity-50 font-body text-[10px] uppercase tracking-widest">
        www.saquib.dev
      </div>
    </section>
  );
};

export default About;
