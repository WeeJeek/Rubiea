# Rubiae Stories and Moment Editorial Display Design

**Status:** Desktop information architecture revised and approved on 2026-07-30; final visual composition remains open
**Feature:** `GEM-009`

## Purpose

Give authorised Rubiae Moments a distinctive editorial home without turning customer stories into product cards or making Rubiae the interpreter of a customer's life. `Stories` is one immediately readable interface: a summary-title index on the left and the selected customer's authorised object or image with the complete story on the right. Every indexed non-anonymous Moment keeps its own URL, but a visitor does not pass through a separate cover or preview before reading it.

The earlier [Rubiae Stories and Moment book reference](../../brand/rubiae-stories-moment-book-approved-reference.png) is retained as historical design evidence only. Its separate cover, directory, and page-turn model was superseded by the unified editorial-display decision on 2026-07-30. Its placeholder image and text are not customer content, product evidence, or publication-ready assets.

## Scope

This decision covers the desktop and mobile `Stories` index and selected-Moment reading experience, their content ownership, image handling, translation presentation, permission boundaries, and accessible story switching.

It does not implement frontend code, create customer content, connect a real Stone archive, or authorise public hosting.

## Unified Stories index and reading surface

- The ordinary `Stories` view does not open with a separate cover, grid, or preview-only directory. On first load, the first or URL-selected indexed non-anonymous Moment is already readable.
- The first indexed non-anonymous Moment that has complete publication permission and passes the publication check is enough to replace the ordinary Stories no-story state. Rubiae does not wait for three stories or promise a publishing cadence. Behaviour when only anonymous Moments exist remains part of the random-entry decision.
- A persistent left-hand index gives an overview of every indexed non-anonymous published Moment. Each entry uses a customer-approved summary title and one concise synopsis; the selected entry is visibly identified.
- A title and excerpt may be supplied by the customer or proposed by Rubiae after an explicit request. The customer approves their final directory presentation before publication.
- Selecting an index entry replaces the right-hand display with that Moment's authorised object or image, attribution, and complete story. It does not require a second click to open or expand the text.
- Each indexed non-anonymous selection updates to that Moment's independent URL so it can be linked and revisited directly, while retaining the same index-and-display shell.
- Entries do not use product imagery as their dominant visual. For a non-anonymous Moment, a Stone name, number, or archive link appears only after separate story-to-stone association permission. Anonymous Moments never expose a public Stone association.
- The index does not autoplay or cycle between customers.

## Selected Moment display

- The selected Moment appears on the right as an editorial display: an authorised customer object or image occupies the stage and a paper-white information surface contains the complete story.
- The customer story remains the primary content. Product facts, enquiry actions, and the Stone Detail 65/35 fact rail do not appear in the story opening or body.
- Customer text and controls remain selectable, screen-reader-readable, and indexable HTML. They are never baked into a photographed or generated paper surface.
- The full story is available immediately after selecting its summary title. Long stories continue by natural vertical reading rather than artificial page splitting.
- Pointer, keyboard, and touch selection expose the same Moments. A brief crossfade or small positional transition may connect the index choice to the changed display; `prefers-reduced-motion` uses a direct content change.
- For a non-anonymous Moment, a compact Stone archive card may appear after the complete story only when story-to-stone association permission exists. An anonymous Moment never renders a Stone card, Stone image, public name, product number, gemstone-type association, or archive link, even when Rubiae retains an internal story-to-Stone relationship record.

## Mobile composition

- The ordinary mobile Stories view opens with the first or URL-selected indexed non-anonymous Moment already visible. It does not open on a separate story directory or require the visitor to choose a title before reading.
- A compact selector above the Moment shows the current customer-approved title and `All stories / Alle verhalen`.
- Activating `All stories / Alle verhalen` opens a bottom sheet containing the titles and concise synopses that the current publication and anonymity rules allow in the index. Selecting one closes the sheet, loads that complete Moment in the same vertical reading surface, and updates its independent URL.
- The bottom sheet is a switching control, not a reading gate: closing it returns to the unchanged current story, and a visitor never needs to open it to read the initially selected Moment.
- The authorised object or image, or the approved intentionally empty plinth, and the complete story use one vertical flow. Mobile does not shrink the desktop left-index/right-display composition or require horizontal swiping.
- The selector and bottom sheet support touch and keyboard operation, visible focus, explicit close, and reduced motion. Opening the sheet moves focus into it; closing or selecting a Moment returns focus to the selector or the newly selected story heading.
- Anonymous Moments are excluded from the bottom sheet and use the separate random-discovery path defined below.

## Anonymous discovery boundary

