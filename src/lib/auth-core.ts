export const AUTH_COOKIE_NAME = "hk_portfolio_access";
export const ACCESS_TTL_SECONDS = 60 * 60 * 12;

const TOKEN_VERSION = "v1";
const MAX_REDIRECT_LENGTH = 2_048;
const PUBLIC_PATHS = new Set([
  "/api/login",
  "/api/logout",
  "/login",
  "/robots.txt",
]);
const encoder = new TextEncoder();

const digest = async (value: string) =>
  new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));

const equalBytes = (left: Uint8Array, right: Uint8Array) => {
  let mismatch = left.length ^ right.length;
  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    mismatch |= (left[index] ?? 0) ^ (right[index] ?? 0);
  }

  return mismatch === 0;
};

const equalText = async (left: string, right: string) => {
  const [leftDigest, rightDigest] = await Promise.all([
    digest(left),
    digest(right),
  ]);

  return equalBytes(leftDigest, rightDigest);
};

const toBase64Url = (value: Uint8Array) => {
  let binary = "";

  for (const byte of value) binary += String.fromCharCode(byte);

  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
};

const sign = async (payload: string, secret: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload),
  );

  return toBase64Url(new Uint8Array(signature));
};

export const normalizePasscode = (value: string | undefined) =>
  value && value.length > 0 ? value : undefined;

export const normalizePath = (path: string) =>
  path === "/" ? path : path.replace(/\/+$/, "");

export const isPublicAuthPath = (path: string) =>
  PUBLIC_PATHS.has(normalizePath(path));

export const readCookie = (cookieHeader: string | null, name: string) => {
  if (!cookieHeader) return undefined;

  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;

    const key = part.slice(0, separator).trim();
    if (key === name) return part.slice(separator + 1).trim();
  }

  return undefined;
};

export const passcodesMatch = async (submitted: string, expected: string) => {
  const [submittedDigest, expectedDigest] = await Promise.all([
    digest(submitted),
    digest(expected),
  ]);
  return equalBytes(submittedDigest, expectedDigest);
};

export const createAccessToken = async (secret: string, now = Date.now()) => {
  const expiresAt = Math.floor(now / 1_000) + ACCESS_TTL_SECONDS;
  const payload = `${TOKEN_VERSION}.${expiresAt}`;
  const signature = await sign(payload, secret);

  return `${payload}.${signature}`;
};

export const verifyAccessToken = async (
  value: string | undefined,
  secret: string,
  now = Date.now(),
) => {
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [version, expiresRaw, suppliedSignature] = parts;
  if (
    version !== TOKEN_VERSION ||
    !/^\d+$/.test(expiresRaw) ||
    !suppliedSignature
  ) {
    return false;
  }

  const expiresAt = Number(expiresRaw);
  const nowSeconds = Math.floor(now / 1_000);
  if (
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= nowSeconds ||
    expiresAt > nowSeconds + ACCESS_TTL_SECONDS + 60
  ) {
    return false;
  }

  const expectedSignature = await sign(`${version}.${expiresRaw}`, secret);
  return equalText(suppliedSignature, expectedSignature);
};

export const sanitizeRedirect = (
  candidate: string | null | undefined,
  origin: string,
) => {
  if (
    !candidate ||
    candidate.length > MAX_REDIRECT_LENGTH ||
    !candidate.startsWith("/") ||
    candidate.startsWith("//") ||
    candidate.includes("\\") ||
    /[\u0000-\u001f\u007f]/.test(candidate)
  ) {
    return "/";
  }

  try {
    const destination = new URL(candidate, origin);
    if (destination.origin !== origin) return "/";
    const normalizedPath = normalizePath(destination.pathname);
    if (
      normalizedPath === "/login" ||
      normalizedPath === "/api" ||
      normalizedPath.startsWith("/api/")
    ) {
      return "/";
    }

    return `${destination.pathname}${destination.search}`;
  } catch {
    return "/";
  }
};

export const loginLocationFor = (requestUrl: URL) => {
  const loginUrl = new URL("/login", requestUrl);
  loginUrl.searchParams.set(
    "redirect",
    `${requestUrl.pathname}${requestUrl.search}`,
  );
  return `${loginUrl.pathname}${loginUrl.search}`;
};

export const noStore = (response: Response) => {
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", "private, no-store, max-age=0");
  headers.set("Pragma", "no-cache");

  const vary = headers.get("Vary");
  if (!vary) headers.set("Vary", "Cookie");
  else if (!vary.toLowerCase().split(/,\s*/).includes("cookie")) {
    headers.set("Vary", `${vary}, Cookie`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const redirectResponse = (location: string, status = 303) =>
  noStore(
    new Response(null, {
      status,
      headers: { Location: location },
    }),
  );
