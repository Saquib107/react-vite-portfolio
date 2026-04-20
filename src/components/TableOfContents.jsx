import React from 'react';
import { motion } from 'framer-motion';

const TableOfContents = () => {
  const links = [
    { name: 'About me', id: 'about' },
    { name: 'Skill', id: 'skills' },
    { name: 'Project', id: 'projects' },
    { name: 'Contact', id: 'contact' },
    { name: 'Thank you', id: 'footer' }
  ];

  return (
    <div className="w-full min-h-[100dvh] bg-bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 md:px-20 py-16 sm:py-20 relative overflow-hidden gap-8 sm:gap-12 lg:gap-0">
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading text-primary-beige leading-none opacity-90 mb-6 md:mb-8"
        >
          TABLE OF <br /> CONTENTS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-primary-beige/60 max-w-sm font-body text-[10px] md:text-xs uppercase tracking-widest leading-relaxed"
        >
          A curated walkthrough of who I am, what I build, and how to reach me.
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-sm md:max-w-md">
          {links.map((link, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: '#f5e6d3', color: '#0a0a0a' }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary-beige/30 rounded-full py-4 sm:py-5 px-6 text-primary-beige text-[10px] sm:text-xs uppercase tracking-widest font-body cursor-pointer shadow-[0_0_10px_rgba(245,230,211,0.02)] hover:shadow-[0_0_20px_rgba(245,230,211,0.15)] transition-shadow duration-300"
              onClick={() => {
                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
