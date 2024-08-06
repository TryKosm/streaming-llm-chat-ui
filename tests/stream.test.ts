import test from "node:test";
import assert from "node:assert/strict";
import { toSseChunks } from "../server/stream.js";

test("sse chunk format contains done event", () => {
  const value = toSseChunks(["a", "b"]);
  assert.equal(value.includes("event: done"), true);
  assert.equal(value.includes("data: a"), true);
});
