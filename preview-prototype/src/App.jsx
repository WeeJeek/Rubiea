import { useEffect, useState } from "react";
import { SiteFrame } from "./components/SiteFrame.jsx";
import { content } from "./content.js";
import { previewStones } from "./preview-stones.js";
import { getRoute, withLocalePath } from "./routes.js";
import { HomePage } from "./pages/HomePage.jsx";
import { StonesPage } from "./pages/StonesPage.jsx";
import { StoneDetailPage } from "./pages/StoneDetailPage.jsx";
import { EditorialPage } from "./pages/EditorialPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ConfirmationPage } from "./pages/ConfirmationPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

function localeFromPath(pathname) {
  return pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";
}

const editorialPages = new Set(["stories", "how-to-choose", "about", "for-trade", "privacy", "cookies"]);

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
  let pageContent;
  if (page.page === "home") pageContent = <HomePage text={text.home} locale={locale} />;
  else if (page.page === "stones") pageContent = <StonesPage stones={previewStones} locale={locale} text={text.stones} />;
  else if (page.page === "stone-detail") pageContent = <StoneDetailPage stoneId={page.stoneId} stone={stone} locale={locale} text={text.stoneDetail} notFound={text.notFound} />;
  else if (editorialPages.has(page.page)) pageContent = <EditorialPage page={page.page} locale={locale} text={text[page.page]} />;
  else if (page.page === "contact") pageContent = <ContactPage locale={locale} text={text.contact} />;
  else if (page.page === "confirmation") pageContent = <ConfirmationPage text={text.confirmation} />;
  else if (page.page === "not-found") pageContent = <NotFoundPage locale={locale} text={text.notFound} />;
  else pageContent = <NotFoundPage locale={locale} text={text.notFound} />;

  return (
    <SiteFrame locale={locale} onLocaleChange={changeLocale} onNavigate={navigate} menuOpen={menuOpen} onMenuChange={setMenuOpen} shared={content[locale]}>
      {pageContent}
    </SiteFrame>
  );
}
