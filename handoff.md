# Project Handoff

## 2026-07-27

- **What changed:** Recorded the confirmed Rubiae sales and brand agreements, domain language, supplier questionnaire, project TODO index, and detailed unimplemented work.
- **Relevant commits:** `6a84e75` (initial agreement documentation), `5e9caa7` (confirmed Rubiae brand spelling)
- **Verification:** Confirmed all eight `GEM-001`–`GEM-008` IDs appear in both active-work files; verified documentation link targets exist; scanned for placeholders and contradictory agreement/open-decision wording; confirmed no old `Rubiea` spelling remains in project files; confirmed a clean worktree after the documentation commit.
- **Open IDs:** `GEM-001`, `GEM-002`, `GEM-003`, `GEM-004`, `GEM-005`, `GEM-006`, `GEM-007`, `GEM-008`.
- **Next planned work:** User reviews the written agreement, then supplier P0 questions are resolved before the next shipment or buyer quotation.
- **Automation audit evidence (2026-07-28):** Git recorded four 2026-07-27 documentation commits: `6a84e75` (`docs: capture Rubiea sales agreements`, 22:42), `bf0fa23` (`docs: add project handoff`, 22:42), `5e9caa7` (`docs: confirm Rubiae brand spelling`, 23:59), and `e79cff5` (`docs: update handoff for brand decision`, 23:59), Europe/Amsterdam. The worktree was clean in two checks before this automation updated `handoff.md`, and `git diff --check` passed. Codex thread-context query did not return within 50 seconds, so **context evidence unavailable**; agent status showed only this automation, with no project worker. No separate test, build, or browser-verification execution was evidenced; no related day-activity file changes remained uncommitted before this handoff update. Open IDs and next work remain as above.

## 2026-07-28

- **What changed:** Moved the business design document out of the skill-specific `superpowers` directory and renamed it [Rubiae品牌经营基本信息](docs/rubiae-business-basics.md); updated all source links.
- **What changed:** Selected visual direction A (“静默纪念”) for Rubiae: warm white, deep gemstone red, restrained old gold, ink gray, natural warm light, and a hand choosing a loose stone as the primary visual moment. Updated the brand foundation, TODO, and unimplemented-feature scope.
- **Relevant commits:** `9e53152` (move Rubiae business basics), `ddcac8c` (select visual direction A)
- **Verification:** Confirmed the old path and `superpowers` references are gone, the new target exists, `git diff --check` passes, and `GEM-005` remains open for exact color values, fonts, components, and site/directory design.
- **Open IDs:** `GEM-001`, `GEM-002`, `GEM-003`, `GEM-004`, `GEM-005`, `GEM-006`, `GEM-007`, `GEM-008`.
- **Next planned work:** Resolve supplier P0 questions before the next shipment or buyer quotation.

## 2026-07-29

