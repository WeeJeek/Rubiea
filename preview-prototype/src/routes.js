export const HOME_PATH = "/";
export const STONE_PATH = "/stones/rba-001";
export const STORIES_PATH = "/stories";

const knownPaths = new Set([HOME_PATH, STONE_PATH, STORIES_PATH]);

export function normalizePath(pathname) {
  if (!pathname || pathname === HOME_PATH) return HOME_PATH;
  return pathname.replace(/\/+$/, "") || HOME_PATH;
}

export function isKnownRoute(pathname) {
  return knownPaths.has(normalizePath(pathname));
}
