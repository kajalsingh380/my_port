import kajalImg from '../assets/kajal.jpeg';
import './About.css';

const highlights = [
    { icon: '🎓', label: 'Education', value: 'B.Tech CDS — AKTU' },
    { icon: '📅', label: 'Year', value: '2024 – 2028' },
    { icon: '🌍', label: 'Location', value: 'India' },
    { icon: '💼', label: 'Status', value: 'Open to Work' },
];

const softSkills = ['Communication', 'Adaptability', 'Teamwork', 'Quick Learner', 'Problem Solving'];
const languages = [
    { lang: 'English', level: 'Professional' },
    { lang: 'Hindi', level: 'Native' },
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Left: Image & Info Cards */}
                    <div className="about-left">
                        <div className="about-img-container">
                            <img src={kajalImg} alt="Kajal Singh" className="about-img" />
                            <div className="about-img-badge">
                                <span>👋</span>
                                <span>B.Tech Student</span>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="about-highlights">
                            {highlights.map((h, i) => (
                                <div key={i} className="highlight-item">
                                    <span className="highlight-icon">{h.icon}</span>
                                    <div>
                                        <p className="highlight-label">{h.label}</p>
                                        <p className="highlight-value">{h.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="about-right">
                        <span className="section-label">// about me</span>
                        <h2 className="section-title">
                            Passionate about<br /><span>building the web</span>
                        </h2>

                        <p className="about-desc">
                            Hi! I'm <strong style={{ color: 'var(--text-primary)' }}>Kajal Singh</strong>, a dedicated and curious B.Tech Computer Data Science
                            student at AKTU University. I discovered my love for web development and haven't stopped
                            building since.
                        </p>
                        <p className="about-desc" style={{ marginTop: '12px' }}>
                            I enjoy crafting clean, responsive, and user-friendly interfaces. My journey started
                            with HTML & CSS, and I'm continuously expanding my knowledge into JavaScript, React,
                            and beyond. I'm an active learner who loves participating in hackathons and coding events.
                        </p>

                        {/* Soft Skills */}
                        <div className="soft-skills-section">
                            <h4 className="subsection-title">Soft Skills</h4>
                            <div className="soft-skills-tags">
                                {softSkills.map((skill, i) => (
                                    <span key={i} className="soft-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="languages-section">
                            <h4 className="subsection-title">Languages</h4>
                            <div className="lang-list">
                                {languages.map((l, i) => (
                                    <div key={i} className="lang-item">
                                        <span className="lang-name">{l.lang}</span>
                                        <span className="badge badge-accent">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="about-actions">
                            <a href="/KAJAL_RESUME.pdf" download className="btn btn-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                            <a href="mailto:singhkajal10128@gmail.com" className="btn btn-outline">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
