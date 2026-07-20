import { createHmac, randomBytes } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const previousPasscode = process.env.PORTFOLIO_PASSCODE;
const testPasscode = randomBytes(32).toString("hex");
process.env.PORTFOLIO_PASSCODE = testPasscode;

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

const request = (pathname, token, method = "GET") =>
  new Request(`https://www.harmanskailey.com${pathname}`, {
    method,
    headers: token ? { Cookie: `hk_portfolio_access=${token}` } : undefined,
  });

const isNextResponse = (response) =>
  response.headers.get("x-middleware-next") === "1";

const formRequest = (origin, forwardedHost) =>
  new Request("https://portfolio-internal.vercel.app/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: origin,
      "X-Forwarded-Host": forwardedHost,
      "X-Forwarded-Proto": "https",
    },
    body: new URLSearchParams({
      passcode: testPasscode,
      redirect: "/",
    }),
  });

try {
  const { default: routingMiddleware } = await import(
    `${pathToFileURL(path.resolve("middleware.ts")).href}?auth-test=${Date.now()}`
  );

  for (const pathname of [
    "/",
    "/cooking",
    "/og-card.png",
    "/favicon.ico",
    "/_astro/site.css",
    "/_render",
    "/sitemap.xml",
  ]) {
    const response = await routingMiddleware(request(pathname));
    requireCondition(
      response.status === 307,
      `${pathname} was not denied without a cookie`,
    );
    requireCondition(
      response.headers.get("location")?.startsWith("/login?redirect="),
      `${pathname} did not redirect to login`,
    );
  }

  const unsafeMethod = await routingMiddleware(
    request("/private-action", undefined, "POST"),
  );
  requireCondition(
    unsafeMethod.status === 303,
    "An unauthenticated non-GET request did not use a safe redirect",
  );

  for (const pathname of [
    "/login",
    "/api/login",
    "/api/logout",
    "/robots.txt",
  ]) {
    const response = await routingMiddleware(request(pathname));
    requireCondition(
      isNextResponse(response),
      `${pathname} was not passed through by routing middleware`,
    );
  }

  const now = Math.floor(Date.now() / 1_000);
  const validToken = signToken(now + 60 * 60 * 12);

  for (const pathname of [
    "/",
    "/cooking",
    "/og-card.png",
    "/favicon.ico",
    "/_astro/site.css",
  ]) {
    const response = await routingMiddleware(request(pathname, validToken));
    requireCondition(
      isNextResponse(response),
      `${pathname} rejected a valid signed cookie`,
    );
    requireCondition(
      response.headers.get("cache-control")?.includes("no-store"),
      `${pathname} did not disable shared caching`,
    );
  }

  const tamperedToken = `${validToken.slice(0, -1)}${validToken.endsWith("a") ? "b" : "a"}`;
  const tamperedResponse = await routingMiddleware(request("/", tamperedToken));
  requireCondition(
    tamperedResponse.status === 307,
    "A tampered cookie was accepted",
  );

  const expiredResponse = await routingMiddleware(
    request("/", signToken(now - 1)),
  );
  requireCondition(
    expiredResponse.status === 307,
    "An expired cookie was accepted",
  );

  const safeReturn = await routingMiddleware(
    request("/login?redirect=%2Fcooking", validToken),
  );
  requireCondition(
    safeReturn.status === 303 &&
      safeReturn.headers.get("location") === "/cooking",
    "A safe post-login destination was not preserved",
  );

  const unsafeReturn = await routingMiddleware(
    request("/login?redirect=https%3A%2F%2Fexample.com", validToken),
  );
  requireCondition(
    unsafeReturn.status === 303 && unsafeReturn.headers.get("location") === "/",
    "An external post-login destination was accepted",
  );

  delete process.env.PORTFOLIO_PASSCODE;
  const missingSecretResponse = await routingMiddleware(
    request("/", validToken),
  );
  requireCondition(
    missingSecretResponse.status === 307,
    "Routing middleware did not fail closed without its secret",
  );
  process.env.PORTFOLIO_PASSCODE = testPasscode;

  const vercelConfig = JSON.parse(
    await readFile(".vercel/output/config.json", "utf8"),
  );
  requireCondition(
    !JSON.stringify(vercelConfig.routes).includes("_middleware"),
    "Astro still generated the recursive edge middleware route",
  );
  await access(".vercel/output/functions/_render.func/.vc-config.json");

  let generatedEdgeMiddleware = false;
  try {
    await access(".vercel/output/functions/_middleware.func/.vc-config.json");
    generatedEdgeMiddleware = true;
  } catch {
    // Expected: Vercel compiles the root Routing Middleware separately.
  }
  requireCondition(
    !generatedEdgeMiddleware,
    "Astro still generated a self-fetching edge middleware function",
  );

  const { default: astroApp } = await import(
    `${pathToFileURL(path.resolve(".vercel/output/_functions/entry.mjs")).href}?auth-test=${Date.now()}`
  );
  const forwardedLogin = await astroApp.fetch(
    formRequest("https://www.harmanskailey.com", "www.harmanskailey.com"),
  );
  requireCondition(
    forwardedLogin.status === 303,
    `A valid proxied login was rejected with ${forwardedLogin.status}`,
  );
  requireCondition(
    forwardedLogin.headers.get("location") === "/",
    "A valid proxied login did not return to the requested page",
  );

  const previewLogin = await astroApp.fetch(
    formRequest(
      "https://portfolio-preview-harman.vercel.app",
      "portfolio-preview-harman.vercel.app",
    ),
  );
  requireCondition(
    previewLogin.status === 303,
    `A valid Vercel preview login was rejected with ${previewLogin.status}`,
  );

  const forgedLogin = await astroApp.fetch(
    formRequest("https://attacker.example", "attacker.example"),
  );
  requireCondition(
    forgedLogin.status === 403,
    "An untrusted forwarded host bypassed Astro's origin check",
  );

  console.log(
    "Auth passed: native routing middleware protects pages/assets, proxied form posts preserve CSRF checks, signed cookies validate, and missing secrets fail closed.",
  );
} finally {
  if (previousPasscode === undefined) delete process.env.PORTFOLIO_PASSCODE;
  else process.env.PORTFOLIO_PASSCODE = previousPasscode;
}
