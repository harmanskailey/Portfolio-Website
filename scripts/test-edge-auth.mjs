import { createHmac, randomBytes } from "node:crypto";
import { access } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const bundlePath = path.resolve(
  ".vercel/output/functions/_middleware.func/middleware.mjs",
);
await access(bundlePath);

const previousPasscode = process.env.PORTFOLIO_PASSCODE;
const originalFetch = globalThis.fetch;
const testPasscode = randomBytes(32).toString("hex");
process.env.PORTFOLIO_PASSCODE = testPasscode;

globalThis.fetch = async () =>
  new Response("protected upstream response", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });

const { default: edgeMiddleware } = await import(
  `${pathToFileURL(bundlePath).href}?auth-test=${Date.now()}`
);

const context = { waitUntil() {} };
const requireCondition = (condition, message) => {
  if (!condition) throw new Error(message);
};

const signToken = (expiresAt) => {
  const payload = `v1.${expiresAt}`;
  const signature = createHmac("sha256", testPasscode)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
};

const request = (pathname, token) =>
  new Request(`https://harmanskailey.com${pathname}`, {
    headers: token ? { Cookie: `hk_portfolio_access=${token}` } : undefined,
  });

try {
  for (const pathname of [
    "/",
    "/cooking",
    "/og-card.png",
    "/_astro/site.css",
    "/sitemap.xml",
  ]) {
    const response = await edgeMiddleware(request(pathname), context);
    requireCondition(
      response.status === 307,
      `${pathname} was not denied without a cookie`,
    );
    requireCondition(
      response.headers.get("location")?.startsWith("/login?redirect="),
      `${pathname} did not redirect to login`,
    );
  }

  for (const pathname of ["/login", "/robots.txt"]) {
    const response = await edgeMiddleware(request(pathname), context);
    requireCondition(
      response.status === 200,
      `${pathname} was not publicly reachable`,
    );
  }

  const now = Math.floor(Date.now() / 1_000);
  const validToken = signToken(now + 60 * 60 * 12);

  for (const pathname of [
    "/",
    "/cooking",
    "/og-card.png",
    "/_astro/site.css",
  ]) {
    const response = await edgeMiddleware(
      request(pathname, validToken),
      context,
    );
    requireCondition(
      response.status === 200,
      `${pathname} rejected a valid signed cookie`,
    );
    requireCondition(
      response.headers.get("cache-control")?.includes("no-store"),
      `${pathname} did not disable shared caching`,
    );
  }

  const tamperedToken = `${validToken.slice(0, -1)}${validToken.endsWith("a") ? "b" : "a"}`;
  const tamperedResponse = await edgeMiddleware(
    request("/", tamperedToken),
    context,
  );
  requireCondition(
    tamperedResponse.status === 307,
    "A tampered cookie was accepted",
  );

  const expiredResponse = await edgeMiddleware(
    request("/", signToken(now - 1)),
    context,
  );
  requireCondition(
    expiredResponse.status === 307,
    "An expired cookie was accepted",
  );

  const safeReturn = await edgeMiddleware(
    request("/login?redirect=%2Fcooking", validToken),
    context,
  );
  requireCondition(
    safeReturn.status === 303 &&
      safeReturn.headers.get("location") === "/cooking",
    "A safe post-login destination was not preserved",
  );

  const unsafeReturn = await edgeMiddleware(
    request("/login?redirect=https%3A%2F%2Fexample.com", validToken),
    context,
  );
  requireCondition(
    unsafeReturn.status === 303 && unsafeReturn.headers.get("location") === "/",
    "An external post-login destination was accepted",
  );

  delete process.env.PORTFOLIO_PASSCODE;
  const missingSecretResponse = await edgeMiddleware(
    request("/", validToken),
    context,
  );
  requireCondition(
    missingSecretResponse.status === 307,
    "The middleware did not fail closed without its secret",
  );

  console.log(
    "Edge auth passed: routes/assets protected, signed cookies enforced, redirects constrained, and missing-secret behavior closed.",
  );
} finally {
  globalThis.fetch = originalFetch;
  if (previousPasscode === undefined) delete process.env.PORTFOLIO_PASSCODE;
  else process.env.PORTFOLIO_PASSCODE = previousPasscode;
}
