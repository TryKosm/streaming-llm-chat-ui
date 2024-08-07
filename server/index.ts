import http from "node:http";
import { toSseChunks } from "./stream.js";

const server = http.createServer((req, res) => {
  if (req.url === "/stream" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });
    res.end(toSseChunks(["hello", "from", "server"]));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ok");
});

server.listen(3000);
