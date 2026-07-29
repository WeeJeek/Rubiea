# Rubiae Public-preview Editorial Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build all approved non-home public-preview routes in the local Rubiae React prototype, without changing the existing homepage or enabling commerce.

**Architecture:** Keep the app dependency-free. `App.jsx` becomes a route shell which reads a small path helper, selects a page component, and passes shared locale/navigation state into the shared site frame. Route parsing and bilingual preview fixtures are pure modules tested directly; visual page composition stays in focused React components and one shared stylesheet.

**Tech Stack:** React 18, Vite, Node built-in test runner, CSS, existing Rubiae image assets.

## Global Constraints

- Keep the Home page visual layout and approved assets unchanged.
- Use `docs/website/rubiae-preview-site-content.md` as the only copy source; EN is default and NL is complete.
- Render `Unknown` / `Onbekend` for missing stone facts; never omit facts to imply certainty.
- Never render prices, carts, checkout, payment, reservations, availability, purchases, orders, product forms, or Offer schema.
- Contact is client-only: no network request and no persisted customer data.
- Preserve skip link, visible focus, keyboard navigation, `html.lang`, responsive layout, and `prefers-reduced-motion` support.
- Do not change Shopify theme files in this task.

---

### Task 1: Define routes, copy, and preview fixture boundaries

**Files:**
- Create: `preview-prototype/src/routes.js`
- Create: `preview-prototype/src/content.js`
- Create: `preview-prototype/src/preview-stones.js`
- Create: `preview-prototype/tests/routes.test.mjs`
- Modify: `preview-prototype/package.json`

**Interfaces:**
- Produces `getRoute(pathname)`, returning `{ page: 'home' | 'stones' | 'stone-detail' | 'stories' | 'how-to-choose' | 'about' | 'for-trade' | 'contact' | 'privacy' | 'cookies' | 'confirmation' | 'not-found', stoneId?: string }`.
- Produces `withLocalePath(pathname, locale)`, which keeps the semantic path while adding/removing the `/nl` prefix.
- Produces `content[locale]`, `stoneFields`, and `previewStones` for later page components.

- [ ] **Step 1: Write the failing route and fixture tests**

```js
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
```

- [ ] **Step 2: Run the test and confirm expected RED failure**

Run: `npm test -- tests/routes.test.mjs`

Expected: FAIL because `../src/routes.js` and data modules do not exist.

- [ ] **Step 3: Implement route, copy, and fixture modules**

```js
export function getRoute(pathname) {
  const segments = pathname.replace(/^\/nl(?=\/|$)/, "").split("/").filter(Boolean);
  if (segments.length === 0) return { page: "home" };
  if (segments[0] === "stones" && segments[1]) return { page: "stone-detail", stoneId: segments[1] };
  if (["stones", "stories", "how-to-choose", "about", "for-trade", "contact", "privacy", "cookies", "confirmation"].includes(segments[0]) && segments.length === 1) return { page: segments[0] };
  return { page: "not-found" };
}

export function withLocalePath(pathname, locale) {
  const basePath = pathname.replace(/^\/nl(?=\/|$)/, "") || "/";
  return locale === "nl" ? `/nl${basePath === "/" ? "" : basePath}` : basePath;
}
```

Define only documented bilingual copy and two clearly labelled demonstration stones. Each stone has every `stoneFields` key, using `null` where no fact is known; no record contains commercial fields.

- [ ] **Step 4: Run tests and confirm GREEN**

Run: `npm test -- tests/routes.test.mjs`

Expected: PASS with 2 passing tests.

### Task 2: Convert the app to route-aware shared shell

