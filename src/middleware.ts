import { defineMiddleware } from "astro:middleware";
import {
  AUTH_COOKIE_NAME,
  getPortfolioPasscode,
  loginLocationFor,
  noStore,
  redirectResponse,
  sanitizeRedirect,
  verifyAccessToken,
} from "./lib/auth";

const PUBLIC_PATHS = new Set([
  "/api/login",
  "/api/logout",
  "/login",
  "/robots.txt",
]);

const normalizePath = (path: string) =>
  path === "/" ? path : path.replace(/\/+$/, "");

export const onRequest = defineMiddleware(async (context, next) => {
  const path = normalizePath(context.url.pathname);
  const passcode = getPortfolioPasscode();
  const token = context.cookies.get(AUTH_COOKIE_NAME)?.value;
  const authorized = passcode
    ? await verifyAccessToken(token, passcode)
    : false;

  if (path === "/login") {
    if (authorized) {
      const destination = sanitizeRedirect(
        context.url.searchParams.get("redirect"),
        context.url.origin,
      );
      return redirectResponse(destination);
    }

    return noStore(await next());
  }

  if (PUBLIC_PATHS.has(path)) {
    const response = await next();
    return path === "/robots.txt" ? response : noStore(response);
  }

  if (!authorized) {
    const status =
      context.request.method === "GET" || context.request.method === "HEAD"
        ? 307
        : 303;
    return redirectResponse(loginLocationFor(context.url), status);
  }

  return noStore(await next());
});
