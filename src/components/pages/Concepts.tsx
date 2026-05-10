"use client";

import Collapsible from "@/components/Collapsible";

function PhotonDiagram() {
  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-2xl mx-auto my-6" fill="none">
      <defs>
        <linearGradient id="photonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="1" y="1" width="598" height="198" rx="8" stroke="#1e293b" strokeWidth="1" fill="#0a1628" />
      
      {/* Input */}
      <rect x="30" y="60" width="100" height="80" rx="6" fill="#0f1729" stroke="#00f0ff" strokeWidth="1.5" filter="url(#glow)" />
      <text x="80" y="95" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="600">Input</text>
      <text x="80" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9">Data Stream</text>
      
      {/* Arrow 1 */}
      <line x1="140" y1="100" x2="180" y2="100" stroke="url(#photonGrad)" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M175 95 L185 100 L175 105" fill="#00f0ff" />
      
      {/* Photon Encoder */}
      <rect x="190" y="45" width="120" height="110" rx="6" fill="#0f1729" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="250" y="78" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="600">Photon</text>
      <text x="250" y="95" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="600">Encoder</text>
      <text x="250" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">Optical Signal</text>
      <text x="250" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">Conversion</text>
      
      {/* Arrow 2 */}
      <line x1="320" y1="100" x2="360" y2="100" stroke="url(#photonGrad)" strokeWidth="2" />
      <path d="M355 95 L365 100 L355 105" fill="#a855f7" />
      
      {/* Processing Core */}
      <rect x="370" y="45" width="120" height="110" rx="6" fill="#0f1729" stroke="#a855f7" strokeWidth="1.5" />
      <text x="430" y="78" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="600">Optical</text>
      <text x="430" y="95" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="600">Processor</text>
      <text x="430" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9">Light-speed</text>
      <text x="430" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">Computation</text>
      
      {/* Arrow 3 */}
      <line x1="500" y1="100" x2="530" y2="100" stroke="url(#photonGrad)" strokeWidth="2" />
      <path d="M525 95 L535 100 L525 105" fill="#00f0ff" />
      
      {/* Output */}
      <rect x="540" y="60" width="40" height="80" rx="6" fill="#0f1729" stroke="#00f0ff" strokeWidth="1.5" filter="url(#glow)" />
      <text x="560" y="105" textAnchor="middle" fill="#00f0ff" fontSize="10" fontWeight="600" transform="rotate(-90 560 105)">Output</text>
      
      {/* Label */}
      <text x="300" y="185" textAnchor="middle" fill="#64748b" fontSize="10">Photon Computing Pipeline</text>
    </svg>
  );
}

function BBEDiagram() {
  return (
    <svg viewBox="0 0 600 220" className="w-full max-w-2xl mx-auto my-6" fill="none">
      <rect x="1" y="1" width="598" height="218" rx="8" stroke="#1e293b" strokeWidth="1" fill="#0a1628" />
      
      {/* Bounce nodes */}
      {[
        { x: 80, y: 50, label: "Node A", color: "#00f0ff" },
        { x: 250, y: 130, label: "Node B", color: "#3b82f6" },
        { x: 420, y: 50, label: "Node C", color: "#a855f7" },
        { x: 520, y: 130, label: "Result", color: "#34d399" },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="30" fill="#0f1729" stroke={node.color} strokeWidth="1.5" />
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill={node.color} fontSize="10" fontWeight="600">{node.label}</text>
        </g>
      ))}
      
      {/* Bounce paths */}
      <path d="M110 50 Q165 20 250 130" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <path d="M280 130 Q350 200 420 50" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <path d="M450 50 Q485 90 520 130" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      
      {/* Binary labels */}
      <text x="165" y="60" fill="#00f0ff" fontSize="9" opacity="0.7">1 0 1 1</text>
      <text x="340" y="100" fill="#3b82f6" fontSize="9" opacity="0.7">0 1 1 0</text>
      <text x="470" y="80" fill="#a855f7" fontSize="9" opacity="0.7">1 1 0 1</text>
      
      <text x="300" y="205" textAnchor="middle" fill="#64748b" fontSize="10">Binary Bounce Engine - Signal Propagation</text>
    </svg>
  );
}

