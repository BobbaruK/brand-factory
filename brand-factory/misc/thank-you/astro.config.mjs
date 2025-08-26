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
  base: "/thankyou/dr/ar/",
  // base: "/thankyou/dr/es/",
  // base: "/thankyou/dr/pt/",
  // base: "/thankyou/dr/vi/",
  // base: "/thank-you/dr/en/",
  // base: "/thank-you/dr/ro/",
  // base: "/thank-you/dr/ar/",
  // base: "/thank-you/dr/es/",
  // base: "/thank-you/dr/pt/",
  // base: "/thank-you/dr/vi/",
  trailingSlash: "ignore",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
