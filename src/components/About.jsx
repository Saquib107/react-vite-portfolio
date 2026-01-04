import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Palette, Cpu, Globe, Terminal } from 'phosphor-react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const skills = [
        { name: 'HTML', icon: <Code size={32} weight="light" /> },
        { name: 'CSS', icon: <Palette size={32} weight="light" /> },
        { name: 'JavaScript', icon: <Terminal size={32} weight="light" /> },
        { name: 'React', icon: <Code size={32} weight="light" /> },
        { name: 'Node.js', icon: <Cpu size={32} weight="light" /> },
        { name: 'MongoDB', icon: <Database size={32} weight="light" /> },
        { name: 'Express', icon: <Globe size={32} weight="light" /> },
        { name: 'SQL', icon: <Database size={32} weight="light" /> },
        { name: 'Bootstrap', icon: <Palette size={32} weight="light" /> },
        { name: 'Tailwind', icon: <Palette size={32} weight="light" /> },
        { name: 'GSAP', icon: <Code size={32} weight="light" /> },
        { name: 'C', icon: <Terminal size={32} weight="light" /> },
        { name: 'Java', icon: <Cpu size={32} weight="light" /> },
        { name: 'Python', icon: <Terminal size={32} weight="light" /> }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0,
                    x: -100,
                    filter: 'blur(10px)'
                },
                {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        end: 'bottom bottom',
                        toggleActions: 'play none none none'
                    }
                }
            );

            gsap.fromTo(
                contentRef.current.children,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        end: 'bottom bottom',
                        toggleActions: 'play none none none'
                    }
                }
            );

            gsap.fromTo(
                '.skill-card',
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '.skills-grid',
                        start: 'top 80%',
                        end: 'bottom bottom',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">
                <div className="about-image-wrapper" ref={imageRef}>
                    <div className="image-glow"></div>
                    <img
                        src="https://customer-assets.emergentagent.com/job_2bee8af7-4101-4242-822f-ba9de8bcb5bf/artifacts/dfd17rov_ChatGPT%20Image%20Mar%2029%2C%202025%2C%2008_54_47%20PM.png"
                        alt="Saquib"
                        className="profile-image"
                    />
                </div>

                <div className="about-content" ref={contentRef}>
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I'm a passionate full-stack developer with expertise in building modern,
                        responsive web applications. With a strong foundation in both frontend
                        and backend technologies, I create seamless digital experiences that
                        combine stunning visuals with robust functionality.
                    </p>
                    <p className="about-text">
                        My journey in web development has equipped me with a diverse skill set,
                        from crafting pixel-perfect user interfaces to architecting scalable
                        backend systems. I'm constantly exploring new technologies and pushing
                        the boundaries of what's possible on the web.
                    </p>

                    <div className="skills-section">
                        <h3 className="skills-title">Tech Stack</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;