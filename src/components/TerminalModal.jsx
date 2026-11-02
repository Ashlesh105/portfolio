import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, SKILLS_MATRIX } from '../data/resumeData';

export default function TerminalModal({ isOpen, onClose, playSound }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'ashlesh-shell v2.4 (x86_64-node-enterprise)' },
    { type: 'system', text: 'Type "help" to view available commands or "projects" to view engineering systems.' }
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [pastCommands, setPastCommands] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      const parts = rawCmd.split(' ');
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(' ');

      const newHistory = [...history, { type: 'prompt', text: `$ ${rawCmd}` }];

      if (rawCmd) {
        setPastCommands(prev => [rawCmd, ...prev]);
        setCmdIndex(-1);
      }

      playSound?.();

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available commands:
  help       - Print this command reference
  whoami     - Engineer summary & background
  exp        - Display production roles at KrishiTantra
  projects   - List all 6 engineering deployments
  skills     - Display technical stack matrix
  iot        - Read live sensor bus (Cold Storage Chamber 04)
  contact    - View direct channels (Email, GitHub, LinkedIn, Phone)
  curl       - Simulate API request (e.g. "curl api/developer")
  clear      - Clear terminal screen
  exit       - Close terminal window`
          });
          break;

        case 'whoami':
          newHistory.push({
            type: 'output',
            text: `${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Current: ${PERSONAL_INFO.statusText}
Summary: ${PERSONAL_INFO.bio}`
          });
          break;

        case 'exp':
          newHistory.push({
            type: 'output',
            text: `ROLE: ${WORK_EXPERIENCE[0].role} @ ${WORK_EXPERIENCE[0].company} (${WORK_EXPERIENCE[0].period})
Location: ${WORK_EXPERIENCE[0].location}
Highlights:
  * Engineered IoT sensor ingestion & streaming for cold chain logistics.
  * Architected GraphQL API pipelines reducing overfetch by >40%.
  * Designed offline-first SQLite transaction queues for rural field mobile apps.`
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: PROJECTS.map((p, idx) => `[0${idx+1}] ${p.title}
     Category: ${p.category} | Tech: ${p.tech.join(', ')}
     Highlight: ${p.architectureHighlight}`).join('\n\n')
          });
          break;

        case 'skills':
          newHistory.push({
            type: 'output',
            text: SKILLS_MATRIX.map(cat => `// ${cat.category.toUpperCase()}:
  ${cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}`).join('\n\n')
          });
          break;

        case 'iot':
          newHistory.push({
            type: 'output',
            text: `[IoT Bus Status // Chamber 04 Cold Storage]
Sensor Node: CS-UDU-09
Temperature: -18.3°C [NOMINAL]
Humidity:    88.8% RH [CALIBRATED]
CO2:         414 ppm [SAFE]
Packets/sec: 14.8 pkts/s
Sync Queue:  0 mutations pending (GraphQL via WebSockets)`
          });
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: `Direct channels:
  Email:    ${PERSONAL_INFO.email}
  Phone:    ${PERSONAL_INFO.phone}
  GitHub:   ${PERSONAL_INFO.github}
  LinkedIn: ${PERSONAL_INFO.linkedin}`
          });
          break;

        case 'curl':
          newHistory.push({
            type: 'output',
            text: `HTTP/2 200 OK
content-type: application/json
x-response-time: 14ms

{
  "engineer": "${PERSONAL_INFO.name}",
  "status": "AVAILABLE_FOR_HIGH_IMPACT_ROLES",
  "email": "${PERSONAL_INFO.email}",
  "focus": ["IoT Systems", "GraphQL", "Offline-First Mobile", "Full-Stack"]
}`
          });
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'exit':
          onClose();
          return;

        case '':
          break;

        default:
          newHistory.push({
            type: 'error',
            text: `zsh: command not found: ${cmd}. Type "help" for a list of commands.`
          });
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0 && cmdIndex < pastCommands.length - 1) {
        const nextIdx = cmdIndex + 1;
        setCmdIndex(nextIdx);
        setInputVal(pastCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const prevIdx = cmdIndex - 1;
        setCmdIndex(prevIdx);
        setInputVal(pastCommands[prevIdx]);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-modal tech-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Terminal Title Bar */}
        <div className="terminal-bar">
          <div className="terminal-bar-dots">
            <span className="dot dot-red" onClick={onClose}></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>

          <div className="terminal-bar-title font-mono">
            <Terminal size={14} className="text-cyan mr-1" />
            <span>ashlesh@systems-laptop:~ (ashlesh-shell)</span>
          </div>

          <button className="icon-btn text-muted" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body font-mono" onClick={() => inputRef.current?.focus()}>
          {history.map((line, idx) => (
            <div key={idx} className={`terminal-line line-${line.type}`}>
              <pre>{line.text}</pre>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="terminal-input-row">
            <span className="terminal-prompt text-cyan">ashlesh:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="terminal-input font-mono"
              autoFocus
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>

      </div>
    </div>
  );
}
