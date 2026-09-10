import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { copy } from "../src/content.js";

const page = readFileSync(new URL("../src/pages/StoneDetailPage.jsx", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("GEM-005 Stone Detail follows the approved hero and evidence contract", () => {
  assert.match(page, /className="stone-detail-hero"/);
  assert.match(page, /aria-controls="stone-supporting-evidence"/);
  assert.match(page, /id="stone-supporting-evidence"/);
  assert.match(page, /aria-expanded=\{evidenceOpen\}/);
  assert.match(app, /path === STONE_PATH \? "site-header--stone"/);
  assert.match(styles, /\.site-header--stone\s*\{[^}]*position:\s*relative/s);
  assert.match(styles, /\.stone-detail-hero\s*\{[^}]*grid-template-columns:\s*minmax\(0, 65fr\) minmax\(18rem, 35fr\)/s);
  assert.match(styles, /grid-template-areas:\s*"photo identity"\s*"photo facts"/);
  assert.match(styles, /grid-template-areas:\s*"identity"\s*"photo"\s*"facts"/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(styles, /linear-gradient/);
});

test("GEM-005 Stone Detail header sits on paper, so nothing lands on the photograph", () => {
  // one header rule at every width: paper ground, ink type
  assert.match(styles, /\.site-header--stone\s*\{[^}]*width:\s*100%[^}]*background:\s*#fffdfa[^}]*color:\s*#251f24/s);
  // the old split-contrast overrides are gone — they left "Stones" in ink over a dark photograph
  assert.doesNotMatch(styles, /\.site-header--stone \.site-nav\s*\{/);
  assert.doesNotMatch(styles, /brand-mark--cream/);
  assert.doesNotMatch(styles, /\.site-header--stone\s*\{[^}]*width:\s*65%/s);
});

test("GEM-005 mobile navigation opens as one calm paper-white sheet", () => {
  assert.match(styles, /\.menu-toggle\s*\{[^}]*border:\s*0[^}]*background:\s*none/s);
  assert.match(styles, /\.site-nav\s*\{[^}]*right:\s*0[^}]*left:\s*0[^}]*background:\s*#fffdfa[^}]*color:\s*#251f24/s);
  assert.match(styles, /\.language-toggle\s*\{[^}]*margin-top:[^;}]+;[^}]*border-top:\s*1px solid #d4ceca[^}]*color:\s*#665e62/s);
  assert.doesNotMatch(styles, /\.site-nav\s*\{[^}]*right:\s*1\.25rem[^}]*left:\s*1\.25rem[^}]*background:\s*#251f24/s);
});

test("GEM-005 Stone Detail stays preview-only and exposes one final inquiry action", () => {
  assert.equal(copy.en.stone.previewNotice, "Preview — not yet available for purchase.");
  assert.equal(copy.nl.stone.previewNotice, "Preview — nog niet beschikbaar voor aankoop.");
  assert.equal(copy.en.stone.inquiry, "Ask about this stone");
  assert.equal(copy.nl.stone.inquiry, "Vraag naar deze steen");
  assert.deepEqual(Object.keys(copy.en.stone.imageAlts), ["lifestyle", "neutral", "macro", "millimetre", "report", "video"]);
  assert.notEqual(copy.en.stone.imageAlts.lifestyle, copy.nl.stone.imageAlts.lifestyle);
  assert.equal((page.match(/href="mailto:/g) ?? []).length, 1);
  assert.doesNotMatch(page, /stone\.label|stone\.intro/);
  assert.doesNotMatch(page, /⟶/);
  assert.doesNotMatch(page, /price|cart|checkout|payment|add to cart|buy now/i);
});
