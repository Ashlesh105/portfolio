import React, { useState } from 'react';
import { Play, Copy, Check, Database, Zap, Sparkles, RefreshCw, Terminal, Code2 } from 'lucide-react';
import { GRAPHQL_PRESETS, GRAPHQL_SCHEMA, PERSONAL_INFO, PROJECTS, WORK_EXPERIENCE } from '../data/resumeData';

export default function GraphQLPlayground({ showToast, playSound }) {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [queryText, setQueryText] = useState(GRAPHQL_PRESETS[0].query);
  const [executing, setExecuting] = useState(false);
  const [response, setResponse] = useState(null);
  const [latency, setLatency] = useState(null);
  const [showSchema, setShowSchema] = useState(false);

  const handleSelectPreset = (idx) => {
    playSound?.();
    setSelectedPreset(idx);
    setQueryText(GRAPHQL_PRESETS[idx].query);
    setResponse(null);
    setLatency(null);
  };

  const executeQuery = () => {
    playSound?.();
    setExecuting(true);
    setLatency(null);

    // Simulate network latency & GraphQL resolver execution
    setTimeout(() => {
      const simulatedLatency = Math.floor(18 + Math.random() * 14);
      setLatency(simulatedLatency);

      let dataOutput = {};

      if (queryText.includes('GetDeveloperProfile')) {
        dataOutput = {
          data: {
            developer: {
              name: PERSONAL_INFO.name,
              role: PERSONAL_INFO.title,
              location: PERSONAL_INFO.location,
              experienceYears: 2.0,
              currentCompany: "KrishiTantra",
              contact: {
                email: PERSONAL_INFO.email,
                github: PERSONAL_INFO.github,
                linkedin: PERSONAL_INFO.linkedin
              }
            }
          }
        };
      } else if (queryText.includes('GetIoTTelemetry')) {
        dataOutput = {
          data: {
            liveTelemetry: {
              unitId: "CS-UDU-09",
              chamber: "Chamber_04_Cold_Store",
              temperatureCelsius: -18.2,
              humidityPercentage: 89.1,
              co2Ppm: 416,
              status: "OPERATIONAL_NOMINAL",
              lastPingMs: 14
            }
          }
        };
      } else if (queryText.includes('GetOfflineSyncArchitecture')) {
        dataOutput = {
          data: {
            offlineSyncMetrics: {
              storageEngine: "SQLite_Mobile_Cipher",
              pendingMutations: 0,
              reconciliationStrategy: "Deterministic_Background_Replay",
              cloudEndpoint: "https://api.krishitantra.com/graphql"
            }
          }
        };
      } else if (queryText.includes('GetFlagshipProjects')) {
        dataOutput = {
          data: {
            allProjects: PROJECTS.slice(0, 3).map(p => ({
              title: p.title,
              category: p.category,
              tech: p.tech,
              architectureHighlight: p.architectureHighlight
            }))
          }
        };
      } else {
        // Generic fallback execution
        dataOutput = {
          data: {
            queryStatus: "SUCCESS",
            rawQuery: queryText.trim(),
            resolver: "InMemoryGraphQLMockExecutor",
            developer: PERSONAL_INFO.name,
            timestamp: new Date().toISOString()
          }
        };
      }

      setResponse(dataOutput);
      setExecuting(false);
      showToast(`GraphQL query executed in ${simulatedLatency}ms`);
    }, 450);
  };

  return (
    <section id="graphql-ide" className="graphql-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">INTERACTIVE_API_EXPLORER</div>
          <h2 className="section-title">Live GraphQL Playground</h2>
          <p className="section-desc">
            Test and execute real GraphQL queries against my live developer profile, IoT telemetry nodes, and system schemas directly in the browser.
          </p>
        </div>

        {/* IDE Container */}
        <div className="graphql-ide-card tech-card">
          
          {/* Top Bar / Presets */}
          <div className="ide-top-bar">
            <div className="ide-endpoint font-mono">
              <span className="method-pill font-mono">POST</span>
              <span className="endpoint-url font-mono">https://ashlesh.kini/api/graphql</span>
            </div>

            <div className="ide-actions">
              <button 
                className="btn btn-secondary font-mono text-xs"
                onClick={() => { playSound?.(); setShowSchema(!showSchema); }}
              >
                <Database size={13} className="text-violet" />
                <span>{showSchema ? 'Hide Schema' : 'Inspect Schema'}</span>
              </button>

              <button 
                className="btn btn-primary font-mono text-xs"
                onClick={executeQuery}
                disabled={executing}
              >
                {executing ? <RefreshCw size={14} className="spin" /> : <Play size={14} />}
                <span>{executing ? 'Executing...' : 'Run Query (Ctrl+Enter)'}</span>
              </button>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="ide-presets-bar">
            <span className="font-mono text-xs text-muted">// PRESETS:</span>
            {GRAPHQL_PRESETS.map((preset, idx) => (
              <button
                key={idx}
                className={`preset-btn font-mono text-xs ${selectedPreset === idx ? 'active' : ''}`}
                onClick={() => handleSelectPreset(idx)}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* IDE Main Split: Editor & Response */}
          <div className="ide-workspace">
            
            {/* Query Editor Pane */}
            <div className="ide-editor-pane">
              <div className="pane-header font-mono">
                <span className="pane-title text-cyan">QUERY_EDITOR.graphql</span>
                <span className="text-xs text-muted">Editable</span>
              </div>
              <textarea
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                className="graphql-textarea font-mono"
                spellCheck="false"
                rows={12}
              />
            </div>

            {/* Response Output Pane */}
            <div className="ide-response-pane">
              <div className="pane-header font-mono">
                <span className="pane-title text-emerald">EXECUTION_OUTPUT.json</span>
                {latency && (
                  <span className="badge badge-emerald font-mono text-xs">
                    STATUS 200 OK // {latency}ms
                  </span>
                )}
              </div>

              <div className="response-content font-mono">
                {executing ? (
                  <div className="executing-state text-muted">
                    <RefreshCw size={24} className="spin text-cyan mb-2" />
                    <div>Resolving GraphQL AST...</div>
                  </div>
                ) : response ? (
                  <pre className="json-output">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                ) : (
                  <div className="placeholder-state text-muted">
                    <Code2 size={28} className="mb-2 text-muted" />
                    <div>Click "Run Query" or choose a preset above to execute live GraphQL resolvers.</div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Schema Drawer Modal */}
          {showSchema && (
            <div className="schema-drawer font-mono">
              <div className="schema-header">
                <span className="text-violet font-bold">// GRAPHQL_SDL_SCHEMA_DEFINITION</span>
                <button className="btn btn-ghost text-xs" onClick={() => setShowSchema(false)}>Close</button>
              </div>
              <pre className="schema-code">{GRAPHQL_SCHEMA}</pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
