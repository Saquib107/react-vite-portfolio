import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C / C++"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Anaconda"],
    },
    {
      title: "Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "API Integration", "Responsive Design"],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section min-h-screen bg-bg-black flex flex-col justify-center px-4 sm:px-6 md:px-16 pt-24 pb-8 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-6xl mx-auto z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h2 className="text-primary-beige font-heading text-4xl md:text-5xl lg:text-6xl leading-none tracking-tighter mb-2 md:mb-3 select-none">
            SKILLS
          </h2>
          <div className="w-12 h-[2px] bg-accent-gold mb-3" />
          <p className="text-primary-beige/60 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-md">
            The tools I wield to turn ideas into polished, production-ready products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col">
              <h3 className="text-accent-gold font-body text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 pb-2 border-b border-primary-beige/20 select-none">
                {category.title}
              </h3>

              <div className="flex flex-col gap-1 md:gap-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="group cursor-none relative w-max"
                  >
                    <span className="text-primary-beige font-heading text-lg md:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-accent-gold drop-shadow-transparent group-hover:drop-shadow-[0_0_15px_rgba(212,163,115,0.4)] block leading-tight">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
