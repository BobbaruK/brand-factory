// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/gold-signals/en/",
  base: "/gold-signals/ar/",
  // base: "/gold-signals/es/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
