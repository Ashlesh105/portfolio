import React, { useState } from 'react';
import { 
  Activity, Zap, HardDrive, Cpu, BatteryCharging, Dna, 
  ExternalLink, Layers, ArrowUpRight, CheckCircle2, Shield, Eye
} from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

export default function ProjectsGrid({ onSelectProject, playSound }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'IoT & Full-Stack', 'Mobile & Sync Engine', 'Mobile & Vision', 'Machine Learning'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'Mobile & Sync Engine' && p.category.includes('Mobile')));

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HardDrive': return <HardDrive size={20} className="text-cyan" />;
      case 'Activity': return <Activity size={20} className="text-emerald" />;
      case 'Zap': return <Zap size={20} className="text-amber" />;
      case 'Cpu': return <Cpu size={20} className="text-cyan" />;
      case 'BatteryCharging': return <BatteryCharging size={20} className="text-emerald" />;
      case 'Dna': return <Dna size={20} className="text-violet" />;
      default: return <Layers size={20} className="text-cyan" />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">ENGINEERING_PORTFOLIO</div>
          <h2 className="section-title">Featured Systems & Deployments</h2>
          <p className="section-desc">
            Production IoT architectures, offline-first mobile sync engines, computer vision OCR pipelines, and distributed GraphQL platforms.
          </p>

          {/* Filter Bar */}
          <div className="filter-chips-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip font-mono ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { playSound?.(); setActiveCategory(cat); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            return (
              <div key={project.id} className="project-card tech-card">
                
                {/* Card Top Metadata */}
                <div className="project-card-top">
                  <div className="project-icon-box">
                    {getIcon(project.icon)}
                  </div>
                  <div className="project-badges">
                    <span className="badge badge-cyan font-mono">{project.badge}</span>
                    <span className="badge font-mono text-muted">{project.period}</span>
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle font-mono text-xs text-muted">{project.subtitle}</div>
                </div>

                {/* Overview Text */}
                <p className="project-overview">{project.overview}</p>

                {/* Architecture Highlight Box */}
                <div className="arch-callout">
                  <span className="font-mono text-xs text-cyan font-bold">// ARCHITECTURE_CORE:</span>
                  <p className="arch-callout-text">{project.architectureHighlight}</p>
                </div>

                {/* Metric Strip */}
                <div className="project-metrics font-mono">
                  {Object.entries(project.metrics).map(([k, v], i) => (
                    <div key={i} className="proj-metric-item">
                      <span className="text-muted text-xs uppercase">{k}:</span>
                      <span className="text-highlight text-xs font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="project-tech-row">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge font-mono text-xs">{t}</span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="project-card-footer">
                  <button 
                    className="btn btn-secondary w-full font-mono text-xs"
                    onClick={() => { playSound?.(); onSelectProject(project); }}
                  >
                    <Eye size={14} />
                    <span>Inspect Architectural Breakdown</span>
                    <ArrowUpRight size={14} className="ml-auto" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
