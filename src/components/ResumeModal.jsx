import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, SKILLS_MATRIX, EDUCATION } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resume-modal tech-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Controls */}
        <div className="resume-controls-bar">
          <div className="resume-doc-title font-mono text-xs">
            ASHLESH_KINI_T_RESUME.pdf // ATS_COMPATIBLE_VIEW
          </div>

          <div className="resume-actions-row">
            <button className="btn btn-primary font-mono text-xs" onClick={handlePrint}>
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>
            <button className="icon-btn" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ATS Printable Resume Paper */}
        <div className="resume-paper" id="printable-resume">
          
          {/* Header */}
          <div className="cv-header">
            <h1 className="cv-name">{PERSONAL_INFO.name}</h1>
            <div className="cv-contact-row font-mono">
              <span>{PERSONAL_INFO.phone}</span>
              <span>⋄</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>⋄</span>
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="cv-links-row font-mono">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/ashlesh-kini</a>
              <span>⋄</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">github.com/Ashlesh105</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="cv-section">
            <h2 className="cv-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="cv-summary-text">
              Full Stack Developer with nearly 2 years of development experience building web and mobile applications using React.js, Node.js, React Native, and Flutter. Experienced in developing REST and GraphQL APIs, integrating backend services, and working with MongoDB and relational databases. Skilled in developing end-to-end application features across frontend, backend, and mobile platforms, including IoT-integrated and data-driven applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="cv-section">
            <h2 className="cv-section-title">TECHNICAL SKILLS</h2>
            <div className="cv-skills-grid">
              <div><strong>Languages:</strong> JavaScript, TypeScript, Java, SQL, Python</div>
              <div><strong>Frontend:</strong> React, React Native, Flutter, HTML, CSS, Material-UI</div>
              <div><strong>Backend:</strong> Node.js, Express.js</div>
              <div><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, SQLite</div>
              <div><strong>APIs:</strong> REST, GraphQL, JWT</div>
              <div><strong>DevOps & Tools:</strong> Git, GitHub, GitLab, Docker, Firebase, VS Code</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="cv-section">
            <h2 className="cv-section-title">WORK EXPERIENCE</h2>
            <div className="cv-job-block">
              <div className="cv-job-header">
                <div>
                  <strong>Full Stack Developer</strong>
                  <div className="cv-job-company">KrishiTantra</div>
                </div>
                <div className="cv-job-right font-mono">
                  <div>2025 – Present</div>
                  <div>Udupi, Karnataka</div>
                </div>
              </div>
              <ul className="cv-bullet-list">
                <li>Developed and maintained mobile and web applications using React Native, React.js, and Node.js.</li>
                <li>Built and integrated GraphQL APIs for scalable data communication.</li>
                <li>Developed features for IoT-integrated systems enabling real-time monitoring and data tracking.</li>
                <li>Implemented role-based systems, workflows, and offline-first features.</li>
                <li>Collaborated with cross-functional teams to deliver production-ready features.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="cv-section">
            <h2 className="cv-section-title">PROJECTS</h2>
            
            {PROJECTS.map((proj, i) => (
              <div key={i} className="cv-proj-block">
                <div className="cv-proj-header">
                  <strong>{proj.title}</strong> — <span className="cv-tech-list">{proj.tech.join(', ')}</span>
                </div>
                <ul className="cv-bullet-list">
                  {proj.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="cv-section">
            <h2 className="cv-section-title">EDUCATION</h2>
            <div className="cv-edu-header">
              <div>
                <strong>{EDUCATION.degree}</strong>
                <div>{EDUCATION.institution}</div>
                <div>CGPA: {EDUCATION.cgpa}</div>
              </div>
              <div className="font-mono">{EDUCATION.period}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
