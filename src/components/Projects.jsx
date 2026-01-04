import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'AuthKit Platform',
            description: 'Modern authentication solution with advanced security features and seamless user experience',
            image: 'https://customer-assets.emergentagent.com/job_2bee8af7-4101-4242-822f-ba9de8bcb5bf/artifacts/j6mqs14w_reference.png',
            tech: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 2,
            title: '3D Portfolio Website',
            description: 'Interactive portfolio featuring 3D elements, smooth animations, and modern design patterns',
            image: 'https://customer-assets.emergentagent.com/job_2bee8af7-4101-4242-822f-ba9de8bcb5bf/artifacts/avbgxtc3_project-3.png',
            tech: ['React', 'GSAP', 'Spline']
        },
        {
            id: 3,
            title: 'Gaming UI Dashboard',
            description: 'Next-level gaming interface with real-time stats, character management, and immersive design',
            image: 'https://customer-assets.emergentagent.com/job_2bee8af7-4101-4242-822f-ba9de8bcb5bf/artifacts/gk90io3g_project-2.png',
            tech: ['React', 'Tailwind', 'WebGL']
        },
        {
            id: 4,
            title: 'MiladiCode Platform',
            description: 'Comprehensive web development platform with AI-powered code generation and collaboration tools',
            image: 'https://customer-assets.emergentagent.com/job_2bee8af7-4101-4242-822f-ba9de8bcb5bf/artifacts/rbz7cilq_project-1.png',
            tech: ['React', 'Python', 'AI/ML']
        },
        {
            id: 5,
            title: 'E-Commerce Platform',
            description: 'Full-featured online shopping platform with payment integration and real-time inventory',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            tech: ['React', 'Express', 'SQL']
        },
        {
            id: 6,
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization platform with interactive charts and comprehensive reporting',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            tech: ['React', 'D3.js', 'MongoDB']
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.section-title',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%'
                    }
                }
            );

            gsap.fromTo(
                '.project-card',
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: '.projects-grid',
                        start: 'top 80%'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Showcasing my latest work in web development, design, and innovation
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <button className="view-project-btn">
                                        View Project
                                        <ArrowUpRight size={20} weight="bold" />
                                    </button>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;