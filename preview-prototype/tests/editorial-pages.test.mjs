import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("editorial and utility routes are bilingual, honest, and client-only", () => {
  const app = readSource("../src/App.jsx");
  const content = readSource("../src/content.js");
  const editorial = readSource("../src/pages/EditorialPage.jsx");
  const contact = readSource("../src/pages/ContactPage.jsx");
  const confirmation = readSource("../src/pages/ConfirmationPage.jsx");
  const notFound = readSource("../src/pages/NotFoundPage.jsx");

  for (const page of ["stories", "how-to-choose", "about", "for-trade", "privacy", "cookies"]) assert.match(app, new RegExp(page));
  assert.match(editorial, /emptyState/);
  assert.match(content, /No personal story is published without clear permission|Geen persoonlijk verhaal wordt zonder duidelijke toestemming gepubliceerd/);
  assert.match(content, /launch requirements|lanceringsvereisten/);
  assert.match(contact, /type="email"/);
  assert.match(contact, /LaunchConsent/);
  assert.match(contact, /aria-live="polite"/);
  assert.doesNotMatch(contact, /fetch\(|XMLHttpRequest|localStorage|sessionStorage/);
  assert.match(confirmation, /text\.heading/);
  assert.match(content, /does not reserve the stone|reserveert de steen niet/);
  assert.match(notFound, /withLocalePath\("\/", locale\)/);
  for (const component of ["EditorialPage", "ContactPage", "ConfirmationPage", "NotFoundPage"]) assert.match(app, new RegExp(component));
});
