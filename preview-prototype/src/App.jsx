import { useEffect, useState } from "react";
import { copy } from "./content.js";
import { HOME_PATH, STONE_PATH, STORIES_PATH, normalizePath } from "./routes.js";
import { HomePage } from "./pages/HomePage.jsx";
import { StoneDetailPage } from "./pages/StoneDetailPage.jsx";
import { StoriesPage } from "./pages/StoriesPage.jsx";

const links = [
  ["stones", "stones", STONE_PATH],
  ["stories", "stories", STORIES_PATH],
  ["how-to-choose", "choose", `${HOME_PATH}#how-to-choose`],
  ["about", "about", `${HOME_PATH}#about`],
  ["for-trade", "trade", `${HOME_PATH}#for-trade`],
];

export function App() {
  const [locale, setLocale] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const text = copy[locale];
  const navigate = (event, destination) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const [pathname, hash = ""] = destination.split("#");
    window.history.pushState({}, "", destination);
    setPath(normalizePath(pathname));
    setMenuOpen(false);
    window.requestAnimationFrame(() => document.querySelector(hash ? `#${hash}` : "#main-content")?.focus());
  };

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  useEffect(() => {
    const updatePath = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`site-header ${path === HOME_PATH ? "" : path === STONE_PATH ? "site-header--stone" : "site-header--paper"}`}>
      <a className="brand" href={HOME_PATH} onClick={(event) => navigate(event, HOME_PATH)} aria-label="EMPYRA home"><img className="brand-mark" src="/assets/empyra-masthead-black.svg" alt="EMPYRA" /></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? text.close : text.menu}</button>
      <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">{links.map(([id, key, destination]) => <a key={id} href={destination} onClick={(event) => navigate(event, destination)}>{text.nav[key]}</a>)}<button className="language-toggle" type="button" onClick={() => setLocale((current) => current === "en" ? "nl" : "en")} aria-label="Switch language">EN / NL</button></nav>
    </header>
    {path === STONE_PATH ? <StoneDetailPage text={text} /> : path === STORIES_PATH ? <StoriesPage text={text} locale={locale} onNavigate={navigate} /> : <HomePage text={text} onNavigate={navigate} />}
  </>;
}
