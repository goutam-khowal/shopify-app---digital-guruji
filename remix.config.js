import remixVite from "remix-vite"; // 👈 default import
const { vercelPreset } = remixVite; // 👈 destructure

/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverModuleFormat: "cjs",
  dev: { port: process.env.HMR_SERVER_PORT || 8002 },
  future: {},
  ...vercelPreset(),
};

if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

export default config;
