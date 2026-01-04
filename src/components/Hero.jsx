import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);
    const robotRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.4 });

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0)", duration: 1 }
        )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.9 },
                "-=0.6"
            )
            .fromTo(
                btnRef.current,
                { opacity: 0, scale: 0.85 },
                { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
                "-=0.4"
            );

        // Neon blink
        gsap.fromTo(
            ".neon",
            { textShadow: "0 0 6px #14f1d9" },
            {
                textShadow:
                    "0 0 18px #14f1d9, 0 0 45px rgba(20,241,217,0.9)",
                repeat: -1,
                yoyo: true,
                duration: 1.6,
                ease: "sine.inOut",
            }
        );

        // Robot float
        gsap.to(robotRef.current, {
            y: -25,
            repeat: -1,
            yoyo: true,
            duration: 6,
            ease: "sine.inOut",
        });
    }, []);

    const goToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="hero">
            {/* ROBOT BACKGROUND */}
            <div className="robot-center" ref={robotRef}>
                <iframe
                    src="https://my.spline.design/genkubgreetingrobot-bVF06p9adQUA5r0cZ0jN8muT/"
                    title="Robot"
                    frameBorder="0"
                />
                <div className="robot-glow"></div>
            </div>

            {/* CENTER CONTENT */}
            <div className="hero-center">
                <h1 ref={titleRef} className="hero-title">
                    Hi, I’m Saquib
                </h1>

                <h2 className="hero-role neon">Web Developer</h2>

                <p ref={subtitleRef} className="hero-text">
                    Crafting immersive digital experiences with cutting-edge technologies.
                    Specializing in full-stack development and modern web animations.
                </p>

                <button ref={btnRef} className="hero-btn neon-btn" onClick={goToContact}>
                    HIRE ME →
                </button>
            </div>
        </section>
    );
};

export default Hero;
