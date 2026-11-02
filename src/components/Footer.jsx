import React from 'react';
import { Terminal, Mail, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Footer({ onOpenTerminal, onOpenResume, onOpenGraphQL, showToast }) {
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast("Email copied: " + PERSONAL_INFO.email);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Top Grid */}
        <div className="footer-top-grid">
          
          {/* Identity */}
          <div className="footer-col">
            <div className="footer-brand font-mono">
              <span className="text-cyan font-bold">ashlesh.kini</span>
              <span className="text-muted"> // </span>
              <span className="text-highlight">systems.fullstack</span>
            </div>
            <p className="footer-bio">
              Architecting resilient IoT telemetry pipelines, offline-first mobile sync engines (Flutter & React Native), and high-throughput GraphQL APIs.
            </p>
            <div className="footer-beacon-row font-mono text-xs">
              <span className="status-beacon"></span>
              <span className="text-emerald">STATUS: ACTIVE IN PRODUCTION @ KRISHITANTRA</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-col">
            <div className="footer-heading font-mono">// NAVIGATION</div>
            <ul className="footer-links font-mono text-xs">
              <li><a href="#architecture">Architecture Topology</a></li>
              <li><a href="#experience">Production Experience</a></li>
              <li><a href="#projects">Engineering Systems</a></li>
              <li><a href="#radar">Tech Stack Radar</a></li>
              <li><a href="#graphql-ide">Live GraphQL IDE</a></li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="footer-col">
            <div className="footer-heading font-mono">// SYSTEM_TOOLS</div>
            <ul className="footer-links font-mono text-xs">
              <li><button className="link-btn" onClick={onOpenTerminal}>ashlesh.sh (Terminal)</button></li>
              <li><button className="link-btn" onClick={onOpenGraphQL}>GraphQL Query Runner</button></li>
              <li><button className="link-btn" onClick={onOpenResume}>ATS Tech Resume</button></li>
              <li><button className="link-btn" onClick={handleCopyEmail}>Copy Contact Email</button></li>
            </ul>
          </div>

          {/* Channels */}
          <div className="footer-col">
            <div className="footer-heading font-mono">// CONNECT_DIRECT</div>
            <div className="footer-contact-items font-mono text-xs">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></div>
              <div>Phone: <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a></div>
              <div>Location: <span>{PERSONAL_INFO.location}</span></div>
              <div className="footer-social-row">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="badge badge-secondary">
                  <GithubIcon size={13} /> GitHub
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="badge badge-secondary">
                  <LinkedinIcon size={13} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom font-mono text-xs">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. Built with Vite, React & Pure Vanilla CSS.
          </div>
          <div className="text-muted">
            GIT_COMMIT: <span className="text-cyan">8f2a10b</span> • BUILD: <span className="text-emerald">v2.4.0-prod</span> • REGION: <span className="text-amber">ap-south-1</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
