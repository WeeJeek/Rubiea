# Task 1 report: routes, copy, and preview fixtures

## Scope

- Added route parsing and locale-path helpers in `preview-prototype/src/routes.js`.
- Added documented EN/NL page copy and `stoneFields` in `preview-prototype/src/content.js`.
- Added two non-commercial demonstration fixtures in `preview-prototype/src/preview-stones.js`.
- Added route/fixture coverage and made `npm test` discover all `*.test.mjs` files.
- Left Home implementation untouched. No Shopify theme files changed.

## TDD evidence

### RED

Command:

```sh
npm test -- tests/routes.test.mjs
```

Result: expected failure. `ERR_MODULE_NOT_FOUND` for `src/routes.js`, while the pre-existing homepage test passed.

### GREEN

Command:

```sh
npm test -- tests/routes.test.mjs
```

Result: 7 passing tests, 0 failures. This includes the two new route/fixture tests, the existing homepage test, and Sites worker tests discovered by the updated test script.

Regression verification:

```sh
npm run build && npm run test:sites
```

Result: production build passed; 4 Sites worker tests passed.

## Boundary review

- Public-preview paths map only to the requested pages; malformed or unknown paths map to `not-found`.
- `/nl` is added or removed without changing a semantic path.
- `previewStones` has every documented fact key. Known IDs are present; all other facts are `null` for future `Unknown / Onbekend` display.
- Fixture serialization contains none of: price, cart, checkout, payment, reservation, availability, purchase, or order.
- Content strings are sourced from `docs/website/rubiae-preview-site-content.md`.

## TODO status

- `GEM-005` remains open. No project TODO or unimplemented-feature entry changed because this internal Task 1 module is only one implementation step within that existing scope.

## Concerns

- Demonstration fixtures deliberately contain no verified stone facts beyond their IDs. Page components must render `null` values as `Unknown / Onbekend` and must replace the fixtures with verified inventory facts before public product use.

## Commit

Pending commit at time of report creation.
