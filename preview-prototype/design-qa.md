# Stone Detail Design QA

## Comparison target

- Source visual truth: `../docs/brand/rubiae-stone-detail-light-editorial-approved-reference.png`
- Source pixels: `1487 × 1058`
- Desktop implementation: `qa/stone-detail-desktop-1440x900.png`
- Desktop evidence-open state: `qa/stone-detail-desktop-evidence-open-1440x900.png`
- Mobile implementation: `qa/stone-detail-mobile-390x844.png`
- Mobile evidence-open state: `qa/stone-detail-mobile-evidence-open-390x844.png`
- Browser route: `/stones/rba-001`
- Viewports and output pixels: desktop `1440 × 900`, mobile `390 × 844`; browser output was normalized to one output pixel per CSS pixel.
- States: EN closed evidence, EN/NL language switch, desktop/mobile open evidence, mobile navigation closed/open.

## Full-view comparison evidence

The approved reference and the final desktop screenshot were opened together and compared at equivalent page-top state. The implementation preserves the reference's visible 65/35 split, cold-grey rainy-window photography, paper-white fact rail, two fact groups, compact evidence strip, quiet disclosure surface and single final inquiry area. Demonstration content intentionally differs from the source's fictional numeric facts: unknown fields remain `Unknown / Onbekend`, and the page explicitly says the imagery is not product evidence.

The mobile closed and open screenshots were reviewed together. At `390 × 844`, content order is identity, lifestyle image, fact groups, evidence and inquiry. Measured document width equals viewport width (`390 px`), so there is no horizontal overflow.

Focused crops were not required: typography, fact rows, preview notice, disclosure label and inquiry action were legible in the fixed-viewport screenshots. Separate fixed-viewport screenshots cover the expanded disclosure state without relying on stitched full-page imagery.

## Required fidelity surfaces

- **Fonts and typography:** Existing Rubiae Georgia display type and Arial/Helvetica utility copy are preserved. Heading scale, fact-label hierarchy, line height and compact navigation match the approved editorial direction. The longer safe demonstration title wraps only where the viewport requires it.
- **Spacing and layout rhythm:** Desktop uses `65fr / 35fr`; hero height is `700 px`. Evidence follows immediately with a four-part editorial grid. Mobile uses explicit `identity / photo / facts` grid areas and a one-column evidence sequence.
- **Colors and visual tokens:** Paper surfaces use solid `#fffdfa` and `#f0edeb`; text remains ink/charcoal with restrained berry-red status copy. No CSS gradient, haze or whole-page grey overlay is present.
- **Image quality and asset fidelity:** Existing text-free raster assets remain sharp and correctly cropped. Lifestyle, neutral, macro, millimetre, report and video-preview images all carry localized alt text and are explicitly labelled as preview illustrations, not catalogue evidence.
- **Copy and content:** EN and NL include both fact groups, `Unknown / Onbekend`, preview-only notice, evidence labels, open/close disclosure copy and `Ask about this stone / Vraag naar deze steen`. No price, cart, checkout, payment or purchase action appears.

## Accessibility and interaction checks

- Disclosure is a native button with `aria-expanded` and `aria-controls`; pointer activation opened and closed the supporting evidence region.
- Mobile menu and EN/NL switch were exercised; `html.lang` changed to `nl` and Dutch Stone Detail copy rendered.
- Visible focus styling remains available for links and buttons; the evidence control received focus during browser interaction.
- Reduced-motion CSS disables smooth scrolling and transition/animation timing.
- Desktop and mobile browser consoles reported no errors.

## Comparison history

### Iteration 1

- **P1:** Stone Detail used a separate white global header and a `927 px` hero, pushing evidence far below the approved composition.
  - Fix: added a Stone-specific over-photography header and the exact 65/35 hero grid.
- **P2:** Mobile placed photography before identity and facts.
  - Fix: added explicit responsive grid areas: identity, photo, facts.
- **P2:** Evidence disclosure lacked an explicit controlled-region relationship and localized image alternatives.
  - Fix: added `aria-controls`, a stable evidence-region id, open/close copy, captions and localized alt text.

