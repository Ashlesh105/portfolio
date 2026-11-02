import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/resumeData';

export default function ExperienceTimeline({ playSound }) {
  const exp = WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">ENGINEERING_ROLES</div>
          <h2 className="section-title">Production Experience</h2>
          <p className="section-desc">
            Proven track record engineering high-availability full-stack platforms, real-time IoT hardware telemetry, and offline-first mobile solutions.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="timeline-container">
          <div className="timeline-card tech-card">
            
            {/* Header / Company Info */}
            <div className="timeline-header">
              <div className="timeline-company-block">
                <div className="company-badge-icon">
                  <Briefcase size={22} className="text-cyan" />
                </div>
                <div>
                  <div className="role-title-row">
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="badge badge-emerald font-mono">{exp.badge}</span>
                  </div>
                  <div className="company-name font-mono text-cyan">{exp.company}</div>
                </div>
              </div>

              <div className="timeline-meta font-mono">
                <div className="meta-item">
                  <Calendar size={14} className="text-muted" />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={14} className="text-muted" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="timeline-summary">{exp.summary}</p>

            {/* Technical Wins & Highlights */}
            <div className="timeline-highlights">
              <div className="highlights-title font-mono text-xs text-muted">
                // PRODUCTION_RESPONSIBILITIES_AND_IMPACT:
              </div>

              <div className="highlights-list">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-row">
                    <div className="highlight-bullet font-mono text-cyan">0{idx + 1}.</div>
                    <div className="highlight-content">
                      <div className="highlight-title font-mono">{item.title}</div>
                      <div className="highlight-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Employed */}
            <div className="timeline-stack">
              <span className="font-mono text-xs text-muted">// PRODUCTION_STACK:</span>
              <div className="stack-pills">
                {exp.stack.map((s, i) => (
                  <span key={i} className="badge badge-cyan font-mono">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
