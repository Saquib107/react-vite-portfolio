import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from 'phosphor-react';
import { toast } from '../hooks/use-toast';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                '.contact-form',
                {
                    opacity: 0,
                    x: -50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.contact-content',
                        start: 'top 70%'
                    }
                }
            );

            gsap.fromTo(
                '.contact-info',
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.contact-content',
                        start: 'top 70%'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind or just want to say hi? Drop me a message!
                </p>

                <div className="contact-content">
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <PaperPlaneTilt size={20} weight="bold" />
                        </button>
                    </form>

                    <div className="contact-info">
                        <div className="info-card">
                            <h3 className="info-title">Email</h3>
                            <p className="info-text">rayeessaquib0022@gmail.com</p>
                        </div>

                        <div className="info-card">
                            <h3 className="info-title">Location</h3>
                            <p className="info-text">Jamshedpur</p>
                        </div>

                        <div className="info-card">
                            <h3 className="info-title">Connect</h3>
                            <div className="social-links">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <GithubLogo size={28} weight="light" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <LinkedinLogo size={28} weight="light" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <InstagramLogo size={28} weight="light" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;