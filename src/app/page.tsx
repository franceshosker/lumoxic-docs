"use client";
import { useState } from "react";

const installSteps = [
  { cmd: "npm install @lumoxic/sdk", desc: "Install the Lumoxic SDK" },
  { cmd: "import { LumoxicClient } from '@lumoxic/sdk'", desc: "Import in your project" },
  { cmd: "const client = new LumoxicClient({ apiKey: 'lmx_sk_...' })", desc: "Initialize client" },
];

const quickstart = `import { LumoxicClient } from '@lumoxic/sdk'

const client = new LumoxicClient({
  apiKey: process.env.LUMOXIC_API_KEY,
  model: 'LNBE-Base-v1'
})

// Process photon data
const result = await client.photon.process({
  wavelength: 450,  // nm
  angle: 37,        // degrees
  bounces: 8
})

console.log(result.binary)    // "10110010"
console.log(result.accuracy)  // 0.9978
console.log(result.energy)    // 0.847 lm/W`;

export default function DocsHome() {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#e2e8f0] mb-3">Lumoxic AI Documentation</h1>
        <p className="text-lg text-[#94a3b8]">
          Build with luminous energy computing. Convert light into data using the Binary Bounce Engine.
        </p>
      </div>

      <div className="glass-panel p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#e2e8f0] mb-4">Quick Start</h2>
        <div className="space-y-3">
          {installSteps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[rgba(0,240,255,0.1)] text-[#00f0ff] text-xs flex items-center justify-center font-mono">{i + 1}</span>
              <div className="flex-1">
                <code className="text-sm font-mono text-[#00f0ff] bg-[rgba(0,0,0,0.3)] px-3 py-1.5 rounded inline-block">{s.cmd}</code>
                <p className="text-xs text-[#64748b] mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-panel overflow-hidden mb-8">
        <div className="flex items-center justify-between px-4 py-2 bg-[rgba(0,0,0,0.3)] border-b border-[rgba(0,240,255,0.08)]">
          <span className="text-xs font-mono text-[#64748b]">example.ts</span>
          <button onClick={() => copy(quickstart)} className="text-xs font-mono text-[#00f0ff] hover:underline">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
          <code className="text-[#e2e8f0]">{quickstart}</code>
        </pre>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: "API Reference", desc: "Explore all API endpoints for photon processing, model management, and binary conversion.", href: "/api-reference" },
          { title: "SDK Guide", desc: "Learn to use the Python and TypeScript SDKs with code examples and best practices.", href: "/sdk" },
          { title: "Concepts", desc: "Understand Binary Bounce Engine, photon processing pipeline, and LNBE architecture.", href: "/concepts" },
        ].map((card) => (
          <a key={card.title} href={card.href} className="glass-panel p-5 hover:border-[rgba(0,240,255,0.3)] transition-colors group">
            <h3 className="text-sm font-semibold text-[#e2e8f0] mb-2 group-hover:text-[#00f0ff] transition-colors">{card.title}</h3>
            <p className="text-xs text-[#64748b] leading-relaxed">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
