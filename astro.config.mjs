import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
export const additionalConfig = {
  defaultLocale: 'es'
};


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: additionalConfig.defaultLocale,
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  root: './src',
  publicDir: 'public',
  modules: ['@astro/module-esbuild', '@astro/module-typescript'],
  integrations: [tailwind()]
});