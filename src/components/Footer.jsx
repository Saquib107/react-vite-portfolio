import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';
import { Heart, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from 'phosphor-react';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        // Create floating particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            footerRef.current.querySelector('.particles-container').appendChild(particle);
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%'
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <footer className="footer" ref={footerRef}>
            <div className="particles-container"></div>

            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">SAQUIB</h3>
                        <p className="footer-tagline">
                            Building the future, one line of code at a time
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-links-title">Quick Links</h4>
                        <nav className="footer-nav">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="footer-link"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-social-title">Follow Me</h4>
                        <div className="footer-social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <GithubLogo size={24} weight="light" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <LinkedinLogo size={24} weight="light" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <InstagramLogo size={24} weight="light" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 Saquib. Made with <Heart size={16} weight="fill" className="heart-icon" /> using React & GSAP
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;