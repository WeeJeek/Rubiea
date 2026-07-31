# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Rubiae fidelity rules

- Never place live HTML copy over a reference image that already contains baked-in copy or interface elements.
- Do not use gradients, CSS gemstones, placeholder rectangles, or empty blocks as substitutes for the reference photography.
- Use the approved full-page reference for composition only; use separate text-free image assets in the implemented sections.
- Keep the desktop Hero `Rubiae Moments` feature as the original portrait collage sheet: about `3.5deg` clockwise, live copy upper-left, monochrome rainy-street image bottom-left, and an oversized circular charcoal crop lower-right with only the left part of its dark vertically oval ruby visible at the paper edge; keep the mobile card unrotated in normal flow after the Hero image.
- Keep the opened mobile navigation as one flush paper-white sheet with dark links; the `Close` control has no surrounding box, and the EN/NL switch is smaller and separated below the primary links.
- Before handoff, compare same-viewport screenshots of the source and prototype. Fix overlapping copy, missing imagery, bad crops, excessive empty space, and invisible controls.
