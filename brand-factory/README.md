# Astro with React, Typescript, Tailwind and Shadcn

### 1. Create Project

Create a new Astro project: `npm create astro@latest`

### 2. Configure Astro project

- Where should we create your new project? - **./lp-slug**
- How would you like to start your new project? - **A basic, minimal starter (recommended)**
- Install dependencies? **Yes**
- Initialize a new git repository? **No**

### 3. Add React

Install React using the Astro CLI: `npx astro add react`

Answer `Yes` to all the question prompted by the CLI when installing React.

### 4. Add Tailwind

`npm install tailwindcss @tailwindcss/vite`

### 5. Configure Vite Plugin in `astro.config.mjs`

Add the @tailwindcss/vite plugin to your Vite plugins in your Astro config file.

```mjs
// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/lp/LP_NAME/LP_LANG/",
  trailingSlash: "ignore",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 6. Add path aliases to `tsconfig.json`

```json
{
  // ...
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 7. Import Tailwind CSS

Create a `./src/styles/global.css` file and add an @import for Tailwind CSS.

```css
@import "tailwindcss";

@utility container {
  max-width: 1250px;
  margin-inline: auto;
  padding-inline: 1rem;
  width: 100%;
}
```

### 8. Add SASS

`npm install -D sass-embedded`

### 9. Copy files

Copy folders from `./globals/copy/` to `./designs/lp_slug/src/`.

### 10. Install Prettier Plugin for Astro and Tailwind

`npm i --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss`

### 11. Create `.prettierrc.mjs` in the root of the project

```javascript
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

### 12. Install the VS Code Prettier extension

**Do this if you didn't do it by now**

Install the [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add the following settings to your VS Code configuration:

`CTRL + SHIFT + P` > `Preferences: User Settings (JSON)`

```json
{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 13. Add ShadCN

Because you created a new project with Tailwind v4 and React 19, use the `canary` version of the command-line:

`npx shadcn@canary init`

More info [here](https://ui.shadcn.com/docs/tailwind-v4)

### 14. Configure ShadCN

- Which color would you like to use as the **base color**? - **Slate**
- Would you like to use **CSS variables** for theming? - **yes**
- How would you like to proceed? - **Use --force**

### 15. Add ShadCN components

`npx shadcn@latest add button input label`

### 16. Reload window

Sometimes you need to reload the window for the changes to apply

`CTRL + SHIFT + P` `Developer: Reload Window`

### 17. Happy coding!

`npm run dev` - development

`npm run build` - build

`npm run preview` - preview build before deploy
