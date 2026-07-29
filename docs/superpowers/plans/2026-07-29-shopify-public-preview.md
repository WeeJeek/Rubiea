# Rubiae Shopify Public Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` (recommended) or `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Shopify Online Store 2.0 public-preview theme that presents Rubiae in English and Dutch while exposing no commercial transaction capability.

**Architecture:** A portable Liquid theme uses JSON templates to compose small sections. Locale JSON owns public copy; metafield-aware snippets render product facts truthfully; a small JavaScript module owns only the mobile menu and form state. Node's built-in test runner statically guards public-preview invariants because no Shopify store or CLI is available locally.

**Tech Stack:** Shopify Liquid, Online Store 2.0 JSON templates, CSS custom properties, vanilla JavaScript, Node.js 22 `node:test`.

## Global Constraints

- English is default and Dutch copy must exist in `locales/nl.json`.
- Do not render price, cart, checkout, payment, `form 'product'`, `product-form`, `add-to-cart`, `buy now`, reservation, inventory availability, or `Offer` structured data.
- Preview product facts come from `product.metafields.rubiae.*`; any blank fact renders `Unknown` or `Onbekend`.
- The contact form is non-binding and its launch-notification checkbox is separately unchecked.
- Design-reference images are not product evidence and must be labelled as such.
- Respect keyboard navigation, visible focus and `prefers-reduced-motion`.
- Run every task's focused test before proceeding. Commit only the files belonging to the approved task scope.

---

## File map

- `layout/theme.liquid`: HTML root, SEO, common asset loading, skip link and shell.
- `config/settings_schema.json`: merchant-safe theme settings for verified organization facts and reference images.
- `locales/en.default.json`, `locales/nl.json`: all user-facing strings.
- `sections/site-header.liquid`, `sections/preview-notice.liquid`, `sections/site-footer.liquid`: shared shell.
- `sections/home-*.liquid`: editorial homepage sections.
- `sections/preview-collection.liquid`, `sections/preview-product.liquid`, `snippets/stone-facts.liquid`, `snippets/stone-card.liquid`: preview-only catalogue.
- `sections/editorial-page.liquid`, `sections/contact-preview.liquid`, `sections/noindex-confirmation.liquid`: static content and enquiry flow.
- `templates/*.json`: page composition without transaction templates.
- `assets/rubiae.css`, `assets/rubiae.js`: responsive presentation and minimal interaction.
- `tests/theme-invariants.test.mjs`: static regression guard for content and no-commerce constraints.
- `package.json`: dependency-free test command.

### Task 1: Establish the theme and invariant-test harness

**Files:**
- Create: `package.json`
- Create: `layout/theme.liquid`
- Create: `config/settings_schema.json`
- Create: `tests/theme-invariants.test.mjs`

**Interfaces:**
- Produces `npm test`, which scans `layout`, `sections`, `snippets`, `templates` and `assets`.
- `layout/theme.liquid` exposes `{{ content_for_layout }}`; later templates depend on it.

- [ ] **Step 1: Write the failing invariant test**

```js
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]
);
const themeSource = () => ['layout', 'sections', 'snippets', 'templates'].flatMap(files)
  .map((file) => readFileSync(file, 'utf8')).join('\n');

test('theme has no transaction primitives', () => {
  assert.doesNotMatch(themeSource(), /form\s+['\"]product|product-form|add-to-cart|checkout_url|cart_url|\"@type\"\s*:\s*\"Offer\"/i);
});
```

- [ ] **Step 2: Verify the test fails**

Run: `npm test`

Expected: FAIL because `package.json` and theme directories do not exist.

- [ ] **Step 3: Add the minimal theme shell and test command**

```json
{
  "name": "rubiae-preview-theme",
  "private": true,
  "scripts": { "test": "node --test tests/*.test.mjs" }
}
```

```liquid
<!doctype html>
<html lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title | escape }}</title>
    {{ content_for_header }}
    {{ 'rubiae.css' | asset_url | stylesheet_tag }}
  </head>
  <body><a class="skip-link" href="#MainContent">{{ 'accessibility.skip_to_content' | t }}</a>{% sections 'header-group' %}<main id="MainContent">{{ content_for_layout }}</main>{% sections 'footer-group' %}{{ 'rubiae.js' | asset_url | script_tag }}</body>
</html>
```

