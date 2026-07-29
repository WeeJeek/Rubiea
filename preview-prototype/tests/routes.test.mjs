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

test("includes every approved public-preview copy group in both languages", () => {
  const requiredPageFields = {
    home: ["hero", "slowLook", "chooseFreely", "moments", "facts", "closing"],
    stones: ["eyebrow", "heading", "intro", "previewNote", "fieldLabels", "emptyState", "status", "cta"],
    stoneDetail: ["eyebrow", "heading", "status", "intro", "fieldLabels", "factsHeading", "factsBody", "cta", "unknown"],
    stories: ["eyebrow", "heading", "intro", "emptyState", "detailLabel"],
    howToChoose: ["eyebrow", "heading", "intro", "sections", "cta"],
    about: ["eyebrow", "heading", "paragraphs", "cta"],
    forTrade: ["eyebrow", "heading", "intro", "focusHeading", "focusItems", "processHeading", "processBody", "cta"],
    contact: ["heading", "intro", "fieldLabels", "privacyNote", "launchNotice", "submit", "errors"],
    confirmation: ["heading"],
    privacy: ["title", "intro", "sections"],
    cookies: ["title", "intro", "choice", "change", "inventoryLabels", "buttons"],
    notFound: ["heading", "body", "cta"],
    system: ["loading", "noResults", "retry", "menuOpen", "menuClose", "changeLanguage"],
  };

  for (const locale of ["en", "nl"]) {
    for (const field of ["announcement", "enquiryNote", "navigation", "ctas", "footer", "seo", "imageAlt"]) {
      assert.ok(Object.hasOwn(content[locale].shared, field), `${locale}.shared.${field}`);
    }
    for (const [page, fields] of Object.entries(requiredPageFields)) {
      for (const field of fields) assert.ok(Object.hasOwn(content[locale].pages[page], field), `${locale}.${page}.${field}`);
    }
  }

  assert.equal(content.en.pages.stones.fieldLabels.stone_id, "Stone");
  assert.equal(content.nl.pages.stoneDetail.unknown, "Onbekend");
  assert.equal(content.en.pages.confirmation.heading, "Thank you. Your message has been received. This does not reserve the stone, create an order, require payment, or give priority. Rubiae aims to reply personally within one working day.");
});
