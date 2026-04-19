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
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "Vercel", "APIs", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section min-h-screen bg-bg-black flex flex-col justify-center px-10 md:px-24 py-20 relative overflow-hidden"
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
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-primary-beige font-heading text-6xl md:text-8xl leading-none tracking-tighter mb-4 select-none">
            SKILLS
          </h2>
          <div className="w-24 h-[2px] bg-accent-gold mb-6" />
          <p className="text-primary-beige/60 font-body text-xs md:text-sm tracking-[0.2em] uppercase max-w-md">
            Technologies I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col">
              <h3 className="text-accent-gold font-body text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-8 pb-4 border-b border-primary-beige/20 select-none">
                {category.title}
              </h3>

              <div className="flex flex-col gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="group cursor-none relative w-max"
                  >
                    <span className="text-primary-beige font-heading text-4xl md:text-5xl transition-colors duration-300 group-hover:text-accent-gold drop-shadow-transparent group-hover:drop-shadow-[0_0_15px_rgba(212,163,115,0.4)] block">
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
