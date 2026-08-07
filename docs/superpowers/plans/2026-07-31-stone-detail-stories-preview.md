# Stone Detail and Stories Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add navigable Stone Detail and Stories routes to the Rubiae preview prototype, connected from Home and governed by the approved visual and privacy specifications.

**Architecture:** Keep the Vite/React prototype client-only. Add a tiny pathname router, central preview content, and two page components; the existing homepage remains visually intact but its Stones and Stories links become route navigation. Stone Detail consumes one clearly labelled preview stone and image set. Stories consumes only published, authorised data; with no approved customer content it renders an honest empty state.

**Tech Stack:** React 19, Vite 6, Node built-in test runner, CSS.

## Global Constraints

- Canonical root: `/Users/jiekewei/Documents/3 - Projects/6 - 红宝石`; work only in `preview-prototype/`.
- Public preview: no price, cart, checkout, payment, reservation or purchase claim.
- EN is default; NL must cover every visible route string.
- Product facts are demo data only and visibly remain preview-only; production evidence must use the matching real item.
- Stone Detail follows [approved reference](../specs/2026-07-31-stone-detail-home-language-design.md): 65/35 photography/paper-white fact rail, no grey haze or gradients, evidence disclosure, one final inquiry CTA.
- Stories never invent customer identity, story text, image, stone association or anonymous content. Its empty state is valid when no authorised Moment exists.
- Preserve existing homepage composition. Make only its navigation destinations functional.
- Use TDD: every production behaviour below begins with a test that fails for the missing route or UI contract.
- User requested one selective commit after the full implementation and visual review; do not commit intermediate tasks.

---

### Task 1: Define route and preview-content contracts

**Files:**
- Create: `preview-prototype/src/routes.js`
- Create: `preview-prototype/src/content.js`
- Create: `preview-prototype/tests/routes.test.mjs`

**Interfaces:**
- Produces `normalizePath(pathname)`, `isKnownRoute(pathname)`, and route constants `HOME_PATH`, `STONE_PATH`, `STORIES_PATH`.
- Produces `siteCopy`, `previewStone`, `publishedMoments`, and `anonymousMoments`.
- `publishedMoments` and `anonymousMoments` start as empty arrays in public preview data.

- [ ] **Step 1: Write the failing route/content contract test**

```js
import assert from "node:assert/strict";
import test from "node:test";
import { HOME_PATH, STONE_PATH, STORIES_PATH, isKnownRoute, normalizePath } from "../src/routes.js";
import { anonymousMoments, previewStone, publishedMoments } from "../src/content.js";

test("preview exposes only Home, one Stone Detail and Stories routes", () => {
  assert.equal(HOME_PATH, "/");
  assert.equal(STONE_PATH, "/stones/rba-001");
  assert.equal(STORIES_PATH, "/stories");
  assert.equal(normalizePath("/stories/"), STORIES_PATH);
  assert.equal(isKnownRoute("/stones/rba-001"), true);
  assert.equal(isKnownRoute("/checkout"), false);
});

test("public preview data has an evidence-shaped stone but no invented Moments", () => {
  assert.equal(previewStone.id, "RBA-001");
  assert.deepEqual(Object.keys(previewStone.images), ["lifestyle", "neutral", "macro", "millimetre", "report", "video"]);
  assert.deepEqual(publishedMoments, []);
  assert.deepEqual(anonymousMoments, []);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- tests/routes.test.mjs` from `preview-prototype/`.

Expected: FAIL because `src/routes.js` and `src/content.js` do not exist.

- [ ] **Step 3: Add the minimal route and data modules**

```js
// src/routes.js
export const HOME_PATH = "/";
export const STONE_PATH = "/stones/rba-001";
export const STORIES_PATH = "/stories";
const knownPaths = new Set([HOME_PATH, STONE_PATH, STORIES_PATH]);
export const normalizePath = (pathname) => pathname.length > 1 ? pathname.replace(/\/+$/, "") : HOME_PATH;
export const isKnownRoute = (pathname) => knownPaths.has(normalizePath(pathname));
```

`src/content.js` uses this content shape (all fields are displayed with EN/NL labels in the page):

```js
export const previewStone = {
  id: "RBA-001",
  status: "preview",
  facts: {
    weight: "1.24 ct", shape: "Oval", cut: "Mixed cut",
    treatment: "Unknown", report: "Unknown", evidenceSource: "Preview illustration",
  },
  images: {
    lifestyle: "/assets/rubiae-stone-rba-001-lifestyle.png",
    neutral: "/assets/rubiae-stone-rba-001-neutral.png",
    macro: "/assets/rubiae-stone-rba-001-macro.png",
    millimetre: "/assets/rubiae-stone-rba-001-millimetre.png",
    report: "/assets/rubiae-stone-rba-001-report.png",
    video: "/assets/rubiae-stone-rba-001-video.png",
  },
};
export const publishedMoments = [];
export const anonymousMoments = [];
```

