import React, { useState, useEffect } from 'react';
import { Search, Command, Terminal, FileText, Zap, ArrowRight, Layers, Mail, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO, PROJECTS } from '../data/resumeData';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenResume, onOpenGraphQL, showToast, playSound }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'terminal',
      title: 'Open ashlesh.sh Terminal',
      sub: 'Interactive engineering command line',
      icon: Terminal,
      action: () => { onClose(); onOpenTerminal(); }
    },
    {
      id: 'graphql',
      title: 'Test Live GraphQL Playground',
      sub: 'Execute live GraphQL queries against developer schemas',
      icon: Zap,
      action: () => { onClose(); onOpenGraphQL(); }
    },
    {
      id: 'resume',
      title: 'View ATS Tech Resume',
      sub: 'Print or export 1-page engineering CV',
      icon: FileText,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      sub: 'Copy to clipboard with one click',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        showToast("Email copied: " + PERSONAL_INFO.email);
        onClose();
      }
    },
    {
      id: 'github',
      title: 'GitHub Profile (Ashlesh105)',
      sub: 'View repositories and contributions',
      icon: GithubIcon,
      action: () => { window.open(PERSONAL_INFO.github, '_blank'); onClose(); }
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Network (ashlesh-kini)',
      sub: 'Connect on LinkedIn',
      icon: LinkedinIcon,
      action: () => { window.open(PERSONAL_INFO.linkedin, '_blank'); onClose(); }
    }
  ];

  const filteredActions = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="command-palette tech-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Search Input */}
        <div className="palette-input-box">
          <Search size={18} className="text-cyan" />
          <input
            type="text"
            placeholder="Type a command or search action (e.g. terminal, graphql, resume)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="palette-input font-mono"
            autoFocus
          />
          <kbd className="palette-kbd font-mono">ESC</kbd>
        </div>

        {/* Results List */}
        <div className="palette-results">
          <div className="palette-section-title font-mono text-xs text-muted">
            AVAILABLE_COMMANDS ({filteredActions.length})
          </div>

          {filteredActions.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="palette-item"
                onClick={() => { playSound?.(); item.action(); }}
              >
                <div className="palette-item-icon">
                  <Icon size={16} className="text-cyan" />
                </div>
                <div className="palette-item-text">
                  <div className="palette-item-title font-mono">{item.title}</div>
                  <div className="palette-item-sub text-xs text-muted">{item.sub}</div>
                </div>
                <ArrowRight size={14} className="palette-item-arrow text-muted" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
