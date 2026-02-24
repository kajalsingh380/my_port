import './Resume.css';

const education = [
    {
        degree: 'B.Tech in Computer Data Science (CDS)',
        institution: 'AKTU University',
        period: '2024 – 2028',
        status: 'Currently Pursuing — 1st Year',
        icon: '🎓',
        color: '#a78bfa',
    },
    {
        degree: '12th Grade — CBSE Board',
        institution: 'Senior Secondary School',
        period: '2024',
        status: 'Passed',
        icon: '📚',
        color: '#67e8f9',
    },
    {
        degree: '10th Grade — CBSE Board',
        institution: 'Secondary School',
        period: '2022',
        status: 'Passed',
        icon: '🏫',
        color: '#86efac',
    },
];

const experience = [
    {
        role: 'Web Development Practice Projects',
        company: 'Self-Learning / Personal Projects',
        period: '2024 – Present',
        desc: [
            'Designed and developed responsive websites using HTML, CSS, and JavaScript',
            'Created interactive UI components and CSS animations',
            'Implemented form validation and DOM manipulation with vanilla JavaScript',
            'Managed and uploaded projects on GitHub with proper version control',
        ],
        icon: '💻',
        color: '#a78bfa',
    },
    {
        role: 'Hackathon Participant',
        company: 'Coding Events & Competitions',
        period: '2024',
        desc: [
            'Participated in hackathons and coding events to sharpen problem-solving skills',
            'Collaborated with peers in team-based coding challenges',
            'Gained hands-on experience working under time constraints',
        ],
        icon: '🏆',
        color: '#fbbf24',
    },
];

const achievements = [
    { text: 'Participated in Hackathon / Coding Events', icon: '🏆' },
    { text: 'Completed multiple Web Development Practice Projects', icon: '💻' },
    { text: 'Active learner of new web technologies', icon: '📖' },
    { text: 'Uploaded and managed projects on GitHub', icon: '🐙' },
];

export default function Resume() {
    return (
        <section className="resume-section section" id="resume">
            <div className="container">
                <span className="section-label">// my journey</span>
                <h2 className="section-title">Education & <span>Experience</span></h2>
                <p className="section-desc">My academic background and practical experience so far</p>

                <div className="resume-grid">
                    {/* Left Column */}
                    <div className="resume-col">
                        <h3 className="resume-col-title">
                            <span className="col-icon">🎓</span>
                            Education
                        </h3>

                        <div className="timeline">
                            {education.map((edu, i) => (
                                <div key={i} className="timeline-item">
                                    <div className="timeline-icon" style={{ background: `${edu.color}20`, color: edu.color }}>
                                        {edu.icon}
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-top">
                                            <span className="timeline-period">{edu.period}</span>
                                            <span className="timeline-status" style={{ color: edu.color }}>{edu.status}</span>
                                        </div>
                                        <h4 className="timeline-title">{edu.degree}</h4>
                                        <p className="timeline-sub">{edu.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <h3 className="resume-col-title" style={{ marginTop: '48px' }}>
                            <span className="col-icon">⚡</span>
                            Achievements
                        </h3>
                        <div className="achievements-list">
                            {achievements.map((a, i) => (
                                <div key={i} className="achievement-item">
                                    <span className="achievement-icon">{a.icon}</span>
                                    <p>{a.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="resume-col">
                        <h3 className="resume-col-title">
                            <span className="col-icon">💼</span>
                            Experience
                        </h3>

                        <div className="timeline">
                            {experience.map((exp, i) => (
                                <div key={i} className="timeline-item exp-item">
                                    <div className="timeline-icon" style={{ background: `${exp.color}20`, color: exp.color }}>
                                        {exp.icon}
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-top">
                                            <span className="timeline-period">{exp.period}</span>
                                        </div>
                                        <h4 className="timeline-title">{exp.role}</h4>
                                        <p className="timeline-sub">{exp.company}</p>
                                        <ul className="exp-bullets">
                                            {exp.desc.map((d, j) => (
                                                <li key={j}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download Button */}
                <div className="resume-download">
                    <div className="download-card">
                        <div className="download-icon">📄</div>
                        <div className="download-text">
                            <h4>Download Full Resume</h4>
                            <p>Get the complete PDF version of my resume</p>
                        </div>
                        <a href="/KAJAL_RESUME.pdf" download className="btn btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
