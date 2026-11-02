import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/resumeData';

export default function EducationCert() {
  return (
    <section className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">ACADEMIC_FOUNDATION</div>
          <h2 className="section-title">Education & Core Foundations</h2>
        </div>

        <div className="education-card tech-card">
          <div className="edu-top-row">
            <div className="edu-icon-box">
              <GraduationCap size={26} className="text-cyan" />
            </div>
            
            <div className="edu-title-block">
              <h3 className="edu-degree">{EDUCATION.degree}</h3>
              <div className="edu-school font-mono text-cyan">{EDUCATION.institution}</div>
              <div className="edu-meta font-mono text-muted text-xs">
                <span>{EDUCATION.location}</span>
                <span>•</span>
                <span>{EDUCATION.period}</span>
              </div>
            </div>

            <div className="edu-score-pill">
              <Award size={18} className="text-amber" />
              <div className="font-mono">
                <span className="text-xs text-muted">CGPA</span>
                <span className="score-val text-amber font-bold ml-1">{EDUCATION.cgpa}</span>
              </div>
            </div>
          </div>

          <div className="edu-coursework-block">
            <div className="coursework-title font-mono text-xs text-muted">// KEY_ACADEMIC_SPECIALIZATIONS:</div>
            <div className="coursework-grid">
              {EDUCATION.coursework.map((course, idx) => (
                <div key={idx} className="course-item font-mono text-xs">
                  <CheckCircle2 size={13} className="text-cyan flex-shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
