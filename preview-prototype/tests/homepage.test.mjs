import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("approved v5 homepage keeps visual assets, navigation, language and preview-only boundaries", () => {
  for (const asset of [
    "/assets/rubiae-hero-rain-window.png",
    "/assets/rubiae-slow-look-pendant.png",
    "/assets/rubiae-hand-ruby-charms.png",
    "/assets/rubiae-rain-watch.png",
    "/assets/rubiae-moments-envelope.png",
    "/assets/rubiae-facts-macro.png",
  ]) assert.match(app, new RegExp(asset.replaceAll("/", "\\/")));

  assert.match(app, /useState/);
  assert.match(app, /useEffect/);
  assert.match(app, /document\.documentElement\.lang\s*=\s*locale/);
  assert.match(app, /className="skip-link" href="#main-content"/);
  assert.match(app, /<main id="main-content"/);
  assert.match(app, /aria-label="Main navigation"/);
  assert.match(app, /aria-expanded=/);
  assert.match(app, /href=\{`#\$\{id\}`\}/);
  for (const id of ["stones", "stories", "how-to-choose", "about", "for-trade"]) {
    assert.ok(app.includes(`["${id}",`));
    assert.match(app, new RegExp(`id="${id}"`));
  }
  assert.match(app, /EN\s*\/\s*NL/);
  assert.doesNotMatch(app, /price|cart|checkout|payment|add to cart|buy now/i);
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /\.site-nav\.is-open/);
  assert.match(styles, /\.hero\s*\{[^}]*padding-top:\s*31\.5rem/);
  assert.match(styles, /\.hero-image\s*\{[^}]*height:\s*24rem[^}]*object-position:\s*65% center/);
  assert.match(styles, /\.hero-story\s*\{[^}]*position:\s*relative/);
  assert.match(styles, /\.hero-story\s*\{[^}]*width:\s*min\(40rem,\s*42vw\)[^}]*height:\s*37\.5rem[^}]*transform:\s*rotate\(3deg\)[^}]*transform-origin:\s*100% 100%/);
  assert.match(styles, /\.hero-story img\s*\{[^}]*position:\s*absolute[^}]*bottom:\s*0[^}]*width:\s*52%[^}]*height:\s*44%/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story\s*\{[^}]*height:\s*auto[^}]*transform:\s*none/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story img\s*\{[^}]*position:\s*static[^}]*min-height:\s*11rem/);
  assert.match(styles, /a:focus-visible,\s*button:focus-visible/);
  assert.match(styles, /\.skip-link:focus/);
});
