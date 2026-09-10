import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { COOKIE_PATH, LEGAL_PATH, PRIVACY_PATH, isKnownRoute } from "../src/routes.js";
import { copy } from "../src/content.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/pages/HomePage.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("GEM-005 legal preview exposes readable company, privacy and cookie routes without launch claims", () => {
  assert.deepEqual([LEGAL_PATH, PRIVACY_PATH, COOKIE_PATH], ["/legal", "/privacy", "/cookies"]);
  for (const path of [LEGAL_PATH, PRIVACY_PATH, COOKIE_PATH]) assert.equal(isKnownRoute(path), true);
  assert.match(app, /LegalPage/);
  assert.match(app, /\[LEGAL_PATH, PRIVACY_PATH, COOKIE_PATH\]\.includes\(path\)/);
  assert.match(home, /LEGAL_PATH/);
  assert.match(home, /PRIVACY_PATH/);
  assert.match(home, /COOKIE_PATH/);
  assert.equal(copy.en.legal.previewNotice, "Local preview — company, privacy and cookie details must be confirmed before publication.");
  assert.equal(copy.nl.legal.previewNotice, "Lokale preview — bedrijfs-, privacy- en cookiedetails moeten voor publicatie worden bevestigd.");
  assert.match(styles, /\.legal-page\s*\{/);
  assert.match(styles, /\.legal-sheet\s*\{/);
  assert.match(styles, /\.legal-route-nav\s*\{/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.legal-page\s*\{/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(app, /price|cart|checkout|payment|add to cart|buy now/i);
});
