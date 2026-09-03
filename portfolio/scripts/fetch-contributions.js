// Fetch GitHub contributions SVG for a user and write a JSON file to public/contributions.json
// Usage: node scripts/fetch-contributions.js

const fs = require('fs')
const path = require('path')

const __dirname = path.resolve()

const username = process.env.GH_USER || 'Bashanta-Pokharel'
const outPath = path.join(__dirname, 'public')
const outFile = path.join(outPath, 'contributions.json')

async function fetchSvg() {
  const url = `https://github.com/users/${username}/contributions`
  console.log('Fetching contributions from', url)
  const res = await fetch(url, { headers: { 'User-Agent': 'portfolio-scaffold' } })
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return await res.text()
}

function parseSvg(svg) {
  // Find rects with data-date and data-count
  const rectRe = /<rect[^>]*data-date="([^"]+)"[^>]*data-count="(\d+)"[^>]*>/g
  const matches = [...svg.matchAll(rectRe)]
  const items = matches.map(m => ({ date: m[1], count: Number(m[2]) }))
  return items
}

async function main() {
  try {
    const svg = await fetchSvg()
    const items = parseSvg(svg)
    if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true })
    fs.writeFileSync(outFile, JSON.stringify({ username, items }, null, 2))
    console.log('Wrote', outFile, 'with', items.length, 'items')
  } catch (err) {
    console.error('Error fetching contributions:', err.message)
    // Write a small fallback so build won't fail
    if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true })
    const sample = { username, items: [] }
    fs.writeFileSync(outFile, JSON.stringify(sample, null, 2))
    console.log('Wrote fallback', outFile)
  }
}

main()