- [ ] **Step 4: Verify the harness passes**

Run: `npm test`

Expected: PASS for the no-transaction test.

### Task 2: Add locales, design tokens and accessible shared shell

**Files:**
- Create: `locales/en.default.json`
- Create: `locales/nl.json`
- Create: `assets/rubiae.css`
- Create: `assets/rubiae.js`
- Create: `sections/header-group.json`
- Create: `sections/footer-group.json`
- Create: `sections/preview-notice.liquid`
- Create: `sections/site-header.liquid`
- Create: `sections/site-footer.liquid`
- Test: `tests/theme-invariants.test.mjs`

**Interfaces:**
- `t` keys: `preview.notice`, `common.language`, `accessibility.open_menu`, `accessibility.close_menu`.
- Header and footer render every public template through section groups.

- [ ] **Step 1: Extend the test with locale and accessibility assertions**

```js
test('both locales expose preview notice and translated unknown value', () => {
  for (const file of ['locales/en.default.json', 'locales/nl.json']) {
    const locale = JSON.parse(readFileSync(file, 'utf8'));
    assert.ok(locale.preview.notice);
    assert.ok(locale.stone.unknown);
  }
});
test('shared shell includes a skip link and reduced-motion rule', () => {
  assert.match(readFileSync('layout/theme.liquid', 'utf8'), /skip-link/);
  assert.match(readFileSync('assets/rubiae.css', 'utf8'), /prefers-reduced-motion/);
});
```

- [ ] **Step 2: Verify it fails**

Run: `npm test`

Expected: FAIL with missing locale and stylesheet files.

- [ ] **Step 3: Implement English/Dutch strings and shared components**

```json
{ "preview": { "notice": "Rubiae is preparing for launch. Purchasing is not yet available." }, "stone": { "unknown": "Unknown" }, "accessibility": { "skip_to_content": "Skip to content", "open_menu": "Open menu", "close_menu": "Close menu" } }
```

```json
{ "preview": { "notice": "Rubiae bereidt de lancering voor. Aankopen is nog niet mogelijk." }, "stone": { "unknown": "Onbekend" }, "accessibility": { "skip_to_content": "Ga naar inhoud", "open_menu": "Menu openen", "close_menu": "Menu sluiten" } }
```

Use a `button` with `aria-expanded`, `aria-controls="SiteNavigation"`, and a localization `form 'localization'`. CSS must define the approved six colour variables, `:focus-visible`, and a `@media (prefers-reduced-motion: reduce)` override that removes transitions.

- [ ] **Step 4: Verify shared behavior**

Run: `npm test`

Expected: PASS for locale and accessibility tests.

### Task 3: Implement the reference-led homepage

**Files:**
- Create: `sections/home-hero.liquid`
- Create: `sections/home-slow-look.liquid`
- Create: `sections/home-choose.liquid`
- Create: `sections/home-moments.liquid`
- Create: `sections/home-facts.liquid`
- Create: `sections/home-closing.liquid`
- Create: `templates/index.json`
- Test: `tests/theme-invariants.test.mjs`

**Interfaces:**
- Homepage sections use locale keys under `home.*` and theme-editor image settings.
- Image settings default to blank; an explicit reference caption remains visible when a reference image is selected.

- [ ] **Step 1: Add a failing homepage composition test**

```js
test('homepage has the six approved editorial sections and one primary hero CTA', () => {
  const index = JSON.parse(readFileSync('templates/index.json', 'utf8'));
  assert.deepEqual(Object.values(index.sections).map((section) => section.type), [
    'home-hero', 'home-slow-look', 'home-choose', 'home-moments', 'home-facts', 'home-closing'
  ]);
  assert.match(readFileSync('sections/home-hero.liquid', 'utf8'), /home\.hero\.cta/);
});
```

- [ ] **Step 2: Verify it fails**

Run: `npm test`

Expected: FAIL because the homepage template does not exist.

- [ ] **Step 3: Build homepage sections**

`home-hero.liquid` renders a `section` with left copy, a design-reference image region, a table/ruby region and one anchor to the Stones route. Its schema provides image pickers named `hero_reference` and `mobile_reference`; it never provides product, price or buy settings. The remaining sections render approved `home.*` translation strings and anchors only.

