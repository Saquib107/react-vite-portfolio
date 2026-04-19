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
    <div className="w-full h-full bg-bg-black flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
      <div className="md:w-1/2">
        <h2 className="text-8xl md:text-9xl font-heading text-primary-beige leading-none opacity-90 mb-8">
          TABLE OF <br /> CONTENTS
        </h2>
        <p className="text-primary-beige/60 max-width-md font-body text-sm uppercase tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-12 md:mt-0">
        {links.map((link, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: '#f5e6d3', color: '#0a0a0a' }}
            className="border border-primary-beige/30 rounded-full py-4 px-8 text-primary-beige text-xs uppercase tracking-widest font-body"
            onClick={() => {
              document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {link.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
