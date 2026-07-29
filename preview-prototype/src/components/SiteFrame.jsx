import { withLocalePath } from "../routes.js";

const links = [
  ["/stones", "stones"],
  ["/stories", "stories"],
  ["/how-to-choose", "howToChoose"],
  ["/about", "about"],
  ["/for-trade", "forTrade"],
];

export function SiteFrame({ locale, onLocaleChange, onNavigate, menuOpen, onMenuChange, shared, children }) {
  const pathname = window.location.pathname;
  const routePath = pathname.replace(/^\/nl(?=\/|$)/, "") || "/";
  const alternateLocale = locale === "en" ? "nl" : "en";
  const languagePath = withLocalePath(pathname, alternateLocale);

  function closeMenu() {
    onMenuChange(false);
  }

  return (
    <div onClick={onNavigate}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Rubiae home" aria-current={routePath === "/" ? "page" : undefined}>Rubiae</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => onMenuChange((open) => !open)}>
          {menuOpen ? shared.pages.system.menuClose : shared.pages.system.menuOpen}
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([href, key]) => {
            const isCurrent = routePath === href;
            return <a key={href} href={withLocalePath(href, locale)} aria-current={isCurrent ? "page" : undefined} onClick={closeMenu}>{shared.shared.navigation[key]}</a>;
          })}
          <a className="language-toggle" href={languagePath} onClick={() => onLocaleChange(alternateLocale)} aria-label={shared.pages.system.changeLanguage}>{shared.shared.languageSwitch}</a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <section id="about"><p className="eyebrow">RUBIAE</p><p>{shared.pages.about.paragraphs[0]}</p></section>
        <section id="for-trade"><p className="eyebrow">{shared.shared.navigation.forTrade}</p><p>{shared.pages.forTrade.intro}</p></section>
        <div className="footer-bottom"><h2>{shared.shared.footer.closingLine}</h2><nav aria-label="Footer navigation">{links.map(([href, key]) => <a key={href} href={withLocalePath(href, locale)}>{shared.shared.navigation[key]}</a>)}</nav></div>
      </footer>
    </div>
  );
}
