export const HOME_PATH = "/";
export const STONE_PATH = "/stones/rba-001";
export const STORIES_PATH = "/stories";
export const LEGAL_PATH = "/legal";
export const PRIVACY_PATH = "/privacy";
export const COOKIE_PATH = "/cookies";

const knownPaths = new Set([HOME_PATH, STONE_PATH, STORIES_PATH, LEGAL_PATH, PRIVACY_PATH, COOKIE_PATH]);

export function normalizePath(pathname) {
  if (!pathname || pathname === HOME_PATH) return HOME_PATH;
  return pathname.replace(/\/+$/, "") || HOME_PATH;
}

export function isKnownRoute(pathname) {
  return knownPaths.has(normalizePath(pathname));
}
