import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumePDF from '../assets/Saquib_Rayees_Resume (1).pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionsToObserve = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    sectionsToObserve.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Helper for scroll navigation
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 py-4 px-4 sm:px-6 md:py-6 md:px-20 flex items-center justify-between ${
          isScrolled ? "bg-bg-black/90 backdrop-blur-xl md:py-4" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2 z-[60]">
          <span className="text-accent-gold font-heading text-2xl md:text-3xl tracking-tighter cursor-pointer" onClick={() => scrollToSection('hero')}>
            S.
          </span>
          <span className="text-primary-beige font-body text-[10px] uppercase tracking-[0.4em] hidden md:block select-none">
            Saquib Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`font-body text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer outline-none select-none ${
                    activeSection === link.id
                      ? "text-accent-gold opacity-100"
                      : "text-primary-beige opacity-50 hover:opacity-100 hover:text-accent-gold"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={resumePDF}
            download="Saquib_Rayees_Resume.pdf"
            className="border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-black font-body text-[10px] uppercase tracking-widest px-6 py-2 rounded-full transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 z-[60] outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary-beige transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-beige transition-all duration-300 my-1 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-beige transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[55] bg-bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen"
          >
            <ul className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full py-4 font-heading text-4xl uppercase tracking-widest transition-colors block ${activeSection === link.id ? "text-accent-gold" : "text-primary-beige hover:text-accent-gold"}`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full text-center mt-4"
              >
                <a
                  href={resumePDF}
                  download="Saquib_Rayees_Resume.pdf"
                  className="inline-block border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-black font-body text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300"
                >
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
