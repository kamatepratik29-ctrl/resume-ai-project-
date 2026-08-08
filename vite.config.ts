import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

/**
 * Vercel deployment fix:
 * Lovable's TanStack Start wrapper defaults its server build to the
 * Cloudflare-oriented target. Nitro is explicitly added here with the
 * Vercel preset so Vercel receives a server/function output instead of
 * treating the app as static files.
 *
 * Keep the Lovable wrapper because it supplies the app's TanStack Start,
 * React, Tailwind, aliases, env injection and development configuration.
 */
export default defineConfig({
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
