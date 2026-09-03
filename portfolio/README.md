Portfolio frontend scaffold (Vite + React + Tailwind + Framer Motion)

Quick start:

1. cd portfolio
2. npm install
3. npm run dev

Build for production (prebuild fetches GitHub contributions):

1. npm run build
o
Notes:
- The build step runs scripts/fetch-contributions.js which fetches your public GitHub contributions SVG and writes public/contributions.json. This keeps the site fully static — no backend needed.
- To override username, set GH_USER env var when building (e.g. GH_USER=Bashanta-Pokharel npm run build).
- To deploy: GitHub Pages, Netlify, or Vercel serve the static output.
