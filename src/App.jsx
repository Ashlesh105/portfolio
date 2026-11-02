import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroHUD from './components/HeroHUD';
import SystemArchitecture from './components/SystemArchitecture';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import GraphQLPlayground from './components/GraphQLPlayground';
import TechRadar from './components/TechRadar';
import EducationCert from './components/EducationCert';
import TerminalModal from './components/TerminalModal';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toasts, setToasts] = useState([]);

  // Tactile audio synthesizer using Web Audio API (zero audio file dependencies)
  const playTactileClick = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Audio not permitted yet or unsupported
    }
  };

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Keyboard shortcut listener for terminal (~ or Ctrl+`)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        // Toggle terminal on backtick when not typing
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        toggleSound={() => {
          setSoundEnabled(!soundEnabled);
          showToast(soundEnabled ? "Tactile audio muted" : "Tactile audio enabled");
        }}
        showToast={showToast}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero & Heads-Up Display */}
        <HeroHUD
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenGraphQL={() => scrollToSection('graphql-ide')}
          showToast={showToast}
          playSound={playTactileClick}
        />

        {/* 01. System Architecture Blueprint */}
        <SystemArchitecture playSound={playTactileClick} />

        {/* 02. Work Experience Timeline (KrishiTantra) */}
        <ExperienceTimeline playSound={playTactileClick} />

        {/* 03. High-Impact Engineering Projects */}
        <ProjectsGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
          playSound={playTactileClick}
        />

        {/* 04. Technical Radar & Skills Matrix */}
        <TechRadar playSound={playTactileClick} />

        {/* 05. Live GraphQL IDE & Playground */}
        <GraphQLPlayground
          showToast={showToast}
          playSound={playTactileClick}
        />

        {/* Academic Foundation */}
        <EducationCert />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenGraphQL={() => scrollToSection('graphql-ide')}
        showToast={showToast}
      />

      {/* Terminal Modal (ashlesh.sh) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        playSound={playTactileClick}
      />

      {/* Project Architectural Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        playSound={playTactileClick}
      />

      {/* ATS Tech Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenGraphQL={() => scrollToSection('graphql-ide')}
        showToast={showToast}
        playSound={playTactileClick}
      />

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <span className="status-beacon"></span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