```json
{ "sections": { "hero": { "type": "home-hero" }, "slow": { "type": "home-slow-look" }, "choose": { "type": "home-choose" }, "moments": { "type": "home-moments" }, "facts": { "type": "home-facts" }, "closing": { "type": "home-closing" } }, "order": ["hero", "slow", "choose", "moments", "facts", "closing"] }
```

- [ ] **Step 4: Verify composition and no-commerce scan**

Run: `npm test`

Expected: PASS.

### Task 4: Implement preview-only Stones and Stone Detail

**Files:**
- Create: `snippets/stone-card.liquid`
- Create: `snippets/stone-facts.liquid`
- Create: `sections/preview-collection.liquid`
- Create: `sections/preview-product.liquid`
- Create: `templates/collection.preview.json`
- Create: `templates/product.preview.json`
- Test: `tests/theme-invariants.test.mjs`

**Interfaces:**
- `stone-facts` accepts `product` and emits the thirteen required labels.
- `stone-card` accepts `product` and links only to `product.url` or a contact route.

- [ ] **Step 1: Add a failing facts-contract test**

```js
test('stone facts render every required metafield and translated unknown fallback', () => {
  const source = readFileSync('snippets/stone-facts.liquid', 'utf8');
  for (const key of ['stone_id', 'material_type', 'weight_ct', 'dimensions_mm', 'shape', 'cut', 'colour_description', 'clarity_transparency', 'treatment', 'origin_opinion', 'laboratory', 'report_number', 'report_date', 'evidence_source']) assert.match(source, new RegExp(`rubiae\\.${key}`));
  assert.match(source, /'stone\.unknown' \| t/);
});
```

- [ ] **Step 2: Verify it fails**

Run: `npm test`

Expected: FAIL with missing `stone-facts.liquid`.

- [ ] **Step 3: Render safe product data only**

Use this Liquid fallback for every facts row:

```liquid
{% assign value = product.metafields.rubiae.weight_ct.value %}
<dt>{{ 'stone.fields.weight_ct' | t }}</dt>
<dd>{% if value != blank %}{{ value | escape }}{% else %}{{ 'stone.unknown' | t }}{% endif %}</dd>
```

The collection section shows approved introduction/empty-state copy, `paginate collection.products by 24`, and the card snippet. The product section includes status, facts, evidence explanation and an enquiry anchor with `?stone_id={{ product.metafields.rubiae.stone_id.value | url_encode }`; it includes neither product form nor commercial state.

- [ ] **Step 4: Verify preview catalogue constraints**

Run: `npm test`

Expected: PASS for facts and transaction primitives tests.

### Task 5: Implement editorial, legal and enquiry pages

**Files:**
- Create: `sections/editorial-page.liquid`
- Create: `sections/contact-preview.liquid`
- Create: `sections/noindex-confirmation.liquid`
- Create: `templates/page.stories.json`
- Create: `templates/page.how-to-choose.json`
- Create: `templates/page.about.json`
- Create: `templates/page.for-trade.json`
- Create: `templates/page.contact.json`
- Create: `templates/page.privacy.json`
- Create: `templates/page.cookies.json`
- Create: `templates/page.confirmation.json`
- Create: `templates/404.json`
- Test: `tests/theme-invariants.test.mjs`

**Interfaces:**
- `editorial-page` uses `section.settings.copy_key` to select locale content for each text page.
- `contact-preview` posts through `form 'contact'`; `confirmation` is noindex.

- [ ] **Step 1: Add failing form and noindex tests**

```js
test('contact is non-binding and confirmation is noindex', () => {
  const contact = readFileSync('sections/contact-preview.liquid', 'utf8');
  assert.match(contact, /form 'contact'/);
  assert.match(contact, /id="LaunchConsent"[^>]*type="checkbox"|type="checkbox"[^>]*id="LaunchConsent"/);
  assert.doesNotMatch(contact, /<input[^>]*id="LaunchConsent"[^>]*\schecked(?:=|\s|>)/);
  assert.match(contact, /preview\.enquiry_notice/);
  assert.match(readFileSync('sections/noindex-confirmation.liquid', 'utf8'), /noindex/);
});
```

