import { useEffect, useState } from "react";

const copy = {
  en: {
    nav: { stones: "Stones", stories: "Stories", choose: "How to Choose", about: "About", trade: "For Trade" },
    hero: { title: "Choose a stone for the life you are shaping.", body: "Natural gemstones, honestly described and chosen on your terms.", cta: "Explore the stones", storyLabel: "RUBIAE MOMENTS", story: "Her story, in her own words.", storyCta: "Read her moment" },
    slow: { display: "A stone, seen slowly.", heading: "Begin with the stone.", body: "Colour, natural character, and what is known — clearly described.", cta: "Explore the stones" },
    choose: { title: "Look slowly. Ask clearly. Choose freely.", cta: "How to choose" },
    moments: { title: "A moment can begin with a stone.", body: "Rubiae Moments is a space for stories shared in her own words.", cta: "Discover Rubiae Moments" },
    facts: { title: "For those who need the facts.", describe: "How we describe stones", trade: "For Trade" },
    about: "Rubiae brings natural gemstones into view with room for personal meaning.", trade: "For professional buyers: begin with material, format, quantity, quality range, and documentation.", closing: "Choose on your terms.", menu: "Menu", close: "Close menu",
  },
  nl: {
    nav: { stones: "Stenen", stories: "Verhalen", choose: "Hoe kies je", about: "Over Rubiae", trade: "Voor professionals" },
    hero: { title: "Kies een steen voor het leven dat je vormgeeft.", body: "Natuurlijke edelstenen, eerlijk beschreven en gekozen op jouw voorwaarden.", cta: "Bekijk de stenen", storyLabel: "RUBIAE MOMENTS", story: "Haar verhaal, in haar eigen woorden.", storyCta: "Lees haar moment" },
    slow: { display: "Een steen, rustig bekeken.", heading: "Begin bij de steen.", body: "Kleur, natuurlijk karakter en wat bekend is — helder beschreven.", cta: "Bekijk de stenen" },
    choose: { title: "Kijk rustig. Vraag door. Kies vrij.", cta: "Hoe kies je" },
    moments: { title: "Een moment kan beginnen met een steen.", body: "Rubiae Moments biedt ruimte aan verhalen, verteld in haar eigen woorden.", cta: "Ontdek Rubiae Moments" },
    facts: { title: "Voor wie de feiten nodig heeft.", describe: "Hoe we stenen beschrijven", trade: "Voor professionals" },
    about: "Rubiae brengt natuurlijke edelstenen in beeld met ruimte voor persoonlijke betekenis.", trade: "Voor professionele kopers: begin met materiaal, formaat, hoeveelheid, kwaliteitsniveau en documentatie.", closing: "Kies op jouw voorwaarden.", menu: "Menu", close: "Menu sluiten",
  },
};

const links = [
  ["stones", "stones"],
  ["stories", "stories"],
  ["how-to-choose", "choose"],
  ["about", "about"],
  ["for-trade", "trade"],
];

export function App() {
  const [locale, setLocale] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[locale];
  const navigate = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rubiae home">Rubiae</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? text.close : text.menu}
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([id, key]) => <a key={id} href={`#${id}`} onClick={navigate}>{text.nav[key]}</a>)}
          <button className="language-toggle" type="button" onClick={() => setLocale((current) => current === "en" ? "nl" : "en")} aria-label="Switch language">EN / NL</button>
        </nav>
      </header>

      <main id="main-content" tabIndex="-1">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/assets/rubiae-hero-rain-window.png" alt="Rainy window, table, and woman seen from behind" />
        <div className="hero-copy">
          <h1 id="hero-title">{text.hero.title}</h1>
          <p>{text.hero.body}</p>
          <a className="solid-link" href="#stones">{text.hero.cta}<span aria-hidden="true">⟶</span></a>
        </div>
        <aside className="hero-story" aria-label="Rubiae Moments">
          <img src="/assets/rubiae-moments-envelope.png" alt="Ruby jewellery on a paper envelope" />
          <div>
            <p className="eyebrow">{text.hero.storyLabel}</p>
            <h2>{text.hero.story}</h2>
            <a className="text-link" href="#stories">{text.hero.storyCta}</a>
          </div>
        </aside>
      </section>

      <section id="stones" className="slow-look section-light" aria-labelledby="slow-title">
        <div className="slow-display">{text.slow.display}</div>
        <img className="slow-pendant" src="/assets/rubiae-slow-look-pendant.png" alt="Ruby pendant resting on patterned fabric" />
        <img className="slow-charms" src="/assets/rubiae-hand-ruby-charms.png" alt="Hand arranging ruby charms" />
        <div className="slow-copy">
          <h2 id="slow-title">{text.slow.heading}</h2>
          <p>{text.slow.body}</p>
          <a className="text-link" href="#facts">{text.slow.cta}</a>
        </div>
      </section>

      <section id="how-to-choose" className="choose-section" aria-labelledby="choose-title">
        <img src="/assets/rubiae-rain-watch.png" alt="Watch, key, and ruby jewellery by a rain-streaked window" />
        <div>
          <h2 id="choose-title">{text.choose.title}</h2>
          <a className="solid-link solid-link--light" href="#facts">{text.choose.cta}<span aria-hidden="true">⟶</span></a>
        </div>
      </section>

      <section id="stories" className="moments section-light" aria-labelledby="moments-title">
        <img src="/assets/rubiae-moments-envelope.png" alt="Paper envelope, fountain pen, key, and ruby jewellery" />
        <div>
          <h2 id="moments-title">{text.moments.title}</h2>
          <p>{text.moments.body}</p>
          <a className="text-link" href="#about">{text.moments.cta}</a>
        </div>
      </section>

      <section id="facts" className="facts" aria-labelledby="facts-title">
        <div>
          <h2 id="facts-title">{text.facts.title}</h2>
          <a href="#stones">{text.facts.describe}<span aria-hidden="true">⟶</span></a>
          <a href="#for-trade">{text.facts.trade}<span aria-hidden="true">⟶</span></a>
        </div>
        <img src="/assets/rubiae-facts-macro.png" alt="Ruby jewellery in a macro view" />
      </section>

      <footer className="site-footer">
        <section id="about"><p className="eyebrow">RUBIAE</p><p>{text.about}</p></section>
        <section id="for-trade"><p className="eyebrow">{text.nav.trade}</p><p>{text.trade}</p></section>
        <div className="footer-bottom"><h2>{text.closing}</h2><nav aria-label="Footer navigation">{links.map(([id, key]) => <a key={id} href={`#${id}`}>{text.nav[key]}</a>)}</nav></div>
      </footer>
      </main>
    </>
  );
}
