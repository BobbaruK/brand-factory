// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/cometolearn/it/",
  // base: "/cometolearn/pl/",
  // base: "/cometolearn/en/",
  base: "/cometolearn/v2/pl/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
