import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { copy } from "../src/content.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const stonePage = readFileSync(new URL("../src/pages/StoneDetailPage.jsx", import.meta.url), "utf8");
const storiesPage = readFileSync(new URL("../src/pages/StoriesPage.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("Home links to Stone Detail and Stories through application routes", () => {
  assert.match(app, /STONE_PATH/);
  assert.match(app, /STORIES_PATH/);
  assert.match(app, /window\.history\.pushState/);
});

test("Stone Detail keeps factual rail white and labels preview images as non-evidence", () => {
  assert.match(stonePage, /stone-detail/);
  assert.match(stonePage, /stone\.views\.map/);
  assert.deepEqual(copy.en.stone.views.map(([, key]) => key), ["millimetre", "report", "video"]);
  assert.match(copy.en.stone.label, /preview illustration/i);
  assert.match(copy.en.stone.evidenceNote, /Preview illustrations only/i);
  assert.doesNotMatch(stonePage, /price|cart|checkout|payment|add to cart|buy now/i);
});

test("Stories renders selectable fictional demos inside a Home-language visual stage", () => {
  assert.match(storiesPage, /publishedMoments\.length === 0/);
  assert.match(storiesPage, /fictionalStoryDemos/);
  assert.match(storiesPage, /useState/);
  assert.match(storiesPage, /stories-stage/);
  assert.match(storiesPage, /rubiae-moments-rain-street-v2\.png/);
  assert.match(storiesPage, /stories-index/);
  assert.match(storiesPage, /stories-paper/);
  assert.match(storiesPage, /stories-demo-boundary/);
  assert.match(styles, /\.stories-stage\s*\{/);
  assert.match(styles, /\.stories-paper\s*\{[\s\S]*background:\s*#fffdfa/);
  assert.match(styles, /\.stories-index\s*\{/);
  assert.match(styles, /\.stories-index button\.is-selected/);
  assert.equal(copy.en.stories.emptyTitle, "No stories have been published yet.");
  assert.doesNotMatch(storiesPage, /anonymousMoments/);
});