- [ ] **Step 4: Re-run the route/content test**

Run: `npm test -- tests/routes.test.mjs`.

Expected: PASS.

### Task 2: Add text-free preview assets for the Stone Detail sequence

**Files:**
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-lifestyle.png`
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-neutral.png`
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-macro.png`
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-millimetre.png`
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-report.png`
- Create: `preview-prototype/public/assets/rubiae-stone-rba-001-video.png`
- Modify: `preview-prototype/tests/routes.test.mjs`

**Interfaces:**
- `previewStone.images` points only at the six new `/assets/rubiae-stone-rba-001-*.png` files.
- Assets are marked in adjacent page copy as preview illustration, never as laboratory or product evidence.

- [ ] **Step 1: Extend the failing contract test with asset-path assertions**

```js
import { existsSync } from "node:fs";
for (const asset of Object.values(previewStone.images)) {
  assert.match(asset, /^\/assets\/rubiae-stone-rba-001-[a-z]+\.png$/);
  assert.equal(existsSync(new URL(`../public${asset}`, import.meta.url)), true);
}
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- tests/routes.test.mjs`.

Expected: FAIL because the initial content module does not yet use the required asset file names.

- [ ] **Step 3: Generate and inspect the six text-free assets**

Use Image Gen separately for each asset. All six must depict the same clearly marked *preview illustration* of a loose deep-red oval stone under the approved cold-rain/charcoal/paper-white language. Do not burn product identity, facts, reports, CTA copy or laboratory claims into pixels. Keep the real-product replacement boundary in `content.js` visible UI copy.

- [ ] **Step 4: Reference assets from `previewStone.images` and re-run test**

Run: `npm test -- tests/routes.test.mjs`.

Expected: PASS.

### Task 3: Add client-side route navigation while preserving Home

**Files:**
- Modify: `preview-prototype/src/App.jsx`
- Create: `preview-prototype/src/components/SiteHeader.jsx`
- Create: `preview-prototype/src/pages/HomePage.jsx`
- Create: `preview-prototype/tests/navigation.test.mjs`

**Interfaces:**
- `App` owns `path` state sourced from `window.location.pathname` and a `navigate(event, path)` handler using `history.pushState` plus `popstate`.
- `SiteHeader({ locale, onLocaleChange, onNavigate, activePath })` renders global Home, Stones and Stories route links.
- `HomePage({ locale, onNavigate })` preserves current hero asset and links `Explore the stones` to `STONE_PATH` and every Rubiae Moments CTA to `STORIES_PATH`.

- [ ] **Step 1: Write the failing navigation-source test**

```js
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/pages/HomePage.jsx", import.meta.url), "utf8");

