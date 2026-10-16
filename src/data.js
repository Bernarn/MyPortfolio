export const projects = [
  {
    number: '01',
    category: 'Privacy · Machine learning',
    title: 'Cross-Border Fraud Detection',
    description:
      'Designed a federated learning architecture for fraud detection across simulated African mobile money networks, keeping raw transaction data local while coordinating training with FedAvg.',
    stack: ['Python', 'TensorFlow', 'Federated learning'],
  },
  {
    number: '02',
    category: 'Backend · Logistics',
    title: 'Pharmaceutical Inventory & Logistics',
    description:
      'Engineered an order-processing backend with inventory state machines and transactional integrity, using containerized services to model warehouse dispatch and delivery workflows.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    number: '03',
    category: 'Fintech · Security',
    title: 'Credit Card Vault & Encryption Engine',
    description:
      'Implemented field-level AES-256 encryption for payment card data, with role-based access control across client, merchant, and administrator roles.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'AES-256'],
  },
  {
    number: '04',
    category: 'Networking · Security',
    title: 'Network Packet Sniffer & Traffic Analyzer',
    description:
      'Built a real-time traffic inspector that parses raw frames and TCP, UDP, and ICMP headers to flag anomalous payload patterns.',
    stack: ['Python', 'Scapy', 'Raw sockets'],
  },
];

export const experience = [
  {
    date: 'OCT 2025 — JUL 2026',
    role: 'FinTech Research & Backend Engineer',
    organization: 'Interledger Protocol Project · USIU-Africa',
    description:
      'Built ILP-based SDKs and payment routing engines for interoperability across ledger networks. Designed payment gateway interfaces and data schemas, and co-authored architecture documentation for distributed wallet settlement systems.',
  },
  {
    date: 'JUN 2025 — JAN 2026',
    role: 'Web & Infrastructure Developer',
    organization: 'Dicethelifecoach',
    description:
      'Maintained web services and backend authentication endpoints, and diagnosed server configuration bottlenecks.',
  },
  {
    date: 'FEB 2025 — APR 2025',
    role: 'Cybersecurity & Ethical Hacking Intern',
    organization: 'Digissuraka Parhari Foundation · Remote',
    description:
      'Wrote Python test scripts to probe backend services for SQL and command injection vulnerabilities, and monitored simulated network environments to benchmark exploit-prevention modules.',
  },
];

export const toolkit = [
  { title: 'Languages', items: 'Python, Java, JavaScript, TypeScript, Node.js' },
  { title: 'Backend & APIs', items: 'Express.js, FastAPI, REST, GraphQL, gRPC, Interledger Protocol' },
  { title: 'ML & Data', items: 'TensorFlow, scikit-learn, NumPy, Pandas, Matplotlib, FedAvg' },
  { title: 'Infrastructure', items: 'Docker, Linux, Bash, Git' },
  { title: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Redis, Firebase' },
  { title: 'Security', items: 'AES-256, RBAC, SQL injection testing, Scapy' },
];

export const certifications = [
  { name: 'Google Cybersecurity Professional Certificate', provider: 'Coursera' },
  { name: 'Backend Development Career Path', provider: 'Scrimba' },
  { name: 'DataCamp Machine Learning Track', provider: 'DataCamp' },
];
