import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
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
  assert.match(styles, /\.choose-section\s*\{[^}]*height:\s*41rem[^}]*overflow:\s*hidden/);
  assert.match(styles, /\.choose-section img\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0/);
  assert.match(styles, /\.choose-section div\s*\{[^}]*position:\s*absolute[^}]*z-index:\s*1/);
  assert.match(styles, /\.choose-section \.solid-link\s*\{[^}]*position:\s*absolute[^}]*right:\s*clamp\(1\.5rem,\s*7vw,\s*8rem\)[^}]*bottom:\s*2\.5rem/);
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

test("site uses the EMPYRA typographic masthead and no longer presents Rubiae as the brand", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const content = readFileSync(new URL("../src/content.js", import.meta.url), "utf8");
  const home = readFileSync(new URL("../src/pages/HomePage.jsx", import.meta.url), "utf8");
  const document = readFileSync(new URL("../index.html", import.meta.url), "utf8");

  assert.match(app, /src="\/assets\/empyra-masthead-black\.svg"/);
  assert.match(app, /src="\/assets\/empyra-masthead-cream\.svg"/);
  assert.match(app, /aria-label="EMPYRA home"/);
  for (const asset of ["empyra-masthead-black.svg", "empyra-masthead-cream.svg", "empyra-logo-stacked-black.svg"])
    assert.equal(existsSync(new URL(`../public/assets/${asset}`, import.meta.url)), true);

  // the masthead sits straight on the page, with no bone panel behind it
  assert.doesNotMatch(styles, /\.brand\s*\{[^}]*background:/s);
  // cream masthead only over the dark stone photograph, and only on desktop
  assert.match(styles, /\.site-header--stone \.brand-mark--cream \{ display: block; \}/);
  // navigation answers the masthead's tracking
  assert.match(styles, /\.site-nav a, \.language-toggle \{[^}]*letter-spacing: 0\.16em;[^}]*text-transform: uppercase;/s);
  // the full lockup and tagline appear once, in the footer colophon
  assert.match(home, /footer-colophon/);
  assert.match(home, /empyra-logo-stacked-black\.svg/);
  // icons are declared
  assert.match(document, /rel="icon" href="\/empyra-favicon\.svg"/);
  assert.match(document, /rel="apple-touch-icon"/);
  assert.match(content, /EMPYRA MOMENTS/);
  assert.match(content, /Empyra brings natural gemstones/i);
  assert.match(document, /<title>EMPYRA \| Preview<\/title>/);
  assert.doesNotMatch(app, /Rubiae/);
  assert.doesNotMatch(content, /Rubiae/);
  assert.match(home, /aria-label="EMPYRA Moments"/);
  assert.match(home, />EMPYRA<\/p>/);
  assert.doesNotMatch(home, /aria-label="Rubiae Moments"|>RUBIAE<\/p>/);
});
