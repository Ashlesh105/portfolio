import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, ArrowRight, Copy, Check, ExternalLink, Activity, 
  Cpu, HardDrive, Wifi, ShieldCheck, Database, Layers, Code, Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function HeroHUD({ onOpenTerminal, onOpenGraphQL, showToast, playSound }) {
  const [copied, setCopied] = useState(false);
  const [temp, setTemp] = useState(-18.3);
  const [humidity, setHumidity] = useState(88.6);
  const [co2, setCo2] = useState(412);
  const [packets, setPackets] = useState(14.4);
  const [syncStatus, setSyncStatus] = useState("ALL MUTATIONS SYNCED");
  
  const canvasRef = useRef(null);
  const sparklineDataRef = useRef(Array(40).fill(-18.3));

  // Live IoT telemetry simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Small sensor drift for SheetX Cold Storage
      const newTemp = parseFloat((-18.3 + (Math.random() * 0.6 - 0.3)).toFixed(1));
      const newHum = parseFloat((88.6 + (Math.random() * 1.2 - 0.6)).toFixed(1));
      const newCo2 = Math.floor(412 + (Math.random() * 10 - 5));
      const newPackets = parseFloat((14.0 + Math.random() * 2).toFixed(1));

      setTemp(newTemp);
      setHumidity(newHum);
      setCo2(newCo2);
      setPackets(newPackets);

      // Shift sparkline data
      sparklineDataRef.current.push(newTemp);
      sparklineDataRef.current.shift();

      // Render sparkline canvas
      renderSparkline();
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const renderSparkline = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const data = sparklineDataRef.current;
    const min = -19.0;
    const max = -17.5;
    const range = max - min;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    // Draw gradient area
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
    gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

    ctx.beginPath();
    data.forEach((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const normalizedY = 1 - (val - min) / range;
      const y = Math.max(4, Math.min(height - 4, normalizedY * height));
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    data.forEach((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const normalizedY = 1 - (val - min) / range;
      const y = Math.max(4, Math.min(height - 4, normalizedY * height));
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw current head point
    const lastX = width;
    const lastVal = data[data.length - 1];
    const lastY = Math.max(4, Math.min(height - 4, (1 - (lastVal - min) / range) * height));
    ctx.beginPath();
    ctx.arc(lastX - 2, lastY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  const handleCopyEmail = () => {
    playSound?.();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    showToast("Email copied: " + PERSONAL_INFO.email);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Engineer Specs & Introduction */}
        <div className="hero-content">
          
          {/* Operational Beacon */}
          <div className="hero-status-pill">
            <span className="status-beacon"></span>
            <span className="status-label font-mono">
              PRODUCTION SYSTEMS ENGINEER & FULL STACK DEVELOPER
            </span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="text-gradient-cyan text-nowrap">IoT Systems</span>,{' '}
            <span className="text-gradient-purple">Offline-First</span> Mobile Systems &{' '}
            <span className="text-gradient-emerald">GraphQL</span> Backends.
          </h1>

          <p className="hero-summary">
            Hi, I'm <strong className="text-highlight">Ashlesh Kini T</strong>. Nearly 2 years of engineering experience delivering high-reliability web and mobile platforms at <strong>KrishiTantra</strong> across <strong>React Native, Flutter, Node.js, and IoT Telemetry</strong>. Specialized in hardware-to-cloud data pipelines, resilient rural edge sync, and zero-overfetch GraphQL services.
          </p>

          {/* Key Metric Highlights */}
          <div className="hero-metrics-strip">
            {PERSONAL_INFO.metrics.map((m, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-value font-mono">{m.value}</div>
                <div className="metric-label">{m.label}</div>
                <div className="metric-desc font-mono">{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={() => playSound?.()}>
              <span>Inspect Systems</span>
              <ArrowRight size={15} />
            </a>

            <button 
              className="btn btn-secondary font-mono"
              onClick={() => { playSound?.(); onOpenGraphQL(); }}
            >
              <Zap size={15} className="text-violet" />
              <span>Query GraphQL</span>
            </button>

            <button 
              className="btn btn-secondary font-mono"
              onClick={() => { playSound?.(); onOpenTerminal(); }}
            >
              <Terminal size={15} className="text-cyan" />
              <span>ashlesh.sh</span>
            </button>

            <button 
              className={`btn ${copied ? 'btn-copied' : 'btn-ghost'} font-mono`}
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social-links">
            <span className="font-mono text-muted text-xs">// CONNECT:</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="social-tag">
              <Code size={14} />
              <span>GitHub / Ashlesh105</span>
              <ExternalLink size={12} className="text-muted" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="social-tag">
              <Layers size={14} />
              <span>LinkedIn / ashlesh-kini</span>
              <ExternalLink size={12} className="text-muted" />
            </a>
          </div>
        </div>

        {/* Right Column: Live Telemetry & Systems HUD */}
        <div className="hero-hud">
          <div className="hud-card">
            
            {/* HUD Window Header */}
            <div className="hud-header">
              <div className="hud-header-left">
                <span className="hud-indicator active"></span>
                <span className="hud-title font-mono">TELEMETRY_HUD // SHEETX_NODE_09</span>
              </div>
              <span className="hud-badge font-mono">LIVE_STREAM</span>
            </div>

            {/* Live Sparkline Chart */}
            <div className="hud-sensor-chart">
              <div className="chart-meta">
                <span className="font-mono text-xs text-muted">CHAMBER_04 // TEMPERATURE (°C)</span>
                <span className="font-mono text-sm text-cyan font-bold">{temp}°C [NOMINAL]</span>
              </div>
              <canvas 
                ref={canvasRef} 
                width={380} 
                height={75} 
                className="sparkline-canvas"
              />
              <div className="chart-axis font-mono">
                <span>T - 40s</span>
                <span>TARGET: -18.0°C</span>
                <span>NOW</span>
              </div>
            </div>

            {/* Sensor Telemetry Grid */}
            <div className="hud-sensors-grid">
              <div className="sensor-tile">
                <div className="sensor-header">
                  <Activity size={14} className="text-cyan" />
                  <span className="sensor-name font-mono">HUMIDITY</span>
                </div>
                <div className="sensor-val font-mono">{humidity}% <span className="unit">RH</span></div>
                <div className="sensor-status font-mono text-emerald">● CALIBRATED</div>
              </div>

              <div className="sensor-tile">
                <div className="sensor-header">
                  <Cpu size={14} className="text-amber" />
                  <span className="sensor-name font-mono">CO2_LEVEL</span>
                </div>
                <div className="sensor-val font-mono">{co2} <span className="unit">PPM</span></div>
                <div className="sensor-status font-mono text-emerald">● SAFE_INDEX</div>
              </div>

              <div className="sensor-tile">
                <div className="sensor-header">
                  <Wifi size={14} className="text-emerald" />
                  <span className="sensor-name font-mono">PACKET_RATE</span>
                </div>
                <div className="sensor-val font-mono">{packets} <span className="unit">pkts/s</span></div>
                <div className="sensor-status font-mono text-cyan">● WEBSOCKETS</div>
              </div>

              <div className="sensor-tile">
                <div className="sensor-header">
                  <Database size={14} className="text-violet" />
                  <span className="sensor-name font-mono">MUTATION_QUEUE</span>
                </div>
                <div className="sensor-val font-mono">0 <span className="unit">PENDING</span></div>
                <div className="sensor-status font-mono text-emerald">● SYNCED_GRAPHQL</div>
              </div>
            </div>

            {/* Hardware Module Badge */}
            <div className="hud-footer font-mono">
              <div className="hud-footer-item">
                <span className="text-muted">MODULE:</span>
                <span className="text-highlight">IoT Pragathi v2.1</span>
              </div>
              <div className="hud-footer-item">
                <span className="text-muted">COORDS:</span>
                <span className="text-cyan">13.3409°N, 74.7421°E (Udupi)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
