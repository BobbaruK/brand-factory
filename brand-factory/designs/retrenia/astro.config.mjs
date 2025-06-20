// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/tc-assets/en/",
  // base: "/tc-assets/en/",
  // base: "/tc-assets/it/",
  // base: "/tc-assets/sv/",
  base: "/tc-assets/pl/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
