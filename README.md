<!-- ========================================================= -->

<!--        🚀 BASHANTA POKHAREL — FULL PROFILE README (Enhanced) -->

<!-- ========================================================= -->

<p align="center">
  <a href="https://bashanta-pokharel.github.io/Bashanta-Pokharel/" target="_blank">
    <img src="/assets/banner-animated.svg" alt="Bashanta Pokharel — Portfolio" style="max-width:100%; border-radius:14px; box-shadow:0 12px 50px rgba(2,6,23,0.6)"/>
  </a>
</p>

<h1 align="center">Hey there — I'm <strong>Bashanta Pokharel</strong> 👋</h1>
<p align="center"><em>Backend-focused Full Stack Engineer • API Design • Scalable Systems • Delightful Frontends</em></p>

<p align="center">
  <a href="https://github.com/Bashanta-Pokharel"><img src="https://img.shields.io/badge/GitHub-@Bashanta--Pokharel-181717?style=for-the-badge&logo=github" alt="GitHub"/></a>
  <a href="https://linkedin.com/in/bashanta-pokharel"><img src="https://img.shields.io/badge/LinkedIn-Bashanta%20Pokharel-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn"/></a>
  <a href="mailto:pbasanta340@gmail.com"><img src="https://img.shields.io/badge/Email-pbasanta340@gmail.com-EA4335?style=for-the-badge&logo=gmail" alt="Email"/></a>
  <a href="https://bashanta-pokharel.github.io/Bashanta-Pokharel/"><img src="https://img.shields.io/badge/Portfolio-Live-00C2CB?style=for-the-badge&logo=vercel" alt="Portfolio"/></a>
</p>

---

## 🎯 One-line summary
I build reliable backend systems and delightful frontends that scale—APIs, automation, and UX with a focus on readable code and good tests.

## 🔭 Current focus
- Building performant APIs, microservices, and background workers.
- Enhancing frontend UX using React + Tailwind + Framer Motion for subtle, accessible animations.
- CI/CD, automated testing, and production observability.

## 🏆 Highlights
- Designed and shipped multiple full-stack apps (Laravel, Node.js) with REST and GraphQL APIs.
- Built a static portfolio with animated analytics and a contributions "snake" visualization.
- Automated build & deploy to GitHub Pages using GitHub Actions.

---

## 🧭 Table of contents
- About
- Skills & Languages (interactive-style badges)
- Contributions (heatmap + table)
- Selected Projects (detailed)
- Live Portfolio (how it works)
- Local dev & build
- Contact & links
- Credits & license

---

## About
I'm a backend-focused full-stack engineer who likes to ship working software and make it feel polished. My work emphasizes:
- Robust API design
- Simple, maintainable code
- Fast iteration with good tests and CI

I enjoy improving developer experience and making UIs that feel responsive and alive using lightweight animations.

---

## Skills & Languages
Below is a snapshot of technologies frequently used. The progress "bars" are illustrative — update them as experience changes.

| Language / Tool | Proficiency |
|---|---:|
| PHP (Laravel) | ██████████ 90% |
| Node.js / Express | ████████ 80% |
| JavaScript (ES6+) | █████████ 85% |
| TypeScript | ███████ 70% |
| React + Tailwind | ███████ 75% |
| SQL (MySQL/Postgres) | ████████ 80% |
| Docker / CI | ███████ 70% |
| Redis / Caching | ██████ 60% |

<p align="center">
  <img src="https://skillicons.dev/icons?i=php,laravel,nodejs,js,ts,react,tailwind,html,css,git&perline=10" alt="skills"/>
</p>

---

## Contribution heatmap (visual)
<p align="center">
  <img src="https://ghchart.rshah.org/Bashanta-Pokharel" alt="Contributions" style="max-width:100%; height:auto;"/>
</p>

### Contribution table (summary)
This table is a snapshot summary of contribution activity. It is generated statically at build time by the portfolio fetch script. If values look out-of-date, run the `fetch-contributions` script in `portfolio/scripts` and rebuild.

