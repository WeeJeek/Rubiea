import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/pages/HomePage.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("approved v6 homepage keeps visual assets, navigation, language and preview-only boundaries", () => {
  for (const asset of [
    "/assets/rubiae-hero-rain-window.png",
    "/assets/rubiae-slow-look-pendant.png",
    "/assets/rubiae-hand-ruby-charms.png",
    "/assets/rubiae-rain-watch.png",
    "/assets/rubiae-moments-envelope.png",
    "/assets/rubiae-facts-macro.png",
  ]) assert.match(home, new RegExp(asset.replaceAll("/", "\\/")));

  assert.match(app, /useState/);
  assert.match(app, /useEffect/);
  assert.match(app, /document\.documentElement\.lang\s*=\s*locale/);
  assert.match(app, /className="skip-link" href="#main-content"/);
  assert.match(home, /<main id="main-content"/);
  assert.match(app, /aria-label="Main navigation"/);
  assert.match(app, /aria-expanded=/);
  assert.match(home, /const links/);
  for (const id of ["stones", "stories", "how-to-choose", "about", "for-trade"]) {
    assert.ok(home.includes(`["${id}",`));
    assert.match(home, new RegExp(`id="${id}"`));
  }
  assert.match(app, /EN\s*\/\s*NL/);
  assert.doesNotMatch(app, /price|cart|checkout|payment|add to cart|buy now/i);
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /\.site-nav\.is-open/);
  assert.match(styles, /\.choose-section img\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0/);
  assert.match(styles, /\.choose-section div\s*\{[^}]*position:\s*absolute[^}]*z-index:\s*1/);
  assert.match(styles, /\.hero\s*\{[^}]*padding-top:\s*31\.5rem/);
  assert.match(styles, /\.hero-image\s*\{[^}]*height:\s*24rem[^}]*object-position:\s*65% center/);
  assert.match(home, /className="hero-story-street"[^>]*rubiae-moments-rain-street-v2\.png/);
  assert.match(home, /className="hero-story-ruby"[^>]*rubiae-moments-ruby-v6\.png/);
  assert.match(styles, /\.hero-story\s*\{[^}]*right:\s*-5\.5rem[^}]*bottom:\s*-9rem[^}]*width:\s*min\(46rem,\s*48vw\)[^}]*height:\s*54rem[^}]*transform:\s*rotate\(3\.5deg\)[^}]*transform-origin:\s*100% 100%/);
  assert.match(styles, /\.hero-story-street\s*\{[^}]*position:\s*absolute[^}]*bottom:\s*7%[^}]*left:\s*0[^}]*width:\s*56%[^}]*height:\s*42%/);
  assert.match(styles, /\.hero-story-ruby\s*\{[^}]*position:\s*absolute[^}]*right:\s*-10%[^}]*bottom:\s*-3%[^}]*width:\s*58%[^}]*border-radius:\s*50%/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story\s*\{[^}]*height:\s*32rem[^}]*transform:\s*none/);
  assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story-ruby\s*\{[^}]*right:\s*-29%[^}]*bottom:\s*-6%[^}]*width:\s*58%/);
  assert.match(styles, /a:focus-visible,\s*button:focus-visible/);
  assert.match(styles, /\.skip-link:focus/);
});