- **Project and canonical root:** Rubiae，`/Users/jiekewei/Documents/3 - Projects/6 - 红宝石`。
- **Branch / revision:** `main` at `e61114a`; this documentation work is not committed.
- **Completed:** Created [Rubiae 公开预览站内容源](docs/website/rubiae-preview-site-content.md) with EN/NL copy for Home, Stones, Stone Detail, Stories, How to Choose, About, For Trade, Contact, Privacy, Cookies, forms, system states, SEO, asset mapping, and preview acceptance criteria. Archived the user-confirmed design screenshot as `docs/brand/rubiae-homepage-approved-layout-reference.jpg`; retained `docs/brand/rubiae-homepage-still-life-concept-v5.png` as the higher-resolution implementation reference. Updated `GEM-005` in both active-work records.
- **Intentionally unstarted:** No Shopify theme, frontend project, page, component, or website code was created. Business-operation dependencies and paid commerce remain deferred.
- **Next visual decision already recorded:** Keep the approved layout, hero scene, and page order; replace loose ruby particles in website scenes with realistic, correctly scaled finished ruby jewellery. Every scene still contains ruby; preserve the approved brightness and cool berry-red hue. Product cards and galleries must use matching real-product photography.
- **Verification:** `git diff --check` passed. Confirmed the archived JPEG is readable at 524 × 1280, the primary v5 PNG remains available at 803 × 1959, all linked design/content files exist, and the content source contains 547 lines. Documentation-only step; no automated product tests or expected-red tests apply.
- **Uncommitted state:** Inspected with `git status --short`. Modified tracked files: `CONTEXT.md`, `docs/brand/rubiae-web-visual-spec.md`, `docs/project-todos.md`, `docs/rubiae-brand-foundation.md`, `docs/rubiae-business-basics.md`, and `docs/unimplemented-features.md`. New task files: `docs/website/rubiae-preview-site-content.md` and `docs/brand/rubiae-homepage-approved-layout-reference.jpg`. Unrelated untracked `.DS_Store`, v2–v4 concept PNGs, and `学习资料/` remain untouched.
- **Blockers and deferred data:** None for starting the public-preview build. Before public release, fill the legal name, domain, contact/privacy email, real stone facts and photography, authorized stories or the supplied empty state, actual cookie inventory, and final jewellery assets. KVK, VAT, payments, logistics, and other transaction gates remain under `GEM-008` and do not block preview-site construction.
- **Open IDs:** `GEM-001`, `GEM-002`, `GEM-003`, `GEM-004`, `GEM-005`, `GEM-006`, `GEM-007`, `GEM-008`, `GEM-009`, `GEM-010`.
- **Exact next action:** In the new window, read `docs/website/rubiae-preview-site-content.md` and `docs/brand/rubiae-web-visual-spec.md`, then build the Shopify public-preview Home page from `docs/brand/rubiae-homepage-still-life-concept-v5.png`, using jewellery rather than loose ruby particles.
- **Later implementation:** Built the Shopify preview-only theme through public editorial pages in commits `faf2c3a` through `a3d5c65`. Built an uncommitted local React visual prototype at `preview-prototype/` from the approved v5 composition, with six text-free ruby-jewellery scene images and no transaction controls.
- **Visual verification:** Rejected the first broken stitched preview, then iterated through independent subagent reviews. Final 1440 × 900 desktop and 390 × 844 mobile checks passed with all images loaded, no overlap or horizontal overflow, working EN/NL and mobile menu, synchronized `html.lang`, visible keyboard focus and skip link. The approved Hero revision restores the right-side Moments feature as a large paper sheet rotated `3deg` clockwise on desktop and unrotated in mobile flow. `npm run build`, `npm test` (1/1), and `npm run test:sites` (4/4) passed; no price, cart, checkout, payment, reservation, inventory, availability, product form, or Offer schema was found. Independent final review: PASS, no blockers.
- **Open status:** `GEM-005` remains open for real business/contact/privacy values, real inventory facts and photography, Shopify Admin template assignment, and public hosting. The user approved the local prototype and Hero letter revision for commit.
- **Next action after approval:** Keep all transaction functionality disabled. Replace demonstration facts and imagery with verified real content before any public hosting or Shopify Admin assignment.

## 2026-07-30

### Stories and Moment desktop design approval

- **Completed:** Approved `Stories` as a Letter Archive-style cover and directory that publishes from the first fully authorised Moment. Each Moment keeps an independent URL; book-page transitions occur only inside one customer's Moment and never across customers.
- **Completed:** Defined `顾客故事影像` and `Rubiae Moment 文稿`. Customers choose whether and how to provide story imagery; Rubiae may only make customer-approved technical image adjustments. Customer text may receive meaning-preserving light edits and customer-approved title or excerpt proposals.
- **Completed:** Preserved original-language text alongside reviewed EN/NL translations. AI may create a translation draft only after separate consent, followed by target-language human review; it may not auto-publish. When the customer cannot read the target language, ambiguous choices are explained in a language they understand.
- **Approved reference:** `docs/brand/rubiae-stories-moment-book-approved-reference.png`; review-only design evidence, not customer content or product evidence.
- **Design record:** `docs/superpowers/specs/2026-07-30-stories-moment-book-design.md`.
- **Verification:** Documentation and approved-reference step only; no production code or automated product tests. Checked document links, image readability and dimensions, placeholder semantics, decision consistency, and `git diff --check` before commit.
- **Open:** `GEM-009` remains open for mobile composition, no-image Moment layout, authorised Stone association card, permission workflow implementation, and accessibility or interaction testing.
- **Next action:** Define and approve the mobile Moment reading composition before any Stories or Moment implementation.
