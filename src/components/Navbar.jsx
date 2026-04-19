import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 py-6 px-10 md:px-24 flex items-center justify-between ${isScrolled ? "bg-bg-black/80 backdrop-blur-xl py-4" : "bg-transparent"
        }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-accent-gold font-heading text-2xl tracking-tighter">S.</span>
        <span className="text-primary-beige font-body text-[10px] uppercase tracking-[0.4em] hidden md:block">Saquib Portfolio</span>
      </div>

      <div className="flex items-center gap-12">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-primary-beige/50 font-body text-[10px] uppercase tracking-widest hover:text-accent-gold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
