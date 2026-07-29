# Hero Moments Original Collage Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the near-square Hero Moments card with the approved portrait collage card from the user-supplied original-design crop.

**Architecture:** Keep the existing React page and Hero background. Add two project-local raster assets for the card collage, expose them as two semantic image elements in the existing `hero-story` aside, and replace only the card’s desktop/mobile geometry. Preserve all navigation, localization, accessibility, preview-only, worker, and hosting behavior.

**Tech Stack:** React 19, Vite 6, CSS, Node built-in test runner, built-in ImageGen, in-app browser visual QA.

## Global Constraints

- Canonical root: `/Users/jiekewei/Documents/3 - Projects/6 - 红宝石`.
- Binding source: `/var/folders/c6/bk68f2cj2cqbbj8pjhg899lw0000gn/T/codex-clipboard-7dca9b40-de87-4d80-8c51-01920e104f5d.png`.
- Desktop paper: `width: min(46rem, 48vw)`, `height: 54rem`, `right: -5.5rem`, `bottom: -9rem`, `rotate(3.5deg)`, `transform-origin: 100% 100%`.
- Desktop collage: monochrome rainy street bottom-left; circular ruby close-up lower-right; live bilingual copy upper-left.
- Mobile: unrotated portrait card in normal flow after the Hero image; no overlap or horizontal overflow at 390 × 844.
- Keep the existing Hero background, headline, navigation, CTA, locale behavior, mobile menu, anchors, skip link, focus outline, and all later sections unchanged.
- Do not add gradients, CSS art, SVG drawings, screenshot fragments, prices, cart, checkout, payment, reservation, inventory, availability, product forms, or Offer schema.
- Do not deploy, enable transaction functionality, stage, or commit implementation before user review.

---

### Task 1: Produce the two original-card collage assets

**Files:**
- Create: `preview-prototype/public/assets/rubiae-moments-rain-street-v2.png`
- Create: `preview-prototype/public/assets/rubiae-moments-ruby-v2.png`

**Interfaces:**
- Consumes: the binding source crop for subject, grayscale treatment, crop, ruby color, and lighting.
- Produces: two text-free raster assets consumed by Task 2 as `/assets/rubiae-moments-rain-street-v2.png` and `/assets/rubiae-moments-ruby-v2.png`.

- [x] **Step 1: Generate the monochrome rainy-street asset**

Use built-in ImageGen with the binding source as a reference image and this prompt:

```text
Use case: photorealistic-natural
Asset type: editorial collage photograph inside the Rubiae Moments paper card
Input image: the supplied original-card screenshot is a composition and mood reference only
Primary request: create a text-free black-and-white rainy European city street photograph with wet pavement, bare winter trees, a classic lamppost at left, and a dark stone statue cropped close on the right edge
Composition/framing: portrait 4:5 crop; lamppost near the left third; street receding through the center; statue occupies the right quarter; usable at small size
Lighting/mood: overcast rain, restrained editorial contrast, realistic photographic grain
Color palette: neutral grayscale only
Constraints: no ruby, no jewellery, no paper, no typography, no logos, no watermark, no border, no collage frame
```

Inspect the result at original detail. Save the selected final file to `preview-prototype/public/assets/rubiae-moments-rain-street-v2.png`.

- [x] **Step 2: Generate the ruby close-up asset**

Use built-in ImageGen with the binding source as a reference image and this prompt:

```text
Use case: product-mockup
Asset type: decorative editorial ruby close-up inside the Rubiae Moments paper card
Input image: the supplied original-card screenshot is a composition, gemstone color, and lighting reference only
Primary request: create a text-free macro photograph of one round faceted deep berry-red ruby resting against a cool charcoal-gray stone surface
Composition/framing: square close crop; gemstone fills the central 64% of the frame; complete gemstone remains visible; designed to be cropped into a circle by the webpage
Lighting/mood: soft directional studio light; wine-red shadows; bright rose-red facets; restrained reflections
Color palette: cool gray, deep berry red, burgundy, small bright rose highlights
Constraints: realistic gemstone; no ring, no setting, no hand, no extra stones, no typography, no logos, no watermark, no border
```

