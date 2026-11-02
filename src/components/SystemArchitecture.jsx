import React, { useState } from 'react';
import { Layers, Server, Smartphone, Database, Cpu, Wifi, Shield, ArrowDown, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function SystemArchitecture({ playSound }) {
  const [activeTier, setActiveTier] = useState('tier-edge');

  const tiers = [
    {
      id: 'tier-edge',
      name: 'Layer 01 // Hardware & Edge Ingestion',
      subtitle: 'IoT Sensors & Field Hardware Telemetry',
      icon: Cpu,
      accent: 'cyan',
      techPills: ['IoT Pragathi', 'Optical Spectrometers', 'OCR Mobile Camera', 'GPS Polygons'],
      details: {
        architecture: 'Low-latency packet ingestion from physical soil testing spectrophotometers, Cold Storage multi-point sensors (Temp/Humidity/CO2), and mobile edge camera OCR reading validation.',
        keyMechanisms: [
          'Packet decoding & checksum validation for raw spectroscopic serial streams.',
          'Edge OCR processing for automated electrical meter digit extraction, reducing manual field errors.',
          'Threshold breach detection triggering real-time sub-second hardware alerts.',
          'Geo-linked coordinate bounding box capturing farmer land polygons in offline environments.'
        ],
        implementedIn: ['SheetX Cold Storage', 'BhuVision R&D Platform', 'Smart Energy Meter System', 'Soil Health Card (SHC)']
      }
    },
    {
      id: 'tier-client',
      name: 'Layer 02 // Client & Offline-First Engine',
      subtitle: 'Cross-Platform Mobile & Web Runtime',
      icon: Smartphone,
      accent: 'emerald',
      techPills: ['Flutter', 'React Native', 'React.js', 'SQLite Local DB', 'BLoC & Context'],
      details: {
        architecture: 'Decoupled cross-platform mobile and web applications equipped with local SQLite mutation queues for zero-connectivity field operations.',
        keyMechanisms: [
          'Dual client architectures (Field Agents vs Laboratory Biochemists; Contractors vs Consumers).',
          'Cryptographically safe local transaction spooling in SQLite when network connectivity is lost.',
          'Background reconciliation worker automatically replaying batched GraphQL mutations upon 4G/WiFi reconnection.',
          'Multi-flavor Flutter build configurations targeting distinct enterprise deployments.'
        ],
        implementedIn: ['Soil Health Card (SHC) System', 'Smart Energy Contractor Platform', 'EV Charging App']
      }
    },
    {
      id: 'tier-api',
      name: 'Layer 03 // Distributed API & Business Logic',
      subtitle: 'Unified GraphQL Services & Node.js Workers',
      icon: Server,
      accent: 'violet',
      techPills: ['Node.js', 'Express.js', 'GraphQL Schemas', 'JWT RBAC', 'WebSockets'],
      details: {
        architecture: 'High-throughput Node.js microservices exposing strictly typed GraphQL schemas, eliminating client over-fetching while streaming live hardware events over WebSockets.',
        keyMechanisms: [
          'Granular Role-Based Access Control (RBAC) protecting agricultural, lab, and logistics endpoints.',
          'GraphQL mutation resolvers handling batching, optimistic locking, and conflict resolution.',
          'Bidirectional WebSocket pipelines for streaming vehicle dispatch telemetry and cold chain alerts.',
          'Automated contractor dispatch algorithm prioritizing proximity, rating, and specialization.'
        ],
        implementedIn: ['KrishiTantra Core APIs', 'SheetX Pragathi Engine', 'Smart Energy Dispatch']
      }
    },
    {
      id: 'tier-data',
      name: 'Layer 04 // Persistence & Data Topology',
      subtitle: 'Hierarchical & Relational Databases',
      icon: Database,
      accent: 'amber',
      techPills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite Edge', 'Hierarchical Trees'],
      details: {
        architecture: 'Hybrid datastore architecture pairing MongoDB for dynamic hierarchical structures (Unit -> Chamber -> Rack -> Crate) with ACID-compliant relational databases for audit trails and transactions.',
        keyMechanisms: [
          'Inverted tree indexing in MongoDB supporting sub-second queries across 1,200+ cold storage crates.',
          'Relational schemas in PostgreSQL / MySQL guaranteeing transactional integrity for service requisitions.',
          'Time-series sensor telemetry aggregation with automatic data tiering and retention policies.',
          'Embedded SQLite on mobile clients maintaining local replica sets of active field workflows.'
        ],
        implementedIn: ['SheetX Logistics', 'KrishiTantra Core Data', 'Soil Health Card Data Warehouse']
      }
    }
  ];

  const currentTier = tiers.find(t => t.id === activeTier) || tiers[0];

  return (
    <section id="architecture" className="arch-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">SYSTEM_TOPOLOGY</div>
          <h2 className="section-title">End-to-End Architectural Blueprint</h2>
          <p className="section-desc">
            How I architect resilient, production-ready full-stack applications: from low-level physical sensors and offline mobile clients to scalable GraphQL backends and hierarchical datastores.
          </p>
        </div>

        {/* Interactive Architecture Canvas / Tabs */}
        <div className="arch-workbench">
          
          {/* Tier Selection Buttons */}
          <div className="arch-tiers-nav">
            {tiers.map((t, idx) => {
              const Icon = t.icon;
              const isActive = t.id === activeTier;
              return (
                <button
                  key={t.id}
                  className={`tier-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => { playSound?.(); setActiveTier(t.id); }}
                >
                  <div className="tier-nav-indicator">
                    <span className="tier-num font-mono">0{idx + 1}</span>
                    <Icon size={18} className={`text-${t.accent}`} />
                  </div>
                  <div className="tier-nav-text">
                    <div className="tier-nav-name font-mono">{t.name}</div>
                    <div className="tier-nav-sub">{t.subtitle}</div>
                  </div>
                  <ChevronRight size={16} className="tier-arrow" />
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Panel */}
          <div className="arch-inspector tech-card">
            <div className="inspector-header">
              <div className="inspector-title-group">
                <span className={`badge badge-${currentTier.accent}`}>
                  {currentTier.name.split('//')[0].trim()}
                </span>
                <h3 className="inspector-title">{currentTier.subtitle}</h3>
              </div>
              <div className="inspector-status font-mono text-emerald">
                ● ARCHITECTURE_VERIFIED
              </div>
            </div>

            <p className="inspector-desc">{currentTier.details.architecture}</p>

            {/* Core Mechanisms */}
            <div className="inspector-block">
              <div className="block-title font-mono">// CORE_ENGINEERING_MECHANISMS:</div>
              <div className="mechanisms-grid">
                {currentTier.details.keyMechanisms.map((mech, i) => (
                  <div key={i} className="mechanism-item">
                    <CheckCircle2 size={16} className={`text-${currentTier.accent} flex-shrink-0`} />
                    <span className="mechanism-text">{mech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack In Production */}
            <div className="inspector-block">
              <div className="block-title font-mono">// TECHNOLOGIES_UTILIZED:</div>
              <div className="pills-row">
                {currentTier.techPills.map((pill, i) => (
                  <span key={i} className="badge badge-secondary font-mono">{pill}</span>
                ))}
              </div>
            </div>

            {/* Implemented In Projects */}
            <div className="inspector-footer">
              <span className="font-mono text-xs text-muted">// PRODUCTION_DEPLOYMENTS:</span>
              <div className="projects-chip-row">
                {currentTier.details.implementedIn.map((proj, i) => (
                  <span key={i} className="project-tag font-mono text-xs">
                    {proj}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