function LNBEDiagram() {
  return (
    <svg viewBox="0 0 600 280" className="w-full max-w-2xl mx-auto my-6" fill="none">
      <rect x="1" y="1" width="598" height="278" rx="8" stroke="#1e293b" strokeWidth="1" fill="#0a1628" />
      
      {/* Top layer - API */}
      <rect x="150" y="20" width="300" height="40" rx="6" fill="#0f1729" stroke="#00f0ff" strokeWidth="1" />
      <text x="300" y="45" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="600">API Gateway Layer</text>
      
      {/* Middle layer - Processing */}
      <rect x="50" y="90" width="150" height="50" rx="6" fill="#0f1729" stroke="#3b82f6" strokeWidth="1" />
      <text x="125" y="118" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">Load Balancer</text>
      
      <rect x="225" y="90" width="150" height="50" rx="6" fill="#0f1729" stroke="#3b82f6" strokeWidth="1" />
      <text x="300" y="118" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">Queue Manager</text>
      
      <rect x="400" y="90" width="150" height="50" rx="6" fill="#0f1729" stroke="#3b82f6" strokeWidth="1" />
      <text x="475" y="118" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">Cache Layer</text>
      
      {/* Bottom layer - Engines */}
      <rect x="80" y="170" width="120" height="50" rx="6" fill="#0f1729" stroke="#a855f7" strokeWidth="1" />
      <text x="140" y="198" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="600">BBE Core 1</text>
      
      <rect x="240" y="170" width="120" height="50" rx="6" fill="#0f1729" stroke="#a855f7" strokeWidth="1" />
      <text x="300" y="198" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="600">BBE Core 2</text>
      
      <rect x="400" y="170" width="120" height="50" rx="6" fill="#0f1729" stroke="#a855f7" strokeWidth="1" />
      <text x="460" y="198" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="600">BBE Core N</text>
      
      {/* Connecting lines */}
      <line x1="300" y1="60" x2="125" y2="90" stroke="#1e293b" strokeWidth="1" />
      <line x1="300" y1="60" x2="300" y2="90" stroke="#1e293b" strokeWidth="1" />
      <line x1="300" y1="60" x2="475" y2="90" stroke="#1e293b" strokeWidth="1" />
      
      <line x1="125" y1="140" x2="140" y2="170" stroke="#1e293b" strokeWidth="1" />
      <line x1="300" y1="140" x2="300" y2="170" stroke="#1e293b" strokeWidth="1" />
      <line x1="475" y1="140" x2="460" y2="170" stroke="#1e293b" strokeWidth="1" />
      
      {/* Storage */}
      <rect x="200" y="240" width="200" height="30" rx="6" fill="#0f1729" stroke="#34d399" strokeWidth="1" />
      <text x="300" y="260" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="600">Photon State Store</text>
      
      <line x1="140" y1="220" x2="250" y2="240" stroke="#1e293b" strokeWidth="1" />
      <line x1="300" y1="220" x2="300" y2="240" stroke="#1e293b" strokeWidth="1" />
      <line x1="460" y1="220" x2="350" y2="240" stroke="#1e293b" strokeWidth="1" />
    </svg>
  );
}

