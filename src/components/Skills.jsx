import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiJavascript, SiPython, SiCplusplus, SiReact, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel, SiAnaconda
} from "react-icons/si";
import { FaJava, FaCode, FaCubes, FaNetworkWired, FaMobileAlt } from "react-icons/fa";

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
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C / C++", icon: <SiCplusplus /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Anaconda", icon: <SiAnaconda /> }
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaCode /> },
        { name: "Object-Oriented Programming", icon: <FaCubes /> },
        { name: "API Integration", icon: <FaNetworkWired /> },
        { name: "Responsive Design", icon: <FaMobileAlt /> }
      ]
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section min-h-screen bg-bg-black flex flex-col justify-center px-4 sm:px-6 md:px-16 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-6xl mx-auto z-10 pl-2 sm:pl-0"
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
              <h3 className="text-accent-gold font-body text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 md:mb-3 pb-2 border-b border-primary-beige/20 select-none w-max">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skillItem, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary-beige/10 bg-primary-beige/[0.02] hover:bg-primary-beige/[0.05] hover:border-accent-gold/40 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-primary-beige/50 group-hover:text-accent-gold transition-colors duration-300 text-sm md:text-base">
                      {skillItem.icon}
                    </span>
                    <span className="text-primary-beige/80 group-hover:text-primary-beige font-body text-[10px] sm:text-xs tracking-wider transition-colors duration-300 select-none">
                      {skillItem.name}
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
