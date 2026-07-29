# Rubiae Public-preview Editorial Pages Design

**Status:** Approved visual direction; ready for written-spec review

## Purpose

Extend `preview-prototype/` beyond the approved Home page. The prototype remains a non-transactional visual reference for the existing Shopify public-preview theme. It must not collect customer data, create orders, reserve stones, or imply that a purchase can be made.

## Scope

The prototype will add these routes:

- `/stones`
- `/stones/:id`
- `/stories`
- `/how-to-choose`
- `/about`
- `/for-trade`
- `/contact`
- `/privacy`
- `/cookies`
- `/confirmation`
- unmatched routes render a 404 page

Home remains visually and structurally unchanged.

## Shared system

All routes use one `SiteHeader` and `SiteFooter`, a visible skip link, keyboard-visible focus, responsive navigation, and an EN/NL toggle that preserves the current route. Shared routes and copy keys mirror the equivalent existing Shopify templates. The visual system continues the approved cold-grey editorial direction: warm paper, ink, charcoal, berry-red only for gemstones, generous whitespace, serif display type, and static or reduced-motion-safe interactions.

## Page designs

### Stones and Stone Detail

`/stones` presents a calm, editorial grid of demonstration stone cards with a persistent public-preview notice. Cards show only the currently known facts and link to `/stones/:id`; they show no price, availability, reservation, or buying control.

`/stones/:id` presents a large image area, a full facts table, and a source-aware explanation of what is known. Every required field stays visible. Missing values render as `Unknown` or `Onbekend`; no field is omitted to imply certainty. The only action is a link to Contact with the relevant stone ID carried in the URL.

### Stories

`/stories` introduces Rubiae Moments and uses the approved empty state until an authorised story exists. The prototype does not invent a contributor, quotation, event, or portrait.

### Informational editorial pages

`/how-to-choose`, `/about`, and `/for-trade` use individual visual compositions within the approved still-life language. Each page has one clear heading, readable long-form copy, and one non-transactional onward action. `For Trade` is public but does not reveal wholesale pricing or a private catalogue.

### Contact, policy, confirmation, and 404

`/contact` contains a client-only interest form: name, email, optional stone ID, preferred language, optional message, and an unchecked launch-notice consent. Submitting navigates to `/confirmation`; no data leaves the browser. `Confirmation` states that no stone is reserved, no order exists, and no payment is required. `Privacy`, `Cookies`, and `404` are concise, fully navigable editorial utility pages.

## Data and translation boundaries

Copy comes from `docs/website/rubiae-preview-site-content.md`. Demonstration stone facts live in a small local fixture and are clearly preview content; they must never claim laboratory or inventory facts. Each view consumes the same EN/NL key structure where possible. New images are decorative editorial assets only; product detail imagery must remain generic until verified, corresponding real-product photography is supplied.

## Architecture

- Keep `App.jsx` as the route shell only.
- Add page components and shared components under `preview-prototype/src/`.
- Add a small route parser based on `window.location.pathname`; no router dependency is required.
- Add local copy and preview-data modules, keeping language switching and public-preview restrictions centralised.
- Extend tests to verify every public route, English/Dutch copy availability, preserved-route language switching, focus/reduced-motion support, contact-form non-submission, and absence of transaction wording and controls.

## Acceptance criteria

1. Every listed route renders from a direct browser load and through in-app navigation at desktop and 390 px widths.
2. EN/NL changes content and updates `html.lang` without taking the visitor to a different semantic page.
3. Stones, detail, contact, and confirmation make the preview-only/non-binding boundary explicit; no price, cart, checkout, payment, reservation, inventory, availability, purchase, or order interface appears.
4. Stone Detail renders every factual field and `Unknown / Onbekend` fallback.
5. Stories contains the documented authorised-content empty state rather than a fabricated story.
6. Header, footer, skip link, focus styles, keyboard navigation, and `prefers-reduced-motion` work across all routes.
7. `npm run build`, `npm test`, and `npm run test:sites` pass; route screenshots at 1440 x 900 and 390 x 844 show no overflow, missing imagery, invisible controls, or copy overlap.

## Shopify handoff

This is not a one-click conversion. The React prototype will hand off: route map, copy keys, component anatomy, responsive measurements, asset roles, and testable preview restrictions. Existing Shopify templates remain the production integration target and are not changed by this prototype task.
