export const PERSONAL_INFO = {
  name: "Ashlesh Kini T",
  title: "Full Stack & Systems Developer",
  tagline: "Architecting IoT-Integrated Platforms, Offline-First Mobile Systems & GraphQL Backends",
  location: "Udupi, Karnataka, India",
  email: "tashleshkini@gmail.com",
  phone: "+91 8150960662",
  github: "https://github.com/Ashlesh105",
  githubUsername: "Ashlesh105",
  linkedin: "https://linkedin.com/in/ashlesh-kini",
  status: "ACTIVE_PROD_DEPLOYMENT",
  statusText: "Full Stack Developer @ KrishiTantra",
  availability: "Open to high-impact Full-Stack, IoT & Mobile Engineering roles",
  bio: "Full Stack Developer with nearly 2 years of engineering experience delivering web and mobile platforms using React.js, Node.js, React Native, and Flutter. Specialized in end-to-end IoT sensor ingestion, offline-first synchronization, and high-performance GraphQL architectures.",
  metrics: [
    { label: "Production Exp", value: "2 Years", desc: "Enterprise Web & Mobile" },
    { label: "IoT Telemetry Rate", value: "<1s Latency", desc: "Cold Storage & Sensors" },
    { label: "Offline Sync", value: "100% Reliable", desc: "Local SQLite to GraphQL" },
    { label: "ML Accuracy", value: "91%", desc: "Diagnostic Model Stacking" }
  ]
};

export const WORK_EXPERIENCE = [
  {
    company: "KrishiTantra",
    role: "Full Stack Developer",
    period: "2025 – Present",
    location: "Udupi, Karnataka",
    badge: "Current Role",
    summary: "Driving end-to-end development of enterprise agritech and industrial IoT platforms, scaling GraphQL communication, and implementing resilient offline-first mobile systems.",
    highlights: [
      {
        title: "Cross-Platform Application Architecture",
        desc: "Engineered and maintained mission-critical mobile and web applications using React Native, React.js, and Node.js backend services."
      },
      {
        title: "GraphQL API Pipelines",
        desc: "Architected and integrated scalable GraphQL APIs, optimizing network payload efficiency and eliminating client over-fetching by over 40%."
      },
      {
        title: "Real-Time IoT Telemetry Tracking",
        desc: "Engineered streaming data ingestion pipelines for IoT sensor units, enabling real-time environmental monitoring (temperature, humidity, CO2) and automated telemetry alerts."
      },
      {
        title: "Offline-First Mobile Synchronization",
        desc: "Designed offline-first transaction queues using local caching and background synchronization engines for field agents operating in zero-connectivity rural zones."
      },
      {
        title: "Role-Based Workflows & Security",
        desc: "Implemented granular RBAC (Role-Based Access Control) across multi-tenant web portals and field-level mobile apps with JWT token authentication."
      }
    ],
    stack: ["React Native", "React.js", "Node.js", "GraphQL", "MongoDB", "IoT Systems", "Offline-First", "JWT"]
  }
];

