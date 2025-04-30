// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: "/lp/LP_NAME/LP_LANG/",
	trailingSlash: "ignore",
	integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});