import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel";

const vercelHostname = (value) => {
  if (!value) return undefined;

  try {
    const url = new URL(`https://${value}`);

    if (
      url.protocol !== "https:" ||
      url.port ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      !url.hostname.endsWith(".vercel.app")
    ) {
      return undefined;
    }

    return url.hostname;
  } catch {
    return undefined;
  }
};

const allowedHostnames = new Set([
  "harmanskailey.com",
  "www.harmanskailey.com",
  "**.vercel.app",
]);
const isProductionBuild = process.env.NODE_ENV === "production";

for (const hostname of [
  vercelHostname(process.env.VERCEL_URL),
  vercelHostname(process.env.VERCEL_BRANCH_URL),
]) {
  if (hostname) allowedHostnames.add(hostname);
}

export default defineConfig({
  site: "https://www.harmanskailey.com",
  output: "server",
  adapter: vercel(),
  security: {
    checkOrigin: isProductionBuild,
    allowedDomains: [...allowedHostnames].map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
  env: {
    schema: {
      PORTFOLIO_PASSCODE: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
});
