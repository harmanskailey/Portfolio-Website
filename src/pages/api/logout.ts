import type { APIRoute } from "astro";
import {
  AUTH_COOKIE_NAME,
  crossSiteFormResponse,
  isTrustedFormOrigin,
  redirectResponse,
} from "../../lib/auth";

export const prerender = false;

export const POST: APIRoute = ({ cookies, request }) => {
  if (!isTrustedFormOrigin(request)) {
    return crossSiteFormResponse(request.method);
  }

  cookies.delete(AUTH_COOKIE_NAME, { path: "/" });
  return redirectResponse("/login?message=locked");
};

export const GET: APIRoute = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
