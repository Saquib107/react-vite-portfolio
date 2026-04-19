import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/saquib-hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="snap-section hero-section">
      {/* 1. Corner Metadata Labels */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="meta-label meta-top-left"
      >
        Creative Presentation
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="meta-label meta-top-right"
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="meta-label meta-bottom-left"
      >
        Saquib Rayees
      </motion.div>

      {/* 2. Background Text Layer (Filled) */}
      <div className="hero-text-container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="hero-title-large"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* 3. Image Layer (Subject) */}
      <div className="hero-image-wrapper">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          src={heroImg}
          alt="Saquib"
          className="hero-main-image"
        />
      </div>

      {/* 4. Foreground Text Layer (Outlined) */}
      <div className="hero-text-container" style={{ zIndex: 30, position: 'absolute', inset: 0 }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="hero-title-large text-outline-layer"
          aria-hidden="true"
        >
          PORTFOLIO
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
