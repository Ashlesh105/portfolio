# Ashlesh Kini T — Systems & Full Stack Developer Portfolio

A tech-focused, high-craft developer portfolio built with **Vite, React, and Pure Vanilla CSS**. Designed specifically for systems architects, full-stack engineers, and IoT specialists.

---

## ⚡ Key Engineering Features

- **Live IoT Telemetry & Sparkline HUD**: Real-time canvas sparkline visualizing simulated sensor streams (Chamber 04 temperature, humidity, CO2 ppm, packet rate).
- **Interactive System Architecture Blueprint**: 4-tier interactive topology model covering Edge Hardware, Client/Offline Mobile Sync, Distributed GraphQL Microservices, and Hierarchical Data Stores.
- **In-Browser GraphQL Playground IDE**: Live interactive GraphQL execution sandbox with pre-built query presets, schema inspection, and response latency simulation.
- **Integrated \shlesh-shell\ Terminal**: Keyboard-driven CLI (\~\ or \Terminal\ button) supporting \help\, \projects\, \skills\, \iot\, \curl\, and \whoami\.
- **Command Palette (\Ctrl + K\)**: Quick-jump launcher for instant navigation and actions.
- **ATS-Optimized Printable Tech Resume**: Built-in 1-page printable CV matching global engineering standards.
- **Synthesized Web Audio Effects**: Tactile mechanical audio feedback synthesized with zero external audio assets.

---

## 🚀 Quick Start

### 1. Install Dependencies
`ash
npm install
`

### 2. Run Local Development Server
`ash
npm run dev
`
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
`ash
npm run build
`
Production assets will be built to the \dist/\ folder.

---

## 🌐 1-Click Deployment Options

### Deploy to Vercel
`ash
npx vercel
`

### Deploy to Netlify
`ash
npx netlify deploy --prod --dir=dist
`

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository: \https://github.com/Ashlesh105/portfolio2. In \ite.config.js\, set:
   \\js
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   \3. Run:
   \\ash
   npm run build
   npx gh-pages -d dist
   \
---

## 🛠️ Customizing Your Data

All portfolio data (projects, work experience, metrics, skills matrix, and GraphQL queries) is cleanly centralized in a single file:
\src/data/resumeData.js
\Simply update this file to reflect new accomplishments or deployments!
