import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => onComplete(), 500);
            }
        });

        // Animate progress bar
        tl.to('.progress-fill', {
            width: '100%',
            duration: 2.5,
            ease: 'power2.inOut'
        })
            .to('.progress-text', {
                textContent: '100%',
                duration: 2.5,
                snap: { textContent: 1 },
                ease: 'power2.inOut'
            }, 0)
            .to('.preloader-content', {
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                ease: 'power2.in'
            }, '+=0.3')
            .to('.preloader', {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in'
            }, '-=0.3');
    }, [onComplete]);

    return (
        <div className="preloader">
            <div className="preloader-content">
                <h1 className="preloader-title">PORTFOLIO</h1>
                <div className="progress-bar-container">
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                    <span className="progress-text">0%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;