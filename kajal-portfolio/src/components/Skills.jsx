import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
    {
        id: 'frontend',
        label: '🎨 Frontend',
        skills: [
            { name: 'HTML5', level: 90, color: '#f97316' },
            { name: 'CSS3', level: 85, color: '#38bdf8' },
            { name: 'JavaScript', level: 80, color: '#facc15' },
            { name: 'React.js', level: 55, color: '#67e8f9' },
            { name: 'Responsive Design', level: 80, color: '#a78bfa' },
        ]
    },
    {
        id: 'programming',
        label: '💻 Programming',
        skills: [
            { name: 'Python', level: 50, color: '#fbbf24' },
            { name: 'Java', level: 45, color: '#f87171' },
            { name: 'C Language', level: 50, color: '#a3e635' },
        ]
    },
    {
        id: 'tools',
        label: '🛠️ Tools & Tech',
        skills: [
            { name: 'Git', level: 80, color: '#fb7185' },
            { name: 'GitHub', level: 80, color: '#c084fc' },
            { name: 'VS Code', level: 90, color: '#60a5fa' },
            { name: 'Microsoft Office', level: 75, color: '#34d399' },
        ]
    }
];

const techStack = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '⚙️' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
];

function SkillBar({ name, level, color, animate }) {
    return (
        <div className="skill-bar-item">
            <div className="skill-bar-header">
                <span className="skill-bar-name">{name}</span>
                <span className="skill-bar-val" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: animate ? `${level}%` : '0%',
                        background: `linear-gradient(90deg, ${color}88, ${color})`,
                        boxShadow: animate ? `0 0 12px ${color}66` : 'none',
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setAnimate(false);
        const t = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(t);
    }, [activeCategory]);

    const current = skillCategories.find(c => c.id === activeCategory);

    return (
        <section className="skills section" id="skills" ref={ref}>
            <div className="container">
                <div className="skills-header">
                    <div>
                        <span className="section-label">// tech stack</span>
                        <h2 className="section-title">My <span>Skills</span></h2>
                        <p className="section-desc">Technologies I work with and am continuously learning</p>
                    </div>
                </div>

                {/* Tech Stack Icons */}
                <div className="tech-grid">
                    {techStack.map((tech, i) => (
                        <div key={i} className="tech-item">
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Category Tabs + Bars */}
                <div className="skills-content">
                    <div className="skill-tabs">
                        {skillCategories.map(cat => (
                            <button
                                key={cat.id}
                                className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="skill-bars-container">
                        {current.skills.map((skill, i) => (
                            <SkillBar key={i} {...skill} animate={animate} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
