"use client";

import CodeBlock from "@/components/CodeBlock";
import Collapsible from "@/components/Collapsible";
import { useState } from "react";

const endpoints = [
  {
    method: "POST",
    path: "/v2/inference",
    description: "Run a photon-accelerated inference request",
    requestBody: JSON.stringify({ model: "photon-v2", input: { text: "Analyze data patterns", parameters: { temperature: 0.7, max_tokens: 1024, photon_mode: "balanced" } } }, null, 2),
    responseBody: JSON.stringify({ id: "inf_abc123", status: "completed", output: { text: "Analysis complete...", tokens_used: 847 }, metrics: { latency_ms: 12.4, photon_cycles: 3, model: "photon-v2" } }, null, 2),
  },
  {
    method: "GET",
    path: "/v2/models",
    description: "List all available photon models",
    requestBody: null,
    responseBody: JSON.stringify({ models: [ { id: "photon-v2", name: "Photon V2", status: "active", max_tokens: 8192 }, { id: "photon-v2-turbo", name: "Photon V2 Turbo", status: "active", max_tokens: 4096 }, { id: "photon-lite", name: "Photon Lite", status: "active", max_tokens: 2048 } ] }, null, 2),
  },
  {
    method: "POST",
    path: "/v2/embeddings",
    description: "Generate photon-optimized embeddings for text input",
    requestBody: JSON.stringify({ model: "photon-embed-v1", input: ["Quantum coherence in optical systems"], encoding_format: "float" }, null, 2),
    responseBody: JSON.stringify({ data: [{ index: 0, embedding: [0.0023, -0.0142, 0.0271, "...1536 dims"], object: "embedding" }], model: "photon-embed-v1", usage: { prompt_tokens: 6, total_tokens: 6 } }, null, 2),
  },
  {
    method: "POST",
    path: "/v2/batch",
    description: "Submit a batch of inference requests for async processing",
    requestBody: JSON.stringify({ requests: [{ id: "req_1", model: "photon-v2", input: { text: "First request" } }, { id: "req_2", model: "photon-v2", input: { text: "Second request" } }], webhook_url: "https://your-app.com/webhook" }, null, 2),
    responseBody: JSON.stringify({ batch_id: "batch_xyz789", status: "queued", total_requests: 2, estimated_completion: "2026-05-10T12:30:00Z" }, null, 2),
  },
  {
    method: "GET",
    path: "/v2/batch/:id",
    description: "Check the status of a batch job",
    requestBody: null,
    responseBody: JSON.stringify({ batch_id: "batch_xyz789", status: "completed", total_requests: 2, completed: 2, results: [{ id: "req_1", status: "completed" }, { id: "req_2", status: "completed" }] }, null, 2),
  },
  {
    method: "GET",
    path: "/v2/usage",
    description: "Retrieve API usage statistics and quotas",
    requestBody: null,
    responseBody: JSON.stringify({ period: "2026-05", requests: { total: 14523, inference: 12100, embeddings: 2423 }, tokens: { input: 2450000, output: 1230000 }, quota: { requests_limit: 100000 } }, null, 2),
  },
  {
    method: "DELETE",
    path: "/v2/cache/:key",
    description: "Invalidate a cached inference result",
    requestBody: null,
    responseBody: JSON.stringify({ deleted: true, key: "cache_abc123" }, null, 2),
  },
];

const errorCodes = [
  { code: 400, name: "Bad Request", description: "The request body is malformed or missing required fields." },
  { code: 401, name: "Unauthorized", description: "Invalid or missing API key in the Authorization header." },
  { code: 403, name: "Forbidden", description: "Your API key does not have permission for this resource." },
  { code: 404, name: "Not Found", description: "The requested resource or endpoint does not exist." },
  { code: 429, name: "Rate Limited", description: "Too many requests. Check the Retry-After header." },
  { code: 500, name: "Internal Error", description: "An unexpected error occurred in the Photon Engine." },
  { code: 503, name: "Service Unavailable", description: "The Photon Engine is temporarily under maintenance." },
];

export default function ApiReference() {
  const [filter, setFilter] = useState("");

  const filteredEndpoints = endpoints.filter(
    (ep) =>
      ep.path.toLowerCase().includes(filter.toLowerCase()) ||
      ep.description.toLowerCase().includes(filter.toLowerCase()) ||
      ep.method.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          API <span className="text-neon-blue">Reference</span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Complete reference for the Lumoxic AI REST API. All endpoints require authentication via Bearer token.
        </p>
      </div>

      <section id="auth" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Authentication
        </h2>
        <p className="text-text-secondary mb-4">
          All API requests require a valid API key passed in the Authorization header.
        </p>
        <CodeBlock
          code={"curl -X POST https://api.lumoxicai.me/v2/inference \\\n  -H \"Authorization: Bearer lx-your-api-key\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"model\": \"photon-v2\"}'"}
          language="bash"
          filename="Authentication Example"
          showLineNumbers={false}
        />
        <p className="mt-3 text-sm text-text-secondary">
          Base URL: <code className="rounded bg-surface px-1.5 py-0.5 text-xs font-mono text-neon-cyan">https://api.lumoxicai.me</code>
        </p>
      </section>

      <section id="endpoints" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Endpoints
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter endpoints..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md rounded-lg border border-border-dim bg-surface py-2 px-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/20"
          />
        </div>

        <div className="space-y-3">
          {filteredEndpoints.map((ep, idx) => (
            <Collapsible
              key={idx}
              title={ep.path}
              badge={ep.method}
              badgeColor={ep.method === "GET" ? "green" : ep.method === "POST" ? "blue" : ep.method === "DELETE" ? "red" : "yellow"}
              defaultOpen={idx === 0}
            >
              <p className="text-sm text-text-secondary mb-3">{ep.description}</p>
              {ep.requestBody && (
                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase text-text-muted mb-1">Request Body</p>
                  <CodeBlock code={ep.requestBody} language="json" showLineNumbers={false} />
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase text-text-muted mb-1">Response</p>
                <CodeBlock code={ep.responseBody} language="json" showLineNumbers={false} />
              </div>
            </Collapsible>
          ))}
        </div>
      </section>

      <section id="errors" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-neon-blue">#</span> Error Codes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-dim">
                <th className="py-3 pr-4 text-left font-semibold text-text-muted">Code</th>
                <th className="py-3 pr-4 text-left font-semibold text-text-muted">Name</th>
                <th className="py-3 text-left font-semibold text-text-muted">Description</th>
              </tr>
            </thead>
            <tbody>
              {errorCodes.map((err) => (
                <tr key={err.code} className="border-b border-border-dim/50">
                  <td className="py-3 pr-4">
                    <code className={"rounded px-1.5 py-0.5 text-xs font-mono " + (err.code < 500 ? "bg-amber-500/10 text-amber-400" : "bg-red-500/10 text-red-400")}>
                      {err.code}
                    </code>
                  </td>
                  <td className="py-3 pr-4 text-text-primary font-medium">{err.name}</td>
                  <td className="py-3 text-text-secondary">{err.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
