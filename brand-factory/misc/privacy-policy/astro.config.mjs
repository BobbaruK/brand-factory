// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/privacy-policy/en/",
  base: "/privacy-policy/es/",
  // base: "/privacypolicy/ar/",
  // base: "/privacypolicy/it/",
  // base: "/privacypolicy/en/",
  // base: "/privacypolicy/es/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