export const PROJECTS = [
  {
    id: "sheetx",
    title: "SheetX – Cold Storage Management System",
    subtitle: "Industrial IoT Telemetry & Hierarchical Logistics",
    category: "IoT & Full-Stack",
    period: "Production",
    badge: "Flagship IoT System",
    overview: "A comprehensive full-stack industrial automation platform managing cold storage logistics, commodity tracking, and multi-tier hierarchical physical storage structures with live environmental IoT telemetry.",
    architectureHighlight: "Designed an inverted tree data schema (Unit -> Chamber -> Floor -> Rack -> Crate) in MongoDB, backed by a real-time IoT gateway broadcasting temperature, humidity, and CO2 alerts.",
    details: [
      "Engineered hierarchical storage architecture managing storage units down to individual crate coordinates.",
      "Integrated IoT sensors for continuous monitoring of temperature, relative humidity, and CO2 ppm levels.",
      "Developed the 'IoT Pragathi' module for dynamic device pairing with chambers, warehouses, and transport fleets.",
      "Built logistics module featuring real-time vehicle dispatch tracking to guarantee cold chain integrity during transit."
    ],
    tech: ["MERN Stack", "GraphQL", "MongoDB", "IoT Telemetry", "WebSockets", "Node.js"],
    metrics: { nodes: "1,200+ Crates", alertSpeed: "< 500ms", sensors: "Temp / Humidity / CO2" },
    icon: "HardDrive"
  },
  {
    id: "shc-system",
    title: "Soil Health Card (SHC) System",
    subtitle: "Offline-First Field-to-Lab Agricultural Platform",
    category: "Mobile & Sync Engine",
    period: "Production",
    badge: "Offline-First Engine",
    overview: "A multi-flavor Flutter mobile platform empowering rural field agents and laboratory biochemists to register farmers, map geolocation boundaries, requisition soil tests, and sync lab results.",
    architectureHighlight: "Engineered an offline-first transaction engine using local SQLite storage and a background mutation replay queue that auto-reconciles with GraphQL endpoints upon network restoration.",
    details: [
      "Built multi-flavor Flutter application supporting specialized workflows for field collectors vs lab specialists.",
      "Implemented resilient offline data capture with cryptographic local stamping and seamless cloud sync.",
      "Designed geo-linked polygon capture using GPS hardware coordinates for precise field-level agricultural telemetry.",
      "Integrated GraphQL mutations for soil test tracking, requisition lifecycles, and chemical index report generation."
    ],
    tech: ["Flutter", "GraphQL", "MongoDB", "SQLite (Offline)", "Geo-Location", "Dart"],
    metrics: { offlineCapability: "100%", syncLag: "Zero Data Loss", flavors: "Field & Lab" },
    icon: "Activity"
  },
  {
    id: "smart-energy",
    title: "Contractor & Consumer Platform",
    subtitle: "Smart Energy Service Dispatch & OCR Meter Pipeline",
    category: "Mobile & Vision",
    period: "Production Platform",
    badge: "Computer Vision & Workflow",
    overview: "Dual-sided ecosystem for energy contractors and retail consumers that streamlines electrical service provisioning, automated contractor assignment, and optical character recognition for utility meters.",
    architectureHighlight: "Engineered an edge image processing and OCR detection pipeline that verifies physical meter installations, eliminating manual meter transcription errors.",
    details: [
      "Built dual mobile clients for electrical contractors and consumers with synchronized GraphQL state.",
      "Implemented camera capture pipeline with automated OCR reading detection to validate meter indexes on install.",
      "Designed algorithmic contractor dispatch based on proximity, technician certification, and availability.",
      "Built consumer portal for transparent real-time technician tracking, milestone approvals, and rating mechanics."
    ],
    tech: ["React Native", "React.js", "GraphQL", "OCR Engine", "Node.js", "JWT"],
    metrics: { dispatchTime: "Real-time", verification: "Automated OCR", platform: "Dual Apps" },
    icon: "Zap"
  },
  {
    id: "bhuvision",
    title: "BhuVision R&D Platform",
    subtitle: "Hardware-in-the-Loop Diagnostic Suite",
    category: "IoT & Hardware Diagnostics",
    period: "Internal R&D",
    badge: "Hardware R&D",
    overview: "Specialized low-level Android hardware interface tool used by internal engineering and field technicians to calibrate, test, and validate optical sensor outputs on IoT soil testing spectrometers.",
    architectureHighlight: "Direct hardware protocol serial/Bluetooth stream parsing with live packet decoding to validate physical device calibration curves against laboratory benchmarks.",
    details: [
      "Developed native Android (Java/XML) testing utility for proprietary spectroscopic soil testing hardware.",
      "Created packet validation visualizer to detect sensor calibration drift and spectral anomalies.",
      "Built GraphQL sync bridge to pipe calibration metrics into central QA database for firmware auditing."
    ],
    tech: ["Android (Java/XML)", "Hardware Protocols", "GraphQL", "Spectroscopy Diagnostics"],
    metrics: { deviceCalibration: "High Precision", validation: "Automated Test Suite" },
    icon: "Cpu"
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure Platform",
    subtitle: "Grid Discovery & Real-Time Slot Reservation",
    category: "Mobile & Maps",
    period: "Prototype",
    badge: "Smart City",
    overview: "Interactive mobile and web platform for electric vehicle operators to discover live charging hubs, inspect connector telemetry (voltage, availability), and reserve charging slots.",
    architectureHighlight: "Real-time socket state machine tracking charger plug availability and power draw.",
    details: [
      "Developed high-performance map-based discovery interface using React Native and React.",
      "Built real-time slot reservation state machine preventing double-booking across charger clusters.",
      "Created unified GraphQL queries for charger hardware telemetry and charging status."
    ],
    tech: ["React Native", "React.js", "GraphQL", "Node.js", "Map Geocoding"],
    metrics: { mapLatency: "Smooth 60fps", stateSync: "WebSocket Driven" },
    icon: "BatteryCharging"
  },
  {
    id: "pcos-ml",
    title: "PCOS Detection System",
    subtitle: "Multi-Model Ensemble Diagnostic Classifier",
    category: "Machine Learning",
    period: "Research Project",
    badge: "91% Accuracy",
    overview: "Clinical decision support machine learning architecture evaluating hormonal and physiological biomarkers to detect Polycystic Ovary Syndrome with high diagnostic accuracy.",
    architectureHighlight: "Implemented a meta-classifier stacking architecture combining 7 diverse learning algorithms (KNN, Logistic Regression, Random Forest, Decision Tree, ANN, SVM, XGBoost) to maximize AUC-ROC.",
    details: [
      "Trained and cross-validated 7 distinct classification models on multidimensional biometric datasets.",
      "Engineered stacked generalization pipeline with logistic regression meta-model, outperforming single estimators.",
      "Achieved verified 91% diagnostic accuracy with rigorous feature importance attribution."
    ],
    tech: ["Python", "XGBoost", "Scikit-Learn", "Artificial Neural Nets", "SVM", "Ensemble Stacking"],
    metrics: { accuracy: "91%", algorithms: "7 Models Stacked", domain: "Bio-Informatics" },
    icon: "Dna"
  }
];

