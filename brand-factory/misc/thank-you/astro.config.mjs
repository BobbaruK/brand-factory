// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: "/thank-you/es/",
  // base: "/thankyou/ar/",
  // base: "/thankyou/it/",
  // base: "/thankyou/en/",
  // base: "/thankyou/es/",
  // base: "/thankyou/dr/en/",
  // base: "/thankyou/dr/ro/",
  // base: "/thankyou/dr/ar/",
  base: "/thankyou/dr/es/",
  // base: "/thankyou/dr/pt/",
  // base: "/thankyou/dr/vi/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
