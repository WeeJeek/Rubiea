export const previewStone = {
  id: "RBA-001",
  images: {
    lifestyle: "/assets/rubiae-stone-rba-001-lifestyle.png",
    neutral: "/assets/rubiae-stone-rba-001-neutral.png",
    macro: "/assets/rubiae-stone-rba-001-macro.png",
    millimetre: "/assets/rubiae-stone-rba-001-millimetre.png",
    report: "/assets/rubiae-stone-rba-001-report.png",
    video: "/assets/rubiae-stone-rba-001-video.png",
  },
};

export const publishedMoments = [];
export const anonymousMoments = [];
export const showFictionalStoryDemos = true;
export const fictionalStoryDemos = [
  {
    id: "quiet-gesture",
    en: { title: "A quiet gesture", summary: "A small choice, kept close.", body: "This is fictional sample copy for layout review only. It tests the rhythm of a story held on a page, without standing in for anyone's experience.", boundary: "Fictional layout demo — not a customer story." },
    nl: { title: "Een stil gebaar", summary: "Een kleine keuze, dichtbij gehouden.", body: "Dit is fictieve voorbeeldtekst, alleen voor layoutbeoordeling. Zij test het ritme van een verhaal op papier, zonder voor iemands ervaring te spreken.", boundary: "Fictieve layoutdemo — geen klantverhaal." },
  },
  {
    id: "kept-in-view",
    en: { title: "Kept in view", summary: "A pause before the next step.", body: "This fictional sample copy gives a second title and a longer line of reading room. It exists only to examine selection, hierarchy, and the pace of the paper exhibit.", boundary: "Fictional layout demo — not a customer story." },
    nl: { title: "In beeld gehouden", summary: "Een pauze voor de volgende stap.", body: "Deze fictieve voorbeeldtekst geeft een tweede titel en meer leesruimte. Zij bestaat alleen om selectie, hiërarchie en het tempo van het papieren exhibit te beoordelen.", boundary: "Fictieve layoutdemo — geen klantverhaal." },
  },
  {
    id: "room-to-return",
    en: { title: "Room to return", summary: "Meaning can remain unfinished.", body: "This fictional sample copy makes room for a quieter ending. It tests how a short story settles on the page when no personal account has been authorised for publication.", boundary: "Fictional layout demo — not a customer story." },
    nl: { title: "Ruimte om terug te keren", summary: "Betekenis mag onaf zijn.", body: "Deze fictieve voorbeeldtekst laat ruimte voor een stiller einde. Zij test hoe een kort verhaal op de pagina landt wanneer geen persoonlijk verhaal voor publicatie is geautoriseerd.", boundary: "Fictieve layoutdemo — geen klantverhaal." },
  },
];

