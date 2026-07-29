import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { stoneFields } from "../src/content.js";

const readSource = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("catalogue and detail preserve evidence-first preview boundaries", () => {
  const app = readSource("../src/App.jsx");
  const stoneFacts = readSource("../src/components/StoneFacts.jsx");
  const stoneCard = readSource("../src/components/StoneCard.jsx");
  const stonesPage = readSource("../src/pages/StonesPage.jsx");
  const detailPage = readSource("../src/pages/StoneDetailPage.jsx");
  const styles = readSource("../src/styles.css");

  assert.match(stoneFacts, /<dl/);
  for (const field of stoneFields) assert.match(stoneFacts, new RegExp(field));
  assert.match(stoneFacts, /unknown/);
  assert.match(stonesPage, /PreviewNotice/);
  assert.match(detailPage, /Ask about this stone|Vraag naar deze steen/);
  assert.match(detailPage, /contact\?stone_id=/);
  assert.match(app, /StonesPage/);
  assert.match(app, /StoneDetailPage/);
  assert.match(styles, /\.site-header:has\(\+ main \.catalogue-page\)/);
  assert.doesNotMatch(`${stoneCard}\n${stonesPage}\n${detailPage}`, /price|cart|checkout|payment|reservation|availability|buy now/i);
});

test("stone detail resolves English and Dutch gemstone heading tokens with an honest fallback", () => {
  const detailPage = readSource("../src/pages/StoneDetailPage.jsx");

  assert.match(detailPage, /replace\(\/\\\{\\\{gemstone_name\(\?:_nl\)\?\\\}\\\}\/g, stone\.facts\.material_type \|\| text\.unknown\)/);
  assert.doesNotMatch(detailPage, /replace\("\{\{gemstone_name\}\}"/);
});
