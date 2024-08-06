# Architecture

- `server/stream.ts` handles token-to-SSE transformation.
- `server/index.ts` serves stream endpoint and health response.
- `web/client.ts` subscribes to server events.
