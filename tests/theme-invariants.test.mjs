import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const THEME_SOURCE_DIRECTORIES = ['layout', 'sections', 'snippets', 'templates', 'assets'];
const TRANSACTION_PRIMITIVES = new RegExp([
  '\\bprice\\b',
  '\\bcart\\b',
  '\\bcheckout\\b',
  '\\bpayment\\b',
  "form\\s+['\\\"]product['\\\"]",
  '\\bproduct-form\\b',
  '\\badd-to-cart\\b',
  '\\bbuy\\s+now\\b',
  '\\breservation\\b',
  '\\binventory\\b',
  '\\bavailability\\b',
  "['\\\"]@type['\\\"]\\s*:\\s*['\\\"]Offer['\\\"]",
].join('|'), 'i');

const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]
);
const themeSource = () => THEME_SOURCE_DIRECTORIES.flatMap(files)
  .map((file) => readFileSync(file, 'utf8')).join('\n');

test('theme has no transaction primitives', () => {
  assert.doesNotMatch(themeSource(), TRANSACTION_PRIMITIVES);
});
