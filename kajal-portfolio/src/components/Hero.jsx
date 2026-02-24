import { useState, useEffect } from 'react';
import kajalImg from '../assets/kajal.jpeg';
import './Hero.css';

const roles = ['Web Developer', 'B.Tech CDS Student', 'Frontend Enthusiast', 'UI/UX Learner'];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = roles[roleIndex];
        let i = typing ? 0 : current.length;
        const interval = setInterval(() => {
            if (typing) {
                if (i <= current.length) {
                    setDisplayed(current.slice(0, i));
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setTyping(false), 1800);
                }
            } else {
                if (i >= 0) {
                    setDisplayed(current.slice(0, i));
                    i--;
                } else {
                    clearInterval(interval);
                    setRoleIndex(prev => (prev + 1) % roles.length);
                    setTyping(true);
                }
            }
        }, typing ? 80 : 45);
        return () => clearInterval(interval);
    }, [roleIndex, typing]);

    return (
        <section className="hero section" id="home">
            {/* Background Orbs */}
            <div className="hero-orb orb-1" />
            <div className="hero-orb orb-2" />
            <div className="hero-orb orb-3" />

            <div className="container hero-container">
                {/* Text Side */}
                <div className="hero-content">
                    <div className="hero-availability">
                        <div className="glow-dot" />
                        <span>Open to opportunities</span>
                    </div>

                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">
                        Kajal <span className="gradient-text">Singh</span>
                    </h1>

                    <div className="hero-role">
                        <span className="role-prefix">I'm a </span>
                        <span className="role-text">{displayed}<span className="cursor">|</span></span>
                    </div>

                    <p className="hero-bio">
                        A passionate B.Tech Computer Data Science student at AKTU University, crafting beautiful
                        and responsive web experiences. Currently in my 1st year, eagerly building skills in
                        modern web development.
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-num">5+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <span className="stat-num">7+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <span className="stat-num">1st</span>
                            <span className="stat-label">Year B.Tech</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Let's Talk
                        </a>
                        <a href="#projects" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            View Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://linkedin.com/in/kajal-singh-59a20b362/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="https://github.com/kajalsingh380" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </a>
                        <a href="mailto:singhkajal10128@gmail.com" className="social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </a>
                    </div>
                </div>

                {/* Image Side */}
                <div className="hero-image-wrapper">
                    <div className="hero-image-ring ring-1" />
                    <div className="hero-image-ring ring-2" />
                    <div className="hero-image-container animate-float">
                        <img src={kajalImg} alt="Kajal Singh - Web Developer" className="hero-img" />
                    </div>
                    {/* Floating badges */}
                    <div className="float-badge badge-html">HTML5</div>
                    <div className="float-badge badge-css">CSS3</div>
                    <div className="float-badge badge-js">JavaScript</div>
                    <div className="float-badge badge-react">React ⚛️</div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll down</span>
            </div>
        </section>
    );
}
