import type { APIRoute } from "astro";

const getBasePath = () => import.meta.env.BASE_URL.replace(/\/$/, "");

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const passcode = data.get("passcode");
  const redirectTarget = data.get("redirect");
  const configuredPasscode =
    import.meta.env.PORTFOLIO_PASSCODE ?? import.meta.env.TEST_PASSCODE;
  const basePath = getBasePath();
  const appRoot = basePath || "/";
  const loginPath = `${basePath}/login` || "/login";

  if (!configuredPasscode) {
    return new Response("Missing PORTFOLIO_PASSCODE environment variable.", {
      status: 500,
    });
  }

  if (passcode === configuredPasscode) {
    cookies.set("portfolio_auth", "authenticated", {
      path: appRoot,
      httpOnly: true,
      sameSite: "lax",
      secure: import.meta.env.PROD,
    });

    const fallbackPath = appRoot;
    const nextPath =
      typeof redirectTarget === "string" && redirectTarget.startsWith(appRoot)
        ? redirectTarget
        : fallbackPath;

    return redirect(nextPath);
  }

  const redirectParam =
    typeof redirectTarget === "string" ? `&redirect=${encodeURIComponent(redirectTarget)}` : "";

  return redirect(`${loginPath}?error=invalid${redirectParam}`);
};

export const GET: APIRoute = ({ redirect }) => {
  const basePath = getBasePath();
  return redirect(`${basePath}/login` || "/login");
};
