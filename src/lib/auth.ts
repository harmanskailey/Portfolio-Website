import { getSecret } from "astro:env/server";
import { ACCESS_TTL_SECONDS, normalizePasscode } from "./auth-core";

export * from "./auth-core";

export const getPortfolioPasscode = () => {
  return normalizePasscode(getSecret("PORTFOLIO_PASSCODE"));
};

export const shouldUseSecureCookie = (request: Request) => {
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();

  return (
    new URL(request.url).protocol === "https:" ||
    forwardedProtocol === "https" ||
    import.meta.env.PROD
  );
};

export const accessCookieOptions = (request: Request) => ({
  httpOnly: true,
  maxAge: ACCESS_TTL_SECONDS,
  path: "/",
  sameSite: "lax" as const,
  secure: shouldUseSecureCookie(request),
});
