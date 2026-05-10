"use client";

const changelog = [
  {
    version: "2.4.0",
    date: "May 10, 2026",
    tag: "Latest",
    features: [
      "Added Photon V2 Turbo model with 40% lower latency for simple operations",
      "New streaming inference API with real-time token-by-token output",
      "TypeScript SDK now supports Deno and Bun runtimes",
      "Batch API supports webhook notifications on completion",
    ],
    fixes: [
      "Fixed rare race condition in concurrent embedding requests",
      "Resolved timeout issues when using custom proxy configurations",
      "Corrected token counting for multi-byte Unicode characters",
    ],
    breaking: [],
  },
  {
    version: "2.3.0",
    date: "April 15, 2026",
    tag: "",
    features: [
      "Introduced photon-embed-v1 model for high-dimensional embeddings",
      "Added retry configuration options to both Python and TypeScript SDKs",
      "New /v2/usage endpoint for monitoring API consumption",
      "Support for custom base URLs for on-premise deployments",
    ],
    fixes: [
      "Fixed memory leak in Python async client when using streaming",
      "Improved error messages for invalid API key formats",
    ],
    breaking: [],
  },
  {
    version: "2.2.0",
    date: "March 8, 2026",
    tag: "",
    features: [
      "Binary Bounce Engine mode selection: balanced, precision, turbo",
      "Added request caching with configurable TTL",
      "Python SDK async support with AsyncLumoxicClient",
      "New /v2/cache/:key endpoint for cache invalidation",
    ],
    fixes: [
      "Fixed JSON parsing error for large response payloads (>10MB)",
      "Resolved SSL certificate verification issues on certain Linux distributions",
      "Corrected rate limit header parsing in TypeScript SDK",
    ],
    breaking: ["Removed deprecated /v1/* endpoints. Migrate to /v2/* before upgrading."],
  },
  {
    version: "2.1.0",
    date: "February 1, 2026",
    tag: "",
    features: [
      "Photon V2 model release with 2x context window (8192 tokens)",
      "Added batch inference API for processing multiple requests",
      "TypeScript SDK published to npm as @lumoxic/sdk",
      "New dashboard for real-time monitoring at console.lumoxicai.me",
    ],
    fixes: [
      "Fixed authentication token refresh logic in long-running sessions",
      "Improved connection pooling for high-throughput scenarios",
    ],
    breaking: [],
  },
  {
    version: "2.0.0",
    date: "January 5, 2026",
    tag: "",
    features: [
      "Complete API redesign with versioned endpoints (/v2/*)",
      "Introduced the Binary Bounce Engine for 10x faster inference",
      "New Python SDK with full type annotations and IDE support",
      "Enterprise SSO authentication support",
      "SOC 2 Type II certification achieved",
    ],
    fixes: [],
    breaking: [
      "All /v1/* endpoints deprecated and scheduled for removal in v2.2.0",
      "API key format changed from lmx-* to lx-*",
      "Response format restructured: output field replaces result field",
    ],
  },
  {
    version: "1.5.0",
    date: "November 20, 2025",
    tag: "",
    features: [
      "Initial photon computing inference API",
      "Basic Python client library",
      "Rate limiting with configurable quotas",
    ],
    fixes: [
      "Stabilized optical processor temperature management",
    ],
    breaking: [],
  },
];

export default function Changelog() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Change<span className="text-neon-cyan">log</span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Track all releases, features, bug fixes, and breaking changes for the Lumoxic AI platform.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-0.5 timeline-line opacity-20" />

        <div className="space-y-8">
          {changelog.map((release, idx) => (
            <div key={release.version} className="relative pl-10">
              {/* Timeline dot */}
              <div className={"absolute left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 " + (idx === 0 ? "bg-neon-cyan border-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.5)]" : "bg-deep-space-lighter border-border-dim")} />

              <div className="rounded-xl border border-border-dim bg-surface p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-xl font-bold text-text-primary">v{release.version}</h2>
                  <span className="text-sm text-text-muted">{release.date}</span>
                  {release.tag && (
                    <span className="rounded-full bg-neon-cyan/10 border border-neon-cyan/20 px-2.5 py-0.5 text-xs font-medium text-neon-cyan">
                      {release.tag}
                    </span>
                  )}
                </div>

                {release.features.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      Features
                    </h3>
                    <ul className="space-y-1.5">
                      {release.features.map((f, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-2">
                          <span className="text-emerald-400/60 mt-1.5 flex-shrink-0">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {release.fixes.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-neon-blue mb-2 flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                      Bug Fixes
                    </h3>
                    <ul className="space-y-1.5">
                      {release.fixes.map((f, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-2">
                          <span className="text-neon-blue/60 mt-1.5 flex-shrink-0">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {release.breaking.length > 0 && (
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                    <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-1.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" /></svg>
                      Breaking Changes
                    </h3>
                    <ul className="space-y-1.5">
                      {release.breaking.map((f, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-2">
                          <span className="text-red-400/60 mt-1.5 flex-shrink-0">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
