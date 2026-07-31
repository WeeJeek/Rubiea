# Rubiae Hero ruby reference correction — Design QA

## Evidence

- **Binding source:** `/var/folders/c6/bk68f2cj2cqbbj8pjhg899lw0000gn/T/codex-clipboard-8f067538-5753-4759-8eba-34e788ae4a88.png` — 1092 × 1352 px, user-selected card close-up.
- **Desktop implementation:** `.design-qa/desktop-1440x900.jpg` — 1440 × 900 CSS px, English Hero, menu closed.
- **Mobile implementation:** `.design-qa/mobile-390x844.jpg` — 390 × 844 CSS px, scrolled card-region state.
- **Focused comparison:** `.design-qa/reference-vs-implementation.jpg` — binding source and current desktop card in one same-height comparison.
- **Runtime:** local Vite preview at `http://127.0.0.1:4173/`.

## Fidelity result

- Desktop keeps the approved portrait paper, `3.5deg` tilt, live text, and unchanged rainy-street crop.
- The charcoal circle is now enlarged and raised to remove the excess white gap above it: desktop `right: -10%`, `bottom: -3%`, `width: 58%`.
- The final 1254 × 1254 v6 raster is a deep berry-red, vertically oval faceted ruby. The paper edge crops it so only its left portion is visible, matching the binding source.
- Mobile keeps the paper unrotated and uses `right: -29%`, `bottom: -6%`, `width: 58%`; document width equals the 390 px viewport.
- All 8 images load with non-zero natural dimensions. No later page section or transactional behavior changed.

## Comparison history

1. The prior v2 asset exposed a complete bright round ruby and left too much white space above the lower-right image.
2. A geometry boundary test went RED for the prior values; the circle was enlarged and repositioned, then the test returned GREEN.
3. Focused comparisons rejected v4 because too little ruby was visible and v5 because its pointed pear silhouette did not match the source.
4. The v6 rounded vertical oval matches the requested silhouette, crop, dark berry palette, and partial edge exposure with no actionable P0/P1/P2 mismatch.

## Responsive and interaction QA

- At 390 × 844, the card is 328 × 512 px, document width is 390 px, and there is no horizontal overflow.
- Mobile menu toggled `aria-expanded` from `false` to `true` and back.
- EN/NL changed `html.lang` from `en` to `nl` and rendered the Dutch Hero headline, then returned to English.
- Browser console contained only Vite/React development messages; no errors or warnings.

## Verification

- `npm test`: passed after the expected RED/implementation/GREEN cycle.
- `npm run build`: passed; Sites artifacts prepared.
- `npm run test:sites`: 4/4 passed.
- Preview-only and form-control scans: zero matches; `git diff --check`: passed.
- Independent final review: spec PASS, task quality PASS, no blockers.

## Final result

passed

## CTA placement addendum — 2026-07-31

- **Scope:** Desktop `How to choose` image section.
- **Evidence:** User-provided screenshot showed the CTA obscuring `Choose freely.`
- **Local capture:** In-app browser at 1280 × 720 after the fix.
- **Result:** Headline stays upper-left; CTA is lower-right, inside the photo, with no overlap.

### Result

passed
