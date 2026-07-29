# Hero Moments Letter Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the desktop Hero `Rubiae Moments` feature as a large clockwise-rotated paper sheet while preserving the verified mobile stacked layout and all preview-only boundaries.

**Architecture:** Keep the existing React markup and photographic asset. Change only the homepage boundary test and the `.hero-story` desktop/mobile CSS: desktop becomes a tall positioned paper with its live copy above a real photo; mobile explicitly resets position, rotation, dimensions, and image layout.

**Tech Stack:** React 19, Vite 6, CSS, Node built-in test runner, in-app browser visual QA.

## Global Constraints

- Canonical root: `/Users/jiekewei/Documents/3 - Projects/6 - 红宝石`.
- Approved visual source: `docs/brand/rubiae-homepage-still-life-concept-v5.png` and the user-supplied screenshot, top hero only.
- Desktop card rotates clockwise approximately 3 degrees and reads as one tall off-white sheet.
- Mobile card remains unrotated, in normal flow after the Hero image.
- Do not change Hero background, headline, navigation, CTA, locale behavior, or other sections.
- Do not add gradients, CSS art, fake gemstones, SVG drawings, prices, cart, checkout, payment, reservation, inventory, availability, product forms, or Offer schema.
- Do not commit implementation until the user reviews the new preview.

---

### Task 1: Restore the angled Hero Moments paper

**Files:**
- Modify: `preview-prototype/tests/homepage.test.mjs`
- Modify: `preview-prototype/src/styles.css`
- Modify: `preview-prototype/design-qa.md`
- Replace: `preview-prototype/.design-qa/desktop-1440x900.jpg`
- Replace: `preview-prototype/.design-qa/mobile-390x844.jpg`
- Replace: `preview-prototype/.design-qa/reference-vs-implementation.jpg`

**Interfaces:**
- Consumes: existing `.hero-story`, `.hero-story img`, `.hero-story div`, and the `/assets/rubiae-moments-envelope.png` asset.
- Produces: desktop paper geometry and a mobile reset; no React API or DOM change.

- [x] **Step 1: Run the baseline tests**

Run:

```bash
cd preview-prototype
npm run build
npm test
npm run test:sites
```

Expected: build succeeds, homepage test `1/1` passes, Sites worker tests `4/4` pass.

- [x] **Step 2: Add the failing desktop/mobile boundary assertions**

Add these assertions to `tests/homepage.test.mjs` after the existing `.hero-story`/responsive checks:

```js
assert.match(styles, /\.hero-story\s*\{[^}]*width:\s*min\(40rem,\s*42vw\)[^}]*height:\s*37\.5rem[^}]*transform:\s*rotate\(3deg\)[^}]*transform-origin:\s*100% 100%/);
assert.match(styles, /\.hero-story img\s*\{[^}]*position:\s*absolute[^}]*bottom:\s*0[^}]*width:\s*52%[^}]*height:\s*44%/);
assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story\s*\{[^}]*height:\s*auto[^}]*transform:\s*none/);
assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story img\s*\{[^}]*position:\s*static[^}]*min-height:\s*11rem/);
```

- [x] **Step 3: Run the homepage test and verify RED**

Run:

```bash
npm test
```

Expected: FAIL because the current compact card has no `rotate(3deg)`, tall paper dimensions, or mobile position reset.

- [x] **Step 4: Implement the minimal desktop paper CSS**

Replace the current desktop `.hero-story`, `.hero-story img`, and `.hero-story div` rules with:

```css
.hero-story {
  position: absolute;
  right: -1.5rem;
  bottom: -0.75rem;
  width: min(40rem, 42vw);
  height: 37.5rem;
  overflow: hidden;
  background: #eeece9;
  transform: rotate(3deg);
  transform-origin: 100% 100%;
}
.hero-story img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 52%;
  height: 44%;
  min-height: 0;
  object-fit: cover;
  object-position: 18% center;
}
.hero-story div {
  position: relative;
  z-index: 1;
  width: 58%;
  padding: 3rem 2.5rem;
}
```

- [x] **Step 5: Add the complete mobile reset**

Replace the current mobile `.hero-story`, `.hero-story img`, and `.hero-story div` overrides with:

```css
.hero-story {
  position: relative;
  right: auto;
  bottom: auto;
  display: grid;
  grid-template-columns: 7rem 11rem;
  width: min(18rem, calc(100% - 2.5rem));
  height: auto;
  min-height: 0;
  margin: 0 1.25rem 1.25rem auto;
  overflow: visible;
  transform: none;
}
.hero-story img {
  position: static;
  width: 100%;
  height: 100%;
  min-height: 11rem;
  object-position: 18% center;
}
.hero-story div {
  width: auto;
  padding: 1rem;
}
```

- [x] **Step 6: Run GREEN tests and build**

Run:

```bash
npm test
npm run build
npm run test:sites
```

Expected: homepage `1/1` passes, build succeeds, Sites worker `4/4` passes.

- [x] **Step 7: Run preview-only regression scans**

Run:

```bash
if rg -n -i 'price|pricing|cart|checkout|payment|add[- ]to[- ]cart|buy[- ]now|product[- ]form|reservation|inventory|availability|Offer' src public --glob '!*.png' --glob '!*.jpg'; then exit 1; fi
if rg -n '<(form|input|select|textarea)\b' src; then exit 1; fi
```

Expected: both commands exit `0` without matches.

- [x] **Step 8: Perform visual QA**

At 1440 × 900, capture the Hero and verify:

```text
card rotation: approximately +3 degrees clockwise
card width: min(40rem, 42vw)
card height: 37.5rem
card lower edge: visually anchored to Hero bottom
headline/CTA/navigation/woman/ruby: unobstructed
```

At 390 × 844, capture the Hero and verify:

```text
CTA/image overlap: 0
image/Moments overlap: 0
horizontal overflow: 0
Moments transform: none
```

Place the approved reference and the 1440 × 900 screenshot in one comparison input. Replace the three `.design-qa` screenshots and append the iteration/result to `design-qa.md`.

- [x] **Step 9: Obtain independent review and stop before commit**

Reviewer checks exact source fidelity, desktop card geometry, mobile resets, image loading, EN/NL/menu/focus behavior, build/tests, and no-commerce scan. Expected result: `PASS`. Leave implementation uncommitted for user review.