**Files:**
- Create: `preview-prototype/src/components/SiteFrame.jsx`
- Create: `preview-prototype/src/pages/HomePage.jsx`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`
- Modify: `preview-prototype/tests/homepage.test.mjs`

**Interfaces:**
- `SiteFrame({ locale, onLocaleChange, children })` renders the shared header, main landmark, footer, skip link, and route-aware EN/NL links.
- `HomePage({ text })` moves the existing Home markup without changing approved section IDs, image paths, or composition class names.
- `App` uses `window.location.pathname`, `popstate`, and `history.pushState` so direct URLs and internal links render the intended route.

- [ ] **Step 1: Write failing shared-shell tests**

```js
test("shared frame preserves route-aware language links and route-change focus", () => {
  assert.match(app, /window\.addEventListener\("popstate"/);
  assert.match(app, /history\.pushState/);
  assert.match(app, /document\.getElementById\("main-content"\)\?\.focus/);
  assert.match(frame, /withLocalePath/);
  assert.match(frame, /aria-current=\{isCurrent/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/homepage.test.mjs`

Expected: FAIL because `SiteFrame` and route handling do not exist.

- [ ] **Step 3: Implement the route shell and unchanged Home extraction**

Move the current Home JSX into `HomePage` unchanged. Implement one `navigate(event)` handler that intercepts same-origin internal links, calls `history.pushState`, updates the path state, closes the menu, and focuses `#main-content`. Keep native links for external URLs and modified clicks. `SiteFrame` owns the current-page navigation indicator, language link, and menu button.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- tests/homepage.test.mjs`

Expected: PASS; existing approved Hero asset and mobile-layout assertions remain green.

### Task 3: Build Stones and Stone Detail

**Files:**
- Create: `preview-prototype/src/components/PreviewNotice.jsx`
- Create: `preview-prototype/src/components/StoneFacts.jsx`
- Create: `preview-prototype/src/components/StoneCard.jsx`
- Create: `preview-prototype/src/pages/StonesPage.jsx`
- Create: `preview-prototype/src/pages/StoneDetailPage.jsx`
- Create: `preview-prototype/tests/catalogue-pages.test.mjs`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`

**Interfaces:**
- `StoneFacts({ facts, labels, unknown })` renders all `stoneFields` in a semantic definition list.
- `StoneCard({ stone, locale })` links only to a stone-detail path and communicates preview status.
- `StoneDetailPage({ stoneId, locale, text })` renders a documented not-found state if its stone is missing.

- [ ] **Step 1: Write failing catalogue tests**

```js
test("catalogue and detail preserve evidence-first preview boundaries", () => {
  assert.match(stoneFacts, /<dl/);
  for (const field of stoneFields) assert.match(stoneFacts, new RegExp(field));
  assert.match(stoneFacts, /unknown/);
  assert.match(stonesPage, /PreviewNotice/);
  assert.match(detailPage, /Ask about this stone|Vraag naar deze steen/);
  assert.doesNotMatch(`${stoneCard}\n${stonesPage}\n${detailPage}`, /price|cart|checkout|payment|reservation|availability|buy now/i);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/catalogue-pages.test.mjs`

Expected: FAIL because page/component sources do not exist.

- [ ] **Step 3: Implement catalogue components and pages**

Use the existing product-oriented image assets only as labelled editorial previews. Give every image meaningful alt text, reserve space with CSS `aspect-ratio`, and set below-the-fold images to `loading="lazy"`. Contact links must be `/contact?stone_id=<encoded id>` or `/nl/contact?stone_id=<encoded id>` and use the documented enquiry CTA.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- tests/catalogue-pages.test.mjs`

Expected: PASS with no prohibited commercial text.

### Task 4: Build editorial and utility routes

**Files:**
- Create: `preview-prototype/src/pages/EditorialPage.jsx`
- Create: `preview-prototype/src/pages/ContactPage.jsx`
- Create: `preview-prototype/src/pages/ConfirmationPage.jsx`
- Create: `preview-prototype/src/pages/NotFoundPage.jsx`
- Create: `preview-prototype/tests/editorial-pages.test.mjs`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`

**Interfaces:**
- `EditorialPage({ page, locale, text })` handles Stories, How to Choose, About, For Trade, Privacy, and Cookies using only the supplied `page` content.
- `ContactPage({ locale, text })` uses local React state and navigates to confirmation; it never calls `fetch`, `XMLHttpRequest`, or browser storage.
- `NotFoundPage({ locale, text })` provides a single return-home link.

- [ ] **Step 1: Write failing editorial/utility tests**

```js
test("editorial and utility routes are bilingual, honest, and client-only", () => {
  for (const page of ["stories", "how-to-choose", "about", "for-trade", "privacy", "cookies"]) assert.match(editorial, new RegExp(page));
  assert.match(editorial, /No personal story is published without clear permission|Geen persoonlijk verhaal wordt zonder duidelijke toestemming gepubliceerd/);
  assert.match(contact, /type="email"/);
  assert.match(contact, /LaunchConsent/);
  assert.doesNotMatch(contact, /fetch\(|XMLHttpRequest|localStorage|sessionStorage/);
  assert.match(confirmation, /does not reserve the stone|reserveert de steen niet/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/editorial-pages.test.mjs`

Expected: FAIL because editorial and utility source files do not exist.

- [ ] **Step 3: Implement editorial, contact, confirmation, and 404 pages**

Use semantic headings, paragraphs, lists, forms, labels, and `aria-live="polite"` feedback. Contact requires name and email with field-local validation after submit, preserves an unchecked launch-notice option, and routes to confirmation without submitting data. Stories shows only the authorised-content empty state. Privacy and Cookies identify missing real business facts as launch requirements rather than fabricate legal details.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- tests/editorial-pages.test.mjs`

Expected: PASS.

### Task 5: Finish responsive visual system and verify the prototype

**Files:**
- Modify: `preview-prototype/src/styles.css`
- Modify: `preview-prototype/tests/homepage.test.mjs`
- Modify: `preview-prototype/tests/catalogue-pages.test.mjs`
- Modify: `preview-prototype/tests/editorial-pages.test.mjs`

**Interfaces:**
- All route pages share `.page-hero`, `.page-grid`, `.fact-list`, `.editorial-layout`, `.form-field`, and `.utility-page` styling tokens.

- [ ] **Step 1: Write failing final visual-guard tests**

```js
test("all inner-page layouts remain responsive and accessible", () => {
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /\.form-field input[^}]*min-height: 44px/);
  assert.match(styles, /\.site-nav a\[aria-current="page"\]/);
  assert.doesNotMatch(styles, /overflow-x:\s*auto/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/editorial-pages.test.mjs`

Expected: FAIL because inner-page responsive and active-navigation rules do not exist.

- [ ] **Step 3: Implement only the required visual guard rules**

Add responsive grid collapse, readable line lengths, 44 px form controls, current-navigation indicator, focus styles, image aspect-ratio, `cursor: pointer` for interactive controls, and reduced-motion overrides. Do not alter the approved Home Hero rules.

- [ ] **Step 4: Run all automated verification**

Run: `npm test && npm run build && npm run test:sites`

Expected: all Node tests pass, Vite build emits Sites-required files, and all worker tests pass.

- [ ] **Step 5: Run visual verification**

Run the local prototype, inspect `/stones`, `/stones/RUB-001`, `/stories`, `/how-to-choose`, `/about`, `/for-trade`, `/contact`, `/privacy`, `/cookies`, `/confirmation`, and an unmatched URL at 1440 x 900 and 390 x 844. Confirm no horizontal overflow, copy overlap, missing imagery, invisible controls, or transaction UI.

## Plan self-review

- Spec coverage: Tasks 1–5 cover every listed route, bilingual routing, preview-only restrictions, data honesty, no-data contact, shared accessibility, automated checks, and desktop/mobile visual checks.
- Placeholder scan: no unresolved placeholders; all tests, commands, file paths, interface names, and expected red/green outcomes are specified.
- Consistency: `getRoute`, `withLocalePath`, `content`, `stoneFields`, and `previewStones` are defined before consumers; later tasks use the same names.
