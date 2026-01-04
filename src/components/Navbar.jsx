import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar() {
    const navRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

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

            {/* Hamburger (mobile only via CSS) */}
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a onClick={() => setMenuOpen(false)} href="#hero">Home</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#about">About</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#projects">Projects</a></li>
                <li>
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="#contact"
                        className="nav-btn"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