export default function Concepts() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Core <span className="text-neon-purple">Concepts</span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Understand the foundational technologies that power the Lumoxic AI platform:
          photon computing, the Binary Bounce Engine, and our LNBE architecture.
        </p>
      </div>

      <section id="photon" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Photon Computing
        </h2>
        <p className="text-text-secondary mb-4">
          Photon computing leverages the properties of light to perform computations at speeds
          unattainable by traditional silicon-based processors. Instead of electrons flowing
          through transistors, photon computing uses optical signals that travel at the speed
          of light through specially designed waveguides and interferometers.
        </p>

        <PhotonDiagram />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Collapsible title="How It Works" defaultOpen={true}>
            <div className="text-sm text-text-secondary space-y-2">
              <p>1. <strong className="text-text-primary">Data Encoding:</strong> Digital input is converted into optical signals using photon modulators operating at terahertz frequencies.</p>
              <p>2. <strong className="text-text-primary">Optical Processing:</strong> Light signals pass through programmable interferometer arrays that perform matrix multiplications in constant time.</p>
              <p>3. <strong className="text-text-primary">Result Decoding:</strong> Optical outputs are converted back to digital signals via photodetectors with near-zero latency.</p>
            </div>
          </Collapsible>
          <Collapsible title="Key Advantages" defaultOpen={true}>
            <div className="text-sm text-text-secondary space-y-2">
              <p><strong className="text-neon-cyan">Speed:</strong> Light-speed computation eliminates electronic bottlenecks, achieving sub-millisecond inference.</p>
              <p><strong className="text-neon-cyan">Efficiency:</strong> Optical processing consumes up to 100x less energy than equivalent GPU computations.</p>
              <p><strong className="text-neon-cyan">Parallelism:</strong> Multiple wavelengths carry independent data streams simultaneously through the same waveguide.</p>
            </div>
          </Collapsible>
        </div>
      </section>

      <section id="bbe" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Binary Bounce Engine (BBE)
        </h2>
        <p className="text-text-secondary mb-4">
          The Binary Bounce Engine is Lumoxic AI proprietary signal processing architecture. It
          uses a novel approach where binary-encoded photon signals "bounce" between processing
          nodes, accumulating computational results at each reflection point.
        </p>

        <BBEDiagram />

        <Collapsible title="Technical Deep Dive" defaultOpen={true}>
          <div className="text-sm text-text-secondary space-y-3">
            <p>
              The BBE operates on the principle of <strong className="text-text-primary">constructive interference</strong>.
              When binary-encoded light signals reflect off specially coated mirrors within the processing chamber,
              they interact with other signals in predictable ways that naturally compute logical operations.
            </p>
            <p>
              Each "bounce" represents a computation step. A single photon signal can bounce up to 1,000 times
              within a 10-centimeter chamber in under 3 nanoseconds, enabling complex multi-step computations
              at extraordinary speeds.
            </p>
            <p>
              The engine supports three operating modes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-neon-cyan">Balanced:</strong> Default mode optimizing for speed and accuracy tradeoffs</li>
              <li><strong className="text-neon-cyan">Precision:</strong> Maximum bounce count for highest accuracy on complex tasks</li>
              <li><strong className="text-neon-cyan">Turbo:</strong> Reduced bounce count for ultra-low latency simple operations</li>
            </ul>
          </div>
        </Collapsible>
      </section>

      <section id="lnbe" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-purple">#</span> LNBE Architecture
        </h2>
        <p className="text-text-secondary mb-4">
          The Lumoxic Neural Bounce Engine (LNBE) architecture is the complete system that powers
          the Lumoxic AI platform. It combines multiple BBE cores with intelligent routing,
          caching, and state management to deliver enterprise-grade AI inference at scale.
        </p>

        <LNBEDiagram />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { title: "API Gateway", desc: "Routes incoming requests, handles auth, rate limiting, and request validation.", color: "text-neon-cyan" },
            { title: "Queue Manager", desc: "Distributes work across BBE cores using priority-based scheduling with photon affinity.", color: "text-neon-blue" },
            { title: "Photon State Store", desc: "Persists intermediate computation states for fault tolerance and result caching.", color: "text-emerald-400" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border-dim bg-surface p-4">
              <h3 className={"font-semibold mb-1 " + item.color}>{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
