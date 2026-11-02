import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Command, Volume2, VolumeX, Menu, X, Cpu, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Navbar({ onOpenTerminal, onOpenCommandPalette, onOpenResume, soundEnabled, toggleSound, showToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ping, setPing] = useState(18);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    const pingInterval = setInterval(() => {
      setPing(Math.floor(16 + Math.random() * 8));
    }, 4500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pingInterval);
    };
  }, []);

  const navLinks = [
    { label: "Architecture", num: "01", href: "#architecture" },
    { label: "Experience", num: "02", href: "#experience" },
    { label: "Projects", num: "03", href: "#projects" },
    { label: "Tech Radar", num: "04", href: "#radar" },
    { label: "GraphQL IDE", num: "05", href: "#graphql-ide" }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast("Email copied to clipboard: " + PERSONAL_INFO.email);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Brand & Node Status Beacon */}
        <a href="#" className="navbar-brand">
          <div className="brand-badge">
            <Cpu size={15} className="text-cyan" />
          </div>
          <div className="brand-titles">
            <span className="brand-name">ashlesh.kini</span>
            <span className="brand-tag">SYS.ENG</span>
          </div>
          
          <div className="latency-badge" title="Live Edge Node Health">
            <span className="status-beacon"></span>
            <span className="latency-text">udupi-edge-01 ({ping}ms)</span>
          </div>
        </a>

        {/* Desktop Nav Links - Clean, Pill-grouped */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span className="nav-idx">{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Cmd+K trigger */}
          <button 
            className="action-btn cmd-k-btn"
            onClick={onOpenCommandPalette}
            title="Search & Commands (Ctrl+K)"
          >
            <Command size={13} />
            <span className="cmd-text">Ctrl K</span>
          </button>

          {/* Interactive Terminal Trigger */}
          <button 
            className="action-btn terminal-btn"
            onClick={onOpenTerminal}
            title="Open ashlesh.sh Terminal"
          >
            <Terminal size={14} className="text-cyan" />
            <span className="btn-label">Terminal</span>
          </button>

          {/* Resume View Trigger */}
          <button 
            className="action-btn btn-resume"
            onClick={onOpenResume}
            title="View & Print Tech Resume"
          >
            <FileText size={14} />
            <span className="btn-label">CV</span>
          </button>

          {/* Audio Click Feedback Toggle */}
          <button 
            className="icon-btn sound-toggle-btn"
            onClick={toggleSound}
            title={soundEnabled ? "Audio Effects: ON" : "Audio Effects: OFF"}
          >
            {soundEnabled ? <Volume2 size={16} className="text-cyan" /> : <VolumeX size={16} className="text-muted" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="icon-btn mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="nav-idx text-cyan mr-2">{link.num}.</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-actions">
            <button className="btn btn-secondary w-full" onClick={() => { onOpenTerminal(); setMobileMenuOpen(false); }}>
              <Terminal size={15} /> Open Terminal (CLI)
            </button>
            <button className="btn btn-primary w-full" onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}>
              <FileText size={15} /> View ATS Tech Resume
            </button>
            <button className="btn btn-secondary w-full" onClick={handleCopyEmail}>
              <Mail size={15} /> Copy tashleshkini@gmail.com
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
