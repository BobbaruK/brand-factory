// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/registration/v4/ar/",
  // base: "/registration/v4/A/ar/",
  // base: "/registration/v4/B/ar/",
  // base: "/lp/registration/v4/ar/",
  base: "/lp/registration/v4/A/ar/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
