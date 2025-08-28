// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/registration/v4/A/ar/",
  // base: "/registration/v4/B/ar/",
  // base: "/registration/v5/es/",
  // base: "/registration/v3/es/",
  base: "/registration/v3/en/",
  // base: "/lp/registration/v4/A/ar/",
  // base: "/lp/registration/v4/B/ar/",
  // base: "/lp/registration/v3/ar/",
  // base: "/lp/registration/ar/",
  // base: "/lp/registration/en/",
  // base: "/lp/registration/es/",
  // base: "/lp/registration/v2/ar/",
  // base: "/lp/registration/v3/en/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