Inspect the result at original detail. Save the selected final file to `preview-prototype/public/assets/rubiae-moments-ruby-v2.png`.

- [x] **Step 3: Validate asset files**

Run:

```bash
sips -g pixelWidth -g pixelHeight \
  preview-prototype/public/assets/rubiae-moments-rain-street-v2.png \
  preview-prototype/public/assets/rubiae-moments-ruby-v2.png
```

Expected: both files are readable, the street asset is portrait, the ruby asset is square, and neither contains text or a watermark on visual inspection.

- [x] **Step 4: Write the task report**

Record generated file paths, final prompts, built-in mode, dimensions, and visual inspection result in `.superpowers/sdd/hero-original-collage-task-1-report.md`. Do not commit.

---

### Task 2: Restore the portrait paper and collage anatomy with TDD

**Files:**
- Modify: `preview-prototype/tests/homepage.test.mjs`
- Modify: `preview-prototype/src/App.jsx`
- Modify: `preview-prototype/src/styles.css`
- Modify: `preview-prototype/AGENTS.md`
- Modify: `preview-prototype/design-qa.md`
- Replace: `preview-prototype/.design-qa/desktop-1440x900.jpg`
- Replace: `preview-prototype/.design-qa/mobile-390x844.jpg`
- Replace: `preview-prototype/.design-qa/reference-vs-implementation.jpg`

**Interfaces:**
- Consumes: `/assets/rubiae-moments-rain-street-v2.png` and `/assets/rubiae-moments-ruby-v2.png` from Task 1.
- Produces: `.hero-story-street` and `.hero-story-ruby` image elements; desktop portrait collage geometry; mobile unrotated reset.

- [x] **Step 1: Run the baseline**

Run from `preview-prototype`:

```bash
npm run build
npm test
npm run test:sites
```

Expected: build succeeds, homepage test `1/1` passes, Sites worker tests `4/4` pass.

- [x] **Step 2: Add the failing boundary assertions**

In `tests/homepage.test.mjs`, replace the former `3deg` near-square assertions with:

```js
assert.match(app, /className="hero-story-street"[^>]*rubiae-moments-rain-street-v2\.png/);
assert.match(app, /className="hero-story-ruby"[^>]*rubiae-moments-ruby-v2\.png/);
assert.match(styles, /\.hero-story\s*\{[^}]*right:\s*-5\.5rem[^}]*bottom:\s*-9rem[^}]*width:\s*min\(46rem,\s*48vw\)[^}]*height:\s*54rem[^}]*transform:\s*rotate\(3\.5deg\)[^}]*transform-origin:\s*100% 100%/);
assert.match(styles, /\.hero-story-street\s*\{[^}]*position:\s*absolute[^}]*bottom:\s*7%[^}]*left:\s*0[^}]*width:\s*56%[^}]*height:\s*42%/);
assert.match(styles, /\.hero-story-ruby\s*\{[^}]*position:\s*absolute[^}]*right:\s*7%[^}]*bottom:\s*14%[^}]*width:\s*34%[^}]*border-radius:\s*50%/);
assert.match(styles, /@media \(max-width: 760px\)[\s\S]*\.hero-story\s*\{[^}]*height:\s*32rem[^}]*transform:\s*none/);
```

- [x] **Step 3: Verify RED**

Run:

```bash
npm test
```

Expected: FAIL because the component still has one envelope image and the desktop card still uses the old `3deg` near-square geometry.

- [x] **Step 4: Add the two collage images**

Replace the first image inside the `hero-story` aside with:

```jsx
<img className="hero-story-street" src="/assets/rubiae-moments-rain-street-v2.png" alt="Rainy city street and sculpture in monochrome" />
<img className="hero-story-ruby" src="/assets/rubiae-moments-ruby-v2.png" alt="Decorative close-up of a deep red ruby" />
```

