import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <nav ref={navRef} className="glass-nav">
            <div className="nav-logo">MY PORTFOLIO</div>

            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact" className="nav-btn">Contact</a></li>
            </ul>
        </nav>
    );
}
