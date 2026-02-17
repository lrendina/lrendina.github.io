# Lorenzo Rendina – Personal Portfolio & Digital Garden

A high-signal, dark-first portfolio and blog built with Next.js 16, Contentlayer2, and Tailwind CSS. Features MDX-powered posts and projects, glassmorphic UI, and Notion-style prose.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + custom prose styles
- **Content**: Contentlayer2 + MDX (math, syntax highlighting)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## Development

Prerequisites: `pnpm` (recommended)

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Content

- **Blog posts**: `/content/blog/*.mdx`
- **Projects**: `/content/projects/*.mdx`

Contentlayer automatically generates types and routes. Add new MDX files and they’ll appear on `/blog` and `/projects`.

## Deployment on GitHub Pages

This repo is configured to deploy to GitHub Pages via GitHub Actions.

1. **Ensure repo settings**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (or `main` if you prefer)

2. **Build configuration**:
   - `next.config.ts` includes `output: 'export'` for static export
   - `basePath` is automatically set to `/<repo-name>` in production
   - `package.json` includes `homepage` field for asset paths

3. **Automatic deployment**:
   - Push to `main` → GitHub Action builds and deploys to `gh-pages`
   - Site will be live at `https://<username>.github.io/<repo-name>`

### Manual Deploy (Optional)

```bash
# Build and export static files
pnpm build

# Deploy to gh-pages branch (requires gh-pages package)
pnpm add -D gh-pages
pnpm run deploy
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
└── lib/                 # Utilities and site config

content/
├── blog/               # MDX blog posts
└── projects/           # MDX project entries
```

## License

MIT
