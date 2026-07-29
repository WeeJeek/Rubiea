export function HomePage({ text }) {
  return (
    <main id="main-content" tabIndex="-1">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/assets/rubiae-hero-rain-window.png" alt="Rainy window, table, and woman seen from behind" />
        <div className="hero-copy">
          <h1 id="hero-title">{text.hero.heading}</h1>
          <p>{text.hero.body}</p>
          <a className="solid-link" href="/stones">{text.hero.cta}<span aria-hidden="true">⟶</span></a>
        </div>
        <aside className="hero-story" aria-label="Rubiae Moments">
          <img className="hero-story-street" src="/assets/rubiae-moments-rain-street-v2.png" alt="Rainy city street and sculpture in monochrome" />
          <img className="hero-story-ruby" src="/assets/rubiae-moments-ruby-v6.png" alt="Decorative close-up of a deep red ruby" />
          <div>
            <p className="eyebrow">{text.hero.storyEyebrow}</p>
            <h2>{text.hero.storyHeading}</h2>
            <a className="text-link" href="/stories">{text.hero.storyCta}</a>
          </div>
        </aside>
      </section>

      <section id="stones" className="slow-look section-light" aria-labelledby="slow-title">
        <div className="slow-display">{text.slowLook.displayLine}</div>
        <img className="slow-pendant" src="/assets/rubiae-slow-look-pendant.png" alt="Ruby pendant resting on patterned fabric" />
        <img className="slow-charms" src="/assets/rubiae-hand-ruby-charms.png" alt="Hand arranging ruby charms" />
        <div className="slow-copy">
          <h2 id="slow-title">{text.slowLook.heading}</h2>
          <p>{text.slowLook.body}</p>
          <a className="text-link" href="/stones">{text.slowLook.cta}</a>
        </div>
      </section>

      <section id="how-to-choose" className="choose-section" aria-labelledby="choose-title">
        <img src="/assets/rubiae-rain-watch.png" alt="Watch, key, and ruby jewellery by a rain-streaked window" />
        <div>
          <h2 id="choose-title">{text.chooseFreely.displayLines.join(" ")}</h2>
          <a className="solid-link solid-link--light" href="/how-to-choose">{text.chooseFreely.cta}<span aria-hidden="true">⟶</span></a>
        </div>
      </section>

      <section id="stories" className="moments section-light" aria-labelledby="moments-title">
        <img src="/assets/rubiae-moments-envelope.png" alt="Paper envelope, fountain pen, key, and ruby jewellery" />
        <div>
          <h2 id="moments-title">{text.moments.heading}</h2>
          <p>{text.moments.body}</p>
          <a className="text-link" href="/stories">{text.moments.cta}</a>
        </div>
      </section>

      <section id="facts" className="facts" aria-labelledby="facts-title">
        <div>
          <h2 id="facts-title">{text.facts.heading}</h2>
          <a href="/how-to-choose">{text.facts.ctaDescription}<span aria-hidden="true">⟶</span></a>
          <a href="/for-trade">{text.facts.ctaTrade}<span aria-hidden="true">⟶</span></a>
        </div>
        <img src="/assets/rubiae-facts-macro.png" alt="Ruby jewellery in a macro view" />
      </section>
    </main>
  );
}
