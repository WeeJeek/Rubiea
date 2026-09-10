import { COOKIE_PATH, HOME_PATH, LEGAL_PATH, PRIVACY_PATH } from "../routes.js";

const order = [LEGAL_PATH, PRIVACY_PATH, COOKIE_PATH];

export function LegalPage({ path, text, onNavigate }) {
  const page = text.legal.pages[path];

  return <main id="main-content" className="legal-page" tabIndex="-1">
    <article className="legal-sheet" aria-labelledby="legal-title">
      <p className="eyebrow">EMPYRA · {page.eyebrow}</p>
      <h1 id="legal-title">{page.title}</h1>
      <p className="legal-intro">{page.intro}</p>
      <aside className="legal-notice" aria-label={text.legal.noticeLabel}>{text.legal.previewNotice}</aside>
      <nav className="legal-route-nav" aria-label={text.legal.routeNavLabel}>
        {order.map((destination) => <a key={destination} className={destination === path ? "is-current" : ""} aria-current={destination === path ? "page" : undefined} href={destination} onClick={(event) => onNavigate(event, destination)}>{text.legal.pages[destination].nav}</a>)}
      </nav>
      <div className="legal-content">
        {page.sections.map((section) => <section key={section.title} className="legal-section"><h2>{section.title}</h2><p>{section.body}</p></section>)}
      </div>
      <a className="legal-home-link" href={HOME_PATH} onClick={(event) => onNavigate(event, HOME_PATH)}>{text.legal.home}</a>
    </article>
  </main>;
}
