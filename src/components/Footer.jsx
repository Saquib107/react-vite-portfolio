import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id='footer' className="snap-section w-full h-screen bg-bg-black flex flex-col justify-between px-10 md:px-24 py-20 overflow-hidden relative">
      {/* Top section with Logo and Tagline */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full h-full pb-10 border-b border-primary-beige/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-0"
        >
          <h2 className="text-8xl md:text-[12vw] font-heading text-primary-beige leading-none tracking-tighter">THANK YOU<span className="text-accent-gold">.</span></h2>
          <p className="font-body text-primary-beige/50 text-sm md:text-base tracking-widest uppercase mt-4 max-w-sm">
            Building the future, one line of code at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-16"
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-accent-gold text-xs uppercase tracking-[0.3em] font-bold mb-2">Menu</span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-body text-primary-beige/70 text-sm uppercase tracking-widest hover:text-primary-beige transition-colors outline-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-accent-gold text-xs uppercase tracking-[0.3em] font-bold mb-2">Socials</span>
            <a href="https://github.com/Saquib107" target="_blank" rel="noreferrer" className="font-body text-primary-beige/70 text-sm uppercase tracking-widest hover:text-primary-beige transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/saquib-rayees-6b9585339?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="font-body text-primary-beige/70 text-sm uppercase tracking-widest hover:text-primary-beige transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/saquibsr7?igsh=MTY0bHdrdXVjcGw4MA==" target="_blank" rel="noreferrer" className="font-body text-primary-beige/70 text-sm uppercase tracking-widest hover:text-primary-beige transition-colors">Instagram</a>
          </div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="w-full pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-primary-beige/40 text-xs uppercase tracking-widest text-center"
        >
          &copy; {new Date().getFullYear()} SAQUIB. ALL RIGHTS RESERVED.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-primary-beige/40 text-xs uppercase tracking-widest flex items-center gap-2"
        >
          MADE WITH <span className="text-accent-gold">♥</span> IN REACT
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;