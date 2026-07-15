import { next } from "@vercel/functions";
import {
  AUTH_COOKIE_NAME,
  isPublicAuthPath,
  loginLocationFor,
  normalizePasscode,
  normalizePath,
  readCookie,
  redirectResponse,
  sanitizeRedirect,
  verifyAccessToken,
} from "./src/lib/auth-core";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  Pragma: "no-cache",
  Vary: "Cookie",
};

const continueWithoutCaching = () => next({ headers: NO_STORE_HEADERS });

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);
  const passcode = normalizePasscode(process.env.PORTFOLIO_PASSCODE);
  const token = readCookie(request.headers.get("Cookie"), AUTH_COOKIE_NAME);
  const authorized = passcode
    ? await verifyAccessToken(token, passcode)
    : false;

  if (path === "/login") {
    if (authorized) {
      const destination = sanitizeRedirect(
        url.searchParams.get("redirect"),
        url.origin,
      );
      return redirectResponse(destination);
    }

    return continueWithoutCaching();
  }

  if (isPublicAuthPath(path)) {
    return path === "/robots.txt" ? next() : continueWithoutCaching();
  }

  if (!authorized) {
    const status =
      request.method === "GET" || request.method === "HEAD" ? 307 : 303;
    return redirectResponse(loginLocationFor(url), status);
  }

  return continueWithoutCaching();
}
