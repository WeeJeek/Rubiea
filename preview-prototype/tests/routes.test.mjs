import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { HOME_PATH, STONE_PATH, STORIES_PATH, isKnownRoute, normalizePath } from "../src/routes.js";
import { anonymousMoments, fictionalStoryDemos, previewStone, publishedMoments } from "../src/content.js";

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

  for (const asset of Object.values(previewStone.images)) {
    assert.match(asset, /^\/assets\/rubiae-stone-rba-001-[a-z]+\.png$/);
    assert.equal(existsSync(new URL(`../public${asset}`, import.meta.url)), true);
  }
});

test("fictional Stories demos stay separate from publishable Moments", () => {
  assert.equal(fictionalStoryDemos.length, 3);
  assert.deepEqual(publishedMoments, []);
  assert.deepEqual(anonymousMoments, []);
  for (const demo of fictionalStoryDemos) {
    assert.match(demo.en.boundary, /Fictional layout demo/);
    assert.match(demo.nl.boundary, /Fictieve layoutdemo/);
  }
});
