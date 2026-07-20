import { getSecret } from "astro:env/server";
import { ACCESS_TTL_SECONDS, normalizePasscode } from "./auth-core";

export * from "./auth-core";

const CANONICAL_ORIGINS = new Set([
  "https://harmanskailey.com",
  "https://www.harmanskailey.com",
]);

const deploymentOrigins = () => {
  const origins = new Set(CANONICAL_ORIGINS);
  const platformEnvironment = process.env as Record<string, string | undefined>;

  for (const hostname of [
    platformEnvironment.VERCEL_URL,
    platformEnvironment.VERCEL_BRANCH_URL,
  ]) {
    if (!hostname) continue;

    try {
      const candidate = new URL(`https://${hostname}`);
      if (
        candidate.protocol === "https:" &&
        !candidate.port &&
        candidate.hostname.endsWith(".vercel.app")
      ) {
        origins.add(candidate.origin);
      }
    } catch {
      // Ignore malformed platform metadata instead of trusting it.
    }
  }

  return origins;
};

export const isTrustedFormOrigin = (request: Request) => {
  const originHeader = request.headers.get("Origin");
  if (!originHeader) return false;

  try {
    const submittedOrigin = new URL(originHeader);
    if (!/^https?:$/.test(submittedOrigin.protocol)) return false;

    const allowedOrigins = deploymentOrigins();
    allowedOrigins.add(new URL(request.url).origin);
    return allowedOrigins.has(submittedOrigin.origin);
  } catch {
    return false;
  }
};

export const crossSiteFormResponse = (method: string) =>
  new Response(`Cross-site ${method} form submissions are forbidden`, {
    status: 403,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });

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
