# Stories fictional layout demo

## Purpose

Show the approved desktop Stories structure before any authorised customer Moment exists. This is a review-only local preview aid, not publishable content.

## Layout

- Keep the existing rain-street stage as a Home-language atmosphere layer.
- Desktop: a narrow left rail lists three fictional story titles and one-line summaries. Selecting a title changes the right-hand paper exhibit.
- Right: one paper card shows the selected fictional title, byline, short story, and an explicit `Fictional layout demo — not a customer story.` boundary.
- Mobile: the selected demo reads first; an `All demo stories` control exposes the other two items without creating customer-like detail URLs.

## Demo data and boundaries

- Use three invented, non-identifying stories; no names, locations, dates, product IDs, gemstones, customer images, or customer-owned possessions.
- Keep this data local to the preview and label the entire interface as fictional. It is excluded from `publishedMoments`, `anonymousMoments`, sitemap, public content, and any future production data import.
- The existing authorised-content empty state remains the production fallback. The demo is rendered only by an explicit preview-only flag in the static preview data.

## Interaction and accessibility

- Left-rail items are buttons with an obvious selected state and keyboard focus.
- Selecting a demo updates only the paper exhibit; no automatic rotation or transition dependent on motion.
- The visual-stage image stays decorative with empty alt text.

## Acceptance

- Three fictional items can be selected and visibly change the exhibit.
- Every demo state visibly says it is fictional and not a customer story.
- No customer story, anonymous story, Stone identifier, transaction language, or generated image is introduced.
- EN/NL copy switches with the existing language control.