- An anonymous Moment does not appear in the desktop left-hand index or the mobile `All stories / Alle verhalen` bottom sheet. Its title and synopsis are not exposed as ordinary directory entries.
- Anonymous Moments are discovered only through a separate, visitor-initiated random-discovery entry. Whenever at least one eligible anonymous Moment exists, the entry remains persistently visible as explicit text: `Encounter an anonymous Moment / Ontmoet een anoniem moment`.
- Activating the invitation selects one eligible anonymous Moment and replaces the current object or image and story inside the existing reading surface. Desktop uses the same right-hand display; mobile uses the same single-column surface. The anonymous story does not open in a modal or require a separate intermediate page.
- The ordinary desktop index remains visible and unchanged while the anonymous Moment is open, but no indexed story is highlighted as though it represented the anonymous content. The mobile bottom sheet remains unchanged and still contains no anonymous entry.
- A visible `Back to stories / Terug naar verhalen` control restores the indexed non-anonymous Moment that was visible before random discovery.
- At the end of a complete anonymous story, `Encounter another anonymous Moment / Ontmoet nog een anoniem moment` lets the visitor explicitly request another eligible anonymous Moment. Activation replaces the current anonymous story inside the same reading surface; reaching the end, scrolling, or waiting never advances automatically.
- When at least two eligible anonymous Moments exist, the next selection must not immediately repeat the currently displayed Moment. Repeated encounters retain the original indexed non-anonymous return target for `Back to stories / Terug naar verhalen`.
- When exactly one anonymous Moment is eligible, the main invitation remains available and opens that story. The end-of-story `Encounter another anonymous Moment / Ontmoet nog een anoniem moment` control is absent rather than disabled, leaving only `Back to stories / Terug naar verhalen` as the anonymous-story exit.
- When no anonymous Moment is eligible, the anonymous-discovery invitation is not rendered. The ordinary Stories interface remains unchanged; no disabled invitation or empty anonymous-story message is shown.
- An anonymous Moment has no public permalink or routable story URL. Opening one does not change the current indexed non-anonymous Moment URL; refreshing reloads that ordinary indexed Moment rather than restoring the anonymous content.
- Anonymous Moment bodies are excluded from public sitemaps, page metadata, and search-engine indexing. This limits deliberate rediscovery but is not a confidentiality guarantee: visitors can still copy, save, or screenshot public content.
- The visible byline for an anonymous Moment is exactly `Anonymous` on the English page and `Anoniem` on the Dutch page. It does not expose a name, initials, customer-chosen pseudonym, city, age, or purchase date.
- Every anonymous Moment uses the same heading: `A Rubiae Moment` on the English page and `Een Rubiae Moment` on the Dutch page. A customer-specific or story-specific title is not displayed, even when separately approved, because distinctive wording can aid recognition.
- Before anonymous publication, Rubiae reviews the original-language story for direct identifiers including names, initials, contact details, social handles, precise addresses or locations, employers or schools, and customer, order, or Stone identifiers. Exact dates and rare combinations of life details are removed or generalised when they create a reasonably foreseeable recognition risk.
- Rubiae proposes only the minimum meaning-preserving redactions. The customer reviews and explicitly approves the final redacted original-language text and its final page preview; automated redaction or a customer self-check alone does not replace this review.
- If the recognition risk cannot be reduced without materially changing the customer's experience, voice, or meaning, the story is not published as anonymous. It remains unpublished unless the customer later approves a sufficiently revised anonymous version or separately chooses non-anonymous publication.
- Each proposed anonymous-story image receives a separate visual and file review. Rubiae removes EXIF, IPTC, XMP, GPS, embedded previews, and the original public filename, and checks visible faces, names, addresses, licence plates, screens, documents, distinctive body marks, and recognisable home or workplace details.
- Rubiae may crop or mask only the identifying region when that treatment preserves the image's meaning and does not misrepresent its contents. The customer approves every final processed image and its page preview.
- If an image cannot be made safe without materially changing or misleading the scene, it is omitted and the approved intentionally empty plinth is used. Rubiae does not add generic or generated replacement imagery.
- Discovery never depends on hovering over a scene object, noticing a timed animation, or acting before an ambient event disappears.
- The invitation supports pointer, touch, and keyboard activation with visible focus. It remains understandable without motion; any later decorative animation must respect reduced-motion preferences.
- The entry's final visual form and exact placement of the back and repeat controls remain open decisions.
- Random discovery creates a feeling of an unplanned encounter; it is not a privacy mechanism. Publication review must still remove identifying text, image details, metadata, and every public Stone association.

## Customer story images

`Customer story image / 顾客故事影像` is separate from product evidence photography.

