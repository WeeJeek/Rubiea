# Hero Moments Letter Card Design

## Goal

Restore the approved Rubiae hero composition in which the `Rubiae Moments` feature reads as a large sheet of paper placed at an angle on the right side of the hero. Only the top hero is in scope.

## Source

- User-supplied screenshot: `/var/folders/c6/bk68f2cj2cqbbj8pjhg899lw0000gn/T/codex-clipboard-39085250-7d62-46f9-9a7a-250dadef8def.png`
- Approved project reference: `docs/brand/rubiae-homepage-still-life-concept-v5.png`

## Considered approaches

1. **Selected — large rotated paper card.** Resize the existing Moments card into a tall paper-like composition and rotate the whole card clockwise by about 3 degrees. Preserve live text and use the existing real photographic asset in its lower-left area.
2. Rotate the existing compact horizontal card only. Rejected because it remains a small promo tile rather than the approved paper-sheet composition.
3. Recreate every collage cut-out from the screenshot. Rejected because it expands this correction beyond the requested top-card geometry and would require new visual assets.

## Desktop design

- Keep the current hero background, headline, navigation, and CTA unchanged.
- Position the Moments card on the hero’s right side with its lower edge aligned close to the hero bottom.
- Use a tall off-white paper surface approximately 40–44 viewport-width percent wide and about 65–72 percent of the hero height.
- Rotate the complete card clockwise by approximately 3 degrees, with the bottom-right area acting as the visual anchor.
- Place the label, headline, and story link in the upper half. Place the existing Moments photograph in the lower-left portion. Preserve substantial empty paper space.
- Do not add fake gemstones, CSS art, gradients, decorative SVGs, prices, or transaction controls.

## Mobile design

- Keep the current verified stacked mobile layout.
- Keep the Moments card unrotated and after the hero image.
- Do not reintroduce overlap, horizontal overflow, lost imagery, or reduced text readability.

## Acceptance criteria

- At 1440 × 900, the whole Moments card is visibly paper-like, tall, and rotated clockwise about 3 degrees.
- Card text and image remain inside the paper bounds and readable.
- Hero headline, CTA, woman, ruby jewellery, and navigation remain unobstructed.
- At 390 × 844, CTA/image/Moments overlap remains `0` and horizontal overflow remains `0`.
- EN/NL, mobile menu, skip link, focus outline, and anchor behavior remain unchanged.
- Build, homepage test, Sites worker tests, image loading, and no-commerce scans pass.

## Test plan

- Add a failing static boundary test for desktop card rotation, tall dimensions, bottom anchoring, and mobile rotation reset.
- Implement only the CSS necessary to pass it.
- Capture desktop and mobile screenshots, compare the desktop hero with the approved source in one visual input, and obtain an independent subagent review.
