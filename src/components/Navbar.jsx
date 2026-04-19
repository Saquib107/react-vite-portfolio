import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-4 sm:px-6 md:py-6 md:px-20 flex items-center justify-between ${
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
                  className="text-primary-beige/50 font-body text-[10px] uppercase tracking-widest hover:text-accent-gold transition-colors cursor-pointer outline-none select-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60] outline-none"
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
            className="fixed inset-0 z-40 bg-bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen"
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
                    className="w-full py-4 text-primary-beige font-heading text-4xl uppercase tracking-widest hover:text-accent-gold transition-colors block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
