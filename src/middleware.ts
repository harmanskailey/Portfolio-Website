import { defineMiddleware } from "astro:middleware";
import {
  AUTH_COOKIE_NAME,
  getPortfolioPasscode,
  isPublicAuthPath,
  loginLocationFor,
  noStore,
  normalizePath,
  redirectResponse,
  sanitizeRedirect,
  verifyAccessToken,
} from "./lib/auth";

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

  if (isPublicAuthPath(path)) {
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
