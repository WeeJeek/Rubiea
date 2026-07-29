# Hero Moments Original Collage Card Design

## Decision

Restore the desktop Hero `Rubiae Moments` card to the exact anatomy shown in the user-supplied original-design crop. This specification supersedes the near-square card geometry in `2026-07-29-hero-moments-letter-card-design.md`.

## Visual source

- Selected source: `/var/folders/c6/bk68f2cj2cqbbj8pjhg899lw0000gn/T/codex-clipboard-7dca9b40-de87-4d80-8c51-01920e104f5d.png`
- The source is the binding reference for card proportion, rotation, text placement, and collage anatomy.
- The existing Hero background, navigation, woman, tabletop ruby jewellery, headline, body copy, and CTA remain unchanged.

## Considered approaches

1. **Selected — live editorial card with two raster collage assets.** Keep EN/NL text as live HTML, generate a dedicated monochrome rainy-street image and a dedicated ruby close-up, and place both inside a portrait paper sheet. This preserves accessibility, bilingual behavior, and the source layout.
2. Use the supplied screenshot as one flattened card image. Rejected because its English text would not translate, its resolution is limited, and the surrounding Hero pixels are baked into the crop.
3. Reuse the current envelope image and only change the card ratio. Rejected because the subject and collage anatomy would still differ visibly from the selected source.

## Desktop geometry

- At 1440 × 900, the paper reads as a portrait sheet: `width: min(46rem, 48vw)` and `height: 54rem`.
- Anchor it to the Hero with `right: -5.5rem`, `bottom: -9rem`, `transform: rotate(3.5deg)`, and `transform-origin: 100% 100%`.
- The Hero clips the lower and right edges naturally; the page must not create horizontal overflow.
- Put live label, headline, and link in the upper-left with approximately `4rem` top/left padding and a text width near `54%`.
- The headline keeps a narrow three-line wrap matching `Her story, / in her own / words.` at the approved desktop width.

## Collage anatomy

- Add a real raster monochrome rainy-street photograph inside the paper, anchored bottom-left, approximately `56%` of paper width and `42%` of paper height.
- Add a real raster ruby close-up inside a circular crop, anchored partly beyond the lower-right paper edge, approximately `34%` of paper width.
- The street image and ruby are decorative editorial imagery, not product evidence and not tied to inventory, certificates, prices, or availability.
- Do not create either asset with CSS art, gradients, SVG drawings, placeholder shapes, or copied screenshot fragments.

## Mobile geometry

- Keep the card unrotated and in normal flow after the Hero image.
- Preserve the same live-text-plus-two-image anatomy in a readable portrait card.
- At 390 × 844, CTA/image overlap, Hero-image/card overlap, and horizontal overflow must remain `0`.
- Menu, EN/NL, `html.lang`, anchors, skip link, and focus outline remain unchanged.

## Preview-only boundary

- No price, cart, checkout, payment, reservation, inventory, availability, product form, or Offer schema.
- Do not deploy or enable transaction functionality.

## Acceptance criteria

- The current near-square Hero card is no longer visible.
- The 1440 × 900 Hero visibly matches the selected portrait paper proportion, approximately `3.5deg` clockwise tilt, upper-left live copy, bottom-left monochrome street image, and lower-right ruby circle.
- Card content stays inside the paper composition; headline, CTA, navigation, woman, and tabletop ruby jewellery remain unobstructed.
- All images load with non-zero natural dimensions.
- At 390 × 844, the card is unrotated, readable, and creates no overlap or horizontal overflow.
- Build, homepage test, Sites worker tests, interaction checks, image loading checks, and preview-only scans pass.

## Test plan

- First add a failing boundary test for portrait dimensions, `3.5deg` rotation, two image classes, and mobile reset.
- Generate and inspect the two missing raster assets before wiring them into the component.
- Implement the smallest JSX/CSS change that passes the boundary test.
- Capture reference and implementation in one comparison input; repeat until no P0/P1/P2 mismatch remains.
- Obtain an independent subagent review and leave the implementation uncommitted for user review.