- The customer chooses whether to provide an image and what form it takes. It may show a loose stone, jewellery set independently after purchase, a hand, object, place, abstract view, or no image.
- The image does not become product evidence and does not itself create public Stone association permission.
- Rubiae may crop, resize, make light exposure or white-balance corrections, and hide accidentally exposed personal data. It does not add or remove objects, reconstruct the scene, or apply AI restyling.
- The customer approves the final processed image in the page preview before publication.
- A no-image Moment remains valid. Its right-hand plinth stays intentionally empty and the story's paper-white reading surface becomes the sole exhibited object. Rubiae does not add a generic gemstone image, generated symbol, decorative object, or substitute photograph.

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
- Anonymous mode never publicly exposes the story-to-Stone relationship, even when Rubiae holds an internal association record or separate association permission. Public Stone association requires the customer to separately approve the Moment as non-anonymous and to grant story-to-stone association permission; until both conditions are met, the relationship remains internal.
- Withdrawing story-to-stone association removes the links and Stone identifiers without deleting an otherwise authorised story.
- Withdrawing story publication removes the public Moment and its directory entry according to the recorded permission terms; it does not delete the permanent factual Stone archive.

## Desktop visual direction

- The desktop composition uses a narrow editorial index on the left and a larger selected-Moment display on the right. It is neither a dense newspaper grid nor a jewellery catalogue.
- The right side may resemble a quiet exhibition plinth or editorial still-life, but “display” describes composition only. It does not imply that Rubiae made or currently sells jewellery shown in customer-authorised imagery.
- The complete story remains visually paired with its selected object or image without becoming a floating product-specification card.
- Fog grey, paper white, smoke charcoal, and deep plum remain dominant. Berry red is limited to small rules, labels, or text accents.
- Customer images accept varied aspect ratios through a flexible paper mat. The system does not force every customer image into the same photographic crop.
- No gemstone, jewellery, person, quotation, or personal event is invented to fill missing content.

## Acceptance criteria

1. One fully authorised Moment can populate `Stories` without empty filler entries.
2. The first or URL-selected indexed non-anonymous Moment is readable immediately in the ordinary Stories view; there is no cover-to-preview-to-story sequence.
3. Selecting a left summary title updates the right-hand authorised object or image, attribution, and complete story, and gives that indexed non-anonymous Moment a unique URL.
4. Pointer, keyboard, touch, and reduced-motion modes expose the same story content and navigation; the index never autoplays.
5. Text, translation labels, original-language controls, attribution, and index controls remain semantic HTML.
6. A no-image story renders as an intentionally empty plinth with the story paper as its sole exhibit; it contains no generic or fabricated substitute imagery.
7. A non-anonymous Moment shows no Stone identifier or archive link without association permission.
8. Customer-provided images are not presented as product evidence or as proof that Rubiae made any depicted jewellery.
9. No edited text, processed image, translation, or final page is published before its required review and approval gates pass.
10. The ordinary mobile Stories view displays the first or URL-selected indexed non-anonymous story immediately and uses the current-title plus `All stories / Alle verhalen` bottom sheet only for switching those Moments.
11. Anonymous Moments are absent from both ordinary story directories and can be reached only through the separate visitor-initiated random-discovery entry.
12. Whenever at least one eligible anonymous Moment exists, the random-discovery entry is persistently visible with its explicit bilingual invitation and does not require hover discovery or a timed ambient event.
13. Activating the invitation replaces the existing reading surface with one eligible anonymous Moment; `Back to stories / Terug naar verhalen` restores the previously visible indexed story without adding the anonymous Moment to either directory.
14. The end-of-story `Encounter another anonymous Moment / Ontmoet nog een anoniem moment` control changes the anonymous story only after visitor activation, never immediately repeats the current story when at least two are eligible, and preserves the original indexed-story return target through repeated encounters.
15. With exactly one eligible anonymous Moment, the main invitation opens it, the end-of-story repeat control is not rendered, and the visible back control remains available.
16. With no eligible anonymous Moment, the invitation is absent and ordinary Stories presents neither a disabled anonymous control nor an empty anonymous-story message.
17. An anonymous Moment neither changes the current public URL nor receives an indexable permalink; refresh returns to the indexed non-anonymous Moment, while the published anonymous content remains subject to copying and screenshots.
18. Anonymous attribution renders only as `Anonymous / Anoniem` and contains no initials, pseudonym, city, age, or purchase date.
19. Anonymous Moments render the shared heading `A Rubiae Moment / Een Rubiae Moment` rather than a unique story title.
20. Anonymous publication requires Rubiae review plus customer approval of the final redacted original-language story; if reasonably foreseeable recognition risk cannot be reduced without changing its meaning, it is not published anonymously.
21. Every anonymous image is cleared of identifying metadata and reviewed for visible identifiers; an unsafe image is omitted in favour of the intentionally empty plinth, never replaced with generic or generated imagery.
22. An anonymous Moment exposes no public Stone association, even when an internal relationship exists; a public Stone card, identifier, image, gemstone type, or link requires both non-anonymous publication approval and separate story-to-stone association permission.
