import type { APIRoute } from "astro";

const getBasePath = () => import.meta.env.BASE_URL.replace(/\/$/, "");

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const basePath = getBasePath();
  const appRoot = basePath || "/";

  cookies.delete("portfolio_auth", {
    path: appRoot,
  });

  return redirect(`${basePath}/login` || "/login");
};
