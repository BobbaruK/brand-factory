// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/trading_signals/ar/",
  // base: "/lp/trading_signals/en/",
  // base: "/lp/trading_signals/es/",
  // base: "/trading_signals/ar/",
  base: "/trading_signals/ar/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
