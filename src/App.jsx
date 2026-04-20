import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent-gold origin-left z-[100]"
            style={{ scaleX: scrollYProgress }}
          />
          <Navbar />
          <Hero />
          <section className="snap-section"><TableOfContents /></section>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
