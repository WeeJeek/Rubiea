import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const THEME_SOURCE_DIRECTORIES = ['layout', 'sections', 'snippets', 'templates', 'assets'];
const TRANSACTION_PRIMITIVES = new RegExp([
  '\\bprice\\b',
  '\\bcart\\b',
  '\\bcheckout\\b',
  '\\bpayment\\b',
  "form\\s+['\\\"]product['\\\"]",
  '\\bproduct-form\\b',
  '\\badd-to-cart\\b',
  '\\bbuy\\s+now\\b',
  '\\breservation\\b',
  '\\binventory\\b',
  '\\bavailability\\b',
  "['\\\"]@type['\\\"]\\s*:\\s*['\\\"]Offer['\\\"]",
].join('|'), 'i');

const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]
);
const themeSource = () => THEME_SOURCE_DIRECTORIES.flatMap(files)
  .map((file) => readFileSync(file, 'utf8')).join('\n');

test('theme has no transaction primitives', () => {
  assert.doesNotMatch(themeSource(), TRANSACTION_PRIMITIVES);
});

test('both locales expose preview notice and translated unknown value', () => {
  for (const file of ['locales/en.default.json', 'locales/nl.json']) {
    const locale = JSON.parse(readFileSync(file, 'utf8'));
    assert.ok(locale.preview.notice);
    assert.ok(locale.stone.unknown);
    assert.ok(locale.common.language);
    assert.ok(locale.accessibility.open_menu);
    assert.ok(locale.accessibility.close_menu);
  }
});

test('shared shell includes a skip link and reduced-motion rule', () => {
  assert.match(readFileSync('layout/theme.liquid', 'utf8'), /skip-link/);
  assert.match(readFileSync('assets/rubiae.css', 'utf8'), /prefers-reduced-motion/);
});

test('footer links use a light visible focus outline on the dark footer', () => {
  const css = readFileSync('assets/rubiae.css', 'utf8');
  assert.match(
    css,
    /\.site-footer a:focus-visible\s*\{[^}]*outline:\s*3px solid var\(--rubiae-paper\)/,
  );
});

test('mobile header wraps its open navigation onto a full row', () => {
  const css = readFileSync('assets/rubiae.css', 'utf8');
  assert.match(css, /\.site-header\s*\{[^}]*flex-wrap:\s*wrap/);
  assert.match(
    css,
    /\.site-header__navigation\.is-open\s*\{[^}]*flex-basis:\s*100%/,
  );
});

test('header and footer share a neutral site brand class', () => {
  const header = readFileSync('sections/site-header.liquid', 'utf8');
  const footer = readFileSync('sections/site-footer.liquid', 'utf8');
  const css = readFileSync('assets/rubiae.css', 'utf8');

  assert.match(header, /class="site-brand"/);
  assert.match(footer, /class="site-brand"/);
  assert.doesNotMatch(`${header}\n${footer}`, /site-header__brand/);
  assert.match(css, /\.site-brand\s*\{/);
});

test('homepage has the six approved editorial sections and one primary hero CTA', () => {
  const index = JSON.parse(readFileSync('templates/index.json', 'utf8'));
  assert.deepEqual(Object.values(index.sections).map((section) => section.type), [
    'home-hero',
    'home-slow-look',
    'home-choose',
    'home-moments',
    'home-facts',
    'home-closing',
  ]);
  assert.match(readFileSync('sections/home-hero.liquid', 'utf8'), /home\.hero\.cta/);
});
