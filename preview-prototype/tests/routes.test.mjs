import assert from "node:assert/strict";
import test from "node:test";
import { getRoute, withLocalePath } from "../src/routes.js";
import { content, stoneFields } from "../src/content.js";
import { previewStones } from "../src/preview-stones.js";

test("maps every public-preview path and preserves the NL semantic path", () => {
  assert.deepEqual(getRoute("/stones"), { page: "stones" });
  assert.deepEqual(getRoute("/nl/stones/RUB-001"), { page: "stone-detail", stoneId: "RUB-001" });
  assert.deepEqual(getRoute("/missing"), { page: "not-found" });
  assert.equal(withLocalePath("/stones/RUB-001", "nl"), "/nl/stones/RUB-001");
  assert.equal(withLocalePath("/nl/about", "en"), "/about");
});

test("defines bilingual copy and complete preview facts without commercial fields", () => {
  for (const locale of ["en", "nl"]) assert.ok(content[locale].pages.stones.heading);
  for (const field of stoneFields) assert.ok(Object.hasOwn(previewStones[0].facts, field));
  assert.doesNotMatch(JSON.stringify(previewStones), /price|cart|checkout|payment|reservation|availability|purchase|order/i);
});
