import { useState } from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Personal Portfolio Website',
        description: 'A responsive personal portfolio website built with HTML, CSS, and JavaScript showcasing my projects, skills, and a working contact form.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
        emoji: '🌐',
        color: '#a78bfa',
        gradient: 'linear-gradient(135deg, #7c3aed22, #06b6d422)',
        github: 'https://github.com/kajalsingh380',
        demo: '#',
        status: 'Completed',
    },
    {
        id: 2,
        title: 'Interactive Landing Page',
        description: 'A visually appealing landing page with smooth animations, CSS transitions, and interactive UI components built purely with HTML and CSS.',
        tags: ['HTML5', 'CSS3', 'Animations', 'UI Design'],
        emoji: '✨',
        color: '#67e8f9',
        gradient: 'linear-gradient(135deg, #06b6d422, #7c3aed22)',
        github: 'https://github.com/kajalsingh380',
        demo: '#',
        status: 'Completed',
    },
    {
        id: 3,
        title: 'JavaScript Form Validator',
        description: 'A multi-step form with real-time input validation, error messaging, and a clean UX, demonstrating core JavaScript DOM manipulation skills.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM'],
        emoji: '✅',
        color: '#86efac',
        gradient: 'linear-gradient(135deg, #22c55e22, #06b6d422)',
        github: 'https://github.com/kajalsingh380',
        demo: '#',
        status: 'Completed',
    },
    {
        id: 4,
        title: 'Weather App (Coming Soon)',
        description: 'A weather web application that fetches real-time data from an open API and displays current weather conditions with a beautiful UI.',
        tags: ['JavaScript', 'API', 'CSS3', 'Fetch'],
        emoji: '⛅',
        color: '#fbbf24',
        gradient: 'linear-gradient(135deg, #f59e0b22, #7c3aed22)',
        github: '#',
        demo: '#',
        status: 'In Progress',
    },
    {
        id: 5,
        title: 'Quiz Game App',
        description: 'An interactive quiz application with a timer, score tracking, and category selection built using vanilla JavaScript and CSS animations.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'Game'],
        emoji: '🧠',
        color: '#f9a8d4',
        gradient: 'linear-gradient(135deg, #ec489922, #7c3aed22)',
        github: 'https://github.com/kajalsingh380',
        demo: '#',
        status: 'Completed',
    },
    {
        id: 6,
        title: 'React Portfolio (This Site)',
        description: 'This very portfolio you are viewing — built with React, Vite, and vanilla CSS with animations, responsive layout, and a dark-mode design.',
        tags: ['React', 'Vite', 'CSS3', 'JavaScript'],
        emoji: '⚛️',
        color: '#818cf8',
        gradient: 'linear-gradient(135deg, #6366f122, #06b6d422)',
        github: 'https://github.com/kajalsingh380',
        demo: '#',
        status: 'Live',
    },
];

const filterTags = ['All', 'HTML5', 'CSS3', 'JavaScript', 'React'];

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(filter));

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <span className="section-label">// my work</span>
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <p className="section-desc">
                    A showcase of projects I've built while learning and growing as a developer.
                </p>

                {/* Filters */}
                <div className="project-filters">
                    {filterTags.map(tag => (
                        <button
                            key={tag}
                            className={`filter-btn ${filter === tag ? 'active' : ''}`}
                            onClick={() => setFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="projects-grid">
                    {filtered.map(project => (
                        <div key={project.id} className="project-card card">
                            <div className="project-top" style={{ background: project.gradient }}>
                                <span className="project-emoji">{project.emoji}</span>
                                <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                                    {project.status}
                                </span>
                            </div>

                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link"
                                        aria-label="View source code"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link project-link-demo"
                                        style={{ color: project.color, borderColor: `${project.color}44` }}
                                        aria-label="Live demo"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="github-cta">
                    <p>Want to see more of my work?</p>
                    <a href="https://github.com/kajalsingh380" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