export const copy = {
  en: {
    nav: { stones: "Stones", stories: "Stories", choose: "How to Choose", about: "About", trade: "For Trade" },
    hero: { title: "Choose a stone for the life you are shaping.", body: "Natural gemstones, honestly described and chosen on your terms.", cta: "Explore the stones", storyLabel: "EMPYRA MOMENTS", story: "Her story, in her own words.", storyCta: "Read her moment" },
    slow: { display: "A stone, seen slowly.", heading: "Begin with the stone.", body: "Colour, natural character, and what is known — clearly described.", cta: "Explore the stones" },
    choose: { title: "Look slowly. Ask clearly. Choose freely.", cta: "How to choose" },
    moments: { title: "A moment can begin with a stone.", body: "Empyra Moments is a space for stories shared in her own words.", cta: "Discover Empyra Moments" },
    facts: { title: "For those who need the facts.", describe: "How we describe stones", trade: "For Trade" },
    about: "Empyra brings natural gemstones into view with room for personal meaning.", trade: "For professional buyers: begin with material, format, quantity, quality range, and documentation.", closing: "Choose on your terms.", menu: "Menu", close: "Close menu",
    stone: {
      label: "Stone Detail · preview illustration",
      title: "Loose red gemstone",
      intro: "A layout preview. Facts below are intentionally limited until a real stone is documented.",
      known: "What is known",
      stoneInfo: "This stone",
      evidence: "Evidence",
      evidenceIntro: "Observed in controlled preview imagery. Real catalogue evidence will be bound to one documented stone.",
      evidenceNote: "Preview illustrations only — not product evidence.",
      furtherEvidence: "Further evidence",
      openEvidence: "Open supporting views",
      closeEvidence: "Close supporting views",
      previewNotice: "Preview — not yet available for purchase.",
      inquiry: "Ask about this stone",
      inquiryNote: "For questions about origin, treatment or measurements, we are here to help.",
      inquiryCta: "Send an inquiry",
      facts: [["Reference", "RBA-001"], ["Stone", "Loose red gemstone"], ["Weight", "Unknown"], ["Shape & cut", "Unknown"]],
      knownFacts: [["Treatment", "Unknown"], ["Origin", "Unknown"], ["Report", "Unknown"], ["Evidence source", "Preview illustration"]],
      evidenceViews: [["Neutral-light overview", "neutral"], ["Macro and side view", "macro"]],
      views: [["Millimetre reference", "millimetre"], ["Report preview", "report"], ["Optional short video", "video"]],
      imageAlts: {
        lifestyle: "Preview illustration of a loose red gemstone observed with tweezers beside a rainy window",
        neutral: "Preview illustration of the loose red gemstone under neutral light",
        macro: "Preview illustration showing a macro side view of the loose red gemstone",
        millimetre: "Preview illustration of the loose red gemstone beside a millimetre reference",
        report: "Preview illustration of a report layout without laboratory claims",
        video: "Still preview for an optional short video of the loose red gemstone",
      },
    },
    stories: { label: "EMPYRA MOMENTS", title: "Stories, held with care.", intro: "Stories appear here only when someone has chosen to share them.", emptyTitle: "No stories have been published yet.", emptyBody: "When a contributor authorises a story for publication, it will appear here in her own words.", back: "Return home", demoLabel: "FICTIONAL LAYOUT DEMO", allDemos: "All demo stories", demoByline: "Layout study only" },
    legal: {
      companyNav: "Legal / Company details", privacyNav: "Privacy", cookiesNav: "Cookies", footerStatus: "Local preview — details pending confirmation.", noticeLabel: "Preview status", routeNavLabel: "Legal pages", home: "Return home", previewNotice: "Local preview — company, privacy and cookie details must be confirmed before publication.",
      pages: {
        "/legal": { nav: "Legal / Company details", eyebrow: "LEGAL", title: "Company details, clearly held.", intro: "The public record will name the responsible business before this site is released.", sections: [{ title: "Business identity", body: "Legal name, registered address, KVK number and VAT number are not yet confirmed for publication." }, { title: "Contact", body: "The public contact email, phone number, contact hours and privacy contact are still to be confirmed." }, { title: "Before launch", body: "Terms, complaints, accessibility information and transaction policies remain outside this preview and must be completed before purchase can open." }] },
        "/privacy": { nav: "Privacy", eyebrow: "PRIVACY", title: "Privacy, before personal detail.", intro: "A public privacy notice will explain only confirmed processing and responsible contacts.", sections: [{ title: "What is not yet published", body: "The responsible business, actual processors, retention periods and contact details have not been confirmed for a public notice." }, { title: "Preview boundary", body: "This local prototype is not a live enquiry or sales service. It must not be treated as a public privacy statement." }, { title: "Before launch", body: "The final notice must distinguish enquiry, transaction, marketing and story-sharing consent, each with its own purpose and withdrawal route." }] },
        "/cookies": { nav: "Cookies", eyebrow: "COOKIES", title: "Cookies, named before use.", intro: "A public cookie notice will list verified technologies and give visitors a meaningful choice.", sections: [{ title: "Current status", body: "No scanned cookie inventory or live processor list is confirmed for publication." }, { title: "Consent standard", body: "Necessary technologies and optional analytics or advertising must be clearly separated. Refusal or withdrawal must not block ordinary browsing." }, { title: "Before launch", body: "Complete a production scan, record each technology and recipient, then publish the final notice and consent controls together." }] },
      },
    },
  },
  nl: {
    nav: { stones: "Stenen", stories: "Verhalen", choose: "Hoe kies je", about: "Over Empyra", trade: "Voor professionals" },
    hero: { title: "Kies een steen voor het leven dat je vormgeeft.", body: "Natuurlijke edelstenen, eerlijk beschreven en gekozen op jouw voorwaarden.", cta: "Bekijk de stenen", storyLabel: "EMPYRA MOMENTS", story: "Haar verhaal, in haar eigen woorden.", storyCta: "Lees haar moment" },
    slow: { display: "Een steen, rustig bekeken.", heading: "Begin bij de steen.", body: "Kleur, natuurlijk karakter en wat bekend is — helder beschreven.", cta: "Bekijk de stenen" },
    choose: { title: "Kijk rustig. Vraag door. Kies vrij.", cta: "Hoe kies je" },
    moments: { title: "Een moment kan beginnen met een steen.", body: "Empyra Moments biedt ruimte aan verhalen, verteld in haar eigen woorden.", cta: "Ontdek Empyra Moments" },
    facts: { title: "Voor wie de feiten nodig heeft.", describe: "Hoe we stenen beschrijven", trade: "Voor professionals" },
    about: "Empyra brengt natuurlijke edelstenen in beeld met ruimte voor persoonlijke betekenis.", trade: "Voor professionele kopers: begin met materiaal, formaat, hoeveelheid, kwaliteitsniveau en documentatie.", closing: "Kies op jouw voorwaarden.", menu: "Menu", close: "Menu sluiten",
    stone: {
      label: "Steendetail · voorbeeldillustratie",
      title: "Losse rode edelsteen",
      intro: "Een lay-outvoorbeeld. De feiten hieronder blijven bewust beperkt totdat een echte steen is gedocumenteerd.",
      known: "Wat bekend is",
      stoneInfo: "Deze steen",
      evidence: "Onderbouwing",
      evidenceIntro: "Bekeken in gecontroleerde voorbeeldbeelden. Echt catalogusbewijs wordt aan één gedocumenteerde steen gekoppeld.",
      evidenceNote: "Alleen voorbeeldillustraties — geen productbewijs.",
      furtherEvidence: "Meer onderbouwing",
      openEvidence: "Open aanvullende beelden",
      closeEvidence: "Sluit aanvullende beelden",
      previewNotice: "Preview — nog niet beschikbaar voor aankoop.",
      inquiry: "Vraag naar deze steen",
      inquiryNote: "Voor vragen over herkomst, behandeling of afmetingen helpen we je graag.",
      inquiryCta: "Stuur een vraag",
      facts: [["Referentie", "RBA-001"], ["Steen", "Losse rode edelsteen"], ["Gewicht", "Onbekend"], ["Vorm & slijpsel", "Onbekend"]],
      knownFacts: [["Behandeling", "Onbekend"], ["Herkomst", "Onbekend"], ["Rapport", "Onbekend"], ["Bron onderbouwing", "Voorbeeldillustratie"]],
      evidenceViews: [["Overzicht bij neutraal licht", "neutral"], ["Macro- en zijaanzicht", "macro"]],
      views: [["Millimeterreferentie", "millimetre"], ["Rapportvoorbeeld", "report"], ["Optionele korte video", "video"]],
      imageAlts: {
        lifestyle: "Voorbeeldillustratie van een losse rode edelsteen die met een pincet bij een regenraam wordt bekeken",
        neutral: "Voorbeeldillustratie van de losse rode edelsteen bij neutraal licht",
        macro: "Voorbeeldillustratie met macro-zijaanzicht van de losse rode edelsteen",
        millimetre: "Voorbeeldillustratie van de losse rode edelsteen naast een millimeterreferentie",
        report: "Voorbeeldillustratie van een rapportindeling zonder laboratoriumclaims",
        video: "Stilstaand voorbeeld voor een optionele korte video van de losse rode edelsteen",
      },
    },
    stories: { label: "EMPYRA MOMENTS", title: "Verhalen, zorgvuldig bewaard.", intro: "Verhalen verschijnen hier alleen wanneer iemand ervoor kiest ze te delen.", emptyTitle: "Er zijn nog geen verhalen gepubliceerd.", emptyBody: "Wanneer een bijdrage voor publicatie is goedgekeurd, verschijnt zij hier in haar eigen woorden.", back: "Terug naar home", demoLabel: "FICTIEVE LAYOUTDEMO", allDemos: "Alle demoverhalen", demoByline: "Alleen layoutstudie" },
    legal: {
      companyNav: "Juridisch / Bedrijfsgegevens", privacyNav: "Privacy", cookiesNav: "Cookies", footerStatus: "Lokale preview — gegevens wachten op bevestiging.", noticeLabel: "Previewstatus", routeNavLabel: "Juridische pagina's", home: "Terug naar home", previewNotice: "Lokale preview — bedrijfs-, privacy- en cookiedetails moeten voor publicatie worden bevestigd.",
      pages: {
        "/legal": { nav: "Juridisch / Bedrijfsgegevens", eyebrow: "JURIDISCH", title: "Bedrijfsgegevens, helder vastgelegd.", intro: "Het openbare overzicht noemt de verantwoordelijke onderneming voordat deze site wordt gepubliceerd.", sections: [{ title: "Bedrijfsidentiteit", body: "Juridische naam, vestigingsadres, KVK-nummer en btw-nummer zijn nog niet bevestigd voor publicatie." }, { title: "Contact", body: "Het openbare e-mailadres, telefoonnummer, bereikbaarheid en privacycontact moeten nog worden bevestigd." }, { title: "Voor lancering", body: "Voorwaarden, klachten, toegankelijkheidsinformatie en transactiebeleid vallen buiten deze preview en moeten klaar zijn voordat aankoop opent." }] },
        "/privacy": { nav: "Privacy", eyebrow: "PRIVACY", title: "Privacy, vóór persoonsgegevens.", intro: "Een openbare privacyverklaring legt alleen bevestigde verwerking en verantwoordelijke contactpersonen uit.", sections: [{ title: "Nog niet gepubliceerd", body: "De verantwoordelijke onderneming, feitelijke verwerkers, bewaartermijnen en contactgegevens zijn nog niet bevestigd voor een openbare verklaring." }, { title: "Previewgrens", body: "Dit lokale prototype is geen live aanvraag- of verkoopdienst. Het mag niet als openbare privacyverklaring worden gezien." }, { title: "Voor lancering", body: "De definitieve verklaring moet aanvraag, transactie, marketing en toestemming voor verhaalpublicatie scheiden, elk met eigen doel en intrekkingsroute." }] },
        "/cookies": { nav: "Cookies", eyebrow: "COOKIES", title: "Cookies, benoemd vóór gebruik.", intro: "Een openbare cookietekst noemt geverifieerde technologieën en geeft bezoekers een betekenisvolle keuze.", sections: [{ title: "Huidige status", body: "Er is geen gescande cookie-inventaris of lijst van live verwerkers bevestigd voor publicatie." }, { title: "Toestemmingsnorm", body: "Noodzakelijke technologieën en optionele analyse of reclame moeten duidelijk gescheiden zijn. Weigeren of intrekken mag normaal browsen niet blokkeren." }, { title: "Voor lancering", body: "Voer een productiescan uit, leg iedere technologie en ontvanger vast en publiceer daarna de definitieve tekst en toestemmingsbediening samen." }] },
      },
    },
  },
};
