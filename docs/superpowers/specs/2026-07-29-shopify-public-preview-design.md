# Rubiae Shopify Public Preview Design

## Status

Approved for implementation on 2026-07-29. Feature ID: `GEM-005`.

## Evidence reviewed

- `handoff.md`: no prior daily handoff exists.
- `docs/project-todos.md` and `docs/unimplemented-features.md`: no prior open entries.
- Content source: `docs/website/rubiae-preview-site-content.md`, confirmed for public-preview production on 2026-07-29.
- Visual source: `docs/brand/rubiae-web-visual-spec.md` and its approved hero and full-page reference images.

## Goal and non-goals

Build a standalone Shopify Online Store 2.0 theme for an English-default, Dutch-localized public preview of Rubiae. The website presents brand, education, future collection and non-binding enquiries before Rubiae may trade.

The theme must not expose a price, cart, checkout, payment, sales reservation, booking-to-trade flow, transaction status, purchasable offer, or product `Offer` structured data. It must not add checkout-related navigation or invoke Shopify product forms.

This scope includes public content pages, preview collection and product-detail templates, bilingual content, a non-binding enquiry form, privacy/cookie pages, SEO metadata, accessibility foundations and responsive styling. It does not include live-store installation, merchant legal details, authentic inventory, product photography, a cookie scan, processor register, a double-opt-in email service configuration, or any commerce configuration.

## Theme architecture

The repository will contain a portable Online Store 2.0 theme. Its Liquid layout holds the announcement bar, header, localization control, page content, footer and no-commerce safeguards. JSON templates assemble focused sections; snippets own repeated preview status, product facts and accessible controls. CSS and minimal vanilla JavaScript provide responsive navigation, localization-safe interactions and reduced-motion behavior.

Language-specific copy lives in `locales/en.default.json` and `locales/nl.json`. English is the default. A Shopify market/language configuration must publish Dutch at `/nl`; code must use Shopify's localization URLs and never manufacture a language path. Public product facts are read from `product.metafields.rubiae.*`; absent values render `Unknown` or `Onbekend`, rather than being suppressed or invented.

## Information architecture

The public navigation contains Stones, Stories, How to Choose, About, For Trade, Contact and EN/NL. Pages use the content-source copy and source-approved order:

1. Home: announcement, editorial hero, slow-looking editorial section, choosing guidance, Rubiae Moments empty state, facts/trade panel and closing call to action.
2. Stones: a preview-only collection page. Empty collections state that stones are being documented. Cards show only allowed factual fields and an enquiry link.
3. Stone detail: a preview-only product page. It carries no product form, price, inventory availability, buy button, sale wording or offer schema. Required facts remain visible and unknown values are explicit.
4. Stories: permitted-content-only empty state; no fictional people, images, quotes or life events.
5. How to Choose, About and For Trade: source copy with no commercial availability or price claims.
6. Contact: non-binding enquiry form; Privacy and Cookies: source copy with merchant-required placeholders visibly identified for before-publication completion.
7. 404 and confirmation pages: localized, accessible and `noindex` where required.

## Content, data and form contract

`PreviewNotice` is rendered at the top of every public page and on every preview product. It uses the approved launch wording. `StoneFacts` renders these labels for every product: stone ID, natural/synthetic material, weight, dimensions, shape, cut, colour, transparency/clarity, treatment, geographic-origin opinion, laboratory, report number, report date and information source. The fields use `Unknown` / `Onbekend` when their metafields are blank.

The enquiry form uses Shopify's contact endpoint and has labelled name, email, optional stone ID for general contact, preferred language, optional message, and a separately unchecked launch-notification consent checkbox. It clearly states that sending does not reserve a stone, create an order, require payment or grant priority. The theme itself cannot prove the required double opt-in; the merchant must connect and configure a verified double-opt-in email workflow before enabling launch notifications.

## Visual and interaction design

The visual system follows the approved reference: cool fog-grey, smoke, paper, ink and deep-plum surfaces, with a ruby as the only saturated focal colour. The homepage uses an editorial asymmetric composition: rain-window copy on the left, adult back-facing figure in the middle, table and ruby at the bottom, and a Stories card at right. Reference imagery is a labeled design placeholder only, never evidence of a sale product.

Desktop first view targets 1440 by 900; mobile gets a separate stacked composition that preserves headline, CTA and ruby. Navigation becomes a keyboard-operable menu at narrower widths. All focus states meet contrast requirements; semantics, labels, skip link, alt text contracts and `prefers-reduced-motion` are included. No autoplay, parallax, carousel, flashing gem or motion that changes the content meaning is permitted.

## SEO and publication rules

Each public page uses the bilingual titles and descriptions from the content source. Homepage schema is limited to verified `Organization` and `WebSite` facts supplied by theme settings. Product templates must not emit `Offer`, price or availability schema. Form confirmation, draft/test pages and hidden commerce paths carry `noindex`; public content pages remain indexable.

## Acceptance criteria

- All named public pages have English and Dutch content and an accessible language control.
- A source scan finds no active cart, checkout, payment, product form, price, add-to-cart, buy-now, reservation or offer schema output.
- A product with missing metafields visibly renders all required fact labels with `Unknown` / `Onbekend` values.
- The form is labelled, keyboard usable, reports localized validation errors, has a separate unchecked notification-consent control and displays its non-binding confirmation wording.
- At 1440 by 900, the hero contains the five approved visual relationships and only one primary CTA. At 390 by 844, its headline, CTA and ruby remain visible without overlapping controls.
- Pages remain usable by keyboard, have visible focus, respect reduced motion, and use real image alt text or empty alt text for decoration.
- Theme checks and focused automated regression checks pass before handoff.

## Publication dependencies

Before publishing, the merchant must replace all design-reference imagery with allowed assets; fill legal name, domain, contact and privacy addresses; supply verified product facts, reports and product photography; configure actual Shopify languages, form recipients and double opt-in; scan and disclose actual cookies/processors; and perform real-device accessibility and SEO checks. None of these dependencies authorizes enabling commerce.
