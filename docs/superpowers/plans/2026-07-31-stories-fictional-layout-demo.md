# Stories Fictional Layout Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show three selectable fictional Stories examples in the local Rubiae preview without changing the real-authorisation data model.

**Architecture:** `src/content.js` gains a separate `fictionalStoryDemos` collection and bilingual UI copy; `publishedMoments` and `anonymousMoments` remain empty. `StoriesPage` holds the selected demo in component state and renders the existing rain-stage with an index rail and paper exhibit. CSS adds only the responsive stage, rail, and selected-state rules.

**Tech Stack:** React 19, Vite 6, Node built-in test runner, CSS.

## Global Constraints

- Every visible demo state says it is fictional and not a customer story.
- The three demos have no names, locations, dates, Stone IDs, gemstones, customer images, or customer possessions.
- Do not add content to `publishedMoments` or `anonymousMoments`; do not create story URLs, commerce language, generated images, sitemap entries, or a production import path.
- EN/NL language switch must translate all demo UI and story text.
- Do not commit until the user has visually approved this connected implementation round.

---

### Task 1: Isolated fictional demo data

**Files:**
- Modify: `preview-prototype/src/content.js`
- Modify: `preview-prototype/tests/routes.test.mjs`

**Interfaces:**
- Produces: `fictionalStoryDemos`, an array of three `{ id, en, nl }` entries.
- Consumes: existing `publishedMoments`, `anonymousMoments`, and `copy` export.

- [ ] **Step 1: Write the failing test**

```js
import { anonymousMoments, fictionalStoryDemos, publishedMoments } from "../src/content.js";

test("fictional Stories demos stay separate from publishable Moments", () => {
  assert.equal(fictionalStoryDemos.length, 3);
  assert.deepEqual(publishedMoments, []);
  assert.deepEqual(anonymousMoments, []);
  for (const demo of fictionalStoryDemos) {
    assert.match(demo.en.boundary, /Fictional layout demo/);
    assert.match(demo.nl.boundary, /Fictieve layoutdemo/);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/routes.test.mjs`

Expected: FAIL because `fictionalStoryDemos` is not exported.

- [ ] **Step 3: Add minimal data and copy**

```js
export const fictionalStoryDemos = [
  {
    id: "quiet-gesture",
    en: {
      title: "A quiet gesture",
      summary: "A small choice, kept close.",
      body: "This is fictional sample copy for layout review only. It tests the rhythm of a story held on a page, without standing in for anyone's experience.",
      boundary: "Fictional layout demo — not a customer story.",
    },
    nl: {
      title: "Een stil gebaar",
      summary: "Een kleine keuze, dichtbij gehouden.",
      body: "Dit is fictieve voorbeeldtekst, alleen voor layoutbeoordeling. Zij test het ritme van een verhaal op papier, zonder voor iemands ervaring te spreken.",
      boundary: "Fictieve layoutdemo — geen klantverhaal.",
    },
  },
  {
    id: "kept-in-view",
    en: { title: "Kept in view", summary: "A pause before the next step.", body: "This fictional sample copy gives a second title and a longer line of reading room. It exists only to examine selection, hierarchy, and the pace of the paper exhibit.", boundary: "Fictional layout demo — not a customer story." },
    nl: { title: "In beeld gehouden", summary: "Een pauze voor de volgende stap.", body: "Deze fictieve voorbeeldtekst geeft een tweede titel en meer leesruimte. Zij bestaat alleen om selectie, hiërarchie en het tempo van het papieren exhibit te beoordelen.", boundary: "Fictieve layoutdemo — geen klantverhaal." },
  },
  {
    id: "room-to-return",
    en: { title: "Room to return", summary: "Meaning can remain unfinished.", body: "This fictional sample copy makes room for a quieter ending. It tests how a short story settles on the page when no personal account has been authorised for publication.", boundary: "Fictional layout demo — not a customer story." },
    nl: { title: "Ruimte om terug te keren", summary: "Betekenis mag onaf zijn.", body: "Deze fictieve voorbeeldtekst laat ruimte voor een stiller einde. Zij test hoe een kort verhaal op de pagina landt wanneer geen persoonlijk verhaal voor publicatie is geautoriseerd.", boundary: "Fictieve layoutdemo — geen klantverhaal." },
  },
];
```

Add `stories.demoLabel`, `stories.allDemos`, and `stories.demoByline` to both locales in `copy`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/routes.test.mjs`

Expected: PASS with the existing route/data tests still green.

### Task 2: Selectable desktop rail and responsive exhibit

**Files:**
- Modify: `preview-prototype/src/pages/StoriesPage.jsx`
- Modify: `preview-prototype/src/styles.css`
- Modify: `preview-prototype/tests/page-contract.test.mjs`

**Interfaces:**
- Consumes: `fictionalStoryDemos`, `text.stories`, React `useState`.
- Produces: selectable `StoriesPage` demo experience at `/stories`.

- [ ] **Step 1: Write the failing test**

```js
assert.match(storiesPage, /fictionalStoryDemos/);
assert.match(storiesPage, /useState/);
assert.match(storiesPage, /stories-index/);
assert.match(storiesPage, /stories-demo-boundary/);
assert.match(styles, /\.stories-index\s*\{/);
assert.match(styles, /\.stories-index button\.is-selected/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/page-contract.test.mjs`

Expected: FAIL because the current page only renders the empty state.

- [ ] **Step 3: Implement the smallest selectable exhibit**

```jsx
const [selectedId, setSelectedId] = useState(fictionalStoryDemos[0].id);
const selected = fictionalStoryDemos.find((demo) => demo.id === selectedId) ?? fictionalStoryDemos[0];
const demo = selected[locale];

<nav className="stories-index" aria-label={stories.allDemos}>
  {fictionalStoryDemos.map((item) => <button className={item.id === selected.id ? "is-selected" : ""} onClick={() => setSelectedId(item.id)} type="button">...</button>)}
</nav>
<article className="stories-paper">
  <p className="stories-demo-boundary">{demo.boundary}</p>
  <h1>{demo.title}</h1>
  <p>{demo.body}</p>
</article>
```

Keep the visual-stage image decorative. On small screens, stack the index under `All demo stories` above the paper; no horizontal scroller and no automatic motion.

- [ ] **Step 4: Run focused and full verification**

Run: `npm test && npm run build && git diff --check`

Expected: all tests PASS, build exits 0, no whitespace errors.

- [ ] **Step 5: Provide the local review link**

Run: `nohup npm run dev -- --host 127.0.0.1 --port 4173 </dev/null >/private/tmp/rubiae-preview-vite.log 2>&1 & sleep 2; curl -I --max-time 5 http://127.0.0.1:4173/stories`

Expected: HTTP `200 OK`; give the user `http://127.0.0.1:4173/stories` for visual approval.
