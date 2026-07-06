import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const authCookie = context.cookies.get("portfolio_auth");
  const path = context.url.pathname;
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const appRoot = basePath || "/";
  const loginPath = `${basePath}/login` || "/login";
  const loginApiPath = `${basePath}/api/login` || "/api/login";
  const logoutApiPath = `${basePath}/api/logout` || "/api/logout";

  const isLoginPage = path === loginPath;
  const isAuthApi = path === loginApiPath || path === logoutApiPath;

  if (isLoginPage || isAuthApi) {
    if (isLoginPage && authCookie?.value === "authenticated") {
      return context.redirect(appRoot);
    }
    return next();
  }

  if (authCookie?.value !== "authenticated") {
    const redirectParam = encodeURIComponent(path);
    return context.redirect(`${loginPath}?redirect=${redirectParam}`);
  }

  return next();
});