export const SKILLS_MATRIX = [
  {
    category: "Languages & Runtimes",
    icon: "Terminal",
    skills: [
      { name: "JavaScript (ES2024+)", level: "Production", desc: "Async iterators, Node runtime, DOM & Event Loop" },
      { name: "TypeScript", level: "Advanced", desc: "Strict type systems, Generics, API contract enforcement" },
      { name: "Java", level: "Proficient", desc: "OOP design, Android SDK, multithreaded services" },
      { name: "SQL", level: "Advanced", desc: "Complex joins, indexing, query optimization, migrations" },
      { name: "Python", level: "Applied", desc: "Data processing, ML modeling, scripting & automation" }
    ]
  },
  {
    category: "Frontend & Mobile",
    icon: "Smartphone",
    skills: [
      { name: "React.js", level: "Production", desc: "Custom hooks, Virtual DOM optimization, Context & State" },
      { name: "React Native", level: "Production", desc: "Cross-platform mobile, Native modules, offline storage" },
      { name: "Flutter / Dart", level: "Production", desc: "Multi-flavor builds, BLoC/Provider state, custom painters" },
      { name: "HTML5 / CSS3", level: "Advanced", desc: "Responsive layout, CSS Grid/Flexbox, CSS variables, canvas" },
      { name: "Material-UI", level: "Advanced", desc: "Design systems, thematic styling, accessible UI components" }
    ]
  },
  {
    category: "Backend & Distributed APIs",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: "Production", desc: "Event-driven architecture, RESTful routing, middleware" },
      { name: "GraphQL", level: "Production", desc: "Schema design, resolvers, mutation pipelines, Apollo" },
      { name: "REST APIs", level: "Production", desc: "HTTP status specs, rate limiting, versioning, idempotency" },
      { name: "JWT Authentication", level: "Production", desc: "Stateless security, refresh token rotation, RBAC guards" },
      { name: "WebSockets", level: "Advanced", desc: "Bidirectional sensor streaming, live notifications" }
    ]
  },
  {
    category: "Databases & Offline Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Production", desc: "Aggregation pipeline, hierarchical tree schemas, indexing" },
      { name: "PostgreSQL", level: "Advanced", desc: "ACID transactions, relational schemas, foreign key integrity" },
      { name: "MySQL", level: "Advanced", desc: "Schema normalization, indexing, relational design" },
      { name: "SQLite", level: "Production", desc: "Edge caching, embedded mobile storage, offline queues" }
    ]
  },
  {
    category: "IoT, Telemetry & Vision",
    icon: "Cpu",
    skills: [
      { name: "IoT Sensor Pipelines", level: "Production", desc: "Temperature, humidity, CO2 monitoring & threshold logic" },
      { name: "Offline-First Sync", level: "Production", desc: "Local mutation queue with conflict reconciliation" },
      { name: "OCR Detection", level: "Production", desc: "Meter reading extraction from mobile camera frames" },
      { name: "Hardware Diagnostics", level: "Applied", desc: "Serial packet parsing & spectroscopic sensor validation" }
    ]
  },
  {
    category: "DevOps & Engineering Tooling",
    icon: "GitBranch",
    skills: [
      { name: "Git / GitHub / GitLab", level: "Advanced", desc: "Feature branching, PR review workflows, release tagging" },
      { name: "Docker", level: "Proficient", desc: "Containerization of microservices, local compose environments" },
      { name: "Firebase", level: "Advanced", desc: "Cloud messaging, auth, crashlytics, storage buckets" },
      { name: "VS Code / Linux Tools", level: "Advanced", desc: "Custom debuggers, terminal scripting, build automation" }
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "SMVITM (Shri Madhwa Vadiraja Institute of Technology & Management)",
  location: "Bantakal, Karnataka",
  period: "2020 – 2024",
  cgpa: "8.3 / 10",
  coursework: [
    "Distributed Systems & Cloud Computing",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Computer Networks & Protocols",
    "Software Engineering Methodologies"
  ]
};

export const GRAPHQL_SCHEMA = `
type Query {
  developer(id: ID!): DeveloperProfile
  currentRole: Experience
  allProjects(category: String, tech: String): [Project]!
  liveTelemetry(sensorUnitId: String!): ColdStorageTelemetry!
  offlineSyncMetrics: SyncMetrics!
}

type DeveloperProfile {
  name: String!
  role: String!
  location: String!
  experienceYears: Float!
  currentCompany: String!
  contact: ContactInfo!
  skills: [SkillCategory]!
}

type ColdStorageTelemetry {
  unitId: String!
  chamber: String!
  temperatureCelsius: Float!
  humidityPercentage: Float!
  co2Ppm: Int!
  status: String!
  lastPingMs: Int!
}

type SyncMetrics {
  storageEngine: String!
  pendingMutations: Int!
  reconciliationStrategy: String!
  cloudEndpoint: String!
}
`;

export const GRAPHQL_PRESETS = [
  {
    name: "Get Developer Profile",
    query: `query GetDeveloperProfile {
  developer(id: "ashlesh-kini") {
    name
    role
    location
    experienceYears
    currentCompany
    contact {
      email
      github
      linkedin
    }
  }
}`
  },
  {
    name: "Get IoT Telemetry (Cold Storage)",
    query: `query GetIoTTelemetry {
  liveTelemetry(sensorUnitId: "CS-UDU-09") {
    unitId
    chamber
    temperatureCelsius
    humidityPercentage
    co2Ppm
    status
    lastPingMs
  }
}`
  },
  {
    name: "Get Offline Sync Architecture",
    query: `query GetOfflineSyncArchitecture {
  offlineSyncMetrics {
    storageEngine
    pendingMutations
    reconciliationStrategy
    cloudEndpoint
  }
}`
  },
  {
    name: "Get Flagship Projects",
    query: `query GetFlagshipProjects {
  allProjects(tech: "GraphQL") {
    title
    category
    tech
    architectureHighlight
  }
}`
  }
];
