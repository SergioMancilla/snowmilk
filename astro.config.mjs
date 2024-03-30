import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { siteURL } from './conf';

export const additionalConfig = {
  defaultLocale: 'es'
};


// https://astro.build/config
export default defineConfig({
  site: siteURL,
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
  output: 'server',
  integrations: [tailwind()],
});