# Rubiae preview prototype — Design QA

- **Source of truth:** `../docs/brand/rubiae-homepage-still-life-concept-v5.png` (803 × 1959, approved v5)
- **Desktop evidence:** `.design-qa/desktop-1440x900.jpg` (1440 × 900 CSS px, density 1×)
- **Mobile evidence:** `.design-qa/mobile-390x844.jpg` (390 × 844 CSS px, density 1×)
- **Combined comparison:** `.design-qa/reference-vs-implementation.jpg` (approved source and implementation in one comparison surface)
- **Runtime:** local Vite preview at `http://127.0.0.1:4173/`

## Acceptance evidence

- Desktop preserves the approved composition: rainy-window hero, left editorial headline, right human silhouette, paper Moments card, cool-grey palette, restrained plum accents, and serif-led hierarchy.
- All six photographic assets load with non-zero natural dimensions. No placeholder, CSS art, duplicated baked-in copy, or missing image remains.
- Mobile uses a dedicated stacked composition: live copy on a light field, followed by the hero photograph and then the Moments card. At 390 × 844: CTA bottom `493.96`, image top `504`, image bottom `888`, Moments top `888`, overlap `0`, horizontal overflow `0`.
- EN/NL toggle works and synchronizes `html.lang`; mobile menu, anchor navigation, skip link, and visible keyboard focus work.
- Source and built output contain no price, cart, checkout, payment, reservation, inventory, availability, product form, or Offer schema.

## Iteration history

1. Rejected the initial stitched static preview: duplicated copy, overlapping layers, missing images, and large empty regions.
2. Rebuilt from the approved v5 reference as a React prototype with six text-free photographic assets.
3. Independent review rejected the first mobile crop because the headline crossed the dark figure and `html.lang`/focus handling were incomplete.
4. Independent review rejected the 20% mobile crop because the person and ruby disappeared.
5. Replaced crop-only mobile layout with stacked copy/image/card; independent review then found a 30 px CTA/image overlap.
6. Increased the mobile copy field to 31.5 rem. Final independent review passed desktop, 390 × 844 mobile, EN/NL, keyboard, image loading, overflow, build, tests, and no-commerce scan.
7. Restored the Hero Moments feature as one tall paper sheet rotated `3deg` clockwise on desktop. The reference and current 1440 × 900 Hero were reviewed side by side; the mobile card remains unrotated in normal flow with zero image/card overlap and zero horizontal overflow.

## Verification

- `npm run build`: passed
- `npm test`: 1/1 passed
- `npm run test:sites`: 4/4 passed
- Desktop geometry: 1440 × 900 viewport, `rotate(3deg)`, no overlap with headline, CTA, or navigation, and no horizontal overflow
- Mobile geometry: 390 × 844 viewport, `transform: none`, static card image, zero image/card overlap, and no horizontal overflow
- Independent visual/code review: PASS — no blockers

## Final result

passed
