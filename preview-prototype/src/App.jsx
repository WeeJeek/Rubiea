import { useEffect, useState } from "react";
import { SiteFrame } from "./components/SiteFrame.jsx";
import { content } from "./content.js";
import { previewStones } from "./preview-stones.js";
import { getRoute, withLocalePath } from "./routes.js";
import { HomePage } from "./pages/HomePage.jsx";
import { StonesPage } from "./pages/StonesPage.jsx";
import { StoneDetailPage } from "./pages/StoneDetailPage.jsx";

function localeFromPath(pathname) {
  return pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";
}

function GenericPage({ page, text, stone }) {
  const pageCopy = stone ? text.stoneDetail : text[page] || text.notFound;
  const heading = pageCopy.heading || pageCopy.title;

  return <main id="main-content" tabIndex="-1"><section className="section-light"><div className="slow-copy"><p className="eyebrow">{pageCopy.eyebrow}</p><h1>{heading}</h1>{pageCopy.intro && <p>{pageCopy.intro}</p>}{stone && <p>{stone.id}</p>}</div></section></main>;
}

export function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldFocusMain, setShouldFocusMain] = useState(false);
  const locale = localeFromPath(pathname);
  const page = getRoute(pathname);
  const text = content[locale].pages;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (shouldFocusMain) document.getElementById("main-content")?.focus();
  }, [pathname, shouldFocusMain]);

  useEffect(() => {
    function handlePopstate() {
      setPathname(window.location.pathname);
      setMenuOpen(false);
      setShouldFocusMain(true);
    }

    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  function navigate(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a");
    if (!link || link.target || link.hasAttribute("download")) return;
    const url = new URL(link.href, window.location.origin);
    if (url.origin !== window.location.origin || url.hash) return;

    event.preventDefault();
    history.pushState({}, "", `${url.pathname}${url.search}`);
    setPathname(url.pathname);
    setMenuOpen(false);
    setShouldFocusMain(true);
  }

  function changeLocale(nextLocale) {
    setPathname((currentPath) => withLocalePath(currentPath, nextLocale));
  }

  const stone = page.page === "stone-detail" ? previewStones.find((item) => item.id === page.stoneId) : undefined;
  const pageName = stone ? "stoneDetail" : page.page === "not-found" ? "notFound" : page.page;

  let pageContent;
  if (page.page === "home") pageContent = <HomePage text={text.home} locale={locale} />;
  else if (page.page === "stones") pageContent = <StonesPage stones={previewStones} locale={locale} text={text.stones} />;
  else if (page.page === "stone-detail") pageContent = <StoneDetailPage stoneId={page.stoneId} stone={stone} locale={locale} text={text.stoneDetail} notFound={text.notFound} />;
  else pageContent = <GenericPage page={pageName} text={text} stone={stone} />;

  return (
    <SiteFrame locale={locale} onLocaleChange={changeLocale} onNavigate={navigate} menuOpen={menuOpen} onMenuChange={setMenuOpen} shared={content[locale]}>
      {pageContent}
    </SiteFrame>
  );
}
