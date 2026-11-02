import React from 'react';
import { X, CheckCircle2, Cpu, ExternalLink, HardDrive, Shield, Activity } from 'lucide-react';

export default function ProjectModal({ project, onClose, playSound }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-detail-modal tech-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <span className="badge badge-cyan font-mono">{project.category}</span>
            <span className="badge font-mono text-muted">{project.period}</span>
          </div>

          <button className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Modal Title */}
        <h2 className="modal-project-title">{project.title}</h2>
        <div className="modal-project-subtitle font-mono text-cyan">{project.subtitle}</div>

        {/* Overview */}
        <p className="modal-overview">{project.overview}</p>

        {/* Architecture Highlight Deep-Dive */}
        <div className="modal-highlight-box">
          <div className="font-mono text-xs text-cyan font-bold">// ARCHITECTURAL_DESIGN_DECISION:</div>
          <p className="modal-highlight-desc">{project.architectureHighlight}</p>
        </div>

        {/* Engineering Deliverables */}
        <div className="modal-section">
          <div className="modal-section-title font-mono">// TECHNICAL_IMPLEMENTATION_DETAILS:</div>
          <div className="modal-details-list">
            {project.details.map((detail, idx) => (
              <div key={idx} className="modal-detail-item">
                <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="modal-section">
          <div className="modal-section-title font-mono">// SYSTEM_METRICS:</div>
          <div className="modal-metrics-grid font-mono">
            {Object.entries(project.metrics).map(([k, v], i) => (
              <div key={i} className="modal-metric-card">
                <span className="metric-key text-muted text-xs uppercase">{k}</span>
                <span className="metric-val text-cyan font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="modal-section">
          <div className="modal-section-title font-mono">// COMPLETE_STACK:</div>
          <div className="modal-tech-pills">
            {project.tech.map((t, i) => (
              <span key={i} className="badge badge-secondary font-mono">{t}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-primary ml-auto font-mono text-xs" onClick={onClose}>
            Close Inspection
          </button>
        </div>

      </div>
    </div>
  );
}