test("Home routes its primary and Moment CTAs to real preview paths", () => {
  assert.match(app, /window\.location\.pathname/);
  assert.match(app, /window\.addEventListener\("popstate"/);
  assert.match(home, /onNavigate\(event, STONE_PATH\)/);
  assert.match(home, /onNavigate\(event, STORIES_PATH\)/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- tests/navigation.test.mjs`.

Expected: FAIL because Home has only hash links and no route handler.

- [ ] **Step 3: Implement route shell and Home extraction**

Keep homepage JSX and its CSS classes intact. Replace the hash targets only where they represent Stones or Stories. `navigate` prevents default for same-origin app links, calls `history.pushState({}, "", path)`, updates state and scrolls to top; `popstate` restores state on browser Back/Forward.

- [ ] **Step 4: Run all unit tests**

Run: `npm test`.

Expected: PASS, including existing homepage visual-contract test.

### Task 4: Implement Stone Detail desktop and mobile behaviour

**Files:**
- Create: `preview-prototype/src/pages/StoneDetailPage.jsx`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`
- Create: `preview-prototype/tests/stone-detail.test.mjs`

**Interfaces:**
- `StoneDetailPage({ locale, stone, onNavigate })` renders the approved 65/35 hero, fact groups, evidence sequence, disclosure and final inquiry link.
- `evidenceOpen` is local boolean state. Closed state shows `Further evidence / Meer bewijs`; open state exposes millimetre, report and video preview with a close control.

- [ ] **Step 1: Write the failing Stone Detail contract test**

```js
const page = readFileSync(new URL("../src/pages/StoneDetailPage.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("Stone Detail exposes facts, evidence disclosure and one inquiry endpoint", () => {
  assert.match(page, /This stone/);
  assert.match(page, /What is known/);
  assert.match(page, /Unknown/);
  assert.match(page, /Further evidence/);
  assert.match(page, /Ask about this stone/);
  assert.match(page, /useState\(false\)/);
  assert.match(styles, /\.stone-detail-hero\s*\{[^}]*grid-template-columns:\s*minmax\(0, 65fr\) minmax\(18rem, 35fr\)/);
  assert.doesNotMatch(styles, /linear-gradient/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- tests/stone-detail.test.mjs`.

Expected: FAIL because the route component and its styles do not exist.

- [ ] **Step 3: Implement the page**

Use one left lifestyle image and a paper-white fact rail. Render fact rows from `stone.facts`, including unknown values and source labels. Directly below, render one paper-white evidence strip with title/description, neutral and macro images, then a disclosure `button` with `aria-expanded`. Place millimetre/report/video only in the open region. Use one final text link `Ask about this stone`; do not add a floating CTA, price or commerce control.

- [ ] **Step 4: Add responsive, focus and reduced-motion CSS**

At `max-width: 760px`, stack identity, lifestyle image, fact groups, evidence and inquiry in that order. Use only solid `#f7f5f2`-like paper surfaces and photographic grey; no CSS gradients. Preserve global focus style and add `@media (prefers-reduced-motion: reduce)` to disable page transition timing.

- [ ] **Step 5: Run Stone Detail and full tests**

Run: `npm test`.

Expected: PASS.

### Task 5: Implement honest Stories route and future-ready Moment boundaries

**Files:**
- Create: `preview-prototype/src/pages/StoriesPage.jsx`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`
- Create: `preview-prototype/tests/stories.test.mjs`

**Interfaces:**
- `StoriesPage({ locale, moments, anonymousMoments, onNavigate })` shows an empty state when `moments.length === 0`.
- When published data later exists, its desktop surface uses a title/summary index plus a direct reading/exhibit pane; anonymous content is excluded from that index.
- `showAnonymousEntry = anonymousMoments.length > 0`; no invitation renders when it is false.

- [ ] **Step 1: Write the failing Stories contract test**

```js
const page = readFileSync(new URL("../src/pages/StoriesPage.jsx", import.meta.url), "utf8");

test("Stories has an honest empty state and never exposes anonymous data in its index", () => {
  assert.match(page, /moments\.length === 0/);
  assert.match(page, /Stories are published only with permission/);
  assert.match(page, /anonymousMoments\.length > 0/);
  assert.match(page, /Encounter an anonymous Moment/);
  assert.doesNotMatch(page, /fictional customer|sample customer/i);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- tests/stories.test.mjs`.

Expected: FAIL because `StoriesPage.jsx` does not exist.

- [ ] **Step 3: Implement Stories without invented customer material**

Render `RUBIAE MOMENTS`, page title and an intentional paper-white empty exhibit explaining that publication starts after customer permission. Build the future non-empty branch around `selectedMomentId` with direct reading, left title/summary index, explicit keyboard controls and no two-step read action. Keep `anonymousMoments` out of the index; only render a textual anonymous invitation when the array is non-empty. Do not seed either public array with invented people, experiences, quotes, photos or Stone links.

- [ ] **Step 4: Add responsive Stories CSS**

Desktop: narrow text index plus main reading/exhibit surface. Mobile: current title and `All stories / Alle verhalen` button, with a focus-managed bottom drawer only in the non-empty branch. Empty state remains one readable column. Use the same homepage paper/photography rhythm, not the old book/flip-page reference.

- [ ] **Step 5: Run Stories and full tests**

Run: `npm test`.

Expected: PASS.

### Task 6: Build, browser-check and visual QA the connected route flow

**Files:**
- Modify: `preview-prototype/design-qa.md`
- Modify: `preview-prototype/tests/homepage.test.mjs`
- Modify: `preview-prototype/tests/sites-worker.test.mjs` only if the current build contract requires route fallback coverage.

**Interfaces:**
- Routes `/`, `/stones/rba-001`, and `/stories` build and load with header navigation.
- Browser checks cover desktop `1440×900` and mobile `390×844` for Home, Stone Detail (closed/open evidence), and Stories empty state.

- [ ] **Step 1: Run all automated checks after route wiring is complete**

Run:

```bash
npm test
npm run build
npm run test:sites
```

Expected: every command exits `0`.

- [ ] **Step 2: Inspect rendered routes in browser and write QA report**

Compare each route against the approved home and Stone Detail references at the same desktop viewport. Check focus, EN/NL toggle, direct URLs, Back/Forward, evidence disclosure, no commerce text, no visual grey haze, no cropped or missing images, and no console errors. Record P0/P1/P2 fixes and final result in `preview-prototype/design-qa.md`; do not hand off until it says `final result: passed`.

- [ ] **Step 3: Selectively stage and commit only after visual review**

Run `git diff --check`; stage only the route/page/assets/tests/QA plus current-round Stone Detail documents. Preserve pre-existing unrelated dirty files and `.superpowers/`. Create one commit after the user approves the rendered result.
