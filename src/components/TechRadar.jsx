import React, { useState } from 'react';
import { Terminal, Smartphone, Server, Database, Cpu, GitBranch, Search, Filter } from 'lucide-react';
import { SKILLS_MATRIX } from '../data/resumeData';

export default function TechRadar({ playSound }) {
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return <Terminal size={18} className="text-cyan" />;
      case 'Smartphone': return <Smartphone size={18} className="text-emerald" />;
      case 'Server': return <Server size={18} className="text-violet" />;
      case 'Database': return <Database size={18} className="text-amber" />;
      case 'Cpu': return <Cpu size={18} className="text-cyan" />;
      case 'GitBranch': return <GitBranch size={18} className="text-emerald" />;
      default: return <Cpu size={18} className="text-cyan" />;
    }
  };

  const filteredCategories = SKILLS_MATRIX.map(cat => {
    const matchedSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.level.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: matchedSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="radar" className="radar-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">ENGINEERING_CAPABILITIES</div>
          <h2 className="section-title">Technical Radar & Stack Matrix</h2>
          <p className="section-desc">
            Production-tested technologies, runtimes, protocols, and architectural patterns deployed in commercial hardware and software systems.
          </p>

          {/* Search Box */}
          <div className="radar-search-bar">
            <Search size={16} className="search-icon text-muted" />
            <input 
              type="text"
              placeholder="Search stack (e.g. GraphQL, Offline, React Native, SQLite, IoT)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="radar-input font-mono"
            />
            {searchTerm && (
              <button className="clear-btn font-mono" onClick={() => setSearchTerm('')}>Clear</button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="radar-grid">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="radar-card tech-card">
              <div className="radar-card-header">
                <div className="radar-icon-box">{getIcon(cat.icon)}</div>
                <h3 className="radar-card-title font-mono">{cat.category}</h3>
              </div>

              <div className="radar-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="radar-skill-row">
                    <div className="skill-name-row">
                      <span className="skill-name font-mono">{skill.name}</span>
                      <span className="badge badge-secondary font-mono text-xs">{skill.level}</span>
                    </div>
                    <div className="skill-desc">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
