# Task 1 Report — Theme and Invariant Harness

## Status

Completed. Established the Shopify OS 2.0 preview-theme shell and a Node invariant-test harness.

## Implementation

- Added `package.json` with `npm test` running Node's built-in test runner.
- Added `layout/theme.liquid` with Shopify's `content_for_layout`, header/footer section groups, CSS, JavaScript, and skip link.
- Added valid empty `config/settings_schema.json`.
- Added a transaction-primitive invariant covering product forms, carts, checkout URLs, and `Offer` schema.
- Added tracked empty `assets`, `sections`, `snippets`, and `templates` directories required by the recursive source scan.

## Test evidence

### RED

Command: `npm test`

Result: exit 1 (expected), before `package.json` existed.

Decisive output: `npm error Missing script: "test"`.

### GREEN

Command: `npm test`

Result: exit 0.

```
# tests 1
# pass 1
# fail 0
```

### Regression checks

Command: `git diff --check`

Result: exit 0.

## Files

- `package.json`
- `layout/theme.liquid`
- `config/settings_schema.json`
- `tests/theme-invariants.test.mjs`
- `assets/.gitkeep`
- `sections/.gitkeep`
- `snippets/.gitkeep`
- `templates/.gitkeep`
- `.superpowers/sdd/task-1-report.md`

## Self-review and concerns

- No product form, cart, checkout, price, payment, or Offer schema was added.
- The invariant’s required source directories are tracked, so a fresh checkout can run the test.
- The test intentionally follows the supplied Task 1 pattern; its source scan covers `layout`, `sections`, `snippets`, and `templates` (not `assets`).
