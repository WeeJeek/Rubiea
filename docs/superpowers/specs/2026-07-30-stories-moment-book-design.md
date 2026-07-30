# Rubiae Stories and Moment Book Design

**Status:** Desktop direction approved on 2026-07-30
**Feature:** `GEM-009`

## Purpose

Give authorised Rubiae Moments a distinctive editorial home without turning customer stories into product cards or making Rubiae the interpreter of a customer's life. `Stories` acts as the cover and directory. Every Moment keeps its own URL and uses a book-page transition only within that customer's story.

The approved visual reference is [Rubiae Stories and Moment book reference](../../brand/rubiae-stories-moment-book-approved-reference.png). It is design evidence only. Its placeholder image and placeholder text are not customer content, product evidence, or publication-ready assets.

## Scope

This decision covers the desktop `Stories` directory and desktop Moment reading experience, their content ownership, image handling, translation presentation, permission boundaries, and accessible page-turn behaviour.

It does not approve a mobile composition, implement frontend code, create customer content, connect a real Stone archive, or authorise public hosting. Mobile composition requires separate approval before implementation.

## Stories cover and directory

- `Stories` remains a cover and table of contents, not one continuous book containing multiple customers.
- The first Moment that has complete publication permission and passes the publication check is enough to replace the no-story state. Rubiae does not wait for three stories or promise a publishing cadence.
- Each directory entry uses the authorised story title, a customer-approved short excerpt, public attribution or `Anonymous / Anoniem`, and an optional customer story image.
- A title and excerpt may be supplied by the customer or proposed by Rubiae after an explicit request. The customer approves their final directory presentation before publication.
- Entries do not use product imagery as their dominant visual. A Stone name, number, or archive link appears only after separate story-to-stone association permission.
- Selecting an entry opens that Moment's independent URL. Page turning does not move between different customers.

## Individual Moment

- The Moment opens as a calm paper-white book within the approved cool-grey editorial system.
- The customer story remains the primary content. Product facts, enquiry actions, and the Stone Detail 65/35 fact rail do not appear in the story opening or body.
- Customer text and controls remain selectable, screen-reader-readable, and indexable HTML. They are never baked into a photographed or generated paper surface.
- One Moment may occupy one or more pages according to the real text and image content. Rubiae does not split a short story merely to create more turns.
- The page-turn transition works with pointer, keyboard, and touch controls. `prefers-reduced-motion` replaces the turn with a direct page change without removing content or navigation.
- The interface exposes previous and next controls and a current-page indicator. It does not expose a next-customer control inside the book.
- When story-to-stone association permission exists, a compact Stone archive card may appear after the complete story. Without that permission, no Stone card, product identifier, or indirect archive link appears.

## Customer story images

`Customer story image / 顾客故事影像` is separate from product evidence photography.

- The customer chooses whether to provide an image and what form it takes. It may show a loose stone, jewellery set independently after purchase, a hand, object, place, abstract view, or no image.
- The image does not become product evidence and does not itself create public Stone association permission.
- Rubiae may crop, resize, make light exposure or white-balance corrections, and hide accidentally exposed personal data. It does not add or remove objects, reconstruct the scene, or apply AI restyling.
- The customer approves the final processed image in the page preview before publication.
- A no-image Moment remains valid. Its reading layout uses typography and paper space without a fabricated substitute photograph.

## Customer text and editorial control

- The customer may provide the title and excerpt or ask Rubiae to propose them.
- Rubiae may correct spelling, grammar, and paragraph structure in the body without changing the experience, voice, or meaning.
- Rubiae does not insert a brand interpretation and present it as customer language.
- The customer approves the edited body, title, excerpt, images, attribution, and final page preview before publication.

## Original language and translation

- The original-language text remains available permanently.
- EN and NL views may default to reviewed translations and must identify the original language.
- Every translated view provides `Read the original / Lees het origineel`.
- Browser-time automatic translation does not replace the reviewed copy.
- AI may produce a translation draft only after separate explicit customer consent for that use. The draft requires target-language human review and is never published automatically.
- When the customer cannot read the target language, the target-language reviewer owns translation accuracy and tone. The customer approves the original and receives an explanation, in a language they understand, of ambiguous, sensitive, or interpretive translation choices.

## Permission and withdrawal boundaries

- Story publication, public or anonymous attribution, customer image publication, AI-assisted translation, public naming, marketing, and story-to-stone association remain separately recorded choices.
- Publishing a customer image that contains a stone does not automatically permit an official Stone archive link.
- Withdrawing story-to-stone association removes the links and Stone identifiers without deleting an otherwise authorised story.
- Withdrawing story publication removes the public Moment and its directory entry according to the recorded permission terms; it does not delete the permanent factual Stone archive.

## Desktop visual direction

- `Stories` uses the approved Letter Archive atmosphere: rain-window darkness, restrained textile and writing materials, and one prominent paper folio.
- The Moment moves into a lighter open-book field so the customer's words become easier to read than the surrounding scenery.
- Fog grey, paper white, smoke charcoal, and deep plum remain dominant. Berry red is limited to small rules, labels, or text accents.
- Customer images accept varied aspect ratios through a flexible paper mat. The system does not force every customer image into the same photographic crop.
- No gemstone, jewellery, person, quotation, or personal event is invented to fill missing content.

## Acceptance criteria

1. One fully authorised Moment can populate `Stories` without empty filler entries.
2. Every directory entry opens a unique Moment URL; page turns stay inside that Moment.
3. Pointer, keyboard, touch, and reduced-motion modes expose the same story content and navigation.
4. Text, translation labels, original-language controls, attribution, and page controls remain semantic HTML.
5. A no-image story renders without fabricated imagery.
6. No Stone identifier or archive link appears without association permission.
7. Customer-provided images are not presented as product evidence or as proof that Rubiae made any depicted jewellery.
8. No edited text, processed image, translation, or final page is published before its required review and approval gates pass.
