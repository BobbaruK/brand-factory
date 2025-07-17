// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/corsitrading/v1/es/",
  // base: "/lp/corsitrading/v1/it/",
  // base: "/corsitrading/v1_eu/pl/",
  base: "/corsitrading/v1/pl/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
