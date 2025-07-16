// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/bitcoin25/sv/",
  // base: "/bitcoin25/it/",
  // base: "/bitcoin25/en/",
  // base: "/bitcoin25/es/",
  // base: "/bitcoin25/ar/",
  // base: "/bitcoin25/pl/",
  // base: "/lp/bitcoin25/en/",
  // base: "/lp/bitcoin25/es/",
  // base: "/lp/bitcoin25/ar/",
  // base: "/lp/bitcoin25/pl/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
