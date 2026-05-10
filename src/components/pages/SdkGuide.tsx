"use client";

import CodeBlock from "@/components/CodeBlock";
import TabSwitcher from "@/components/TabSwitcher";

export default function SdkGuide() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          SDK <span className="text-neon-purple">Guide</span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Official SDKs for Python and TypeScript. Fully typed, with built-in retry logic,
          streaming support, and async capabilities.
        </p>
      </div>

      <section id="python" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Client Initialization
        </h2>
        <p className="text-text-secondary mb-4">
          Initialize the Lumoxic client with your API key. The SDK supports both synchronous and
          asynchronous usage patterns.
        </p>
        <TabSwitcher
          tabs={[
            { label: "Python", value: "python", content: <CodeBlock code={"from lumoxic import LumoxicClient\n\n# Initialize the client\nclient = LumoxicClient(\n    api_key=\"lx-your-api-key\",  # or set LUMOXIC_API_KEY env var\n    base_url=\"https://api.lumoxicai.me\",  # optional, defaults to production\n    timeout=30,  # request timeout in seconds\n    max_retries=3,  # automatic retry on transient errors\n)"} language="python" filename="client.py" /> },
            { label: "TypeScript", value: "typescript", content: <CodeBlock code={"import { LumoxicClient } from \"@lumoxic/sdk\";\n\n// Initialize the client\nconst client = new LumoxicClient({\n  apiKey: \"lx-your-api-key\",  // or set LUMOXIC_API_KEY env var\n  baseUrl: \"https://api.lumoxicai.me\",  // optional\n  timeout: 30000,  // request timeout in ms\n  maxRetries: 3,  // automatic retry on transient errors\n});"} language="typescript" filename="client.ts" /> },
          ]}
        />
      </section>

      <section className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Inference
        </h2>
        <p className="text-text-secondary mb-4">
          Run inference requests with support for streaming and fine-grained parameter control.
        </p>
        <TabSwitcher
          tabs={[
            { label: "Python", value: "python", content: <CodeBlock code={"# Simple inference\nresponse = client.inference.create(\n    model=\"photon-v2\",\n    input={\"text\": \"Analyze this pattern\"}\n)\nprint(response.output.text)\n\n# Streaming inference\nfor chunk in client.inference.stream(\n    model=\"photon-v2\",\n    input={\"text\": \"Generate a detailed analysis\"}\n):\n    print(chunk.delta, end=\"\", flush=True)\n\n# With full parameters\nresponse = client.inference.create(\n    model=\"photon-v2-turbo\",\n    input={\n        \"text\": \"Complex analysis task\",\n        \"parameters\": {\n            \"temperature\": 0.3,\n            \"max_tokens\": 2048,\n            \"photon_mode\": \"precision\",\n            \"top_p\": 0.95,\n        }\n    }\n)"} language="python" filename="inference.py" /> },
            { label: "TypeScript", value: "typescript", content: <CodeBlock code={"// Simple inference\nconst response = await client.inference.create({\n  model: \"photon-v2\",\n  input: { text: \"Analyze this pattern\" },\n});\nconsole.log(response.output.text);\n\n// Streaming inference\nconst stream = await client.inference.stream({\n  model: \"photon-v2\",\n  input: { text: \"Generate a detailed analysis\" },\n});\nfor await (const chunk of stream) {\n  process.stdout.write(chunk.delta);\n}\n\n// With full parameters\nconst result = await client.inference.create({\n  model: \"photon-v2-turbo\",\n  input: {\n    text: \"Complex analysis task\",\n    parameters: {\n      temperature: 0.3,\n      maxTokens: 2048,\n      photonMode: \"precision\",\n      topP: 0.95,\n    },\n  },\n});"} language="typescript" filename="inference.ts" /> },
          ]}
        />
      </section>

      <section className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Async Support (Python)
        </h2>
        <p className="text-text-secondary mb-4">
          The Python SDK includes an async client for concurrent request handling with asyncio.
        </p>
        <CodeBlock code={"import asyncio\nfrom lumoxic import AsyncLumoxicClient\n\nasync def main():\n    client = AsyncLumoxicClient(api_key=\"lx-your-api-key\")\n\n    # Concurrent requests\n    tasks = [\n        client.inference.create(\n            model=\"photon-v2\",\n            input={\"text\": f\"Request {i}\"}\n        )\n        for i in range(5)\n    ]\n    results = await asyncio.gather(*tasks)\n\n    for r in results:\n        print(r.output.text)\n\n    await client.close()\n\nasyncio.run(main())"} language="python" filename="async_example.py" />
      </section>

      <section id="typescript" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Embeddings
        </h2>
        <p className="text-text-secondary mb-4">
          Generate photon-optimized embeddings for semantic search, clustering, and retrieval tasks.
        </p>
        <TabSwitcher
          tabs={[
            { label: "Python", value: "python", content: <CodeBlock code={"# Generate embeddings\nresponse = client.embeddings.create(\n    model=\"photon-embed-v1\",\n    input=[\"First document\", \"Second document\"],\n    encoding_format=\"float\"\n)\n\nfor item in response.data:\n    print(f\"Embedding {item.index}: {len(item.embedding)} dimensions\")"} language="python" filename="embeddings.py" /> },
            { label: "TypeScript", value: "typescript", content: <CodeBlock code={"// Generate embeddings\nconst embeddings = await client.embeddings.create({\n  model: \"photon-embed-v1\",\n  input: [\"First document\", \"Second document\"],\n  encodingFormat: \"float\",\n});\n\nfor (const item of embeddings.data) {\n  console.log(`Embedding ${item.index}: ${item.embedding.length} dimensions`);\n}"} language="typescript" filename="embeddings.ts" /> },
          ]}
        />
      </section>

      <section id="config" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <span className="text-neon-purple">#</span> Advanced Configuration
        </h2>
        <p className="text-text-secondary mb-4">
          Customize retry behavior, logging, proxy settings, and more.
        </p>
        <TabSwitcher
          tabs={[
            { label: "Python", value: "python", content: <CodeBlock code={"# Custom configuration\nfrom lumoxic import LumoxicClient, RetryConfig, LogLevel\n\nclient = LumoxicClient(\n    api_key=\"lx-your-api-key\",\n    retry=RetryConfig(\n        max_retries=5,\n        backoff_factor=0.5,\n        retry_on=[429, 500, 503],\n    ),\n    log_level=LogLevel.DEBUG,\n    proxy=\"http://proxy.example.com:8080\",\n)"} language="python" filename="config.py" /> },
            { label: "TypeScript", value: "typescript", content: <CodeBlock code={"// Custom configuration\nimport { LumoxicClient, LogLevel } from \"@lumoxic/sdk\";\n\nconst client = new LumoxicClient({\n  apiKey: \"lx-your-api-key\",\n  retry: {\n    maxRetries: 5,\n    backoffFactor: 0.5,\n    retryOn: [429, 500, 503],\n  },\n  logLevel: LogLevel.DEBUG,\n  proxy: \"http://proxy.example.com:8080\",\n});"} language="typescript" filename="config.ts" /> },
          ]}
        />
      </section>
    </div>
  );
}
