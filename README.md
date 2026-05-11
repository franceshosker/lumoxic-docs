# Lumoxic Docs

API documentation for [Lumoxic AI](https://lumoxicai.me).

## Base URL

```
https://api.lumoxicai.me/v1
```

## Authentication

```
Authorization: Bearer lmx_your_api_key
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/optimize` | Upload and optimize an ONNX model |
| GET | `/v1/jobs/{id}` | Check job status |
| GET | `/v1/jobs/{id}/result` | Full optimization results |
| GET | `/v1/models/{id}/download` | Download optimized model |
| POST | `/v1/benchmark` | Benchmark without optimizing |
| GET | `/v1/health` | Health check |
| GET | `/v1/usage` | Account usage and quota |

## Example Response

```json
{
  "status": "completed",
  "before": { "size_mb": 97.8, "latency_ms": 84 },
  "after": { "size_mb": 12.1, "latency_ms": 11 },
  "delta": { "size_reduction": "8.1x", "speedup": "7.6x" }
}
```

## Rate Limits

| Plan | Requests/min | Max Model |
|------|-------------|-----------|
| Free | 10 | 500MB |
| Pro | 60 | 5GB |
| Enterprise | Unlimited | Unlimited |

## SDKs

- [Python SDK](https://github.com/franceshosker/lumoxic-sdk)
- [CLI](https://github.com/franceshosker/lumoxic-cli)

(c) 2026 Lumoxic AI.