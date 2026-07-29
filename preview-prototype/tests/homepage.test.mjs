import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const frame = readFileSync(new URL("../src/components/SiteFrame.jsx", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/pages/HomePage.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("shared frame preserves route-aware language links and route-change focus", () => {
  assert.match(app, /window\.addEventListener\("popstate"/);
  assert.match(app, /history\.pushState/);
  assert.match(app, /document\.getElementById\("main-content"\)\?\.focus/);
  assert.match(frame, /withLocalePath/);
  assert.match(frame, /aria-current=\{isCurrent/);
});

test("shared frame waits for route rendering, preserves locale home links, and keeps modified locale clicks native", () => {
  assert.match(app, /useEffect\(\(\) => \{\s*if \(shouldFocusMain\) document\.getElementById\("main-content"\)\?\.focus\(\);[\s\S]*\}, \[pathname, shouldFocusMain\]\);/);
  assert.doesNotMatch(app, /function navigate\(event\)[\s\S]*document\.getElementById\("main-content"\)\?\.focus/);
  assert.match(frame, /href=\{withLocalePath\("\/", locale\)\}/);
  assert.match(frame, /function isModifiedClick\(event\)/);
  assert.match(frame, /if \(isModifiedClick\(event\)\) return;/);
  assert.match(frame, /aria-label=\{shared\.shared\.seo\.home\.title\}/);
  assert.match(frame, /shared\.pages\.system\.menuClose/);
  assert.match(frame, /shared\.pages\.system\.changeLanguage/);
  assert.doesNotMatch(frame, /aria-label="Rubiae home"/);
});

test("approved v6 homepage keeps visual assets, navigation, language and preview-only boundaries", () => {
  for (const asset of [
    "/assets/rubiae-hero-rain-window.png",
    "/assets/rubiae-slow-look-pendant.png",
    "/assets/rubiae-hand-ruby-charms.png",
    "/assets/rubiae-rain-watch.png",
    "/assets/rubiae-moments-envelope.png",
    "/assets/rubiae-facts-macro.png",
  ]) assert.ok(home.includes(asset));

  assert.match(app, /useState/);
  assert.match(app, /useEffect/);
  assert.match(app, /document\.documentElement\.lang\s*=\s*locale/);
  assert.match(frame, /className="skip-link" href="#main-content"/);
  assert.match(home, /<main id="main-content"/);
  assert.match(frame, /aria-label="Main navigation"/);
  assert.match(frame, /aria-expanded=/);
  assert.match(frame, /withLocalePath\(href, locale\)/);
  for (const id of ["stones", "stories", "how-to-choose", "about", "for-trade"]) {
    assert.match([home, frame].join("\\n"), new RegExp(`id="${id}"`));
  }
  assert.match(frame, /shared\.shared\.languageSwitch/);
  assert.doesNotMatch([app, frame, home].join("\\n"), /price|cart|checkout|payment|add to cart|buy now/i);
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /\.site-nav\.is-open/);
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
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});
