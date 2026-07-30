import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");

test("maps hyphenated editorial routes to their camel-case content keys", () => {
  assert.match(app, /"how-to-choose": "howToChoose"/);
  assert.match(app, /"for-trade": "forTrade"/);
  assert.match(app, /text\[editorialContentKeys\[page\.page\]\]/);
});