### Iteration 2

- **P2:** Redundant preview eyebrow and introductory paragraph made the fact rail denser than the approved reference and extended the closed page to `1132 px`.
  - Fix: removed those duplicate visible lines while retaining the explicit preview notice and non-evidence statement; hero now resolves to `700 px` and the closed document to about `1070 px`.
- **P2:** Inquiry used a text arrow as a structural icon.
  - Fix: removed the glyph and retained one underlined text endpoint.

### Final pass

No actionable P0, P1 or P2 differences remain. Remaining content differences are intentional evidence constraints: the prototype does not reuse the reference's fictional weight, treatment, report or origin claims.

### Navigation contrast refinement

- Approved specification: `../docs/superpowers/specs/2026-07-31-stone-detail-navigation-contrast-design.md`.
- Desktop evidence: `qa/stone-detail-navigation-desktop-1440x900.png`. Header width measured `1440 px`; wordmark computed to `rgb(255, 250, 250)` and navigation to `rgb(37, 31, 36)`. Hero columns remained `936 px / 504 px` (`65/35`).
- Mobile evidence: `qa/stone-detail-navigation-mobile-menu-390x844.png`. Header remained in document flow at `390 px`; wordmark and menu button stayed dark ink on paper white, while the opened menu stayed dark with paper-white text.
- Direct route, EN/NL switch and open mobile menu passed. Desktop and mobile had no horizontal overflow or console errors.
- TDD: baseline `npm test` passed `13/13`; the new full-width split-contrast assertion failed against the former `width: 65%`, then passed after the route-scoped CSS change. Final `npm test` passed `14/14`; `npm run build` and `npm run test:sites` (`4/4`) passed.

## Follow-up polish

- P3: Reassess the exact title wrap and per-stone crop only when verified real inventory photography and facts replace the demonstration record.

## 2026-08-01 mobile paper-sheet refinement

### Comparison target

- Source visual truth: Figma audit board `https://www.figma.com/design/LRLJv0Cbno1UnywrfqErtn` and local board `/Users/jiekewei/.codex/visualizations/2026/07/31/019fba1a-bbbc-7772-8b22-e429b6288ce3/rubiae-mobile-menu-audit/02-figma-audit-board-final.png`.
- Intended viewport and state: `390 × 844`, Stone Detail route, mobile menu open.
- Implementation screenshot: unavailable. The local preview runs at `http://localhost:4173/stones/rba-001`, but this task exposes no callable in-app browser inspection or screenshot control.
- Density normalization: not applicable because no implementation capture could be produced.

### Findings

- **P0 verification blocker — rendered implementation cannot be captured**
  - Location: opened shared mobile navigation.
  - Evidence: the source board is available and the CSS/test implementation exists, but no browser-rendered screenshot is available for the required same-viewport comparison.
  - Impact: typography, spacing, paper-white colour balance, overflow and visible interaction state cannot be honestly passed from code or tests alone.
  - Fix: capture the open menu at `390 × 844` in the approved browser surface, compare it with the source board, then resolve any P0/P1/P2 differences.

### Comparison history

- Audit findings: layered inset dark panel, boxed Close control and over-prominent EN/NL switch.
- Implemented fixes: full-width paper-white menu, dark links, unboxed Close and a smaller separated language switch.
- Post-fix visual evidence: blocked by unavailable browser capture control.

### Required fidelity surfaces

- Fonts and typography: automated CSS boundary present; visual comparison blocked.
- Spacing and layout rhythm: automated full-width/inset-removal boundary present; visual comparison blocked.
- Colors and visual tokens: paper-white and dark-ink tokens are asserted; visual comparison blocked.
- Image quality and asset fidelity: no image assets changed; visual comparison blocked.
- Copy and content: navigation copy is unchanged; rendered open state comparison blocked.

### User visual acceptance

- On 2026-08-01, the user opened the live local Stone Detail route after the preview server was restored and confirmed `好，没问题`.
- This records stakeholder acceptance of the rendered result. It does not replace the missing saved implementation screenshot required by this internal QA workflow.

final result: blocked
