
# 🚀 Astro SEO Directory Template 2025

A lightning-fast, SEO-optimized starter built with Astro and Tailwind CSS. Ideal for creating directories, job boards, or resource collections without a CMS, using Markdown or MDX content.

## ✨ Features

- ⚡ Static Site Generation (SSG) for optimal performance
- 🔍 Built-in SEO: meta tags, Open Graph, clean URLs
- 📄 MDX & Markdown support with frontmatter
- 🎨 Responsive design with Tailwind CSS and dark mode
- 🔎 Instant search bar in the sidebar
- 🧱 Dynamic routing with `[slug].astro`
- 🚫 Zero client-side JavaScript by default

## 📁 Project Structure

```plaintext
├── public/
│   ├── images
│   ├── favicon.png
│   ├── logo.jpg
│   ├── robot.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── DarkMode.astro
│   │   ├── Header.astro
│   │   ├── Latest.astro
│   │   ├── Logo.astro
│   │   └── Header.astro
│   ├── content/
│   │   └── *.mdx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 500.astro
│   │   └── [slug].astro
│   ├── plugins/
│   │   └── remark-utm-source.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── makefile
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/astro-seo-directory-template.git
cd astro-seo-directory-template
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

The site will be available at [http://localhost:4321/](http://localhost:4321/).

## ✍️ Adding Content

Add your `.mdx` or `.md` files to the `src/content/` directory. Each file becomes a page accessible via its slug.

### Frontmatter Example

```yaml
---
title: "Entry Name"
description: "Brief description for SEO and social sharing"
tags: ["tech", "startup"]
image: "/images/example.png"
---
```

> 📝 **Note**: The `index.mdx` file is ignored in the sidebar.

## 🔍 Sidebar and Search

The sidebar automatically lists all `.mdx` files (excluding `index.mdx`). A search field allows real-time filtering of results.

## 🎨 Customization

- Modify `src/styles/global.css` to adjust global styles.
- Adjust the layout via `src/layouts/Layout.astro`.
- Customize components in `src/components/`.

## 📦 Building for Production

```bash
npm run build
# or
pnpm build
```

The static site will be generated in the `dist/` directory.

## 🚀 Deployment

Deploy the `dist/` directory to your preferred platform:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## ❓ FAQ

### Why choose Astro for a directory?

Astro offers exceptional performance with static rendering by default, making it ideal for SEO and fast loading times.

### Do I need a database or CMS?

No. Content is managed via `.mdx` or `.md` files. Simply edit and rebuild the site.

### Can I add a search feature?

Yes! An instant search is already integrated. For advanced needs, you can integrate solutions like Algolia or Fuse.js.

### Is it possible to monetize my directory?

Absolutely. You can integrate Stripe, Gumroad, affiliate links, or offer sponsored spots.

## 👨‍💻 About the Creator

I'm Guillaume Duhan, CTO & indie builder. I've launched many projects using Astro, and this template is the result of several iterations to create SEO-focused web tools.

## 📎 License

This project is licensed under the [MIT](LICENSE).
