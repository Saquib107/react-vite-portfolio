import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/saquib-hero.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full bg-[#0a0a0a] flex flex-col overflow-hidden"
    >
      {/* ── Layer 1: BIG "PORTFOLIO" text BEHIND image — ultra-subtle fill ── */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex w-full justify-center pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.07, y: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="font-heading text-[22vw] sm:text-[22vw] md:text-[25vw] text-[#f5e6d3] leading-none tracking-tight uppercase whitespace-nowrap"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* ── Layer 2: Portrait image + radial dissolve blending ── */}
      <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5, ease: 'easeOut' }}
          src={heroImg}
          alt="Saquib Rayees"
          className="h-[75vh] sm:h-[80vh] md:h-[90vh] w-auto max-w-[90%] object-contain object-bottom"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 85% at 50% 65%, black 35%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 85% at 50% 65%, black 35%, transparent 100%)',
            filter: 'brightness(0.90) contrast(1.05)',
          }}
        />
        {/* Left vignette */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
        {/* Right vignette */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
      </div>

      {/* ── Layer 3: Outlined "PORTFOLIO" text ON TOP of image ── */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex w-full justify-center pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          aria-hidden="true"
          className="font-heading text-[22vw] sm:text-[22vw] md:text-[25vw] leading-none tracking-tight uppercase whitespace-nowrap"
          style={{
            color: 'transparent',
            WebkitTextStroke: '0.8px rgba(245, 230, 211, 0.35)',
          }}
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* ── Layer 4: Name, role, description, buttons at bottom ── */}
      <div className="absolute inset-x-0 bottom-0 z-[35] flex flex-col items-center w-full px-4 gap-2 md:gap-3 pb-8 md:pb-16 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-center"
        >
          <p className="text-[#d4a373] font-body text-[8px] sm:text-[9px] uppercase tracking-[0.7em] mb-2">
            Full-Stack Developer
          </p>
          <h2 className="text-[#f5e6d3] font-heading text-4xl sm:text-5xl md:text-5xl tracking-wider leading-none select-none font-normal">
            SAQUIB RAYEES
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="w-8 h-[1px] bg-[#d4a373]/30 my-1"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="text-gray-300 font-body text-xs max-w-[280px] text-center leading-relaxed font-light"
        >
          Building modern web applications and scalable solutions with clean, efficient code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto px-6 max-w-sm"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-[#f5e6d3] text-[#0a0a0a] rounded-full cursor-pointer font-body text-[10px] uppercase tracking-[0.25em] font-bold shadow-[0_0_25px_rgba(245,230,211,0.15)] hover:bg-[#d4a373] hover:scale-105 transition-all duration-300"
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-transparent border border-[#f5e6d3]/15 text-[#f5e6d3]/60 rounded-full cursor-pointer font-body text-[10px] uppercase tracking-[0.25em] font-medium hover:border-[#d4a373]/50 hover:text-[#d4a373] hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
