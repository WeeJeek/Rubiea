# Stone Detail navigation contrast design

**Date:** 2026-07-31
**Feature:** `GEM-005` Stone Detail P0 navigation refinement
**Status:** Approved, locally implemented, and user-accepted on 2026-08-01

## Intent

The Stone Detail navigation must span the full viewport instead of being limited to the 65% photography column. Its text colour follows the surface beneath each navigation group so every label remains prominent without adding a bar, overlay, gradient, haze, or shadow treatment.

## Desktop behaviour

- Keep the header absolutely positioned across the full Stone Detail hero.
- Keep the `Rubiae` wordmark on the left, over the dark lifestyle photograph, in paper white.
- Keep the navigation links and language control on the right, over the paper-white fact rail, in dark ink.
- Preserve the existing 65/35 hero columns; the header must not resize, reserve, mask, or visually divide the image area.
- Hover and keyboard-focus treatments remain visible on both surfaces.

## Mobile behaviour

- Keep the header in normal document flow above the Stone Detail identity block.
- Use dark ink for the wordmark and menu button on the paper-white background.
- Open the shared mobile menu as one flush, full-width paper-white sheet with dark links rather than an inset dark panel.
- Keep `Close` as quiet unboxed text. Place EN/NL below the primary links at a smaller size, separated by a fine rule.

## Implementation boundary

- Keep the desktop contrast route-scoped with the existing `site-header--stone` class; apply the approved paper-sheet treatment to the shared mobile navigation component.
- Do not change routes, content, facts, imagery, evidence disclosure, enquiry behaviour, or other pages.
- Do not use `mix-blend-mode`; contrast must be deterministic against the approved two-surface layout.

## Acceptance criteria

1. At desktop width, the Stone Detail header spans the full viewport.
2. The left wordmark is paper white over photography; right navigation and language control are dark ink over the fact rail.
3. The header does not alter the 65/35 hero geometry or cover the fact content incorrectly.
4. At 390 px, the header and full-width opened menu use dark ink on paper white; Close is unboxed and EN/NL is visually secondary.
5. Existing Stone Detail and full preview tests, build, EN/NL control, keyboard focus, horizontal-overflow and console checks pass.
