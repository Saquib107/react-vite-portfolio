import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="snap-container">
          <Navbar />
          <Hero />
          <section className="snap-section"><TableOfContents /></section>
          <About />
          <Projects />
          <Contact />
          <Footer />
          <Toaster />
        </div>
      )}
    </div>
  );
}

export default App;
