// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/cometolearn_professionalblack_v1/es/",
  base: "/lp/cometolearn_professionalblack_v1/it/",
  // base: "/lp/cometolearn-v2/ar/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
