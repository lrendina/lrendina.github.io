# Project Specification: Personal Portfolio & Digital Garden
**Owner:** Lorenzo Rendina  
**Stack:** Next.js 16 (App Router), Tailwind CSS, shadcn/ui, Framer Motion, Contentlayer (for MDX).

---

## 1. Vision & Aesthetics
- **Core Vibe:** "Technical Elegance." A blend of high-end Swiss design and terminal-inspired elements.
- **Theme:** Dark mode primary. Deep grays (#0a0a0a), crisp white text, and a single accent color (e.g., Electric Blue or Emerald).
- **Interactions:** Subtle micro-interactions. Page transitions should feel fluid, not jarring.

---

## 2. Core Pages & Features

### A. Landing Page (Hero)
- **Visuals:** High-impact typography. A "Terminal Terminal" component that types out "Computer Science Graduate | Blockchain | Quant Finance."
- **CTA:** Links to "View Projects" and "Read Blog."
- **Socials:** Minimalist icon bar (GitHub, LinkedIn, X).

### B. Project Gallery
- **Format:** A responsive grid of cards.
- **Data Points:** Project Title, Tech Stack (as badges), GitHub Link, Live Demo Link, and a 1-sentence "Impact Statement."
- **Filtering:** Ability to filter by "Blockchain," "AI," or "Full Stack."

### C. Blog (Digital Garden)
- **Engine:** MDX-based. Posts should support syntax highlighting (Shiki) and LaTeX rendering for math/quant posts.
- **Features:** Reading time estimation, "last updated" date, and a "Back to Garden" navigation button.
- **Tone:** Technical but accessible.

### D. Interactive CV
- **Design:** A clean, printable web view of professional history.
- **Highlights:** Education (CS Degree), Certifications (Security+, Network+), and Key Skills (Ethereum, TypeScript, Python).
- **Action:** A "Download PDF" button that triggers a clean print-styled layout.

### E. About Page
- **Content:** A narrative of the transition from CS graduate to developer. Mention interests in Philosophy (Nietzsche/Plato), Formula 1, and Marathon running to humanize the technical profile.
- **Music Integration:** A small "Currently Listening" widget (Spotify API integration optional, static is fine for MVP).

---

## 3. Technical Requirements
- **SEO:** Dynamic metadata for blog posts. OpenGraph images for social sharing.
- **Performance:** 95+ Lighthouse scores. Images must use `next/image`.
- **Navigation:** A sticky "Glassmorphic" navbar that blurs the background.
- **Deployment:** GitHub pages.

---

## 4. Content Structure
- `/content/projects/*.mdx` -> Project data
- `/content/blog/*.mdx` -> Blog posts
- `/public/resume.pdf` -> Static asset for CV