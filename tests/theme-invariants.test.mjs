import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
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

test('stone facts render every required metafield and translated unknown fallback', () => {
  const source = readFileSync('snippets/stone-facts.liquid', 'utf8');
  for (const key of ['stone_id', 'material_type', 'weight_ct', 'dimensions_mm', 'shape', 'cut', 'colour_description', 'clarity_transparency', 'treatment', 'origin_opinion', 'laboratory', 'report_number', 'report_date', 'evidence_source']) assert.match(source, new RegExp(`rubiae\\.${key}`));
  assert.match(source, /'stone\.unknown' \| t/);
});

test('preview templates bind the Stones and Stone Detail sections', () => {
  const collectionTemplate = JSON.parse(readFileSync('templates/collection.preview.json', 'utf8'));
  const productTemplate = JSON.parse(readFileSync('templates/product.preview.json', 'utf8'));

  assert.deepEqual(Object.values(collectionTemplate.sections).map((section) => section.type), ['preview-collection']);
  assert.deepEqual(Object.values(productTemplate.sections).map((section) => section.type), ['preview-product']);
});

test('preview catalogue has a paginated, enquiry-only stone path', () => {
  const collection = readFileSync('sections/preview-collection.liquid', 'utf8');
  const product = readFileSync('sections/preview-product.liquid', 'utf8');
  const card = readFileSync('snippets/stone-card.liquid', 'utf8');

  assert.match(collection, /paginate collection\.products by 24/);
  assert.match(collection, /render 'stone-card', product: product/);
  assert.match(collection, /collection\.empty/);
  assert.match(product, /render 'stone-facts', product: product/);
  assert.match(product, /\?stone_id=\{\{ product\.metafields\.rubiae\.stone_id\.value \| url_encode \}\}/);

  const links = [...card.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(links, [
    '{{ product.url }}',
    '{{ product.url }}',
    '{{ routes.root_url }}pages/contact?stone_id={{ product.metafields.rubiae.stone_id.value | url_encode }}',
  ]);
});

test('both locales translate the preview catalogue and all stone labels', () => {
  const fields = ['stone_id', 'material_type', 'weight_ct', 'dimensions_mm', 'shape', 'cut', 'colour_description', 'clarity_transparency', 'treatment', 'origin_opinion', 'laboratory', 'report_number', 'report_date', 'evidence_source'];
  for (const file of ['locales/en.default.json', 'locales/nl.json']) {
    const locale = JSON.parse(readFileSync(file, 'utf8'));
    assert.ok(locale.collection.empty);
    assert.ok(locale.stone.status);
    assert.ok(locale.stone.enquiry);
    for (const field of fields) assert.ok(locale.stone.fields[field]);
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

test('homepage hero layers the table above its background and keeps reference disclosure above the table', () => {
  const hero = readFileSync('sections/home-hero.liquid', 'utf8');
  const css = readFileSync('assets/rubiae.css', 'utf8');

  assert.match(
    hero,
    /\{%\s*if section\.settings\.hero_reference != blank or section\.settings\.mobile_reference != blank\s*%\}[\s\S]*home-reference-caption/,
  );
  assert.match(css, /\.home-hero__table\s*\{[^}]*z-index:\s*0/);
  assert.match(css, /\.home-hero__reference\s*\{[^}]*z-index:\s*1/);
  assert.match(css, /\.home-reference-caption\s*\{[^}]*z-index:\s*2/);
});

test('contact is non-binding and confirmation is noindex in the document head', () => {
  assert.ok(existsSync('sections/contact-preview.liquid'), 'contact preview section must exist');
  assert.ok(existsSync('sections/noindex-confirmation.liquid'), 'confirmation section must exist');
  const contact = readFileSync('sections/contact-preview.liquid', 'utf8');
  const confirmation = readFileSync('sections/noindex-confirmation.liquid', 'utf8');
  const layout = readFileSync('layout/theme.liquid', 'utf8');

  assert.match(contact, /form 'contact'/);
  assert.match(contact, /id="LaunchConsent"[^>]*type="checkbox"|type="checkbox"[^>]*id="LaunchConsent"/);
  assert.doesNotMatch(contact, /<input[^>]*id="LaunchConsent"[^>]*\schecked(?:=|\s|>)/);
  assert.match(contact, /preview\.enquiry_notice/);
  assert.match(confirmation, /noindex/);
  assert.match(layout, /page\.handle == 'confirmation'[\s\S]*<meta name="robots" content="noindex">/);
});

test('public editorial templates select their approved page sections', () => {
  const editorialPages = {
    'page.stories.json': 'stories',
    'page.how-to-choose.json': 'how_to_choose',
    'page.about.json': 'about',
    'page.for-trade.json': 'for_trade',
    'page.privacy.json': 'privacy',
    'page.cookies.json': 'cookies',
    '404.json': 'not_found',
  };

  for (const [file, copyKey] of Object.entries(editorialPages)) {
    assert.ok(existsSync(`templates/${file}`), `${file} must exist`);
    const template = JSON.parse(readFileSync(`templates/${file}`, 'utf8'));
    const section = Object.values(template.sections)[0];
    assert.equal(section.type, 'editorial-page');
    assert.equal(section.settings.copy_key, copyKey);
  }
  assert.ok(existsSync('templates/page.contact.json'), 'contact template must exist');
  assert.ok(existsSync('templates/page.confirmation.json'), 'confirmation template must exist');
  assert.equal(JSON.parse(readFileSync('templates/page.contact.json', 'utf8')).sections.main.type, 'contact-preview');
  assert.equal(JSON.parse(readFileSync('templates/page.confirmation.json', 'utf8')).sections.main.type, 'noindex-confirmation');
});
