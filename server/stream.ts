export function toSseChunks(tokens: string[]): string {
  return tokens.map((t) => `data: ${t}\n\n`).join("") + "event: done\ndata: [DONE]\n\n";
}
