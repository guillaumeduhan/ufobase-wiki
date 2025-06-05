// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from 'rehype-external-links';
import mdx from '@astrojs/mdx';
import remarkUtmSource from './src/plugins/remark-utm-source';

export default defineConfig({
  site: 'https://ufobase.wiki',

  integrations: [
    react(),
    sitemap(),
    mdx({
      remarkPlugins: [
        // Adds ?utm_source=ufobase.wiki to external links
        remarkUtmSource
      ],
      rehypePlugins: [
        // Opens external links in new tab, safe rel
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
