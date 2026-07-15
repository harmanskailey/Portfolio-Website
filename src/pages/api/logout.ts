import type { APIRoute } from "astro";
import { AUTH_COOKIE_NAME, redirectResponse } from "../../lib/auth";

export const prerender = false;

export const POST: APIRoute = ({ cookies }) => {
  cookies.delete(AUTH_COOKIE_NAME, { path: "/" });
  return redirectResponse("/login?message=locked");
};

export const GET: APIRoute = () =>
  new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