- [ ] **Step 2: Verify it fails**

Run: `npm test`

Expected: FAIL because contact and confirmation sections do not exist.

- [ ] **Step 3: Implement the approved content and form semantics**

```liquid
{% form 'contact', id: 'PreviewContactForm' %}
  <label for="ContactName">{{ 'form.name' | t }}</label><input id="ContactName" name="contact[name]" required>
  <label for="ContactEmail">{{ 'form.email' | t }}</label><input id="ContactEmail" name="contact[email]" type="email" required>
  <input id="LaunchConsent" name="contact[launch_notification_consent]" type="checkbox" value="yes">
  <label for="LaunchConsent">{{ 'form.launch_consent' | t }}</label>
  <p>{{ 'preview.enquiry_notice' | t }}</p><button type="submit">{{ 'form.send' | t }}</button>
{% endform %}
```

The test must be corrected to assert that the consent input exists and does **not** contain `checked`; do not make the checkbox selected in code. The editorial section uses translation keys only, includes the source-provided Stories empty state, and renders legal placeholders as settings rather than invented business facts.

- [ ] **Step 4: Verify pages and form state**

Run: `npm test`

Expected: PASS; confirmation remains `noindex`.

### Task 6: Complete metadata, responsive checks and handoff record

**Files:**
- Modify: `layout/theme.liquid`
- Modify: `assets/rubiae.css`
- Modify: `tests/theme-invariants.test.mjs`
- Modify: `handoff.md`
- Modify: `docs/project-todos.md`
- Modify: `docs/unimplemented-features.md`

**Interfaces:**
- Theme layout emits only `Organization` and `WebSite` JSON-LD when verified theme settings are populated.
- Test suite is final proof for static theme constraints.

- [ ] **Step 1: Add final failing SEO and responsive tests**

```js
test('schema never emits product offers and CSS supports both target breakpoints', () => {
  const layout = readFileSync('layout/theme.liquid', 'utf8');
  const css = readFileSync('assets/rubiae.css', 'utf8');
  assert.doesNotMatch(layout, /Offer|availability|priceCurrency/);
  assert.match(css, /1440px|1200px/);
  assert.match(css, /768px|390px/);
});
```

- [ ] **Step 2: Verify it fails**

Run: `npm test`

Expected: FAIL until safe schema and responsive media queries are present.

- [ ] **Step 3: Add safe JSON-LD and final styles**

```liquid
{% if settings.organization_name != blank and settings.organization_url != blank %}
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":{{ settings.organization_name | json }},"url":{{ settings.organization_url | json }}}</script>
{% endif %}
```

Add desktop, tablet and mobile media queries; keep hero controls clear of the ruby region. Update `handoff.md` with date, changed theme files, `npm test` result, `GEM-005` as open until merchant publication dependencies are fulfilled, and next action. Keep the feature in both project-tracking files until theme verification is complete.

- [ ] **Step 4: Run final verification**

Run: `npm test && rg -n -i "form ['\"]product|product-form|add-to-cart|checkout_url|cart_url|priceCurrency|\"@type\"[[:space:]]*:[[:space:]]*\"Offer\"" layout sections snippets templates assets || true`

Expected: tests PASS and search prints no matches.

- [ ] **Step 5: Commit if repository initialization is supplied**

Run: `git add package.json layout config locales assets sections snippets templates tests handoff.md docs/project-todos.md docs/unimplemented-features.md && git commit -m "feat: build Shopify public preview theme"`

Expected: commit only after the requested theme and verification scope are complete. Preserve unrelated worktree changes.

## Plan self-review

- Coverage: Task 1 establishes theme/test infrastructure; Task 2 covers locales and accessibility; Task 3 covers the source-approved home; Task 4 covers preview catalogue/facts; Task 5 covers all named public/static/form pages; Task 6 covers schema, responsive verification, handoff and tracking.
- Placeholder scan: no implementation step relies on unspecified business or product facts; merchant-owned values remain settings/dependencies, not fabricated defaults.
- Interface check: locale `stone.unknown` is defined before `stone-facts`; shared shell precedes templates; invariant tests are created before the source they assert.
