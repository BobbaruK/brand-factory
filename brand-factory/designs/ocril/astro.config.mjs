// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/lp/freedom-to-trade/ar/",
  // base: "/lp/trading-signals/es/",
  // base: "/freedom-to-trade/pl/",
  // base: "/freedom-to-trade/en/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
