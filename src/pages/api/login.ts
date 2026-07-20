import type { APIRoute } from "astro";
import {
  AUTH_COOKIE_NAME,
  accessCookieOptions,
  createAccessToken,
  crossSiteFormResponse,
  getPortfolioPasscode,
  isTrustedFormOrigin,
  passcodesMatch,
  redirectResponse,
  sanitizeRedirect,
} from "../../lib/auth";

export const prerender = false;

const invalidLoginLocation = (redirectTo: string) => {
  const location = new URL("/login", "https://portfolio.invalid");
  location.searchParams.set("error", "invalid");
  location.searchParams.set("redirect", redirectTo);
  return `${location.pathname}${location.search}`;
};

export const POST: APIRoute = async ({ request, cookies, url }) => {
  if (!isTrustedFormOrigin(request)) {
    return crossSiteFormResponse(request.method);
  }

  const redirectTo = sanitizeRedirect(
    new URL(request.url).searchParams.get("redirect"),
    url.origin,
  );
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (Number.isFinite(contentLength) && contentLength > 4_096) {
    return redirectResponse(invalidLoginLocation(redirectTo));
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return redirectResponse(invalidLoginLocation(redirectTo));
  }

  const submitted = formData.get("passcode");
  const formRedirect = formData.get("redirect");
  const safeRedirect = sanitizeRedirect(
    typeof formRedirect === "string" ? formRedirect : redirectTo,
    url.origin,
  );
  const passcode = getPortfolioPasscode();

  if (!passcode) {
    return new Response(
      "Portfolio access is temporarily unavailable. Please try again later.",
      {
        status: 503,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Retry-After": "300",
        },
      },
    );
  }

  if (
    typeof submitted !== "string" ||
    submitted.length === 0 ||
    submitted.length > 256 ||
    !(await passcodesMatch(submitted, passcode))
  ) {
    return redirectResponse(invalidLoginLocation(safeRedirect));
  }

  cookies.set(
    AUTH_COOKIE_NAME,
    await createAccessToken(passcode),
    accessCookieOptions(request),
  );

  return redirectResponse(safeRedirect);
};

export const GET: APIRoute = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
