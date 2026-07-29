const pages = new Set([
  "stones",
  "stories",
  "how-to-choose",
  "about",
  "for-trade",
  "contact",
  "privacy",
  "cookies",
  "confirmation",
]);

export function getRoute(pathname) {
  const segments = pathname.replace(/^\/nl(?=\/|$)/, "").split("/").filter(Boolean);

  if (segments.length === 0) return { page: "home" };
  if (segments[0] === "stones" && segments[1] && segments.length === 2) {
    return { page: "stone-detail", stoneId: segments[1] };
  }
  if (pages.has(segments[0]) && segments.length === 1) return { page: segments[0] };
  return { page: "not-found" };
}

export function withLocalePath(pathname, locale) {
  const basePath = pathname.replace(/^\/nl(?=\/|$)/, "") || "/";
  return locale === "nl" ? `/nl${basePath === "/" ? "" : basePath}` : basePath;
}