Do not change the existing copy block or the later Moments section.

- [x] **Step 5: Implement the desktop portrait collage CSS**

Replace the desktop `hero-story` rules with:

```css
.hero-story {
  position: absolute;
  right: -5.5rem;
  bottom: -9rem;
  width: min(46rem, 48vw);
  height: 54rem;
  overflow: hidden;
  background: #eeece9;
  transform: rotate(3.5deg);
  transform-origin: 100% 100%;
}
.hero-story-street {
  position: absolute;
  bottom: 7%;
  left: 0;
  width: 56%;
  height: 42%;
  object-fit: cover;
}
.hero-story-ruby {
  position: absolute;
  right: 7%;
  bottom: 14%;
  width: 34%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}
.hero-story div {
  position: relative;
  z-index: 1;
  width: 54%;
  padding: 4rem;
}
.hero-story h2 {
  max-width: 7ch;
  font-size: clamp(2.9rem, 3.7vw, 4.25rem);
}
```

- [x] **Step 6: Implement the mobile reset**

Inside `@media (max-width: 760px)`, replace the card overrides with:

```css
.hero-story {
  position: relative;
  right: auto;
  bottom: auto;
  display: block;
  width: min(20.5rem, calc(100% - 2.5rem));
  height: 32rem;
  margin: 0 1.25rem 1.25rem auto;
  overflow: hidden;
  transform: none;
}
.hero-story-street {
  bottom: 0;
  left: 0;
  width: 62%;
  height: 42%;
}
.hero-story-ruby {
  right: -9%;
  bottom: -3%;
  width: 38%;
}
.hero-story div {
  width: 70%;
  padding: 2rem 1.5rem;
}
.hero-story h2 {
  max-width: 7ch;
  font-size: 2rem;
}
```

- [x] **Step 7: Record the durable design rule**

In `preview-prototype/AGENTS.md`, replace the old near-square card rule with:

```markdown
- Keep the desktop Hero `Rubiae Moments` feature as the original portrait collage sheet: about `3.5deg` clockwise, live copy upper-left, monochrome rainy-street image bottom-left, and circular ruby close-up lower-right; keep the mobile card unrotated in normal flow after the Hero image.
```

- [x] **Step 8: Verify GREEN and preview-only boundaries**

Run:

```bash
npm test
npm run build
npm run test:sites
if rg -n -i 'price|pricing|cart|checkout|payment|add[- ]to[- ]cart|buy[- ]now|product[- ]form|reservation|inventory|availability|Offer' src public --glob '!*.png' --glob '!*.jpg'; then exit 1; fi
if rg -n '<(form|input|select|textarea)\b' src; then exit 1; fi
```

Expected: homepage `1/1`, Sites `4/4`, build success, and both scans exit `0` without matches.

- [x] **Step 9: Perform blocking visual QA**

At 1440 × 900, capture and measure:

```text
card rotation: +3.5 degrees clockwise
card ratio: portrait
headline/CTA/navigation overlap: 0
horizontal overflow: 0
street and ruby images: loaded and visibly contained in the paper collage
```

At 390 × 844, capture and measure:

```text
Moments transform: none
CTA/Hero image overlap: 0
Hero image/Moments overlap: 0
horizontal overflow: 0
```

Place the binding source and the current desktop screenshot in one comparison surface. Replace all three `.design-qa` images and update `design-qa.md` with source/implementation dimensions, viewport, focused card-region evidence, findings, iteration history, interaction checks, console result, and exactly `final result: passed` only when no P0/P1/P2 mismatch remains.

- [x] **Step 10: Obtain independent review and stop before commit**

Reviewer checks the selected source, exact portrait geometry, collage anatomy, mobile reset, EN/NL/menu/focus behavior, build/tests, image loading, console, and no-commerce boundary. Expected result: spec compliance PASS and task quality PASS. Leave implementation uncommitted for user review.