| Year | Total commits (approx) | Active repos | Top languages |
|---:|---:|---:|---|
| 2026 | 420 | 8 | PHP, JavaScript, TypeScript |
| 2025 | 380 | 6 | PHP, JavaScript |
| 2024 | 310 | 5 | PHP, HTML/CSS |

> Note: The commits counts above are approximations pulled from the static contributions SVG at build time. For precise metrics, see GitHub Insights on specific repositories.

---

## Selected Projects (deep dive)

### 1) Portfolio — interactive static site
- Tech: Vite, React, Tailwind, Framer Motion
- Features: animated hero, stats cards, contribution snake, projects gallery, contact CTA
- Deploy: Built and published to GitHub Pages via Actions
- Repo: `portfolio/` folder in this repository

Key highlights:
- Contributions are fetched at build time into a JSON file so the site remains fully static and doesn't require a backend.
- Snake visualization animates past contributions in a playful way while remaining accessible.

---

### 2) E-Commerce Platform
- Tech: Laravel, MySQL, Redis cache
- Features: product catalog, shopping cart, admin panel, order processing, queued email notifications
- Lessons: Designed queue-backed billing flows and optimized DB indices for product discovery.

---

### 3) Job Finder
- Tech: PHP, MySQL
- Features: job posting, search filters, user accounts, resume upload
- Notes: Focused on pragmatic, secure upload handling and pagination for large result sets.

---

## Live portfolio — how it works (technical)
- The portfolio is a static SPA built with Vite. It includes a prebuild step that fetches the GitHub contributions SVG and parses it into JSON (scripts/fetch-contributions.js).
- The JSON is included in the final build so the site can animate contributions without runtime calls to GitHub.
- Animations use Framer Motion for smooth entrance/exit transitions and micro-interactions.
- Deployed via a GitHub Actions workflow that runs on push to `main` and publishes the `portfolio/dist` directory to `gh-pages`.

---

## Local development
If you'd like to run the portfolio locally:

```bash
# change into the portfolio folder
cd portfolio
# install deps
npm install
# fetch contributions (creates public/contributions.json)
npm run fetch:contrib
# start dev server
npm run dev
```

Build for production:

```bash
npm run build
# locally preview the build
npm run preview
```

---

## Visual & animation notes (README-friendly)
This README aims to be visually rich without requiring client-side JS in GitHub rendering. For the live portfolio (hosted site), the experience includes:
- Animated hero banner and cards (Framer Motion)
- Staggered entrance for project cards
- Hover micro-interactions and accessible focus styles
- Contribution snake animation that plays on page load and can be paused for accessibility

If you'd like an animated GIF preview embedded here, provide a short screen recording and it can be added to the README for an animated preview.

---

## Languages used (detailed)
A breakdown of language usage across projects in this repo and related work (indicative):

- PHP — Backend, APIs, Laravel apps
- JavaScript — Frontend interactivity, build tooling
- TypeScript — Typed frontend modules and server-side utilities
- SQL — Data modeling and queries (MySQL/Postgres)
- HTML/CSS — Markup and styling, responsive layouts

---

## Accessibility & performance
- Animations avoid layout thrashing and favor transform/opacity for GPU-accelerated motion.
- Color contrasts checked for readability; interactive elements include focus outlines for keyboard users.
- The site is built static-first for fast cold-start and easy CDN caching.

---

## How you can help / contribute
- Open issues for improvements or typos in the portfolio UI.
- Send PRs that improve accessibility, add new projects, or optimize assets.
- If you want your project featured, open an issue with a short description and link.

---

## Contact & hiring
<p align="center">
  <a href="mailto:pbasanta340@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail" /></a>
  <a href="https://linkedin.com/in/bashanta-pokharel"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" /></a>
</p>

Prefer email for collaboration or hiring queries.

---

## Small print
- Repo contains a `portfolio/` directory with the static site source.
- Contributions visualization is generated at build time — no backend required.

---

<footer align="center">
  <sub>Made with ❤️ by <strong>Bashanta Pokharel</strong></sub>
</footer>

<!-- End of README -->

