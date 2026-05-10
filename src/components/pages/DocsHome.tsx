"use client";

import CodeBlock from "@/components/CodeBlock";
import TabSwitcher from "@/components/TabSwitcher";

export default function DocsHome() {
  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 text-xs font-medium text-neon-cyan mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
          v2.4.0 - Latest Release
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Getting Started with{" "}
          <span className="text-neon-cyan glow-cyan">Lumoxic AI</span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary leading-relaxed max-w-2xl">
          Build next-generation AI applications powered by photon computing.
          Lumoxic AI provides industry-leading inference speeds through our
          proprietary optical processing architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Ultra-Fast", desc: "Sub-millisecond inference via photon-based computation" },
          { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Enterprise Ready", desc: "SOC 2 compliant with 99.99% uptime SLA" },
          { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Developer First", desc: "SDKs for Python and TypeScript with full type support" },
        ].map((card) => (
          <div key={card.title} className="rounded-xl border border-border-dim bg-surface p-5 hover:border-neon-cyan/20 transition-colors glow-border">
            <svg className="h-8 w-8 text-neon-cyan mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
            </svg>
            <h3 className="font-semibold text-text-primary mb-1">{card.title}</h3>
            <p className="text-sm text-text-secondary">{card.desc}</p>
          </div>
        ))}
      </div>
      <section id="installation" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Installation
        </h2>
        <p className="text-text-secondary mb-4">
          Install the Lumoxic AI SDK using your preferred package manager. The SDK supports
          Python 3.9+ and Node.js 18+.
        </p>

        <TabSwitcher
          tabs={[
            {
              label: "Python",
              value: "python",
              content: (
                <CodeBlock
                  code={"# Install via pip\npip install lumoxic-ai\n\n# Or with optional dependencies for async support\npip install lumoxic-ai[async]\n\n# Verify installation\npython -c \"import lumoxic; print(lumoxic.__version__)\""}
                  language="bash"
                  filename="Terminal"
                  showLineNumbers={false}
                />
              ),
            },
            {
              label: "TypeScript / Node.js",
              value: "typescript",
              content: (
                <CodeBlock
                  code={"# Install via npm\nnpm install @lumoxic/sdk\n\n# Or using yarn\nyarn add @lumoxic/sdk\n\n# Or using pnpm\npnpm add @lumoxic/sdk"}
                  language="bash"
                  filename="Terminal"
                  showLineNumbers={false}
                />
              ),
            },
          ]}
        />
      </section>
      <section id="quickstart" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Quick Start
        </h2>
        <p className="text-text-secondary mb-4">
          Get up and running with Lumoxic AI in under 5 minutes. Here is a complete example
          that initializes the client, sends a request to the Photon Engine, and processes the response.
        </p>

        <TabSwitcher
          tabs={[
            {
              label: "Python",
              value: "python",
              content: (
                <CodeBlock
                  code={"from lumoxic import LumoxicClient\\n\\n# Initialize with your API key\\nclient = LumoxicClient(api_key=\"lx-your-api-key\")\\n\\n# Send an inference request to the Photon Engine\\nresponse = client.inference.create(\\n    model=\"photon-v2\",\\n    input={\\n        \"text\": \"Analyze the quantum coherence pattern\",\\n        \"parameters\": {\\n            \"temperature\": 0.7,\\n            \"max_tokens\": 1024,\\n            \"photon_mode\": \"balanced\"\\n        }\\n    }\\n)\\n\\n# Access the result\\nprint(response.output.text)\\nprint(f\"Latency: {response.metrics.latency_ms}ms\")\\nprint(f\"Photon cycles: {response.metrics.photon_cycles}\")"}
                  language="python"
                  filename="quickstart.py"
                />
              ),
            },
            {
              label: "TypeScript",
              value: "typescript",
              content: (
                <CodeBlock
                  code={"import { LumoxicClient } from \"@lumoxic/sdk\";\\n\\n// Initialize with your API key\\nconst client = new LumoxicClient({\\n  apiKey: \"lx-your-api-key\",\\n});\\n\\n// Send an inference request to the Photon Engine\\nconst response = await client.inference.create({\\n  model: \"photon-v2\",\\n  input: {\\n    text: \"Analyze the quantum coherence pattern\",\\n    parameters: {\\n      temperature: 0.7,\\n      maxTokens: 1024,\\n      photonMode: \"balanced\",\\n    },\\n  },\\n});\\n\\n// Access the result\\nconsole.log(response.output.text);\\nconsole.log(\"Latency:\", response.metrics.latencyMs, \"ms\");\\nconsole.log(\"Photon cycles:\", response.metrics.photonCycles);"}
                  language="typescript"
                  filename="quickstart.ts"
                />
              ),
            },
          ]}
        />
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Environment Setup
        </h2>
        <p className="text-text-secondary mb-4">
          Store your API key securely as an environment variable. Never commit API keys to version control.
        </p>
        <CodeBlock
          code={"# Add to your .env file\nLUMOXIC_API_KEY=lx-your-api-key\n\n# The SDK auto-detects the environment variable\n# No need to pass it explicitly"}
          language="bash"
          filename=".env"
          showLineNumbers={false}
        />
        <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
          <div className="flex gap-3">
            <svg className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-amber-400">Security Notice</p>
              <p className="text-sm text-text-secondary mt-1">
                Always use environment variables for API keys. Add <code className="rounded bg-surface px-1.5 py-0.5 text-xs font-mono text-neon-cyan">.env</code> to
                your <code className="rounded bg-surface px-1.5 py-0.5 text-xs font-mono text-neon-cyan">.gitignore</code> file.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Next Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/api-reference", title: "API Reference", desc: "Explore all available endpoints" },
            { href: "/sdk", title: "SDK Guide", desc: "Detailed SDK usage and examples" },
            { href: "/concepts", title: "Core Concepts", desc: "Understand photon computing" },
            { href: "/changelog", title: "Changelog", desc: "Latest updates and releases" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-lg border border-border-dim bg-surface p-4 transition-all hover:border-neon-cyan/30 hover:bg-surface-hover"
            >
              <div>
                <h3 className="font-medium text-text-primary group-hover:text-neon-cyan transition-colors">{link.title}</h3>
                <p className="text-sm text-text-muted mt-0.5">{link.desc}</p>
              </div>
              <svg className="h-5 w-5 text-text-muted group-hover:text-neon-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
